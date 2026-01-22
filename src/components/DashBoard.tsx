import { useEffect, useMemo, useRef, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query, doc, getDoc, where } from "firebase/firestore";
import { db, auth } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import DashBoardFilter from "./DashBoardFilter";
import type { Period } from "./DashBoardFilter";
import { Chart, registerables } from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";
Chart.register(...registerables, ChartDataLabels);

type CompanyDoc = {
  id: string;                 // companies 문서 id (homeplus, nsmall, oliveyoung ...)
  company_name: string;       // 표시명
  logo_url?: string;
  signup_active?: boolean;
  avail_hour?: number;
};

type RD = RequestData;

// ───────── helpers ─────────
const COLORS = ["#4e79a7","#ff9da7","#59a14f","#9c755f","#edc949","#e15759","#76b7b2","#f28e2b","#af7aa1","#bab0ab"];
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

// 퍼센트 소수 1자리 반올림 유틸 (0~∞)
const round1 = (n: number) => Math.round((Number(n) || 0) * 10) / 10;

// ★ 전체 탭 전용: 기간 도우미
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

// ★ 추가: 배정 디자이너 “실제 존재” 판별 (빈배열/더미 제거)
function hasAssignedDesigners(r: RD): boolean {
  const ads = (r as any).assigned_designers;
  if (Array.isArray(ads)) {
    // assigned_designers가 string 배열이든, object 배열이든 둘 다 커버
    return ads.some((x: any) => {
      if (!x) return false;
      if (typeof x === "string") return String(x).trim().length > 0;
      const uidOk = String(x?.uid ?? "").trim().length > 0;
      const nameOk = String(x?.name ?? "").trim().length > 0;
      return uidOk || nameOk;
    });
  }
  // 혹시 uids만 있는 경우(스키마 변동 대비)
  const uids = (r as any).assigned_designer_uids;
  if (Array.isArray(uids)) return uids.filter(Boolean).length > 0;

  return false;
}

