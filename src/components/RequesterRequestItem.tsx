import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";
import commentIcon from "../assets/comment.svg";

interface RequestItemProps {
  item: RequestData;
  index: number;
  disableActions: boolean;
  onReviewComplete: (id: string) => void;
  onCancel: (id: string) => void;
  onEditClick: (id: string) => void;
  onDetailClick: (item: RequestData) => void;
  currentUid?: string;
  localReadMs?: number;
  // 디자인 수정요청 버튼 콜백(부모에서 status를 "수정"으로 바꾸는 처리)
  onRequestRevision?: (id: string) => void;
}

export default function RequesterRequestItem({ item, index, disableActions, currentUid, localReadMs, onReviewComplete, onCancel, onEditClick, onRequestRevision, onDetailClick }: RequestItemProps) {
  const lockedByManager = item.manager_review_status === "검수완료";

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
  
  // ★ 안전 변환: Timestamp → ms, 보류중은 now
  const toMillisSafe = (v: any): number | undefined => {
    if (typeof v?.toMillis === "function") return v.toMillis();
    return v ? Date.now() : undefined;
  };

  const isRequesterDone = item.requester_review_status === "검수완료";
  const designers = Array.isArray(item.assigned_designers)
    ? (item.assigned_designers as string[])
    : null;
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
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListCompletionTd>{formatDate(item.completion_date)}</RequestListCompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_date)}</RequestListOpenDtTd>
      <RequestListTableTd>{item.merchandiser}</RequestListTableTd>
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
      <RequestListTableTd>
        <StautsBadge status={item.status}>
          {item.status === "검수요청"
            ? "진행중"
            : (item.status || "대기")
          }
        </StautsBadge>
      </RequestListTableTd>
      <RequestListTableTd>
        {designers && designers.length > 0 ? (
          <DesignersWrap>
            {designers.map((name, i) => (
              <DesignerSpan key={`${name}-${i}`}>{name}</DesignerSpan>
            ))}
          </DesignersWrap>
        ) : (
          item.assigned_designers || "미배정"
        )}
      </RequestListTableTd>
      <RequestResultTd>
        {item.manager_review_status === "검수완료" && item.result_url ? (
          <UrlLink
            href={item.result_url}
            target="_blank"
          />
        ) : (
          ""
        )}

        {item.manager_review_status === "검수완료" && (
          <RevisionBtn onClick={(e) => { e.stopPropagation(); onRequestRevision?.(item.id); }}>
            수정요청
          </RevisionBtn>
        )}
      </RequestResultTd>
      <RequestListTableTd>
        {isRequesterDone ? (
          <CompletedText>검수완료</CompletedText>
        ) : item.manager_review_status === "검수완료" ? (
          item.status !== "완료" ? (
            <ReviewButton onClick={() => onReviewComplete(item.id)} disabled={disableActions}>검수완료</ReviewButton>
          ) : (
            <CompletedText>검수완료</CompletedText>
          )
        ) : (
          ""
        )}
      </RequestListTableTd>
      <RequestListTableTd>
        <EditButton onClick={() => onEditClick(item.id)} disabled={disableActions || lockedByManager || item.status === "취소" || item.status === "완료"}>수정</EditButton>
      </RequestListTableTd>
      <RequestListTableTd>
        <CancelButton onClick={() => onCancel(item.id)} disabled={disableActions || lockedByManager || item.status === "취소" || item.status === "완료"}>취소</CancelButton>
      </RequestListTableTd>
    </RequestListTableTr>
  );
}

/* ===== styled (기존 + NEW 점 추가) ===== */
const RequestListTableTr = styled.tr<{ isCanceled: boolean }>`
  ${({ isCanceled }) => isCanceled && `
    td { color: #888; background-color: #f4f4f4; }
  `}
  ${({ isCanceled, theme }) => isCanceled && `
    ${EmergencyBadge} { background-color: ${theme.colors.gray07}; color: ${theme.colors.gray06}; }
    ${ReviewButton}, ${EditButton}, ${CancelButton} {
      background-color: ${theme.colors.gray07};
      color: ${theme.colors.gray06};
      border-color: ${theme.colors.gray06};
      cursor: default; pointer-events: none;
    }
  `}
  &:hover { td { background-color: ${({ theme }) => theme.colors.gray04} }
  }
  & td { font-family: 'Pretendard'; font-size: 13px; font-weight: 500; }
`;

const RequestListTableTd = styled.td`
  padding: 15px 0;

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
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
  background-color: #fff6ee;
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

const EmergencyBadge = styled.span`
  margin-right: 8px;
  padding: 3px 5px;
  border-radius: 2px;
  font-size: 10px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.red};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;
`;

const UrlLink = styled.a<{ $disabled?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: url(${urlIcon}) no-repeat center / contain;
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
        return theme.colors.blue02;
      case "검수중":
        return theme.colors.red; // 빨간색
      case "수정": 
        return "#6f42c1";
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
        return theme.colors.lightpupple;
      case "검수중":
        return theme.colors.pink03; // 빨간색
      case "수정": 
        return "#efe9fb";
      case "완료":
        return theme.colors.white02; // 회색
      default:
        return theme.colors.gray07; // 기본색
    }
  }};;
`;

const ReviewButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: green;
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const CompletedText = styled.span`
  color: green;
  font-weight: bold;
`;

const EditButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.black};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const CancelButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  color: ${({ theme }) => theme.colors.white01};
  background-color: ${({ theme }) => theme.colors.black};

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const DesignersWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;
const DesignerSpan = styled.span`
  line-height: 1.2;
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

const RequestResultTd = styled.td`
  position: relative;
  padding: 15px 0;
`;

// ★ 추가: 수정요청 버튼 (우하단 고정)
const RevisionBtn = styled.button`
  position: absolute;
  right: 5px;
  bottom: 2px;
  font-size: 9px;
  font-weight: 600;
  color: #666;
  &:hover {
    text-decoration: underline;
  }
  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;