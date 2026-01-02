import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";
import InWorkHourFilter from "./InWorkHourFilter";

/** ───────── Types ───────── */
type DailyStat = { rate: number; count: number };

type DesignerRow = {
  name: string;
  wait: number;
  progress: number;
  done: number;
  usedHours: number;
  daily: DailyStat[];   // 1~31일
  monthRate: number;    // 선택 월 공수달성율
  monthCount: number;   // 선택 월 총 건수
};

type RequestDoc = {
  id: string;
  assigned_designers?: string[];
  assigned_designer?: string;
  status?: string;
  in_work_hour?: number;
  company?: string;
  // 날짜 필드(서로 다른 스키마 대비)
  request_date?: any;
  open_date?: any;
  created_date?: any;
};

// 이름 끝 '.'(여러 개 포함)인 계정은 전부 제외
const isDummyByName = (name: string) => {
  const n = String(name ?? "").trim();
  return !!n && n.startsWith("★");
};

// DISPLAY_BLACKLIST는 "미배정"만 남기고, 점계정은 함수로 처리
const DISPLAY_BLACKLIST = new Set<string>(["미배정"]); // ★ 변경

const toMidnight = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

const sameDay = (a?: Date | null, b?: Date | null) =>
  !!a && !!b && a.getTime() === b.getTime();

