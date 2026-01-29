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
  id: string;
  company_name: string;
  logo_url?: string;
  signup_active?: boolean;
  avail_hour?: number;
};

type RD = RequestData;
type WeightedKey = { key: string; w: number };

// ★ 추가: assigned_designers row 최소 타입(타입가드용)
type AssignedDesignerRow = {
  task_type?: string;
  taskType?: string;
  count?: number | string;
};

// ───────── helpers ─────────
const COLORS = ["#4e79a7", "#ff9da7", "#59a14f", "#9c755f", "#edc949", "#e15759", "#76b7b2", "#f28e2b", "#af7aa1", "#bab0ab"];
const companyKey = (v: any) => String(v ?? "").replace(/\s+/g, "").toLowerCase();
const isHomeplus = (r: RD) => companyKey((r as any).company) === "homeplus";
const isNSmall = (r: RD) => ["nsmall", "n-small"].includes(companyKey((r as any).company));

// ★ 추가: task_type 정규화(제로폭 공백 제거 + 연속 공백 정리)
function normalizeTaskTypeKey_(v: unknown): string {
  return String(v ?? "")
    .replace(/[\u200B-\u200D\uFEFF]/g, "") // zero-width 제거
    .replace(/\s+/g, " ")                 // 연속 공백 정리
    .trim();
}

// ★ 추가: count 파서(“2개/2건/2 ” 같은 케이스를 숫자로 복원)
function parseCount_(v: unknown): number {
  if (typeof v === "number") return Number.isFinite(v) ? v : NaN;
  if (typeof v === "string") {
    const s = v.trim();
    if (!s) return NaN;
    // 첫 숫자 토큰 추출 (정수/소수 모두)
    const m = s.match(/-?\d+(\.\d+)?/);
    if (!m) return NaN;
    const n = Number(m[0]);
    return Number.isFinite(n) ? n : NaN;
  }
  return NaN;
}

// ★ 변경: 월 필터에서 누락 방지용 날짜 후보 확장
function pickDateMillis(d: RD): number | null {
  const c = [
    (d as any).request_date,
    (d as any).requestDate,     // ★ 추가
    (d as any).request_dt,      // ★ 추가
    (d as any).requestDt,       // ★ 추가
    (d as any).open_date,
    (d as any).created_date,
    (d as any).createdAt,
    (d as any).created_at,
    (d as any).created_time,    // ★ 추가
    (d as any).createdTime,     // ★ 추가
    (d as any).create_time,
    (d as any).createTime,      // ★ 추가
    (d as any).designer_start_date,
    (d as any).designer_end_date,
  ];

  for (const v of c) {
    if (!v) continue;
    if (typeof (v as any)?.toDate === "function") return (v as any).toDate().getTime();
    if (v instanceof Date) return v.getTime();
    const t = new Date(v).getTime();
    if (!Number.isNaN(t)) return t;
  }
  return null;
}

const sum = (ns: number[]) => ns.reduce((a, b) => a + (+b || 0), 0);

function groupCount(arr: (string | undefined)[]) {
  const m = new Map<string, number>();
  for (const k of arr) {
    const key = (k && String(k).trim()) || "기타";
    m.set(key, (m.get(key) || 0) + 1);
  }
  return Array.from(m, ([name, value]) => ({ name, value }));
}

// ★ 추가: 가중치(count)까지 반영 가능한 그룹 집계
function groupCountWeighted(arr: { key?: string; w?: number }[]) {
  const m = new Map<string, number>();
  for (const it of arr) {
    const key = (it?.key && String(it.key).trim()) || "기타";
    const w = Number(it?.w);
    if (!Number.isFinite(w) || w <= 0) continue; // ★ 핵심: 0 이하면 스킵
    m.set(key, (m.get(key) || 0) + w);
  }
  return Array.from(m, ([name, value]) => ({ name, value }));
}

