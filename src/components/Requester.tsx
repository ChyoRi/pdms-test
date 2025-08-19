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
  const applyStatus = (status: string) => setStatusFilter(status);

  // ⭐ 요청자 화면용 status 매핑 함수
  const mapStatusForRequester = (status: string) => {
    if (status === "검수요청") return "진행중";
    if (status === "검수중") return "검수요청";
    return status; // 나머지는 그대로
  };

  // ⭐ 화면에 보여줄 리스트
  const viewList = useMemo(() => {
    return requests.map((r) => ({
      ...r,
      displayStatus: mapStatusForRequester(r.status), // 화면용 status 추가
    })).filter((r) => {
      if (!statusFilter || statusFilter === "진행 상태 선택") return true;
      return r.displayStatus === statusFilter;
    });
  }, [requests, statusFilter]);


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
      <RequestFilterSearchWrap onApplyStatus={applyStatus} />
      <RequesterRequestList data={viewList} onReviewComplete={reviewComplete} onCancel={cancelRequest} onEditClick={editRequest} onDetailClick={openDetail} />
    </>
  );
}