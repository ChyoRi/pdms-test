// src/components/InWorkHour.tsx
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseconfig";

/** ───────── Types ───────── */
type MonthlyStat = { rate: number; count: number };
type DesignerRow = {
  name: string;
  wait: number;
  progress: number;
  done: number;
  usedHours: number;
  monthly: MonthlyStat[]; // 12개
};

type RequestDoc = {
  id: string;
  assigned_designer?: string;
  status?: string;
  in_work_hour?: number;
  // 날짜 필드(서로 다른 스키마 대비)
  request_date?: any;
  open_date?: any;
  created_date?: any;
};

/** ───────── Utilities ───────── */
const months = [
  "1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월",
];

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

// 상태 버킷
const isWait = (s?: string) => s === "대기" || s === "대기중";
const isDone = (s?: string) => s === "완료";
const isProgress = (s?: string) =>
  s === "진행중" || s === "검수중" || s === "검수요청";

// 월 목표 공수(고정 160h)
const MONTHLY_TARGET_HOURS = 160;

// ★ 추가: 소수점 n자리 "버림(끊기)" 유틸 (부동소수 보정 포함)
const floorTo = (n: number, digits = 2) => {
  const p = Math.pow(10, digits);
  // 작은 epsilon을 더해 0.43000000000006 같은 경우도 안정적으로 처리
  return Math.sign(n) * Math.floor(Math.abs(n) * p + 1e-9) / p;
};

