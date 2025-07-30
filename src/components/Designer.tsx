import styled from "styled-components";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth, db } from "../firebaseconfig";
import { query, where, collection, onSnapshot, doc, setDoc, updateDoc } from "firebase/firestore";

interface DesignRequest {
  id: string;
  requester: string;
  request_date: string;
  completion_dt: string;
  open_dt: string;
  task_form: string;
  task_type: string;
  requirement: string;
  url1?: string;
  url2?: string;
  assigned_designer?: string;
  review_status?: string;
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

  // ✅ design_response에 저장
  const saveResponse = async (requestId: string) => {
    const responseRef = doc(db, "design_response", requestId);
    const requestRef = doc(db, "design_request", requestId); // ✅ design_request 참조 추가

    const data = {
      request_id: requestId,
      ...formData[requestId],
      updated_at: new Date()
    };

    // ✅ design_response 업데이트
    await setDoc(responseRef, data, { merge: true });

    // ✅ design_request의 status도 업데이트
    if (formData[requestId]?.status) {
      await updateDoc(requestRef, {
        status: formData[requestId].status // 예: "진행중", "완료"
      });
    }

    alert("응답이 저장되었습니다.");
  };


  return (
    <Container>
      <h2>디자이너 화면</h2>
      {assignedRequests.length > 0 ? (
        <List>
          {assignedRequests.map(req => (
            <ListItem key={req.id}>
              <Info>
                <p><strong>요청자:</strong> {req.requester}</p>
                <p><strong>요청일:</strong> {req.request_date}</p>
                <p><strong>업무형태:</strong> {req.task_form}</p>
                <p><strong>업무타입:</strong> {req.task_type}</p>
                <p><strong>요청내용:</strong> {req.requirement}</p>
                {req.url1 && (
                  <p>
                    <strong>기획안:</strong> <a href={req.url1} target="_blank" rel="noopener noreferrer">보기</a>
                  </p>
                )}
                {req.url2 && (
                  <p>
                    <strong>기획안:</strong> <a href={req.url2} target="_blank" rel="noopener noreferrer">보기</a>
                  </p>
                )}
                <p><strong>배정 디자이너:</strong> {req.assigned_designer}</p>

                {/* ✅ 검수완료 표시 */}
                {req.review_status === "검수완료" && (
                  <p style={{ color: "green", fontWeight: "bold", marginTop: "8px" }}>
                    검수가 완료되었습니다.
                  </p>
                )}

                {/* 응답 입력 */}
                <Label>시작일</Label>
                <Input
                  type="date"
                  onChange={(e) => handleChange(req.id, "start_dt", e.target.value)}
                />

                <Label>종료일</Label>
                <Input
                  type="date"
                  onChange={(e) => handleChange(req.id, "end_dt", e.target.value)}
                />

                <Label>산출물 링크</Label>
                <Input
                  type="text"
                  placeholder="https://..."
                  onChange={(e) => handleChange(req.id, "result_url", e.target.value)}
                />

                <Label>진행상태</Label>
                <Select
                  onChange={(e) => handleChange(req.id, "status", e.target.value)}
                >
                  <option value="대기중">대기</option>
                  <option value="진행중">진행중</option>
                  <option value="완료">완료</option>
                </Select>

                <SaveButton onClick={() => saveResponse(req.id)}>저장</SaveButton>
              </Info>
            </ListItem>
          ))}
        </List>
      ) : (
        <p>배정된 요청이 없습니다.</p>
      )}
    </Container>
  )
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

const Label = styled.label`
  display: block;
  margin-top: 10px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  margin-bottom: 10px;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const Select = styled.select`
  width: 100%;
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;

const SaveButton = styled.button`
  margin-top: 10px;
  padding: 10px 15px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;