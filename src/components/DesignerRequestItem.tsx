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
    <tr>
      <td>{index}</td>
      <td>{formatDate(item.request_date)}</td>
      <td>{item.requester}</td>
      <td>{formatDate(item.completion_dt)}</td>
      <td>{formatDate(item.open_dt)}</td>  
      <td>{item.task_form}</td>
      <td>{item.task_type}</td>
      <td>{item.requirement}</td>
      <td>{item.url ? <a href={item.url} target="_blank" rel="noopener noreferrer">{item.url}</a> : ""}</td>
      <td>{item.note || ""}</td>
      <td>
        <input
          type="date"
          onChange={(e) => onChange(item.id, "start_dt", e.target.value)}
        />
      </td>
      <td>
        <input
          type="date"
          onChange={(e) => onChange(item.id, "end_dt", e.target.value)}
        />
      </td>
      <td>
        <input
          type="text"
          placeholder="산출물 URL을 입력해주세요."
          onChange={(e) => onChange(item.id, "result_url", e.target.value)}
        />
      </td>
      <td>
        <select onChange={(e) => onChange(item.id, "status", e.target.value)}>
          <option value="대기중">대기</option>
          <option value="진행중">진행중</option>
          <option value="검수요청">검수요청</option>
        </select>
      </td>
      <td>
        <SaveButton onClick={() => onSave(item.id)}>저장</SaveButton>
      </td>
    </tr>
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