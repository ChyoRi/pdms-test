import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { doc, updateDoc, collection, getDocs, onSnapshot, query, where, orderBy, arrayUnion, arrayRemove, serverTimestamp } from "firebase/firestore";
import ManagerRequestList from "./ManagerRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import InWorkHour from "./InWorkHour";
import DashBoard from "./DashBoard";
import ExportCSV from "./ExportCSV";
import { makeSearchIndex, matchesQuery } from "../utils/search";
import { downloadArrayToCSV } from "../utils/firestoreToCSV";
import { addHistoryComment } from "../utils/commentHistory"

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

interface RequesterProps {
  view: ViewType;
  setIsDrawerOpen: (value: boolean) => void;
  setDetailData: (data: RequestData) => void;
  userRole: number | null;
  statusFromAside?: string | null;
  clearStatusFromAside?: () => void;
  filterResetKey?: number;
}

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_REQUESTER = "요청자 선택";
const DEFAULT_DESIGNER = "디자이너 선택";
const DEFAULT_COMPANY  = "회사 선택";

const norm = (v: any) => String(v ?? "").trim();

// 회사/필드 기준으로 times(배율)만 정확 매칭해서 가져오기
async function getWorkTimesForRequest(req: RequestData): Promise<number> {
  const company = norm((req as any).company).toLowerCase();

  // 1) NSmall → task_type + task_type_detail 일치
  if (company === "nsmall") {
    const qRef = query(
      collection(db, "nsmall_task_work_hour"),
      where("nsmall_task_type", "==", norm((req as any).task_type)),
      where("nsmall_task_type_detail", "==", norm((req as any).task_type_detail))
    );
    const snap = await getDocs(qRef);
    if (!snap.empty) {
      const data = snap.docs[0].data() as any;
      const times = Number(data.nsmall_task_work_times);
      return Number.isFinite(times) ? times : 1;
    }
    return 1; // 못 찾으면 1
  }

  // 2) Homeplus → task_form + task_type 일치
  if (company === "homeplus") {
    const qRef = query(
      collection(db, "homeplus_task_work_hour"),
      where("homeplus_task_form", "==", norm((req as any).task_form)),
      where("homeplus_task_type", "==", norm((req as any).task_type))
    );
    const snap = await getDocs(qRef);
    if (!snap.empty) {
      const data = snap.docs[0].data() as any;
      const times = Number(data.homeplus_task_work_times);
      return Number.isFinite(times) ? times : 1;
    }
    return 1;
  }

  // 3) 기타 회사일 때만 기존 공용 테이블 폴백
  const fbSnap = await getDocs(
    query(
      collection(db, "task_work_hour"),
      where("task_form", "==", norm((req as any).task_form)),
      where("task_type", "==", norm((req as any).task_type))
    )
  );
  if (!fbSnap.empty) {
    const times = Number((fbSnap.docs[0].data() as any).task_work_times);
    return Number.isFinite(times) ? times : 1;
  }
  return 1;
}

const isSameMonth = (d: Date, base = new Date()) =>
  d.getFullYear() === base.getFullYear() && d.getMonth() === base.getMonth();

