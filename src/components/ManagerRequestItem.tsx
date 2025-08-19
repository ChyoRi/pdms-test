import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";

interface ManagerRequestItemProps {
  index: number;
  item: RequestData;
  designerList: any[];
  selectedDesigner: string;
  onDesignerSelect: (designerName: string) => void;
  onAssignDesigner: () => void;
  onSendToRequester: () => void;
  onDetailClick: (item: RequestData) => void;
}

export default function ManagerRequestItem({
  index,
  item,
  designerList,
  selectedDesigner,
  onDesignerSelect,
  onAssignDesigner,
  onSendToRequester,
  onDetailClick
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

  // ✅ 메모/작업항목 클릭 시 상세 Drawer 열기
  const openDetail = (e: React.MouseEvent) => {
    e.stopPropagation(); // 행 단위 클릭과 충돌 방지
    onDetailClick(item);
  };
  
  return(
    <RequestListTableTr isCanceled={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail} $hasUpdate={!!item.updated_at}>{item.design_request_id}</RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListTableTd>{item.requester}</RequestListTableTd>
      <RequestListCompletionTd>{formatDate(item.completion_dt)}</RequestListCompletionTd>
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
      <RequestListTableTd>
        <StautsBadge status={item.status}>
          {item.status === "검수요청" ? "검수중" : (item.status || "대기")}
        </StautsBadge>
      </RequestListTableTd>
      <RequestListTableTd>
        {item.result_url ? (
          <UrlLink
            href={item.result_url}
            target="_blank"
          />
        ) : (
          ""
        )}
      </RequestListTableTd>
      <RequestListTableTd>{formatDate(item.designer_start_date)}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.designer_end_date)}</RequestListTableTd>
      {/* ✅ 디자이너 선택 + 배정 */}
      <RequestListTableTd>
        <AssignSelect value={selectedDesigner} onChange={(e) => onDesignerSelect(e.target.value)} disabled={item.status === "취소"}>
          <option value="">디자이너 선택</option>
          {designerList.map((designer) => (
            <option key={designer.id} value={designer.name}>
              {designer.name}
            </option>
          ))}
        </AssignSelect>
        <AssignButton onClick={onAssignDesigner} disabled={item.status === "취소"}>배정</AssignButton>
      </RequestListTableTd>
      {/* ✅ 요청자 전달 버튼 */}
      <RequestListTableTd>
        {item.status === "검수요청" && item.manager_review_status !== "검수완료" ? (
          <ReviewButton onClick={onSendToRequester}>검수완료</ReviewButton>
        ) : item.manager_review_status === "검수완료" ? (
          <CompletedText>검수완료</CompletedText>
        ) : (
          ""
        )}
      </RequestListTableTd>
    </RequestListTableTr>
  )
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
      ${ReviewButton}, ${AssignButton} {
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
    td {
      background-color: ${({ theme }) => theme.colors.gray04}
    }
  }
`;

const RequestListTableTd = styled.td`
  padding: 11px 0;
 
  &:first-of-type {
    border-left: none;
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
        return theme.colors.red;
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
        return theme.colors.pink03;
      case "검수중":
        return theme.colors.pink03; // 빨간색
      case "완료":
        return theme.colors.white02; // 회색
      default:
        return theme.colors.gray07; // 기본색
    }
  }};;
`;

const AssignButton = styled.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;

const AssignSelect = styled.select`
  padding: 6px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ReviewButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;

const CompletedText = styled.span`
  color: green;
  font-size: 13px;
  font-weight: bold;
`;