import styled from "styled-components";
import { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { collection, onSnapshot, query, where, updateDoc, doc, orderBy} from "firebase/firestore";
import RequestForm from "./RequestForm";
import RequestList from "./RequestList";

export default function Requester() {
  const [userName, setUserName] = useState("");
  const [requests, setRequests] = useState<any[]>([]); // request DB 배열
  const [responses, setResponses] = useState<{ [key: string]: any }>({}); // design_response 에서 가져온 응답 DB

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

  const q = query(
    collection(db, "design_request"),
    where("requester", "==", userName),
    orderBy("created_at", "desc")
  );

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const data = snapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data()
    }));
    setRequests(data);
    });

    return () => unsubscribe();
  }, [userName]);

  // ✅ 디자이너 응답 가져오기 (is_sent_to_requester === true)
  useEffect(() => {
    const q = query(collection(db, "design_response"), where("is_sent_to_requester", "==", true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const responseData: { [key: string]: any } = {};
      snapshot.docs.forEach((doc) => {
        const res = doc.data();
        responseData[res.request_id] = res; // ✅ request_id로 매핑
      });
      setResponses(responseData);
    });
    return () => unsubscribe();
  }, []);

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


  const mergedData = requests.map(req => ({
    id: req.id,
    request: req,
    response: responses[req.id] || null
  }));

  return (
    <>
      <RequestForm userName={userName} />
      <RequestListTitle>디자인 요청 리스트</RequestListTitle>
      <RequestList data={mergedData} onReviewComplete={reviewComplete} />
    </>
  );
}

const RequestListTitle = styled.h2`
  margin-bottom: 20px;
`;