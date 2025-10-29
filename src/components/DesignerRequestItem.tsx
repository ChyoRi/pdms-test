import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";
import commentIcon from "../assets/comment.svg";

type RowForm = {
  start_dt?: string;
  end_dt?: string;
  result_url?: string;
  status?: string;
};

interface DesignerRequestItemProps {
  index: number;
  item: any;
  row: RowForm;
  currentUid?: string;
  localReadMs?: number;
  onChange: (id: string, field: string, value: string) => void;
  onSave: (id: string) => void;
  onDetailClick: (item: RequestData) => void;
  disableActions: boolean;
}

export default function DesignerRequestItem({
  index,
  item,
  row,
  currentUid,
  localReadMs,
  onChange,
  onSave,
  onDetailClick,
  disableActions
}: DesignerRequestItemProps) {
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  // ✅ 표시↔저장 매핑 (디자이너 규칙)
  const uiFromDbStatus = (s?: string) => (s === "검수중" ? "검수요청" : (s ?? "대기"));
  const dbFromUiStatus = (s: string) => s; // 변환 없음

  const uiStatusValue = uiFromDbStatus(row.status);

  // ✅ 메모/작업항목 클릭 시 상세 Drawer 열기
  const openDetail = (e: React.MouseEvent) => {
    e.stopPropagation(); // 행 단위 클릭과 충돌 방지
    onDetailClick(item);
  };

  // ★ 안전 변환: Timestamp → ms, 보류중은 now
  const toMillisSafe = (v: any): number | undefined => {
    if (typeof v?.toMillis === "function") return v.toMillis();
    return v ? Date.now() : undefined;
  };

  const hasUrl = !!item.url && item.url.trim().length > 0;

  const lastAt   = toMillisSafe((item as any)?.comments_last_date);
  const readRaw  = (item as any)?.comment_read_by?.[currentUid ?? ""];
  // ★ 추가: 서버 확정 안되기 전에 서버-독립적으로 쓰는 클라이언트 보조 필드
  const readClient = (item as any)?.comment_read_by_client?.[currentUid ?? ""];

  // ★ 변경: 내 읽음 시각 계산 우선순위
  // 1) localReadMs(낙관적) → 2) comment_read_by_client(숫자) → 3) serverTimestamp 확정값(또는 보류중 now)
  const myReadAt =
    (typeof localReadMs === "number" ? localReadMs : undefined) ??
    (typeof readClient === "number" ? readClient : undefined) ??
    toMillisSafe(readRaw);

  const lastAuthorUid = (item as any)?.comments_last_author_uid ?? "";

  const hasNew =
    Number(item.comments_count ?? 0) > 0 &&
    typeof lastAt === "number" &&
    (myReadAt == null || lastAt > myReadAt) &&
    (currentUid ? lastAuthorUid !== currentUid : true);

  const docEdited = !!(item as any)?.requester_edit_state;              // 문서 수정 → 빨간점
  const designEdited = !!(item as any)?.requester_design_edit_state;    // 디자인 수정 → 파란점

  return (
    <RequestListTableTr isCanceled={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail}>
          {item.design_request_id}
          <UpdateDotWrap>
            {/* ★ 추가: 점 그룹 (둘 다 true면 나란히 표시) */}
            {designEdited && <DotBlue title="디자인 수정 요청됨" />}
            {docEdited && <DotRed title="문서 수정됨" />}
          </UpdateDotWrap>
        </RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{item.company}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListcompletionTd>{formatDate(item.completion_date)}</RequestListcompletionTd>
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
        <CommentCountWrap onClick={openDetail}>
          <CommentIcon />
          <CommentCount $hasNew={hasNew}>
            {Number(item.comments_count ?? 0)}
          </CommentCount>
        </CommentCountWrap>
      </RequestListMemoTd>
      <RequestListDateInputTd>
        <RequestListDateInput
          type="date"
          value={row.start_dt ?? ""} 
          onChange={(e) => onChange(item.id, "start_dt", e.target.value)}
          disabled={disableActions || item.status === "취소" || item.status === "완료"}
        />
      </RequestListDateInputTd>
      <RequestListDateInputTd>
        <RequestListDateInput
          type="date"
          value={row.end_dt ?? ""}
          onChange={(e) => onChange(item.id, "end_dt", e.target.value)}
          disabled={disableActions || item.status === "취소" || item.status === "완료"}
        />
      </RequestListDateInputTd>
      <RequestListTableTd>
        <RequestListTextInput
          type="text"
          value={row.result_url ?? ""}
          placeholder="산출물 URL을 입력해주세요."
          onChange={(e) => onChange(item.id, "result_url", e.target.value)}
          disabled={disableActions || item.status === "취소" || item.status === "완료"}
        />
      </RequestListTableTd>
      <RequestListTableTd>
        <select
          value={uiStatusValue}                            // ← UI 표시값
          onChange={(e) => onChange(item.id, "status", dbFromUiStatus(e.target.value))} // ← DB 저장값
          disabled={disableActions || item.status === "취소" || item.status === "완료"}
        >
          {/* 🔧 value를 '대기'로 맞춰서 불일치 해결 (기존 '대기중' → '대기') */}
          <option value="대기">대기</option>
          <option value="진행중">진행중</option>
          <option value="검수요청">검수요청</option>
          <option value="수정">수정</option>
          <option value="완료" disabled>완료</option>
          <option value="취소" disabled>취소</option>
        </select>
      </RequestListTableTd>
      <RequestListTableTd>
        <SaveButton onClick={() => onSave(item.id)} disabled={disableActions || item.status === "취소" || item.status === "완료"}>저장</SaveButton>
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
    font-size: 13px;
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

  &:last-of-type {
    border-right: none;
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
  border-right: 1px solid ${({ theme }) => theme.colors.black};
  text-align: left;
  background-color: #fffff1;

`;

const RequestListDateInputTd = styled.td`
  padding: 0 6px;
`;

const RequestListRequestIdText = styled.span`
  position: relative;

  &:hover {
    font-weight: 600;
    text-decoration: underline;
  }
`;

const UpdateDotWrap = styled.div`
  position: absolute;
  top: -5px;
  right: -5px;
  display: inline-flex;
  align-items: center;
  gap: 3px;
`;

const DotCommon = styled.span`
  display: inline-block;
  width: 6px;
  height: 6px;
  border-radius: 50%;
`;

/* 빨간점 = 문서 수정(requester_edit_state) */
const DotRed = styled(DotCommon)`
  background-color: ${({ theme }) => theme.colors.red};
`;

/* 파란점 = 디자인 수정(requester_design_edit_state) */
const DotBlue = styled(DotCommon)`
  background-color: ${({ theme }) => theme.colors.blue02};
`;

const RequestListTaskTypeWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;

const RequestListTaskType = styled.span`
  white-space: nowrap;
`;

const RequestListTaskTypeDetail = styled.span`
  
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
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const CommentCountWrap = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  gap:6px;
  font-size:13px; 
  color:#111;
  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

const CommentIcon = styled.i` 
  width:20px; 
  height:20px;
  background: url(${commentIcon}) no-repeat center / contain;
`;

const CommentCount = styled.span<{ $hasNew: boolean }>`
  position: relative;

  &::after {
    content: '';
    position: absolute;
    top: -5px;
    right: -5px;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.red};
    display: ${({ $hasNew }) => ($hasNew ? 'block' : 'none')};
  }
`;