export default function DashBoard() {
  // ───────── 기존: 년/월 셀렉트(HP/NS 유지)
  const now = new Date();
  const [ym, setYM] = useState({ y: now.getFullYear(), m: now.getMonth()+1 });

  // ───────── 전체 탭 전용: 기준일+기간 탭
  const [baseDate] = useState<Date>(new Date());                 // 기준일 = 오늘
  const [period, setPeriod] = useState<Period>("day");           // 일/주/월

  // 사용자
  const [userRole, setUserRole] = useState<number | null>(null);
  const [userCompany, setUserCompany] = useState<string>("");
  const [roleReady, setRoleReady] = useState(false);

  // 회사 탭
  const requesterCompanyKey = companyKey(userCompany);

  const [companyMode, setCompanyMode] = useState<string>("homeplus");

  // companies 문서 목록
  const [companyDocs, setCompanyDocs] = useState<CompanyDoc[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) { setUserRole(null); setUserCompany(""); setRoleReady(true); return; }
      const us = await getDoc(doc(db, "users", user.uid));
      if (us.exists()) {
        const u = us.data() as any;
        setUserRole(Number(u?.role ?? 0));
        setUserCompany(String(u?.company ?? ""));
        const ck = companyKey(u?.company);
        // ★ 요청자면서 홈플/NS 계정인 경우만 회사 모드 지정 (외부사는 건드리지 않음)
        if (Number(u?.role) === 1 && (ck === "homeplus" || ck === "nsmall" || ck === "n-small")) {
          setCompanyMode(ck.startsWith("n") ? "nsmall" : "homeplus");
        }
      }
      setRoleReady(true);
    });
    return () => unsub();
  }, []);

  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "companies")), (snap) => {
      const list: CompanyDoc[] = [];

      snap.forEach((d) => {
        const data = d.data() as any;
        const id = String(d.id || "");

        if (id === "pushcomz") return;                 // ★ 유지
        if (data?.signup_active === false) return;     // ★ 유지

        list.push({
          id,
          company_name: String(data?.company_name ?? id),
          logo_url: data?.logo_url ? String(data.logo_url) : undefined,
          signup_active: Boolean(data?.signup_active),

          // ★ 유지/개선: number/string 다 파싱 + 유효성
          avail_hour: Number.isFinite(Number(data?.avail_hour)) ? Number(data?.avail_hour) : undefined,
        });
      });

      const order = (id: string) => (id === "homeplus" ? 1 : id === "nsmall" ? 2 : 99);
      list.sort((a, b) => {
        const ao = order(a.id), bo = order(b.id);
        if (ao !== bo) return ao - bo;
        return a.company_name.localeCompare(b.company_name);
      });

      setCompanyDocs(list);
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

  // ───────── 이 유저가 볼 수 있는 row인지 공통 체크 ─────────
  const isVisibleRowForUser = (r: RD): boolean => {
    // 요청자(외부 회사, role=1)는 자기 회사 것만
    if (userRole === 1 && requesterCompanyKey) {
      return companyKey((r as any).company) === requesterCompanyKey;
    }
    // 매니저/디자이너는 전체 회사 데이터
    return true;
  };

  // ───────── 공통: 월 범위(HP/NS에서 사용)
  const monthRange = useMemo(() => {
    const start = new Date(ym.y, ym.m - 1, 1).getTime();
    const end   = new Date(ym.y, ym.m, 0, 23, 59, 59, 999).getTime();
    return { start, end };
  }, [ym]);

  // 요청자(role=1)면 회사 모드 강제 X, 대신 화면 타입만 분기
  const effectiveMode = useMemo(() => companyMode, [companyMode]);

  const isRequester = userRole === 1;
  const isOpsAllMode = !isRequester && effectiveMode === "all";           // 매니저/디자이너 전용 전체 모드

  const getAvailHourByCompanyId = (companyId: string): number | null => {
    const key = companyKey(companyId);
    if (!key) return null;

    const found = companyDocs.find((c) => companyKey(c.id) === key);
    const v = found?.avail_hour;

    if (typeof v === "number" && Number.isFinite(v) && v > 0) return v;
    return null;
  };

  // ───────── HP/NS + 요청자 월 화면
  const monthRows = useMemo(() => {
    if (isOpsAllMode) return [];

    return rows.filter((r) => {
      const ts = pickDateMillis(r);
      const inMonth = ts !== null && ts >= monthRange.start && ts <= monthRange.end;
      if (!inMonth) return false;

      // 요청자: 무조건 본인 회사만
      if (isRequester && requesterCompanyKey) {
        return companyKey((r as any).company) === requesterCompanyKey;
      }

      // 매니저/디자이너: 회사 토글에 따라 필터
      const modeKey = companyKey(effectiveMode);

      // 전체면 모두 허용
      if (modeKey === "all") return true;

      // nsmall의 예외 표기(n-small) 커버
      const rowKey = companyKey((r as any).company);
      if (modeKey === "nsmall") return rowKey === "nsmall" || rowKey === "n-small";

      return rowKey === modeKey;
    });
  }, [rows, monthRange, effectiveMode, isOpsAllMode, isRequester, requesterCompanyKey]);

  // KPI용 “취소 제외” rows
  const monthRowsNoCancel = useMemo(() => {
    if (isOpsAllMode) return [];
    return monthRows.filter((r) => normalizeStatus(r.status) !== "취소");
  }, [monthRows, isOpsAllMode]);

  const kpiMonth = useMemo(() => {
    if (isOpsAllMode) return null;

    // ★ 변경: 총 요청건수는 취소 제외
    const totalRequests = monthRowsNoCancel.length;

    // ★ 변경: 실 제작건수(완료)도 취소 제외 집합에서 계산(안전)
    const producedCount = monthRowsNoCancel.filter((r) => normalizeStatus(r.status) === "완료").length;

    // ★ 변경: 사용공수는 “배정 디자이너가 실제 존재”하는 문서만 합산
    // - 취소여도 배정이 있으면 포함 / 배정이 없으면 제외
    const usedHours = sum(
      monthRows
        .filter((r) => hasAssignedDesigners(r)) // ★ 변경
        .map((r) => Number((r as any).out_work_hour) || 0)
    );

    // 회사 KPI 가용공수는 companies.avail_hour만 사용 (없으면 0)
    const targetCompanyId = isRequester ? requesterCompanyKey : effectiveMode;
    const v = getAvailHourByCompanyId(targetCompanyId);
    const availHours = v ?? 0; // ★ 변경: fallback 제거(704 같은 값이 튀는 원인)

    const usedRatio = availHours > 0 ? round1((usedHours / availHours) * 100) : 0;

    return {
      totalRequests,
      producedCount,
      usedHoursDisplay: usedHours.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      availHours,
      usedRatio,
    };
  }, [
    monthRows,
    monthRowsNoCancel, // ★ 추가
    effectiveMode,
    isOpsAllMode,
    isRequester,
    requesterCompanyKey,
    companyDocs, // avail_hour 바뀌면 KPI 재계산
  ]);

  const taskTypeArr = useMemo(() => {
    if (isOpsAllMode) return [];
    const arr = groupCount(monthRows.map(r => r.task_type || (r as any).task_type_detail)).sort((a,b)=>b.value-a.value);
    return arr.length>8 ? [...arr.slice(0,8), {name:"기타", value:arr.slice(8).reduce((s,c)=>s+c.value,0)}] : arr;
  }, [monthRows, isOpsAllMode]);

  const statusArr = useMemo(() => {
    if (isOpsAllMode) return [];
    const order = ["대기중","진행중","검수중","검수요청중","완료","취소"];
    const counts = groupCount(monthRows.map(r => normalizeStatus(r.status)));
    const map = new Map(counts.map(v => [v.name, v.value]));
    return order.map(n => ({ name:n, value: map.get(n) || 0 }));
  }, [monthRows, isOpsAllMode]);

  const formArr = useMemo(() => {
    if (isOpsAllMode) return [];
    return groupCount(monthRows.map(r => (r as any).task_form)).sort((a,b)=>b.value-a.value);
  }, [monthRows, isOpsAllMode]);

  // ───────── ‘전체’ 화면(운영용) ─────────
  const periodInfo = useMemo(() => {
    if (!isOpsAllMode) return null;
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
  }, [isOpsAllMode, period, baseDate]);

  const allFilteredRows = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return [];
    return rows.filter(r => {
      const ts = pickDateMillis(r);
      if (ts === null || ts < periodInfo.start || ts > periodInfo.end || isWeekend(ts)) return false;
      // 사용자 권한에 맞는 회사만
      if (!isVisibleRowForUser(r)) return false;
      return true;
    });
  }, [rows, periodInfo, isOpsAllMode, userRole, requesterCompanyKey]);

  // 전체 KPI용 “취소 제외” rows
  const allFilteredRowsNoCancel = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return [];
    return allFilteredRows.filter((r) => normalizeStatus(r.status) !== "취소");
  }, [allFilteredRows, isOpsAllMode, periodInfo]);

  const kpiAll = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return null;

    // ★ 변경: 총 요청건수는 취소 제외
    const totalRequests = allFilteredRowsNoCancel.length;

    // ★ 변경: 실 제작건수(완료)도 취소 제외 집합에서 계산
    const producedCount = allFilteredRowsNoCancel.filter(r => normalizeStatus(r.status) === "완료").length;

    // ★ 변경: 사용공수는 “배정 디자이너가 실제 존재”하는 문서만 합산 (in_work_hour 기준 유지)
    const usedHours = sum(
      allFilteredRows
        .filter((r) => hasAssignedDesigners(r)) // ★ 변경
        .map(r => Number((r as any).in_work_hour) || 0)
    );

    const people = designers.length;
    const workingDaysForCapacity = period === "month" ? 20.3 : periodInfo.workingDays; // 월은 20.3 고정
    const rawAvailHours = people * workingDaysForCapacity * 8;
    const availHours = Math.round(rawAvailHours);

    const usedRatio = availHours ? round1((usedHours/availHours)*100) : 0;

    return {
      totalRequests, producedCount,
      usedHoursDisplay: usedHours.toLocaleString(undefined,{minimumFractionDigits:2,maximumFractionDigits:2}),
      availHours, usedRatio
    };
  }, [allFilteredRows, allFilteredRowsNoCancel, designers, periodInfo, isOpsAllMode, period]);

  // ‘전체’ 도넛: 회사별 문서 수
  const doughnutCompany = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return { labels:[], data:[] };
    const inRange = rows.filter(r => {
      const ts = pickDateMillis(r);
      if (ts === null || ts < periodInfo.start || ts > periodInfo.end || isWeekend(ts)) return false;
      if (!isVisibleRowForUser(r)) return false;
      return true;
    });

    const hp = inRange.filter(isHomeplus).length;
    const ns = inRange.filter(isNSmall).length;
    return { labels:["Homeplus", "NSmall"], data:[hp, ns] };
  }, [rows, periodInfo, isOpsAllMode, userRole, requesterCompanyKey]);

  // 배정 디자이너 안전 추출(미지정 제거)
  function getAssigneesClean(r: RD): string[] {
    const arr = Array.isArray((r as any).assigned_designers)
      ? (r as any).assigned_designers
      : ((r as any).assigned_designer ? [(r as any).assigned_designer] : []);

    return arr
      .map((s: any) => String(s || "").trim())
      .filter((n: string) => n && n !== "미지정" && n !== "미배정");
  }

  // ‘전체’ 하단 막대: 디자이너별(스택: 회사)
  const designerStack = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return { labels:[], hpData:[], nsData:[] };
    type Cnt = { hp:number; ns:number; total:number };
    const m = new Map<string, Cnt>();

    for (const r of rows) {
      const ts = pickDateMillis(r);
      if (ts===null || ts<periodInfo.start || ts>periodInfo.end || isWeekend(ts)) continue;
      if (!isVisibleRowForUser(r)) continue;

      const names = getAssigneesClean(r);
      if (names.length === 0) continue;

      const bucket: "hp" | "ns" | null = isHomeplus(r) ? "hp" : (isNSmall(r) ? "ns" : null);
      if (!bucket) continue;

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
  }, [rows, periodInfo, isOpsAllMode, userRole, requesterCompanyKey]);

  // ───────── 차트 렌더
  const doughnutRef = useRef<HTMLCanvasElement | null>(null);
  const barStatusRef = useRef<HTMLCanvasElement | null>(null);
  const barBottomRef = useRef<HTMLCanvasElement | null>(null);
  const chart1 = useRef<Chart | null>(null);
  const chart2 = useRef<Chart | null>(null);
  const chart3 = useRef<Chart | null>(null);

  // 공통 상태 막대 데이터(모드별 분기)
  const statusForChart = useMemo(() => {
    if (isOpsAllMode) {
      const order = ["대기","진행중","검수중","검수요청","완료","취소"];
      const counts = groupCount(allFilteredRows.map(r => normalizeStatus(r.status)));
      const map = new Map(counts.map(v => [v.name, v.value]));
      return { labels: order, data: order.map(n => map.get(n) || 0) };
    } else {
      return { labels: statusArr.map(s=>s.name), data: statusArr.map(s=>s.value) };
    }
  }, [isOpsAllMode, allFilteredRows, statusArr]);

  useEffect(() => {
    const isAll = isOpsAllMode;

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
  }, [isOpsAllMode, taskTypeArr, doughnutCompany, statusForChart, formArr, designerStack]);

  // ───────── UI ─────────
  const KPI = isOpsAllMode ? kpiAll : kpiMonth;
  const isAll = isOpsAllMode;

  // KPI 퍼센트 표시 문자열(항상 소수 1자리)
  const usedRatioText = useMemo(() => {
    const v = KPI?.usedRatio;
    return typeof v === "number" ? `${v.toFixed(1)}%` : "0.0%";
  }, [KPI?.usedRatio]);

  return (
    <Wrap>
      <DashBoardFilter
        roleReady={roleReady}
        isRequester={isRequester}
        companyMode={companyMode}
        companyDocs={companyDocs}
        setCompanyMode={setCompanyMode}
        isAll={isAll}
        ym={ym}
        setYM={setYM}
        nowYear={now.getFullYear()}
        period={period}
        setPeriod={setPeriod}
        periodLabel={periodInfo?.label}
      />

      {/* KPI */}
      <OperationList>
        <OperationItem><OperationTitle>총 요청건수(건)</OperationTitle><OpereationValue>{KPI?.totalRequests ?? 0}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>실 제작건수(건)</OperationTitle><OpereationValue>{KPI?.producedCount ?? 0}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>사용공수</OperationTitle><OpereationValue>{KPI?.usedHoursDisplay ?? "0.00"}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>가용공수</OperationTitle><OpereationValue>{KPI?.availHours?.toLocaleString() ?? "0"}</OpereationValue></OperationItem>
        <OperationItem><OperationTitle>사용공수비율</OperationTitle><OpereationValue>{usedRatioText}</OpereationValue></OperationItem>
      </OperationList>

      {/* 차트 */}
      <ChartsWrap $isAll={isAll}>
        <LeftChartWrap $isAll={isAll}>
          <LeftChart>
            <ChartTitle>{isAll ? "회사별 분포 (일/주/월 기준, 평일)" : "업무유형별 분포현황"}</ChartTitle>
            <CanvasBox $size="lg"><canvas ref={doughnutRef} /></CanvasBox>
          </LeftChart>
        </LeftChartWrap>

        <RightCol $isAll={isAll}>
          <RightChart $isAll={isAll}>
            <ChartTitle>{isAll ? "디자이너별 배정 건수 (회사 스택)" : "업무형태현황 (task_form)"}</ChartTitle>
            <CanvasBox $size="md"><canvas ref={barBottomRef} /></CanvasBox>
          </RightChart>
          <RightChart $isAll={isAll}>
            <ChartTitle>진행현황 (status)</ChartTitle>
            <CanvasBox $size="md"><canvas ref={barStatusRef} /></CanvasBox>
          </RightChart>

        </RightCol>
      </ChartsWrap>
    </Wrap>
  );
}

