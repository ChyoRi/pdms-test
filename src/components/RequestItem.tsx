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
  assigned_designer?: string;
  status?: string;
  review_status?: string;
  url1?: string;
  url2?: string;
}

interface ResponseData {
  start_dt?: string;
  end_dt?: string;
  status?: string;
  result_url?: string;
  is_sent_to_requester?: boolean;
}

interface MergedData {
  id: string;
  request: RequestData;
  response: ResponseData | null;
}

interface RequestItemProps {
  item: MergedData;
  onReviewComplete: (id: string) => void;
}

export default function RequestItem({ item, onReviewComplete }: RequestItemProps) {
  const { request, response } = item;

  return (
    <tr>
      <td>{request.request_date}</td>
      <td>{request.requester}</td>
      <td>{request.completion_dt}</td>
      <td>{request.open_dt}</td>
      <td>{request.task_form}</td>
      <td>{request.task_type}</td>
      <td>{request.requirement}</td>
      <td>{request.url1}</td>
      {request.url2 && <td>{request.url2}</td>}
      <td>{request.status || "대기"}</td>
      <td>{request.assigned_designer || "미배정"}</td>
      <td>{response?.result_url}</td>
      <td>
        {request.status === "완료" ? (
          request.review_status !== "검수완료" ? (
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