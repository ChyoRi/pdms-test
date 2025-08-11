import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc, Timestamp, orderBy, getDoc } from "firebase/firestore";
import RequesterRequestList from "./RequesterRequestList";
import MainTitle from "./MainTitle";

// ✅ Firestore 데이터 구조 기반 타입 정의
interface RequestData {
  design_request_id: string;
  id: string;
  request_date: string;
  requester: string;
  completion_dt: string;
  open_dt: string;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  status?: string;
  review_status?: string;
  assigned_designer?: string;
  result_url?: string;
  emergency?: boolean;
  edit_state?: boolean;
  created_at: Timestamp;
}

// ✅ 추가된 Props 인터페이스 정의
interface RequesterProps {
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
}


export default function Requester({ setIsDrawerOpen, setEditData }: RequesterProps) {
  const [userName, setUserName] = useState("");
  const [requests, setRequests] = useState<RequestData[]>([]); // request DB 배열

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

    const q = query(collection(db, "design_request"),where("requester", "==", userName),orderBy("design_request_id", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<RequestData, "id">)
      }));
      setRequests(data);
    });

    return () => unsubscribe();
  }, [userName]);


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
      <RequesterRequestList data={requests} onReviewComplete={reviewComplete} onCancel={cancelRequest} onEditClick={editRequest} />
    </>
  );
}