// ChannelWorkHour.tsx
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  collection,
  onSnapshot,
  query,
  where,
  Timestamp,
} from "firebase/firestore";
import { db } from "../firebaseconfig";
import ChannelWorkHourFilter from "./ChannelWorkHourFilter";

/** ───────── Types (UI only) ───────── */
// ★ 변경: 퍼센트(rate) + "당일 out 합계(dayOut)"를 함께 표시 (주말/미래는 null)
type DailyStat = {
  rate: number | null;     // 누적 퍼센트
  dayOut: number | null;   // ★ 추가: 해당 request_date의 out_work_hour 합(누적X)
};

type ChannelRow = {
  channelKey: string; // companies doc id (예: homeplus, nsmall, ...)
  daily: DailyStat[]; // 1~31일
  monthRate: number;  // 우측 "월 누적" 퍼센트(오늘/표시컷오프 기준)
  monthOut: number;   // ★ 추가: 우측 "월 누적" out_work_hour 총합(KPI 총 사용공수)
};

type CompanyDoc = {
  id: string; // doc id
  display_name?: string;
  company_name?: string;

  // ★ 월 가용공수(분모)
  avail_hour?: number;
  available_hour?: number;
  work_hour?: number;
};

/** ───────── Utils ───────── */
const toMidnight = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

const getDaysInMonth = (year: number, monthIndex: number) =>
  new Date(year, monthIndex + 1, 0).getDate();

const addMonth = (year: number, monthIndex: number, delta: number) => {
  const base = year * 12 + monthIndex + delta;
  const nextYear = Math.floor(base / 12);
  const nextMonth = ((base % 12) + 12) % 12;
  return { year: nextYear, month: nextMonth };
};

const monthKey = (year: number, monthIndex: number) =>
  `${year}-${String(monthIndex + 1).padStart(2, "0")}`;

const round1 = (v: number) => Math.round(v * 10) / 10;
const round2 = (v: number) => Math.round(v * 100) / 100;

const normalizeKey = (v: any) =>
  String(v ?? "").replace(/\s+/g, "").toLowerCase();

const parseDate = (v: any): Date | null => {
  if (!v) return null;
  if (v instanceof Date) return v;
  if (v instanceof Timestamp) return v.toDate();
  if (typeof v?.toDate === "function") return v.toDate();
  if (typeof v === "string") {
    const d = new Date(v);
    return isNaN(d.getTime()) ? null : d;
  }
  return null;
};

const buildWeekendFlags = (year: number, monthIndex: number, daysIn: number) =>
  Array.from({ length: daysIn }, (_, i) => {
    const d = new Date(year, monthIndex, i + 1);
    const dow = d.getDay();
    return dow === 0 || dow === 6;
  });

// "미래 수치 표시 금지" 컷오프(오늘 기준)
const getCutoffDay = (year: number, monthIndex: number) => {
  const today = toMidnight(new Date());
  const todayMonthStart = new Date(today.getFullYear(), today.getMonth(), 1).getTime();
  const tableMonthStart = new Date(year, monthIndex, 1).getTime();

  if (tableMonthStart === todayMonthStart) return today.getDate();          // 이번달: 오늘까지
  if (tableMonthStart < todayMonthStart) return getDaysInMonth(year, monthIndex); // 과거달: 말일까지
  return 0; // 미래달: 전부 빈칸
};

// 이번달 "월 누적 퍼센트" 표시용(오늘이 주말이어도 직전 표시 가능한 퍼센트)
const getLastVisibleRate = (
  arr: Array<number | null> | undefined,
  cutoffDay: number
) => {
  if (!arr || cutoffDay <= 0) return 0;
  for (let i = cutoffDay - 1; i >= 0; i--) {
    const v = arr[i];
    if (typeof v === "number" && Number.isFinite(v)) return v;
  }
  return 0;
};

// request 문서에서 channelKey 추출
const getChannelKeyFromRequest = (data: any): string | null => {
  const v =
    data?.company ??
    data?.company_id ??
    data?.companyId ??
    data?.channel ??
    data?.channelKey ??
    data?.company_key;

  const k = normalizeKey(v);
  if (!k) return null;
  if (k === "n-small") return "nsmall";
  return k;
};

