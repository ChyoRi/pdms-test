import styled from "styled-components"
import requestFormExitButton from "../assets/requestformexit-button.svg";
import RequestDeliver from "./RequestDeliver";
import Comment from "./Comment";

interface RequestDetailProps {
  data: RequestData;
  onClose: () => void;
  currentUserName?: string; // ★ 추가
  currentUserRole?: number; // ★ 추가 (1: 요청자, 2: 디자이너, 3+: 매니저 등 가정)
}

export default function RequestDetail({ data, onClose, currentUserName, currentUserRole }: RequestDetailProps) {
  // 날짜 포맷 함수
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  // 전달 UI 토글 (요청자에게만 노출)
  const canTransfer =
    currentUserName &&
    currentUserName === data?.requester &&
    (currentUserRole === 1); // 요청자만 허용

  return (
    <>
      <RequestDetailWrap>
        <RequestTitleWrap>
          <RequestTitle>디자인 요청 상세</RequestTitle>
          <RequestExitButton type="button" onClick={onClose} />
        </RequestTitleWrap>
        <RequestDetailTable>
          <RequestDetailTableCaption>디자인 요청 상세</RequestDetailTableCaption>
          <colgroup>
            <col style={{ width: "120px" }} />
            {canTransfer && (
              <>
                <col style={{ width: "190px"}} />
                <col style={{ width: "120px"}} />
              </>
            )}
          </colgroup>
          <tbody>
            <tr>
              <RequestDetailTableTh>문서번호</RequestDetailTableTh>
              <RequestDetailTableTd>{data?.design_request_id}</RequestDetailTableTd>
              {canTransfer && (
                <>
                  <RequestDetailTableTh>문서전달</RequestDetailTableTh>
                  <RequestDeliverTd>
                    <RequestDeliverWrap>
                      {/* <span className="name">{data?.requester || "-"}</span> */}
                        <RequestDeliver
                          // 전달에 필요한 최소 정보 전달
                          designRequestId={data?.design_request_id}           // 비즈니스 키
                          currentRequester={data?.requester || ""}
                          company={data?.company || ""}                       // data.company 없는 경우를 대비해 컴포넌트 내부에서 보강
                          onDone={() => {
                            // 성공 시 UI 반응은 간단하게: 상세는 실시간 snapshot으로 최신 반영될 가능성이 높음
                            // 필요하면 토스트 사용 가능(여기서는 간단히 alert)
                            alert("요청자 변경 완료");
                          }}
                        />
                    </RequestDeliverWrap>
                  </RequestDeliverTd>
                </>
              )}
            </tr>
            <tr>
              <RequestDetailTableTh>요청일</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{formatDate(data?.request_date)}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>완료 요청일</RequestDetailTableTh>
              <RequestListcompletionTd colSpan={3}>{formatDate(data?.completion_date)}</RequestListcompletionTd>
            </tr>
            <tr>
              <RequestDetailTableTh>오픈일</RequestDetailTableTh>
              <RequestListOpenDtTd colSpan={3}>{formatDate(data?.open_date)}</RequestListOpenDtTd>
            </tr>
            <tr>
              <RequestDetailTableTh>담당 MD</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{data?.merchandiser || ""}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>업무 부서</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{data?.task_form}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>업무 유형</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>
                <RequestDetailTaskType>{data?.task_type}</RequestDetailTaskType>
                {data?.task_type_detail && (
                  <>
                    <RequestDetailTaskTypeArrow>＞</RequestDetailTaskTypeArrow>
                    <RequestDetailTaskTypeDetail>{data?.task_type_detail}</RequestDetailTaskTypeDetail>
                  </>
                )}
              </RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>작업 항목</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>
                <Requirement>
                  {data?.requirement}
                </Requirement>
              </RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>긴급 일정</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{data?.emergency ? "긴급 일정으로 설정" : "긴급 일정으로 설정 안함"}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>요청서 URL</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>
                {data?.url ? <UrlLink href={data?.url} target="_blank" rel="noreferrer">{data?.url}</UrlLink> : ""}
              </RequestDetailTableTd>
            </tr>
          </tbody>
        </RequestDetailTable>
      </RequestDetailWrap>
      <Comment
        // 문서번호로 부모 문서 찾아서 그 아래 서브컬렉션 사용
        designRequestId={data?.design_request_id!}   // 필수
        currentUserName={currentUserName || ""}      // 작성자 이름
      />
    </>
  );
}

const RequestDetailWrap = styled.div`
`;

const RequestTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  margin-bottom: 24px;
`;

const RequestTitle = styled.h3`
  font-family: "Pretendard";
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

const RequestDetailTable = styled.table`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.black};
  font-family: 'Pretendard';
  th, td {
    height: 45px;
  }
  td {
    padding-left: 24px;
  }
`;

const RequestDetailTableCaption = styled.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const RequestDetailTableTh = styled.th`
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const RequestDetailTableTd = styled.td`
  border-right: none;
`;

const RequestDeliverTd = styled.td`
  padding: 0 24px;
  border-right: none;
`

const RequestListcompletionTd = styled.td`
  border-right: none;
  color: ${({ theme }) => theme.colors.red};
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
`;

const RequestListOpenDtTd = styled.td`
  border-right: none;
  color: ${({ theme }) => theme.colors.blue02};
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
`;

const RequestDetailTaskType = styled.span`
`;

const RequestDetailTaskTypeArrow = styled.span`
  margin: 0 5px;
`;

const RequestDetailTaskTypeDetail = styled.span`
  
`;

const Requirement = styled.p`
  max-height: 50px;
  overflow-y: auto;
`;

const UrlLink = styled.a`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  word-break: break-word;
  max-height: 50px;
  overflow-y: auto;
`;

const RequestDeliverWrap = styled.div`
  .name {
    font-weight: 600;
  }
`;