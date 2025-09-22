// SelectDown.tsx
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import styled from "styled-components";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

type Option = string;

interface SelectDownProps {
  value: string;
  options: Option[];
  placeholder?: string;
  onChange: (next: string) => void;
  wide?: boolean;   // 기존 $wide 대응
  disabled?: boolean;
}

export default function SelectDown({
  value,
  options,
  placeholder,
  onChange,
  wide,
  disabled
}: SelectDownProps) {
  const [open, setOpen] = useState(false);
  const [rect, setRect] = useState<DOMRect | null>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  const selectedLabel = value || placeholder || (options[0] ?? "");

  const close = () => setOpen(false);

  const toggle = () => {
    if (disabled) return;
    const el = btnRef.current;
    if (!el) return;
    setRect(el.getBoundingClientRect());
    setOpen(o => !o);
  };

  // 바깥 클릭/스크롤/리사이즈 처리
  useEffect(() => {
    if (!open) return;

    const onDocClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;

      // 트리거 내부 클릭 → 무시
      if (btnRef.current && target && btnRef.current.contains(target)) return;

      // ▼ 메뉴 내부 클릭 → 무시 (포털이라서 closest로 탐색)
      if (target && target.closest('[data-selectdown-menu="1"]')) return;

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

    document.addEventListener("click", onDocClick, true); // capture 단계
    window.addEventListener("scroll", onScrollResize, true);
    window.addEventListener("resize", onScrollResize);

    return () => {
      document.removeEventListener("click", onDocClick, true);
      window.removeEventListener("scroll", onScrollResize, true);
      window.removeEventListener("resize", onScrollResize);
    };
  }, [open]);

  const handleSelect = (opt: string) => {
    onChange(opt);  // 부모 상태 갱신 → value 변경 → 라벨 업데이트
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
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="label">{selectedLabel || "선택"}</span>
        <span className="arrow" />
      </Trigger>

      {open && rect &&
        createPortal(
          <Menu
            data-selectdown-menu="1"
            style={{
              top: rect.bottom,
              left: rect.left,
              width: rect.width
            }}
            role="listbox"
            // 마우스 다운 시 버블링 막아서 캡처 단계의 바깥 클릭 핸들러가 먼저 실행되는 걸 방지
            onMouseDown={(e) => e.stopPropagation()}
          >
            {options.map((opt) => (
              <MenuItem
                key={opt}
                role="option"
                aria-selected={opt === value}
                $active={opt === value}
                onClick={() => handleSelect(opt)}
                title={opt}
              >
                {opt}
              </MenuItem>
            ))}
          </Menu>,
          document.body
        )}
    </>
  );
}

/* ───── styled ───── */

const Trigger = styled.button<{ $wide?: boolean }>`
  width: ${({ $wide }) => ($wide ? "215px" : "168px")};
  height: 36px;
  padding: 0 11px 0 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
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
    width: 16px; height: 16px;
    background: url(${selectBoxArrow}) no-repeat center / contain;
  }

  &:focus { outline: none; border-color: ${({ theme }) => theme.colors.black}; }
  &:disabled { opacity: .6; cursor: default; }
`;

const Menu = styled.ul`
  position: fixed;   /* 포털 기준: 뷰포트 좌표 */
  z-index: 9999;
  max-height: 280px;
  overflow: auto;
  margin: 0;
  list-style: none;
  border: 1px solid ${({ theme }) => theme.colors.black};
  /* border-radius: 6px; */
  background: ${({ theme }) => theme.colors.white01};
  box-shadow: 0 6px 18px rgba(0,0,0,.12);
`;

const MenuItem = styled.li<{ $active?: boolean }>`
  padding: 9px 16px;
  font-size: 15px;
  cursor: pointer;
  background: ${({ $active, theme }) => ($active ? theme.colors.gray04 : "transparent")};

  &:hover { 
    background: #377dff; 
    color: ${({ theme }) => theme.colors.white01}
  };
`;