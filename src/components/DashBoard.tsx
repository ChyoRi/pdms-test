import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth"; 
import selectBoxArrow from "../assets/selectbox-arrow.svg";

// Chart.js (React 바인딩 없음)
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

// 필수 등록
Chart.register(...registerables, ChartDataLabels);

type RD = RequestData;

// ───────── Logic helpers ─────────
const COLORS = ["#4e79a7","#59a14f","#9c755f","#edc949","#e15759","#76b7b2","#f28e2b","#af7aa1","#ff9da7","#bab0ab"];
const CAPACITY_BY_COMPANY = {
  homeplus: 704,
  nsmall: 812,
} as const;
const companyKey = (v: any) => String(v ?? "").replace(/\s+/g, "").toLowerCase();
const isHomeplus = (r: RD) => companyKey(r.company) === "homeplus";
const isNSmall   = (r: RD) => companyKey(r.company) === "nsmall" || companyKey(r.company) === "n-small";

function pickDateMillis(d: RD): number | null {
  const c = [d.request_date, d.open_date, d.created_date as any, d.designer_start_date, d.designer_end_date];
  for (const v of c) {
    if (!v) continue;
    // Firestore Timestamp 지원
    // @ts-ignore
    if (typeof v?.toDate === "function") return v.toDate().getTime();
    if (v instanceof Date) return v.getTime();
    const t = new Date(v).getTime();
    if (!Number.isNaN(t)) return t;
  }
  return null;
}
function sum(ns: number[]) { return ns.reduce((a,b)=>a+(+b||0),0); }
function groupCount(arr: (string|undefined)[]) {
  const m = new Map<string, number>();
  for (const k of arr) {
    const key = (k && k.trim()) || "기타";
    m.set(key, (m.get(key) || 0) + 1);
  }
  return Array.from(m, ([name, value]) => ({ name, value }));
}
function normalizeStatus(s?: string) {
  if (!s) return "대기";
  const t = s.replace(/\s/g,"");
  if (/(진행)/.test(t)) return "진행중";
  if (/(검수중)/.test(t)) return "검수중";
  if (/(검수요청)/.test(t)) return "검수요청";
  if (/(완료)/.test(t)) return "완료";
  if (/(취소|cancel)/i.test(t)) return "취소";
  if (/(대기)/.test(t)) return "대기";
  return s;
}
function topNWithOthers(items: {name:string; value:number}[], n=8) {
  if (items.length <= n) return items;
  const top = items.slice(0, n);
  const rest = items.slice(n);
  return [...top, { name: "기타", value: sum(rest.map(v=>v.value)) }];
}

interface Props {
  capacityHoursPerMonth?: number;              // 가용공수, 예: 704
}

