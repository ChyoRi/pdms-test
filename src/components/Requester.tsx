import styled from "styled-components";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc} from "firebase/firestore";
import RequestForm from "./RequestForm";
import RequestList from "./RequestList";

// ✅ Firestore 데이터 구조 기반 타입 정의
interface RequestData {
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
}


export default function Requester() {
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

    const q = query(collection(db, "design_request"),where("requester", "==", userName));

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
    try {
      await updateDoc(doc(db, "design_request", id), {
        review_status: "검수완료",
        reviewed_at: new Date()
      });
      alert("검수완료 처리되었습니다.");
    } catch (error) {
      console.error(error);
      alert("검수완료 처리 중 오류 발생");
    }
  };

  return (
    <>
      <RequestForm userName={userName} />
      <RequestListTitle>디자인 요청 리스트</RequestListTitle>
      <RequestList data={requests} onReviewComplete={reviewComplete} />
    </>
  );
}

const RequestListTitle = styled.h2`
  margin-bottom: 20px;
`;