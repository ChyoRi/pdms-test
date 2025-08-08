import styled from "styled-components";
import { useState, useEffect } from "react";
import { db } from "../firebaseconfig";
import { collection, addDoc, updateDoc, doc, serverTimestamp, Timestamp, query, where, getDocs } from "firebase/firestore";
import requestFormExitButton from "../assets/requestformexit-button.svg";
import checkBoxChecked from "../assets/checkbox-checked.svg";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

interface RequestFormProps {
  userName: string;
  editData?: RequestData | null;
  onClose: () => void;
}

export default function RequestForm({ userName, editData, onClose }: RequestFormProps) {
  const isEdit = editData?.requester_edit_state === true; // ✅ 수정모드 판별

  const [requestData, setRequestData] = useState({
    completionDt: "",
    openDt: "",
    taskForm: "GHS",
    taskType: "프론트테마",
    requirement: "",
    url: "",
    note: "",
    emergency: false
  });

  // ✅ 수정 모드일 경우 editData로 초기값 설정
  useEffect(() => {
  if (isEdit && editData) {
    setRequestData({
      completionDt: editData.completion_dt ? editData.completion_dt.toDate().toISOString().slice(0, 10) : "",
      openDt: editData.open_dt ? editData.open_dt.toDate().toISOString().slice(0, 10) : "",
      taskForm: editData.task_form ?? "GHS",
      taskType: editData.task_type ?? "프론트테마",
      requirement: editData.requirement ?? "",
      url: editData.url ?? "",
      note: editData.note ?? "",
      emergency: editData.emergency ?? false,
    });
  } else {
    // ✅ 등록 모드일 때 초기화
    setRequestData({
      completionDt: "",
      openDt: "",
      taskForm: "GHS",
      taskType: "프론트테마",
      requirement: "",
      url: "",
      note: "",
      emergency: false,
    });
  }
}, [isEdit, editData]);

  // ✅ 입력 변경 핸들러
  const requsetForm = (field: string, value: string | boolean) => {
    setRequestData((prev) => ({ ...prev, [field]: value }));
  };

  const toTimestamp = (dateStr: string) => {
    return dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;
  };

  const generateDocNumber = async () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const q = query(
      collection(db, "design_request"),
      where("design_request_id", ">=", `H${year}${month}000`),
      where("design_request_id", "<", `H${year}${month}999`)
    );

    const snapshot = await getDocs(q);
    const nextNumber = snapshot.size + 1;

    return `H${year}${month}${nextNumber.toString().padStart(3, "0")}`;
  };
  
  // ✅ 요청 등록
  const requestFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requestData.requirement) {
      alert("요청 내용을 입력하세요.");
      return;
    }

    if (isEdit && editData?.id) {
      await updateDoc(doc(db, "design_request", editData.id), {
        completion_dt: toTimestamp(requestData.completionDt),
        open_dt: toTimestamp(requestData.openDt),
        task_form: requestData.taskForm,
        task_type: requestData.taskType,
        requirement: requestData.requirement,
        url: requestData.url,
        note: requestData.note,
        emergency: requestData.emergency,
        requester_edit_state: false,
        updated_at: serverTimestamp()
      });

      alert("요청이 수정되었습니다!");
      onClose();
      return;
    }

    const today = new Date();

    addDoc(collection(db, "design_request"), {
      design_request_id: await generateDocNumber(),
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
      emergency: requestData.emergency,
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
        emergency: false
      });
      onClose();
    })
    .catch((error) => {
      alert("등록 중 오류가 발생했습니다: " + error.message);
    });
  };

  return (
    <>
      <RequestTitleWrap>
        <RequestTitle>{isEdit ? "디자인 요청 수정" : "디자인 요청 등록"}</RequestTitle>
        <RequestExitButton type="button" onClick={onClose} />
      </RequestTitleWrap>
      <RequestFormContainer onSubmit={requestFormSubmit}>
        <RequestFormTable>
          <RequestFormTableCaption>디자인 요청 등록</RequestFormTableCaption>
          <colgroup>
            <col style={{ width: '120px' }} />
          </colgroup>
          <tbody>
            <tr>
              <RequestFormTableTh>문서번호</RequestFormTableTh>
              <RequestFormTableTd>{isEdit ? editData?.design_request_id : ""}</RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="completionDt">완료 요청일</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormDateInput
                  type="date"
                  id="completionDt"
                  value={requestData.completionDt}
                  onChange={(e) => requsetForm("completionDt", e.target.value)}
                />
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="openDt">오픈일</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormDateInput
                  type="date"
                  id="openDt"
                  value={requestData.openDt}
                  onChange={(e) => requsetForm("openDt", e.target.value)}
                />
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="taskForm">업무 형태</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormSelectBox id="taskForm" value={requestData.taskForm} onChange={(e) => requsetForm("taskForm", e.target.value)}>
                  <option value="GHS">GHS</option>
                  <option value="MHC">MHC</option>
                  <option value="MHC/GHS">MHC/GHS</option>
                </RequestFormSelectBox>
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="taskType">업무 유형</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormSelectBox id="taskType" value={requestData.taskType} onChange={(e) => requsetForm("taskType", e.target.value)}>
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
                </RequestFormSelectBox>
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="requirement">작업 항목</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormTextInput
                  type="text"
                  id="requirement"
                  value={requestData.requirement}
                  onChange={(e) => requsetForm("requirement", e.target.value)}
                  placeholder="작업 항목을 입력하세요."
                />
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="emergency">긴급 일정</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <EmergencyWrap>
                  <RequestFormChackBoxLabel htmlFor="emergency">
                    <RequestFormChackBoxInput
                      type="checkbox"
                      id="emergency"
                      checked={requestData.emergency}
                      onChange={(e) => requsetForm("emergency", e.target.checked)}
                    />
                    <RequestFormChackBox />
                    <span>긴급 일정으로 설정</span>
                  </RequestFormChackBoxLabel>
                </EmergencyWrap>
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="url">요청서 URL</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormTextArea
                  id="url"
                  value={requestData.url}
                  onChange={(e) => requsetForm("url", e.target.value)}
                  placeholder="요청 기획안 URL을 입력하세요."
                />
              </RequestFormTableTd>
            </tr>
            <tr>
              <RequestFormTableTh><RequestFormItemLabel htmlFor="note">메모</RequestFormItemLabel></RequestFormTableTh>
              <RequestFormTableTd>
                <RequestFormTextInput
                  type="input"
                  id="note"
                  value={requestData.note}
                  onChange={(e) => requsetForm("note", e.target.value)}
                  placeholder="메모를 입력하세요."
                />
              </RequestFormTableTd>
            </tr>
          </tbody>
        </RequestFormTable>
        <RequestSubmitButtonWrap>
          <RequestSubmitButton type="submit">{isEdit ? "수정 완료" : "등록하기"}</RequestSubmitButton>
        </RequestSubmitButtonWrap>
      </RequestFormContainer>
    </>
  )
}

