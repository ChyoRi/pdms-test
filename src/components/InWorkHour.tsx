// src/components/DesignerKPIReportTable.tsx
import { useMemo } from "react";
import styled from "styled-components";

type MonthlyStat = { rate: number; count: number };
type DesignerRow = {
  name: string;
  wait: number;
  progress: number;
  done: number;
  usedHours: number;
  monthly: MonthlyStat[]; // 12개
};

interface Props {
  dailyHours?: number;   // 헤더 표시(기본 8h)
  rows?: DesignerRow[];  // 주면 이 데이터로 렌더링
  demo?: boolean;        // true면 내부 샘플 데이터로 렌더링
}

const months = ["1월","2월","3월","4월","5월","6월","7월","8월","9월","10월","11월","12월"];

export default function InWorkHour({ dailyHours = 8, rows, demo = false }: Props) {
  // 내부 샘플(데모 모드)
  const sampleRows: DesignerRow[] = useMemo(() => (
    Array.from({ length: 4 }, () => ({
      name: "김아름",
      wait: 2,
      progress: 1,
      done: 4,
      usedHours: 4,
      monthly: months.map(() => ({ rate: 80, count: 123 }))
    }))
  ), []);

  const data = rows && rows.length > 0 ? rows : (demo ? sampleRows : []);

  const computed = useMemo(() => {
    return data.map((r, i) => {
      const avgRate = r.monthly.length
        ? r.monthly.reduce((s, m) => s + m.rate, 0) / r.monthly.length
        : 0;
      const totalCount = r.monthly.reduce((s, m) => s + m.count, 0);
      return { index: i + 1, avgRate, totalCount };
    });
  }, [data]);

  if (data.length === 0) {
    return <Empty>표시할 데이터가 없습니다.</Empty>;
  }

  return (
    <Wrap>
      <Table>
        <thead>
          <tr>
            <Th rowSpan={2} width={56}>no</Th>
            <Th rowSpan={2} width={140}>디자이너명</Th>
            <Th colSpan={4}>현재현황(일공수 : {dailyHours}h)</Th>
            <Th colSpan={12}>월별 진행현황(공수달성율 / 제작건수)</Th>
            <Th rowSpan={2} width={110}>연평균</Th>
          </tr>
          <tr>
            <Th width={70}>대기</Th>
            <Th width={80}>진행중</Th>
            <Th width={70}>완료</Th>
            <Th width={110}>사용공수(h)</Th>
            {months.map(m => <Th key={m} width={90}>{m}</Th>)}
          </tr>
        </thead>

        <tbody>
          {data.map((r, idx) => {
            const { index, avgRate, totalCount } = computed[idx];
            return (
              <tr key={r.name + idx}>
                <TdCenter>{index}</TdCenter>
                <TdCenter>{r.name}</TdCenter>

                <TdCenter>{r.wait}</TdCenter>
                <TdCenter>{r.progress}</TdCenter>
                <TdCenter>{r.done}</TdCenter>
                <TdCenter>{r.usedHours}</TdCenter>

                {r.monthly.map((m, i) => (
                  <TdTwoLines key={i}>
                    <div>{m.rate}%</div>
                    <div>{m.count}</div>
                  </TdTwoLines>
                ))}

                <TdTwoLines>
                  <div>{avgRate.toFixed(0)}%</div>
                  <div>{totalCount}</div>
                </TdTwoLines>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Wrap>
  );
}

// ───────────────── styled ─────────────────
const Wrap = styled.div`
  width: 100%;
  overflow: auto;
`;

const Empty = styled.div`
  padding: 24px;
  text-align: center;
  color: #666;
  border: 1px solid #e5e5e5;
  border-radius: 8px;
  background: #fafafa;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-family: 'Pretendard', system-ui, -apple-system, Segoe UI, Roboto, sans-serif;

  thead th {
    background: #f5f5f5;
    font-weight: 700;
  }

  th, td {
    border: 1px solid #111; /* 스샷처럼 진한 보더 */
    padding: 8px 10px;
    font-size: 14px;
  }
`;

const Th = styled.th<{ width?: number }>`
  text-align: center;
  ${({ width }) => (width ? `width:${width}px;` : "")}
`;

const TdCenter = styled.td`
  text-align: center;
`;

const TdTwoLines = styled.td`
  text-align: center;
  line-height: 1.1;
  & > div:first-child { font-weight: 700; } /* 위 줄: 퍼센트 */
`;
