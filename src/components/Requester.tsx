import styled from "styled-components";
import { useState, useEffect, useMemo, useRef } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc, getDoc, serverTimestamp, getDocs, Timestamp } from "firebase/firestore";
import RequesterRequestList from "./RequesterRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import DashBoard from "./DashBoard";
import { makeSearchIndex, matchesQuery } from "../utils/search.ts";
import ExportCSV from "./ExportCSV";
import { downloadArrayToCSV } from "../utils/firestoreToCSV";
import { addHistoryComment } from "../utils/commentHistory";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

type DbCountInfo = {
  totalCount: number;
  readDocCount: number;
  unreadDocCount: number;
};

type GlobalFilterState = {
  hasDateFilter: boolean;
  hasKeyword: boolean;
};

interface RequesterProps {
  view: ViewType;
  requestRows: RequestData[];
  dbCountInfo?: DbCountInfo;
  onGlobalFilterChange?: (state: GlobalFilterState) => void;
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
  setDetailData: (data: RequestData) => void;
  userRole: number | null;
  statusFromAside?: string | null;
  clearStatusFromAside?: () => void;
  filterResetKey?: number;
}

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_DEPT = "부서 선택";

// ★ 추가: 요청기간 직접 조회용 날짜 필드 후보
const REQUEST_DATE_FIELDS = ["request_date", "requested_at", "requestDate"] as const;

// ★ 추가: 요청기간 시작 시간
const toStartOfDayForQuery = (date: Date) => {
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d;
};

// ★ 추가: 요청기간 종료 시간
const toEndOfDayForQuery = (date: Date) => {
  const d = new Date(date);
  d.setHours(23, 59, 59, 999);
  return d;
};

