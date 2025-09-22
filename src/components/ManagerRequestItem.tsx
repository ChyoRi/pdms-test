import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";
import { useCallback } from "react";

interface ManagerRequestItemProps {
  index: number;
  item: RequestData;
  designerList: any[];
  selectedDesigners: string[];
  onDesignerSelect: (designerNames: string[]) => void;
  onAssignDesigner: () => void;
  onUnassignDesigner: (designerName: string) => void;
  onSendToRequester: () => void;
  onDetailClick: (item: RequestData) => void;
  workHourValue: string;
  onChangeWorkHour: (val: string) => void;
  onSaveWorkHour: () => void;
  onStartEditWorkHour: () => void;
  onCancelEditWorkHour: () => void;
}

export default function ManagerRequestItem({
  index,
  item,
  designerList,
  selectedDesigners,
  onDesignerSelect,
  onAssignDesigner,
  onUnassignDesigner,
  onSendToRequester,
  onDetailClick,
  workHourValue,
  onChangeWorkHour,
  onSaveWorkHour,
  onStartEditWorkHour,
  onCancelEditWorkHour
}: ManagerRequestItemProps) {
  // 🔁 매니저 화면 표시 전용 매핑
  const displayStatusForManager = (s: string) =>
    s === "검수요청" ? "검수중" : s === "검수중" ? "검수요청" : s;

  const viewStatus = displayStatusForManager(item.status);

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

  const isEditingWorkHour = !!item.work_hour_edit_state;
  const isDoneOrCanceled = item.status === "취소" || item.status === "완료";

   // 스코프를 벗어나는 blur만 취소로 처리
  const handleScopeBlur = useCallback(
    (e: React.FocusEvent<HTMLDivElement>) => {
      const next = e.relatedTarget as Node | null; // 포커스가 이동한 대상
      // next가 없거나, 현재 스코프 밖이면 편집 취소
      if (!next || !e.currentTarget.contains(next)) {
        onCancelEditWorkHour();
      }
    },
    [onCancelEditWorkHour]
  );

  // 이미 배정된 사람들
  const assignedList: string[] = Array.isArray((item as any).assigned_designers)
    ? (item as any).assigned_designers
    : ((item as any).assigned_designer ? [(item as any).assigned_designer] : []);

  // ★ 멀티 선택 onChange
  const onChangeSingle = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const v = e.target.value;
    onDesignerSelect(v ? [v] : []); // 선택 해제 시 빈 배열
  };

  const hasUrl = !!item.url && item.url.trim().length > 0;
  
  return(
    <RequestListTableTr isCanceled={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail} $hasUpdate={!!item.updated_date}>{item.design_request_id}</RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{item.company}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListCompletionTd>{formatDate(item.completion_date)}</RequestListCompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_date)}</RequestListOpenDtTd>
      <RequestListTableTd>{item.merchandiser}</RequestListTableTd>
      <RequestListTableTd>{item.requester}</RequestListTableTd>
      <RequestListTableTd>{item.task_form}</RequestListTableTd>
      <RequestListTaskTypeTd>
        <RequestListTaskTypeWrap>
          <RequestListTaskType>{item.task_type}</RequestListTaskType>
          <RequestListTaskTypeDetail>{item.task_type_detail}</RequestListTaskTypeDetail>
        </RequestListTaskTypeWrap>
      </RequestListTaskTypeTd>
      <RequestListRequirementTd>
        <RequestListEmergencyWrap>
          {item.emergency ? <EmergencyBadge>긴급</EmergencyBadge> : ""}
        <RequestListRequirementText onClick={openDetail}>
          {item.requirement}
        </RequestListRequirementText>
        </RequestListEmergencyWrap>
      </RequestListRequirementTd>
      <RequestListTableTd>
        {hasUrl ? (
          <UrlLink href={item.url} target="_blank" />
        ) : null}
      </RequestListTableTd>
      <RequestListMemoTd>
        <RequestListMemoText onClick={openDetail}>
          {item.note || ""}
        </RequestListMemoText>
      </RequestListMemoTd>
      <RequestListTableTd>
        <StautsBadge status={viewStatus}>
          {viewStatus}
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
        {/* 배정된 태그 */}
        {assignedList.length > 0 && (
          <AssignedWrap>
            {assignedList.map((name) => (
              <AssignedTag key={name}>
                {name}
                <RemoveBtn
                  type="button"
                  onClick={() => { if (!isDoneOrCanceled) onUnassignDesigner(name); }}
                  disabled={isDoneOrCanceled}
                  aria-label={`${name} 배정 해제`}
                >
                  ×
                </RemoveBtn>
              </AssignedTag>
            ))}
          </AssignedWrap>
        )}

        {/* ★ 멀티 셀렉트 + 이미 배정된 사람은 disabled */}
        <AssignRow>
          <AssignSelect
            value={selectedDesigners[0] ?? ""}  // 한 명만 표시
            onChange={onChangeSingle}
            disabled={isDoneOrCanceled}
          >
            <option value="">선택</option>      {/* placeholder */}
            {designerList.map((designer) => {
              const name = designer.name as string;
              const used = assignedList.includes(name);
              return (
                <option key={designer.id} value={name} disabled={used}>
                  {name}{used ? " (배정됨)" : ""}
                </option>
              );
            })}
          </AssignSelect>

          <AssignButton
            onClick={onAssignDesigner}
            disabled={isDoneOrCanceled || selectedDesigners.length === 0}
          >
            배정
          </AssignButton>
        </AssignRow>
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
      <RequestListTableTd>
        {isEditingWorkHour ? (
          <WorkHourScope tabIndex={-1} onBlur={handleScopeBlur}>
            <WorkHourInput
              type="text"
              placeholder="공수 입력"
              value={workHourValue}
              onChange={(e) => onChangeWorkHour(e.target.value)}
              onClick={(e) => e.stopPropagation()}
              disabled={isDoneOrCanceled}
              autoFocus
            />
            <WorkHourSaveButton
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                if (isDoneOrCanceled) return;
                onSaveWorkHour();
              }}
              disabled={isDoneOrCanceled}
            >
              수정
            </WorkHourSaveButton>
          </WorkHourScope>
        ) : (
          item.out_work_hour != null ? (
            <WorkHourReadOnly
              tabIndex={0}
              onClick={(e) => {
                e.stopPropagation();
                if (isDoneOrCanceled) return;
                onStartEditWorkHour();
              }}
              onKeyDown={(e) => {
                if (isDoneOrCanceled) return;
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  onStartEditWorkHour();
                }
              }}
            >
              {item.out_work_hour}
            </WorkHourReadOnly>
          ) : null
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

  &:last-of-type {
    border-right: none;
  }

  &:nth-of-type(14) {
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
    right: -2px;
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

const RequestListTaskTypeWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;

const RequestListTaskType = styled.span`
  white-space: nowrap;
`;

const RequestListTaskTypeDetail = styled.span``;

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
  margin-left:10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const AssignSelect = styled.select`
  width: 90px;
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

const WorkHourInput = styled.input`
  width: 40px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;

  &::placeholder {
    font-size: 11px;
  }
`;

const WorkHourSaveButton = styled.button`
  margin: 6px 0 0 10px;
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;

const WorkHourReadOnly = styled.span`
  display: inline-block;
  min-width: 24px;
  padding: 2px 6px;
  border-radius: 4px;
  cursor: pointer;
  user-select: none;
  &:hover {
    text-decoration: underline;
    font-weight: 600;
  }
`;

const WorkHourScope = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const AssignedWrap = styled.div`
  display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 6px; justify-content: center;
`;
const AssignedTag = styled.span`
  display: inline-flex; align-items: center; gap: 6px;
  background: #f2f4f7; border: 1px solid #d0d5dd; border-radius: 12px; padding: 2px 8px; font-size: 12px;
`;
const RemoveBtn = styled.button`
  border: none; background: transparent; font-size: 14px; line-height: 1; cursor: pointer; color: #666;
  &:disabled { color: #bbb; cursor: default; }
`;

const AssignRow = styled.div` display: flex; align-items: center; justify-content: center; `;