export default function DashBoard({ capacityHoursPerMonth }: Props) {
  // 연/월 상태(단순 포맷)
  const now = new Date();
  const [ym, setYM] = useState({ y: now.getFullYear(), m: now.getMonth()+1 });
  const ymLabel = `${ym.y}.${String(ym.m).padStart(2,"0")}`;

  // 사용자 role/company
  const [userRole, setUserRole] = useState<number | null>(null);
  const [userCompany, setUserCompany] = useState<string>("");

  const [roleReady, setRoleReady] = useState(false);

  // 회사 토글
  const [companyMode, setCompanyMode] = useState<"homeplus" | "nsmall" | "all">("homeplus");

   // 로그인 사용자 프로필 로드 + 요청자면 기본 모드 잠금
  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) { 
        setUserRole(null);
        setUserCompany("");
        setRoleReady(true);        // ★ 추가: 로드 완료
        return;
      }
      const uref = doc(db, "users", user.uid);
      const usnap = await getDoc(uref);
      if (usnap.exists()) {
        const u = usnap.data() as any;
        setUserRole(Number(u?.role ?? 0));
        setUserCompany(String(u?.company ?? ""));
        const ck = companyKey(u?.company);
        if (Number(u?.role) === 1 && (ck === "homeplus" || ck === "nsmall" || ck === "n-small")) {
          setCompanyMode(ck.startsWith("n") ? "nsmall" : "homeplus");
        }
      }
      setRoleReady(true);          // ★ 추가: 로드 완료
    });
    return () => unsub();
  }, []);

  // 데이터 구독
  const [rows, setRows] = useState<RD[]>([]);
  useEffect(() => {
    const qRef = query(collection(db, "design_request"));
    const unsub = onSnapshot(qRef, (snap) => {
      const list: RD[] = [];
      snap.forEach(d => list.push({ id: d.id, ...(d.data() as any) }));
      setRows(list);
    });
    return () => unsub();
  }, []);

  // 월 범위 계산(자체)
  const range = useMemo(() => {
    const start = new Date(ym.y, ym.m - 1, 1).getTime();
    const end   = new Date(ym.y, ym.m, 0, 23, 59, 59, 999).getTime();
    return { start, end };
  }, [ym]);

  // ★ 추가: 요청자(role=1)일 때는 버튼 선택과 무관하게 강제 모드 적용
  const effectiveMode: "homeplus" | "nsmall" | "all" = useMemo(() => {
    if (userRole === 1) {
      const ck = companyKey(userCompany);
      return ck.startsWith("n") ? "nsmall" : "homeplus";
    }
    return companyMode;
  }, [userRole, userCompany, companyMode]);

  // 회사 + 월 필터 (회사 판별은 company 필드 기준)
  const monthRows = useMemo(() => {
    return rows.filter(r => {
      const ts = pickDateMillis(r);
      const inMonth = ts !== null && ts >= range.start && ts <= range.end;

      let inCompany = true;
      if (effectiveMode === "homeplus") {
        inCompany = isHomeplus(r);
      } else if (effectiveMode === "nsmall") {
        inCompany = isNSmall(r);
      } // "all" 은 true 그대로

      return inMonth && inCompany;
    });
  }, [rows, range, effectiveMode]);

  // KPI
  const totalRequests = monthRows.length;
  const producedCount = monthRows.filter(r => normalizeStatus(r.status) === "완료").length;
  const usedHours = sum(
    monthRows
      .map(r => Number(r.out_work_hour) || 0)
  );
  const availHours = useMemo(() => {
    if (effectiveMode === "all") {
      return CAPACITY_BY_COMPANY.homeplus + CAPACITY_BY_COMPANY.nsmall; // 704 + 812
    }
    if (effectiveMode === "homeplus") {
      // Homeplus만 prop를 허용(없으면 기본 704)
      return capacityHoursPerMonth ?? CAPACITY_BY_COMPANY.homeplus;
    }
    if (effectiveMode === "nsmall") {
      // NSmall은 812 고정
      return CAPACITY_BY_COMPANY.nsmall;
    }
    return 0;
  }, [effectiveMode, capacityHoursPerMonth]);
  const usedRatio = availHours ? Math.round((usedHours/availHours)*100) : 0;

  const usedHoursDisplay = usedHours.toLocaleString(undefined, {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  // 차트 데이터
  const taskTypeArr = useMemo(() => {
    const arr = groupCount(monthRows.map(r => r.task_type || r.task_type_detail)).sort((a,b)=>b.value-a.value);
    return topNWithOthers(arr, 8);
  }, [monthRows]);
  const statusArr = useMemo(() => {
    const order = ["대기중","진행중","검수중","검수요청중","완료","취소"];
    const counts = groupCount(monthRows.map(r => normalizeStatus(r.status)));
    const map = new Map(counts.map(v => [v.name, v.value]));
    return order.map(n => ({ name:n, value: map.get(n) || 0 }));
  }, [monthRows]);
  const formArr = useMemo(() => {
    return groupCount(monthRows.map(r => r.task_form)).sort((a,b)=>b.value-a.value);
  }, [monthRows]);

  // 캔버스/차트 인스턴스
  const doughnutRef = useRef<HTMLCanvasElement | null>(null);
  const barStatusRef = useRef<HTMLCanvasElement | null>(null);
  const barFormRef = useRef<HTMLCanvasElement | null>(null);
  const chart1 = useRef<Chart | null>(null);
  const chart2 = useRef<Chart | null>(null);
  const chart3 = useRef<Chart | null>(null);

  // 렌더/업데이트
  useEffect(() => {
    // ── 1) 도넛
    if (doughnutRef.current) {
      // 기존 차트 파괴 (StrictMode 이중마운트/재렌더 대비)
      const prev = Chart.getChart(doughnutRef.current);
      prev?.destroy();

      chart1.current = new Chart(doughnutRef.current, {
        type: "doughnut",
        data: {
          labels: taskTypeArr.map(d => d.name),
          datasets: [{
            data: taskTypeArr.map(d => d.value),
            backgroundColor: taskTypeArr.map((_,i)=>COLORS[i%COLORS.length]),
          }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "60%",
          plugins: {
            legend: { position: "right" },
            datalabels: {
              formatter: (v: number, ctx: any) => {
                const total = ctx.dataset.data.reduce((a:number,b:number)=>a+b,0);
                const p = total ? (v/total)*100 : 0;
                return p >= 5 ? `${p.toFixed(1)}%` : "";
              },
              color: "#fff",
              font: { weight: "bold" },
            },
          },
        } as any,
      });
    }

    // ── 2) 진행현황 막대
    if (barStatusRef.current) {
      const prev = Chart.getChart(barStatusRef.current);
      prev?.destroy();

      chart2.current = new Chart(barStatusRef.current, {
        type: "bar",
        data: {
          labels: statusArr.map(d=>d.name),
          datasets: [{ label:"건수", data: statusArr.map(d=>d.value) }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 4 } },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { precision: 0, font: { size: 14 } },
              grace: "15%",
            }
          },
          plugins: {
            legend: { display: false },
            datalabels: {
              anchor: "end",
              align: "end",
              offset: 4,
              clip: false,
              font: { size: 14 },
              formatter: (v:number)=> (v>0 ? v : "")
            },
          },
        } as any
      });
    }

    // ── 3) 업무형태 막대
    if (barFormRef.current) {
      const prev = Chart.getChart(barFormRef.current);
      prev?.destroy();

      chart3.current = new Chart(barFormRef.current, {
        type: "bar",
        data: {
          labels: formArr.map(d=>d.name),
          datasets: [{ label:"건수", data: formArr.map(d=>d.value) }],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 4 } },
          scales: {
            y: {
              beginAtZero: true,
              ticks: { precision: 0, font: { size: 14 } },
              grace: "15%",                                // ★
            }
          },
          plugins: {
            legend: { display: false },
            datalabels: {
              anchor: "end",
              align: "end",
              offset: 4,                                   // ★
              clip: false,                                 // ★
              font: { size: 14 },
              formatter: (v:number)=> (v>0 ? v : "")
            },
          },
        } as any
      });
    }

    // 언마운트 시 정리(프로덕션에서도 안전)
    return () => {
      chart1.current?.destroy();
      chart2.current?.destroy();
      chart3.current?.destroy();
    };
  }, [taskTypeArr, statusArr, formArr]);

  // ★ 추가: 요청자(role=1)는 버튼 랩 자체 숨김, 회사 배지 출력
  const isRequester = userRole === 1;

  return (
    <Wrap>
      {/* 회사 토글 */}
      <DashBoardFilterWrap>
        {roleReady && !isRequester && (
          <CompanyToggleWrap>
            <CompanyToggleButton $active={effectiveMode === "homeplus"} onClick={()=>setCompanyMode("homeplus")}>Homeplus</CompanyToggleButton>
            <CompanyToggleButton $active={effectiveMode === "nsmall"}   onClick={()=>setCompanyMode("nsmall")}>NSmall</CompanyToggleButton>
            <CompanyToggleButton $active={effectiveMode === "all"}      onClick={()=>setCompanyMode("all")}>전체</CompanyToggleButton>
          </CompanyToggleWrap>
        )}
  
        <DateSelectBoxWrap>
          <SelectBox value={ym.y} onChange={(e)=>setYM(p=>({...p, y:Number(e.target.value)}))}>
            {Array.from({length:5}).map((_,i)=>{
              const y = now.getFullYear()-2+i;
              return <option key={y} value={y}>{y}년</option>;
            })}
          </SelectBox>
          <SelectBox value={ym.m} onChange={(e)=>setYM(p=>({...p, m:Number(e.target.value)}))}>
            {Array.from({length:12}).map((_,i)=><option key={i+1} value={i+1}>{i+1}월</option>)}
          </SelectBox>
          <span className="range">{ymLabel} 범위</span>
        </DateSelectBoxWrap>
      </DashBoardFilterWrap>

      <OperationList>
        <OperationItem>
          <OperationTitle>총 요청건수(건)</OperationTitle>
          <OpereationValue>{totalRequests}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>실 제작건수(건)</OperationTitle>
          <OpereationValue>{producedCount}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>사용공수</OperationTitle>
          <OpereationValue>{usedHoursDisplay}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>가용공수</OperationTitle>
          <OpereationValue>{availHours.toLocaleString()}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>사용공수비율</OperationTitle>
          <OpereationValue>{availHours ? `${usedRatio}%` : "-"}</OpereationValue>
        </OperationItem>
      </OperationList>

      <ChartsWrap>
        <LeftChartWrap>
          <LeftChart>
            <ChartTitle>업무유형별 분포현황</ChartTitle>
            <CanvasBox $h={400}><canvas ref={doughnutRef} /></CanvasBox>
          </LeftChart>
        </LeftChartWrap>

        <RightCol>
          <RightChart>
            <ChartTitle>진행현황 (status)</ChartTitle>
            <CanvasBox $h={180}><canvas ref={barStatusRef} /></CanvasBox>
          </RightChart>

          <RightChart>
            <ChartTitle>업무형태현황 (task_form)</ChartTitle>
            <CanvasBox $h={180}><canvas ref={barFormRef} /></CanvasBox>
          </RightChart>
        </RightCol>
      </ChartsWrap>
    </Wrap>
  );
}

