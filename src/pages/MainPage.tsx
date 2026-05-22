import styled from "styled-components";
import Header from "../components/Header";
import Main from "../components/Main";
import Aside from "../components/Aside";
import RequestDrawer from "../components/RequestDrawer";
import RequestForm from "../components/RequestForm";
import RequestDetail from "../components/RequestDetail";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import {
  doc,
  getDoc,
  collection,
  updateDoc,
  query,
  where,
  onSnapshot,
  Timestamp,
  getCountFromServer
} from "firebase/firestore";
import AssignDesigner from "../components/AssignDesigner";
import type { AssignedDesigner } from "../components/AssignDesigner";
import SwitchRole from "../components/SwitchRole";

// ✅ Drawer 콘텐츠 모드 타입
type DrawerMode = "create" | "edit" | "detail" | null;

// ★ 추가: Main.tsx의 ViewType과 동일하게 맞춤
type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour"| "channelworkhour";

// ★ 추가: 로그인 유저 정보만 따로 저장
type LoginUserInfo = {
  uid: string;
  displayName: string;
  role: number;
  company: string;
};

// 사이드바에서 쓰는 경량 타입(완료일 추가)
interface RequestLite {
  id: string;
  status?: RequestData["status"];
  completion_date?: any; // Firestore Timestamp | string | Date | undefined
  company?: string;
}

// 값 정리
const norm = (v: any) => String(v ?? "").trim();

// count 파싱(0 허용, 빈값/비정상은 0)
const toCount = (v: any) => {
  const s = String(v ?? "").trim();
  if (s === "") return 0;
  const n = Number(s);
  return Number.isFinite(n) && n >= 0 ? n : 0;
};

// 소수 오차 방지
const round3 = (n: number) => Math.round(n * 1000) / 1000;

// Firestore 저장 전 undefined 제거(깊은 구조 포함)
const sanitizeForFirestore = (v: any): any => {
  if (v === undefined) return undefined;

  // Firestore Timestamp (toDate 존재) 그대로 유지
  if (v && typeof v === "object" && typeof v.toDate === "function") {
    return v;
  }

  // serverTimestamp() 같은 FieldValue는 내부에 _methodName이 있음 (분해 금지)
  if (v && typeof v === "object" && typeof (v as any)._methodName === "string") {
    return v;
  }

  if (Array.isArray(v)) {
    return v.map(sanitizeForFirestore).filter((x) => x !== undefined);
  }

  if (v && typeof v === "object") {
    const out: any = {};
    Object.keys(v).forEach((k) => {
      const sv = sanitizeForFirestore(v[k]);
      if (sv !== undefined) out[k] = sv;
    });
    return out;
  }

  if (typeof v === "number" && !Number.isFinite(v)) return 0;
  return v;
};

// 회사 비교(공백/대소문자 방어)
const normalizeCompanyKey = (v: any) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");

const isSameCompany = (a: any, b: any) =>
  normalizeCompanyKey(a) === normalizeCompanyKey(b);

// Firestore company 값 대소문자/표기 차이 대응
const companyVariants = (raw: any) => {
  const t = String(raw ?? "").trim();
  if (!t) return [];

  const lower = t.toLowerCase();
  const upper = t.toUpperCase();
  const cap = t.charAt(0).toUpperCase() + t.slice(1).toLowerCase();

  const list = [t, lower, upper, cap];

  // NSmall / n-small 표기 차이 대응
  const key = normalizeCompanyKey(t);
  if (key === "nsmall") {
    list.push("nsmall", "NSmall", "Nsmall", "n-small", "N-Small");
  }

  if (key === "homeplus") {
    list.push("homeplus", "HomePlus", "Homeplus", "HOMEPLUS");
  }

  return Array.from(new Set(list)).slice(0, 30);
};

// full RequestData → Aside용 RequestLite 변환
const toRequestLite = (r: RequestData): RequestLite => {
  const d = r as any;

  return {
    id: r.id,
    status: (d.status as RequestData["status"]) ?? "대기중",
    completion_date:
      d.completion_date ??
      d.complete_date ??
      d.completion_dt ??
      d.completed_at ??
      null,
    company: norm(d.company ?? ""),
  };
};

// ★ 추가: 월 기준 필드
// DB에서 월 기준으로 사용할 날짜 필드명
// 현재 코드에서 completion_date를 많이 쓰고 있으므로 기본값은 completion_date로 둠
const REQUEST_MONTH_FIELD = "completion_date";

