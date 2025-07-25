import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { doc, getDoc, updateDoc, collection, getDocs, query, where } from "firebase/firestore";

export default function Manager() {
  const [requests, setRequests] = useState<any[]>([]);
  const [designerList, setDesignerList] = useState<any[]>([]);
  const [selectedDesigners, setSelectedDesigners] = useState<{ [key: string]: string }>({});

  // ✅ Firestore에서 요청 리스트 가져오기
  useEffect(() => {
    const fetchRequests = async () => {
      const snapshot = await getDocs(collection(db, "design_request"));
      const data = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setRequests(data);
    };
    fetchRequests();
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

  // ✅ 디자이너 배정
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
      assigned_designer: selectedDesigner,
      status: "assigned" // ✅ 상태 필드 추가 (선택)
    });

    alert("디자이너가 배정되었습니다!");
    // ✅ 화면 업데이트 (배정된 디자이너 반영)
    setRequests(prev =>
      prev.map(req => req.id === requestId ? { ...req, assigned_designer: selectedDesigner } : req)
    );
  };

  return (
    <Container>
      <h2>요청 리스트</h2>
      {requests.length > 0 ? (
        <List>
          {requests.map(req => (
            <ListItem key={req.id}>
              <Info>
                <p><strong>요청자:</strong> {req.requester}</p>
                <p><strong>요청일:</strong> {req.request_date}</p>
                <p><strong>업무형태:</strong> {req.task_form}</p>
                <p><strong>업무타입:</strong> {req.task_type}</p>
                <p><strong>요청내용:</strong> {req.requirement}</p>
                {req.url && (
                  <p>
                    <strong>기획안:</strong> <a href={req.url} target="_blank" rel="noopener noreferrer">보기</a>
                  </p>
                )}
                <p>
                  <strong>배정 디자이너:</strong> {req.assigned_designer || "미배정"}
                </p>
              </Info>
              <Action>
                <select
                  value={selectedDesigners[req.id] || ""}
                  onChange={(e) => designerSelect(req.id, e.target.value)}
                >
                  <option value="">디자이너 선택</option>
                  {designerList.map(designer => (
                    <option key={designer.id} value={designer.name}>
                      {designer.name}
                    </option>
                  ))}
                </select>
                <button onClick={() => assignDesigner(req.id)}>배정</button>
              </Action>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>요청 데이터를 불러오는 중...</p>
      )}
    </Container>
  );
}

const Container = styled.div`
  padding: 20px;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
`;

const Info = styled.div`
  flex: 1;
  p {
    margin: 4px 0;
  }
`;

const Action = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  select {
    padding: 8px;
    font-size: 14px;
  }
  button {
    padding: 8px 12px;
    background: #073863;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
`;