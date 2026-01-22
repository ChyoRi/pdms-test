import { useEffect, useMemo, useState } from "react";
import styled from "styled-components";
import { collection, onSnapshot, query, where } from "firebase/firestore";
import { db } from "../firebaseconfig";
import InWorkHourFilter from "./InWorkHourFilter";

/** ───────── Types ───────── */
// ★ 변경: 제작건수(count) 제거 → 해당일 내부공수(inHour)로 교체
type DailyStat = { rate: number; inHour: number };

type DesignerRow = {
  name: string;
  wait: number;
  progress: number;
  done: number;
  usedHours: number;
  daily: DailyStat[];   // 1~31일
  monthRate: number;    // 선택 월 공수달성율
  monthInHour: number;  // 선택 월 누적 in_work_hour 합
};

type AssignedDesignerObj = {
  uid?: string;
  name?: string;
  displayName?: string;
  designer_uid?: string;
  designer_name?: string;
  designer?: string;

  // 스키마 최신(문서에 실제 존재)
  in_work_hour?: number | string;
  out_work_hour?: number | string;
};

type RequestDoc = {
  id: string;

  // assigned_designers가 string[] 뿐 아니라 object[]로도 올 수 있음
  assigned_designers?: Array<string | AssignedDesignerObj>;

  assigned_designer?: string;
  status?: string;
  in_work_hour?: number;
  company?: string;

  // 날짜 필드(서로 다른 스키마 대비)
  request_date?: any;
  open_date?: any;
  created_date?: any;

  // 디자이너별 내부공수 맵 (키: uid 또는 name)
  in_work_hour_by_designer?: Record<string, number | string>;

  // 행(row) 기반 배정 데이터
  assign_rows?: Array<{
    designer_uid?: string;
    designer_name?: string;
    designer?: string;
    in_work_hour?: number | string;
    out_work_hour?: number | string;
  }>;
};

// 이름 끝 '.'(여러 개 포함)인 계정은 전부 제외
const isDummyByName = (name: string) => {
  const n = String(name ?? "").trim();
  if (!n) return false;
  return /\.+$/.test(n) || n.startsWith("★");
};

const DISPLAY_BLACKLIST = new Set<string>(["미배정"]);

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

// 일/월 “집계 기준”을 request_date로 고정(채널별 out_work_hour와 동일한 기준)
const requestDateOnly = (r: RequestDoc): Date | null => parseLoose(r.request_date);

const getDaysInMonth = (year: number, monthIndex: number) =>
  new Date(year, monthIndex + 1, 0).getDate();

const isWait = (s?: string) => s === "대기" || s === "대기중";
const isDone = (s?: string) => s === "완료";
const isProgress = (s?: string) =>
  s === "진행중" ||
  s === "검수중" ||
  s === "검수요청" ||
  s === "수정";

const MONTHLY_TARGET_HOURS = 162;

const floorTo = (n: number, digits = 2) => {
  const p = Math.pow(10, digits);
  return Math.sign(n) * Math.floor(Math.abs(n) * p + 1e-9) / p;
};

const formatMax2 = (n: number) => {
  return n.toFixed(2).replace(/\.?0+$/, "");
};

const normCompany = (c?: string): "nsmall" | "homeplus" | "other" => {
  const k = String(c ?? "").trim().replace(/\s+/g, "").toLowerCase();
  if (k === "nsmall" || k === "n-small") return "nsmall";
  if (k === "homeplus") return "homeplus";
  return "other";
};

const toNum = (v: any) => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