export default function Manager({ view, setIsDrawerOpen, setDetailData, userRole, statusFromAside, clearStatusFromAside, filterResetKey }: RequesterProps) {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [designerList, setDesignerList] = useState<any[]>([]);
  const [userUid, setUserUid]   = useState("");
  const [managerName, setManagerName] = useState("");
  const [selectedDesigners, setSelectedDesigners] = useState<{ [id: string]: string[] }>({});
  // 공수 입력칸(행별) 컨트롤드 상태
  const [workHours, setWorkHours] = useState<{ [id: string]: string }>({});
  // 필터/검색
  const [statusFilter, setStatusFilter] = useState<string>(DEFAULT_STATUS);
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [keywordInput, setKeywordInput] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");
  // 매니저 전용: 요청자/디자이너 필터
  const [requesterOptions, setRequesterOptions] = useState<string[]>([]);
  const [requesterFilter, setRequesterFilter] = useState<string>(DEFAULT_REQUESTER);
  const [designerOptions, setDesignerOptions] = useState<string[]>([]);
  const [designerFilter, setDesignerFilter] = useState<string>(DEFAULT_DESIGNER);
  const [companyOptions, setCompanyOptions] = useState<string[]>([]);
  const [companyFilter, setCompanyFilter] = useState<string>(DEFAULT_COMPANY);
  // CSV로 추출 상태
  const [exporting, setExporting] = useState(false);

  // 항목별 내가 마지막으로 읽은 시간(ms) 로컬 캐시
  const [readLocal, setReadLocal] = useState<{ [id: string]: number }>({});

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUserUid("");
        setManagerName(""); // ★ 추가
        return;
      }
      setUserUid(user.uid);
      if (user.displayName) {
        setManagerName(user.displayName); // ★ 추가
      }
    });
    return () => unsub();
  }, []);

  // ✅ Firestore에서 요청 리스트 가져오기
  useEffect(() => {
    // 대시보드/내부공수에서는 목록 조회 안 함
    if (view === "dashboard" || view === "inworkhour") {
      setRequests([]);
      return;
    }

    // 매니저는 myrequestlist도 '전체'와 동일하게 처리(원한다면 별도 규칙으로 분기 가능)
    const qRef = query(collection(db, "design_request"), orderBy("design_request_id", "desc"));
    const unsubscribe = onSnapshot(qRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({ id: doc.id, ...(doc.data() as Omit<RequestData, "id">) }));
      setRequests(data);
    });
    return () => unsubscribe();
  }, [view]);

  // ⭐ 사이드바 상태 클릭 시 필터 동기화
  useEffect(() => {
    if (!statusFromAside) return;
    setStatusFilter(statusFromAside);
  }, [statusFromAside]);

  // ✅ 스냅샷으로 받은 리스트로 선택 맵을 seed (빈 키만 채움)
  useEffect(() => {
    if (!requests.length) return;
    setSelectedDesigners((prev) => {
      const next = { ...prev };
      requests.forEach((r: any) => {
        if (next[r.id] === undefined) {
          next[r.id] = Array.isArray(r.assigned_designers) ? r.assigned_designers : [];
        }
      });
      return next;
    });
  }, [requests]);

  // 스냅샷으로 받은 리스트로 공수 입력칸 seed (in_work_hour가 있으면 표시)
  useEffect(() => {
    if (!requests.length) return;
    setWorkHours((prev) => {
      const next = { ...prev };
      requests.forEach((r: any) => {
        if (next[r.id] === undefined) {
          next[r.id] = r.out_work_hour != null ? String(r.out_work_hour) : "";
        }
      });
      return next;
    });
  }, [requests]);

  // ✅ Firestore에서 role=2인 디자이너 목록 가져오기
  useEffect(() => {
    const fetchDesigners = async () => {
      const q = query(collection(db, "users"), where("role", "==", 2));
      const snapshot = await getDocs(q);
      const designers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDesignerList(designers);
      // ★ 필터용 옵션 (이름 배열)
      setDesignerOptions(
        designers
          .map((d: any) => d.name)
          .filter(Boolean)
      );
    };
    fetchDesigners();
  }, []);

  // 회사 옵션 동적 수집 (users.company)
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "users"), (snap) => {
      const s = new Set<string>();
      snap.forEach(d => {
        const name = String((d.data() as any).company ?? "").trim();
        if (!name) return;
        s.add(name);
      });
      setCompanyOptions(Array.from(s).sort());
    });
    return () => unsub();
  }, []);

  // ✅ 디자이너 선택
  const designerSelect = (requestId: string, names: string[]) => {
    setSelectedDesigners(prev => ({ ...prev, [requestId]: names }));
  };

  // ✅ 디자이너 배정
  const assignDesigner = async (requestId: string) => {
    const selected = (selectedDesigners[requestId] || []).filter(Boolean);
    if (!selected.length) {
      alert("디자이너를 선택하세요.");
      return;
    }

    const req = requests.find((r) => r.id === requestId); // ★ 추가
    const designRequestId = req?.design_request_id;
    const prevAssignees = Array.isArray(req?.assigned_designers)
      ? req!.assigned_designers
      : [];

    const docRef = doc(db, "design_request", requestId);
    await updateDoc(docRef, {
      assigned_designers: arrayUnion(...selected),
    });

    // 선택 초기화(헷갈림 방지)
    setSelectedDesigners((prev) => ({ ...prev, [requestId]: [] }));

    // ★ 히스토리 댓글
    if (designRequestId) {
      const actor = managerName || "매니저";
      const added = selected.join(", ");
      const before = prevAssignees.length ? prevAssignees.join(", ") : "-";
      await addHistoryComment(
        designRequestId,
        `${actor} 님이 디자이너를 배정했습니다. (추가: ${added}, 기존: ${before})`
      );
    }

    alert("디자이너가 배정되었습니다!");
  };

  // ★ 추가: 디자이너 배정 해제
  const unassignDesigner = async (requestId: string, designerNameToRemove: string) => {
    const req = requests.find((r) => r.id === requestId);
    const designRequestId = req?.design_request_id;

    const docRef = doc(db, "design_request", requestId);
    await updateDoc(docRef, { assigned_designers: arrayRemove(designerNameToRemove) });

    if (designRequestId) {
      const actor = managerName || "매니저";
      await addHistoryComment(
        designRequestId,
        `${actor} 님이 디자이너 배정을 해제했습니다. (해제: ${designerNameToRemove})`
      );
    }
  };

  const sendToRequester = async (requestId: string) => {
    const req = requests.find((r) => r.id === requestId); // ★ 추가
    const designRequestId = req?.design_request_id;
    const prevStatus = req?.status ?? "대기";

    await updateDoc(doc(db, "design_request", requestId), {
      manager_review_status: "검수완료",
      status: "검수중",
    });

    setRequests((prev) =>
      prev.map((rq) =>
        rq.id === requestId
          ? { ...rq, manager_review_status: "검수완료", status: "검수중" }
          : rq
      )
    );

    // ★ 히스토리 댓글
    if (designRequestId) {
      const actor = managerName || "매니저";
      await addHistoryComment(
        designRequestId,
        `${actor} 님이 산출물을 검수 완료하여 요청자 확인 단계로 전달했습니다. (상태: '${prevStatus}' → '검수중')`
      );
    }

    alert("요청자에게 전달되었습니다.");
  };

  // 요청자 목록(role=1)
  useEffect(() => {
    (async () => {
      const q = query(collection(db, "users"), where("role", "==", 1));
      const snap = await getDocs(q);
      const names = snap.docs
        .map((d) => (d.data() as any).name)
        .filter(Boolean);
      setRequesterOptions(names);
    })();
  }, []);

  // ✅ 메모/작업항목 클릭 → 디테일 모드
  const openDetail = async (item: RequestData) => {
    if (userUid) {
      const now = Date.now();
      setReadLocal(prev => ({ ...prev, [item.id]: now }));

      try {
        // ★ 변경: 업데이트 payload를 객체로 만든 뒤, 조건에 따라 필드 추가
        const updates: any = {
          // 댓글 읽음
          [`comment_read_by.${userUid}`]: serverTimestamp(),
          [`comment_read_by_client.${userUid}`]: now,
        };

        // ★ 추가: 문서가 수정된 상태라면 → 문서 읽음 필드도 같이 찍기
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

  // ===== 필터 콜백 (RequestFilterSearchWrap에서 올라옴) =====
  const applyRange = (r: { start: Date | null; end: Date | null }) => setDateRange(r);
  const applyStatus = (status: string) => setStatusFilter(status);
  const applySearch = (kw: string) => setKeyword(kw.trim());
  const applyRequester = (name: string) => setRequesterFilter(name);
  const applyDesigner = (name: string) => setDesignerFilter(name);
  const applyCompany = (name: string) => setCompanyFilter(name);

  // ===== 헬퍼: 날짜 파싱(요청자/디자이너와 동일 로직) =====
  const toMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
  const parseLoose = (v: any): Date | null => {
    if (!v) return null;
    if (typeof v === "object" && typeof v.toDate === "function") return toMidnight(v.toDate());
    if (v instanceof Date) return toMidnight(v);
    if (typeof v === "number") return toMidnight(new Date(v));
    if (typeof v === "string") {
      const s = v.replace(/\./g, "-").replace(/\//g, "-");
      const parts = s.split("-");
      if (parts.length === 3) {
        const [y, m, d] = parts.map(Number);
        const year = y > 31 ? y : new Date().getFullYear();
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

  // ✅ (표시용) 매니저 상태 매핑: 검수요청 ↔ 검수중
  const mapStatusForManager = (status?: string) => {
    if (status === "검수요청") return "검수중";
    if (status === "검수중") return "검수요청";
    return status ?? "대기";
  };

  // ① 준비단계: 검색 인덱스/표시상태 세팅 (검색 대상: 문서번호 + 작업항목)
  const prepared = useMemo(() => {
    return requests.map((r: any) => {
      const displayStatus = mapStatusForManager(r.status);
      const assignedStr = Array.isArray(r.assigned_designers)
        ? r.assigned_designers.join(", ")
        : "";
      return makeSearchIndex({ ...r, displayStatus, assigned_display: assignedStr });
    });
  }, [requests]);

  // ===== 화면에 보여줄 리스트 (기간 + 상태 + 요청자/디자이너 + 검색) =====
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;
    const dateFilterOn = !!(s && e);       // ★ 기존
    const today = new Date();              // ★ 추가
    const q = keyword.trim();
    const searchOn = !!q;                  // ★ 추가

    return prepared.filter((r: any) => {
      const status = String(r.status ?? "").trim();
      const isDone = status === "완료" || status === "취소";

      // 날짜 범위 선택된 경우: request_date 기준, 완료/취소/상태 무시
      if (dateFilterOn) {
        const rd =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!rd || rd < s! || rd > e!) return false;
      } else {
        // 날짜 범위 미선택: 이번 달 이전 완료/취소는 검색 없을 때만 숨김
        const cd =
          parseLoose(r.completion_date) ||
          parseLoose((r as any).complete_date) ||
          null;
        const keepThisMonth = cd ? isSameMonth(cd, today) : false;

        if (!searchOn && isDone && !keepThisMonth) return false; // ★ 변경

        // 상태 필터 (기간 미선택일 때만)
        if (
          statusFilter !== DEFAULT_STATUS &&
          r.status !== statusFilter
        ) {
          return false;
        }
      }

      // 요청자 필터
      if (
        requesterFilter !== DEFAULT_REQUESTER &&
        r.requester !== requesterFilter
      )
        return false;

      // 디자이너 필터
      if (designerFilter !== DEFAULT_DESIGNER) {
        const arr = Array.isArray(r.assigned_designers)
          ? r.assigned_designers
          : [];
        const single = r.assigned_designer ?? "";
        if (!(arr.includes(designerFilter) || single === designerFilter))
          return false;
      }

      // 회사 필터
      if (
        companyFilter !== DEFAULT_COMPANY &&
        String(r.company) !== companyFilter
      )
        return false;

      // 검색어 (문서번호 + 작업항목 등)
      if (q && !matchesQuery(r, q)) return false;

      return true;
    });
  }, [ prepared, statusFilter, requesterFilter, designerFilter, companyFilter, dateRange, keyword ]);

  // [EXISTING] 공수 입력값 변경
  const changeWorkHour = (requestId: string, val: string) => {
    const cleaned = val.replace(/[^0-9.]/g, "");
    setWorkHours((prev) => ({ ...prev, [requestId]: cleaned }));
  };

  // [ADDED/CHANGED] 편집 시작: work_hour_edit_state -> true + 입력칸 값 seed
  const startEditWorkHour = async (requestId: string) => {
    const req = requests.find((r) => r.id === requestId);
    await updateDoc(doc(db, "design_request", requestId), {
      work_hour_edit_state: true,
    });
    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId ? { ...r, work_hour_edit_state: true } : r
      )
    );
    // 입력칸에 현재 out_work_hour가 없다면 채워줌
    setWorkHours((prev) => ({
      ...prev,
      [requestId]:
        prev[requestId] !== undefined && prev[requestId] !== ""
          ? prev[requestId]
          : req?.out_work_hour != null
          ? String(req.out_work_hour)
          : "",
    }));
  };

  /**
   * [CHANGED] 공수 저장:
   * - 입력값 → out_work_hour(그대로 저장)
   * - 입력값 × 배율 → in_work_hour(계산 저장)
   * - 저장 후 work_hour_edit_state = false
   */
  const saveWorkHour = async (requestId: string) => {
    const req = requests.find((r) => r.id === requestId);
    if (!req) return;

    const raw = (workHours[requestId] ?? "").trim();
    const input = Number(raw.replace(",", "."));
    if (!Number.isFinite(input) || input < 0) {
      alert("유효한 공수를 입력하세요.");
      return;
    }

    // ⬇ 배율을 회사/업무타입 기준으로 조회
    const multiplier = await getWorkTimesForRequest(req);

    // 소수 오차 최소화(최대 3자리 유지)
    const computedIn = Math.round(input * multiplier * 1000) / 1000;

    await updateDoc(doc(db, "design_request", requestId), {
      out_work_hour: input,        // 매니저 입력값 그대로
      in_work_hour: computedIn,    // 회사별 배율 적용 값
      work_hour_edit_state: false,
    });

    setRequests((prev) =>
      prev.map((r) =>
        r.id === requestId
          ? {
              ...r,
              out_work_hour: input,
              in_work_hour: computedIn,
              work_hour_edit_state: false,
            }
          : r
      )
    );

    alert("공수 수정 완료");
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
      // CSV 컬럼 순서(요구사항 그대로)
      const fields = [
        "design_request_id",   // 문서번호
        "request_date",        // 요청일
        "completion_date",     // 완료요청일
        "open_date",           // 오픈일
        "merchandiser",        // 담당MD
        "requester",           // 요청자
        "task_form",           // 업무부서
        "task_type",           // 업무형태
        "task_type_detail",    // 업무형태상세
        "requirement",         // 작업항목
        "url",                 // 요청서URL
        "note",                // 메모
        "status",              // 진행상태
        "result_url",          // 산출물URL
        "designer_start_date", // 디자인 시작일
        "designer_end_date",   // 디자인 종료일
        "assigned_designers",   // 디자이너
        "work_hour",           // 공수 (단일)
      ] as const;

      const headers: Record<(typeof fields)[number], string> = {
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
        note: "메모",
        status: "진행상태",
        result_url: "산출물URL",
        designer_start_date: "디자인 시작일",
        designer_end_date: "디자인 종료일",
        assigned_designers: "디자이너",
        work_hour: "공수",
      };

      // viewList -> CSV용 매핑(키 맞춤 + 날짜 포맷 + 공수 단일화)
      const rowsForCsv = (viewList as any[]).map((r) => {
        const assigned = Array.isArray(r.assigned_designers)
          ? r.assigned_designers.join(", ")
          : "";
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
          note: r.note ?? "",
          status: r.status ?? "",
          result_url: r.result_url ?? "",
          designer_start_date: toYmd(r.designer_start_date),
          designer_end_date: toYmd(r.designer_end_date),
          assigned_designers: assigned,
          work_hour: (r.in_work_hour ?? r.out_work_hour ?? "") + "",
        };
      });

      downloadArrayToCSV({
        rows: rowsForCsv,
        fields: fields as unknown as string[],
        headers,
        filename: "design_request_current_view.csv",
      });
    } finally {
      setExporting(false);
    }
  };

  // [NEW] 공수 편집 취소(바깥 클릭 등)
  const cancelEditWorkHour = async (requestId: string) => {
    await updateDoc(doc(db, "design_request", requestId), {
      work_hour_edit_state: false,
    });
    setRequests(prev =>
      prev.map(r =>
        r.id === requestId ? { ...r, work_hour_edit_state: false } : r
      )
    );
  };

  return (
    <>
      <MainTitle userRole={userRole}/>
      {view === "myrequestlist" && (
        <MainContentWrap>
          <RequestFilterSearchWrap 
            roleNumber={3}
            onApplyStatus={applyStatus} 
            onApplyRange={applyRange} 
            onSearch={applySearch} 
            keyword={keywordInput} 
            onKeywordChange={setKeywordInput}
            onResetFilters={clearStatusFromAside}
            resetKey={filterResetKey}
            // ⬇️ 매니저 전용 토글 + 요청자 옵션 전달
            isManager
            requesterOptions={requesterOptions}
            onApplyRequester={applyRequester}
            designerOptions={designerOptions}
            onApplyDesigner={applyDesigner}
            companyOptions={companyOptions}
            onApplyCompany={applyCompany}
          />
          <ExportCSV onClick={handleExportCSV} loading={exporting} />
          <ManagerRequestList 
            data={viewList}
            userUid={userUid}
            designerList={designerList}
            selectedDesigners={selectedDesigners}
            designerSelect={designerSelect}
            assignDesigner={assignDesigner}
            unassignDesigner={unassignDesigner}
            sendToRequester={sendToRequester}
            onDetailClick={openDetail}
            // [NEW] 공수 입력/저장 프롭스 전달
            workHours={workHours}
            onChangeWorkHour={changeWorkHour}
            onSaveWorkHour={saveWorkHour}
            onStartEditWorkHour={startEditWorkHour}
            onCancelEditWorkHour={cancelEditWorkHour}
            readLocal={readLocal}
          />
        </MainContentWrap>
      )}
      {view === "dashboard" && (
        <DashBoardWrap>
          <DashBoard capacityHoursPerMonth={704} />
        </DashBoardWrap>
      )}
      {view === "inworkhour" && (
        <InWorkHourWrap>
          <InWorkHour />
        </InWorkHourWrap>
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
  overflow: auto;
`;

const InWorkHourWrap = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  height: calc(100vh - 178px);
  padding-bottom: 24px;
`