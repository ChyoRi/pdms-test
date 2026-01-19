// ChannelWorkHour.tsx
import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query } from "firebase/firestore";
import { db } from "../firebaseconfig";
import ChannelWorkHourFilter from "./ChannelWorkHourFilter";

/** ───────── Types (UI only) ───────── */
type DailyStat = { rate: number };

type ChannelRow = {
  channelKey: string; // companies doc id (예: homeplus, nsmall, ...)
  daily: DailyStat[]; // 1~31일
  monthRate: number;  // 월 평균(표시용)
};

type CompanyDoc = {
  id: string; // doc id
  display_name?: string;
  company_name?: string;
};

/** ───────── Utils ───────── */
const toMidnight = (d: Date) =>
  new Date(d.getFullYear(), d.getMonth(), d.getDate());

const getDaysInMonth = (year: number, monthIndex: number) =>
  new Date(year, monthIndex + 1, 0).getDate();

const addMonth = (year: number, monthIndex: number, delta: number) => {
  // monthIndex: 0~11
  const base = year * 12 + monthIndex + delta;
  const nextYear = Math.floor(base / 12);
  const nextMonth = ((base % 12) + 12) % 12;
  return { year: nextYear, month: nextMonth };
};

/** ───────── Component ───────── */
export default function ChannelWorkHour({
  targetDate,
}: {
  targetDate?: Date;
}) {
  const day = toMidnight(targetDate ?? new Date());

  const [selectedYear, setSelectedYear] = useState(day.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(day.getMonth());

  /** companies 채널 목록 (pushcomz 제외) */
  const [channels, setChannels] = useState<CompanyDoc[]>([]);

  useEffect(() => {
    const qRef = query(collection(db, "companies"));
    const unSub = onSnapshot(qRef, (snap) => {
      const list = snap.docs
        .map((d) => ({ id: d.id, ...(d.data() as any) }))
        .filter((c) => String(c.id).toLowerCase() !== "pushcomz"); // ★ pushcomz 제외

      list.sort((a, b) => String(a.id).localeCompare(String(b.id), "ko"));
      setChannels(list);
    });

    return () => unSub();
  }, []);

  /** 아래 테이블 = 다음 달 */
  const next = useMemo(
    () => addMonth(selectedYear, selectedMonth, 1),
    [selectedYear, selectedMonth]
  );

  /** 월별 UI 계산(오늘/주말 하이라이트는 각 테이블 월 기준) */
  const buildMonthUI = (year: number, monthIndex: number) => {
    const daysIn = getDaysInMonth(year, monthIndex);
    const todayMidnight = toMidnight(new Date());

    const weekendFlags = Array.from({ length: daysIn }, (_, i) => {
      const d = new Date(year, monthIndex, i + 1);
      const dow = d.getDay();
      return dow === 0 || dow === 6;
    });

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

    // UI 전용 rows (0으로 고정)
    const rows: ChannelRow[] = channels.map((c) => {
      const daily = Array.from({ length: daysIn }, () => ({ rate: 0 }));
      return { channelKey: c.id, daily, monthRate: 0 };
    });

    return { daysIn, weekendFlags, todayFlags, rows };
  };

  const m1 = useMemo(
    () => buildMonthUI(selectedYear, selectedMonth),
    [channels, selectedYear, selectedMonth]
  );

  const m2 = useMemo(
    () => buildMonthUI(next.year, next.month),
    [channels, next.year, next.month]
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
            <col style={{ width: "5%" }} />
          </colgroup>

          <thead>
            <tr>
              <ChannelWorkHourTableTh rowSpan={2}>번호</ChannelWorkHourTableTh>
              <ChannelWorkHourTableTh rowSpan={2}>채널</ChannelWorkHourTableTh>

              <ChannelWorkHourTableTh colSpan={daysIn}>
                일별 진행현황(공수달성율)
              </ChannelWorkHourTableTh>

              <ChannelWorkHourTableTh rowSpan={2}>월 평균</ChannelWorkHourTableTh>
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
                    {d.rate}%
                  </ChannelWorkHourTableTd>
                ))}

                <ChannelWorkHourTableTd>{r.monthRate.toFixed(0)}%</ChannelWorkHourTableTd>
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