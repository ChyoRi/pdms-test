import styled from "styled-components";

interface DesignerRequestItemProps {
  index: number;
  item: any;
  onChange: (id: string, field: string, value: string) => void;
  onSave: (id: string) => void;
}

export default function DesignerRequestItem({
  index,
  item,
  onChange,
  onSave
}: DesignerRequestItemProps) {
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
      <RequestListTableTd>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a> : ""}</RequestListTableTd>
      <RequestListTableTd>{item.note || ""}</RequestListTableTd>
      <RequestListTableTd>
        <input
          type="date"
          onChange={(e) => onChange(item.id, "start_dt", e.target.value)}
          disabled={item.status === "취소"}
        />
      </RequestListTableTd>
      <RequestListTableTd>
        <input
          type="date"
          onChange={(e) => onChange(item.id, "end_dt", e.target.value)}
          disabled={item.status === "취소"}
        />
      </RequestListTableTd>
      <RequestListTableTd>
        <input
          type="text"
          placeholder="산출물 URL을 입력해주세요."
          onChange={(e) => onChange(item.id, "result_url", e.target.value)}
          disabled={item.status === "취소"}
        />
      </RequestListTableTd>
      <RequestListTableTd>
        <select onChange={(e) => onChange(item.id, "status", e.target.value)} disabled={item.status === "취소"}>
          <option value="대기중">대기</option>
          <option value="진행중">진행중</option>
          <option value="검수요청">검수요청</option>
        </select>
      </RequestListTableTd>
      <RequestListTableTd>
        <SaveButton onClick={() => onSave(item.id)} disabled={item.status === "취소"}>저장</SaveButton>
      </RequestListTableTd>
    </RequestListTableTr>
  );
}

const SaveButton = styled.button`
  padding: 6px 10px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
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
  padding: 4px 6px;
  border-radius: 4px;
  font-size: 12px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white01};
`;