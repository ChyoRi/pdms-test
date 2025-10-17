import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query, doc, getDoc, where } from "firebase/firestore";
import { db, auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(...registerables, ChartDataLabels);

type RD = RequestData;

// ───────── helpers ─────────
const COLORS = ["#4e79a7","#ff9da7","#59a14f","#9c755f","#edc949","#e15759","#76b7b2","#f28e2b","#af7aa1","#bab0ab"];
const CAPACITY_BY_COMPANY = { homeplus: 704, nsmall: 812 } as const; // (유지)
const companyKey = (v: any) => String(v ?? "").replace(/\s+/g, "").toLowerCase();
const isHomeplus = (r: RD) => companyKey(r.company) === "homeplus";
const isNSmall   = (r: RD) => ["nsmall","n-small"].includes(companyKey(r.company));

function pickDateMillis(d: RD): number | null {
  const c = [d.request_date, d.open_date, d.created_date as any, d.designer_start_date, d.designer_end_date];
  for (const v of c) {
    if (!v) continue;
    // @ts-ignore Timestamp
    if (typeof v?.toDate === "function") return v.toDate().getTime();
    if (v instanceof Date) return v.getTime();
    const t = new Date(v).getTime();
    if (!Number.isNaN(t)) return t;
  }
  return null;
}
const sum = (ns: number[]) => ns.reduce((a,b)=>a+(+b||0),0);
function groupCount(arr: (string|undefined)[]) {
  const m = new Map<string, number>();
  for (const k of arr) {
    const key = (k && String(k).trim()) || "기타";
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

// ★ 전체 탭 전용: 기간 도우미
type Period = "day"|"week"|"month";
const isWeekend = (ms:number) => { const d = new Date(ms).getDay(); return d===0 || d===6; };
const ymd = (ms:number) => { const d=new Date(ms); return `${d.getFullYear()}.${String(d.getMonth()+1).padStart(2,"0")}.${String(d.getDate()).padStart(2,"0")}`; };
function getWorkweekRange(base: Date) {
  const d = new Date(base);
  const day = d.getDay(); const mondayDiff = (day === 0 ? -6 : 1 - day);
  const monday = new Date(d); monday.setDate(d.getDate() + mondayDiff);
  const friday = new Date(monday); friday.setDate(monday.getDate() + 4);
  const start = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()).getTime();
  const end = new Date(friday.getFullYear(), friday.getMonth(), friday.getDate(), 23,59,59,999).getTime();
  return { start, end };
}
function getMonthRange(base: Date) {
  const startD = new Date(base.getFullYear(), base.getMonth(), 1);
  const endD = new Date(base.getFullYear(), base.getMonth()+1, 0, 23,59,59,999);
  return { start: startD.getTime(), end: endD.getTime() };
}
function countWorkingDays(start: number, end: number) {
  let cnt=0, cur=new Date(start);
  while(cur.getTime()<=end){ const g=cur.getDay(); if(g>=1&&g<=5) cnt++; cur.setDate(cur.getDate()+1); }
  return cnt;
}

interface Props { capacityHoursPerMonth?: number; }

export default function DashBoard({ capacityHoursPerMonth }: Props) {
  // ───────── 기존: 년/월 셀렉트(HP/NS 유지)
  const now = new Date();
  const [ym, setYM] = useState({ y: now.getFullYear(), m: now.getMonth()+1 });
  // const ymLabel = `${ym.y}.${String(ym.m).padStart(2,"0")}`;

  // ───────── 전체 탭 전용: 기준일+기간 탭
  const [baseDate] = useState<Date>(new Date());                 // 기준일 = 오늘
  const [period, setPeriod] = useState<Period>("day");           // 일/주/월

  // 사용자
  const [userRole, setUserRole] = useState<number | null>(null);
  const [userCompany, setUserCompany] = useState<string>("");
  // const [roleReady, setRoleReady] = useState(false);

  // 회사 탭
  const [companyMode, setCompanyMode] = useState<"homeplus" | "nsmall" | "all">("homeplus");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) { setUserRole(null); setUserCompany(""); /*setRoleReady(true);*/ return; }
      const us = await getDoc(doc(db, "users", user.uid));
      if (us.exists()) {
        const u = us.data() as any;
        setUserRole(Number(u?.role ?? 0));
        setUserCompany(String(u?.company ?? ""));
        const ck = companyKey(u?.company);
        if (Number(u?.role) === 1 && (ck === "homeplus" || ck === "nsmall" || ck === "n-small")) {
          setCompanyMode(ck.startsWith("n") ? "nsmall" : "homeplus");
        }
      }
      /*setRoleReady(true);*/
    });
    return () => unsub();
  }, []);

  // 데이터
  const [rows, setRows] = useState<RD[]>([]);
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "design_request")), (snap) => {
      const list: RD[] = []; snap.forEach(d => list.push({ id: d.id, ...(d.data() as any) })); setRows(list);
    });
    return () => unsub();
  }, []);

  // ───────── 전체 탭 전용: 디자이너 목록(가용공수 계산)
  const [designers, setDesigners] = useState<{name:string; company:string}[]>([]);
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "users"), where("role","==",2)), (snap) => {
      const list: {name:string; company:string}[] = [];
      snap.forEach(d => { const u = d.data() as any; list.push({ name:String(u?.name??""), company:String(u?.company??"") }); });
      setDesigners(list);
    });
    return () => unsub();
  }, []);

  // ───────── 공통: 월 범위(HP/NS에서 사용)
  const monthRange = useMemo(() => {
    const start = new Date(ym.y, ym.m - 1, 1).getTime();
    const end   = new Date(ym.y, ym.m, 0, 23, 59, 59, 999).getTime();
    return { start, end };
  }, [ym]);

  // 요청자(role=1)면 회사 모드 강제
  const effectiveMode: "homeplus" | "nsmall" | "all" = useMemo(() => {
    if (userRole === 1) {
      const ck = companyKey(userCompany);
      return ck.startsWith("n") ? "nsmall" : "homeplus";
    }
    return companyMode;
  }, [userRole, userCompany, companyMode]);

  // ───────── HP/NS 화면(기존 로직 유지)
  const monthRows = useMemo(() => {
    if (effectiveMode === "all") return []; // 전체 화면일 땐 사용 안함
    return rows.filter(r => {
      const ts = pickDateMillis(r);
      const inMonth = ts !== null && ts >= monthRange.start && ts <= monthRange.end;
      let inCompany = true;
      if (effectiveMode === "homeplus") inCompany = isHomeplus(r);
      else if (effectiveMode === "nsmall") inCompany = isNSmall(r);
      return inMonth && inCompany;
    });
  }, [rows, monthRange, effectiveMode]);

  const kpiMonth = useMemo(() => {
    if (effectiveMode === "all") return null;
    const totalRequests = monthRows.length;
    const producedCount = monthRows.filter(r => normalizeStatus(r.status) === "완료").length;
    const usedHours = sum(monthRows.map(r => Number(r.out_work_hour) || 0)); // (유지)
    const availHours =
      effectiveMode === "homeplus"
        ? (capacityHoursPerMonth ?? CAPACITY_BY_COMPANY.homeplus)
        : CAPACITY_BY_COMPANY.nsmall;
    const usedRatio = availHours ? Math.round((usedHours/availHours)*100) : 0;
    return {
      totalRequests, producedCount,
      usedHoursDisplay: usedHours.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}),
      availHours, usedRatio
    };
  }, [monthRows, effectiveMode, capacityHoursPerMonth]);

  const taskTypeArr = useMemo(() => {
    if (effectiveMode === "all") return [];
    const arr = groupCount(monthRows.map(r => r.task_type || r.task_type_detail)).sort((a,b)=>b.value-a.value);
    return arr.length>8 ? [...arr.slice(0,8), {name:"기타", value:arr.slice(8).reduce((s,c)=>s+c.value,0)}] : arr;
  }, [monthRows, effectiveMode]);

  const statusArr = useMemo(() => {
    if (effectiveMode === "all") return [];
    const order = ["대기중","진행중","검수중","검수요청중","완료","취소"];
    const counts = groupCount(monthRows.map(r => normalizeStatus(r.status)));
    const map = new Map(counts.map(v => [v.name, v.value]));
    return order.map(n => ({ name:n, value: map.get(n) || 0 }));
  }, [monthRows, effectiveMode]);

  const formArr = useMemo(() => {
    if (effectiveMode === "all") return [];
    return groupCount(monthRows.map(r => r.task_form)).sort((a,b)=>b.value-a.value);
  }, [monthRows, effectiveMode]);

  // ───────── ‘전체’ 화면(새 로직)
  const periodInfo = useMemo(() => {
    if (effectiveMode !== "all") return null;
    if (period === "day") {
      const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate()).getTime();
      const end = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), 23,59,59,999).getTime();
      const wd = isWeekend(start) ? 0 : 1;
      return { start, end, workingDays: wd, label: `${ymd(start)} (평일만)` };
    }
    if (period === "week") {
      const { start, end } = getWorkweekRange(baseDate);
      const wd = countWorkingDays(start, end);
      return { start, end, workingDays: wd, label: `${ymd(start)} ~ ${ymd(end)} (주중)` };
    }
    const { start, end } = getMonthRange(baseDate);
    const wd = countWorkingDays(start, end);
    const m = `${baseDate.getFullYear()}.${String(baseDate.getMonth()+1).padStart(2,"0")}`;
    return { start, end, workingDays: wd, label: `${m} (평일만)` };
  }, [effectiveMode, period, baseDate]);

  const allFilteredRows = useMemo(() => {
    if (effectiveMode !== "all" || !periodInfo) return [];
    return rows.filter(r => {
      const ts = pickDateMillis(r);
      return ts !== null && ts >= periodInfo.start && ts <= periodInfo.end && !isWeekend(ts); // 평일만
    });
  }, [rows, periodInfo, effectiveMode]);

  const kpiAll = useMemo(() => {
    if (effectiveMode !== "all" || !periodInfo) return null;
    const totalRequests = allFilteredRows.length;
    const producedCount = allFilteredRows.filter(r => normalizeStatus(r.status) === "완료").length;
    const usedHours = sum(allFilteredRows.map(r => Number(r.in_work_hour) || 0)); // in_work_hour 사용
    const people = designers.length;
    const workingDaysForCapacity = period === "month" ? 20.3 : periodInfo.workingDays; // 월은 20.3 고정
    const rawAvailHours = people * workingDaysForCapacity * 8;                           // 고정식 적용
    const availHours = Math.round(rawAvailHours);

    const usedRatio = availHours ? Math.round((usedHours/availHours)*100) : 0;
    return {
      totalRequests, producedCount,
      usedHoursDisplay: usedHours.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}),
      availHours, usedRatio
    };
  }, [allFilteredRows, designers, periodInfo, effectiveMode, period]);

  // ‘전체’ 도넛: 회사별 문서 수
  const doughnutCompany = useMemo(() => {
    if (effectiveMode !== "all" || !periodInfo) return { labels:[], data:[] };
    const inRange = rows.filter(r => {
      const ts = pickDateMillis(r);
      return ts !== null && ts >= periodInfo.start && ts <= periodInfo.end && !isWeekend(ts);
    });
    const hp = inRange.filter(isHomeplus).length;
    const ns = inRange.filter(isNSmall).length;
    return { labels:["Homeplus", "NSmall"], data:[hp, ns] };
  }, [rows, periodInfo, effectiveMode]);

  // 배정 디자이너 안전 추출(미지정 제거)
  function getAssigneesClean(r: RD): string[] {
    const arr = Array.isArray((r as any).assigned_designers)
      ? (r as any).assigned_designers
      : ((r as any).assigned_designer ? [(r as any).assigned_designer] : []);

    return arr
      .map((s: any) => String(s || "").trim())
      // ★ 핵심: '미지정', '미배정' 모두 제외
      .filter((n: string) => n && n !== "미지정" && n !== "미배정");
  }

  // ‘전체’ 하단 막대: 디자이너별(스택: 회사)
  const designerStack = useMemo(() => {
    if (effectiveMode !== "all" || !periodInfo) return { labels:[], hpData:[], nsData:[] };
    type Cnt = { hp:number; ns:number; total:number };
    const m = new Map<string, Cnt>();

    for (const r of rows) {
      const ts = pickDateMillis(r);
      if (ts===null || ts<periodInfo.start || ts>periodInfo.end || isWeekend(ts)) continue;

      const names = getAssigneesClean(r);     // 미지정/미배정 제거 후 이름 배열
      if (names.length === 0) continue;       // ★ 무배정이면 스킵

      const bucket: "hp" | "ns" | null = isHomeplus(r) ? "hp" : (isNSmall(r) ? "ns" : null);
      if (!bucket) continue;

      // ★ 다중 배정이면 각 디자이너에게 1건씩 카운트
      for (const name of names) {
        const e = m.get(name) || { hp:0, ns:0, total:0 };
        if (bucket === "hp") e.hp += 1; else e.ns += 1;
        e.total = e.hp + e.ns;
        m.set(name, e);
      }
    }

    const items = Array.from(m, ([name,v]) => ({ name, ...v }))
      .sort((a,b) => b.total - a.total)
      .slice(0, 20);

    return {
      labels: items.map(v => v.name),
      hpData: items.map(v => v.hp),
      nsData: items.map(v => v.ns),
    };
  }, [rows, periodInfo, effectiveMode]);

  // ───────── 차트 렌더
  const doughnutRef = useRef<HTMLCanvasElement | null>(null);
  const barStatusRef = useRef<HTMLCanvasElement | null>(null);
  const barBottomRef = useRef<HTMLCanvasElement | null>(null);
  const chart1 = useRef<Chart | null>(null);
  const chart2 = useRef<Chart | null>(null);
  const chart3 = useRef<Chart | null>(null);

  // 공통 상태 막대 데이터(모드별 분기)
  const statusForChart = useMemo(() => {
    if (effectiveMode === "all") {
      const order = ["대기","진행중","검수중","검수요청","완료","취소"];
      const counts = groupCount(allFilteredRows.map(r => normalizeStatus(r.status)));
      const map = new Map(counts.map(v => [v.name, v.value]));
      return { labels: order, data: order.map(n => map.get(n) || 0) };
    } else {
      const order = ["대기중","진행중","검수중","검수요청중","완료","취소"];
      return { labels: statusArr.map(s=>s.name), data: statusArr.map(s=>s.value), orderFallback: order };
    }
  }, [effectiveMode, allFilteredRows, statusArr]);

  useEffect(() => {
    const isAll = effectiveMode === "all";

    // 1) 도넛
    if (doughnutRef.current) {
      Chart.getChart(doughnutRef.current)?.destroy();
      const labels = isAll ? doughnutCompany.labels : taskTypeArr.map(d=>d.name);
      const data   = isAll ? doughnutCompany.data   : taskTypeArr.map(d=>d.value);
      const colors = isAll ? [COLORS[0], COLORS[1]] : taskTypeArr.map((_,i)=>COLORS[i%COLORS.length]);
      chart1.current = new Chart(doughnutRef.current, {
        type: "doughnut",
        data: { labels, datasets: [{ data, backgroundColor: colors }] },
        options: {
          responsive:true, maintainAspectRatio:false, cutout:"60%",
          plugins:{
            legend:{ position:"right" },
            datalabels:{
              formatter:(v:number,ctx:any)=>{ const t=ctx.dataset.data.reduce((a:number,b:number)=>a+b,0); const p=t?(v/t)*100:0; return p>=5?`${p.toFixed(1)}%`:""; },
              color:"#fff", font:{weight:"bold"}
            }
          }
        } as any
      });
    }

    // 2) 상태 막대
    if (barStatusRef.current) {
      Chart.getChart(barStatusRef.current)?.destroy();
      chart2.current = new Chart(barStatusRef.current, {
        type: "bar",
        data: { labels: statusForChart.labels, datasets: [{ label:"건수", data: statusForChart.data }] },
        options: {
          responsive:true, maintainAspectRatio:false, layout:{padding:{top:4}},
          scales:{ y:{ beginAtZero:true, ticks:{precision:0, font:{size:14}}, grace:"15%" } },
          plugins:{
            legend:{ display:false },
            datalabels:{ anchor:"end", align:"end", offset:4, clip:false, font:{size:14}, formatter:(v:number)=> (v>0?v:"") }
          }
        } as any
      });
    }

    // 3) 하단 막대
    if (barBottomRef.current) {
      Chart.getChart(barBottomRef.current)?.destroy();

      if (isAll) {
        chart3.current = new Chart(barBottomRef.current, {
          type:"bar",
          data:{
            labels: designerStack.labels,
            datasets:[
              { label:"Homeplus", data: designerStack.hpData, backgroundColor: "rgba(78, 121, 167,.7)", stack:"company" },
              { label:"NSmall",   data: designerStack.nsData, backgroundColor: "rgba(255,157,167,.6)", stack:"company" },
            ],
          },
          options:{
            responsive:true, 
            maintainAspectRatio:false, 
            layout:{padding:{top:4}},
            scales:{
              x:{ stacked:true, ticks:{ autoSkip:false, maxRotation:40, minRotation:0 } },
              y:{ stacked:true, beginAtZero:true, ticks:{precision:0, font:{size:14}}, grace:"15%" }
            },
            plugins:{
              legend:{ position:"top" },
              datalabels:{ anchor:"end", align:"end", offset:2, clip:false, font:{size:12}, formatter:(v:number)=> (v>0?v:"") }
            }
          } as any
        });
      } else {
        chart3.current = new Chart(barBottomRef.current, {
          type:"bar",
          data:{ labels: formArr.map(d=>d.name), datasets:[{ label:"건수", data: formArr.map(d=>d.value), backgroundColor:"rgba(255,157,167,.6)"}]},
          options:{
            responsive:true, maintainAspectRatio:false, layout:{padding:{top:4}},
            scales:{ y:{ beginAtZero:true, ticks:{precision:0, font:{size:14}}, grace:"15%"} },
            plugins:{
              legend:{ display:false },
              datalabels:{ anchor:"end", align:"end", offset:4, clip:false, font:{size:14}, formatter:(v:number)=> (v>0?v:"") }
            }
          } as any
        });
      }
    }

    return () => { chart1.current?.destroy(); chart2.current?.destroy(); chart3.current?.destroy(); };
  }, [effectiveMode, taskTypeArr, doughnutCompany, statusForChart, formArr, designerStack]);

  // const isRequester = userRole === 1;

  // ───────── UI
  const KPI = effectiveMode === "all" ? kpiAll : kpiMonth;

  return (
    <Wrap>
      {/* 회사 탭 */}
      <DashBoardFilterWrap>
        {/* {roleReady && !isRequester && (
          <CompanyToggleWrap>
            <CompanyToggleButton $active={effectiveMode === "homeplus"} onClick={()=>setCompanyMode("homeplus")}>Homeplus</CompanyToggleButton>
            <CompanyToggleButton $active={effectiveMode === "nsmall"}   onClick={()=>setCompanyMode("nsmall")}>NSmall</CompanyToggleButton>
            <CompanyToggleButton $active={effectiveMode === "all"}      onClick={()=>setCompanyMode("all")}>전체</CompanyToggleButton>
          </CompanyToggleWrap>
        )} */}

        {/* HP/NS: 기존 년/월 셀렉트 유지 / 전체: 일·주·월 탭 */}
        {effectiveMode !== "all" ? (
          <DateSelectBoxWrap>
            <SelectBox value={ym.y} onChange={(e)=>setYM(p=>({...p, y:Number(e.target.value)}))}>
              {Array.from({length:5}).map((_,i)=>{ const y = now.getFullYear()-2+i; return <option key={y} value={y}>{y}년</option>; })}
            </SelectBox>
            <SelectBox value={ym.m} onChange={(e)=>setYM(p=>({...p, m:Number(e.target.value)}))}>
              {Array.from({length:12}).map((_,i)=><option key={i+1} value={i+1}>{i+1}월</option>)}
            </SelectBox>
          </DateSelectBoxWrap>
        ) : (
          <PeriodTabsWrap>
            <PeriodTab $active={period==="day"}   onClick={()=>setPeriod("day")}>일</PeriodTab>
            <PeriodTab $active={period==="week"}  onClick={()=>setPeriod("week")}>주</PeriodTab>
            <PeriodTab $active={period==="month"} onClick={()=>setPeriod("month")}>월</PeriodTab>
            <span className="range">{periodInfo?.label}</span>
          </PeriodTabsWrap>
        )}
      </DashBoardFilterWrap>

      {/* KPI */}
      <OperationList>
        <OperationItem><OperationTitle>총 요청건수(건)</OperationTitle><OpereationValue>{KPI?.totalRequests ?? 0}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>실 제작건수(건)</OperationTitle><OpereationValue>{KPI?.producedCount ?? 0}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>사용공수</OperationTitle><OpereationValue>{KPI?.usedHoursDisplay ?? "0.00"}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>가용공수</OperationTitle><OpereationValue>{KPI?.availHours?.toLocaleString() ?? "0"}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>사용공수비율</OperationTitle><OpereationValue>{KPI?.usedRatio ? `${KPI.usedRatio}%` : "0%"}</OpereationValue></OperationItem>
      </OperationList>

      {/* 차트 */}
      <ChartsWrap>
        <LeftChartWrap $compact={effectiveMode === "all"}>
          <LeftChart>
            <ChartTitle>{effectiveMode==="all" ? "회사별 분포 (일/주/월 기준, 평일)" : "업무유형별 분포현황"}</ChartTitle>
            <CanvasBox $h={400}><canvas ref={doughnutRef} /></CanvasBox>
          </LeftChart>
        </LeftChartWrap>

        <RightCol $compact={effectiveMode === "all"}>
          <RightChart>
            <ChartTitle>{effectiveMode==="all" ? "디자이너별 배정 건수 (회사 스택)" : "업무형태현황 (task_form)"}</ChartTitle>
            <CanvasBox $h={180}><canvas ref={barBottomRef} /></CanvasBox>
          </RightChart>
          <RightChart>
            <ChartTitle>진행현황 (status)</ChartTitle>
            <CanvasBox $h={180}><canvas ref={barStatusRef} /></CanvasBox>
          </RightChart>

        </RightCol>
      </ChartsWrap>
    </Wrap>
  );
}

