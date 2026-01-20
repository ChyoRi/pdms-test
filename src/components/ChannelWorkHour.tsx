// ChannelWorkHour.tsx
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import {
  collection,
  onSnapshot,
  query,
  where, // ★ 추가
  Timestamp, // ★ 추가
} from "firebase/firestore";
import { db } from "../firebaseconfig";
import ChannelWorkHourFilter from "./ChannelWorkHourFilter";

/** ───────── Types (UI only) ───────── */
// ★ 변경: 주말/미래 날짜는 "값을 넣지마" => null 허용
type DailyStat = { rate: number | null };

type ChannelRow = {
  channelKey: string; // companies doc id (예: homeplus, nsmall, ...)
  daily: DailyStat[]; // 1~31일
  monthRate: number; // 우측 "월 누적" (오늘/표시컷오프 기준)
};

type CompanyDoc = {
  id: string; // doc id
  display_name?: string;
  company_name?: string;

  // ★ 추가: 월 가용공수(분모)
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

// ★ 추가: month key
const monthKey = (year: number, monthIndex: number) =>
  `${year}-${String(monthIndex + 1).padStart(2, "0")}`;

// ★ 추가: 소수 1자리 반올림
const round1 = (v: number) => Math.round(v * 10) / 10;

// ★ 추가: KPI와 동일한 키 정규화(공백 제거 + 소문자)
const normalizeKey = (v: any) =>
  String(v ?? "").replace(/\s+/g, "").toLowerCase();

// ★ 추가: Firestore 날짜 파서
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

// ★ 추가: 월 기준 주말 플래그
const buildWeekendFlags = (year: number, monthIndex: number, daysIn: number) =>
  Array.from({ length: daysIn }, (_, i) => {
    const d = new Date(year, monthIndex, i + 1);
    const dow = d.getDay();
    return dow === 0 || dow === 6;
  });

// ★ 추가: "미래 수치 표시 금지" 컷오프(오늘 기준)
// - 같은 달: 오늘까지
// - 과거 달: 말일까지
// - 미래 달: 0(전부 빈칸)
const getCutoffDay = (year: number, monthIndex: number) => {
  const today = toMidnight(new Date());
  const todayMonthStart = new Date(today.getFullYear(), today.getMonth(), 1).getTime();
  const tableMonthStart = new Date(year, monthIndex, 1).getTime();

  if (tableMonthStart === todayMonthStart) return today.getDate();
  if (tableMonthStart < todayMonthStart) return getDaysInMonth(year, monthIndex);
  return 0;
};

// ★ 추가: cutoffDay(오늘) 자체가 주말이면, 직전 "표시 가능한(평일) 값"으로 월 누적 보정
const getLastVisibleRate = (arr: Array<number | null> | undefined, cutoffDay: number) => {
  if (!arr || cutoffDay <= 0) return 0;
  for (let i = cutoffDay - 1; i >= 0; i--) {
    const v = arr[i];
    if (typeof v === "number" && Number.isFinite(v)) return v;
  }
  return 0;
};

// ★ 추가: request 문서에서 channelKey 추출(회사 필드 우선)
const getChannelKeyFromRequest = (data: any): string | null => {
  const v =
    data?.company ?? // ★ KPI와 동일하게 company 우선
    data?.company_id ??
    data?.companyId ??
    data?.channel ??
    data?.channelKey ??
    data?.company_key;

  const k = normalizeKey(v);
  if (!k) return null;

  // n-small 같은 표기 통일
  if (k === "n-small") return "nsmall";
  return k;
};

// ★ 추가: 외부공수(out) 추출 - 신/구 구조 모두 지원
const getOutWorkHourFromRequest = (data: any): number => {
  // 1) 최신 구조: total_out_work_hour
  const t = Number(data?.total_out_work_hour);
  if (!Number.isNaN(t) && t > 0) return t;

  // 2) 구 구조: out_work_hour
  const o = Number(data?.out_work_hour);
  if (!Number.isNaN(o) && o > 0) return o;

  // 3) 배열 기반: assigned_designers[].out_work_hour 합산
  const arr = Array.isArray(data?.assigned_designers) ? data.assigned_designers : [];
  const sum = arr.reduce((acc: number, it: any) => {
    const v = Number(it?.out_work_hour);
    return acc + (Number.isNaN(v) ? 0 : v);
  }, 0);

  return sum;
};

/** ───────── Component ───────── */
export default function ChannelWorkHour({ targetDate }: { targetDate?: Date }) {
  const day = toMidnight(targetDate ?? new Date());

  const [selectedYear, setSelectedYear] = useState(day.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(day.getMonth());

  /** companies 채널 목록 (pushcomz 제외) */
  const [channels, setChannels] = useState<CompanyDoc[]>([]);

  // ★ 추가: 채널별 월 가용공수(분모) 맵
  const [availMap, setAvailMap] = useState<Record<string, number>>({});

  // ★ 추가: 월별 통계(채널별 누적 퍼센트 배열)
  type MonthStats = Record<
    string,
    Record<
      string,
      {
        dailyRate: Array<number | null>; // ★ 변경: 주말/미래 표시는 null 가능
        monthRate: number; // total/avail *100 (계산값)
      }
    >
  >;
  const [monthStats, setMonthStats] = useState<MonthStats>({});

  useEffect(() => {
    const qRef = query(collection(db, "companies"));
    const unSub = onSnapshot(qRef, (snap) => {
      const list = snap.docs
        .map((d) => ({ id: d.id, ...(d.data() as any) }))
        .filter((c) => normalizeKey(c.id) !== "pushcomz"); // ★ pushcomz 제외

      list.sort((a, b) => String(a.id).localeCompare(String(b.id), "ko"));
      setChannels(list);

      // ★ 추가: 가용공수 맵 생성
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

  // ★ 선택 월 + 다음 월 2개를 실시간 구독해서 monthStats 업데이트
  useEffect(() => {
    if (channels.length === 0) return;

    const unsubList: Array<() => void> = [];

    const subscribeMonth = (year: number, monthIndex: number) => {
      const start = new Date(year, monthIndex, 1, 0, 0, 0, 0);
      const end = new Date(year, monthIndex + 1, 1, 0, 0, 0, 0);
      const mKey = monthKey(year, monthIndex);
      const daysIn = getDaysInMonth(year, monthIndex);
      const weekendFlags = buildWeekendFlags(year, monthIndex, daysIn);

      // ★ 변경: request_date 월 범위로만 쿼리 (채널 필터는 메모리에서 처리)
      const qRef = query(
        collection(db, "design_request"),
        where("request_date", ">=", start),
        where("request_date", "<", end)
      );

      const unSub = onSnapshot(qRef, (snap) => {
        // 채널별 day별 외부공수 합 (1~daysIn)
        const byChannelDay: Record<string, number[]> = {};
        const totalByChannel: Record<string, number> = {};

        channels.forEach((c) => {
          const k = normalizeKey(c.id);
          byChannelDay[k] = Array.from({ length: daysIn }, () => 0);
          totalByChannel[k] = 0;
        });

        snap.docs.forEach((docSnap) => {
          const data = docSnap.data() as any;

          // 취소 제외
          if (String(data?.status || "") === "취소") return;

          const ck = getChannelKeyFromRequest(data);
          if (!ck) return;
          if (!byChannelDay[ck]) return;

          const rd = parseDate(data?.request_date);
          if (!rd) return;
          const d = rd.getDate();
          if (d < 1 || d > daysIn) return;

          const out = getOutWorkHourFromRequest(data);
          if (!out) return;

          byChannelDay[ck][d - 1] += out;
          totalByChannel[ck] += out;
        });

        // 채널별 누적 퍼센트 계산(계산은 말일까지 만들어 둠)
        const nextStatsForMonth: Record<
          string,
          { dailyRate: Array<number | null>; monthRate: number }
        > = {};

        channels.forEach((c) => {
          const ck = normalizeKey(c.id);
          const avail = Number(availMap?.[ck] ?? 0);

          let cum = 0;
          const dailyRate: Array<number | null> = byChannelDay[ck].map((daySum, idx) => {
            cum += daySum;

            // ★ 유지: 주말은 표시값 null
            if (weekendFlags[idx]) return null;

            if (!avail) return 0;
            return round1((cum / avail) * 100);
          });

          const total = totalByChannel[ck] || 0;
          const mRate = !avail ? 0 : round1((total / avail) * 100);

          nextStatsForMonth[ck] = { dailyRate, monthRate: mRate };
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
    statForMonth?: Record<string, { dailyRate: Array<number | null>; monthRate: number }>
  ) => {
    const daysIn = getDaysInMonth(year, monthIndex);
    const todayMidnight = toMidnight(new Date());

    const weekendFlags = buildWeekendFlags(year, monthIndex, daysIn);

    // ★ 추가: 미래 날짜 표시 차단(오늘이면 오늘까지만)
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

      // ★ 변경: cutoffDay 이후는 무조건 null(빈칸), 주말도 null(빈칸)
      const daily: DailyStat[] = Array.from({ length: daysIn }, (_, i) => {
        const dayNum = i + 1;

        if (dayNum > cutoffDay) return { rate: null }; // ★ 추가: 미래 차단
        if (weekendFlags[i]) return { rate: null }; // ★ 유지: 주말은 빈칸

        return { rate: stat?.dailyRate?.[i] ?? 0 };
      });

      // ★ 변경: 우측 "월 누적"도 미래가 섞이지 않게 cutoffDay 기준으로 표시
      // - 미래월(cutoffDay=0): 0
      // - 이번달: cutoffDay까지의 "표시 가능한 마지막 값"(오늘이 주말이어도 직전 평일 값)
      // - 과거월: 기존 monthRate(월 전체)
      const todayMonthStart = new Date(todayMidnight.getFullYear(), todayMidnight.getMonth(), 1).getTime();
      const tableMonthStart = new Date(year, monthIndex, 1).getTime();

      let monthRate = 0;
      if (cutoffDay === 0) {
        monthRate = 0;
      } else if (tableMonthStart === todayMonthStart) {
        monthRate = getLastVisibleRate(stat?.dailyRate, cutoffDay);
      } else {
        monthRate = stat?.monthRate ?? 0;
      }

      return {
        channelKey: c.id,
        daily,
        monthRate,
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
    titleMonthIndex: number;
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
            <col style={{ width: "5%" }} />
          </colgroup>

          <thead>
            <tr>
              <ChannelWorkHourTableTh rowSpan={2}>번호</ChannelWorkHourTableTh>
              <ChannelWorkHourTableTh rowSpan={2}>채널</ChannelWorkHourTableTh>

              <ChannelWorkHourTableTh colSpan={daysIn}>
                일별 진행현황(공수달성율)
              </ChannelWorkHourTableTh>

              {/* ★ 변경: "월 평균" -> "월 누적" */}
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
                    {/* ★ 변경: null(주말/미래)은 빈칸 */}
                    {d.rate === null ? "" : `${Number(d.rate).toFixed(1)}%`}
                  </ChannelWorkHourTableTd>
                ))}

                <ChannelWorkHourTableTd>
                  {Number(r.monthRate).toFixed(1)}%
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