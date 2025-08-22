import styled from "styled-components";
import { useEffect, useState, useMemo } from "react";
import { db } from "../firebaseconfig";
import { doc, updateDoc, collection, getDocs, onSnapshot, query, where, orderBy } from "firebase/firestore";
import ManagerRequestList from "./ManagerRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";

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
  // 필터/검색
  const [statusFilter, setStatusFilter] = useState<string>(DEFAULT_STATUS);
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({
    start: null,
    end: null,
  });
  const [keywordInput, setKeywordInput] = useState<string>("");
  const [keyword, setKeyword] = useState<string>("");

  // 매니저 전용: 요청자 필터
  const [requesterOptions, setRequesterOptions] = useState<string[]>([]);
  const [requesterFilter, setRequesterFilter] = useState<string>(DEFAULT_REQUESTER);
  // 매니저 전용: 디자이너 필터
  const [designerOptions, setDesignerOptions] = useState<string[]>([]); // ★ 추가
  const [designerFilter, setDesignerFilter] = useState<string>(DEFAULT_DESIGNER); // ★ 추가

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


  // ===== 화면에 보여줄 리스트 (기간 + 상태 + 검색) =====
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;
    const q = keyword.toLowerCase();

    return requests.filter((r: any) => {
      if (statusFilter !== DEFAULT_STATUS && r.status !== statusFilter) return false;
      if (requesterFilter !== DEFAULT_REQUESTER && r.requester !== requesterFilter) return false;
      // ★ 여기 추가: assigned_designer 기준
      if (designerFilter !== DEFAULT_DESIGNER && r.assigned_designer !== designerFilter) return false;

      if (s && e) {
        const rd =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!rd || rd < s || rd > e) return false;
      }

      if (q) {
        const id  = String(r.design_request_id ?? "").toLowerCase();
        const req = String(r.requirement ?? "").toLowerCase();
        if (!id.includes(q) && !req.includes(q)) return false;
      }
      return true;
    });
  }, [requests, statusFilter, requesterFilter, designerFilter, dateRange, keyword]);

  return (
    <Container>
      <MainTitle />
      <RequestWrap>
        <ManagerRequestTitle>매니저 요청리스트</ManagerRequestTitle>
        <RequestFilterSearchWrap 
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
        <ManagerRequestList 
          data={viewList}
          designerList={designerList}
          selectedDesigners={selectedDesigners}
          designerSelect={designerSelect}
          assignDesigner={assignDesigner}
          sendToRequester={sendToRequester}
          onDetailClick={openDetail}
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