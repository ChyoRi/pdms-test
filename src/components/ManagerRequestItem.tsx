import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";
import urlIconGray from "../assets/url-icon-gray.svg"
import commentIcon from "../assets/comment.svg";
import commentIconGray from "../assets/comment_gray.svg"
import { auth } from "../firebaseconfig";

interface ManagerRequestItemProps {
  index: number;
  item: RequestData;
  userUid?: string;
  onUnassignDesigner: (payload: { uid?: string; name: string }) => void;
  onSendToRequester: () => void;
  onDetailClick: (item: RequestData) => void;
  localReadMs?: number;
  onOpenAssignDesigner?: (target: RequestData) => void;
}

const normalizeAssigned = (raw: any): { uid?: string; name: string }[] => {
  if (!Array.isArray(raw) || raw.length === 0) return [];
  if (typeof raw[0] === "string") {
    return raw.map((n: any) => ({ name: String(n).trim() })).filter((x) => x.name);
  }
  return raw
    .map((d: any) => ({
      uid: String(d?.uid ?? "").trim() || undefined,
      name: String(d?.name ?? "").trim(),
    }))
    .filter((x) => x.name);
};

export default function ManagerRequestItem({
  index,
  item,
  userUid,
  onUnassignDesigner,
  onSendToRequester,
  onDetailClick,
  localReadMs,
  onOpenAssignDesigner
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

  const isDoneOrCanceled = item.status === "취소" || item.status === "완료";

  // assigned_designers(객체/문자열) normalize
  const assignedRaw = (item as any).assigned_designers;
  const assignedList = normalizeAssigned(assignedRaw);

  // legacy single 지원
  const legacySingle = String((item as any).assigned_designer ?? "").trim();
  const finalAssigned = legacySingle
    ? [...assignedList, { name: legacySingle }]
    : assignedList;

  // ★ 안전 변환: Timestamp → ms, 보류중은 now
  const toMillisSafe = (v: any): number | undefined => {
    if (typeof v?.toMillis === "function") return v.toMillis();
    return v ? Date.now() : undefined;
  };

  // url(string[]) 정규화(빈값 제거 + trim + 중복 제거)
  const normalizeUrlArray = (raw?: any): string[] => {
    if (!raw) return [];

    // 1) 이미 배열로 저장된 경우
    if (Array.isArray(raw)) {
      const cleaned = raw
        .map((v) => (typeof v === "string" ? v.trim() : ""))
        .filter(Boolean);
      return Array.from(new Set(cleaned));
    }

    // 2) 문자열로 저장된 경우 (여러 줄/쉼표/공백 포함)
    const text = String(raw);

    // 가장 정확: http/https URL 직접 추출
    const httpMatches = text.match(/https?:\/\/[^\s<>"']+/g) || [];

    const clean = (u: string) =>
      u.trim().replace(/[)\]}>,.;:!?]+$/g, ""); // 뒤 문장부호 제거

    let urls = httpMatches.map(clean).filter(Boolean);

    // http URL이 없으면 토큰 분리 후 프로토콜 보정
    if (urls.length === 0) {
      const tokens = text
        .split(/[\n\r\t ]+|,+/g)
        .map((t) => t.trim())
        .filter(Boolean);

      urls = tokens
        .map(clean)
        .map((t) => {
          if (/^https?:\/\//i.test(t)) return t;
          if (/^(www\.)/i.test(t)) return `https://${t}`;
          if (/^drive\.google\.com\//i.test(t)) return `https://${t}`;
          if (/^docs\.google\.com\//i.test(t)) return `https://${t}`;
          return "";
        })
        .filter(Boolean);
    }

    return Array.from(new Set(urls));
  };

  // 대표 URL(아이콘 클릭 시 열리는 링크) - 첫 번째만 사용
  const getPrimaryUrl = (urls: string[]) => urls[0];

  // url은 string[] 기준으로 처리
  const urls = normalizeUrlArray((item as any)?.url);
  const hasUrl = urls.length > 0;
  const urlHref: string | undefined = hasUrl ? getPrimaryUrl(urls) : undefined;

  const lastAt   = toMillisSafe((item as any)?.comments_last_date);
  const readRaw  = (item as any)?.comment_read_by?.[userUid ?? ""];
  // 서버 확정 안되기 전에 서버-독립적으로 쓰는 클라이언트 보조 필드
  const readClient = (item as any)?.comment_read_by_client?.[userUid ?? ""];

  // 내 읽음 시각 계산 우선순위
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
    (userUid ? lastAuthorUid !== userUid : true);

  // ===== 문서 수정 빨간점 로직 =====
  const docEdited =
    !!(item as any)?.requester_edit_state; // 문서 수정 여부
  const designEdited =
    !!(item as any)?.requester_design_edit_state; // 디자인 수정 여부

  const editReadBy =
    ((item as any)?.requester_edit_read_by ??
      {}) as Record<string, any>;
  const editReadClient =
    ((item as any)?.requester_edit_read_by_client ??
      {}) as Record<string, number>;

  const uid = userUid ?? auth.currentUser?.uid ?? "";

  const editReadRaw = editReadBy[uid];

  const myDocEditReadAt =
    (typeof editReadClient[uid] === "number"
      ? editReadClient[uid]
      : undefined) ??
    toMillisSafe(editReadRaw);

  const lastEditAuthorUid =
    (item as any)?.requester_edit_last_uid ?? "";

  const showDocEditDot =
    docEdited &&
    !!uid &&
    myDocEditReadAt == null && // 아직 내가 읽지 않았고
    (lastEditAuthorUid ? lastEditAuthorUid !== uid : true); // 내가 수정한 게 아니면 표시

  // 완료 또는 취소 공통 플래그
  const isEnded = item.status === "완료" || item.status === "취소";
  
  return(
    <RequestListTableTr isCanceled={item.status === "취소" || item.status === "완료"} isCancelOnly={item.status === "취소"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail}>
          {item.design_request_id}
          <UpdateDotWrap>
            {/* 점 그룹 (둘 다 true면 나란히 표시) */}
            {designEdited && <DotBlue />}
            {showDocEditDot && <DotRed />}
          </UpdateDotWrap>
        </RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{item.company}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListCompletionTd>{formatDate(item.completion_date)}</RequestListCompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_date)}</RequestListOpenDtTd>
      <RequestListTableTd>
        <RequestListMerchandiser>{item.merchandiser}</RequestListMerchandiser>
      </RequestListTableTd>
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
        {urlHref ? (
          <UrlLink href={urlHref} target="_blank" $isCompleted={isEnded} />
        ) : null}
      </RequestListTableTd>
      <RequestListMemoTd>
        <CommentCountWrap status={item.status} onClick={openDetail}>
          <CommentIcon $isCompleted={isEnded} />
          <CommentCount $hasNew={hasNew}>
            {Number(item.comments_count ?? 0)}
          </CommentCount>
        </CommentCountWrap>
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
            $isCompleted={isEnded}
          />
        ) : (
          ""
        )}
      </RequestListTableTd>
      <RequestListTableTd>{formatDate(item.designer_start_date)}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.designer_end_date)}</RequestListTableTd>
      {/* ✅ 디자이너 선택 + 배정 */}
      <RequestListTableTd>
        {finalAssigned.length > 0 && (
          <AssignedWrap>
            {finalAssigned.map((d, idx) => ( // ★ 변경: idx 추가
              <AssignedTag key={`${d.uid || d.name}-${idx}`}> {/* ★ 변경: key 유니크 */}
                {d.name}
                <RemoveBtn
                  type="button"
                  onClick={() => {
                    if (!isDoneOrCanceled) onUnassignDesigner({ uid: d.uid, name: d.name });
                  }}
                  disabled={isDoneOrCanceled}
                  aria-label={`${d.name} 배정 해제`}
                >
                  ×
                </RemoveBtn>
              </AssignedTag>
            ))}
          </AssignedWrap>
        )}

        <AssignRow>
          <AssignButton
            type="button"
            onClick={(e) => {
              e.stopPropagation();

              // ★ 변경: 완료/취소 모두 상세배정 모달은 열리게 함
              onOpenAssignDesigner?.(item);
            }}
            // ★ 변경: onOpenAssignDesigner 없을 때만 비활성화
            disabled={!onOpenAssignDesigner}
          >
            상세배정
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
      <RequestListTableTd>{item.out_work_hour ?? ""}</RequestListTableTd>
    </RequestListTableTr>
  )
}

