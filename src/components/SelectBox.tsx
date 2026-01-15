// SelectBox.tsx
import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

// ★ 변경: string 또는 객체 옵션 지원
export type SelectBoxOption =
  | string
  | {
      value: string;
      label: string;
      group?: string;     // ★ 추가 (optgroup 대체)
      disabled?: boolean; // ★ 추가
    };

interface SelectBoxProps {
  value: string;
  options: SelectBoxOption[];
  placeholder?: string;
  onChange: (next: string) => void;
  wide?: boolean;
  full?: boolean;   // ★ 추가: 테이블 셀에서 width:100% 쓰기용
  disabled?: boolean;
}

export default function SelectBox({
  value,
  options,
  placeholder,
  onChange,
  wide,
  full, // ★ 추가
  disabled,
}: SelectBoxProps) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  // ★ 추가: 옵션 정규화 (value/label/group/disabled)
  const normalized = useMemo(() => {
    return (options ?? []).map((opt) => {
      if (typeof opt === "string") {
        return { value: opt, label: opt, group: "", disabled: false };
      }
      return {
        value: String(opt.value ?? ""),
        label: String(opt.label ?? ""),
        group: String(opt.group ?? ""),
        disabled: !!opt.disabled,
      };
    });
  }, [options]);

  // ★ 추가: 선택 라벨 계산
  const selectedLabel = useMemo(() => {
    const hit = normalized.find((o) => o.value === value);
    return hit?.label || value || placeholder || "";
  }, [normalized, value, placeholder]);

  // ★ 추가: group 기준으로 묶기
  const grouped = useMemo(() => {
    const map = new Map<string, { group: string; items: typeof normalized }>();
    for (const o of normalized) {
      const g = o.group || "";
      if (!map.has(g)) map.set(g, { group: g, items: [] as any });
      map.get(g)!.items.push(o);
    }
    return Array.from(map.values());
  }, [normalized]);

  const close = () => setOpen(false);

  const toggle = () => {
    if (disabled) return;
    const el = btnRef.current;
    if (!el) return;
    setRect(el.getBoundingClientRect());
    setOpen((o) => !o);
  };

  // 바깥 클릭/스크롤/리사이즈 처리
  useEffect(() => {
    if (!open) return;

    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      // 트리거 내부 클릭 → 무시
      if (btnRef.current && target && btnRef.current.contains(target)) return;

      // 메뉴 내부 클릭 → 무시
      if (target && target.closest('[data-selectbox-menu="1"]')) return;

      close();
    };

    const onScrollResize = () => {
      const el = btnRef.current;
      if (!el) {
        close();
        return;
      }
      setRect(el.getBoundingClientRect());
    };

    document.addEventListener("click", onDocClick, true);
    window.addEventListener("scroll", onScrollResize, true);
    window.addEventListener("resize", onScrollResize);

    return () => {
      document.removeEventListener("click", onDocClick, true);
      window.removeEventListener("scroll", onScrollResize, true);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [open]);

  const handleSelect = (optValue: string, optDisabled?: boolean) => {
    if (optDisabled) return;
    onChange(optValue);
    close();
  };

  return (
    <>
      <Trigger
        ref={btnRef}
        type="button"
        onClick={toggle}
        disabled={disabled}
        $wide={wide}
        $full={full} // ★ 추가
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="label">{selectedLabel || placeholder || "선택"}</span>
        <span className="arrow" />
      </Trigger>

      {open &&
        rect &&
        createPortal(
          <Menu
            data-selectbox-menu="1"
            style={{
              top: rect.bottom,
              left: rect.left,
              width: rect.width,
            }}
            role="listbox"
            onMouseDown={(e) => e.stopPropagation()}
          >
            {grouped.map(({ group, items }) => (
              <div key={group || "__default__"}>
                {group && <GroupLabel>{group}</GroupLabel>}

                {items.map((opt) => (
                  <MenuItem
                    key={`${group}__${opt.value}`}
                    role="option"
                    aria-selected={opt.value === value}
                    aria-disabled={opt.disabled}
                    $active={opt.value === value}
                    $disabled={opt.disabled}
                    onClick={() => handleSelect(opt.value, opt.disabled)}
                    title={opt.label}
                  >
                    {opt.label}
                  </MenuItem>
                ))}
              </div>
            ))}
          </Menu>,
          document.body
        )}
    </>
  );
}

/* ───── styled ───── */

const Trigger = styled.button<{ $wide?: boolean; $full?: boolean }>`
  width: ${({ $full, $wide }) => ($full ? "100%" : $wide ? "215px" : "168px")};
  height: 36px;
  padding: 0 11px 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: "Pretendard";
  font-size: 13px;
  background: ${({ theme }) => theme.colors.white01};
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  position: relative;

  .label {
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
  }
  .arrow {
    pointer-events: none;
    width: 16px;
    height: 16px;
    background: url(${selectBoxArrow}) no-repeat center / contain;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
  &:disabled {
    opacity: 0.6;
    cursor: default;
  }
`;

const Menu = styled.ul`
  position: fixed;
  z-index: 99999;
  max-height: 280px; /* ✅ 옵션 최대 높이 */
  overflow: auto;    /* ✅ 스크롤 */
  margin: 0;
  padding: 6px 0;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white01};
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.12);
`;

const GroupLabel = styled.div`
  padding: 8px 14px 6px 14px;
  font-size: 12px;
  font-weight: 700;
  opacity: 0.7;
`;

const MenuItem = styled.li<{ $active?: boolean; $disabled?: boolean }>`
  padding: 9px 14px;
  font-size: 13px;
  cursor: ${({ $disabled }) => ($disabled ? "default" : "pointer")};
  opacity: ${({ $disabled }) => ($disabled ? 0.45 : 1)};
  background: ${({ $active, theme }) => ($active ? theme.colors.gray04 : "transparent")};

  /* ★ 추가: 한 줄 고정 + 말줄임 */
  white-space: nowrap;
  max-width: 100%;

  &:hover {
    ${({ $disabled, theme }) =>
      $disabled
        ? ""
        : `
      background: #377dff;
      color: ${theme.colors.white01};
    `}
  }
`;