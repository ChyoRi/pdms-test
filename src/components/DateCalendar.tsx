// DateCalendar.tsx
import { useMemo, useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import styled, { createGlobalStyle } from "styled-components";

type Range = { start: Date | null; end: Date | null };

interface Props {
  value?: Range;
  onApply?: (range: Range) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
}

export default function DateCalendar({
  value,
  onApply,
  placeholder = "요청 기간 선택",
}: Props) {
  const [selected, setSelected] = useState<Range>({
    start: value?.start ?? null,
    end: value?.end ?? null,
  });

  const [year, setYear] = useState<number>(
    value?.start?.getFullYear() ?? new Date().getFullYear()
  );

  const [open, setOpen] = useState(false);

  const display = useMemo(() => {
    const fmt = (d: Date) =>
      `${d.getFullYear()}.${String(d.getMonth() + 1).padStart(2, "0")}.${String(
        d.getDate()
      ).padStart(2, "0")}`;
    if (selected.start && selected.end)
      return `${fmt(selected.start)} ~ ${fmt(selected.end)}`;
    if (selected.start) return `${fmt(selected.start)} ~`;
    return "";
  }, [selected]);

  const handleSelect = (range: any) => {
    setSelected(range);
    if (range?.from && range?.to) {
      onApply?.({ start: range.from, end: range.to });
    }
  };

  // 📌 이번달 index (0 ~ 11)
  const currentMonth = new Date().getMonth();
  const monthsRef = useRef<HTMLDivElement>(null);

  // 📌 open 시 현재 달로 스크롤 이동
  useEffect(() => {
    if (open && monthsRef.current) {
      const monthEl = monthsRef.current.querySelectorAll(".month-box")[currentMonth];
      if (monthEl) {
        (monthEl as HTMLElement).scrollIntoView({ block: "start" });
      }
    }
  }, [open]);

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    if (open) {
      document.addEventListener("click", handleClickOutside); // ✅ click 사용
    }
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [open]);

  return (
    <Field ref={wrapperRef}>
      <GlobalDayPickerOverride />
      <InputLike
        value={display}
        placeholder={placeholder}
        readOnly
        onClick={() => setOpen((p) => !p)}
      />

      {open && (
        <CalendarWrap>
          <Header>
            <ArrowBtn onClick={() => setYear((y) => y - 1)}>◀</ArrowBtn>
            <span>{year}</span>
            <ArrowBtn onClick={() => setYear((y) => y + 1)}>▶</ArrowBtn>
          </Header>

          {/* 요일 헤더 */}
          <WeekdaysRow>
            {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </WeekdaysRow>

          {/* 12개월 달력 */}
          <MonthsContainer ref={monthsRef}>
            {Array.from({ length: 12 }).map((_, i) => (
              <MonthBox key={i} className="month-box">
                <MonthLabel>{String(i + 1).padStart(2, "0")}</MonthLabel>
                <DayPicker
                  mode="range"
                  month={new Date(year, i, 1)}
                  selected={
                    selected.start && selected.end
                      ? { from: selected.start, to: selected.end }
                      : selected.start
                      ? { from: selected.start }
                      : undefined
                  }
                  onSelect={(range) => {
                    if (!range) return;
                    // 내부 state는 start/end 유지
                    setSelected({ start: range.from ?? null, end: range.to ?? null });
                    // 완료 시 부모로 전달
                    if (range.from && range.to) {
                      onApply?.({ start: range.from, end: range.to });
                    }
                  }}
                  disabled={[
                    {
                      before: new Date(year, i, 1),              // 이번 달 1일 이전
                      after: new Date(year, i + 1, 0),           // 이번 달 마지막 날 이후
                    },
                  ]}
                  showOutsideDays={false}
                />
              </MonthBox>
            ))}
          </MonthsContainer>
        </CalendarWrap>
      )}
    </Field>
  );
}

/* ===== styled ===== */
const Field = styled.div`
  margin-right: 8px;
  position: relative;
`;

const InputLike = styled.input`
  width: 100%;
  margin-top: 8px;
  padding: 11px 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.gray02 || "#d0d5dd"};
  border-radius: 10px;
  font-size: 16px;
  background: #fff;
  cursor: pointer;
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.black || "#111"};
  }
`;

const CalendarWrap = styled.div`
  position: absolute;
  top: 50px;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  z-index: 100;
  width: 320px;
  max-height: 500px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: 600;
  font-size: 15px;
  padding: 8px 12px;
`;

const ArrowBtn = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  cursor: pointer;
`;

const WeekdaysRow = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  font-size: 12px;
  color: #666;
  padding: 0 12px 6px 12px;

  span {
    flex: 1;
    text-align: center;
  }
`;

const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-height: 430px;
  padding: 0 12px 12px;
  overflow-y: auto;
`;

const MonthBox = styled.div`
  .rdp-months {
    width: 100%;

    table {
      width: 100%;
    }
  }

  .rdp-tbody {
    display: contents !important; /* table body 제거 */
  }

  .rdp-row {
    display: contents !important; /* tr 제거 */
  }

  .rdp-cell {
    display: flex !important;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
  }

  .rdp-day {
    width: 28px;
    height: 28px;
    font-size: 13px;
    line-height: 28px;
    border: none;
    text-align: center;
    cursor: pointer;
  }

  /* ✅ 오늘 날짜 강조 */
  .rdp-day.rdp-today {
    background-color: ${({ theme }) => theme?.colors?.black};
    font-weight: 700;

    button {
      color: ${({ theme }) => theme?.colors?.white01};
    }
  }

  /* 시작/끝 날짜 */
  .rdp-range_start,
  .rdp-range_end {
    background-color: ${({ theme }) => theme?.colors?.red} !important;

    button {
      color: ${({ theme }) => theme?.colors?.white01};
    }
  }

  /* 중간 날짜 */
  .rdp-range_middle {
    background-color: ${({ theme }) => theme?.colors?.red};

    button {
      color: ${({ theme }) => theme?.colors?.white01};
    }
  }
`;

const MonthLabel = styled.div`
  font-size: 15px;
  font-weight: 700;
  margin: 4px 0;
  color: #444;
`;

const GlobalDayPickerOverride = createGlobalStyle`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`;
