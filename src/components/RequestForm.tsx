import styled from "styled-components";
import { useState } from "react";
import { db } from "../firebaseconfig";
import { collection, addDoc, serverTimestamp, Timestamp } from "firebase/firestore";

interface RequestFormProps {
  userName: string;
}

export default function RequestForm({ userName }: RequestFormProps) {
  const [requestData, setRequestData ] = useState({
    completionDt: "",
    openDt: "",
    taskForm: "GHS",
    taskType: "프론트테마",
    requirement: "",
    url: "",
    note: "",
    priority: "없음"
  });

  // ✅ 입력 변경 핸들러
    const requsetForm = (field: string, value: string) => {
      setRequestData((prev) => ({ ...prev, [field]: value }));
    };
  
    // ✅ 요청 등록
    const requestFormSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
  
      if (!requestData.requirement) {
        alert("요청 내용을 입력하세요.");
        return;
      }
  
      // 오늘 날짜 (MM/DD)
      const today = new Date();
      // const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  
      // ✅ 날짜 변환 함수 (Timestamp로)
      const toTimestamp = (dateStr: string) => {
        return dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;
      };
      
      addDoc(collection(db, "design_request"), {
        request_date: toTimestamp(today.toISOString()),
        requester: userName,
        completion_dt: toTimestamp(requestData.completionDt),
        open_dt: toTimestamp(requestData.openDt),
        task_form: requestData.taskForm,
        task_type: requestData.taskType,
        requirement: requestData.requirement,
        url: requestData.url,
        note: requestData.note,
        status: "대기",
        assigned_designer: "미배정",
        requester_review_status: "검수대기",
        manager_review_status: "",
        result_url: "",
        designer_start_date: null,
        designer_end_date: null,
        priority: requestData.priority,
        requester_edit_state: false,
        designer_edit_state: false,
        created_at: serverTimestamp(),
        updated_at: null,
        delete_at: null
      })
      .then(() => {
        alert("요청이 등록되었습니다!");
        setRequestData({
          completionDt: "",
          openDt: "",
          taskForm: "GHS",
          taskType: "프론트테마",
          requirement: "",
          url: "",
          note: "",
          priority: "없음"
        });
      })
      .catch((error) => {
        alert("등록 중 오류가 발생했습니다: " + error.message);
      });
    }

  return (
    <RequestFormContainer onSubmit={requestFormSubmit}>
      <RequestFormTitle>디자인 요청 등록</RequestFormTitle>
      <RequestFormList>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="completionDt">요청 완료일</RequestFormItemLabel>
          <input
            type="date"
            id="completionDt"
            value={requestData.completionDt}
            onChange={(e) => requsetForm("completionDt", e.target.value)}
          />
        </RequestFormItem>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="openDt">오픈일</RequestFormItemLabel>
          <input
            type="date"
            id="openDt"
            value={requestData.openDt}
            onChange={(e) => requsetForm("openDt", e.target.value)}
          />
        </RequestFormItem>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="taskForm">업무형태</RequestFormItemLabel>
          <select id="taskForm" value={requestData.taskForm} onChange={(e) => requsetForm("taskForm", e.target.value)}>
            <option value="GHS">GHS</option>
            <option value="MHC">MHC</option>
            <option value="MHC/GHS">MHC/GHS</option>
          </select>
        </RequestFormItem>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="taskType">업무타입</RequestFormItemLabel>
          <select id="taskType" value={requestData.taskType} onChange={(e) => requsetForm("taskType", e.target.value)}>
            <option value="프론트테마">프론트테마</option>
            <option value="별도기획전">별도기획전</option>
            <option value="일자별배너">일자별배너</option>
            <option value="핫새배너">핫새배너</option>
            <option value="큐레이션배너">큐레이션배너</option>
            <option value="GNB-기획전(전문관)">GNB-기획전(전문관)</option>
            <option value="GNB-주류이지픽업">GNB-주류이지픽업</option>
            <option value="GNB-택배배송관">GNB-택배배송관</option>
            <option value="페이/카드프로모션">페이/카드프로모션</option>
            <option value="이벤트배너">이벤트배너</option>
            <option value="상품상세">상품상세</option>
            <option value="제휴">제휴</option>
            <option value="클럽">클럽</option>
            <option value="팝업">팝업</option>
            <option value="푸시">푸시</option>
            <option value="홈테마">홈테마</option>
            <option value="즉시배송">즉시배송</option>
            <option value="트레이딩">트레이딩</option>
            <option value="이벤트">이벤트</option>
            <option value="기타">기타</option>
          </select>
        </RequestFormItem>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="requirement">작업 항목</RequestFormItemLabel>
          <RequestFormTextArea
            id="requirement"
            value={requestData.requirement}
            onChange={(e) => requsetForm("requirement", e.target.value)}
            placeholder="작업 항목을 입력하세요."
          />
        </RequestFormItem>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="url">요청 기획안 URL</RequestFormItemLabel>
          <RequestFormTextArea
            id="url"
            value={requestData.url}
            onChange={(e) => requsetForm("url", e.target.value)}
            placeholder="요청 기획안 URL을 입력하세요."
          />
        </RequestFormItem>
        <RequestFormItem>
          <RequestFormItemLabel htmlFor="note">비고</RequestFormItemLabel>
          <RequestFormTextArea
            id="note"
            value={requestData.note}
            onChange={(e) => requsetForm("note", e.target.value)}
            placeholder="비고 URL을 입력하세요."
          />
        </RequestFormItem>
        <RequestFormItem>
        <RequestFormItemLabel htmlFor="priority">우선순위</RequestFormItemLabel>
          <select
            id="priority"
            value={requestData.priority}
            onChange={(e) => requsetForm("priority", e.target.value)}
          >
            <option value="없음">없음</option>
            <option value="낮음">↓ 낮음</option>
            <option value="보통">- 보통</option>
            <option value="높음">↑ 높음</option>
            <option value="긴급">⏰ 긴급</option>
          </select>
      </RequestFormItem>
        <RequestFormItem>
          <RequestSubmitButton type="submit">등록하기</RequestSubmitButton>
        </RequestFormItem>
      </RequestFormList>
    </RequestFormContainer>
  )
}

const RequestFormContainer = styled.form``;

const RequestFormTitle = styled.h2``;

const RequestFormList = styled.ul`
  ${({ theme }) => theme.mixin.flex('center')};
  margin: 20px 0;
  gap: 30px;
`;

const RequestFormItem = styled.li`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
  gap: 10px;
`;

const RequestFormItemLabel = styled.label`
  width: 100%;
  text-align: center;
  font-size: 18px;
  font-weight: 700;
`;

const RequestSubmitButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.navy};
  color: ${({ theme }) => theme.colors.white01};
`;

const RequestFormTextArea = styled.textarea`
  min-width: 200px;
  resize: none;
`