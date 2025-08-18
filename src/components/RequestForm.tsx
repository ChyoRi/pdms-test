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
  isDrawerOpen: boolean;
  onClose: () => void;
}

const defaultRequestData: Partial<RequestData> = {
  completion_dt: "",
  open_dt: "",
  task_form: "GHS",
  task_type: "프론트테마",
  requirement: "",
  url: "",
  note: "",
  emergency: false
}

export default function RequestForm({ userName, editData, isDrawerOpen, onClose }: RequestFormProps) {
  const isEdit = editData?.requester_edit_state === true; // ✅ 수정모드 판별

  const [requestData, setRequestData] = useState<Partial<RequestData>>(defaultRequestData);

  // ==== 수정: 추가 폼 세트 상태 (등록 모드에서 같은 폼을 아래로 추가)
  const [extras, setExtras] = useState<Partial<RequestData>[]>([]);

  // ✅ 입력 변경 핸들러
  const requsetForm = (field: string, value: string | boolean) => {
    setRequestData((prev) => ({ ...prev, [field]: value }));
  };

  // ==== 수정: 추가 폼 세트용 변경/추가/삭제 핸들러
  const addExtra = () => setExtras(prev => [...prev, { ...defaultRequestData }]);
  const removeExtra = (idx: number) => setExtras(prev => prev.filter((_, i) => i !== idx));
  const updateExtra = (idx: number, field: keyof RequestData, value: any) =>
    setExtras(prev => {
      const next = [...prev];
      next[idx] = { ...next[idx], [field]: value };
      return next;
    });

  const toTimestamp = (dateStr: string | undefined) => {
    return dateStr ? Timestamp.fromDate(new Date(dateStr)) : null;
  };

  // 문서번호 생성 함수
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

  // ==== 수정: 다건 등록을 위한 월별 베이스/연속번호 유틸
  const getMonthSeqBase = async () => {
    const now = new Date();
    const year = now.getFullYear().toString().slice(2);
    const month = (now.getMonth() + 1).toString().padStart(2, "0");

    const q = query(
      collection(db, "design_request"),
      where("design_request_id", ">=", `H${year}${month}000`),
      where("design_request_id", "<",  `H${year}${month}999`)
    );
    const snapshot = await getDocs(q);
    return { year, month, base: snapshot.size };
  };
  const buildDocNumber = (y: string, m: string, seq: number) =>
    `H${y}${m}${seq.toString().padStart(3, "0")}`;
  
  // ✅ 요청 등록
  const requestFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!requestData.requirement) {
      alert("요청 내용을 입력하세요.");
      return;
    }

    if (isEdit && editData?.id) {
      await updateDoc(doc(db, "design_request", editData.id), {
        completion_dt: toTimestamp(requestData.completion_dt),
        open_dt: toTimestamp(requestData.open_dt),
        task_form: requestData.task_form,
        task_type: requestData.task_type,
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

    // ==== 수정: 등록 모드 — 상단 폼 + 추가 폼 세트를 한 번에 등록
    const forms = [requestData, ...extras];

    // 필수값 검증 (상단 폼부터 순서대로)
    const missing = forms.findIndex(f => !f.requirement);
    if (missing !== -1) {
      alert(`${missing + 1}번째 폼의 "작업 항목"을 입력하세요.`);
      return;
    }

    // 월별 베이스 개수 읽고, 상단 폼부터 연속 번호 부여
    const { year, month, base } = await getMonthSeqBase();
    let seq = base;

    const today = new Date();

    /**
    addDoc(collection(db, "design_history"), {
      date: new Date(),
      text: "OOOOOO OOOO OOOO."
    })
     */

    // 순서 보장을 위해 for..of + await (맨 위 폼이 더 이른 번호)
    for (const f of forms) {
      seq += 1;
      const design_request_id = buildDocNumber(year, month, seq);

      await addDoc(collection(db, "design_request"), {
        design_request_id,
        request_date: toTimestamp(today.toISOString()),
        requester: userName,
        completion_dt: toTimestamp(f.completion_dt as any),
        open_dt: toTimestamp(f.open_dt as any),
        task_form: f.task_form,
        task_type: f.task_type,
        requirement: f.requirement,
        url: f.url,
        note: f.note,
        status: "대기",
        assigned_designer: "미배정",
        requester_review_status: "검수대기",
        manager_review_status: "",
        result_url: "",
        designer_start_date: null,
        designer_end_date: null,
        emergency: f.emergency,
        requester_edit_state: false,
        designer_edit_state: false,
        created_at: serverTimestamp(),
        updated_at: null,
        delete_at: null,
        work_hour: ""
      });
    }

    alert(`${forms.length}건이 등록되었습니다!`);
    // 초기화
    setExtras([]);                                  // ==== 수정: 추가 폼 비우기
    setRequestData(defaultRequestData);
    onClose();
  };

  // ✅ 수정 모드일 경우 editData로 초기값 설정
  useEffect(() => {
    if (isEdit && editData) {
      setRequestData({
        completion_dt: editData.completion_dt ? (editData.completion_dt as any).toDate().toISOString().slice(0, 10) : "",
        open_dt: editData.open_dt ? (editData.open_dt as any).toDate().toISOString().slice(0, 10) : "",
        task_form: editData.task_form ?? "GHS",
        task_type: editData.task_type ?? "프론트테마",
        requirement: editData.requirement ?? "",
        url: editData.url ?? "",
        note: editData.note ?? "",
        emergency: editData.emergency ?? false,
      });
    }
  }, [isEdit, editData]);

  useEffect(() => {
    if (!isDrawerOpen || isEdit) return;
    setRequestData(defaultRequestData);
    setExtras([]);                                  // ==== 수정: 등록 모드에서 드로어 열릴 때 추가 폼 초기화
  }, [isDrawerOpen]);

  return (
    <>
      <RequestTitleWrap>
        <RequestTitle>{isEdit ? "디자인 요청 수정" : "디자인 요청 등록"}</RequestTitle>
        <RequestExitButton type="button" onClick={onClose} />
      </RequestTitleWrap>
      <RequestFormContainer onSubmit={requestFormSubmit}>
        <RequestFormTableWrap>
          {!isEdit && extras.map((f, idx) => (
            <div key={idx} style={{ marginTop: 24 }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', margin:'8px 0 4px' }}>
                <strong>추가 요청 {idx + 1}</strong>
                <button type="button" onClick={() => removeExtra(idx)}>삭제</button>
              </div>
  
              <RequestFormTable>
                <RequestFormTableCaption>디자인 요청 추가 등록</RequestFormTableCaption>
                <colgroup><col style={{ width: '120px' }} /></colgroup>
                <tbody>
                  <tr>
                    <RequestFormTableTh>문서번호</RequestFormTableTh>
                    <RequestFormTableTd></RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`completion_dt_ex_${idx}`}>완료 요청일</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormDateInput
                        id={`completion_dt_ex_${idx}`}
                        type="date"
                        value={(f.completion_dt as string) || ""}
                        onChange={(e) => updateExtra(idx, "completion_dt", e.target.value)}
                      />
                    </RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`open_dt_ex_${idx}`}>오픈일</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormDateInput
                        id={`open_dt_ex_${idx}`}
                        type="date"
                        value={(f.open_dt as string) || ""}
                        onChange={(e) => updateExtra(idx, "open_dt", e.target.value)}
                      />
                    </RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`task_form_ex_${idx}`}>업무 형태</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormSelectBox
                        id={`task_form_ex_${idx}`}
                        value={f.task_form || "GHS"}
                        onChange={(e) => updateExtra(idx, "task_form", e.target.value)}
                      >
                        <option value="GHS">GHS</option>
                        <option value="MHC">MHC</option>
                        <option value="MHC/GHS">MHC/GHS</option>
                      </RequestFormSelectBox>
                    </RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`task_type_ex_${idx}`}>업무 유형</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormSelectBox
                        id={`task_type_ex_${idx}`}
                        value={f.task_type || "프론트테마"}
                        onChange={(e) => updateExtra(idx, "task_type", e.target.value)}
                      >
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
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`requirement_ex_${idx}`}>작업 항목</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormTextInput
                        id={`requirement_ex_${idx}`}
                        type="text"
                        value={f.requirement || ""}
                        onChange={(e) => updateExtra(idx, "requirement", e.target.value)}
                        placeholder="작업 항목을 입력하세요."
                      />
                    </RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`emergency_ex_${idx}`}>긴급 일정</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <EmergencyWrap>
                        <RequestFormChackBoxLabel htmlFor={`emergency_ex_${idx}`}>
                          <RequestFormChackBoxInput
                            id={`emergency_ex_${idx}`}
                            type="checkbox"
                            checked={!!f.emergency}
                            onChange={(e) => updateExtra(idx, "emergency", e.target.checked)}
                          />
                          <RequestFormChackBox />
                          <span>긴급 일정으로 설정</span>
                        </RequestFormChackBoxLabel>
                      </EmergencyWrap>
                    </RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`url_ex_${idx}`}>요청서 URL</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormTextArea
                        id={`url_ex_${idx}`}
                        value={f.url || ""}
                        onChange={(e) => updateExtra(idx, "url", e.target.value)}
                        placeholder="요청 기획안 URL을 입력하세요."
                      />
                    </RequestFormTableTd>
                  </tr>
                  <tr>
                    <RequestFormTableTh><RequestFormItemLabel htmlFor={`note_ex_${idx}`}>메모</RequestFormItemLabel></RequestFormTableTh>
                    <RequestFormTableTd>
                      <RequestFormMemoTextArea
                        id={`note_ex_${idx}`}
                        rows={4}
                        value={f.note || ""}
                        onChange={(e) => updateExtra(idx, "note", e.target.value)}
                        placeholder="메모를 입력하세요."
                      />
                    </RequestFormTableTd>
                  </tr>
                </tbody>
              </RequestFormTable>
            </div>
          ))}
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
                <RequestFormTableTh><RequestFormItemLabel htmlFor="completion_dt">완료 요청일</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormDateInput
                    type="date"
                    id="completion_dt"
                    value={requestData.completion_dt}
                    onChange={(e) => requsetForm("completion_dt", e.target.value)}
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="open_dt">오픈일</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormDateInput
                    type="date"
                    id="open_dt"
                    value={requestData.open_dt}
                    onChange={(e) => requsetForm("open_dt", e.target.value)}
                  />
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_form">업무 형태</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormSelectBox id="task_form" value={requestData.task_form} onChange={(e) => requsetForm("task_form", e.target.value)}>
                    <option value="GHS">GHS</option>
                    <option value="MHC">MHC</option>
                    <option value="MHC/GHS">MHC/GHS</option>
                  </RequestFormSelectBox>
                </RequestFormTableTd>
              </tr>
              <tr>
                <RequestFormTableTh><RequestFormItemLabel htmlFor="task_type">업무 유형</RequestFormItemLabel></RequestFormTableTh>
                <RequestFormTableTd>
                  <RequestFormSelectBox id="task_type" value={requestData.task_type} onChange={(e) => requsetForm("task_type", e.target.value)}>
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
                  <RequestFormMemoTextArea
                    id="note"
                    rows={4}
                    value={requestData.note}
                    onChange={(e) => requsetForm("note", e.target.value)}
                    placeholder="메모를 입력하세요."
                  />
                </RequestFormTableTd>
              </tr>
            </tbody>
          </RequestFormTable>
          {/* ==== 수정: 추가 폼 세트 렌더링 (등록 모드에서만 노출) */}
        </RequestFormTableWrap>
        <RequestSubmitButtonWrap>
          <RequestSubmitButton type="submit">{isEdit ? "수정 완료" : "등록하기"}</RequestSubmitButton>
          {!isEdit && (
            <RequestAddSubmitButton type="button" onClick={addExtra}>
              추가 등록하기
            </RequestAddSubmitButton>
          )}
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

const RequestFormTableWrap = styled.div`
  max-height: 690px;
  overflow: auto;
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

const RequestFormMemoTableTd = styled.td`
  padding: 12px 24px;
  border-right: none;
  background-color: #fffff1;
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

const RequestFormMemoTextArea = styled.textarea`
  width: 100%;
  padding: 10px 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: #fffff1;
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
    background-color: ${({ theme }) => theme.colors.red};
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
  margin-top: 24px;
  text-align: center;
`;

const RequestSubmitButton = styled.button`
  margin-right: 12px;
  padding: 12.5px 32px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;

const RequestAddSubmitButton = styled.button`
  padding: 10.5px 31.5px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white01};
  color: ${({ theme }) => theme.colors.black};

  &:hover {
    border: 1px solid ${({ theme }) => theme.colors.black};
  }
`;