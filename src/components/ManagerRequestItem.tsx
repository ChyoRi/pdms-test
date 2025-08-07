import styled from "styled-components";

interface RequestData {
  design_request_id: string;
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
  emergency?: boolean;
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
      <RequestListTableTd>{item.url || ""}</RequestListTableTd>
      <RequestListTableTd>{item.note || ""}</RequestListTableTd>
      <RequestListTableTd>{item.status === "검수요청" ? "검수중" : (item.status || "대기")}</RequestListTableTd>
      <RequestListTableTd>{item.result_url || ""}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.designer_start_date)}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.designer_end_date)}</RequestListTableTd>
      {/* ✅ 디자이너 선택 + 배정 */}
      <RequestListTableTd>
        <Select value={selectedDesigner} onChange={(e) => onDesignerSelect(e.target.value)} disabled={item.status === "취소"}>
          <option value="">디자이너 선택</option>
          {designerList.map((designer) => (
            <option key={designer.id} value={designer.name}>
              {designer.name}
            </option>
          ))}
        </Select>
        <Button onClick={onAssignDesigner} disabled={item.status === "취소"}>배정</Button>
      </RequestListTableTd>
      {/* ✅ 요청자 전달 버튼 */}
      <RequestListTableTd>
        {item.status === "검수요청" && item.manager_review_status !== "검수완료" ? (
          <SendButton onClick={onSendToRequester}>완료</SendButton>
        ) : item.manager_review_status === "검수완료" ? (
          <CompletedText>완료</CompletedText>
        ) : (
          ""
        )}
      </RequestListTableTd>
    </RequestListTableTr>
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

const CompletedText = styled.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
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