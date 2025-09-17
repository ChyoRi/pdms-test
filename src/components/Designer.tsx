import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { query, where, collection, onSnapshot, doc, updateDoc, Timestamp, orderBy } from "firebase/firestore";
import DesignerRequestList from "./DesignerRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import DashBoard from "./DashBoard";
import { makeSearchIndex, matchesQuery } from "../utils/search";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

interface RequesterProps {
  view: ViewType;
  userRole: number | null;
  setIsDrawerOpen: (value: boolean) => void;
  setDetailData: (data: RequestData) => void;
}

interface DesignRequest {
  view: ViewType;
  design_request_id: string;
  id: string;
  requester: string;
  request_date: any;
  completion_dt: any;
  open_dt: any;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  assigned_designers?: string[]; // 신규
  assigned_designer?: string;
  review_status?: string;
  designer_start_date?: string;
  designer_end_date?: string;
  result_url?: string;
  status?: string;
  priority?: string;
}

// 폼 상태 타입 (각 행별로 보관)
type RowForm = {
  start_dt?: string;   // 'YYYY-MM-DD'
  end_dt?: string;     // 'YYYY-MM-DD'
  result_url?: string;
  status?: string;
};

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_COMPANY = "회사 선택";
const SPECIAL_SOLO_NAME = "홈돌이";

