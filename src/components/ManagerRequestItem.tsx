import styled from "styled-components";

interface RequestData {
  id: string;
  request_date: any;
  requester: string;
  completion_dt: any;
  open_dt: any;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  status?: string;
  manager_review_status?: string;
  assigned_designer?: string;
  designer_start_date?: string;
  designer_end_date?: string;
  result_url?: string;
}


interface ManagerRequestItemProps {
  index: number;
  item: RequestData;
  designerList: any[];
  selectedDesigner: string;
  onDesignerSelect: (designerName: string) => void;
  onAssignDesigner: () => void;
  onSendToRequester: () => void;
}

export default function ManagerRequestItem({
  index,
  item,
  designerList,
  selectedDesigner,
  onDesignerSelect,
  onAssignDesigner,
  onSendToRequester
}: ManagerRequestItemProps) {
  // 날짜 포맷 함수
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };
  return(
    <tr>
      <td>{index}</td>
      <td>{formatDate(item.request_date)}</td>
      <td>{item.requester}</td>
      <td>{formatDate(item.completion_dt)}</td>
      <td>{formatDate(item.open_dt)}</td>
      <td>{item.task_form}</td>
      <td>{item.task_type}</td>
      <td>{item.requirement}</td>
      <td>{item.url || ""}</td>
      <td>{item.note || ""}</td>
      <td>{item.status === "검수요청" ? "검수중" : (item.status || "대기")}</td>
      <td>{item.assigned_designer || "미배정"}</td>
      <td>{item.result_url || ""}</td>
      <td>{formatDate(item.designer_start_date)}</td>
      <td>{formatDate(item.designer_end_date)}</td>
      {/* ✅ 디자이너 선택 + 배정 */}
      <td>
        <Select value={selectedDesigner} onChange={(e) => onDesignerSelect(e.target.value)}>
          <option value="">디자이너 선택</option>
          {designerList.map((designer) => (
            <option key={designer.id} value={designer.name}>
              {designer.name}
            </option>
          ))}
        </Select>
        <Button onClick={onAssignDesigner}>배정</Button>
      </td>
      {/* ✅ 요청자 전달 버튼 */}
      <td>
        {item.status === "검수요청" && item.manager_review_status !== "검수완료" ? (
          <SendButton onClick={onSendToRequester}>완료</SendButton>
        ) : item.manager_review_status === "검수완료" ? (
          <CompletedText>완료</CompletedText>
        ) : (
          ""
        )}
      </td>
    </tr>
  )
}

// ✅ 스타일
const Button = styled.button`
  margin-left: 10px;
  margin-top: 6px;
  padding: 6px 10px;
  background: #073863;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const Select = styled.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const SendButton = styled.button`
  padding: 6px 12px;
  background: #28a745;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const CompletedText = styled.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;