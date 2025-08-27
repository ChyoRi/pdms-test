import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { db } from "../firebaseconfig";
import { doc, updateDoc, collection, getDocs, onSnapshot, query, where, orderBy } from "firebase/firestore";
import ManagerRequestList from "./ManagerRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import ExportCSV from "./ExportCSV";
import { makeSearchIndex, matchesQuery } from "../utils/search";
import { downloadArrayToCSV } from "../utils/firestoreToCSV";

interface RequesterProps {
  setIsDrawerOpen: (value: boolean) => void;
  setDetailData: (data: RequestData) => void;
}

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_REQUESTER = "요청자 선택";
const DEFAULT_DESIGNER = "디자이너 선택";

export default function Manager({ setIsDrawerOpen, setDetailData }: RequesterProps) {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [designerList, setDesignerList] = useState<any[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<{ [key: string]: string }>({});
  // [NEW] 공수 입력칸(행별) 컨트롤드 상태
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
  // CSV로 추출 상태
  const [exporting, setExporting] = useState(false);

  // ✅ Firestore에서 요청 리스트 가져오기
  useEffect(() => {
    const q = query(
      collection(db, "design_request"),
      orderBy("design_request_id", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<RequestData, "id">)
      }));
      setRequests(data);
    });

    return () => unsubscribe();
  }, []);

  // ✅ 스냅샷으로 받은 리스트로 선택 맵을 seed (빈 키만 채움)
  useEffect(() => {
    if (!requests.length) return;
    setSelectedDesigners((prev) => {
      const next = { ...prev };
      requests.forEach((r: any) => {
        if (next[r.id] === undefined) {
          next[r.id] = r.assigned_designer ?? ""; // DB 필드명: assigned_designer
        }
      });
      return next;
    });
  }, [requests]);

  // [NEW] 스냅샷으로 받은 리스트로 공수 입력칸 seed (in_work_hour가 있으면 표시)
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

  // ✅ 디자이너 선택
  const designerSelect = (requestId: string, designerName: string) => {
    setSelectedDesigners(prev => ({ ...prev, [requestId]: designerName }));
  };

  // ✅ 디자이너 배정
  const assignDesigner = async (requestId: string) => {
    const selectedDesigner = selectedDesigners[requestId];
    if (!selectedDesigner) {
      alert("디자이너를 선택하세요.");
      return;
    }

    const docRef = doc(db, "design_request", requestId);
    await updateDoc(docRef, {
      assigned_designer: selectedDesigner
    });

    alert("디자이너가 배정되었습니다!");
    // ✅ 화면 업데이트 (배정된 디자이너 반영)
    setRequests(prev =>
      prev.map(req => req.id === requestId ? { ...req, assigned_designer: selectedDesigner } : req)
    );
  };

  const sendToRequester = async (requestId: string) => {
    await updateDoc(doc(db, "design_request", requestId), {
      manager_review_status: "검수완료",
      status: "검수중"
    });

    setRequests(prev =>
      prev.map(req =>
        req.id === requestId
          ? { ...req, manager_review_status: "검수완료", status: "검수중" } 
          : req
      )
    );

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
  const openDetail = (item: RequestData) => {
    setDetailData(item);     // 상위에서 drawerMode='detail' 세팅
    setIsDrawerOpen(true);
  };

  // ===== 필터 콜백 (RequestFilterSearchWrap에서 올라옴) =====
  const applyRange = (r: { start: Date | null; end: Date | null }) => setDateRange(r);
  const applyStatus = (status: string) => setStatusFilter(status);
  const applySearch = (kw: string) => setKeyword(kw.trim());
  const applyRequester = (name: string) => setRequesterFilter(name);
  const applyDesigner = (name: string) => setDesignerFilter(name); // ★ 추가

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
    return requests.map((r) => {
      const displayStatus = mapStatusForManager(r.status);
      return makeSearchIndex({ ...r, displayStatus });
    });
  }, [requests]);

  // ===== 화면에 보여줄 리스트 (기간 + 상태 + 요청자/디자이너 + 검색) =====
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;

    return prepared.filter((r: any) => {
      let ok = true;

      // 1) 상태(DB 값) 필터
      if (statusFilter !== DEFAULT_STATUS && r.status !== statusFilter) ok = false;

      // 2) 요청자/디자이너 필터
      if (ok && requesterFilter !== DEFAULT_REQUESTER && r.requester !== requesterFilter) ok = false;
      if (ok && designerFilter !== DEFAULT_DESIGNER && r.assigned_designer !== designerFilter) ok = false;

      // 3) 날짜 필터
      if (ok && s && e) {
        const rd =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!rd || rd < s || rd > e) ok = false;
      }

      // 4) 검색(문서번호 + 작업항목 / 초성 + 일반)
      if (ok && keyword && !matchesQuery(r, keyword)) ok = false;

      return ok;
    });
  }, [prepared, statusFilter, requesterFilter, designerFilter, dateRange, keyword]);

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

    // 배율 조회 (task_work_times)
    const twQuery = query(
      collection(db, "task_work_hour"),
      where("task_form", "==", req.task_form),
      where("task_type", "==", req.task_type)
    );
    const twSnap = await getDocs(twQuery);
    let multiplier = 1;
    if (!twSnap.empty) {
      const found = twSnap.docs[0].data() as any;
      multiplier = Number(found.task_work_times) || 1;
    }

    const computedIn = Number((input * multiplier).toFixed(2));

    await updateDoc(doc(db, "design_request", requestId), {
      out_work_hour: input,       // ⬅ 입력값 그대로
      in_work_hour: computedIn,   // ⬅ 계산값
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

  const handleExportCSV = async () => {
    setExporting(true);
    try {
      const fields = [
        "id",
        "design_request_id",
        "request_date",
        "requester",
        "task_form",
        "task_type",
        "requirement",
        "status",
        "assigned_designer",
        "designer_start_date",
        "designer_end_date",
        "out_work_hour",
        "in_work_hour",
      ];

      const headers: Record<string, string> = {
        id: "문서ID",
        design_request_id: "문서번호",
        request_date: "요청일",
        requester: "요청자",
        task_form: "업무형태",
        task_type: "업무타입",
        requirement: "작업항목",
        status: "진행상태",
        assigned_designer: "디자이너",
        designer_start_date: "디자인 시작일",
        designer_end_date: "디자인 종료일",
        out_work_hour: "공수(외부)",
        in_work_hour: "공수(내부)",
      };

      downloadArrayToCSV({
        rows: viewList,                         // ✅ 재조회 없음
        fields,
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
    <Container>
      <MainTitle />
      <RequestWrap>
        <ManagerRequestTitle>매니저 요청리스트</ManagerRequestTitle>
        <RequestFilterSearchWrap 
          roleNumber={3}
          onApplyStatus={applyStatus} 
          onApplyRange={applyRange} 
          onSearch={applySearch} 
          keyword={keywordInput} 
          onKeywordChange={setKeywordInput}
          // ⬇️ 매니저 전용 토글 + 요청자 옵션 전달
          isManager
          requesterOptions={requesterOptions}
          onApplyRequester={applyRequester}
          designerOptions={designerOptions}
          onApplyDesigner={applyDesigner}
        />
        <ExportCSV onClick={handleExportCSV} loading={exporting} />
        <ManagerRequestList 
          data={viewList}
          designerList={designerList}
          selectedDesigners={selectedDesigners}
          designerSelect={designerSelect}
          assignDesigner={assignDesigner}
          sendToRequester={sendToRequester}
          onDetailClick={openDetail}
          // [NEW] 공수 입력/저장 프롭스 전달
          workHours={workHours}
          onChangeWorkHour={changeWorkHour}
          onSaveWorkHour={saveWorkHour}
          onStartEditWorkHour={startEditWorkHour}
          onCancelEditWorkHour={cancelEditWorkHour}
        />
      </RequestWrap>
    </Container>
  );
}

const Container = styled.div``;

const RequestWrap = styled.div`
  padding: 0 48px;
`;

const ManagerRequestTitle = styled.h2`
  margin-top: 20px;
`;