export default function Designer({ view, userRole, setIsDrawerOpen, setDetailData }: RequesterProps) {
  const [assignedRequests, setAssignedRequests] = useState<DesignRequest[]>([]);
  const [designerName, setDesignerName] = useState(""); // ✅ 로그인 디자이너 이름
  const [formData, setFormData] = useState<{ [key: string]: RowForm  }>({});
  const [statusFilter, setStatusFilter] = useState<string>("진행 상태 선택");
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
  const [companyOptions, setCompanyOptions] = useState<string[]>([]);
  const [companyFilter, setCompanyFilter] = useState<string>(DEFAULT_COMPANY);

  // 🔍 검색: 입력값과 적용값 분리
  const [keywordInput, setKeywordInput] = useState<string>(""); // 인풋 바인딩(타이핑용)
  const [keyword, setKeyword] = useState<string>("");           // 검색 버튼 클릭 시에만 적용

  const lockOthers = view === "allrequestlist";

  // ✅ 로그인 디자이너 이름 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user?.displayName) setDesignerName(user.displayName);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Firestore에서 로그인 디자이너에게 배정된 요청만 가져오기
  useEffect(() => {
  if (!designerName) return;

  if (view === "dashboard" || view === "inworkhour") {
    setAssignedRequests([]);
    return;
  }

  if (view === "allrequestlist") {
    const qAll = query(collection(db, "design_request"), orderBy("design_request_id", "desc"));
    const unsubAll = onSnapshot(qAll, snap => {
      setAssignedRequests(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
    });
    return () => unsubAll();
  }

  // ✅ 내 작업: 배열/단일 레거시 2개 쿼리 병합
  const qArr = query(
    collection(db, "design_request"),
    where("assigned_designers", "array-contains", designerName),
    orderBy("design_request_id", "desc")
  );
  const qStr = query(
    collection(db, "design_request"),
    where("assigned_designer", "==", designerName),
    orderBy("design_request_id", "desc")
  );

  let arrA: any[] = [];
  let arrB: any[] = [];
  const mergeAndSet = () => {
    const map = new Map<string, any>();
    [...arrA, ...arrB].forEach(x => map.set(x.id, x));
    // 주문번호 desc 정렬 유지
    const merged = [...map.values()].sort((a, b) =>
      String(b.design_request_id ?? "").localeCompare(String(a.design_request_id ?? ""))
    );
    setAssignedRequests(merged);
  };

  const unsubA = onSnapshot(qArr, snap => { arrA = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })); mergeAndSet(); });
  const unsubB = onSnapshot(qStr, snap => { arrB = snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })); mergeAndSet(); });

    return () => { unsubA(); unsubB(); };
  }, [designerName, view]);
  // 회사 옵션(users.company에서 수집) — 제외 처리는 RequestFilter에서 함
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snap) => {
      const set = new Set<string>();
      snap.forEach((d) => {
        const name = String((d.data() as any).company ?? "").trim();
        if (name) set.add(name);
      });
      setCompanyOptions(Array.from(set).sort());
    });
    return () => unsub();
  }, []);

  // 필터 적용 콜백 (하위에서 올라옴)
  const applyRange  = (r: { start: Date | null; end: Date | null }) => setDateRange(r); // ⬅️ 추가
  const applyStatus = (status: string) => setStatusFilter(status);
  const applyCompany = (name: string) => setCompanyFilter(name);

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

  // 요청자 화면에서 쓰던 이름을 그대로 둠 (디자이너는 매핑 없이 그대로 반환)
  // const mapStatusForRequester = (status: string | undefined) => status ?? "대기";

  // 🔧 Date → 'YYYY-MM-DD' 포맷
  const toYmd = (d: Date) => {
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return `${y}-${m}-${day}`;
  };

  // 🔧 다양한 입력(Timestamp | string | Date) → input용 'YYYY-MM-DD'
  const toInputDate = (v: any): string => {
    if (!v) return "";
    if (typeof v === "object" && typeof v.toDate === "function") {
      return toYmd(v.toDate());
    }
    if (v instanceof Date) return toYmd(v);
    // 문자열/숫자 모두 Date 시도
    const dt = new Date(v);
    return isNaN(+dt) ? "" : toYmd(dt);
  };

  // 화면 표시용으로 정규화(하위 수정 없이도 바로 보이게)
  const normalizedRequests = useMemo(
    () =>
      assignedRequests.map((r) => ({
        ...r,
        designer_start_date: toInputDate(r.designer_start_date),
        designer_end_date: toInputDate(r.designer_end_date),
        result_url: r.result_url ?? "",
        status: r.status ?? "대기",
      })),
    [assignedRequests]
  );

  // ✅ 디자이너 화면용 status 매핑 (검수중 → 검수요청)
  const mapStatusForDesigner = (status: string | undefined) => {
    if (status === "검수중") return "검수요청";
    return status ?? "대기";
  };

  // ① 준비단계: 검색 인덱스/표시상태 세팅 (문서번호 + 작업항목)
  const preparedNormalized = useMemo(() => {
    return normalizedRequests.map((r) => {
      const displayStatus = mapStatusForDesigner(r.status);
      return makeSearchIndex({ ...r, displayStatus });
    });
  }, [normalizedRequests]);

  // 문서에서 배정자 목록을 안전하게 꺼내기
  const getAssignees = (r: any): string[] => {
    if (Array.isArray(r.assigned_designers)) {
      return r.assigned_designers.filter(Boolean).map((s: string) => s.trim());
    }
    if (r.assigned_designer) return [String(r.assigned_designer).trim()];
    return [];
  };

  // 현재 로그인 디자이너가 이 문서를 볼 수 있는지(“홈돌이 단일만 노출” 규칙)
  const isVisibleForDesigner = (r: any, me: string): boolean => {
    // 홈돌이가 아닐 땐 기존과 동일하게 모두 노출
    if (me !== SPECIAL_SOLO_NAME) return true;

    const assignees = getAssignees(r);
    // 홈돌이가 포함되어 있고, ‘혼자’ 배정일 때만 노출
    return assignees.includes(SPECIAL_SOLO_NAME) && assignees.length === 1;
  };

  // 최종 표시 리스트 (상태 + 회사 + 기간 + 검색)
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;

    return preparedNormalized.filter((r: any) => {
      let ok = true;

      if (ok && !isVisibleForDesigner(r, designerName)) ok = false;

      // 1) 상태(표시값 기준)
      if (ok && statusFilter && statusFilter !== DEFAULT_STATUS) {
        if (mapStatusForDesigner(r.status) !== statusFilter) ok = false;
      }

      // 2) 회사 (정확 일치)
      if (ok && companyFilter !== DEFAULT_COMPANY && String(r.company) !== companyFilter) ok = false;

      // 3) 날짜
      if (ok && s && e) {
        const rd = parseLoose(r.request_date) || parseLoose(r.requested_at) || parseLoose(r.requestDate);
        if (!rd || rd < s || rd > e) ok = false;
      }

      // 4) 검색(문서번호 + 작업항목)
      if (ok && keyword && !matchesQuery(r, keyword)) ok = false;

      return ok;
    });
  }, [preparedNormalized, statusFilter, companyFilter, dateRange, keyword]);

  // 🔍 검색 버튼 클릭 시 적용
  const applySearch = (kw: string) => setKeyword(kw);

  // ✅ 스냅샷 들어올 때 formData 시딩(키 없는 행만 채움 = 사용자의 임시 입력 보호)
  useEffect(() => {
    if (!assignedRequests.length) return;
    setFormData((prev) => {
      const next = { ...prev };
      assignedRequests.forEach((r) => {
        if (next[r.id] === undefined) {
          next[r.id] = {
            start_dt: toInputDate(r.designer_start_date),
            end_dt: toInputDate(r.designer_end_date),
            result_url: r.result_url || "",
            status: r.status || "대기",
          };
        }
      });
      return next;
    });
  }, [assignedRequests]);

  // ✅ 입력값 변경
  const handleChange = (requestId: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [requestId]: {
        ...prev[requestId],
        [field]: value
      }
    }));
  };

  // ✅ 날짜 변환 함수 (Timestamp로)
  const toTimestamp = (dateStr?: string) => {
    if (!dateStr) return null;
    const dt = new Date(dateStr);
    return isNaN(+dt) ? null : Timestamp.fromDate(dt);
  };

  // 행별 권한 체크(완료/취소는 항상 불가, 전체 목록에서는 본인 배정만 허용)
  const canMutate = (id: string) => {
    const row: any = assignedRequests.find(r => r.id === id);
    if (!row) return false;
    if (row.status === "완료" || row.status === "취소") return false;

    const mine =
      Array.isArray(row.assigned_designers)
        ? row.assigned_designers.includes(designerName)
        : row.assigned_designer === designerName;

    if (view === "allrequestlist" && !mine) return false;
    return true;
  };

  const saveResponse = async (requestId: string) => {
    if (!canMutate(requestId)) return;
    const row = formData[requestId];
    if (!row) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    await updateDoc(doc(db, "design_request", requestId), {
      designer_start_date: toTimestamp(row.start_dt),
      designer_end_date: toTimestamp(row.end_dt),
      result_url: row.result_url ?? "",
      status: row.status ?? "대기",
    });

    alert("저장되었습니다.");
  };

  // ✅ 메모/작업항목 클릭 → 디테일 모드
  const openDetail = (item: RequestData) => {
    setDetailData(item);     // 상위에서 drawerMode='detail' 세팅
    setIsDrawerOpen(true);
  };

  return (
    <Container>
      <MainTitle userRole={userRole} />
      {view === "allrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap roleNumber={2} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput} companyOptions={companyOptions} onApplyCompany={applyCompany} />
          <DesignerRequestList requests={viewList} formData={formData} onChange={handleChange} onSave={saveResponse} onDetailClick={openDetail} disableActions={false} lockOthers={lockOthers} currentDesignerName={designerName} />
        </MainContentWrap>
      )}
      {view === "myrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap roleNumber={2} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput} companyOptions={companyOptions} onApplyCompany={applyCompany} />
          <DesignerRequestList requests={viewList} formData={formData} onChange={handleChange} onSave={saveResponse} onDetailClick={openDetail} disableActions={false}/>
        </MainContentWrap>
      )}
      {view === "dashboard" && (
        <DashBoardWrap>
          <DashBoard capacityHoursPerMonth={704} />
        </DashBoardWrap>
      )}
    </Container>
  )
}

const Container = styled.div``;

const MainContentWrap = styled.div`
  padding: 0 48px;
`;

const DashBoardWrap = styled.div`
  max-height: 766px;
  padding: 0 48px;
  overflow: auto;
`;