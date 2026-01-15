import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { query, where, collection, onSnapshot, doc, updateDoc, Timestamp, orderBy, serverTimestamp } from "firebase/firestore";
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
  statusFromAside?: string | null;
  clearStatusFromAside?: () => void;
  filterResetKey?: number;
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

  // 이제 assigned_designers는 string[]이 아니라 객체 배열일 수 있음
  assigned_designers?: any[];
  assigned_designer?: string;

  // 디자이너 화면 쿼리용
  assigned_designer_uids?: string[];

  review_status?: string;
  designer_start_date?: string;
  designer_end_date?: string;
  result_url?: string;
  status?: string;
  priority?: string;
  company?: string;
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

// 회사 비교용 정규화(문서ID nsmall vs 표시명 NSmall 모두 매칭)
const companyKey = (v: any) =>
  String(v ?? "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "");

// 이번 달 판정 헬퍼(요청자 코드와 동일)
const isSameMonth = (d: Date, base = new Date()) =>
  d.getFullYear() === base.getFullYear() && d.getMonth() === base.getMonth();

type AssignedDesignerLike = { uid?: string; name?: string; out_work_hour?: number; in_work_hour?: number };
const normalizeAssignedDesigners = (raw: any): AssignedDesignerLike[] => {
  if (!raw) return [];
  if (Array.isArray(raw)) {
    if (raw.length === 0) return [];
    if (typeof raw[0] === "string") {
      return raw.map((s: string) => ({ name: String(s).trim() })).filter(d => d.name);
    }
    if (typeof raw[0] === "object") {
      return raw
        .map((o: any) => ({
          uid: typeof o?.uid === "string" ? o.uid : undefined,
          name: String(o?.name ?? "").trim(),
          out_work_hour: Number(o?.out_work_hour ?? 0),
          in_work_hour: Number(o?.in_work_hour ?? 0),
        }))
        .filter(d => d.name);
    }
  }
  if (typeof raw === "string") return [{ name: raw.trim() }];
  return [];
};

export default function Designer({ view, userRole, setIsDrawerOpen, setDetailData, statusFromAside, clearStatusFromAside, filterResetKey }: RequesterProps) {
  const [assignedRequests, setAssignedRequests] = useState<DesignRequest[]>([]);
  const [designerName, setDesignerName] = useState(""); // ✅ 로그인 디자이너 이름
  const [userUid, setUserUid]   = useState("");
  const [formData, setFormData] = useState<{ [key: string]: RowForm  }>({});
  const [statusFilter, setStatusFilter] = useState<string>("진행 상태 선택");
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });
  const [companyOptions, setCompanyOptions] = useState<string[]>([]);
  const [companyFilter, setCompanyFilter] = useState<string>(DEFAULT_COMPANY);

  // 🔍 검색: 입력값과 적용값 분리
  const [keywordInput, setKeywordInput] = useState<string>(""); // 인풋 바인딩(타이핑용)
  const [keyword, setKeyword] = useState<string>("");           // 검색 버튼 클릭 시에만 적용

  // 항목별 내가 마지막으로 읽은 시간(ms) 로컬 캐시
  const [readLocal, setReadLocal] = useState<{ [id: string]: number }>({});

  const lockOthers = view === "allrequestlist";

  // ✅ 로그인 디자이너 이름 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setDesignerName("");
        setUserUid("");
        return;
      }
      setDesignerName(user.displayName ?? "");
      setUserUid(user.uid);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Firestore에서 로그인 디자이너에게 배정된 요청만 가져오기
  useEffect(() => {
    // ★ 변경: 디자이너 배정은 UID 기반으로 조회해야 함
    if (view === "dashboard" || view === "inworkhour") {
      setAssignedRequests([]);
      return;
    }

    // 전체 요청 리스트
    if (view === "allrequestlist") {
      const qAll = query(
        collection(db, "design_request"),
        orderBy("design_request_id", "desc")
      );
      const unsubAll = onSnapshot(qAll, snap => {
        setAssignedRequests(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
      });
      return () => unsubAll();
    }

    // ★ 변경: "내 작업 리스트"는 assigned_designer_uids array-contains(userUid)
    if (!userUid) return;

    const qArr = query(
      collection(db, "design_request"),
      where("assigned_designer_uids", "array-contains", userUid), // ★ 변경
      orderBy("design_request_id", "desc")
    );

    const unsub = onSnapshot(qArr, snap => {
      setAssignedRequests(snap.docs.map(d => ({ id: d.id, ...(d.data() as any) })));
    });
    return () => unsub();
  }, [userUid, view]);
  
  // 회사 옵션 = companies 컬렉션 문서(company_name)로 구성
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "companies"), (snap) => {
      const set = new Set<string>();
      snap.forEach((d) => {
        const data = d.data() as any;
        // 표시명 우선, 없으면 docId 사용
        const name = String(data?.company_name ?? d.id ?? "").trim();
        if (!name) return;
        set.add(name);
      });
      setCompanyOptions(Array.from(set).sort((a, b) => a.localeCompare(b, "ko")));
    });
    return () => unsub();
  }, []);

  // ⭐ 사이드바 상태 클릭 시 필터 동기화
  useEffect(() => {
    if (!statusFromAside) return;
    setStatusFilter(statusFromAside);
  }, [statusFromAside]);

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
    // ★ 변경: 객체 배열이면 name만 추출
    const arr = normalizeAssignedDesigners(r.assigned_designers);
    if (arr.length) return arr.map(d => String(d.name ?? "").trim()).filter(Boolean);

    if (r.assigned_designer) return [String(r.assigned_designer).trim()];
    return [];
  };

  // 현재 로그인 디자이너가 이 문서를 볼 수 있는지(“홈돌이 단일만 노출” 규칙)
  const isVisibleForDesigner = (r: any, me: string, v: ViewType): boolean => {
    if (v === "allrequestlist") return true; // 전체 리스트는 항상 보이게
    if (me !== SPECIAL_SOLO_NAME) return true;
    const assignees = getAssignees(r);
    return assignees.includes(SPECIAL_SOLO_NAME) && assignees.length === 1;
  };

  // 최종 표시 리스트 (상태 + 회사 + 기간 + 검색)
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;
    const dateFilterOn = !!(s && e);
    const today = new Date();
    const q = keyword.trim();
    const searchOn = !!q;

    return preparedNormalized.filter((r: any) => {
      const statusRaw = String(r.status ?? "").trim();
      const isDone = statusRaw === "완료" || statusRaw === "취소";

      if (!isVisibleForDesigner(r, designerName, view)) return false;

      // ── A) 요청 기간 선택된 경우: request_date 기준, 상태/완료월 무시
      if (dateFilterOn) {
        const rd =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!rd || rd < s! || rd > e!) return false;
      } else {
        // ── B) completion_date 월 필터(검색 없을 때만 적용)
        const cd =
          parseLoose((r as any).completion_date) ||
          parseLoose((r as any).complete_date) ||
          null;
        const completedThisMonth = cd ? isSameMonth(cd, today) : false;

        if (!searchOn && !completedThisMonth && isDone) return false;

        // 상태 필터 (기간 미선택일 때만)
        if (
          statusFilter !== DEFAULT_STATUS &&
          r.displayStatus !== statusFilter
        ) {
          return false;
        }
      }

      // 회사 필터 비교를 정규화해서 매칭(예: "NSmall" vs "nsmall")
      if (companyFilter !== DEFAULT_COMPANY) {
        if (companyKey(r.company) !== companyKey(companyFilter)) return false;
      }

      // 검색어는 항상 AND, 대신 위에서 과거 완료/취소는 searchOn일 때 열어 둠
      if (q && !matchesQuery(r, q)) return false;

      return true;
    });
  }, [ preparedNormalized, statusFilter, companyFilter, dateRange, keyword, view, designerName ]);

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
      Array.isArray(row.assigned_designer_uids) && userUid
        ? row.assigned_designer_uids.includes(userUid)
        : false;

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
  const openDetail = async (item: RequestData) => {
    // ★ 변경: 매니저와 동일하게 댓글 + 문서수정 읽음 둘 다 기록
    if (userUid) {
      const now = Date.now();
      setReadLocal(prev => ({ ...prev, [item.id]: now }));

      try {
        const updates: any = {
          // 댓글 읽음
          [`comment_read_by.${userUid}`]: serverTimestamp(),
          [`comment_read_by_client.${userUid}`]: now,
        };

        // ★ 추가: 문서 수정 상태일 때만 문서 읽음 필드 기록
        if ((item as any).requester_edit_state) {
          updates[`requester_edit_read_by.${userUid}`] = serverTimestamp();
          updates[`requester_edit_read_by_client.${userUid}`] = now;
        }

        await updateDoc(doc(db, "design_request", item.id), updates);
      } catch (e) {
        // 필요하면 콘솔 정도만
        // console.error(e);
      }
    }

    setDetailData(item);
    setIsDrawerOpen(true);
  };

  return (
    <>
      <MainTitle userRole={userRole} />
      {view === "allrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap roleNumber={2} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput} companyOptions={companyOptions} onApplyCompany={applyCompany} />
          <DesignerRequestList requests={viewList} formData={formData} currentUid={userUid} readLocal={readLocal} onChange={handleChange} onSave={saveResponse} onDetailClick={openDetail} disableActions={false} lockOthers={lockOthers} currentDesignerName={designerName} />
        </MainContentWrap>
      )}
      {view === "myrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap roleNumber={2} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput} companyOptions={companyOptions} onApplyCompany={applyCompany} onResetFilters={clearStatusFromAside} resetKey={filterResetKey} />
          <DesignerRequestList requests={viewList} formData={formData} currentUid={userUid} readLocal={readLocal} onChange={handleChange} onSave={saveResponse} onDetailClick={openDetail} disableActions={false}/>
        </MainContentWrap>
      )}
      {view === "dashboard" && (
        <DashBoardWrap>
          <DashBoard />
        </DashBoardWrap>
      )}
    </>
  )
}

const MainContentWrap = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  height: calc(100vh - 178px);
  padding: 0 24px 24px;
`;

const DashBoardWrap = styled.div`
  width: 100%;
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  height: calc(100vh - 178px);
  padding: 0 24px 24px;
`;