// Firestore Timestamp | Date | number | string 대응
const parseLoose = (v: any): Date | null => {
  if (!v) return null;
  if (typeof v === "object" && typeof v.toDate === "function")
    return toMidnight(v.toDate());
  if (v instanceof Date) return toMidnight(v);
  if (typeof v === "number") return toMidnight(new Date(v));
  if (typeof v === "string") {
    const s = v.replace(/\./g, "-").replace(/\//g, "-");
    const p = s.split("-");
    if (p.length === 3) {
      const [y, m, d] = p.map(Number);
      const year = y > 31 ? y : new Date().getFullYear();
      return new Date(year, (m || 1) - 1, d || 1);
    }
    const dt = new Date(v);
    return isNaN(+dt) ? null : toMidnight(dt);
  }
  return null;
};

/**
 * ✅ 공수/건수/일일현황 **모두** 한 가지 기준 날짜로만 집계한다.
 * - 완료/시작/종료와 무관하게, 공수는 “대기부터” 누적되므로
 * - 요청이 실제로 올라온 시점(요청일 → open_date → created_date)을 기준으로 묶는다.
 */
const anchorDate = (r: RequestDoc): Date | null =>
  parseLoose(r.request_date) ??
  parseLoose((r as any).open_date) ??
  parseLoose((r as any).created_date);

// 해당 연/월의 실제 일수 구하기 (윤년 자동 반영)
const getDaysInMonth = (year: number, monthIndex: number) =>
  new Date(year, monthIndex + 1, 0).getDate();

// 상태 버킷
const isWait = (s?: string) => s === "대기" || s === "대기중";
const isDone = (s?: string) => s === "완료";
const isProgress = (s?: string) =>
  s === "진행중" ||
  s === "검수중" ||
  s === "검수요청" ||
  s === "수정"; 

// 디자이너 1명 월 목표 공수(고정 160h) 20.3 * 하루 8시간
const MONTHLY_TARGET_HOURS = 162;
// const WEEKLY_TARGET_HOURS = 40;

// 소수점 n자리 "버림(끊기)" 유틸 (부동소수 보정 포함)
const floorTo = (n: number, digits = 2) => {
  const p = Math.pow(10, digits);
  // 작은 epsilon을 더해 0.43000000000006 같은 경우도 안정적으로 처리
  return Math.sign(n) * Math.floor(Math.abs(n) * p + 1e-9) / p;
};

// 출력용(최대 2자리, 불필요한 0 제거)
const formatMax2 = (n: number) => {
  // 두 자리로 고정한 뒤, 끝의 0과 점을 정리 -> "0.40" → "0.4", "1.00" → "1"
  return n.toFixed(2).replace(/\.?0+$/,"");
};

// company 정규화
const normCompany = (c?: string): "nsmall" | "homeplus" | "other" => {
  const k = String(c ?? "").trim().replace(/\s+/g, "").toLowerCase();
  if (k === "nsmall" || k === "n-small") return "nsmall";
  if (k === "homeplus") return "homeplus";
  return "other";
};

/** ───────── Component ───────── */
export default function InWorkHour({
  dailyHours = 8,
  targetDate,
}: {
  /** 헤더 표시용 일공수 */
  dailyHours?: number;
  /** 현재현황 집계 기준일(기본: 오늘) */
  targetDate?: Date;
}) {
  const [docs, setDocs] = useState<RequestDoc[]>([]);
  const [designerNames, setDesignerNames] = useState<string[]>([]);

  // 기준일(오늘 또는 외부에서 넘긴 날짜)
  const day = toMidnight(targetDate ?? new Date());

  // 오늘(실제 오늘) 기준 – today 하이라이트용
  const todayMidnight = useMemo(() => toMidnight(new Date()), []);

  // 선택 연/월 상태
  const [selectedYear, setSelectedYear] = useState(day.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(day.getMonth()); // 0~11

  // 선택된 연/월의 실제 일수 (28, 29, 30, 31)
  const daysInSelectedMonth = useMemo(
    () => getDaysInMonth(selectedYear, selectedMonth),
    [selectedYear, selectedMonth]
  );

  // 선택 연/월의 각 날짜가 주말인지 여부 배열
  const weekendFlags = useMemo(
    () =>
      Array.from({ length: daysInSelectedMonth }, (_, i) => {
        const d = new Date(selectedYear, selectedMonth, i + 1);
        const dow = d.getDay(); // 0: 일요일, 6: 토요일
        return dow === 0 || dow === 6;
      }),
    [selectedYear, selectedMonth, daysInSelectedMonth]
  );

  // 선택 연/월의 각 날짜가 "오늘"인지 여부 배열
  const todayFlags = useMemo(() => {
    if (
      todayMidnight.getFullYear() !== selectedYear ||
      todayMidnight.getMonth() !== selectedMonth
    ) {
      return Array(daysInSelectedMonth).fill(false);
    }

    const todayIdx = todayMidnight.getDate() - 1; // 1일 → 0
    return Array.from({ length: daysInSelectedMonth }, (_, i) => i === todayIdx);
  }, [todayMidnight, selectedYear, selectedMonth, daysInSelectedMonth]);

  useEffect(() => {
    const qUsers = query(collection(db, "users"), where("role", "==", 2));
    const unSub = onSnapshot(qUsers, (snap) => {
      const names = snap.docs
        .map((d) => String((d.data() as any).name || "").trim())
        .filter(Boolean)
        .filter((n) => !isDummyByName(n));
      setDesignerNames(names);
    });
    return () => unSub();
  }, []);

  // 실시간 구독
  useEffect(() => {
    const qRef = query(collection(db, "design_request"));
    const unSub = onSnapshot(qRef, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setDocs(list);
    });
    return () => unSub();
  }, []);

  // 원본 배정 배열
  const getAssignees = (r: RequestDoc): string[] => {
    if (Array.isArray(r.assigned_designers) && r.assigned_designers.length)
      return r.assigned_designers.filter(Boolean).map((s) => s.trim());
    if (r.assigned_designer) return [String(r.assigned_designer).trim()];
    return [];
  };

  // company별 "실제 집계 대상" 계산
  const getEffectiveAssignees = (r: RequestDoc): string[] => {
    const raw = getAssignees(r).map((s) => s.trim()).filter(Boolean);

    // ★ 변경: 전역 제외자(미배정 + ★허수계정)를 선제적으로 제거
    const cleaned = raw.filter((n) => n !== "미배정" && !isDummyByName(n));

    const comp = normCompany(r.company);

    // 단일 배정이면 그대로
    if (cleaned.length <= 1) return cleaned;

    if (comp === "homeplus") {
      // HomePlus 동배정: 남은 사람들 균등 분배
      return cleaned;
    }

    // NSmall/기타: 그대로 반환
    return cleaned;
  };

  // 문서가 특정 디자이너에게 차지하는 내부공수 = in_work_hour ÷ (제외자 뺀 배정 인원)
  const shareHourFor = (r: RequestDoc, who: string): number => {
    const eff = getEffectiveAssignees(r);
    if (!eff.includes(who)) return 0;
    const base = Number(r.in_work_hour) || 0;
    const n = eff.length || 1;
    return base / n;
  };

  // 디자이너별 집계 (배정 배열 기반)
  const rows: DesignerRow[] = useMemo(() => {
    // 문서에서 나온 배정자도 ★허수계정은 제외해서 "행" 자체가 안 생기게
    const fromDocs = Array.from(
      new Set(
        docs
          .flatMap((d) => getAssignees(d))
          .filter((n) => n && n !== "미배정" && !isDummyByName(n))
      )
    );

    const designers = Array.from(new Set([...designerNames, ...fromDocs]))
      .filter((n) => n && !DISPLAY_BLACKLIST.has(n) && !isDummyByName(n))
      .sort((a, b) => a.localeCompare(b, "ko"));

    const targetYear = selectedYear;
    const targetMonth = selectedMonth;
    const daysInMonth = daysInSelectedMonth;

    return designers.map((name) => {
      const mine = docs.filter((d) => getEffectiveAssignees(d).includes(name));

      // 선택 연/월에 속하는 문서만 뽑아서 "월집계"에 사용
      const monthDocs = mine.filter((d) => {
        const dt = anchorDate(d);
        return dt && dt.getFullYear() === targetYear && dt.getMonth() === targetMonth;
      });

      // ✅ 기준일(당일)에 속하는 문서만 뽑아서 "현재 공수(h)"에 사용
      const dayDocs = mine.filter((d) => {
        const dt = anchorDate(d);
        return sameDay(dt, day);
      });

      // ✅ 대기 / 진행중은 전체 요청 기준
      const wait = mine.filter((d) => isWait(d.status)).length;
      const progress = mine.filter((d) => isProgress(d.status)).length;

      // ✅ 완료만 선택 월 기준
      const done = monthDocs.filter((d) => isDone(d.status)).length;

      // 공수(h)는 "기준일(당일)" 기준
      const usedHoursRaw = dayDocs.reduce((s, d) => s + shareHourFor(d, name), 0);
      const usedHours = floorTo(usedHoursRaw, 2);

      // 일별 / 월평균은 그대로 "선택 월" 기준
      const dailyHoursArr = Array(daysInMonth).fill(0);
      const dailyCountsArr = Array(daysInMonth).fill(0);

      monthDocs.forEach((d) => {
        const dt = anchorDate(d);
        if (!dt) return;
        const idx = dt.getDate() - 1;
        if (idx < 0 || idx >= daysInMonth) return;

        dailyHoursArr[idx] += shareHourFor(d, name);
        dailyCountsArr[idx] += 1;
      });

      const daily: DailyStat[] = dailyHoursArr.map((h, idx) => ({
        rate: Math.round((h / dailyHours) * 100),
        count: dailyCountsArr[idx],
      }));

      const monthHours = dailyHoursArr.reduce((s, h) => s + h, 0);
      const monthCount = dailyCountsArr.reduce((s, c) => s + c, 0);
      const monthRate =
        monthHours > 0 ? Math.round((monthHours / MONTHLY_TARGET_HOURS) * 100) : 0;

      return {
        name,
        wait,
        progress,
        done,
        usedHours,
        daily,
        monthRate,
        monthCount,
      };
    });
  }, [
    docs,
    designerNames,
    selectedYear,
    selectedMonth,
    dailyHours,
    daysInSelectedMonth,
    day,
  ]);

  if (rows.length === 0) {
    return <Empty>표시할 데이터가 없습니다.</Empty>;
  }

  return (
    <InWorkHourFrame>
      <InWorkHourFilter
        year={selectedYear}
        month={selectedMonth}
        onChangeYear={setSelectedYear}
        onChangeMonth={setSelectedMonth}
      />

      <InWorkHourWrap>
        <InWorkHourTable>
          {/* colgroup: 앞부분 폭만 고정, 일자는 해당 월 일수만큼 자동 분배 */}
          <colgroup>
            <col style={{ width: "3%" }} />   {/* 번호 */}
            <col style={{ width: "5%" }} />   {/* 디자이너명 */}
            <col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} />
            {Array.from({ length: daysInSelectedMonth }).map((_, i) => (
              <col key={i} />
            ))}
            <col style={{ width: "5%" }} />   {/* 월 평균 */}
          </colgroup>

          <thead>
            <tr>
              <InWorkHourTableTh rowSpan={2}>번호</InWorkHourTableTh>
              <InWorkHourTableTh rowSpan={2}>디자이너명</InWorkHourTableTh>
              <InWorkHourTableTh colSpan={4}>
                현재현황(일공수 : {dailyHours}h)
              </InWorkHourTableTh>
              <InWorkHourTableTh colSpan={daysInSelectedMonth}>
                일별 진행현황(공수달성율 / 제작건수)
              </InWorkHourTableTh>
              <InWorkHourTableTh rowSpan={2}>월 평균</InWorkHourTableTh>
            </tr>
            <tr>
              <InWorkHourTableTh>대기</InWorkHourTableTh>
              <InWorkHourTableTh>진행중</InWorkHourTableTh>
              <InWorkHourTableTh>완료</InWorkHourTableTh>
              <InWorkHourTableTh>일공수(h)</InWorkHourTableTh>
              {Array.from({ length: daysInSelectedMonth }).map((_, idx) => (
                <InWorkHourTableTh
                  key={idx}
                  $isPeriod
                  $isWeekend={weekendFlags[idx]}
                  $isToday={todayFlags[idx]}
                >
                  {idx + 1}
                </InWorkHourTableTh>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((r, idx) => (
              <tr key={r.name + idx}>
                <InWorkHourTableTd>{idx + 1}</InWorkHourTableTd>
                <InWorkHourTableTd>{r.name}</InWorkHourTableTd>

                <InWorkHourTableTd>{r.wait}</InWorkHourTableTd>
                <InWorkHourTableTd>{r.progress}</InWorkHourTableTd>
                <InWorkHourTableTd>{r.done}</InWorkHourTableTd>
                <InWorkHourTableTd>{formatMax2(r.usedHours)}</InWorkHourTableTd>

                {r.daily.map((d, i) => (
                  <InWorkHourTableTd
                    key={i}
                    $isWeekend={weekendFlags[i]}
                    $isToday={todayFlags[i]}
                  >
                    <div>{d.rate}%</div>
                    <div>{d.count}</div>
                  </InWorkHourTableTd>
                ))}

                <InWorkHourTableTd>
                  <div>{r.monthRate.toFixed(0)}%</div>
                  <div>{r.monthCount}</div>
                </InWorkHourTableTd>
              </tr>
            ))}
          </tbody>
        </InWorkHourTable>
      </InWorkHourWrap>
    </InWorkHourFrame>
  );
}

/** ───────── styled ───────── */
const InWorkHourFrame = styled.div`
  padding: 0 22px 24px;
  height: calc(100vh - 178px);
  overflow: hidden;
`;

const InWorkHourWrap = styled.div`
  height: 100%;
  overflow-y: auto;
  scrollbar-width: thin;
`;

const Empty = styled.div`
  padding: 24px;
  text-align: center;
  color: #666;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
`;

const InWorkHourTable = styled.table`
  width: 100%;
  table-layout: fixed;
  font-family: 'Pretendard';
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
          border-right: 1px solid ${({ theme }) => theme.colors.black};
        }
        th:nth-of-type(4) {
          background-color: ${({ theme }) => theme.colors.pink01};
        }
      }
      &:last-of-type {
        th:nth-of-type(1) {
          border-left: 1px solid ${({ theme }) => theme.colors.gray02};
        }
        th:nth-of-type(4) {
          border-right: 1px solid ${({ theme }) => theme.colors.black};
        }
      }
    }
  }
`;

// 주말 + 오늘 표시용
const InWorkHourTableTh = styled.th<{
  $isPeriod?: boolean;
  $isWeekend?: boolean;
  $isToday?: boolean;
}>`
  background-color: ${({ theme, $isPeriod, $isWeekend, $isToday }) => {
    if ($isToday) return "#cf67f769";          // 오늘
    if ($isWeekend) return "#fb828261";        // 토/일요일
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

const InWorkHourTableTd = styled.td<{
  $isWeekend?: boolean;
  $isToday?: boolean;
}>`
  text-align: center;
  font-weight: 500;
  background-color: ${({ $isWeekend, $isToday }) => {
    if ($isToday) return "#f1d0ff96";          // 오늘
    if ($isWeekend) return "#ffdfdf45";        // 토/일요일
    return "transparent";
  }};
  color: ${({ $isWeekend, $isToday }) => {
    if ($isToday) return "#000000";          // 오늘
    if ($isWeekend) return "#ffdfdf45";        // 토/일요일
    return "#000";
  }};
  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
  }

  &:nth-of-type(6) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;
