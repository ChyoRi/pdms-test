import styled from "styled-components";
import { useState, useEffect, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc, orderBy, getDoc } from "firebase/firestore";
import RequesterRequestList from "./RequesterRequestList";
import MainTitle from "./MainTitle";
import RequestFilterSearchWrap from "./RequestFilterSearchWrap";

// ✅ 추가된 Props 인터페이스 정의
interface RequesterProps {
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
  setDetailData: (data: RequestData) => void;
}

export default function Requester({ setIsDrawerOpen, setEditData, setDetailData }: RequesterProps) {
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
  useEffect(() => {
    if (!userName) return; // 로그인 이름 없으면 실행 X

    const q = query(collection(db, "design_request"),where("requester", "==", userName),orderBy("design_request_id", "desc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<RequestData, "id">)
      }));
      setRequests(data);
    });

    return () => unsubscribe();
  }, [userName]);

  // 필터 적용 콜백 (하위에서 올라옴)
  const applyRange  = (r: { start: Date | null; end: Date | null }) => setDateRange(r); // ⬅️ 추가
  const applyStatus = (status: string) => setStatusFilter(status);

  // 🔍 검색 버튼 클릭 시 적용
  const applySearch = (kw: string) => setKeyword(kw);

  // ⭐ 요청자 화면용 status 매핑 함수
  const mapStatusForRequester = (status: string) => {
    if (status === "검수요청") return "진행중";
    if (status === "검수중") return "검수요청";
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

  // ⭐ 화면에 보여줄 리스트
  const viewList = useMemo(() => {
    const s = dateRange.start ? toMidnight(dateRange.start) : null;
    const e = dateRange.end   ? toMidnight(dateRange.end)   : null;
    const q = keyword.trim().toLowerCase(); // ← 활성 검색어(버튼 클릭 시에만 변경)

    return requests
      .map((r) => ({ ...r, displayStatus: mapStatusForRequester(r.status) }))
      .filter((r) => {
        let ok = true;

        // 1) 상태 필터
        if (statusFilter && statusFilter !== "진행 상태 선택") {
          ok = ok && r.displayStatus === statusFilter;
        }

        // 2) 날짜 필터 (inclusive)
        if (s && e) {
          const reqDate =
            parseLoose((r as any).request_date) ||
            parseLoose((r as any).requested_at) ||
            parseLoose((r as any).requestDate) ||
            null;
          ok = ok && !!reqDate && reqDate >= s && reqDate <= e;
        }

        // 3) 키워드 필터 (두 필드만)
        if (q) {
          const id  = String((r as any).design_request_id ?? "").toLowerCase();
          const req = String((r as any).requirement ?? "").toLowerCase();
          ok = ok && (id.includes(q) || req.includes(q));
        }

        return ok;
      });
  }, [requests, statusFilter, dateRange, keyword]);


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
      <RequestWrap>
        <RequestFilterSearchWrap onApplyStatus={applyStatus} onApplyRange={applyRange} onSearch={applySearch} keyword={keywordInput} onKeywordChange={setKeywordInput}/>
        <RequesterRequestList data={viewList} onReviewComplete={reviewComplete} onCancel={cancelRequest} onEditClick={editRequest} onDetailClick={openDetail} />
      </RequestWrap>
    </>
  );
}

const RequestWrap = styled.div`
  padding: 0 48px;
`;
