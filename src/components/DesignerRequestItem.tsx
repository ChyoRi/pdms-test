import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";

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
      <RequestListcompletionTd>{formatDate(item.completion_dt)}</RequestListcompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_dt)}</RequestListOpenDtTd>  
      <RequestListTableTd>{item.task_form}</RequestListTableTd>
      <RequestListTaskTypeTd>{item.task_type}</RequestListTaskTypeTd>
      <RequestListRequirementTd>
        <RequestListEmergencyWrap>
          {item.emergency ? <EmergencyBadge>긴급</EmergencyBadge> : ""}
          <RequestListRequirementText>
            {item.requirement}
          </RequestListRequirementText>
        </RequestListEmergencyWrap>
      </RequestListRequirementTd>
      <RequestListTableTd>
        <UrlLink href={item.url} target="_blank" />
      </RequestListTableTd>
      <RequestListMemoTd>
        <RequestListMemoText>{item.note || ""}</RequestListMemoText>
      </RequestListMemoTd>
      <RequestListDateInputTd>
        <RequestListDateInput
          type="date"
          onChange={(e) => onChange(item.id, "start_dt", e.target.value)}
          disabled={item.status === "취소"}
        />
      </RequestListDateInputTd>
      <RequestListDateInputTd>
        <RequestListDateInput
          type="date"
          onChange={(e) => onChange(item.id, "end_dt", e.target.value)}
          disabled={item.status === "취소"}
        />
      </RequestListDateInputTd>
      <RequestListTableTd>
        <RequestListTextInput
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

const RequestListTableTr = styled.tr<{ isCanceled: boolean }>`
  ${({ isCanceled }) =>
    isCanceled &&
    `
      td {
        color: #888;
        background-color: #f4f4f4;
      }
    `}
  &:hover {
    td, input, select {
      background-color: ${({ theme }) => theme.colors.gray04}
    }
  }
`;

const RequestListTableTd = styled.td`
  padding: 11px 0;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const RequestListcompletionTd = styled.td`
  color: ${({ theme }) => theme.colors.red};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;

const RequestListOpenDtTd = styled.td`
  color: ${({ theme }) => theme.colors.blue02};
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;

const RequestListTaskTypeTd = styled.td`
  padding: 15px 12px;
  line-height: 15px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;

const RequestListRequirementTd = styled.td`
  line-height: 15px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;

const RequestListMemoTd = styled.td`
  line-height: 15px;
  padding: 0 12px;
  text-align: left;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
  background-color: #fffff1;
`;

const RequestListDateInputTd = styled.td`
  padding: 0 12px;
`;

const RequestListEmergencyWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  padding: 0 12px;
`;

const EmergencyBadge = styled.span`
  margin-right: 5px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;
`;

const RequestListRequirementText = styled.span`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  word-break: break-word;
  text-overflow: ellipsis;
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
  word-break: break-word;
  text-overflow: ellipsis;
`;

const RequestListDateInput = styled.input.attrs({ type: "date" })`
  width: 100%;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;


const RequestListTextInput = styled.input`
  width: 100%;
  padding: 0 12px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 500;
`;

const SaveButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;