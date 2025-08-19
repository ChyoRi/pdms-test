import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";

interface DesignerRequestItemProps {
  index: number;
  item: any;
  onChange: (id: string, field: string, value: string) => void;
  onSave: (id: string) => void;
  onDetailClick: (item: RequestData) => void;
}

export default function DesignerRequestItem({
  index,
  item,
  onChange,
  onSave,
  onDetailClick
}: DesignerRequestItemProps) {
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

  return (
    <RequestListTableTr isCanceled={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail} $hasUpdate={!!item.updated_at}>{item.design_request_id}</RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListTableTd>{item.requester}</RequestListTableTd>
      <RequestListcompletionTd>{formatDate(item.completion_dt)}</RequestListcompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_dt)}</RequestListOpenDtTd>  
      <RequestListTableTd>{item.task_form}</RequestListTableTd>
      <RequestListTaskTypeTd>{item.task_type}</RequestListTaskTypeTd>
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
  
  ${({ isCanceled, theme }) =>
    isCanceled &&
    `
      ${EmergencyBadge} {
        background-color: ${theme.colors.gray07};
        color: ${theme.colors.gray06};
      }
      ${SaveButton} {
        background-color: ${theme.colors.gray07};
        color: ${theme.colors.gray06};
        border-color: ${theme.colors.gray06};
        cursor: default;
        pointer-events: none;
      }
    `}
  & td {
    font-family: 'Pretendard';
    font-size: 14px;
    font-weight: 500;
  }

  &:hover {
    td, input, select {
      background-color: ${({ theme }) => theme.colors.gray04}
    }
  }
`;

const RequestListTableTd = styled.td`
  padding: 11px 0;

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }
`;

const RequestListcompletionTd = styled.td`
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

const RequestListDateInputTd = styled.td`
  padding: 0 6px;
`;

const RequestListRequestIdText = styled.span<{ $hasUpdate: boolean }>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
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

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
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

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
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