// ★ 변경: 도넛 집계키 = assigned_designers[].task_type만 사용 (없으면 스킵, 상위문서 fallback X)
function getTaskTypesFromAssignedDesigners_(r: RD): WeightedKey[] {
  const adsRaw = Array.isArray((r as any).assigned_designers) ? (r as any).assigned_designers : [];

  // ★ 변경: x 타입 명시 + 타입가드 (implicit any 해결)
  const ads = adsRaw.filter(
    (x: unknown): x is AssignedDesignerRow => x !== null && typeof x === "object" && !Array.isArray(x)
  );

  if (ads.length === 0) return [];

  return ads
    .map((ad: AssignedDesignerRow): WeightedKey | null => {
      // ★ 변경: task_type 정규화(숨은 공백 때문에 키가 갈리는 것 방지)
      const keyRaw = ad?.task_type ?? ad?.taskType ?? "";
      const key = normalizeTaskTypeKey_(keyRaw);
      if (!key) return null;

      const rawN = parseCount_(ad?.count);
      let w: number;
      if (!Number.isFinite(rawN)) {
        w = 1; // count 비어있으면 기존처럼 1건으로 처리
      } else {
        w = Math.floor(rawN);
        if (w <= 0) return null; // ★ 핵심: 0 이하면 집계에서 제외
      }

      return { key, w };
    })
    // ★ 변경: x 타입 명시 (implicit any 해결)
    .filter((x: WeightedKey | null): x is WeightedKey => !!x)
    .filter((x: WeightedKey) => x.key !== "미지정" && x.key !== "미배정");
}

function normalizeStatus(s?: string) {
  if (!s) return "대기";
  const t = s.replace(/\s/g, "");
  if (/(진행)/.test(t)) return "진행중";
  if (/(검수중)/.test(t)) return "검수중";
  if (/(검수요청)/.test(t)) return "검수요청";
  if (/(완료)/.test(t)) return "완료";
  if (/(취소|cancel)/i.test(t)) return "취소";
  if (/(대기)/.test(t)) return "대기";
  return s;
}

// 퍼센트 소수 1자리 반올림 유틸
const round1 = (n: number) => Math.round((Number(n) || 0) * 10) / 10;

// ★ 전체 탭 전용: 기간 도우미
const isWeekend = (ms: number) => {
  const d = new Date(ms).getDay();
  return d === 0 || d === 6;
};
const ymd = (ms: number) => {
  const d = new Date(ms);
  return `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(d.getDate()).padStart(2, "0")}`;
};
function getWorkweekRange(base: Date) {
  const d = new Date(base);
  const day = d.getDay();
  const mondayDiff = day === 0 ? -6 : 1 - day;
  const monday = new Date(d);
  monday.setDate(d.getDate() + mondayDiff);
  const friday = new Date(monday);
  friday.setDate(monday.getDate() + 4);
  const start = new Date(monday.getFullYear(), monday.getMonth(), monday.getDate()).getTime();
  const end = new Date(friday.getFullYear(), friday.getMonth(), friday.getDate(), 23, 59, 59, 999).getTime();
  return { start, end };
}
function getMonthRange(base: Date) {
  const startD = new Date(base.getFullYear(), base.getMonth(), 1);
  const endD = new Date(base.getFullYear(), base.getMonth() + 1, 0, 23, 59, 59, 999);
  return { start: startD.getTime(), end: endD.getTime() };
}
function countWorkingDays(start: number, end: number) {
  let cnt = 0,
    cur = new Date(start);
  while (cur.getTime() <= end) {
    const g = cur.getDay();
    if (g >= 1 && g <= 5) cnt++;
    cur.setDate(cur.getDate() + 1);
  }
  return cnt;
}

