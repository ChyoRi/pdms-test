import styled from "styled-components";
import { useState, useEffect } from "react";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp, onSnapshot, getDocs, query, where, } from "firebase/firestore";

export default function Requester() {
  const [userName, setUserName] = useState("");
  const [taskForm, setTaskForm] = useState("GHS");
  const [taskType, setTaskType] = useState("기획전");
  const [requirement, setRequirement] = useState("");
  const [url, setUrl] = useState("");

  const [requests, setRequests] = useState<any[]>([]);
  const [responses, setResponses] = useState<{ [key: string]: any }>({});

  // ✅ 로그인 사용자 이름 가져오기
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setUserName(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

  // ✅ 모든 요청 가져오기 → 실시간 반영으로 변경
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(db, "design_request"),
      (snapshot) => {
        const data = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data()
        }));
        setRequests(data); // ✅ 상태 업데이트 (실시간)
      }
    );
    return () => unsubscribe(); // ✅ 컴포넌트 언마운트 시 리스너 해제
  }, []);

  // ✅ 디자이너 응답 가져오기 (is_sent_to_requester === true)
  useEffect(() => {
    const q = query(
      collection(db, "design_response"),
      where("is_sent_to_requester", "==", true)
    );
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

  // ✅ 요청 등록
  const requestForm = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requirement) {
      alert("요청 내용을 입력하세요.");
      return;
    }
    // 오늘 날짜 (MM/DD)
    const today = new Date();
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  
    addDoc(collection(db, "design_request"), {
      requester: userName,
      request_date: formattedDate,
      task_form: taskForm,
      task_type: taskType,
      requirement: requirement,
      url: url,
      created_at: serverTimestamp(),
      updated_at: null,
      delete_at: null
    })
    .then(() => {
      alert("요청이 등록되었습니다!");
      setRequirement("");
      setUrl("");
    })
    .catch((error) => {
      alert("등록 중 오류가 발생했습니다: " + error.message);
    });
  }


  return (
    <>
      <RequestForm onSubmit={requestForm}>
        <h2>디자인 요청 등록</h2>
        <RequestListWrap>
          <label>업무형태</label>
          <select value={taskForm} onChange={(e) => setTaskForm(e.target.value)}>
            <option value="GHS">GHS</option>
            <option value="MHC">MHC</option>
          </select>

          <label>업무타입</label>
          <select value={taskType} onChange={(e) => setTaskType(e.target.value)}>
            <option value="기획전">기획전</option>
            <option value="배너">배너</option>
            <option value="이벤트">이벤트</option>
            <option value="기타">기타</option>
          </select>

          <label>요청 내용</label>
          <input
            type="text"
            value={requirement}
            onChange={(e) => setRequirement(e.target.value)}
            placeholder="요청 내용을 입력하세요."
          />

          <label>요청 기획안 URL</label>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="요청 기획안 URL을 입력하세요."
          />
        </RequestListWrap>

        <RequestSubmitButton type="submit">등록하기</RequestSubmitButton>
      </RequestForm>

      <h2>디자인 요청 리스트</h2>
      {requests.length > 0 ? (
        <List>
          {requests.map(req => {
            const response = responses[req.id];
            return (
              <ListItem key={req.id}>
                <Info>
                  <p><strong>요청일:</strong> {req.request_date}</p>
                  <p><strong>업무형태:</strong> {req.task_form}</p>
                  <p><strong>업무타입:</strong> {req.task_type}</p>
                  <p><strong>요청내용:</strong> {req.requirement}</p>
                  {req.url && (
                    <p><strong>기획안:</strong> <a href={req.url} target="_blank">보기</a></p>
                  )}
                </Info>

                {/* ✅ 디자이너 응답 표시 */}
                {response && (
                  <ResponseBox>
                    <h4>디자이너 응답</h4>
                    <p><strong>시작일:</strong> {response.start_dt}</p>
                    <p><strong>종료일:</strong> {response.end_dt}</p>
                    <p>
                      <strong>산출물 링크:</strong>{" "}
                      {response.result_url ? <a href={response.result_url} target="_blank">보기</a> : "-"}
                    </p>
                    <p><strong>진행상태:</strong> {response.status}</p>
                  </ResponseBox>
                )}
              </ListItem>
            );
          })}
        </List>
      ) : (
        <p>등록한 요청이 없습니다.</p>
      )}
    </>
  );
}

const RequestForm = styled.form`
`;

const RequestListWrap = styled.ul`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
`;

const RequestSubmitButton = styled.button`
  
`;

const List = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const ListItem = styled.div`
  border: 1px solid #ddd;
  padding: 16px;
  border-radius: 8px;
  background: #fff;
`;

const Info = styled.div`
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