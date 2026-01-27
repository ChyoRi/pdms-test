import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import {
  doc,
  getDoc,
  updateDoc,
  collection,
  getDocs,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import ManagerRequestList from "./ManagerRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import InWorkHour from "./InWorkHour";
import ChannelWorkHour from "./ChannelWorkHour";
import DashBoard from "./DashBoard";
import ExportCSV from "./ExportCSV";
import { makeSearchIndex, matchesQuery } from "../utils/search";
import { downloadArrayToCSV } from "../utils/firestoreToCSV";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour" | "channelworkhour";

interface RequesterProps {
  view: ViewType;
  setIsDrawerOpen: (value: boolean) => void;
  setDetailData: (data: RequestData) => void;
  userRole: number | null;
  statusFromAside?: string | null;
  clearStatusFromAside?: () => void;
  filterResetKey?: number;
  onOpenAssignDesigner?: (target: RequestData) => void;
}

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_REQUESTER = "요청자 선택";
const DEFAULT_DESIGNER = "디자이너 선택";
const DEFAULT_COMPANY = "회사 선택";

// assigned_designer 객체 타입
type AssignedDesignerObj = {
  uid: string;
  name: string;
  out_work_hour: number;
  in_work_hour: number;
};

// 하위호환 포함해서 이름 배열로 뽑기
const getAssignedNames = (raw: any): string[] => {
  if (!Array.isArray(raw) || raw.length === 0) return [];
  if (typeof raw[0] === "string") return raw.map((x: any) => String(x).trim()).filter(Boolean);
  return raw.map((d: any) => String(d?.name ?? "").trim()).filter(Boolean);
};

const round3 = (n: number) => Math.round(n * 1000) / 1000;

const isSameMonth = (d: Date, base = new Date()) =>
  d.getFullYear() === base.getFullYear() && d.getMonth() === base.getMonth();

export default function Manager({
  view,
  setIsDrawerOpen,
  setDetailData,
  userRole,
  statusFromAside,
  clearStatusFromAside,
  filterResetKey,
  onOpenAssignDesigner
}: RequesterProps) {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [/* designerList */, setDesignerList] = useState<any[]>([]);
  const [userUid, setUserUid] = useState("");
  const [/*managerName*/, setManagerName] = useState("");
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

  // 회사 비교용 정규화(문서ID nsmall vs 표시명 NSmall 모두 매칭) - 기존 유지
  const companyKey = (v: any) =>
    String(v ?? "")
      .trim()
      .toLowerCase()
      .replace(/\s+/g, "");

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      if (!user) {
        setUserUid("");
        setManagerName("");
        return;
      }
      setUserUid(user.uid);
      if (user.displayName) {
        setManagerName(user.displayName);
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
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<RequestData, "id">),
      }));
      setRequests(data);
    });
    return () => unsubscribe();
  }, [view]);

  // ⭐ 사이드바 상태 클릭 시 필터 동기화
  useEffect(() => {
    if (!statusFromAside) return;
    setStatusFilter(statusFromAside);
  }, [statusFromAside]);

  // ✅ Firestore에서 role=2인 디자이너 목록 가져오기
  useEffect(() => {
    const fetchDesigners = async () => {
      const q = query(collection(db, "users"), where("role", "==", 2));
      const snapshot = await getDocs(q);
      const designers = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
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

  //companies 컬렉션을 "옵션 목록 + times 계산용 캐시" 둘 다로 사용
  useEffect(() => {
    const unsub = onSnapshot(collection(db, "companies"), (snap) => {
      const optionSet = new Set<string>();

      snap.forEach((d) => {
        const data = d.data() as any;
        const docId = String(d.id ?? "").trim();
        const name = String(data?.company_name ?? docId ?? "").trim();
        if (name) optionSet.add(name);
      });

      setCompanyOptions(Array.from(optionSet).sort((a, b) => a.localeCompare(b, "ko")));
    });
    return () => unsub();
  }, []);

   // ★ 추가: assigned_rows 기반 재요약 (배정 해제 시 단일 진실)
  const summarizeFromAssignedRows = (rows: any[]) => {
    const per: Record<string, AssignedDesignerObj> = {};

    for (const r of rows) {
      const uid = String(r?.designer_uid ?? "").trim();
      const name = String(r?.designer_name ?? "").trim();
      if (!uid || !name) continue;

      if (!per[uid]) per[uid] = { uid, name, out_work_hour: 0, in_work_hour: 0 };

      per[uid].out_work_hour += Number(r?.out_work_hour ?? 0);
      per[uid].in_work_hour += Number(r?.in_work_hour ?? 0);
    }

    const assigned_designers: AssignedDesignerObj[] = Object.values(per).map((d) => ({
      ...d,
      out_work_hour: round3(d.out_work_hour),
      in_work_hour: round3(d.in_work_hour),
    }));

    const totalOut = round3(assigned_designers.reduce((s, d) => s + Number(d.out_work_hour ?? 0), 0));
    const totalIn = round3(assigned_designers.reduce((s, d) => s + Number(d.in_work_hour ?? 0), 0));
    const uids = assigned_designers.map((d) => d.uid);

    return { assigned_designers, totalOut, totalIn, uids };
  };

  // ★ 변경: 디자이너 배정 해제 (assigned_rows까지 동기화)
  const unassignDesigner = async (requestId: string, payload: { uid?: string; name: string }) => {
    const docRef = doc(db, "design_request", requestId);
    const snap = await getDoc(docRef);
    if (!snap.exists()) return;

    const data = snap.data() as any;

    const uid = String(payload.uid ?? "").trim();
    const name = String(payload.name ?? "").trim();

    // (1) assigned_rows가 있으면: rows에서도 제거 후 rows 기준으로 전부 재계산
    const curRows = Array.isArray(data?.assigned_rows) ? data.assigned_rows : null;
    if (curRows && curRows.length > 0) {
      const nextRows = curRows.filter((r: any) => {
        const ruid = String(r?.designer_uid ?? "").trim();
        const rname = String(r?.designer_name ?? "").trim();
        if (uid) return ruid !== uid;
        return rname !== name;
      });

      const { assigned_designers, totalOut, totalIn, uids } = summarizeFromAssignedRows(nextRows);

      await updateDoc(docRef, {
        assigned_rows: nextRows,
        assigned_designers,
        assigned_designer_uids: uids,
        out_work_hour: totalOut,
        in_work_hour: totalIn,
      });
      return;
    }

    // (2) 하위호환: assigned_rows 없으면 기존 로직 유지
    const raw = data?.assigned_designers;

    if (Array.isArray(raw) && raw.length > 0 && typeof raw[0] === "string") {
      const nextArr = (raw as string[]).filter((n) => String(n).trim() !== name);
      await updateDoc(docRef, { assigned_designers: nextArr });
      return;
    }

    const cur: AssignedDesignerObj[] = Array.isArray(raw) ? (raw as any[]) : [];
    const next = cur.filter((d) => {
      const duid = String((d as any)?.uid ?? "").trim();
      const dname = String((d as any)?.name ?? "").trim();
      if (uid) return duid !== uid;
      return dname !== name;
    });

    const totalOut = round3(next.reduce((s, d) => s + Number((d as any)?.out_work_hour ?? 0), 0));
    const totalIn = round3(next.reduce((s, d) => s + Number((d as any)?.in_work_hour ?? 0), 0));

    await updateDoc(docRef, {
      assigned_designers: next,
      out_work_hour: totalOut,
      in_work_hour: totalIn,
    });
  };

  const sendToRequester = async (requestId: string) => {
    await updateDoc(doc(db, "design_request", requestId), {
      manager_review_status: "검수완료",
      status: "검수중",
    });

    setRequests((prev) =>
      prev.map((rq) =>
        rq.id === requestId ? { ...rq, manager_review_status: "검수완료", status: "검수중" } : rq
      )
    );

    alert("요청자에게 전달되었습니다.");
  };

  // 요청자 목록(role=1)
  useEffect(() => {
    (async () => {
      const q = query(collection(db, "users"), where("role", "==", 1));
      const snap = await getDocs(q);
      const names = snap.docs.map((d) => (d.data() as any).name).filter(Boolean);
      setRequesterOptions(names);
    })();
  }, []);

  // ✅ 메모/작업항목 클릭 → 디테일 모드
  const openDetail = async (item: RequestData) => {
    if (userUid) {
      const now = Date.now();
      setReadLocal((prev) => ({ ...prev, [item.id]: now }));

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
      } catch (e) {}
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
      const assignedStr = Array.isArray(r.assigned_designers) ? r.assigned_designers.join(", ") : "";
      return makeSearchIndex({ ...r, displayStatus, assigned_display: assignedStr });
    });
  }, [requests]);

  // ===== 화면에 보여줄 리스트 (기간 + 상태 + 요청자/디자이너 + 검색) =====
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

      if (dateFilterOn) {
        const rd = parseLoose(r.request_date) || parseLoose(r.requested_at) || parseLoose(r.requestDate);
        if (!rd || rd < s! || rd > e!) return false;
      } else {
        const cd = parseLoose(r.completion_date) || parseLoose((r as any).complete_date) || null;
        const keepThisMonth = cd ? isSameMonth(cd, today) : false;

        if (!searchOn && isDone && !keepThisMonth) return false;

        if (statusFilter !== DEFAULT_STATUS && r.status !== statusFilter) {
          return false;
        }
      }

      if (requesterFilter !== DEFAULT_REQUESTER && r.requester !== requesterFilter) return false;

      // ★ 변경: 디자이너 필터(객체배열 대응)
      if (designerFilter !== DEFAULT_DESIGNER) {
        const raw = (r as any).assigned_designers;
        const arrNames = getAssignedNames(raw);
        const single = (r as any).assigned_designer ?? "";

        if (!(arrNames.includes(designerFilter) || single === designerFilter)) return false;
      }

      if (companyFilter !== DEFAULT_COMPANY) {
        if (companyKey(r.company) !== companyKey(companyFilter)) return false;
      }

      if (q && !matchesQuery(r, q)) return false;

      return true;
    });
  }, [prepared, statusFilter, requesterFilter, designerFilter, companyFilter, dateRange, keyword]);

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

  // 공수 숫자 안전 파서(문서별 내부/외부공수 CSV용)
  const toHourNum = (v: any): number => {
    const n = Number(v);
    return Number.isFinite(n) ? n : 0;
  };

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      // CSV 컬럼 순서(요구사항 반영)
      const fields = [
        "design_request_id",
        "request_date",
        "completion_date",
        "open_date",
        "merchandiser",
        "requester",
        "task_form",
        "task_type",
        "task_type_detail",
        "requirement",
        "status",
        "result_url",
        "designer_start_date",
        "designer_end_date",
        "assigned_designers",
        "out_work_hour",
        "in_work_hour",
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
        status: "진행상태",
        result_url: "산출물URL",
        designer_start_date: "디자인 시작일",
        designer_end_date: "디자인 종료일",
        assigned_designers: "디자이너",
        out_work_hour: "외부공수",
        in_work_hour: "내부공수",
      };

      const rowsForCsv = (viewList as any[]).map((r) => {
        const status = String(r.status ?? "").trim();

        const names = getAssignedNames((r as any).assigned_designers);
        const single = String((r as any).assigned_designer ?? "").trim();
        const hasAssignees = names.length > 0 || !!single;
        const assigned = [...names, ...(single ? [single] : [])].join(", ");

        // ★ 변경: raw를 먼저 잡고, null/undefined면 ""(빈칸)로 출력
        const rawIn = (r as any).in_work_hour;   // total_* 없음 전제
        const rawOut = (r as any).out_work_hour;

        const inHourNum  = rawIn  == null ? "" : round3(toHourNum(rawIn));   // ★ 변경
        const outHourNum = rawOut == null ? "" : round3(toHourNum(rawOut));  // ★ 변경

        // ★ 변경: 취소 + 배정없음이면 내부/외부 모두 빈칸
        const inHourCsv =
          status === "취소" && !hasAssignees ? "" : inHourNum;   // ★ 추가

        const outHourCsv =
          status === "취소" && !hasAssignees ? "" : outHourNum;  // ★ 유지(내부 로직만 대칭)

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
          status: r.status ?? "",
          result_url: r.result_url ?? "",
          designer_start_date: toYmd(r.designer_start_date),
          designer_end_date: toYmd(r.designer_end_date),
          assigned_designers: assigned,

          // ★ 변경: 내부/외부 공수 출력
          out_work_hour: outHourCsv,
          in_work_hour: inHourCsv,
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

  return (
    <>
      <MainTitle userRole={userRole} />
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
            unassignDesigner={unassignDesigner}
            sendToRequester={sendToRequester}
            onDetailClick={openDetail}
            // [NEW] 공수 입력/저장 프롭스 전달
            readLocal={readLocal}
            onOpenAssignDesigner={onOpenAssignDesigner}
          />
        </MainContentWrap>
      )}
      {view === "dashboard" && (
        <DashBoardWrap>
          <DashBoard />
        </DashBoardWrap>
      )}
      {view === "inworkhour" && (
        <InWorkHourWrap>
          <InWorkHour />
        </InWorkHourWrap>
      )}
      {view === "channelworkhour" && (
        <ChannelWorkHourWrap>
          <ChannelWorkHour />
        </ChannelWorkHourWrap>
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
`;

const ChannelWorkHourWrap = styled.div`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
  height: calc(100vh - 178px);
  padding-bottom: 24px;
`;