/* ───────── styled ───────── */
const Wrap = styled.div`font-family: 'Pretendard';`;
const DashBoardFilterWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 24px 0 30px;
`;
// const CompanyToggleWrap = styled.div`display:flex; gap:8px;`;
// const CompanyToggleButton = styled.button<{ $active?: boolean }>`
//   padding: 11.5px 10px; border-radius: 4px; font-family: 'Pretendard';
//   font-size: 16px; font-weight: 400;
//   background-color: ${({ theme, $active }) => $active ? theme.colors.black : theme.colors.white01};
//   color: ${({ theme, $active }) => $active ? theme.colors.white01 : theme.colors.black};
//   border: 1px solid ${({ theme }) => theme.colors.black};
// `;

const DateSelectBoxWrap = styled.div`
  display:flex; align-items:center; gap:8px; margin-left:auto;
`;
const SelectBox = styled.select`
  appearance:none; width:150px; height: 48px; margin-right:8px; padding:0 12px;
  border:1px solid ${({ theme }) => theme.colors.gray02}; border-radius:4px;
  font-family:'Pretendard'; font-size:16px; font-weight:400; color:${({ theme }) => theme.colors.black};
  background:${({ theme }) => theme.colors.white01} url(${selectBoxArrow}) no-repeat right 12px center / 16px 16px;
  &:focus { outline:none; border-color:${({ theme }) => theme.colors.black}; }
`;

