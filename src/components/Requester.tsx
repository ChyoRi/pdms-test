import styled from "styled-components";
import { useState, useEffect } from "react";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

export default function Requester() {
  const [userName, setUserName] = useState("");
  const [taskForm, setTaskForm] = useState("");
  const [taskType, setTaskType] = useState("");
  const [requirement, setRequirement] = useState("");
  const [url, setUrl] = useState("");

  useEffect(() => {
    // 로그인 사용자 이름 가져오기
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user && user.displayName) {
        setUserName(user.displayName);
      }
    });
    return () => unsubscribe();
  }, []);

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
  );
}

const RequestForm = styled.form`
`;

const RequestListWrap = styled.ul`
  ${({ theme }) => theme.mixin.flex()};
  flex-direction: column;
`;

const RequestSubmitButton = styled.button`
  
`