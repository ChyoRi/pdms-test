import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";

interface RequestItemProps {
  item: RequestData;
  index: number;
  disableActions: boolean;
  onReviewComplete: (id: string) => void;
  onCancel: (id: string) => void;
  onEditClick: (id: string) => void;
  onDetailClick: (item: RequestData) => void;
}

export default function RequesterRequestItem({ item, index, disableActions, onReviewComplete, onCancel, onEditClick, onDetailClick }: RequestItemProps) {
  const lockedByManager = item.manager_review_status === "검수완료";

  // 날짜 포맷 함수
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  // ✅ 메모/작업항목 클릭 시 상세 Drawer 열기
  const openDetail = (e: React.MouseEvent) => {
    e.stopPropagation(); // 행 단위 클릭과 충돌 방지
    onDetailClick(item);
  };

  const isRequesterDone = item.requester_review_status === "검수완료";

  const designers = Array.isArray(item.assigned_designers)
    ? (item.assigned_designers as string[])
    : null;

  return (
    <RequestListTableTr isCanceled={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail} $hasUpdate={!!item.updated_date}>{item.design_request_id}</RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListCompletionTd>{formatDate(item.completion_date)}</RequestListCompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_date)}</RequestListOpenDtTd>
      <RequestListTableTd>{item.merchandiser}</RequestListTableTd>
      <RequestListTableTd>{item.task_form}</RequestListTableTd>
      <RequestListTaskTypeTd>
        <RequestListTaskTypeWrap>
          <RequestListTaskType>{item.task_type}</RequestListTaskType>
          <RequestListTaskTypeDetail>{item.task_type_detail}</RequestListTaskTypeDetail>
        </RequestListTaskTypeWrap>
      </RequestListTaskTypeTd>
      <RequestListRequirementTd>
        <RequestListEmergencyWrap>
          {item.emergency ? <EmergencyBadge>긴급</EmergencyBadge> : ""}
          <RequestListRequirementText onClick={openDetail}>
            {item.requirement}
          </RequestListRequirementText>
        </RequestListEmergencyWrap>
      </RequestListRequirementTd>
      <RequestListTableTd>
        <UrlLink href={item.url} target="_blank" />
      </RequestListTableTd>
      <RequestListMemoTd>
        <RequestListMemoText onClick={openDetail}>
          {item.note || ""}
        </RequestListMemoText>
      </RequestListMemoTd>
      <RequestListTableTd>
        <StautsBadge status={item.status}>
          {item.status === "검수요청"
            ? "진행중"
            : (item.status || "대기")
          }
        </StautsBadge>
      </RequestListTableTd>
      <RequestListTableTd>
        {designers && designers.length > 0 ? (
          <DesignersWrap>
            {designers.map((name, i) => (
              <DesignerSpan key={`${name}-${i}`}>{name}</DesignerSpan>
            ))}
          </DesignersWrap>
        ) : (
          item.assigned_designers || "미배정"
        )}
      </RequestListTableTd>
      <RequestListTableTd>
        {item.manager_review_status === "검수완료" && item.result_url ? (
          <UrlLink
            href={item.result_url}
            target="_blank"
          />
        ) : (
          ""
        )}
      </RequestListTableTd>
      <RequestListTableTd>
        {isRequesterDone ? (
          <CompletedText>검수완료</CompletedText>
        ) : item.manager_review_status === "검수완료" ? (
          item.status !== "완료" ? (
            <ReviewButton onClick={() => onReviewComplete(item.id)} disabled={disableActions}>검수완료</ReviewButton>
          ) : (
            <CompletedText>검수완료</CompletedText>
          )
        ) : (
          ""
        )}
      </RequestListTableTd>
      <RequestListTableTd>
        <EditButton onClick={() => onEditClick(item.id)} disabled={disableActions || lockedByManager || item.status === "취소" || item.status === "완료"}>수정</EditButton>
      </RequestListTableTd>
      <RequestListTableTd>
        <CancelButton onClick={() => onCancel(item.id)} disabled={disableActions || lockedByManager || item.status === "취소" || item.status === "완료"}>취소</CancelButton>
      </RequestListTableTd>
    </RequestListTableTr>
  );
}

const RequestListTableTr = styled.tr<{ isCanceled: boolean }>`
  ${({ isCanceled }) =>
    isCanceled &&
    `
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
    
  ${({ isCanceled, theme }) =>
    isCanceled &&
    `
      ${EmergencyBadge} {
        background-color: ${theme.colors.gray07};
        color: ${theme.colors.gray06};
      }
      ${ReviewButton}, ${EditButton}, ${CancelButton} {
        background-color: ${theme.colors.gray07};
        color: ${theme.colors.gray06};
        border-color: ${theme.colors.gray06};
        cursor: default;
        pointer-events: none;
      }
    `}
  &:hover {
    td {
      background-color: ${({ theme }) => theme.colors.gray04}
    }
  }

  & td {
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;
  }
`;

const RequestListTableTd = styled.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const RequestListCompletionTd = styled.td`
  color: ${({ theme }) => theme.colors.red};
`;

const RequestListOpenDtTd = styled.td`
  color: ${({ theme }) => theme.colors.blue02};
`;

const RequestListTaskTypeTd = styled.td`
  padding: 15px 12px;
  line-height: 15px;
`;

const RequestListRequirementTd = styled.td`
  line-height: 15px;
  text-align: left;
`;

const RequestListMemoTd = styled.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  background-color: #fffff1;
`;

const RequestListRequestIdText = styled.span<{ $hasUpdate: boolean }>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -2px;
    display: ${({ $hasUpdate }) => ($hasUpdate ? 'block' : 'none')};
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.red};
  }

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const RequestListTaskTypeWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;

const RequestListTaskType = styled.span`
  
`;

const RequestListTaskTypeDetail = styled.span`
  
`;

const RequestListEmergencyWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  padding: 0 12px;
`;

const RequestListRequirementText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const EmergencyBadge = styled.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;
`;

const UrlLink = styled.a<{ $disabled?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${urlIcon}) no-repeat center / contain;
`;

const RequestListMemoText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  overflow-wrap: anywhere;
  word-break: break-word;
  text-overflow: ellipsis;
  white-space: normal;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const StautsBadge = styled.span<{ status: string }>`
  border-radius: 14px;
  padding: 5.5px 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({ status, theme }) => {
    switch (status) {
      case "대기":
        return theme.colors.orange; // 오렌지
      case "진행중":
        return theme.colors.blue02; // 파란색
      case "검수요청":
        return theme.colors.blue02;
      case "검수중":
        return theme.colors.red; // 빨간색
      case "완료":
        return theme.colors.gray06; // 회색
      default:
        return theme.colors.gray06; // 기본색
    }
  }};
  background-color: ${({ status, theme }) => {
    switch (status) {
      case "대기":
        return theme.colors.beige02; // 오렌지
      case "진행중":
        return theme.colors.lightpupple; // 파란색
      case "검수요청":
        return theme.colors.lightpupple;
      case "검수중":
        return theme.colors.pink03; // 빨간색
      case "완료":
        return theme.colors.white02; // 회색
      default:
        return theme.colors.gray07; // 기본색
    }
  }};;
`;

const ReviewButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: green;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const CompletedText = styled.span`
  color: green;
  font-weight: bold;
`;

const EditButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.black};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const CancelButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.black};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const DesignersWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;
const DesignerSpan = styled.span`
  line-height: 1.2;
`;