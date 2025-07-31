import styled from "styled-components";
import { useEffect, useState } from "react";
import { db } from "../firebaseconfig";
import { doc, updateDoc, collection, getDocs, onSnapshot, query, where } from "firebase/firestore";

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

  // ✅ 검수 완료 처리
  const reviewComplete = async (requestId: string) => {
    try {
      await updateDoc(doc(db, "design_request", requestId), {
        manager_review_status: "검수완료",
        status: "검수중"
      });
      alert("검수 완료 처리되었습니다.");
    } catch (error) {
      console.error(error);
      alert("검수 완료 처리 중 오류 발생");
    }
  };

  // ✅ 날짜 포맷
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  const sendToRequester = async (requestId: string) => {
    const responseRef = doc(db, "design_response", requestId);
    await updateDoc(responseRef, { is_sent_to_requester: true });
    
    alert("요청자에게 전달되었습니다.");
  };

  return (
    <Container>
      <h2>요청 리스트</h2>
      {requests.length > 0 ? (
        <List>
          {requests.map(req => {
            return (
              <ListItem key={req.id}>
                <Info>
                  <p><strong>요청일:</strong> {formatDate(req.request_date)}</p>
                  <p><strong>요청자:</strong> {req.requester}</p>
                  <p><strong>완료요청일:</strong> {formatDate(req.completion_dt)}</p>
                  <p><strong>오픈일:</strong> {formatDate(req.open_dt)}</p>
                  <p><strong>업무형태:</strong> {req.task_form}</p>
                  <p><strong>업무타입:</strong> {req.task_type}</p>
                  <p><strong>요청내용:</strong> {req.requirement}</p>
                  {req.url && (
                    <p>
                      <strong>기획안:</strong>{" "}
                      <a href={req.url} target="_blank" rel="noopener noreferrer">보기</a>
                    </p>
                  )}
                  {req.note && (
                    <p>
                      <strong>비고:</strong>{" "}
                      <a href={req.note} target="_blank" rel="noopener noreferrer">보기</a>
                    </p>
                  )}
                  <p><strong>담당 디자이너:</strong> {req.assigned_designer || "미배정"}</p>

                  {/* ✅ 검수완료 표시 */}
                  {req.requester_review_status === "검수완료" && (
                    <p style={{ color: "green", fontWeight: "bold" }}>검수가 완료되었습니다.</p>
                  )}

                  {/* ✅ 응답 데이터 (있을 때만 표시) */}
                  {req.designer_start_date && (
                    <ResponseBox>
                      <h4>디자이너 응답</h4>
                      <p><strong>시작일:</strong> {req.designer_start_date || "-"}</p>
                      <p><strong>종료일:</strong> {req.designer_end_date || "-"}</p>
                      <p>
                        <strong>산출물 링크:</strong>{" "}
                        {req.result_url ? (
                          <a href={req.result_url} target="_blank" rel="noopener noreferrer">보기</a>
                        ) : "-"}
                      </p>
                      <p><strong>진행상태:</strong> {req.status}</p>

                      {/* ✅ 요청자에게 전달 버튼 */}
                      {req.status === "검수요청" &&  (
                        <SendButton onClick={() => sendToRequester(req.id)}>완료</SendButton>
                      )}

                      {/* ✅ 전달 완료 메시지 */}
                      {req.manager_review_status === "검수완료" && (
                        <p style={{ color: "green", fontWeight: "bold" }}>요청자에게 전달됨</p>
                      )}
                    </ResponseBox>
                  )}
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
            );
          })}
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

const ResponseBox = styled.div`
  margin-top: 15px;
  padding: 10px;
  background: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 6px;
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

const SendButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;