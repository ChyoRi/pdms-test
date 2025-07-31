import styled from "styled-components";

// Props 타입
interface RequestData {
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
  assigned_designer?: string;
  result_url?: string;
  emergency?: boolean;
  edit_state?: boolean;
}

interface RequestItemProps {
  item: RequestData;
  index: number;
  onReviewComplete: (id: string) => void;
}

export default function RequestItem({ item, index, onReviewComplete }: RequestItemProps) {
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`; // ✅ 완전 깔끔
    }
    return timestamp;
  };

  return (
    <tr>
      <td>{index}</td>
      <td>{formatDate(item.request_date)}</td>
      <td>{item.requester}</td>
      <td>{formatDate(item.completion_dt)}</td>
      <td>{formatDate(item.open_dt)}</td>
      <td>{item.task_form}</td>
      <td>{item.task_type}</td>
      <td>{item.requirement}</td>
      <td>{item.url}</td>
      <td>{item.note}</td>
      <td>{item.status === "검수요청" ? "검수중" : (item.status || "대기")}</td>
      <td>{item.assigned_designer || "미배정"}</td>
      <td>{item?.result_url}</td>
      <td>
        <EditButton>수정</EditButton>
      </td>
      <td>
        {item.status === "완료" ? (
          item.review_status !== "검수완료" ? (
            <ReviewButton onClick={() => onReviewComplete(item.id)}>검수완료</ReviewButton>
          ) : (
            <CompletedText>완료</CompletedText>
          )
        ) : (
          <span>-</span>
        )}
      </td>
    </tr>
  );
}

const ReviewButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.navy};
`;

const CompletedText = styled.span`
  color: green;
  font-weight: bold;
`;

const EditButton = styled.button`
  padding: 5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.navy};
`;