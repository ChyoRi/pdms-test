import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";
import urlIconGray from "../assets/url-icon-gray.svg"
import commentIcon from "../assets/comment.svg";
import commentIconGray from "../assets/comment_gray.svg"

interface RequestItemProps {
  item: RequestData;
  index: number;
  disableActions: boolean;
  onReviewComplete: (id: string) => void;
  onCancel: (id: string) => void;
  onEditClick: (id: string) => void;
  onDetailClick: (item: RequestData) => void;
  userUid?: string;
  localReadMs?: number;
  // 디자인 수정요청 버튼 콜백(부모에서 status를 "수정"으로 바꾸는 처리)
  onRequestRevision?: (id: string) => void;
}

export default function RequesterRequestItem({ item, index, disableActions, userUid, localReadMs, onReviewComplete, onCancel, onEditClick, onRequestRevision, onDetailClick }: RequestItemProps) {
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

  const isRequesterDone = item.requester_review_status === "검수완료";

  type AssignedDesignerLike = { uid?: string; name?: string; out_work_hour?: number; in_work_hour?: number };
  const normalizeAssignedDesigners = (raw: any): AssignedDesignerLike[] => {
    if (!raw) return [];
    if (Array.isArray(raw)) {
      if (raw.length === 0) return [];
      if (typeof raw[0] === "string") {
        return raw.map((s: string) => ({ name: String(s).trim() })).filter(d => d.name);
      }
      if (typeof raw[0] === "object") {
        return raw
          .map((o: any) => ({
            uid: typeof o?.uid === "string" ? o.uid : undefined,
            name: String(o?.name ?? "").trim(),
            out_work_hour: Number(o?.out_work_hour ?? 0),
            in_work_hour: Number(o?.in_work_hour ?? 0),
          }))
          .filter(d => d.name);
      }
    }
    if (typeof raw === "string") return [{ name: raw.trim() }];
    return [];
  };

  const designers = (() => {
    const norm = normalizeAssignedDesigners(item.assigned_designers);
    if (norm.length) return norm.map(d => String(d.name ?? "").trim()).filter(Boolean);
    // 레거시 단일 필드 fallback
    if ((item as any).assigned_designer) return [String((item as any).assigned_designer).trim()];
    return [];
  })();
  const urls = normalizeUrlArray((item as any)?.url);
  const hasUrl = urls.length > 0;
  const urlHref = hasUrl ? getPrimaryUrl(urls) : undefined;

  const lastAt   = toMillisSafe((item as any)?.comments_last_date);
  const readRaw  = (item as any)?.comment_read_by?.[userUid ?? ""];
  // 서버 확정 안되기 전에 서버-독립적으로 쓰는 클라이언트 보조 필드
  const readClient = (item as any)?.comment_read_by_client?.[userUid ?? ""];

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
    (userUid ? lastAuthorUid !== userUid : true);

  // ===== 문서/디자인 수정 점 로직 =====
  const docEdited   = !!(item as any)?.requester_edit_state;           // 문서 수정 → 빨간점
  const designEdited = !!(item as any)?.requester_design_edit_state;   // 디자인 수정 → 파란점

  // ★ 추가: 문서 수정 "내가 읽었는지" 체크
  const editReadBy =
    (((item as any)?.requester_edit_read_by ?? {}) as Record<string, any>); // 서버 Timestamp 맵
  const editReadClient =
    (((item as any)?.requester_edit_read_by_client ?? {}) as Record<string, number>); // 클라이언트 ms 맵

  const uid = userUid ?? ""; // 요청자 화면에서는 prop만 사용

  const editReadRaw = editReadBy[uid];

  const myDocEditReadAt =
    (typeof editReadClient[uid] === "number"
      ? editReadClient[uid]
      : undefined) ?? toMillisSafe(editReadRaw);

  const lastEditAuthorUid = (item as any)?.requester_edit_last_uid ?? "";

  // ★ 핵심: 나 자신이 수정했거나 / 내가 이미 읽었으면 빨간점 숨김
  const showDocEditDot =
    docEdited &&
    !!uid &&
    myDocEditReadAt == null && // 아직 내가 읽은 기록이 없고
    (lastEditAuthorUid ? lastEditAuthorUid !== uid : true); // 내가 수정한 문서가 아니면 표시

  const handleRevisionClick = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!onRequestRevision) return;
    const ok = window.confirm("이 요청에 대해 ‘디자인 수정요청’을 보내시겠습니까?");
    if (!ok) return;
    onRequestRevision(item.id);
  };

  // 완료 또는 취소 공통 플래그
  const isEnded = item.status === "완료" || item.status === "취소";

  // 요청자 화면에서만 허수계정 끝의 '.' 제거
  const displayNameForRequester = (raw: any): string => {
    const s = String(raw ?? "").trim();
    if (!s) return "";
    return s.replace(/^★+/, "");
  };

  return (
    <RequestListTableTr isCanceled={item.status === "취소" || item.status === "완료"}>
      <RequestListTableTd>{index}</RequestListTableTd>
      <RequestListTableTd>
        <RequestListRequestIdText onClick={openDetail}>
          {item.design_request_id}
          <UpdateDotWrap>
            {/* ★ 추가: 점 그룹 (둘 다 true면 나란히 표시) */}
            {designEdited && <DotBlue title="디자인 수정 요청됨" />}
            {showDocEditDot && <DotRed title="문서 수정됨" />}
          </UpdateDotWrap>
        </RequestListRequestIdText>
      </RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListCompletionTd>{formatDate(item.completion_date)}</RequestListCompletionTd>
      <RequestListOpenDtTd>{formatDate(item.open_date)}</RequestListOpenDtTd>
      <RequestListTableTd>
        <RequestListMerchandiser>{item.merchandiser}</RequestListMerchandiser>
      </RequestListTableTd>
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
          // ★ 변경: href는 string만
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
        <StautsBadge status={item.status}>
          {item.status === "검수요청"
            ? "진행중"
            : (item.status || "대기")
          }
        </StautsBadge>
      </RequestListTableTd>
      <RequestListTableTd>
        {designers.length > 0 ? (
          <DesignersWrap>
            {designers.map((name, i) => {
              const clean = displayNameForRequester(name);
              return <DesignerSpan key={`${clean}-${i}`}>{clean}</DesignerSpan>;
            })}
          </DesignersWrap>
        ) : (
          "미배정"
        )}
      </RequestListTableTd>
      <RequestResultTd>
        {item.manager_review_status === "검수완료" && item.result_url ? (
          <UrlLink
            href={item.result_url}
            target="_blank"
            $isCompleted={isEnded}
          />
        ) : (
          ""
        )}

        {item.manager_review_status === "검수완료" && (
          <RevisionBtn onClick={handleRevisionClick}>
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
  &:hover { 
    td { 
      background-color: ${({ theme }) => theme.colors.gray04} 
    };
  }

  & td { 
    font-family: 'Pretendard';
    font-size: 13px;
    font-weight: 500;
    border-right: none;
    border-bottom: none;
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

const RequestListMerchandiser = styled.span`
  white-space: normal;
  overflow-wrap: break-word;
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
  color: ${({ theme }) => theme.colors.gray05};
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