/* ───────── styled ───────── */
const Wrap = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  width: 100%;
  height: 100%;
  font-family: 'Pretendard';
`;

const OperationList = styled.ul`
  ${({ theme }) => theme.mixin.flex('center')};
  width: 100%;
  gap:14px;
  margin-bottom:16px;
`;

const OperationItem = styled.li`flex:1; padding:14px; border:1px solid #e8ecf3; border-radius:14px; background:#f7f9fc;`;
const OperationTitle = styled.h3`color:#9aa4b2; font-size:12px; margin-bottom:8px;`;
const OpereationValue = styled.strong`font-size:32px; font-weight:800;`;

const ChartsWrap = styled.div<{ $isAll?: boolean }>`
  ${({ theme }) => theme.mixin.flex('center')};
  align-items: stretch;
  gap: 16px;
  width: 100%;
  flex: 1;
  height: 100%;
`;
const LeftChartWrap = styled.div<{ $isAll?: boolean }>`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  flex: 0 0 ${({ $isAll }) => ($isAll ? "42%" : "50%")};
`;
const RightCol = styled.div<{ $isAll?: boolean }>`
  flex: 1 1 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex: 0 0 ${({ $isAll }) => ($isAll ? "58%" : "50%")};
`;

const ChartCommon = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  background:#fff;
  border:1px solid #e8ecf3;
  border-radius:16px;
  padding:16px;
  height:100%;
  flex: 1;
`;
const LeftChart = styled(ChartCommon)``;
const RightChart = styled(ChartCommon)<{ $isAll?: boolean }>`
  ${({ $isAll }) => $isAll && "height: calc((100% - 16px) / 2);"}
`;
const ChartTitle = styled.h3`margin:0 0 10px; font-size:15px; color:#666;`;
const CanvasBox = styled.div<{ $size?: 'lg' | 'md' }>`
  position: relative;
  width: 100%;
  height: 100%;
  flex: 1;

  canvas {
    position: absolute;
    inset: 0;
    width: 100% !important;
    height: 100% !important;
  }
`;