// ★ 추가: 출력용(최대 2자리, 불필요한 0 제거)
const formatMax2 = (n: number) => {
  // 두 자리로 고정한 뒤, 끝의 0과 점을 정리 -> "0.40" → "0.4", "1.00" → "1"
  return n.toFixed(2).replace(/\.?0+$/,"");
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
  const day = toMidnight(targetDate ?? new Date());
  const year = day.getFullYear();

  // 실시간 디자인요청 문서 구독
  useEffect(() => {
    const qRef = query(collection(db, "design_request"));
    const unSub = onSnapshot(qRef, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setDocs(list);
    });
    return () => unSub();
  }, []);

  // 디자이너별 집계
  const rows: DesignerRow[] = useMemo(() => {
    // 디자이너 유니크 추출 (빈값/미배정 제외)
    const designers = Array.from(
      new Set(
        docs
          .map((d) => (d.assigned_designer || "").trim())
          .filter((n) => n.length > 0 && n !== "미배정")
      )
    ).sort((a, b) => a.localeCompare(b, "ko"));

    return designers.map((name) => {
      const mine = docs.filter((d) => d.assigned_designer === name);

      // ✅ 해당 "일" 기준 문서(요청일 계열 기준)
      const dayDocs = mine.filter((d) => sameDay(anchorDate(d), day));

      // 상태 카운트(해당 일 기준 문서의 현재 status로 카운트)
      const wait = dayDocs.filter((d) => isWait(d.status)).length;
      const progress = dayDocs.filter((d) => isProgress(d.status)).length;
      const done = dayDocs.filter((d) => isDone(d.status)).length;

      // ✅ 사용공수: 상태와 무관하게 해당 일 문서들의 in_work_hour 합산
      const usedHoursRaw = dayDocs.reduce(
        (s, d) => s + (Number(d.in_work_hour) || 0),
        0
      );
      const usedHours = floorTo(usedHoursRaw, 2); // ★ 변경: 둘째 자리 버림(끊기)

      // ✅ 월별: rate(공수율) + count(요청건수) — 전부 anchorDate 기준
      const monthly: MonthlyStat[] = Array.from({ length: 12 }, (_, m) => {
        // 공수율 = (해당 월 in_work_hour 합 / 160) × 100
        const monthHours = mine
          .filter((d) => {
            const dt = anchorDate(d);
            return dt && dt.getFullYear() === year && dt.getMonth() === m;
          })
          .reduce((s, d) => s + (Number(d.in_work_hour) || 0), 0);

        const rate = Math.round(
          (monthHours / MONTHLY_TARGET_HOURS) * 100
        );

        // 건수 = 해당 월 문서 개수(요청 기준)
        const count = mine.filter((d) => {
          const dt = anchorDate(d);
          return dt && dt.getFullYear() === year && dt.getMonth() === m;
        }).length;

        return { rate, count };
      });

      return { name, wait, progress, done, usedHours, monthly };
    });
  }, [docs, day, year]);

  // 연평균/연총건수 계산
  const computed = useMemo(() => {
    return rows.map((r, i) => {
      // 건수 있는 달만 활성 월로 간주
      const activeMonths = r.monthly.filter(m => m.count > 0);
      const avgRate = activeMonths.length
        ? activeMonths.reduce((s, m) => s + m.rate, 0) / activeMonths.length
        : 0;

      const totalCount = r.monthly.reduce((s, m) => s + m.count, 0);

      // 필요하면 activeMonths.length를 화면에 보여줄 수도 있음
      return { index: i + 1, avgRate, totalCount /*, denom: activeMonths.length*/ };
    });
  }, [rows]);

  if (rows.length === 0) {
    return <Empty>표시할 데이터가 없습니다.</Empty>;
  }

  return (
    <InWorkHourWrap>
      <InWorkHourTable>
        <colgroup>
          <col style={{ width: '50px' }} /><col style={{ width: '140px' }} />
          <col style={{ width: '70px' }} /><col style={{ width: '70px' }} />
          <col style={{ width: '70px' }} /><col style={{ width: '70px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '110px' }} />
        </colgroup>
        <thead>
          <tr>
            <InWorkHourTableTh rowSpan={2}>번호</InWorkHourTableTh>
            <InWorkHourTableTh rowSpan={2}>디자이너명</InWorkHourTableTh>
            <InWorkHourTableTh colSpan={4}>현재현황(일공수 : {dailyHours}h)</InWorkHourTableTh>
            <InWorkHourTableTh colSpan={12}>월별 진행현황(공수달성율 / 제작건수)</InWorkHourTableTh>
            <InWorkHourTableTh rowSpan={2}>연평균</InWorkHourTableTh>
          </tr>
          <tr>
            <InWorkHourTableTh>대기</InWorkHourTableTh>
            <InWorkHourTableTh>진행중</InWorkHourTableTh>
            <InWorkHourTableTh>완료</InWorkHourTableTh>
            <InWorkHourTableTh>사용공수(h)</InWorkHourTableTh>
            {months.map((m) => (
              <InWorkHourTableTh key={m}>{m}</InWorkHourTableTh>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r, idx) => {
            const { index, avgRate, totalCount } = computed[idx];
            return (
              <tr key={r.name + idx}>
                <InWorkHourTableTd>{index}</InWorkHourTableTd>
                <InWorkHourTableTd>{r.name}</InWorkHourTableTd>

                <InWorkHourTableTd>{r.wait}</InWorkHourTableTd>
                <InWorkHourTableTd>{r.progress}</InWorkHourTableTd>
                <InWorkHourTableTd>{r.done}</InWorkHourTableTd>
                {/* ★ 변경: 표시 시에도 최대 2자리까지만 보이도록 포맷 */}
                <InWorkHourTableTd>{formatMax2(r.usedHours)}</InWorkHourTableTd>

                {r.monthly.map((m, i) => (
                  <InWorkHourTableTd key={i}>
                    <div>{m.rate}%</div>
                    <div>{m.count}</div>
                  </InWorkHourTableTd>
                ))}

                <InWorkHourTableTd>
                  <div>{avgRate.toFixed(0)}%</div>
                  <div>{totalCount}</div>
                </InWorkHourTableTd>
              </tr>
            );
          })}
        </tbody>
      </InWorkHourTable>
    </InWorkHourWrap>
  );
}

/** ───────── styled ───────── */
const InWorkHourWrap = styled.div`
  padding: 0 48px;
  margin-top: 20px;
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
        th:nth-of-type(4) {
          border-right: 1px solid ${({ theme }) => theme.colors.black};
        }
      }
    }
  }


  th, td {
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const InWorkHourTableTh = styled.th`
  background-color: ${({ theme }) => theme.colors.gray08};
  font-weight: 700;

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right:none;
  }

  &:nth-of-type(n + 5):nth-of-type(-n + 16) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;

const InWorkHourTableTd = styled.td`
  text-align: center;
  font-weight: 500;

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