const RequestFormContainer = styled.form`
  font-family: 'Pretendard';
`;

const RequestTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  margin-bottom: 24px;
`;

const RequestTitle = styled.h3`
  font-family: 'Pretendard';
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.48px;
`;

const RequestExitButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${requestFormExitButton}) no-repeat center;
  background-size: contain;
`;

const RequestFormTable = styled.table`
  width: 100%;
  color: ${({ theme }) => theme.colors.black};
  border-top: 1px solid ${({ theme }) => theme.colors.black};
`;

const RequestFormTableCaption = styled.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const RequestFormTableTh = styled.th`
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const RequestFormTableTd = styled.td`
  padding: 12px 24px;
  border-right: none;
`

const RequestFormItemLabel = styled.label`
  width: 100%;
  text-align: center;
  font-weight: 700;
`;

const RequestFormDateInput = styled.input`
  width: 168px;
  padding: 6px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`;

const RequestFormTextInput = styled.input`
  width: 100%;
  padding: 8.5px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`;

const RequestFormTextArea = styled.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
`;

const EmergencyWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  gap: 5px;
`;

const RequestFormChackBoxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const RequestFormChackBoxInput = styled.input`
  display: none;

  &:checked + span {
    background-color: ${({ theme }) => theme.colors.black};
    background-image: url(${checkBoxChecked}); // 체크 이미지 경로
    background-repeat: no-repeat;
    background-position: center;
    background-size: 12px 12px;
  }
`;

const RequestFormChackBox = styled.span`
  width: 18px;
  height: 18px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 2px;
`;

const RequestFormSelectBox = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 168px;
  padding: 7.5px 32px 7.5px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.white01};
  background-image: url(${selectBoxArrow}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

const RequestSubmitButtonWrap = styled.div`
  text-align: center;
`;

const RequestSubmitButton = styled.button`
  margin-top: 24px;
  padding: 13.5px 32.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 15px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;