const RequestListTableTr = styled.tr<{ isCanceled: boolean; isCancelOnly: boolean }>`
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
    `}

  /* ★ 핵심 변경: 버튼 차단(pointer-events:none)은 "취소"일 때만 */
  ${({ isCancelOnly, theme }) =>
    isCancelOnly &&
    `
      ${ReviewButton} {
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
    border-right: none;
    border-bottom: none;
  }

  &:hover {
    td {
      background-color: ${({ theme }) => theme.colors.gray04};
    }
  }
`;

const RequestListTableTd = styled.td`
  padding: 11px 5px;
 
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
  padding: 15px 9px;
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

const RequestListTaskType = styled.span``;

const RequestListTaskTypeDetail = styled.span``;

const RequestListEmergencyWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  padding: 0 8px;
`;

const RequestListMerchandiser = styled.span`
  white-space: normal;
  overflow-wrap: break-word;
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

const UrlLink = styled.a<{ $disabled?: boolean; $isCompleted?: boolean }>`
  display: inline-block;
  vertical-align: middle;
  width: 24px;
  height: 24px;
  background: ${({ $isCompleted }) =>
    $isCompleted
      ? `url(${urlIconGray}) no-repeat center / contain`
      : `url(${urlIcon}) no-repeat center / contain`};
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
        return theme.colors.pink03;
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

const AssignButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;

  &:disabled {
    background-color: ${({ theme }) => theme.colors.gray07};
    color: ${({ theme }) => theme.colors.gray06};
    border-color: ${({ theme }) => theme.colors.gray06};
    cursor: default;
    pointer-events: none;
  }
`;

const ReviewButton = styled.button`
  padding: 4.5px 10px;
  border-radius: 4px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`;

const CompletedText = styled.span`
  color: ${({ theme }) => theme.colors.gray05};
  font-size: 13px;
  font-weight: bold;
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

const CommentCountWrap = styled.div<{ status: string }>`  // ★ 타입 추가
  position: relative;
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  gap: 6px;
  font-size: 13px;
  color: ${({ status, theme }) =>
    status === "완료" || status === "취소" ? theme.colors.gray05 : "#111"};  // ★ 완료일 때만 gray05

  &:hover {
    span {
      text-decoration: underline;
    }
  }
`;

const CommentIcon = styled.i<{ $isCompleted?: boolean }>`
  width: 20px;
  height: 20px;
  background: ${({ $isCompleted }) =>
    $isCompleted
      ? `url(${commentIconGray}) no-repeat center / contain`
      : `url(${commentIcon}) no-repeat center / contain`};
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