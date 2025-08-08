import styled from "styled-components";

// Props 타입
interface RequestData {
  design_request_id: string;
  id: string;
  request_date: string;
  requester: string;
  completion_dt: string;
  open_dt: string;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  status?: string;
  review_status?: string;
  manager_review_status?: string;
  assigned_designer?: string;
  result_url?: string;
  emergency?: boolean;
  requester_edit_state?: boolean;
}

interface RequestItemProps {
  item: RequestData;
  index: number;
  onReviewComplete: (id: string) => void;
  onCancel: (id: string) => void;
  onEditClick: (id: string) => void;
}

export default function RequesterRequestItem({ item, index, onReviewComplete, onCancel, onEditClick }: RequestItemProps) {
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  return (
    <RequestListTableTr isCanceled={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>{item.design_request_id}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListTableTd>{item.requester}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.completion_dt)}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.open_dt)}</RequestListTableTd>
      <RequestListTableTd>{item.task_form}</RequestListTableTd>
      <RequestListTableTd>{item.task_type}</RequestListTableTd>
      <RequestListTableTd>
        {item.emergency ? <EmergencyBadge>긴급</EmergencyBadge> : ""}{item.requirement}
      </RequestListTableTd>
      <RequestListTableTd>{item.url}</RequestListTableTd>
      <RequestListTableTd>{item.note}</RequestListTableTd>
      <RequestListTableTd>
        {item.status === "검수요청"
          ? "진행중"
          : item.status === "검수중"
          ? "검수 요청"
          : (item.status || "대기")
        }
      </RequestListTableTd>
      <RequestListTableTd>{item.assigned_designer || "미배정"}</RequestListTableTd>
      <RequestListTableTd>{item.manager_review_status === "검수완료" ? (item.url || "") : ""}</RequestListTableTd>
      <RequestListTableTd>
        <CancelButton onClick={() => onCancel(item.id)}>취소</CancelButton>
      </RequestListTableTd>
      <RequestListTableTd>
        <EditButton onClick={() => onEditClick(item.id)}>수정</EditButton>
      </RequestListTableTd>
      <RequestListTableTd>
        {item.manager_review_status === "검수완료" ? (
          item.status !== "완료" ? (
            <ReviewButton onClick={() => onReviewComplete(item.id)}>검수완료</ReviewButton>
          ) : (
            <CompletedText>완료</CompletedText>
          )
        ) : (
          ""
        )}
      </RequestListTableTd>
    </RequestListTableTr>
  );
}

const ReviewButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.navy};
`;

const CompletedText = styled.span`
  color: green;
  font-weight: bold;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.navy};
`;

const CancelButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.navy};
`;

const RequestListTableTr = styled.tr<{ isCanceled: boolean }>`
  ${({ isCanceled }) =>
    isCanceled &&
    `
      td {
        text-decoration: line-through;
        color: gray;
      }
    `}
`;

const RequestListTableTd = styled.td`
  padding: 5px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
`;

const EmergencyBadge = styled.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white01};
`;