// ★ 추가: 문자열 날짜 DB 대응용
const formatYmdForQuery = (date: Date, sep: "-" | "." | "/") => {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}${sep}${m}${sep}${d}`;
};

// ★ 추가: 중복 문서 병합
const mergeRequestRows = (...groups: RequestData[][]) => {
  const map = new Map<string, RequestData>();

  groups.forEach((rows) => {
    rows.forEach((row: any) => {
      if (!row?.id) return;
      map.set(row.id, row);
    });
  });

  return Array.from(map.values());
};

// 회사 키 정규화 (homeplus 판정용)
const normalizeCompanyKey = (v: any) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/[\s_-]+/g, "");

// 회사 동일 판정 헬퍼
const isSameCompany = (a: any, b: any) => normalizeCompanyKey(a) === normalizeCompanyKey(b);

// 공수 숫자 안전 파서
const toHourNum = (v: any): number => {
  const n = Number(v);
  return Number.isFinite(n) ? n : 0;
};

// 소수 3자리 반올림(기존 흐름과 동일하게 쓰기 좋음)
const round3 = (n: number) => Math.round((Number(n) || 0) * 1000) / 1000;

// 이번 달 판정 헬퍼
const isSameMonth = (d: Date, base = new Date()) =>
  d.getFullYear() === base.getFullYear() && d.getMonth() === base.getMonth();

export default function Requester({ view, requestRows, dbCountInfo, onGlobalFilterChange, userRole, setIsDrawerOpen, setEditData, setDetailData, statusFromAside, clearStatusFromAside, filterResetKey }: RequesterProps) {
  const [userName, setUserName] = useState("");
  const [userCompany, setUserCompany] = useState<string>("");
  const [userUid, setUserUid]   = useState("");
  const [requests, setRequests] = useState<RequestData[]>([]); // request DB 배열
  // ★ 추가: 요청기간/검색 시 Firestore에서 직접 가져온 데이터
  const [filterFetchedRows, setFilterFetchedRows] = useState<RequestData[] | null>(null);
  // ★ 추가: 기간/검색 직접 조회로 Firestore에서 읽은 문서 수
  const [filterReadInfo, setFilterReadInfo] = useState({
    readDocCount: 0,
  });
  const [statusFilter, setStatusFilter] = useState<string>("진행 상태 선택");
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
  const [deptFilter, setDeptFilter] = useState<string>(DEFAULT_DEPT);

  // Firestore companies.task_form 기반 부서 옵션 state
  const [deptOptions, setDeptOptions] = useState<string[]>([]);

  // 🔍 검색: 입력값과 적용값 분리
  const [keywordInput, setKeywordInput] = useState<string>(""); // 인풋 바인딩(타이핑용)
  const [keyword, setKeyword] = useState<string>("");           // 검색 버튼 클릭 시에만 적용
  // 전체 리스트에서 "타인 요청 수정/취소 잠금" 토글
  const lockOthers = view === "allrequestlist";
  // CSV로 추출 상태
  const [exporting, setExporting] = useState(false);
  const [readLocal, setReadLocal] = useState<{ [id: string]: number }>({});

  // ★ 추가: 이전 view 저장용
  const prevViewRef = useRef<ViewType | null>(null);

  // ★ 추가: view 변경 직후 이전 필터값으로 globalFilter가 다시 켜지는 것 방지
  const isResettingViewRef = useRef(false);

  // ★ 추가: view 변경 직후 필터 직접 조회 1회 차단용
  const skipFilterFetchOnceRef = useRef(false);

  // ★ 추가: 나의 요청 리스트 ↔ 전체 요청 리스트 이동 시 필터 초기화
  useEffect(() => {
    // 최초 진입은 초기화하지 않음
    if (prevViewRef.current && prevViewRef.current !== view) {
      // ★ 추가: 아래 onGlobalFilterChange useEffect가 이전 필터값으로 다시 true 보내는 것 방지
      isResettingViewRef.current = true;

      // ★ 추가: view 변경 순간 이전 dateRange/keyword로 직접 조회되는 것 방지
      skipFilterFetchOnceRef.current = true;

      setDateRange({ start: null, end: null });
      setKeyword("");
      setKeywordInput("");
      setStatusFilter(DEFAULT_STATUS);
      setDeptFilter(DEFAULT_DEPT);

      // ★ 중요: 기간/검색 직접 조회 데이터 초기화
      setFilterFetchedRows(null);
      setFilterReadInfo({ readDocCount: 0 });

      // ★ 중요: MainPage 기본 조회 중단 상태 해제
      onGlobalFilterChange?.({
        hasDateFilter: false,
        hasKeyword: false,
      });

      // ★ 사이드바 상태 필터도 같이 초기화
      clearStatusFromAside?.();
    }

    prevViewRef.current = view;
  }, [view]);

  useEffect(() => {
    // ★ 추가: view 변경 초기화 직후에는 무조건 false만 보냄
    if (isResettingViewRef.current) {
      isResettingViewRef.current = false;

      onGlobalFilterChange?.({
        hasDateFilter: false,
        hasKeyword: false,
      });

      return;
    }

    const hasDateFilter = !!(dateRange.start && dateRange.end);
    const hasKeyword = !!keyword.trim();

    const isListView = view === "myrequestlist" || view === "allrequestlist";

    onGlobalFilterChange?.({
      hasDateFilter: isListView && hasDateFilter,
      hasKeyword: isListView && hasKeyword,
    });
  }, [view, dateRange.start, dateRange.end, keyword, onGlobalFilterChange]);

  // ✅ 로그인 사용자 이름 가져오기
  // ✅ 로그인 사용자 이름 + company 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      if (!user) return;
      if (user.displayName) setUserName(user.displayName);
       setUserUid(user.uid);

      const uref = doc(db, "users", user.uid);
      const usnap = await getDoc(uref);
      if (usnap.exists()) {
        const data = usnap.data() as any;
        setUserCompany((data?.company ?? "").trim());
      } else {
        setUserCompany("");
      }
    });
    return () => unsubscribe();
  }, []);

  // companies에서 company_name == userCompany 로 task_form 구독
  useEffect(() => {
    if (!userCompany) {
      setDeptOptions([]);
      return;
    }

    const qRef = query(
      collection(db, "companies"),
      where("company_name", "==", userCompany.trim())
    );

    const unsub = onSnapshot(qRef, (qs) => {
      if (qs.empty) {
        setDeptOptions([]);
        return;
      }

      // company_name이 유니크하다는 전제: 첫 문서 사용
      const data = qs.docs[0].data() as any;

      const forms = Array.isArray(data?.task_form) ? data.task_form : [];
      const cleaned = forms
        .map((v: any) => String(v ?? "").trim())
        .filter(Boolean);

      setDeptOptions(cleaned);
    });

    return () => unsub();
  }, [userCompany]);

  // ✅ 요청자가 보낸 요청만 가져오기
  // 요청 데이터: view에 따라 쿼리 스위칭
  // ✅ 목록 구독: view/userCompany/userName 변화에 반응
  useEffect(() => {
    setRequests([]);

    // 대시보드/공수 화면은 이 컴포넌트에서 목록 없음
    if (view === "dashboard" || view === "inworkhour") {
      return;
    }

    if (!userName) return;

    // ★ 추가: 요청기간/검색 직접 조회 데이터가 있으면 우선 사용
    const sourceRows = filterFetchedRows ?? requestRows;

    let nextRows: RequestData[] = [];

    // myrequestlist: 내가 요청한 것
    if (view === "myrequestlist") {
      nextRows = sourceRows.filter((r: any) => {
        const sameRequester = String(r.requester ?? "").trim() === userName;

        const sameCompany =
          userCompany && userCompany.trim()
            ? isSameCompany((r as any).company, userCompany)
            : true;

        return sameRequester && sameCompany;
      });
    }

    // allrequestlist: 같은 회사 전체 요청
    if (view === "allrequestlist") {
      nextRows = sourceRows.filter((r: any) => {
        if (!userCompany) return false;
        return isSameCompany((r as any).company, userCompany);
      });
    }

    const sorted = [...nextRows].sort((a: any, b: any) => {
      const aa = String(a.design_request_id ?? "");
      const bb = String(b.design_request_id ?? "");
      return bb.localeCompare(aa, "en", { numeric: true });
    });

    setRequests(sorted);
  }, [view, requestRows, filterFetchedRows, userCompany, userName]);

  // ★ 추가: Requester - 요청기간/검색 시 완료·취소 포함해서 Firestore 직접 조회
  useEffect(() => {
    // ★ 추가: view 변경 직후 이전 필터값으로 getDocs가 실행되는 것 방지
    if (skipFilterFetchOnceRef.current) {
      skipFilterFetchOnceRef.current = false;
      setFilterFetchedRows(null);
      setFilterReadInfo({ readDocCount: 0 });
      return;
    }
    
    if (view === "dashboard" || view === "inworkhour") {
      setFilterFetchedRows(null);
      setFilterReadInfo({ readDocCount: 0 });
      return;
    }

    const hasDateFilter = !!(dateRange.start && dateRange.end);
    const q = keyword.trim();
    const hasKeyword = !!q;

    // 요청기간도 없고 검색어도 없으면 기본 데이터 사용
    if (!hasDateFilter && !hasKeyword) {
      setFilterFetchedRows(null);
      setFilterReadInfo({ readDocCount: 0 });
      return;
    }

    let cancelled = false;

    const fetchFilteredRows = async () => {
      try {
        const fetchedGroups: RequestData[][] = [];
        let directReadDocCount = 0;
        // ★ 추가: 요청자 화면 필터 직접 조회용 기본 조건
        const baseConstraints: any[] = [];

        if (view === "myrequestlist") {
            // 나의 요청 리스트: 내 요청 + 내 회사만 DB에서 조회
            if (userName) {
              baseConstraints.push(where("requester", "==", userName));
            }

            if (userCompany) {
              baseConstraints.push(where("company", "==", userCompany));
            }
          }

          if (view === "allrequestlist") {
            // 전체 요청 리스트: 내 회사 전체만 DB에서 조회
            if (userCompany) {
              baseConstraints.push(where("company", "==", userCompany));
            }
          }

        // ★ 요청기간 필터가 있으면 해당 기간 전체 조회
        // status 조건을 넣지 않으므로 완료/취소 포함
        if (hasDateFilter && dateRange.start && dateRange.end) {
          const startDate = toStartOfDayForQuery(dateRange.start);
          const endDate = toEndOfDayForQuery(dateRange.end);

          const startTimestamp = Timestamp.fromDate(startDate);
          const endTimestamp = Timestamp.fromDate(endDate);

          const startHyphen = formatYmdForQuery(startDate, "-");
          const endHyphen = formatYmdForQuery(endDate, "-");

          const startDot = formatYmdForQuery(startDate, ".");
          const endDot = formatYmdForQuery(endDate, ".");

          const startSlash = formatYmdForQuery(startDate, "/");
          const endSlash = formatYmdForQuery(endDate, "/");

          const queryTasks: Promise<any>[] = [];

          REQUEST_DATE_FIELDS.forEach((field) => {
            // Timestamp 날짜 대응
            queryTasks.push(
              getDocs(
                query(
                  collection(db, "design_request"),
                  ...baseConstraints,
                  where(field, ">=", startTimestamp),
                  where(field, "<=", endTimestamp)
                )
              )
            );

            // "2026-01-31" 대응
            queryTasks.push(
              getDocs(
                query(
                  collection(db, "design_request"),
                  ...baseConstraints,
                  where(field, ">=", startHyphen),
                  where(field, "<=", endHyphen)
                )
              )
            );

            // "2026.01.31" 대응
            queryTasks.push(
              getDocs(
                query(
                  collection(db, "design_request"),
                  ...baseConstraints,
                  where(field, ">=", startDot),
                  where(field, "<=", endDot)
                )
              )
            );

            // "2026/01/31" 대응
            queryTasks.push(
              getDocs(
                query(
                  collection(db, "design_request"),
                  ...baseConstraints,
                  where(field, ">=", startSlash),
                  where(field, "<=", endSlash)
                )
              )
            );
          });

          const snapshots = await Promise.all(queryTasks);

          // ★ 추가: 기간 필터로 Firestore가 반환한 문서 수 = 읽은 문서 수
          const dateReadDocCount = snapshots.reduce(
            (sum, snapshot) => sum + snapshot.docs.length,
            0
          );

          directReadDocCount += dateReadDocCount; // ★ 추가

          // ★ 추가: 기간 필터로 실제 Firestore에서 반환된 문서 수
          // 같은 문서가 여러 쿼리에 중복으로 잡히면 중복 포함
          const readDocCount = snapshots.reduce(
            (sum, snapshot) => sum + snapshot.docs.length,
            0
          );

          setFilterReadInfo({
            readDocCount,
          }); // ★ 추가

          const dateRows: RequestData[] = snapshots.flatMap((snapshot) =>
            snapshot.docs.map((docSnap: any) => ({
              id: docSnap.id,
              ...(docSnap.data() as Omit<RequestData, "id">),
            }))
          );

          fetchedGroups.push(dateRows);
        }

        // ★ 검색어만 있는 경우: 문서번호 정확히 일치 직접 조회
        if (!hasDateFilter && hasKeyword) {
          const searchSnap = await getDocs(
            query(
              collection(db, "design_request"),
              ...baseConstraints,
              where("design_request_id", "==", q)
            )
          );

          // ★ 추가: 검색 필터로 Firestore가 반환한 문서 수 = 읽은 문서 수
          directReadDocCount += searchSnap.docs.length;

          const searchRows: RequestData[] = searchSnap.docs.map((docSnap: any) => ({
            id: docSnap.id,
            ...(docSnap.data() as Omit<RequestData, "id">),
          }));

          fetchedGroups.push(searchRows);
        }

        const mergedRows = mergeRequestRows(...fetchedGroups);
        setFilterReadInfo({ readDocCount: directReadDocCount });

        if (cancelled) return;

        setFilterFetchedRows(mergedRows);

      } catch (error) {
        console.error("Requester 요청기간/검색 직접 조회 오류:", error);

        if (!cancelled) {
          setFilterFetchedRows([]);
          setFilterReadInfo({ readDocCount: 0 });
        }
      }
    };

    fetchFilteredRows();

    return () => {
      cancelled = true;
    };
  }, [view, dateRange, keyword, userName, userCompany]);

  useEffect(() => {
    if (!statusFromAside) return;
    setStatusFilter(statusFromAside);
  }, [statusFromAside])

  // 필터 적용 콜백 (하위에서 올라옴)
  const applyRange  = (r: { start: Date | null; end: Date | null }) => setDateRange(r); // ⬅️ 추가
  const applyStatus = (status: string) => setStatusFilter(status);
  const applyDept   = (dept: string) => setDeptFilter(dept);

  // 🔍 실시간 검색 (버튼 개념 X)
  const applySearch = (kw: string) => setKeyword(kw);

  // ⭐ 요청자 화면용 status 매핑 함수
  const mapStatusForRequester = (status: string) => {
    if (status === "검수요청") return "진행중";
    return status; // 나머지는 그대로
  };

  // ▼ 헬퍼: 요청일 가져오기 (Timestamp | string | Date 모두 대응)
  const toMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const parseLoose = (v: any): Date | null => {
    if (!v) return null;
    // Firestore Timestamp
    if (typeof v === "object" && typeof v.toDate === "function") return toMidnight(v.toDate());
    if (v instanceof Date) return toMidnight(v);
    if (typeof v === "number") return toMidnight(new Date(v));
    if (typeof v === "string") {
      // 'YYYY-MM-DD' | 'YYYY.MM.DD' | 'M/D' 등 관대 파싱
      const s = v.replace(/\./g, "-").replace(/\//g, "-");
      const parts = s.split("-");
      if (parts.length === 3) {
        const [y, m, d] = parts.map(Number);
        const year = y > 31 ? y : new Date().getFullYear(); // '8-20-..' 형태 보호
        return new Date(year, m - 1, d);
      }
      if (parts.length === 2) {
        const [m, d] = parts.map(Number);
        const year = new Date().getFullYear();
        return new Date(year, m - 1, d);
      }
      const dt = new Date(v);
      return isNaN(+dt) ? null : toMidnight(dt);
    }
    return null;
  };

  // ① 준비 단계: 표시상태 + 검색 인덱스 세팅
  const prepared = useMemo(() => {
    return requests.map((r) => {
      const displayStatus = mapStatusForRequester(r.status);
      return makeSearchIndex({ ...r, displayStatus });
    });
  }, [requests]);

  // ⭐ 화면에 보여줄 리스트
  // ② 뷰 리스트(기간 + 상태 + 실시간 검색)
  type Action = "review" | "edit" | "cancel" | "revision";

  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;
    const dateFilterOn = !!(s && e);
    const today = new Date();
    const q = keyword.trim();
    const searchOn = !!q;

    return prepared.filter((r: any) => {
      const status = String(r.status ?? "").trim();
      const isDone = status === "완료" || status === "취소";

      // 부서 필터(task_form 기준)
      if (deptFilter !== DEFAULT_DEPT) {
        if (String(r.task_form ?? "") !== deptFilter) return false;
      }

      if (dateFilterOn) {
        const rd =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!rd || rd < s! || rd > e!) return false;
      } else {
        const cd =
          parseLoose(r.completion_date) ||
          parseLoose((r as any).complete_date) ||
          null;

        const completedThisMonth = cd ? isSameMonth(cd, today) : false;

        if (!searchOn && !completedThisMonth && isDone) return false;

        if (
          statusFilter !== DEFAULT_STATUS &&
          r.displayStatus !== statusFilter
        )
          return false;
      }

      if (q && !matchesQuery(r, q)) return false;

      return true;
    });
  }, [prepared, statusFilter, dateRange, keyword, deptFilter]);
  
  useEffect(() => {
    const hasDateFilter = !!(dateRange.start && dateRange.end);
    const hasKeyword = !!keyword.trim();
    const isFilterMode = hasDateFilter || hasKeyword;

    const baseReadDocCount = isFilterMode ? 0 : dbCountInfo?.readDocCount ?? 0;
    const filterReadDocCount = filterReadInfo.readDocCount;
    const totalReadDocCount = baseReadDocCount + filterReadDocCount;

    const totalCount = dbCountInfo?.totalCount ?? 0;
    const unreadDocCount = Math.max(totalCount - totalReadDocCount, 0);

    console.log("====== Requester 최종 viewList ======");
    console.log("전체 DB 문서 수:", totalCount);
    console.log("MainPage 기본 읽은 문서 수:", baseReadDocCount);
    console.log("기간/검색 필터 직접 읽은 문서 수:", filterReadDocCount);
    console.log("총 읽은 문서 수:", totalReadDocCount);
    console.log("안 읽은 문서 수:", unreadDocCount);
    console.log("현재 view:", view);
    console.log("viewList 최종 표시 수:", viewList.length);
    console.log("dateRange:", dateRange);
    console.log("statusFilter:", statusFilter);
    console.log("deptFilter:", deptFilter);
    console.log("keyword:", keyword);
    console.log("===================================");
  }, [
    dbCountInfo?.totalCount,
    dbCountInfo?.readDocCount,
    filterReadInfo.readDocCount,
    view,
    viewList.length,
    dateRange,
    statusFilter,
    deptFilter,
    keyword,
  ]);

  const canMutate = (id: string, action: Action) => {
    const row = requests.find(r => r.id === id);
    if (!row) return false;

    // allrequestlist에서 타인 문서는 모든 액션 금지
    if (view === "allrequestlist" && row.requester !== userName) return false;

    // 완료/취소 문서는 어떤 액션도 금지
    if (row.status === "완료" || row.status === "취소") return false;

    // 매니저 검수완료 이후 잠금: 단, 'review'(요청자 검수확정)만 예외 허용
    if (row.manager_review_status === "검수완료" && !(action === "review" || action === "revision")) {
      return false;
    }

    return true;
  };

  // ✅ 검수완료 처리 + 히스토리
  const reviewComplete = async (id: string) => {
    if (!canMutate(id, "review")) return;

    // 이전 상태/문서번호 조회
    const ref = doc(db, "design_request", id);
    const snap = await getDoc(ref);
    if (!snap.exists()) return;

    // 1) 상태 업데이트
    await updateDoc(ref, {
      status: "완료",
      requester_review_status: "검수완료",
    });

    // 2) 클라이언트 상태 동기화
    setRequests((prev) =>
      prev.map((req) =>
        req.id === id
          ? { ...req, status: "완료", requester_review_status: "검수완료" }
          : req
      )
    );

    alert("완료 처리되었습니다.");
  };

  const editRequest = async (id: string) => {
    if (!canMutate(id, "edit")) return;

    const docRef = doc(db, "design_request", id);

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...(docSnap.data() as Omit<RequestData, "id">) };
      setEditData(data);
      setIsDrawerOpen(true);
    }
  };

  // 수정요청 처리 (status: "수정")
  const requestRevision = async (id: string) => {
    if (!canMutate(id, "revision")) return;

    // 이전 상태/문서번호 확보
    const row = requests.find((r) => r.id === id);
    const designRequestId = row?.design_request_id;

    try {
      await updateDoc(doc(db, "design_request", id), {
        status: "수정",
        requester_revision_state: true,
        requester_revision_at: serverTimestamp(),
        requester_design_edit_state: true,
      });
      setRequests((prev) =>
        prev.map((req) =>
          req.id === id
            ? {
                ...req,
                status: "수정",
                requester_revision_state: true,
                requester_design_edit_state: true,
              }
            : req
        )
      );

      // ★ 히스토리 댓글
      if (designRequestId) {
        await addHistoryComment(
          designRequestId,
          `${userName} 님이 디자인 수정요청을 보냈습니다.`
        );
      }

      alert("디자인 수정 요청이 등록되었습니다.");
    } catch (e) {
      console.error(e);
      alert("수정 요청 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
    }
  };

  // ✅ 메모/작업항목 클릭 → 디테일 모드
  const openDetail = async (item: RequestData) => {
    // 낙관적 읽음 처리 (로컬 캐시 즉시 갱신) — 메모 + 문서수정 공용
    if (userUid) {
      const now = Date.now();
      setReadLocal(prev => ({ ...prev, [item.id]: now }));

      // 메모 읽음 + 문서 수정 읽음 둘 다 서버에 기록
      try {
        await updateDoc(doc(db, "design_request", item.id), {
          // 메모 Talk 읽음
          [`comment_read_by_client.${userUid}`]: now,
          // 문서 수정 읽음
          [`requester_edit_read_by_client.${userUid}`]: now,
        });
      } catch (e) {
        // 실패해도 UI는 localReadMs 덕분에 깜빡임 없음
        // console.error(e);
      }
    }

    setDetailData(item);
    setIsDrawerOpen(true);
  };

  // ✅ 취소 처리
  const cancelRequest = async (id: string) => {
  if (!canMutate(id, "cancel")) return;

  const row = requests.find((r) => r.id === id);
  const prevStatus = row?.status || "대기";
  const designRequestId = row?.design_request_id;

  const ok = window.confirm(`문서번호 ${designRequestId ?? ""} 요청을 취소하시겠습니까?`);
  if (!ok) return;

  try {
    const docRef = doc(db, "design_request", id);

    // 최신 문서 기준으로 assigned 존재 여부 판정
    const snap = await getDoc(docRef);
    if (!snap.exists()) return;
    const data = snap.data() as any;

    const hasAssigned = (() => {
      const ad = data?.assigned_designers;

      if (Array.isArray(ad)) {
        const nonEmpty = ad
          .map((v: any) => {
            if (typeof v === "string") return v.trim();
            if (typeof v === "object" && v) return String(v?.name ?? "").trim();
            return "";
          })
          .filter(Boolean);
        if (nonEmpty.length > 0) return true;
      }

      if (typeof ad === "string" && ad.trim()) return true;

      const legacy = String(data?.assigned_designer ?? "").trim();
      if (legacy) return true;

      return false;
    })();

    // assigned 없으면 공수값만 "비움(null)" 처리
    const updatePayload: any = { status: "취소" };

    if (!hasAssigned) {
      updatePayload.out_work_hour = null;
      updatePayload.in_work_hour = null;
    }

    await updateDoc(docRef, updatePayload);

    // 로컬 상태 동기화도 동일하게
    setRequests((prev) =>
      prev.map((req) => {
        if (req.id !== id) return req;
        const next: any = { ...(req as any), status: "취소" };
        if (!hasAssigned) {
          next.out_work_hour = null;
          next.in_work_hour  = null;
        }
        return next;
      })
    );

    const finalDesignRequestId = designRequestId ?? data?.design_request_id;
    const finalPrevStatus = row?.status ?? data?.status ?? prevStatus;

    if (finalDesignRequestId) {
      await addHistoryComment(
        finalDesignRequestId,
        `${userName} 님이 요청을 취소했습니다. (상태: '${finalPrevStatus}' → '취소')`
      );
    }
  } catch (e) {
    console.error(e);
    alert("취소 처리 중 오류가 발생했습니다. 다시 시도해 주세요.");
  }
};

  const toYmd = (v: any): string => {
    if (!v) return "";
    if (typeof v === "object" && typeof v.toDate === "function") v = v.toDate(); // Firestore Timestamp
    const d = v instanceof Date ? v : new Date(v);
    if (isNaN(+d)) return "";
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      // homeplus면 task_type_detail 컬럼을 CSV에서 "제외"
      // - userCompany 기준 우선 판정
      // - 혹시 혼합 데이터면 viewList 전체가 homeplus인 경우에만 제외
      const userIsHomeplus = normalizeCompanyKey(userCompany) === "homeplus";
      const listAllHomeplus =
        viewList.length > 0 &&
        (viewList as any[]).every((r) => normalizeCompanyKey((r as any).company) === "homeplus");
      const omitTaskTypeDetail = userIsHomeplus || listAllHomeplus;

      // CSV 컬럼 순서(요구사항 반영)
      // 문서번호, 요청일, 완료요청일, 오픈일, 담당MD, 요청자, 업무부서, 업무형태, 업무형태상세(단 homeplus면 제외),
      // 작업항목, 요청서URL, 진행상태, 산출물URL, 외부공수
      const fields: string[] = [
        "design_request_id",   // 문서번호
        "request_date",        // 요청일
        "completion_date",     // 완료요청일
        "open_date",           // 오픈일
        "merchandiser",        // 담당MD
        "requester",           // 요청자
        "task_form",           // 업무부서
        "task_type",           // 업무형태
        ...(omitTaskTypeDetail ? [] : ["task_type_detail"]), // homeplus면 컬럼 제외
        "requirement",         // 작업항목
        "url",                 // 요청서URL
        "status",              // 진행상태
        "result_url",          // 산출물URL
        "out_work_hour",       // 외부공수
      ];

      // 헤더도 동일하게 동기화
      const headers: Record<string, string> = {
        design_request_id: "문서번호",
        request_date: "요청일",
        completion_date: "완료요청일",
        open_date: "오픈일",
        merchandiser: "담당MD",
        requester: "요청자",
        task_form: "업무부서",
        task_type: "업무형태",
        task_type_detail: "업무형태상세",
        requirement: "작업항목",
        url: "요청서URL",
        status: "진행상태",
        result_url: "산출물URL",
        out_work_hour: "외부공수",
      };

      // viewList -> CSV용 매핑(키 맞춤 + 날짜 포맷 + 외부공수)
      const rowsForCsv = (viewList as any[]).map((r) => {
        const statusForCsv = r.displayStatus ?? mapStatusForRequester(String(r.status ?? ""));

        // out_work_hour 값이 "없으면(null/undefined/빈문자열)" CSV에 빈칸 출력
        // - 값이 실제 0이면 0 유지
        const rawOut = (r as any).out_work_hour;
        const outHour = (rawOut == null || rawOut === "") ? "" : round3(toHourNum(rawOut));

        return {
          design_request_id: r.design_request_id ?? "",
          request_date: toYmd(r.request_date ?? r.requested_at ?? r.requestDate),
          completion_date: toYmd(r.completion_date),
          open_date: toYmd(r.open_date),
          merchandiser: r.merchandiser ?? r.md ?? "",
          requester: r.requester ?? "",
          task_form: r.task_form ?? "",
          task_type: r.task_type ?? "",
          task_type_detail: r.task_type_detail ?? "",
          requirement: r.requirement ?? "",
          url: r.url ?? "",
          status: statusForCsv,
          result_url: r.result_url ?? "",
          out_work_hour: outHour,
        };
      });

      downloadArrayToCSV({
        rows: rowsForCsv,
        fields,
        headers,
        filename: "design_request_current_view.csv",
      });
    } finally {
      setExporting(false);
    }
  };

  return (
    <>
      <MainTitle userRole={userRole} />
      {view === "dashboard" && (
        <DashBoardWrap>
          <DashBoard />
        </DashBoardWrap>
      )}

      {view === "allrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap
            roleNumber={1}
            onApplyStatus={applyStatus}
            onApplyRange={applyRange}
            onSearch={applySearch}
            keyword={keywordInput}
            onKeywordChange={setKeywordInput}
            deptOptions={deptOptions}
            onApplyDept={applyDept} 
          />
          <ExportCSV onClick={handleExportCSV} loading={exporting} />
          <RequesterRequestList
            data={viewList}
            disableActions={false}
            lockOthers={lockOthers}
            currentUserName={userName}
            userUid={userUid}
            onReviewComplete={reviewComplete}
            onCancel={cancelRequest}
            onEditClick={editRequest}
            onRequestRevision={requestRevision}
            onDetailClick={openDetail}
            readLocal={readLocal}
          />
        </MainContentWrap>
      )}

      {view === "myrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap roleNumber={1} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput} onResetFilters={clearStatusFromAside} resetKey={filterResetKey} deptOptions={deptOptions} onApplyDept={applyDept} />
          <ExportCSV onClick={handleExportCSV} loading={exporting} />
          <RequesterRequestList data={viewList} disableActions={false} userUid={userUid} onReviewComplete={reviewComplete} onCancel={cancelRequest} onEditClick={editRequest} onRequestRevision={requestRevision} onDetailClick={openDetail} readLocal={readLocal} />
        </MainContentWrap>
      )}
    </>
  );
}

const MainContentWrap = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  height: calc(100vh - 178px);
  padding: 0 24px 24px;
`;

const DashBoardWrap = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  height: calc(100vh - 178px);
  padding: 0 24px 24px;
`;