const Wrap = styled.div`
  font-family: 'Pretendard';
`;
const DashBoardFilterWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 24px 0 30px;
`;
const CompanyToggleWrap = styled.div`
  display:flex; 
  gap:8px;
`;
const CompanyToggleButton = styled.button<{ $active?: boolean }>`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme, $active }) => $active ? theme.colors.black : theme.colors.white01};
  color: ${({ theme, $active }) => $active ? theme.colors.white01 : theme.colors.black};
  border: 1px solid ${({ theme }) => theme.colors.black};
`;
const DateSelectBoxWrap = styled.div`
  display:flex; 
  align-items:center;
  gap:8px;
  margin-left: auto;
`;
const SelectBox = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 200px;
  margin-right: 8px;
  padding: 13.5px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white01};
  background-image: url(${selectBoxArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;
const OperationList = styled.ul`
  display: flex;
  gap:14px; 
  margin-bottom:16px;
`;
const OperationItem = styled.li`
  flex: 1;
  padding:14px;
  border:1px solid #e8ecf3; 
  border-radius:14px; 
  background:#f7f9fc; 
`;
const OperationTitle = styled.h3`
  color:#9aa4b2; 
  font-size:12px; 
  margin-bottom:8px;
`;
const OpereationValue = styled.strong`
  font-size:32px; 
  font-weight:800;
`;
const ChartsWrap = styled.div`
  display: flex;
  gap: 16px;
`;

// 좌측(도넛) 컬럼
const LeftChartWrap = styled.div`
  flex: 0 0 50%;
`;

// 우측(막대 2개) 컬럼
const RightCol = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1 1 50%;
  gap: 16px;
`;

// 카드 공통
const ChartCommon = styled.div`
  background:#fff;
  border:1px solid #e8ecf3;
  border-radius:16px;
  padding:16px;
  height: 100%;
`;
const LeftChart = styled(ChartCommon)``;
const RightChart = styled(ChartCommon)``;

const ChartTitle = styled.h3`
  margin:0 0 10px; 
  font-size:15px; 
  color:#666;
`;
const CanvasBox = styled.div<{ $h:number }>`
  position: relative;
  width: 100%;
  height: ${({$h}) => `${$h}px`};
`;