// ★ 추가: 과거 데이터에서 유지할 active 상태값
const ACTIVE_STATUS_VALUES = [
  "대기",
  "진행중",
  "검수요청",
  "검수중",
  "수정",
];

// ★ 추가: 완료/취소 상태값
const DONE_STATUS_VALUES = ["완료", "취소"];

// ★ 추가: 현재 월 시작일 / 다음 달 시작일 생성
const getCurrentMonthRange = () => {
  const now = new Date();

  const monthStart = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
    0,
    0,
    0,
    0
  );

  const nextMonthStart = new Date(
    now.getFullYear(),
    now.getMonth() + 1,
    1,
    0,
    0,
    0,
    0
  );

  return {
    monthStart,
    nextMonthStart,
    monthStartTimestamp: Timestamp.fromDate(monthStart),
    nextMonthStartTimestamp: Timestamp.fromDate(nextMonthStart),
  };
};

// ★ 추가: Date 변환 방어
const toDateSafe = (v: any): Date | null => {
  if (!v) return null;

  if (v instanceof Date) return v;

  if (typeof v?.toDate === "function") {
    return v.toDate();
  }

  if (typeof v === "string" || typeof v === "number") {
    const d = new Date(v);
    return Number.isNaN(d.getTime()) ? null : d;
  }

  return null;
};

// ★ 추가: 문서에서 월 기준 날짜값 추출
// 기존 completion_date 외에 과거 필드명도 프론트 필터용으로 방어
const getRequestMonthDate = (r: any): Date | null => {
  return toDateSafe(
    r?.[REQUEST_MONTH_FIELD] ??
      r?.complete_date ??
      r?.completion_dt ??
      r?.completed_at ??
      r?.created_at ??
      r?.request_date
  );
};

// ★ 추가: active 상태 여부
const isActiveStatus = (status: any) => {
  return ACTIVE_STATUS_VALUES.includes(norm(status));
};

// ★ 추가: 완료/취소 여부
const isDoneStatus = (status: any) => {
  return DONE_STATUS_VALUES.includes(norm(status));
};

// ★ 추가: 이번 달 전체 + 과거 active만 남기는 안전 필터
const isCurrentMonthOrPastActive = (
  r: RequestData,
  monthStart: Date,
  nextMonthStart: Date
) => {
  const baseDate = getRequestMonthDate(r as any);
  const status = norm((r as any).status);

  // 날짜가 없는 문서는 과거 데이터로 보고 완료/취소는 제외
  if (!baseDate) {
    return !isDoneStatus(status);
  }

  const t = baseDate.getTime();

  // 이번 달 문서는 완료/취소 포함 전체 유지
  if (t >= monthStart.getTime() && t < nextMonthStart.getTime()) {
    return true;
  }

  // 과거 문서는 active 상태만 유지
  if (t < monthStart.getTime()) {
    return isActiveStatus(status);
  }

  // 미래 데이터는 일단 유지
  return true;
};

// 디자이너 하위호환 필터용
const isAssignedToDesigner = (r: RequestData, displayName: string): boolean => {
  const d = r as any;

  const legacySingle = String(d.assigned_designer ?? "").trim();

  const arr = Array.isArray(d.assigned_designers) ? d.assigned_designers : [];
  const namesFromArr =
    arr.length > 0 && typeof arr[0] === "string"
      ? arr.map((x: any) => String(x).trim())
      : arr.map((x: any) => String(x?.name ?? "").trim());

  return legacySingle === displayName || namesFromArr.includes(displayName);
};

