import styled from "styled-components";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { query, where, collection, onSnapshot, doc, updateDoc, Timestamp } from "firebase/firestore";
import DesignerRequestList from "./DesignerRequestList";

interface DesignRequest {
  id: string;
  requester: string;
  request_date: any;
  completion_dt: any;
  open_dt: any;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  assigned_designer?: string;
  review_status?: string;
  designer_start_date?: string;
  designer_end_date?: string;
  result_url?: string;
  status?: string;
  priority?: string;
}

export default function Designer() {
  const [assignedRequests, setAssignedRequests] = useState<DesignRequest[]>([]);
  const [designerName, setDesignerName] = useState(""); // ✅ 로그인 디자이너 이름
  const [formData, setFormData] = useState<{ [key: string]: any }>({});

  // ✅ 로그인 디자이너 이름 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setDesignerName(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ Firestore에서 로그인 디자이너에게 배정된 요청만 가져오기
  useEffect(() => {
    if (!designerName) return; // 이름 없으면 실행 X

    const q = query(
      collection(db, "design_request"),
      where("assigned_designer", "==", designerName) // ✅ 필터 추가
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const data: DesignRequest[] = snapshot.docs.map(doc => ({
        id: doc.id,
        ...(doc.data() as Omit<DesignRequest, "id">)
      }));
      setAssignedRequests(data);
    });

    return () => unsubscribe();
  }, [designerName]); // ✅ 의존성에 designerName 추가

  // ✅ 입력값 변경
  const handleChange = (requestId: string, field: string, value: string) => {
    setFormData(prev => ({
      ...prev,
      [requestId]: {
        ...prev[requestId],
        [field]: value
      }
    }));
  };

  // ✅ 날짜 변환 함수 (Timestamp로)
  const toTimestamp = (dateStr: string) => {
    return dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;
  };

  // ✅ Firestore 업데이트 (design_request)
  const saveResponse = async (requestId: string) => {
    const requestRef = doc(db, "design_request", requestId);
    const data = formData[requestId];

    if (!data) {
      alert("변경된 내용이 없습니다.");
      return;
    }

    await updateDoc(requestRef, {
      designer_start_date: toTimestamp(data.start_dt),
      designer_end_date: toTimestamp(data.end_dt),
      result_url: data.result_url || "",
      status: data.status
    });

    alert("저장되었습니다.");
  };

  return (
    <Container>
      <DesignerRequestTitle>디자이너 화면</DesignerRequestTitle>
      <DesignerRequestList requests={assignedRequests} formData={formData} onChange={handleChange} onSave={saveResponse} />
    </Container>
  )
}

const Container = styled.div``;

const DesignerRequestTitle = styled.h2`
  margin-bottom: 20px;
`