// 외부공수(out) 추출 - 신/구 구조 모두 지원
const getOutWorkHourFromRequest = (data: any): number => {
  const t = Number(data?.total_out_work_hour);
  if (!Number.isNaN(t) && t > 0) return t;

  const o = Number(data?.out_work_hour);
  if (!Number.isNaN(o) && o > 0) return o;

  const arr = Array.isArray(data?.assigned_designers) ? data.assigned_designers : [];
  const sum = arr.reduce((acc: number, it: any) => {
    const v = Number(it?.out_work_hour);
    return acc + (Number.isNaN(v) ? 0 : v);
  }, 0);

  return sum;
};

// ★ 추가: dayOutSum 배열에서 cutoffDay까지 out 총합(주말 포함, 미래 제외)
const sumOutUpTo = (arr: number[] | undefined, cutoffDay: number) => {
  if (!arr || cutoffDay <= 0) return 0;
  let s = 0;
  for (let i = 0; i < Math.min(arr.length, cutoffDay); i++) s += arr[i];
  return round2(s);
};

/** ───────── Component ───────── */
export default function ChannelWorkHour({ targetDate }: { targetDate?: Date }) {
  const day = toMidnight(targetDate ?? new Date());

  const [selectedYear, setSelectedYear] = useState(day.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(day.getMonth());

  /** companies 채널 목록 (pushcomz 제외) */
  const [channels, setChannels] = useState<CompanyDoc[]>([]);

  /** 채널별 월 가용공수(분모) 맵 */
  const [availMap, setAvailMap] = useState<Record<string, number>>({});

  /**
   * ★ 변경: 월별 통계
   * - dailyRate: 누적 퍼센트(주말 null)
   * - dayOutSum: "당일 out 합계"(누적X)
   */
  type MonthStats = Record<
    string,
    Record<
      string,
      {
        dailyRate: Array<number | null>;
        dayOutSum: number[];
        monthRate: number; // 월 전체 퍼센트(계산값)
        monthOut: number;  // 월 전체 out 합(계산값)
      }
    >
  >;
  const [monthStats, setMonthStats] = useState<MonthStats>({});

  useEffect(() => {
    const qRef = query(collection(db, "companies"));
    const unSub = onSnapshot(qRef, (snap) => {
      const list = snap.docs
        .map((d) => ({ id: d.id, ...(d.data() as any) }))
        .filter((c) => normalizeKey(c.id) !== "pushcomz");

      list.sort((a, b) => String(a.id).localeCompare(String(b.id), "ko"));
      setChannels(list);

      const nextAvail: Record<string, number> = {};
      list.forEach((c: any) => {
        const key = normalizeKey(c.id);
        const v =
          Number(c?.avail_hour) ||
          Number(c?.available_hour) ||
          Number(c?.work_hour) ||
          0;
        nextAvail[key] = Number.isNaN(v) ? 0 : v;
      });
      setAvailMap(nextAvail);
    });

    return () => unSub();
  }, []);

  /** 아래 테이블 = 다음 달 */
  const next = useMemo(
    () => addMonth(selectedYear, selectedMonth, 1),
    [selectedYear, selectedMonth]
  );

  /** 선택 월 + 다음 월 2개를 실시간 구독해서 monthStats 업데이트 */
  useEffect(() => {
    if (channels.length === 0) return;

    const unsubList: Array<() => void> = [];

    const subscribeMonth = (year: number, monthIndex: number) => {
      const start = new Date(year, monthIndex, 1, 0, 0, 0, 0);
      const end = new Date(year, monthIndex + 1, 1, 0, 0, 0, 0);
      const mKey = monthKey(year, monthIndex);
      const daysIn = getDaysInMonth(year, monthIndex);
      const weekendFlags = buildWeekendFlags(year, monthIndex, daysIn);

      const qRef = query(
        collection(db, "design_request"),
        where("request_date", ">=", start),
        where("request_date", "<", end)
      );

      const unSub = onSnapshot(qRef, (snap) => {
        // 채널별 day별 "당일 out 합계" (1~daysIn)
        const byChannelDayOut: Record<string, number[]> = {};
        // 채널별 월 total out
        const totalByChannel: Record<string, number> = {};

        channels.forEach((c) => {
          const k = normalizeKey(c.id);
          byChannelDayOut[k] = Array.from({ length: daysIn }, () => 0);
          totalByChannel[k] = 0;
        });

        snap.docs.forEach((docSnap) => {
          const data = docSnap.data() as any;

          // ★ 변경: 취소 여부로 제외하지 않음 (Dashboard KPI와 동일하게 "배정 유무"로만 필터)
          // if (String(data?.status || "") === "취소") return;

          const ck = getChannelKeyFromRequest(data);
          if (!ck) return;
          if (!byChannelDayOut[ck]) return;

          const rd = parseDate(data?.request_date);
          if (!rd) return;
          const d = rd.getDate();
          if (d < 1 || d > daysIn) return;

          const out = getOutWorkHourFromRequest(data);
          if (!out) return;

          // ★ 핵심: 해당 날짜 "당일 합계"로만 누적
          byChannelDayOut[ck][d - 1] += out;
          totalByChannel[ck] += out;
        });

        // 채널별 "누적 퍼센트"는 dayOut을 누적합한 값으로 계산
        const nextStatsForMonth: Record<
          string,
          { dailyRate: Array<number | null>; dayOutSum: number[]; monthRate: number; monthOut: number }
        > = {};

        channels.forEach((c) => {
          const ck = normalizeKey(c.id);
          const avail = Number(availMap?.[ck] ?? 0);

          // ★ 당일 out 합계 배열 (표시는 평일/컷오프에서만)
          const dayOutSum = byChannelDayOut[ck].map((v) => round2(v));

          // ★ 누적 퍼센트
          let cum = 0;
          const dailyRate: Array<number | null> = dayOutSum.map((daySum, idx) => {
            cum += daySum;

            if (weekendFlags[idx]) return null; // 주말 표시는 비움(누적에는 반영됨)
            if (!avail) return 0;

            return round1((cum / avail) * 100);
          });

          const monthOut = round2(totalByChannel[ck] || 0);
          const monthRate = !avail ? 0 : round1((monthOut / avail) * 100);

          nextStatsForMonth[ck] = { dailyRate, dayOutSum, monthRate, monthOut };
        });

        setMonthStats((prev) => ({
          ...prev,
          [mKey]: nextStatsForMonth,
        }));
      });

      unsubList.push(unSub);
    };

    subscribeMonth(selectedYear, selectedMonth);
    subscribeMonth(next.year, next.month);

    return () => unsubList.forEach((fn) => fn());
  }, [channels, availMap, selectedYear, selectedMonth, next.year, next.month]);

  /** 월별 UI 계산 */
  const buildMonthUI = (
    year: number,
    monthIndex: number,
    statForMonth?: Record<
      string,
      { dailyRate: Array<number | null>; dayOutSum: number[]; monthRate: number; monthOut: number }
    >
  ) => {
    const daysIn = getDaysInMonth(year, monthIndex);
    const todayMidnight = toMidnight(new Date());

    const weekendFlags = buildWeekendFlags(year, monthIndex, daysIn);
    const cutoffDay = getCutoffDay(year, monthIndex); // 0~daysIn

    const todayFlags = (() => {
      if (
        todayMidnight.getFullYear() !== year ||
        todayMidnight.getMonth() !== monthIndex
      ) {
        return Array(daysIn).fill(false);
      }
      const idx = todayMidnight.getDate() - 1;
      return Array.from({ length: daysIn }, (_, i) => i === idx);
    })();

    const rows: ChannelRow[] = channels.map((c) => {
      const ck = normalizeKey(c.id);
      const stat = statForMonth?.[ck];

      // ★ 일자 셀:
      // - 위: 누적 퍼센트
      // - 아래: "당일 out 합계"(누적 X)
      // - 주말/미래: 빈칸
      const daily: DailyStat[] = Array.from({ length: daysIn }, (_, i) => {
        const dayNum = i + 1;

        if (dayNum > cutoffDay) return { rate: null, dayOut: null }; // 미래 차단
        if (weekendFlags[i]) return { rate: null, dayOut: null };    // 주말 비움

        return {
          rate: stat?.dailyRate?.[i] ?? 0,
          dayOut: stat?.dayOutSum?.[i] ?? 0,
        };
      });

      // ★ 우측 "월 누적"
      // - 퍼센트: 이번달은 cutoff 기준(직전 표시 가능한 퍼센트), 과거달은 월 전체
      // - out 합: 이번달/과거달 모두 cutoff 기준 합(미래 포함 금지) -> KPI 총 사용공수(오늘까지)
      const todayMonthStart = new Date(
        todayMidnight.getFullYear(),
        todayMidnight.getMonth(),
        1
      ).getTime();
      const tableMonthStart = new Date(year, monthIndex, 1).getTime();

      let monthRate = 0;
      if (cutoffDay === 0) {
        monthRate = 0;
      } else if (tableMonthStart === todayMonthStart) {
        monthRate = getLastVisibleRate(stat?.dailyRate, cutoffDay);
      } else {
        monthRate = stat?.monthRate ?? 0;
      }

      // ★ 핵심: 월 누적 out(아래 숫자)은 "해당 월 out_work_hour 총합" (오늘까지)
      const monthOut = sumOutUpTo(stat?.dayOutSum, cutoffDay);

      return {
        channelKey: c.id,
        daily,
        monthRate,
        monthOut,
      };
    });

    return { daysIn, weekendFlags, todayFlags, rows };
  };

  const m1Key = useMemo(
    () => monthKey(selectedYear, selectedMonth),
    [selectedYear, selectedMonth]
  );
  const m2Key = useMemo(
    () => monthKey(next.year, next.month),
    [next.year, next.month]
  );

  const m1 = useMemo(
    () => buildMonthUI(selectedYear, selectedMonth, monthStats[m1Key]),
    [channels, selectedYear, selectedMonth, monthStats, m1Key]
  );

  const m2 = useMemo(
    () => buildMonthUI(next.year, next.month, monthStats[m2Key]),
    [channels, next.year, next.month, monthStats, m2Key]
  );

  if (channels.length === 0) {
    return <Empty>표시할 채널이 없습니다.</Empty>;
  }

  /** 공통 테이블 블록 */
  const TableBlock = ({
    titleYear,
    titleMonthIndex,
    daysIn,
    weekendFlags,
    todayFlags,
    rows,
  }: {
    titleYear: number;
    titleMonthIndex: number; // 0~11
    daysIn: number;
    weekendFlags: boolean[];
    todayFlags: boolean[];
    rows: ChannelRow[];
  }) => {
    return (
      <TableSection>
        <TableSectionTitle>
          {titleYear}년 {titleMonthIndex + 1}월
        </TableSectionTitle>

        <ChannelWorkHourTable>
          <colgroup>
            <col style={{ width: "3%" }} />
            <col style={{ width: "8%" }} />
            {Array.from({ length: daysIn }).map((_, i) => (
              <col key={i} />
            ))}
            <col style={{ width: "6%" }} /> {/* 월 누적 */}
          </colgroup>

          <thead>
            <tr>
              <ChannelWorkHourTableTh rowSpan={2}>번호</ChannelWorkHourTableTh>
              <ChannelWorkHourTableTh rowSpan={2}>채널</ChannelWorkHourTableTh>

              <ChannelWorkHourTableTh colSpan={daysIn}>
                일별 진행현황(공수달성율)
              </ChannelWorkHourTableTh>

              <ChannelWorkHourTableTh rowSpan={2}>월 누적</ChannelWorkHourTableTh>
            </tr>

            <tr>
              {Array.from({ length: daysIn }).map((_, idx) => (
                <ChannelWorkHourTableTh
                  key={idx}
                  $isPeriod
                  $isWeekend={weekendFlags[idx]}
                  $isToday={todayFlags[idx]}
                >
                  {idx + 1}
                </ChannelWorkHourTableTh>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((r, idx) => (
              <tr key={`${titleYear}-${titleMonthIndex}-${r.channelKey}`}>
                <ChannelWorkHourTableTd>{idx + 1}</ChannelWorkHourTableTd>
                <ChannelWorkHourTableTd>{r.channelKey}</ChannelWorkHourTableTd>

                {r.daily.map((d, i) => (
                  <ChannelWorkHourTableTd
                    key={i}
                    $isWeekend={weekendFlags[i]}
                    $isToday={todayFlags[i]}
                  >
                    {d.rate === null ? (
                      ""
                    ) : (
                      <CellStack>
                        <CellTop>{Number(d.rate).toFixed(1)}%</CellTop>
                        {/* ★ 핵심: "당일 out 합계" (누적 아님) */}
                        <CellBottom>{Number(d.dayOut ?? 0).toFixed(2)}</CellBottom>
                      </CellStack>
                    )}
                  </ChannelWorkHourTableTd>
                ))}

                <ChannelWorkHourTableTd>
                  <CellStack>
                    <CellTop>{Number(r.monthRate).toFixed(1)}%</CellTop>
                    {/* ★ 핵심: "월 out 총합(오늘까지)" */}
                    <CellBottom>{Number(r.monthOut).toFixed(2)}</CellBottom>
                  </CellStack>
                </ChannelWorkHourTableTd>
              </tr>
            ))}
          </tbody>
        </ChannelWorkHourTable>
      </TableSection>
    );
  };

  return (
    <ChannelWorkHourFrame>
      <ChannelWorkHourFilter
        year={selectedYear}
        month={selectedMonth}
        onChangeYear={setSelectedYear}
        onChangeMonth={setSelectedMonth}
      />

      <ChannelWorkHourWrap>
        {/* 위: 선택 월 */}
        <TableBlock
          titleYear={selectedYear}
          titleMonthIndex={selectedMonth}
          daysIn={m1.daysIn}
          weekendFlags={m1.weekendFlags}
          todayFlags={m1.todayFlags}
          rows={m1.rows}
        />

        {/* 아래: 다음 월 */}
        <TableBlock
          titleYear={next.year}
          titleMonthIndex={next.month}
          daysIn={m2.daysIn}
          weekendFlags={m2.weekendFlags}
          todayFlags={m2.todayFlags}
          rows={m2.rows}
        />
      </ChannelWorkHourWrap>
    </ChannelWorkHourFrame>
  );
}

/** ───────── styled ───────── */
const ChannelWorkHourFrame = styled.div`
  padding: 0 22px 24px;
  height: calc(100vh - 178px);
  overflow: hidden;
`;

const ChannelWorkHourWrap = styled.div`
  height: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const TableSection = styled.section`
  margin-bottom: 24px;
`;

const TableSectionTitle = styled.div`
  padding: 6px 0 10px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const Empty = styled.div`
  padding: 24px;
  text-align: center;
  color: #666;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
`;

const ChannelWorkHourTable = styled.table`
  width: 100%;
  table-layout: fixed;
  font-family: "Pretendard";
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray02};

  th,
  td {
    padding: 8px 0;
    font-size: 14px;
    border-right: none;
    border-bottom: none;
    vertical-align: middle;
  }

  thead {
    tr {
      &:first-of-type {
        th:nth-of-type(3) {
          background-color: ${({ theme }) => theme.colors.pink01};
        }
      }
      &:last-of-type {
        th:nth-of-type(1) {
          border-left: 1px solid ${({ theme }) => theme.colors.gray02};
        }
      }
    }
  }
`;

const ChannelWorkHourTableTh = styled.th<{
  $isPeriod?: boolean;
  $isWeekend?: boolean;
  $isToday?: boolean;
}>`
  background-color: ${({ theme, $isPeriod, $isWeekend, $isToday }) => {
    if ($isToday) return "#cf67f769";
    if ($isWeekend) return "#fb828261";
    return $isPeriod ? theme.colors.pink01 : theme.colors.gray08;
  }};
  font-weight: 700;
  white-space: nowrap;

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
  }
`;

const ChannelWorkHourTableTd = styled.td<{
  $isWeekend?: boolean;
  $isToday?: boolean;
}>`
  text-align: center;
  font-weight: 500;
  background-color: ${({ $isWeekend, $isToday }) => {
    if ($isToday) return "#f1d0ff96";
    if ($isWeekend) return "#ffdfdf45";
    return "transparent";
  }};
  color: ${({ $isToday }) => {
    if ($isToday) return "#000000";
    return "#000";
  }};

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
  }
`;

/** 셀 2줄(퍼센트 위 / 당일 out 합계 아래) */
const CellStack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  line-height: 1.1;
  gap: 4px;
`;

const CellTop = styled.div`
  font-size: 14px;
  font-weight: 700;
`;

const CellBottom = styled.div`
  font-size: 12px;
  font-weight: 600;
  color: #444;
`;