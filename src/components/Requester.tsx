import styled from "styled-components";
import { useState, useEffect } from "react";
import { auth, db } from "../firebaseconfig";
import { onAuthStateChanged } from "firebase/auth";
import { collection, addDoc, serverTimestamp, onSnapshot, query, where, updateDoc, doc} from "firebase/firestore";

export default function Requester() {
  const [userName, setUserName] = useState("");
  const [requestData, setRequestData ] = useState({
    completionDt: "",
    openDt: "",
    taskForm: "GHS",
    taskType: "기획전",
    requirement: "",
    url1: "",
    url2: ""
  });

  const [requests, setRequests] = useState<any[]>([]); // request DB 배열
  const [responses, setResponses] = useState<{ [key: string]: any }>({}); // design_response 에서 가져온 응답 DB

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
    const unsubscribe = onSnapshot(collection(db, "design_request"), (snapshot) => {
      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data()
      }));
      setRequests(data); // ✅ 상태 업데이트 (실시간)
    });
    return () => unsubscribe(); // ✅ 컴포넌트 언마운트 시 리스너 해제
  }, []);

  // ✅ 디자이너 응답 가져오기 (is_sent_to_requester === true)
  useEffect(() => {
    const q = query(collection(db, "design_response"), where("is_sent_to_requester", "==", true));
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
    const formattedDate = `${today.getMonth() + 1}/${today.getDate()}`;
  
    addDoc(collection(db, "design_request"), {
      requester: userName,
      request_date: formattedDate,
      completion_dt: requestData.completionDt,
      open_dt: requestData.openDt,
      task_form: requestData.taskForm,
      task_type: requestData.taskType,
      requirement: requestData.requirement,
      url1: requestData.url1,
      url2: requestData.url2,
      review_status: "검수대기",
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
        taskType: "기획전",
        requirement: "",
        url1: "",
        url2: ""
      });
    })
    .catch((error) => {
      alert("등록 중 오류가 발생했습니다: " + error.message);
    });
  }

  // ✅ 검수완료 처리
  const reviewComplete = async (id: string) => {
    try {
      await updateDoc(doc(db, "design_request", id), {
        review_status: "검수완료",
        reviewed_at: new Date()
      });
      alert("검수완료 처리되었습니다.");
    } catch (error) {
      console.error(error);
      alert("검수완료 처리 중 오류 발생");
    }
  };


  return (
    <>
      <RequestForm onSubmit={requestFormSubmit}>
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
            <RequestFormItemLabel htmlFor="requirement">요청 내용</RequestFormItemLabel>
            <input
              type="text"
              id="requirement"
              value={requestData.requirement}
              onChange={(e) => requsetForm("requirement", e.target.value)}
              placeholder="요청 내용을 입력하세요."
            />
          </RequestFormItem>
          <RequestFormItem>
            <RequestFormItemLabel htmlFor="url1">요청 기획안 URL</RequestFormItemLabel>
            <input
              type="text"
              id="url1"
              value={requestData.url1}
              onChange={(e) => requsetForm("url1", e.target.value)}
              placeholder="요청 기획안 URL을 입력하세요."
            />
          </RequestFormItem>
          <RequestFormItem>
            <RequestFormItemLabel htmlFor="url2">요청 기획안 URL</RequestFormItemLabel>
            <input
              type="text"
              id="url2"
              value={requestData.url2}
              onChange={(e) => requsetForm("url2", e.target.value)}
              placeholder="요청 기획안 URL을 입력하세요."
            />
          </RequestFormItem>
          <RequestFormItem>
            <RequestSubmitButton type="submit">등록하기</RequestSubmitButton>
          </RequestFormItem>
        </RequestFormList>
      </RequestForm>

      <RequestListTitle>디자인 요청 리스트</RequestListTitle>
      {requests.length > 0 ? (
        <RequestList>
          {requests.map(req => {
            const response = responses[req.id];
            return (
              <RequestItem key={req.id}>
                <Info>
                  <p><strong>요청 완료일:</strong> {req.completion_dt || "-"}</p>
                  <p><strong>오픈일:</strong> {req.open_dt || "-"}</p>
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
                    
                    {/* ✅ 검수완료 버튼 or 완료 텍스트 */}
                    {req.review_status !== "검수완료" ? (
                      <ReviewButton onClick={() => reviewComplete(req.id)}>검수완료</ReviewButton>
                    ) : (
                      <p style={{ color: "green", fontWeight: "bold" }}>검수가 완료되었습니다.</p>
                    )}
                  </ResponseBox>
                )}
              </RequestItem>
            );
          })}
        </RequestList>
      ) : (
        <p>등록한 요청이 없습니다.</p>
      )}
    </>
  );
}

const RequestForm = styled.form``;

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
  color: ${({ theme }) => theme.colors.white};
`;

const RequestListTitle = styled.h2``;

const RequestList = styled.ul`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const RequestItem = styled.li`
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

const ReviewButton = styled.button`
  margin-top: 10px;
  padding: 8px 12px;
  background-color: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;