export default function DashBoard() {
  const now = new Date();
  const [ym, setYM] = useState({ y: now.getFullYear(), m: now.getMonth() + 1 });

  const [baseDate] = useState<Date>(new Date());
  const [period, setPeriod] = useState<Period>("day");

  const [userRole, setUserRole] = useState<number | null>(null);
  const [userCompany, setUserCompany] = useState<string>("");
  const [roleReady, setRoleReady] = useState(false);

  const requesterCompanyKey = companyKey(userCompany);
  const [companyMode, setCompanyMode] = useState<string>("homeplus");
  const [companyDocs, setCompanyDocs] = useState<CompanyDoc[]>([]);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserRole(null);
        setUserCompany("");
        setRoleReady(true);
        return;
      }
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
        if (id === "pushcomz") return;
        if (data?.signup_active === false) return;

        list.push({
          id,
          company_name: String(data?.company_name ?? id),
          logo_url: data?.logo_url ? String(data.logo_url) : undefined,
          signup_active: Boolean(data?.signup_active),
          avail_hour: Number.isFinite(Number(data?.avail_hour)) ? Number(data?.avail_hour) : undefined,
        });
      });

      const order = (id: string) => (id === "homeplus" ? 1 : id === "nsmall" ? 2 : 99);
      list.sort((a, b) => {
        const ao = order(a.id),
          bo = order(b.id);
        if (ao !== bo) return ao - bo;
        return a.company_name.localeCompare(b.company_name);
      });

      setCompanyDocs(list);
    });

    return () => unsub();
  }, []);

  const [rows, setRows] = useState<RD[]>([]);
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "design_request")), (snap) => {
      const list: RD[] = [];
      snap.forEach((d) => list.push({ id: d.id, ...(d.data() as any) }));
      setRows(list);
    });
    return () => unsub();
  }, []);

  const [designers, setDesigners] = useState<{ name: string; company: string }[]>([]);
  useEffect(() => {
    const unsub = onSnapshot(query(collection(db, "users"), where("role", "==", 2)), (snap) => {
      const list: { name: string; company: string }[] = [];
      snap.forEach((d) => {
        const u = d.data() as any;
        list.push({ name: String(u?.name ?? ""), company: String(u?.company ?? "") });
      });
      setDesigners(list);
    });
    return () => unsub();
  }, []);

  const isVisibleRowForUser = (r: RD): boolean => {
    if (userRole === 1 && requesterCompanyKey) {
      return companyKey((r as any).company) === requesterCompanyKey;
    }
    return true;
  };

  const monthRange = useMemo(() => {
    const start = new Date(ym.y, ym.m - 1, 1).getTime();
    const end = new Date(ym.y, ym.m, 0, 23, 59, 59, 999).getTime();
    return { start, end };
  }, [ym]);

  const effectiveMode = useMemo(() => companyMode, [companyMode]);
  const isRequester = userRole === 1;
  const isOpsAllMode = !isRequester && effectiveMode === "all";

  const getAvailHourByCompanyId = (companyId: string): number | null => {
    const key = companyKey(companyId);
    if (!key) return null;
    const found = companyDocs.find((c) => companyKey(c.id) === key);
    const v = found?.avail_hour;
    if (typeof v === "number" && Number.isFinite(v) && v > 0) return v;
    return null;
  };

  // ★ 중요: status 취소 포함/제외를 여기서 따로 하지 않음(=취소도 포함됨)
  const monthRows = useMemo(() => {
    if (isOpsAllMode) return [];

    return rows.filter((r) => {
      const ts = pickDateMillis(r);
      const inMonth = ts !== null && ts >= monthRange.start && ts <= monthRange.end;
      if (!inMonth) return false;

      if (isRequester && requesterCompanyKey) {
        return companyKey((r as any).company) === requesterCompanyKey;
      }

      const modeKey = companyKey(effectiveMode);
      if (modeKey === "all") return true;

      const rowKey = companyKey((r as any).company);
      if (modeKey === "nsmall") return rowKey === "nsmall" || rowKey === "n-small";
      return rowKey === modeKey;
    });
  }, [rows, monthRange, effectiveMode, isOpsAllMode, isRequester, requesterCompanyKey]);

  const kpiMonth = useMemo(() => {
    if (isOpsAllMode) return null;

    const totalRequests = monthRows.length;
    const producedCount = monthRows.filter((r) => normalizeStatus((r as any).status) === "완료").length;
    const usedHours = sum(monthRows.map((r) => Number((r as any).out_work_hour) || 0));

    const targetCompanyId = isRequester ? requesterCompanyKey : effectiveMode;
    const v = getAvailHourByCompanyId(targetCompanyId);
    const availHours = v ?? 0;

    const usedRatio = availHours > 0 ? round1((usedHours / availHours) * 100) : 0;

    return {
      totalRequests,
      producedCount,
      usedHoursDisplay: usedHours.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      availHours,
      usedRatio,
    };
  }, [monthRows, effectiveMode, isOpsAllMode, isRequester, requesterCompanyKey, companyDocs]);

  // ★ 변경: 도넛 = assigned_designers[].task_type + count(가중치)만
  const taskTypeArr = useMemo(() => {
    if (isOpsAllMode) return [];
    const weighted: WeightedKey[] = monthRows.flatMap((r) => getTaskTypesFromAssignedDesigners_(r));
    const arr = groupCountWeighted(weighted).sort((a, b) => b.value - a.value);
    return arr;
  }, [monthRows, isOpsAllMode]);

  const statusArr = useMemo(() => {
    if (isOpsAllMode) return [];
    const order = ["대기중", "진행중", "검수중", "검수요청중", "완료", "취소"];
    const counts = groupCount(monthRows.map((r) => normalizeStatus((r as any).status)));
    const map = new Map(counts.map((v) => [v.name, v.value]));
    return order.map((n) => ({ name: n, value: map.get(n) || 0 }));
  }, [monthRows, isOpsAllMode]);

  const formArr = useMemo(() => {
    if (isOpsAllMode) return [];
    return groupCount(monthRows.map((r) => (r as any).task_form)).sort((a, b) => b.value - a.value);
  }, [monthRows, isOpsAllMode]);

  const periodInfo = useMemo(() => {
    if (!isOpsAllMode) return null;
    if (period === "day") {
      const start = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate()).getTime();
      const end = new Date(baseDate.getFullYear(), baseDate.getMonth(), baseDate.getDate(), 23, 59, 59, 999).getTime();
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
    const m = `${baseDate.getFullYear()}.${String(baseDate.getMonth() + 1).padStart(2, "0")}`;
    return { start, end, workingDays: wd, label: `${m} (평일만)` };
  }, [isOpsAllMode, period, baseDate]);

  const allFilteredRows = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return [];
    return rows.filter((r) => {
      const ts = pickDateMillis(r);
      if (ts === null || ts < periodInfo.start || ts > periodInfo.end || isWeekend(ts)) return false;
      if (!isVisibleRowForUser(r)) return false;
      return true;
    });
  }, [rows, periodInfo, isOpsAllMode, userRole, requesterCompanyKey]);

  const kpiAll = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return null;

    const totalRequests = allFilteredRows.length;
    const producedCount = allFilteredRows.filter((r) => normalizeStatus((r as any).status) === "완료").length;
    const usedHours = sum(allFilteredRows.map((r) => Number((r as any).in_work_hour) || 0));

    const people = designers.length;
    const workingDaysForCapacity = period === "month" ? 20.3 : periodInfo.workingDays;
    const rawAvailHours = people * workingDaysForCapacity * 8;
    const availHours = Math.round(rawAvailHours);

    const usedRatio = availHours ? round1((usedHours / availHours) * 100) : 0;

    return {
      totalRequests,
      producedCount,
      usedHoursDisplay: usedHours.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 }),
      availHours,
      usedRatio,
    };
  }, [allFilteredRows, designers, periodInfo, isOpsAllMode, period]);

  const doughnutCompany = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return { labels: [], data: [] };
    const inRange = rows.filter((r) => {
      const ts = pickDateMillis(r);
      if (ts === null || ts < periodInfo.start || ts > periodInfo.end || isWeekend(ts)) return false;
      if (!isVisibleRowForUser(r)) return false;
      return true;
    });

    const hp = inRange.filter(isHomeplus).length;
    const ns = inRange.filter(isNSmall).length;
    return { labels: ["Homeplus", "NSmall"], data: [hp, ns] };
  }, [rows, periodInfo, isOpsAllMode, userRole, requesterCompanyKey]);

  function getAssigneesClean(r: RD): string[] {
    const arr = Array.isArray((r as any).assigned_designers)
      ? (r as any).assigned_designers
      : (r as any).assigned_designer
        ? [(r as any).assigned_designer]
        : [];

    return arr
      .map((s: any) => String(s || "").trim())
      .filter((n: string) => n && n !== "미지정" && n !== "미배정");
  }

  const designerStack = useMemo(() => {
    if (!isOpsAllMode || !periodInfo) return { labels: [], hpData: [], nsData: [] };
    type Cnt = { hp: number; ns: number; total: number };
    const m = new Map<string, Cnt>();

    for (const r of rows) {
      const ts = pickDateMillis(r);
      if (ts === null || ts < periodInfo.start || ts > periodInfo.end || isWeekend(ts)) continue;
      if (!isVisibleRowForUser(r)) continue;

      const names = getAssigneesClean(r);
      if (names.length === 0) continue;

      const bucket: "hp" | "ns" | null = isHomeplus(r) ? "hp" : isNSmall(r) ? "ns" : null;
      if (!bucket) continue;

      for (const name of names) {
        const e = m.get(name) || { hp: 0, ns: 0, total: 0 };
        if (bucket === "hp") e.hp += 1;
        else e.ns += 1;
        e.total = e.hp + e.ns;
        m.set(name, e);
      }
    }

    const items = Array.from(m, ([name, v]) => ({ name, ...v }))
      .sort((a, b) => b.total - a.total)
      .slice(0, 20);

    return {
      labels: items.map((v) => v.name),
      hpData: items.map((v) => v.hp),
      nsData: items.map((v) => v.ns),
    };
  }, [rows, periodInfo, isOpsAllMode, userRole, requesterCompanyKey]);

  const doughnutRef = useRef<HTMLCanvasElement | null>(null);
  const barStatusRef = useRef<HTMLCanvasElement | null>(null);
  const barBottomRef = useRef<HTMLCanvasElement | null>(null);
  const chart1 = useRef<Chart | null>(null);
  const chart2 = useRef<Chart | null>(null);
  const chart3 = useRef<Chart | null>(null);

  const statusForChart = useMemo(() => {
    if (isOpsAllMode) {
      const order = ["대기", "진행중", "검수중", "검수요청", "완료", "취소"];
      const counts = groupCount(allFilteredRows.map((r) => normalizeStatus((r as any).status)));
      const map = new Map(counts.map((v) => [v.name, v.value]));
      return { labels: order, data: order.map((n) => map.get(n) || 0) };
    } else {
      return { labels: statusArr.map((s) => s.name), data: statusArr.map((s) => s.value) };
    }
  }, [isOpsAllMode, allFilteredRows, statusArr]);

  useEffect(() => {
    const isAll = isOpsAllMode;

    if (doughnutRef.current) {
      Chart.getChart(doughnutRef.current)?.destroy();
      const labels = isAll ? doughnutCompany.labels : taskTypeArr.map((d) => d.name);
      const data = isAll ? doughnutCompany.data : taskTypeArr.map((d) => d.value);
      const colors = isAll ? [COLORS[0], COLORS[1]] : taskTypeArr.map((_, i) => COLORS[i % COLORS.length]);

      chart1.current = new Chart(doughnutRef.current, {
        type: "doughnut",
        data: { labels, datasets: [{ data, backgroundColor: colors }] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          cutout: "60%",
          plugins: {
            legend: { position: "right" },
            datalabels: {
              formatter: (v: number, ctx: any) => {
                const t = ctx.dataset.data.reduce((a: number, b: number) => a + b, 0);
                const p = t ? (v / t) * 100 : 0;
                return p >= 5 ? `${p.toFixed(1)}%` : "";
              },
              color: "#fff",
              font: { weight: "bold" },
            },
          },
        } as any,
      });
    }

    if (barStatusRef.current) {
      Chart.getChart(barStatusRef.current)?.destroy();
      chart2.current = new Chart(barStatusRef.current, {
        type: "bar",
        data: { labels: statusForChart.labels, datasets: [{ label: "건수", data: statusForChart.data }] },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          layout: { padding: { top: 4 } },
          scales: { y: { beginAtZero: true, ticks: { precision: 0, font: { size: 14 } }, grace: "15%" } },
          plugins: {
            legend: { display: false },
            datalabels: {
              anchor: "end",
              align: "end",
              offset: 4,
              clip: false,
              font: { size: 14 },
              formatter: (v: number) => (v > 0 ? v : ""),
            },
          },
        } as any,
      });
    }

    if (barBottomRef.current) {
      Chart.getChart(barBottomRef.current)?.destroy();

      if (isAll) {
        chart3.current = new Chart(barBottomRef.current, {
          type: "bar",
          data: {
            labels: designerStack.labels,
            datasets: [
              { label: "Homeplus", data: designerStack.hpData, backgroundColor: "rgba(78, 121, 167,.7)", stack: "company" },
              { label: "NSmall", data: designerStack.nsData, backgroundColor: "rgba(255,157,167,.6)", stack: "company" },
            ],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 4 } },
            scales: {
              x: { stacked: true, ticks: { autoSkip: false, maxRotation: 40, minRotation: 0 } },
              y: { stacked: true, beginAtZero: true, ticks: { precision: 0, font: { size: 14 } }, grace: "15%" },
            },
            plugins: {
              legend: { position: "top" },
              datalabels: { anchor: "end", align: "end", offset: 2, clip: false, font: { size: 12 }, formatter: (v: number) => (v > 0 ? v : "") },
            },
          } as any,
        });
      } else {
        chart3.current = new Chart(barBottomRef.current, {
          type: "bar",
          data: {
            labels: formArr.map((d) => d.name),
            datasets: [{ label: "건수", data: formArr.map((d) => d.value), backgroundColor: "rgba(255,157,167,.6)" }],
          },
          options: {
            responsive: true,
            maintainAspectRatio: false,
            layout: { padding: { top: 4 } },
            scales: { y: { beginAtZero: true, ticks: { precision: 0, font: { size: 14 } }, grace: "15%" } },
            plugins: {
              legend: { display: false },
              datalabels: { anchor: "end", align: "end", offset: 4, clip: false, font: { size: 14 }, formatter: (v: number) => (v > 0 ? v : "") },
            },
          } as any,
        });
      }
    }

    return () => {
      chart1.current?.destroy();
      chart2.current?.destroy();
      chart3.current?.destroy();
    };
  }, [isOpsAllMode, taskTypeArr, doughnutCompany, statusForChart, formArr, designerStack]);

  const KPI = isOpsAllMode ? kpiAll : kpiMonth;
  const isAll = isOpsAllMode;

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

      <OperationList>
        <OperationItem>
          <OperationTitle>총 요청건수(건)</OperationTitle>
          <OpereationValue>{KPI?.totalRequests ?? 0}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>실 제작건수(건)</OperationTitle>
          <OpereationValue>{KPI?.producedCount ?? 0}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>사용공수</OperationTitle>
          <OpereationValue>{KPI?.usedHoursDisplay ?? "0.00"}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>가용공수</OperationTitle>
          <OpereationValue>{KPI?.availHours?.toLocaleString() ?? "0"}</OpereationValue>
        </OperationItem>
        <OperationItem>
          <OperationTitle>사용공수비율</OperationTitle>
          <OpereationValue>{usedRatioText}</OpereationValue>
        </OperationItem>
      </OperationList>

      <ChartsWrap $isAll={isAll}>
        <LeftChartWrap $isAll={isAll}>
          <LeftChart>
            <ChartTitle>{isAll ? "회사별 분포 (일/주/월 기준, 평일)" : "업무유형별 분포현황"}</ChartTitle>
            <CanvasBox $size="lg">
              <canvas ref={doughnutRef} />
            </CanvasBox>
          </LeftChart>
        </LeftChartWrap>

        <RightCol $isAll={isAll}>
          <RightChart $isAll={isAll}>
            <ChartTitle>{isAll ? "디자이너별 배정 건수 (회사 스택)" : "업무형태현황 (task_form)"}</ChartTitle>
            <CanvasBox $size="md">
              <canvas ref={barBottomRef} />
            </CanvasBox>
          </RightChart>
          <RightChart $isAll={isAll}>
            <ChartTitle>진행현황 (status)</ChartTitle>
            <CanvasBox $size="md">
              <canvas ref={barStatusRef} />
            </CanvasBox>
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
  font-family: "Pretendard";
