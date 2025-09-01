import styled from "styled-components"
import requestFormExitButton from "../assets/requestformexit-button.svg";

interface RequestDetailProps {
  data: RequestData;
  onClose: () => void;
}

export default function RequestDetail({ data, onClose }: RequestDetailProps) {
  // 날짜 포맷 함수
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  return (
    <>
      <RequestTitleWrap>
        <RequestTitle>디자인 요청 상세</RequestTitle>
        <RequestExitButton type="button" onClick={onClose} />
      </RequestTitleWrap>

      <RequestDetailTable>
        <RequestDetailTableCaption>디자인 요청 상세</RequestDetailTableCaption>
        <colgroup>
          <col style={{ width: "120px" }} />
        </colgroup>
        <tbody>
          <tr>
            <RequestDetailTableTh>문서번호</RequestDetailTableTh>
            <RequestDetailTableTd>{data?.design_request_id}</RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>요청일</RequestDetailTableTh>
            <RequestDetailTableTd>{formatDate(data?.request_date)}</RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>완료 요청일</RequestDetailTableTh>
            <RequestListcompletionTd>{formatDate(data?.completion_date)}</RequestListcompletionTd>
          </tr>
          <tr>
            <RequestDetailTableTh>오픈일</RequestDetailTableTh>
            <RequestListOpenDtTd>{formatDate(data?.open_date)}</RequestListOpenDtTd>
          </tr>
          <tr>
            <RequestDetailTableTh>담당 MD</RequestDetailTableTh>
            <RequestDetailTableTd>{data?.merchandiser || ""}</RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>업무 부서</RequestDetailTableTh>
            <RequestDetailTableTd>{data?.task_form}</RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>업무 유형</RequestDetailTableTh>
            <RequestDetailTableTd>
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
            <RequestDetailTableTd>{data?.requirement}</RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>긴급 일정</RequestDetailTableTh>
            <RequestDetailTableTd>{data?.emergency ? "긴급 일정으로 설정" : "긴급 일정으로 설정 안함"}</RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>요청서 URL</RequestDetailTableTh>
            <RequestDetailTableTd>
              {data?.url ? <UrlLink href={data?.url} target="_blank" rel="noreferrer">{data?.url}</UrlLink> : "-"}
            </RequestDetailTableTd>
          </tr>
          <tr>
            <RequestDetailTableTh>메모</RequestDetailTableTh>
            <RequestDetailMemoTd>
              <MemoText>{data.note}</MemoText>
            </RequestDetailMemoTd>
          </tr>
        </tbody>
      </RequestDetailTable>
    </>
  );
}

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
  padding: 16px;
  font-size: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const RequestDetailTableTd = styled.td`
  padding: 12px 24px;
  border-right: none;
`;

const RequestListcompletionTd = styled.td`
  padding: 12px 24px;
  border-right: none;
  color: ${({ theme }) => theme.colors.red};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;

const RequestListOpenDtTd = styled.td`
  padding: 12px 24px;
  border-right: none;
  color: ${({ theme }) => theme.colors.blue02};
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;

const RequestDetailMemoTd = styled.td`
  padding: 12px 24px;
  border-right: none;
  background-color: #fffff1;
`;

const RequestDetailTaskType = styled.span`
`;

const RequestDetailTaskTypeArrow = styled.span`
  margin: 0 5px;
`;

const RequestDetailTaskTypeDetail = styled.span`
  
`;

const UrlLink = styled.a`
  display: -webkit-box;
  min-height: 70px;
  max-height: 70px;
  overflow-y: auto;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

const MemoText = styled.p`
  min-height: 100px;
  max-height: 100px;
  overflow-y: auto;
  word-break: break-word;
`;