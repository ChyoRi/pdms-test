import styled from "styled-components";
import urlIcon from "../assets/url-icon.svg";
import urlIconGray from "../assets/url-icon-gray.svg"
import commentIcon from "../assets/comment.svg";
import commentIconGray from "../assets/comment_gray.svg"

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
  const designers = (() => {
    const norm = normalizeAssignedDesigners(item.assigned_designers);
    if (norm.length) return norm.map(d => String(d.name ?? "").trim()).filter(Boolean);
    if (item.assigned_designer) return [String(item.assigned_designer).trim()];
    return [];
  })();

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

  // url 처리도 요청자와 동일하게 (string[] 기반)
  const urls = normalizeUrlArray((item as any)?.url); // ★ 변경
  const hasUrl = urls.length > 0;                     // ★ 변경
  const urlHref = hasUrl ? getPrimaryUrl(urls) : undefined; // ★ 추가

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

  // ★ 추가: 문서수정 읽음 상태 계산(매니저와 동일 로직)
  const editReadBy =
    ((item as any)?.requester_edit_read_by ?? {}) as Record<string, any>;
  const editReadClient =
    ((item as any)?.requester_edit_read_by_client ?? {}) as Record<string, number>;

  const uid = currentUid ?? "";

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
      <RequestListTableTd>{item.company}</RequestListTableTd>
      <RequestListTableTd>{formatDate(item.request_date)}</RequestListTableTd>
      <RequestListcompletionTd>{formatDate(item.completion_date)}</RequestListcompletionTd>
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
          <UrlLink href={urlHref} target="_blank" rel="noreferrer" $isCompleted={isEnded} />
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
    border-right: none;
    border-bottom: none;

    &:nth-of-type(13) {
      border-right: 1px solid ${({ theme }) => theme.colors.black};
    }
  }

  &:hover {
    td, input, select {
      background-color: ${({ theme }) => theme.colors.gray04}
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

const DesignersWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;

const DesignerSpan = styled.span`
  line-height: 1.2;
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

const RequestListTaskType = styled.span``;

const RequestListTaskTypeDetail = styled.span``;

const RequestListEmergencyWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  padding: 0 12px;
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