`;

const OperationList = styled.ul`
  ${({ theme }) => theme.mixin.flex("center")};
  width: 100%;
  gap: 14px;
  margin-bottom: 16px;
`;

const OperationItem = styled.li`
  flex: 1;
  padding: 14px;
  border: 1px solid #e8ecf3;
  border-radius: 14px;
  background: #f7f9fc;
`;
const OperationTitle = styled.h3`
  color: #9aa4b2;
  font-size: 12px;
  margin-bottom: 8px;
`;
const OpereationValue = styled.strong`
  font-size: 32px;
  font-weight: 800;
`;

const ChartsWrap = styled.div<{ $isAll?: boolean }>`
  ${({ theme }) => theme.mixin.flex("center")};
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
  background: #fff;
  border: 1px solid #e8ecf3;
  border-radius: 16px;
  padding: 16px;
  height: 100%;
  flex: 1;
`;
const LeftChart = styled(ChartCommon)``;
const RightChart = styled(ChartCommon)<{ $isAll?: boolean }>`
  ${({ $isAll }) => $isAll && "height: calc((100% - 16px) / 2);"}
`;
const ChartTitle = styled.h3`
  margin: 0 0 10px;
  font-size: 15px;
  color: #666;
`;
const CanvasBox = styled.div<{ $size?: "lg" | "md" }>`
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