export default function MainPage() {
  const [userRole, setUserRole] = useState<number>(0);
  // Aside 카운트용 경량 데이터
  const [requests, setRequests] = useState<RequestLite[]>([]);
  // Dashboard / InWorkHour / ChannelWorkHour에 넘길 전체 design_request 데이터
  const [fullRequests, setFullRequests] = useState<RequestData[]>([]);
  const [userName, setUserName] = useState<string>("");
  const [isDrawerOpen, setIsDrawerOpen] = useState<boolean>(false);

  // const navigate = useNavigate();

  // 현재 로그인 유저 회사(Aside 카운트/필터 기준)
  const [/*userCompany*/, setUserCompany] = useState<string>("");

  // ★ 추가: Main.tsx와 같은 URL view 값을 MainPage에서도 읽음
  const [searchParams] = useSearchParams();
  const currentView = (searchParams.get("view") || "dashboard") as ViewType;

  // ★ 추가: auth 정보와 design_request 구독을 분리
  const [loginUserInfo, setLoginUserInfo] = useState<LoginUserInfo | null>(null);

  // ✅ 선택된 요청 데이터(수정/상세 공용)
  const [selectedData, setSelectedData] = useState<RequestData | undefined>(undefined);

  // ✅ Drawer 표시 모드 (기본 detail)
  const [drawerMode, setDrawerMode] = useState<DrawerMode>(null);

  // 사이드바에서 클릭한 상태값을 보관
  const [statusFromAside, setStatusFromAside] = useState<string | null>(null);

  // 필터 리셋 트리거
  const [filterResetKey, setFilterResetKey] = useState(0);

  // AssignDesigner 모달 상태
  const [assignOpen, setAssignOpen] = useState(false);
  const [assignTarget, setAssignTarget] = useState<RequestData | null>(null);

  // SwitchAccount 모달 상태
  const [switchOpen, setSwitchOpen] = useState(false);

  // MainPage 상단 state
  const [canSwitchAccount, setCanSwitchAccount] = useState(false);

  // ★ 추가: DB 전체 문서 수 / 현재 가져온 문서 수 비교용
  const [dbCountInfo, setDbCountInfo] = useState({
    totalCount: 0,
    readDocCount: 0,
    unreadDocCount: 0,
  });

  // ★ 추가: 자식 화면에서 기간/검색 필터가 켜졌는지 MainPage가 알기 위한 상태
  const [globalFilterState, setGlobalFilterState] = useState({
    hasDateFilter: false,
    hasKeyword: false,
  });

  // 자식(ManagerRequestItem)에서 호출할 “모달 열기”
  const openAssignDesigner = (target: RequestData) => {
    setAssignTarget(target);
    setAssignOpen(true);
  };

  // 모달 닫기
  const closeAssignDesigner = () => {
    setAssignOpen(false);
    setAssignTarget(null);
  };

  // SwitchAccount 열기/닫기
  const openSwitchAccount = () => {
    if (!canSwitchAccount) return;
    setSwitchOpen(true);
  };
  const closeSwitchAccount = () => setSwitchOpen(false);

  // ★ 추가: design_request 전체 문서 수 조회
  const getTotalDesignRequestCount = async () => {
    const countSnapshot = await getCountFromServer(
      collection(db, "design_request")
    );

    return countSnapshot.data().count;
  };

  /**
   * ★ 변경:
   * auth에서는 유저 정보만 가져옴.
   * design_request 구독은 아래 useEffect에서 currentView 기준으로 따로 처리.
   */
  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(auth, async (user) => {
      if (!user) {
        setUserRole(0);
        setUserName("");
        setRequests([]);
        setFullRequests([]);
        setCanSwitchAccount(false);
        setUserCompany("");
        setLoginUserInfo(null); // ★ 추가
        return;
      }

      const displayName = user.displayName || "";
      setUserName(displayName);

      const userDoc = await getDoc(doc(db, "users", user.uid));

      if (!userDoc.exists()) {
        setUserRole(0);
        setRequests([]);
        setFullRequests([]);
        setCanSwitchAccount(false);
        setUserCompany("");
        setLoginUserInfo(null); // ★ 추가
        return;
      }

      const data = userDoc.data() as any;

      const role = Number(data.role ?? 0);
      const curCompany = norm(data.company);
      const canSwitch = !!data.can_switch_account;

      setUserRole(role);
      setCanSwitchAccount(canSwitch);
      setUserCompany(curCompany);

      // ★ 추가
      setLoginUserInfo({
        uid: user.uid,
        displayName,
        role,
        company: curCompany,
      });
    });

    return () => unsubscribeAuth();
  }, []);

   /**
   * ★ 추가:
   * design_request 구독 전용.
   * 우선 요청자(role=1)만 view 기준으로 읽기 최적화.
   *
   * 요청자 + myrequestlist:
   *   requester == 내 이름 문서만 읽음
   *
   * 요청자 + allrequestlist:
   *   같은 회사 전체 문서 읽음
   *
   * 요청자 + dashboard / inworkhour:
   *   현재 코드는 읽기 절감을 우선해서 내 요청만 읽음.
   *   만약 대시보드가 회사 전체 기준이어야 하면 아래 requesterNeedsCompanyRows 조건에 "dashboard" 추가.
   */
  useEffect(() => {
    if (!loginUserInfo) {
      setRequests([]);
      setFullRequests([]);
      return;
    }

    const { uid, displayName, role, company } = loginUserInfo;
    const variants = companyVariants(company);

    const {
      monthStart,
      nextMonthStart,
      monthStartTimestamp,
      nextMonthStartTimestamp,
    } = getCurrentMonthRange();

    const baseCollection = collection(db, "design_request");

    const isFilterMode =
      globalFilterState.hasDateFilter || globalFilterState.hasKeyword;

    if (isFilterMode) {
      setRequests([]);
      setFullRequests([]);

      setDbCountInfo((prev) => ({
        totalCount: prev.totalCount,
        readDocCount: 0,
        unreadDocCount: prev.totalCount,
      }));

      console.log("====== MainPage 기본 조회 중단 ======");
      console.log("사유: 기간/검색 필터 모드");
      console.log("hasDateFilter:", globalFilterState.hasDateFilter);
      console.log("hasKeyword:", globalFilterState.hasKeyword);
      console.log("===================================");

      return;
    }

    // ★ 추가: role/view 기준 기본 where 조건 생성
    const getBaseConstraints = () => {
      const constraints: any[] = [];

      if (role === 1) {
        // 요청자는 대시보드 + 전체 요청 리스트에서 회사 전체를 읽음
        const requesterNeedsCompanyRows =
          currentView === "allrequestlist" || currentView === "dashboard";

        if (requesterNeedsCompanyRows) {
          if (variants.length > 0) {
            constraints.push(where("company", "in", variants));
          } else {
            constraints.push(where("requester", "==", displayName));
          }
        } else {
          // 나의 요청 리스트에서는 내 요청만 읽음
          constraints.push(where("requester", "==", displayName));

          if (variants.length > 0) {
            constraints.push(where("company", "in", variants));
          }
        }
      }

      // ★ 추가: 디자이너 나의 작업 리스트는 DB에서부터 내 배정 문서만 가져오기
      if (role === 2) {
        if (currentView === "myrequestlist" && uid) {
          constraints.push(
            where("assigned_designer_uids", "array-contains", uid)
          );
        }
      }

      // role 2 디자이너, role 3 매니저/관리자는 여기서 기본 제한 없음
      // 대신 아래 월/상태 조건으로 읽는 범위를 줄임

      return constraints;
    };

    const baseConstraints = getBaseConstraints();

    /**
     * ★ 추가:
     * 1) 이번 달 데이터 전체
     *    - 완료/취소 포함
     */
    const currentMonthQuery = query(
      baseCollection,
      ...baseConstraints,
      where(REQUEST_MONTH_FIELD, ">=", monthStartTimestamp),
      where(REQUEST_MONTH_FIELD, "<", nextMonthStartTimestamp)
    );

    /**
     * ★ 추가:
     * 2) 과거 active 데이터
     *    - 완료/취소 제외
     *    - Firestore 제한 회피를 위해 status별로 쿼리를 분리
     */
    const pastActiveQueries = ACTIVE_STATUS_VALUES.map((status) =>
      query(
        baseCollection,
        ...baseConstraints,
        where(REQUEST_MONTH_FIELD, "<", monthStartTimestamp),
        where("status", "==", status)
      )
    );

    const queryRefs = [currentMonthQuery, ...pastActiveQueries];

    // ★ 추가: 여러 snapshot 결과를 id 기준으로 merge하기 위한 저장소
    const latestMaps = queryRefs.map(() => new Map<string, RequestData>());
    const loaded = queryRefs.map(() => false);

    const applyRowsToState = (rows: RequestData[]) => {
      // ★ 추가: 혹시 모를 중복/예외 방어용 프론트 필터
      const fullRows = rows.filter((r) =>
        isCurrentMonthOrPastActive(r, monthStart, nextMonthStart)
      );

      if (role === 1) {
        const companyRows =
          company && currentView === "allrequestlist"
            ? fullRows.filter((r) => isSameCompany((r as any).company, company))
            : fullRows;

        // Aside 카운트는 기존처럼 내 요청 기준 유지
        const myRows = companyRows.filter((r: any) => {
          return String(r.requester ?? "").trim() === displayName;
        });

        // Main 화면용
        setFullRequests(companyRows);

        // Aside 카운트용
        setRequests(myRows.map(toRequestLite));

        return;
      }

      // 매니저/관리자 등은 현재 월 전체 + 과거 active 데이터 사용
      if (role !== 2) {
        setFullRequests(fullRows);
        setRequests(fullRows.map(toRequestLite));
        return;
      }

      // 디자이너는 읽어온 범위 안에서 배정된 요청만 Aside에 표시
      const filteredFull = fullRows.filter((r: any) => {
        const uids = Array.isArray(r.assigned_designer_uids)
          ? r.assigned_designer_uids.map((v: any) => String(v).trim())
          : [];

        const byUid = !!uid && uids.includes(uid);
        const byName = isAssignedToDesigner(r, displayName);

        return byUid || byName;
      });

      // ★ 기존 구조 유지:
      // Main에는 월/상태 필터가 적용된 fullRows 전달
      // Aside에는 디자이너에게 배정된 것만 전달
      setFullRequests(fullRows);
      setRequests(filteredFull.map(toRequestLite));
    };

    const emitMergedRows = async () => {
      // 모든 쿼리가 최초 1회는 로드된 뒤 화면 반영
      if (!loaded.every(Boolean)) return;

      const merged = new Map<string, RequestData>();

      latestMaps.forEach((map) => {
        map.forEach((row, id) => {
          merged.set(id, row);
        });
      });

      const mergedRows = Array.from(merged.values());

      // ★ 변경: Firestore가 실제 반환한 문서 수 = 읽은 문서 수
      const readDocCount = latestMaps.reduce(
        (sum, map) => sum + map.size,
        0
      );

      const totalCount = await getTotalDesignRequestCount();
      const unreadDocCount = Math.max(totalCount - readDocCount, 0);

      setDbCountInfo({
        totalCount,
        readDocCount,
        unreadDocCount,
      });
      console.log("====== design_request DB 비교 ======");
      console.log("전체 DB 문서 수:", totalCount);
      console.log("읽은 문서 수:", readDocCount);
      console.log("안 읽은 문서 수:", unreadDocCount);
      console.log("현재 view:", currentView);
      console.log("현재 role:", role);
      console.log("===================================");

      applyRowsToState(mergedRows);
    };

    const unsubscribes = queryRefs.map((qRef, index) =>
      onSnapshot(
        qRef,
        (snapshot: any) => {
          const map = new Map<string, RequestData>();

          snapshot.docs.forEach((docSnap: any) => {
            map.set(docSnap.id, {
              id: docSnap.id,
              ...(docSnap.data() as Omit<RequestData, "id">),
            });
          });

          latestMaps[index] = map;
          loaded[index] = true;

          emitMergedRows();
        },
        (error) => {
          console.error("design_request 구독 오류:", error);
        }
      )
    );

    return () => {
      unsubscribes.forEach((unsubscribe) => unsubscribe());
    };
  }, [loginUserInfo, currentView, globalFilterState]);

  const handleOpenCreate = () => {
    setSelectedData(undefined);
    setDrawerMode("create");
    setIsDrawerOpen(true);
  };

  // ✅ Drawer 닫기
  const closeDrawer = () => {
    setIsDrawerOpen(false);
    setSelectedData(undefined);
  };

  // 사이드바 status 클릭 → Main에게 전달할 값 세팅
  const handleClickStatusFromAside = (status: string) => {
    setStatusFromAside(status);
  };

  // Aside 연동 상태 리셋용
  const clearStatusFromAside = () => {
    setStatusFromAside(null);
  };

  // 상단 Nav에서 "나의 요청 리스트" 눌렀을 때 전역 필터 초기화
  const handleResetAllFilters = () => {
    setStatusFromAside(null);
    setFilterResetKey((prev) => prev + 1);
  };

  // AssignDesigner rows를 design_request 문서에 저장
  // - assigned_designers가 "row형 본체"가 됨
  // - _rowId는 UI 전용이므로 DB에 저장하지 않음
  // - assigned_rows는 더 이상 저장하지 않음
  const saveAssignDesignerToFirestore = async (target: RequestData, rows: AssignedDesigner[]) => {
    if (!target?.id) return;

    const docRequirement = norm((target as any)?.requirement); // 문서 작업항목

    // uid/task_form/task_type 기준 유효성
    const cleaned = rows.filter((r) => norm((r as any).task_form) && norm((r as any).task_type) && norm(r.uid));

    if (!cleaned.length) {
      alert("저장할 배정 행이 없습니다.");
      return;
    }

    // 배정일(귀속일) - 이번 저장(배정) 시점으로 찍음
    const assignedNow = Timestamp.fromDate(new Date());

    // assigned_designers row에 price도 저장
    const assigned_designers = cleaned.map((r) => {
      const c = toCount((r as any).count);

      return sanitizeForFirestore({
        uid: norm(r.uid),
        name: norm(r.name) || "(이름없음)",

        task_form: norm((r as any).task_form),
        task_type: norm((r as any).task_type),

        requirement: norm((r as any).requirement) || docRequirement || "",
        task_type_detail: norm((r as any).task_type_detail) || "",

        count: c,

        out_work_hour: Number((r as any).out_work_hour ?? 0) || 0,
        in_work_hour: Number((r as any).in_work_hour ?? 0) || 0,

        out_work_price: Number((r as any).out_work_price ?? 0) || 0,
        in_work_price: Number((r as any).in_work_price ?? 0) || 0,

        assigned_date: assignedNow, // 배정일(집계 기준일)
      });
    });

    // totals / uids는 assigned_designers(row형)에서 직접 산출
    const totalOut = round3(assigned_designers.reduce((s: number, r: any) => s + Number(r.out_work_hour ?? 0), 0));
    const totalIn = round3(assigned_designers.reduce((s: number, r: any) => s + Number(r.in_work_hour ?? 0), 0));

    // price totals
    const totalOutPrice = round3(
      assigned_designers.reduce((s: number, r: any) => s + Number(r.out_work_price ?? 0), 0)
    );
    const totalInPrice = round3(
      assigned_designers.reduce((s: number, r: any) => s + Number(r.in_work_price ?? 0), 0)
    );

    const uidsFromRows = Array.from(new Set(assigned_designers.map((r: any) => norm(r.uid)).filter(Boolean)));

    const payload = sanitizeForFirestore({
      out_work_hour: totalOut,
      in_work_hour: totalIn,
      out_work_price: totalOutPrice,
      in_work_price: totalInPrice,
      assigned_designers,
      assigned_designer_uids: uidsFromRows,
    });

    await updateDoc(doc(db, "design_request", target.id), payload);

    alert("디자이너 배정 저장 완료!");
  };

  return (
    <Container>
      <Aside
        requests={requests}
        userName={userName}
        role={userRole}
        onRequestButtonClick={handleOpenCreate}
        onClickStatus={handleClickStatusFromAside}
      />

      <DashBoardFrame>
        <Header onResetFilters={handleResetAllFilters} onOpenSwitchAccount={openSwitchAccount} />

        <Main
          userRole={userRole}
          requestRows={fullRequests}
          dbCountInfo={dbCountInfo}
          setIsDrawerOpen={setIsDrawerOpen}
          onGlobalFilterChange={setGlobalFilterState}
          setEditData={(data: RequestData) => {
            setSelectedData(data);
            setDrawerMode("edit");
          }}
          setDetailData={(data: RequestData) => {
            setSelectedData(data);
            setDrawerMode("detail");
          }}
          statusFromAside={statusFromAside}
          clearStatusFromAside={clearStatusFromAside}
          filterResetKey={filterResetKey}
          onOpenAssignDesigner={openAssignDesigner}
        />
      </DashBoardFrame>

      <RequestDrawer
        isOpen={isDrawerOpen}
        onClose={closeDrawer}
        isDetail={drawerMode === "detail"}
      >
        {drawerMode === "create" && (
          <RequestForm userName={userName} isDrawerOpen={isDrawerOpen} onClose={closeDrawer} />
        )}

        {drawerMode === "edit" && selectedData && (
          <RequestForm
            userName={userName}
            isDrawerOpen={isDrawerOpen}
            editData={selectedData}
            onClose={closeDrawer}
          />
        )}

        {drawerMode === "detail" && selectedData && (
          <RequestDetail
            data={selectedData}
            onClose={closeDrawer}
            currentUserName={userName}
            currentUserRole={userRole}
          />
        )}
      </RequestDrawer>

      <AssignDesigner
        isOpen={assignOpen}
        onClose={closeAssignDesigner}
        target={assignTarget}
        onAssign={async (rows) => {
          if (!assignTarget) return;
          await saveAssignDesignerToFirestore(assignTarget, rows); // AssignedDesigner[]
        }}
      />

      {/* 계정전환 모달 (MainPage에서 렌더) */}
      <SwitchRole isOpen={switchOpen} onClose={closeSwitchAccount} />
    </Container>
  );
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  width: 100%;
  height: 100%;
`;

const DashBoardFrame = styled.div`
  flex: 1;
`;