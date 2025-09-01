import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc, orderBy, getDoc } from "firebase/firestore";
import RequesterRequestList from "./RequesterRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";
import { makeSearchIndex, matchesQuery } from "../utils/search.ts";

// ★ 추가: view 타입
type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

// ✅ 추가된 Props 인터페이스 정의
interface RequesterProps {
  view: ViewType;
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
  setDetailData: (data: RequestData) => void;
}

const DEFAULT_STATUS = "진행 상태 선택";

export default function Requester({ view, setIsDrawerOpen, setEditData, setDetailData }: RequesterProps) {
  const [userName, setUserName] = useState("");
  const [requests, setRequests] = useState<RequestData[]>([]); // request DB 배열
  const [statusFilter, setStatusFilter] = useState<string>("진행 상태 선택");
  const [dateRange, setDateRange] = useState<{ start: Date | null; end: Date | null }>({ start: null, end: null });

  // 🔍 검색: 입력값과 적용값 분리
  const [keywordInput, setKeywordInput] = useState<string>(""); // 인풋 바인딩(타이핑용)
  const [keyword, setKeyword] = useState<string>("");           // 검색 버튼 클릭 시에만 적용

  // ✅ 로그인 사용자 이름 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setUserName(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ 요청자가 보낸 요청만 가져오기
  // 요청 데이터: view에 따라 쿼리 스위칭
  useEffect(() => {
    if (view === "dashboard" || view === "inworkhour") {
      setRequests([]); // 필요 시 초기화
      return;
    }
    if (view !== "allrequestlist" && !userName) return;

    let qRef;
    if (view === "allrequestlist") {
      qRef = query(collection(db, "design_request"), orderBy("design_request_id", "desc"));
    } else if (view === "myrequestlist") { // ★ 명시
      qRef = query(
        collection(db, "design_request"),
        where("requester", "==", userName),
        orderBy("design_request_id", "desc")
      );
    } else {
      return; // 안전망
    }

    const unsubscribe = onSnapshot(qRef, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<RequestData, "id">)
      }));
      setRequests(data);
    });
    return () => unsubscribe();
  }, [userName, view]) // ★ 변경: view 의존

  // 필터 적용 콜백 (하위에서 올라옴)
  const applyRange  = (r: { start: Date | null; end: Date | null }) => setDateRange(r); // ⬅️ 추가
  const applyStatus = (status: string) => setStatusFilter(status);

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
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end ? toMidnight(dateRange.end) : null;
    const q = keyword.trim(); // matchesQuery 내부에서 소문자/초성 처리는 끝남

    return prepared.filter((r: any) => {
      // 상태 필터(표시 상태 기준)
      if (statusFilter !== DEFAULT_STATUS && r.displayStatus !== statusFilter) return false;

      // 날짜 필터(inclusive)
      if (s && e) {
        const reqDate =
          parseLoose(r.request_date) ||
          parseLoose(r.requested_at) ||
          parseLoose(r.requestDate);
        if (!reqDate || reqDate < s || reqDate > e) return false;
      }

      // 키워드(초성/영문/숫자 즉시 매칭)
      if (!matchesQuery(r, q)) return false;

      return true;
    });
  }, [prepared, statusFilter, dateRange, keyword]);


  // ✅ 검수완료 처리
  const reviewComplete = async (id: string) => {
    await updateDoc(doc(db, "design_request", id), {
      status: "완료",
      requester_review_status: "검수완료"
    });

    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: "완료", requester_review_status: "검수완료" } : req
      )
    );

    alert("완료 처리되었습니다.");
  };

  const editRequest = async (id: string) => {
    const docRef = doc(db, "design_request", id);
    await updateDoc(docRef, { requester_edit_state: true });

    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      const data = { id: docSnap.id, ...(docSnap.data() as Omit<RequestData, "id">) };
      setEditData(data);
      setIsDrawerOpen(true);
    }
  }

  // ✅ 메모/작업항목 클릭 → 디테일 모드
  const openDetail = (item: RequestData) => {
    setDetailData(item);     // 상위에서 drawerMode='detail' 세팅
    setIsDrawerOpen(true);
  };

  // ✅ 취소 처리
  const cancelRequest = async (id: string) => {
    await updateDoc(doc(db, "design_request", id), {
      status: "취소"
    });

    setRequests(prev =>
      prev.map(req =>
        req.id === id ? { ...req, status: "취소" } : req
      )
    );
  };

  return (
    <>
      <MainTitle />
      {view === "dashboard" && (
        <DashBoardWrap>
          <SummaryBox>
            <h4>대시보드</h4>
            <ul>
              <li>대기: {prepared.filter(v => v.status === "대기" || v.status === "대기중").length}</li>
              <li>진행중: {prepared.filter(v => v.status === "진행중" || v.requester_review_status === "검수요청").length}</li>
              <li>완료: {prepared.filter(v => v.status === "완료").length}</li>
              <li>취소: {prepared.filter(v => v.status === "취소").length}</li>
            </ul>
          </SummaryBox>
        </DashBoardWrap>
      )}

      {view === "allrequestlist" && (
        <AllRequestWrap>
          <RequestFilterSearchWrap
            roleNumber={3} // ★ 변경: 전체 조회니까 매니저 필터와 동일 UI가 어울리면 3, 아니면 1 유지
            onApplyStatus={applyStatus}
            onApplyRange={applyRange}
            onSearch={applySearch}
            keyword={keywordInput}
            onKeywordChange={setKeywordInput}
          />
          <RequesterRequestList
            data={viewList}
            onReviewComplete={reviewComplete}
            onCancel={cancelRequest}
            onEditClick={editRequest}
            onDetailClick={openDetail}
          />
        </AllRequestWrap>
      )}

      {view === "myrequestlist" && (
        <MyRequestWrap>
          <RequestFilterSearchWrap roleNumber={1} onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput}/>
          <RequesterRequestList data={viewList} onReviewComplete={reviewComplete} onCancel={cancelRequest} onEditClick={editRequest} onDetailClick={openDetail} />
        </MyRequestWrap>
      )}
    </>
  );
}

const AllRequestWrap = styled.div`
  
`;

const MyRequestWrap = styled.div`
  padding: 0 48px;
`;

const DashBoardWrap = styled.div`
  
`;

const SummaryBox = styled.div`
  padding: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.gray04};
  h4 { margin: 0 0 8px 0; }
  ul { margin: 0; padding-left: 16px; }
`;
