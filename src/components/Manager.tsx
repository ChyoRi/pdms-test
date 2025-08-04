import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { doc, updateDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";
import ManagerRequestList from "./ManagerRequestList";

interface RequestData {
  id: string;
  request_date: any;
  requester: string;
  completion_dt: any;
  open_dt: any;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  status?: string;
  assigned_designer?: string;
  requester_review_status?: string;
  manager_review_status?: string;
  designer_start_date?: string;
  designer_end_date?: string;
  result_url?: string;     
}

export default function Manager() {
  const [requests, setRequests] = useState<RequestData[]>([]);
  const [designerList, setDesignerList] = useState<any[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<{ [key: string]: string }>({});

  // ✅ Firestore에서 요청 리스트 가져오기
  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "design_request"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...(doc.data() as Omit<RequestData, "id">)
      }));
      setRequests(data);
    });
    return () => unsubscribe();
  }, []);

  // ✅ Firestore에서 role=2인 디자이너 목록 가져오기
  useEffect(() => {
    const fetchDesigners = async () => {
      const q = query(collection(db, "users"), where("role", "==", 2));
      const snapshot = await getDocs(q);
      const designers = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setDesignerList(designers);
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

  return (
    <Container>
      <ManagerRequestTitle>매니저 요청리스트</ManagerRequestTitle>
      <ManagerRequestList data={requests}
        designerList={designerList}
        selectedDesigners={selectedDesigners}
        designerSelect={designerSelect}
        assignDesigner={assignDesigner}
        sendToRequester={sendToRequester}
      />
    </Container>
  );
}

const Container = styled.div``;

const ManagerRequestTitle = styled.h2`
  margin-bottom: 20px;
`;