/* ★ 전체 탭 전용: 기간 탭 */
const PeriodTabsWrap = styled.div`
  display:flex; align-items:center; gap:8px; margin-left:auto;
  .range { margin-left:12px; color:#667085; font-size:14px; }
`;
const PeriodTab = styled.button<{ $active?: boolean }>`
  padding:10px 14px; border-radius:8px; font-family:'Pretendard'; font-size:15px;
  background:${({ $active }) => $active ? "#111" : "#fff"};
  color:${({ $active }) => $active ? "#fff" : "#111"};
  border:1px solid #111; transition:all .15s ease;
`;

const OperationList = styled.ul`display:flex; gap:14px; margin-bottom:16px;`;
const OperationItem = styled.li`flex:1; padding:14px; border:1px solid #e8ecf3; border-radius:14px; background:#f7f9fc;`;
const OperationTitle = styled.h3`color:#9aa4b2; font-size:12px; margin-bottom:8px;`;
const OpereationValue = styled.strong`font-size:32px; font-weight:800;`;

const ChartsWrap = styled.div`display:flex; gap:16px;`;
const LeftChartWrap = styled.div<{ $compact?: boolean }>`
  flex: 0 0 ${({ $compact }) => ($compact ? "38%" : "50%")};
`;
const RightCol = styled.div<{ $compact?: boolean }>`
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 1 1 ${({ $compact }) => ($compact ? "62%" : "50%")};
`;
const ChartCommon = styled.div`background:#fff; border:1px solid #e8ecf3; border-radius:16px; padding:16px; height:100%;`;
const LeftChart = styled(ChartCommon)``; const RightChart = styled(ChartCommon)``;
const ChartTitle = styled.h3`margin:0 0 10px; font-size:15px; color:#666;`;
const CanvasBox = styled.div<{ $h:number }>`position:relative; width:100%; height:${({$h}) => `${$h}px`};`;