/** ───────── Component ───────── */
export default function InWorkHour({
  dailyHours = 8,
  targetDate,
}: {
  dailyHours?: number;
  targetDate?: Date;
}) {
  const [docs, setDocs] = useState<RequestDoc[]>([]);
  const [designerNames, setDesignerNames] = useState<string[]>([]);

  const [uidByName, setUidByName] = useState<Record<string, string>>({});
  const [nameByUid, setNameByUid] = useState<Record<string, string>>({});

  const day = toMidnight(targetDate ?? new Date());
  const todayMidnight = useMemo(() => toMidnight(new Date()), []);

  const [selectedYear, setSelectedYear] = useState(day.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState(day.getMonth());

  const daysInSelectedMonth = useMemo(
    () => getDaysInMonth(selectedYear, selectedMonth),
    [selectedYear, selectedMonth]
  );

  const weekendFlags = useMemo(
    () =>
      Array.from({ length: daysInSelectedMonth }, (_, i) => {
        const d = new Date(selectedYear, selectedMonth, i + 1);
        const dow = d.getDay();
        return dow === 0 || dow === 6;
      }),
    [selectedYear, selectedMonth, daysInSelectedMonth]
  );

  const todayFlags = useMemo(() => {
    if (
      todayMidnight.getFullYear() !== selectedYear ||
      todayMidnight.getMonth() !== selectedMonth
    ) {
      return Array(daysInSelectedMonth).fill(false);
    }

    const todayIdx = todayMidnight.getDate() - 1;
    return Array.from({ length: daysInSelectedMonth }, (_, i) => i === todayIdx);
  }, [todayMidnight, selectedYear, selectedMonth, daysInSelectedMonth]);

  useEffect(() => {
    const qUsers = query(collection(db, "users"), where("role", "==", 2));
    const unSub = onSnapshot(qUsers, (snap) => {
      const names: string[] = [];
      const _uidByName: Record<string, string> = {};
      const _nameByUid: Record<string, string> = {};

      snap.docs.forEach((d) => {
        const data = d.data() as any;
        const uid = d.id;
        const name = String(data.name || data.displayName || "").trim();
        if (!name) return;
        if (isDummyByName(name)) return;

        names.push(name);
        _uidByName[name] = uid;
        _nameByUid[uid] = name;
      });

      setDesignerNames(names);
      setUidByName(_uidByName);
      setNameByUid(_nameByUid);
    });

    return () => unSub();
  }, []);

  useEffect(() => {
    const qRef = query(collection(db, "design_request"));
    const unSub = onSnapshot(qRef, (snap) => {
      const list = snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
      setDocs(list);
    });
    return () => unSub();
  }, []);

  // assigned_designers 요소(문자/객체/uid 혼재)를 "표시용 name"으로 정규화
  const normalizeAssigneeName = (v: any): string => {
    if (!v) return "";

    if (typeof v === "string") {
      const s = v.trim();
      return nameByUid[s] ? nameByUid[s] : s;
    }

    if (typeof v === "object") {
      const name =
        v.name ?? v.displayName ?? v.designer_name ?? v.designer ?? "";
      const uid = v.uid ?? v.designer_uid ?? "";

      const n = String(name ?? "").trim();
      if (n) return n;

      const u = String(uid ?? "").trim();
      if (!u) return "";
      return nameByUid[u] ? nameByUid[u] : u;
    }

    const s = String(v).trim();
    return nameByUid[s] ? nameByUid[s] : s;
  };

  // 원본 배정 배열
  const getAssignees = (r: RequestDoc): string[] => {
    if (Array.isArray(r.assigned_designers) && r.assigned_designers.length) {
      return r.assigned_designers
        .map((x) => normalizeAssigneeName(x))
        .filter(Boolean);
    }
    if (r.assigned_designer) return [normalizeAssigneeName(r.assigned_designer)];
    return [];
  };

  // doc에서 "공수 근거"로 잡을 디자이너 식별자들(이름/uid)을 모두 끌어오기
  const getAssigneeKeysFromHours = (r: RequestDoc): string[] => {
    const keys = new Set<string>();

    // assigned_designers 객체(최신 스키마)에도 uid/name이 있음
    const ad = (r as any)?.assigned_designers;
    if (Array.isArray(ad)) {
      ad.forEach((x: any) => {
        if (!x) return;
        if (typeof x === "object") {
          const u = String(x?.uid ?? x?.designer_uid ?? "").trim();
          const n = String(
            x?.name ?? x?.displayName ?? x?.designer_name ?? x?.designer ?? ""
          ).trim();
          if (u) keys.add(u);
          if (n) keys.add(n);
        } else if (typeof x === "string") {
          const s = String(x).trim();
          if (s) keys.add(s);
        }
      });
    }

    // 1) in_work_hour_by_designer keys
    const map = (r as any)?.in_work_hour_by_designer;
    if (map && typeof map === "object") {
      Object.keys(map).forEach((k) => {
        const kk = String(k).trim();
        if (kk) keys.add(kk);
      });
    }

    // 2) assign_rows
    const rows = (r as any)?.assign_rows;
    if (Array.isArray(rows)) {
      rows.forEach((row: any) => {
        const u = String(row?.designer_uid ?? "").trim();
        const n = String(row?.designer_name ?? row?.designer ?? "").trim();
        if (u) keys.add(u);
        if (n) keys.add(n);
      });
    }

    return Array.from(keys);
  };

  const getEffectiveAssignees = (r: RequestDoc): string[] => {
    const raw = getAssignees(r).map((s) => s.trim()).filter(Boolean);
    const fromHours = getAssigneeKeysFromHours(r);

    const merged = [...raw, ...fromHours]
      .map((k) => {
        const kk = String(k).trim();
        if (!kk) return "";
        return nameByUid[kk] ? nameByUid[kk] : kk;
      })
      .filter(Boolean);

    const cleaned = merged.filter((n) => n !== "미배정" && !isDummyByName(n));

    const comp = normCompany(r.company);
    if (cleaned.length <= 1) return cleaned;
    if (comp === "homeplus") return cleaned;
    return cleaned;
  };

  // 내부공수는 "균등분배" 금지.
  // (1) assigned_designers[].in_work_hour
  // (2) in_work_hour_by_designer
  // (3) assign_rows
  // 외에는 0
  const shareHourFor = (r: RequestDoc, whoName: string): number => {
    const who = String(whoName ?? "").trim();
    if (!who) return 0;

    const whoUid = uidByName[who];

    // assigned_designers(객체배열)에서 직접 내부공수 합산
    const ad = (r as any)?.assigned_designers;
    if (Array.isArray(ad) && ad.length) {
      const sumFromAssigned = ad
        .filter((x: any) => x && typeof x === "object")
        .filter((x: any) => {
          const u = String(x?.uid ?? x?.designer_uid ?? "").trim();
          const n = String(
            x?.name ?? x?.displayName ?? x?.designer_name ?? x?.designer ?? ""
          ).trim();

          // uid 매칭 우선, 없으면 name 매칭
          if (whoUid && u) return u === whoUid;
          if (n) return n === who;
          // 레거시로 uid를 name 칸에 넣은 경우 대비
          if (whoUid && n) return n === whoUid;
          return false;
        })
        .reduce((acc: number, x: any) => acc + toNum(x?.in_work_hour), 0);

      if (sumFromAssigned > 0) return sumFromAssigned;
    }

    // 1) in_work_hour_by_designer
    const map = (r as any)?.in_work_hour_by_designer;
    if (map && typeof map === "object") {
      if (Object.prototype.hasOwnProperty.call(map, who)) return toNum(map[who]);

      const uid = whoUid;
      if (uid && Object.prototype.hasOwnProperty.call(map, uid)) return toNum(map[uid]);
    }

    // 2) assign_rows
    const rows = (r as any)?.assign_rows;
    if (Array.isArray(rows) && rows.length) {
      const uid = whoUid;

      const sum = rows
        .filter((row: any) => {
          const ru = String(row?.designer_uid ?? "").trim();
          const rn = String(row?.designer_name ?? row?.designer ?? "").trim();
          if (uid && ru) return ru === uid;
          if (rn) return rn === who;
          return ru === who;
        })
        .reduce((acc: number, row: any) => acc + toNum(row?.in_work_hour), 0);

      return sum;
    }

    return 0;
  };

  const rows: DesignerRow[] = useMemo(() => {
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

      // ★ 유지: 월/일 집계는 request_date 기준
      const monthDocs = mine.filter((d) => {
        const dt = requestDateOnly(d);
        return dt && dt.getFullYear() === targetYear && dt.getMonth() === targetMonth;
      });

      const dayDocs = mine.filter((d) => {
        const dt = requestDateOnly(d);
        return sameDay(dt, day);
      });

      const wait = mine.filter((d) => isWait(d.status)).length;
      const progress = mine.filter((d) => isProgress(d.status)).length;

      // 완료는 “해당 day(오늘) 완료”
      const done = dayDocs.filter((d) => isDone(d.status)).length;

      const usedHoursRaw = dayDocs.reduce((s, d) => s + shareHourFor(d, name), 0);
      const usedHours = floorTo(usedHoursRaw, 2);

      // 일별 셀의 하단 값 = 해당일 in_work_hour 합
      const dailyInArr = Array(daysInMonth).fill(0);

      monthDocs.forEach((d) => {
        const dt = requestDateOnly(d);
        if (!dt) return;
        const idx = dt.getDate() - 1;
        if (idx < 0 || idx >= daysInMonth) return;

        // ★ 핵심: 해당 request_date에 속한 문서들의 in_work_hour(디자이너별) 합
        // (필요 시 '취소' 제외하려면 여기에서 조건 추가)
        // if (d.status === "취소") return; // ★ 옵션
        dailyInArr[idx] += shareHourFor(d, name);
      });

      const daily: DailyStat[] = dailyInArr.map((h) => ({
        rate: Math.round((h / dailyHours) * 100),
        inHour: floorTo(h, 2), // 표시 안정화
      }));

      const monthInRaw = dailyInArr.reduce((s, h) => s + h, 0);
      const monthInHour = floorTo(monthInRaw, 2);

      const monthRate =
        monthInRaw > 0 ? Math.round((monthInRaw / MONTHLY_TARGET_HOURS) * 100) : 0;

      return {
        name,
        wait,
        progress,
        done,
        usedHours,
        daily,
        monthRate,
        monthInHour,
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
    uidByName,
    nameByUid,
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
          <colgroup>
            <col style={{ width: "3%" }} />
            <col style={{ width: "5%" }} />
            <col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} />
            <col style={{ width: "4%" }} />
            {Array.from({ length: daysInSelectedMonth }).map((_, i) => (
              <col key={i} />
            ))}
            <col style={{ width: "5%" }} />
          </colgroup>

          <thead>
            <tr>
              <InWorkHourTableTh rowSpan={2}>번호</InWorkHourTableTh>
              <InWorkHourTableTh rowSpan={2}>디자이너명</InWorkHourTableTh>
              <InWorkHourTableTh colSpan={4}>
                현재현황(일공수 : {dailyHours}h)
              </InWorkHourTableTh>
              <InWorkHourTableTh colSpan={daysInSelectedMonth}>
                {/* ★ 변경: 제작건수 제거 → 내부공수 표시 */}
                일별 진행현황(공수달성율 / 내부공수h)
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
                    {/* 내부공수(inHour) */}
                    <div>{formatMax2(d.inHour)}</div>
                  </InWorkHourTableTd>
                ))}

                <InWorkHourTableTd>
                  <div>{r.monthRate.toFixed(0)}%</div>
                  {/* 월 평균 하단 = 월 누적 in_work_hour 합 */}
                  <div>{formatMax2(r.monthInHour)}</div>
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

const InWorkHourTableTh = styled.th<{
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

const InWorkHourTableTd = styled.td<{
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
  color: ${({ $isWeekend, $isToday }) => {
    if ($isToday) return "#000000";
    if ($isWeekend) return "#ffdfdf45";
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