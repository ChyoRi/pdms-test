import styled from "styled-components";
import { createPortal } from "react-dom";
import { useEffect, useMemo } from "react";

export type AssignedDesignerDetail = {
  uid?: string;
  name?: string;
  task_form?: string;
  task_type?: string;
  task_type_detail?: string;
  count?: number | string;
};

export default function AssignDesignerModal({
  open,
  anchorRect,
  list,
  onClose,
}: {
  open: boolean;
  anchorRect: DOMRect | null;
  list: AssignedDesignerDetail[];
  onClose: () => void;
}) {
  // ESC 닫기
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, onClose]);

  const pos = useMemo(() => {
    if (!anchorRect) return { top: 0, left: 0, ready: false };

    const gap = 16;
    const maxWidth = 420;

    let top = anchorRect.bottom + gap;
    let left = anchorRect.left;

    const vw = window.innerWidth;
    const vh = window.innerHeight;

    if (left + maxWidth > vw - 8) left = Math.max(8, vw - maxWidth - 8);

    const estimatedH = Math.min(110 + list.length * 74, 420);
    if (top + estimatedH > vh - 8) top = Math.max(8, anchorRect.top - estimatedH - gap);

    return { top, left, ready: true };
  }, [anchorRect, list.length]);

  if (!open || !pos.ready || !list || list.length === 0) return null;

  // ★ 추가: 상세유형 값 존재 여부(빈문자/공백 포함 방어)
  const hasDetail = (v: any) => String(v ?? "").trim().length > 0;

  return createPortal(
    <Wrap
      style={{ top: pos.top, left: pos.left }}
      role="dialog"
      aria-label="배정 상세"
      data-assign-modal="1" // ★ 유지: 바깥클릭 닫기 판별용
    >
      <TitleRow>
        <Title>배정 상세</Title>

        {/* ★ 추가: 닫기 버튼 */}
        <CloseBtn type="button" onClick={onClose} aria-label="닫기" title="닫기" />
      </TitleRow>

      <List>
        {list.map((d, idx) => (
          <Card key={`${d.task_form}-${d.task_type}-${d.task_type_detail}-${idx}`}>
            <Grid>
              <Label>업무형태</Label>
              <Value>{String(d.task_form ?? "-")}</Value>

              <Label>업무유형</Label>
              <Value>{String(d.task_type ?? "-")}</Value>

              {/* ★ 변경: task_type_detail 있을 때만 "상세유형" 라인 노출 */}
              {hasDetail(d.task_type_detail) ? (
                <>
                  <Label>상세유형</Label>
                  <Value>{String(d.task_type_detail)}</Value>
                </>
              ) : null}

              <Label>수량</Label>
              <Value>{String(d.count ?? "-")}</Value>
            </Grid>
          </Card>
        ))}
      </List>
    </Wrap>,
    document.body
  );
}

const Wrap = styled.div`
  position: fixed;
  z-index: 9999;
  width: 420px;
  max-width: calc(100vw - 16px);
  padding: 14px 14px 12px;
  border-radius: 10px;
  background: ${({ theme }) => theme.colors.white01};
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
`;

const TitleRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between; /* ★ 변경 */
  width: 100%;
  margin-bottom: 10px;
`;

const Title = styled.div`
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 800;
`;

/* ★ 추가: 닫기 버튼 (X) */
const CloseBtn = styled.button`
  width: 26px;
  height: 26px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  background: ${({ theme }) => theme.colors.white01};
  cursor: pointer;
  position: relative;
  padding: 0;

  &::before,
  &::after {
    content: "";
    position: absolute;
    left: 50%;
    top: 50%;
    width: 12px;
    height: 2px;
    background: ${({ theme }) => theme.colors.gray06};
    transform-origin: center;
  }
  &::before {
    transform: translate(-50%, -50%) rotate(45deg);
  }
  &::after {
    transform: translate(-50%, -50%) rotate(-45deg);
  }

  &:hover {
    background: ${({ theme }) => theme.colors.gray04};
  }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  max-height: 360px;
  overflow: auto;
  padding-right: 2px;
`;

const Card = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 10px;
  padding: 10px 10px 10px;
  background: ${({ theme }) => theme.colors.white01};
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: 84px 1fr;
  gap: 6px 10px;
`;

const Label = styled.div`
  font-family: "Pretendard";
  font-size: 12px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray06};
`;

const Value = styled.div`
  font-family: "Pretendard";
  font-size: 13px;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.black};
  word-break: break-word;
`;