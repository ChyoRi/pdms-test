// DateCalendar.tsx
import { useMemo, useState, useEffect, useRef } from "react";
import { DayPicker } from "react-day-picker";
import styled, { createGlobalStyle } from "styled-components";
import CalendarArrow from "../assets/calendar-arrow.png";

type Range = { start: Date | null; end: Date | null };

interface Props {
  value?: Range;
  onApply?: (range: Range) => void;
  minDate?: Date;
  maxDate?: Date;
  placeholder?: string;
  /** 끝 날짜 선택 시 자동 닫기 (기본값: true) */
  autoCloseOnComplete?: boolean;
}

export default function DateCalendar({
  value,
  onApply,
  placeholder = "요청 기간 선택",
  autoCloseOnComplete = true,
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

  // ✅ RESET 동기화: 부모에서 value가 바뀌면(selected 초기화 포함) 내부 상태/연도 동기화
  useEffect(() => {
    const ts = (d?: Date | null) =>
      d instanceof Date ? new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime() : null;

    const nextStart = value?.start ?? null;
    const nextEnd = value?.end ?? null;

    if (ts(selected.start) !== ts(nextStart) || ts(selected.end) !== ts(nextEnd)) {
      setSelected({ start: nextStart, end: nextEnd });
      // 시작일이 있으면 그 연도로, 없으면 현재 연도로
      setYear(nextStart?.getFullYear() ?? new Date().getFullYear());
    }
  }, [value?.start, value?.end]); // ← 부모 값 변화에만 반응

  // 날짜 클릭 로직: 새 시작 → 초기화 / 두 번째 클릭 → end 확정
  const handleDayClick = (day: Date) => {
    if (!selected.start || (selected.start && selected.end)) {
      setSelected({ start: day, end: null });
      return;
    }
    if (selected.start && !selected.end) {
      if (day < selected.start) {
        setSelected({ start: day, end: null });
      } else {
        const next = { start: selected.start, end: day };
        setSelected(next);
        onApply?.(next);
        if (autoCloseOnComplete) {
          // 이벤트 버블/리렌더 타이밍 충돌 방지
          setOpen(false);
        }
      }
    }
  };

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
            <ArrowPrev dir="prev" onClick={() => setYear((y) => y - 1)} />
            <span>{year}</span>
            <ArrowNext dir="next" onClick={() => setYear((y) => y + 1)} />
          </Header>

          {/* 요일 헤더 */}
          <WeekdaysRow>
            {["일", "월", "화", "수", "목", "금", "토"].map((d) => (
              <span key={d}>{d}</span>
            ))}
          </WeekdaysRow>

          {/* 12개월 달력 */}
          <CalendarContainer>
            <MonthsContainer ref={monthsRef}>
              {Array.from({ length: 12 }).map((_, i) => {
                const monthStart = new Date(year, i, 1);
                const ts = (d: Date) =>
                  new Date(d.getFullYear(), d.getMonth(), d.getDate()).getTime();
                const inThisMonth = (d: Date) =>
                  d.getFullYear() === monthStart.getFullYear() &&
                  d.getMonth() === monthStart.getMonth();
  
                return (
                  <MonthBox key={i} className="month-box">
                    <MonthLabel>{String(i + 1).padStart(2, "0")}</MonthLabel>
  
                    <DayPicker
                      mode="single"
                      month={monthStart}
                      selected={undefined} // ← 내부 .rdp-selected 완전히 비활성화
                      onDayClick={handleDayClick}
                      showOutsideDays={false}
                      // ✨ 월 한정 함수 modifiers: 이 달 셀만 칠함 → rdp-hidden/outside 배제
                      modifiers={{
                        start: (d) =>
                          !!selected.start &&
                          inThisMonth(d) &&
                          ts(d) === ts(selected.start),
  
                        end: (d) =>
                          !!selected.end &&
                          inThisMonth(d) &&
                          ts(d) === ts(selected.end),
  
                        middle: (d) => {
                          if (!selected.start || !selected.end) return false;
                          if (!inThisMonth(d)) return false; // 빈칸/다른 달 제외
                          const t = ts(d),
                            s = ts(selected.start),
                            e = ts(selected.end);
                          return t > s && t < e;
                        },
                        // ✅ 오늘: 이 달 내부 셀에만 today 클래스 부여
                        todayInMonth: (d) => {
                          const now = new Date();
                          return (
                          inThisMonth(d) &&
                          d.getFullYear() === now.getFullYear() &&
                          d.getMonth() === now.getMonth() &&
                          d.getDate() === now.getDate()
                        );
                        },
                      }}
                      modifiersClassNames={{
                        start: "sel-start",
                        end: "sel-end",
                        middle: "sel-mid",
                        todayInMonth: "sel-today",
                      }}
                    />
                  </MonthBox>
                );
              })}
            </MonthsContainer>
          </CalendarContainer>
        </CalendarWrap>
      )}
    </Field>
  );
}

/* ===== styled ===== */
const Field = styled.div`
  position: relative;
  width: 200px;
  height: 48px;
  margin-right: 8px;
  font-family: 'Pretendard';
`;

const InputLike = styled.input`
  width: 100%;
  padding: 11.5px 12px;
  border: 1px solid ${({ theme }) => theme?.colors?.gray02 || "#d0d5dd"};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 15px;
  cursor: pointer;

  &::placeholder {
    color: ${({ theme }) => theme?.colors?.black};
  }
  
  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme?.colors?.black || "#111"};
  }
`;

const CalendarContainer = styled.div`
  overflow-y: auto;
  max-height: 320px;

  /* ===== Firefox ===== */
  scrollbar-width: thin;
  scrollbar-color: ${({ theme }) => theme?.colors?.gray03 || "#c9ced6"}
                    transparent;

  &::-webkit-scrollbar {
    width: 10px !important;
  }

  /* ===== WebKit (Chrome/Edge/Safari) ===== */
  &::-webkit-scrollbar-button {
    display: none !important;
    width: 0 !important;
    height: 0 !important;
    background: transparent !important;
    border: none !important;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: ${({ theme }) => theme?.colors?.gray04 || "#aeb4be"};
  }
`;

const CalendarWrap = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 10px;
  z-index: 100;
  width: 330px;
  max-height: 444px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

const Header = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  height: 46px;
  font-weight: 700;
  font-size: 15px;
  background-color: ${({ theme }) => theme?.colors?.gray02};
`;

/** 공통 베이스 */
const ArrowBase = styled.button`
  width: 48px;
  height: 100%;
  background-image: url(${CalendarArrow});
  background-repeat: no-repeat;
`;

/** 이전/다음 화살표 */
const ArrowPrev = styled(ArrowBase)``;
const ArrowNext = styled(ArrowBase)`
  background-position: -50px 0;  /* 오른쪽 프레임만 노출 */
`;

const WeekdaysRow = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  height: 40px;
  font-size: 12px;
  padding: 0 11px;
  border-bottom: 1px solid ${({ theme }) => theme?.colors?.gray03};

  span {
    flex: 1;
    font-size: 15px;
    font-weight: 700;
    text-align: center;
    color: #757575;
  }
`;

const MonthsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding-left: 12px;
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
    font-size: 13px;
    line-height: 31px;
    border: none;
    text-align: center;
    cursor: pointer;

    & button {
      width: 100%;
      padding: 6px 0;
      font-family: 'Pretendard';
    }
  }

  /* ✅ 오늘 날짜 강조 */
  .sel-today {
    background-color: ${({ theme }) => theme?.colors?.black};
    font-weight: 700;

    button {
      color: ${({ theme }) => theme?.colors?.white01};
    }
  }

  /* ❶ 라이브러리 기본 range 클래스 전부 무력화 (혹시 붙어도 표시 안 되게) */
  .rdp-range_start,
  .rdp-range_middle,
  .rdp-range_end {
    background: none !important;
    color: inherit !important;
  }

  /* ❷ 클래스만 색칠 */
  .sel-start,
  .sel-end,
  .sel-mid {
    background-color: ${({ theme }) => theme?.colors?.red} !important;

    & button {
      color: ${({ theme }) => theme?.colors?.white01};
    }
  }
`;

const MonthLabel = styled.div`
  font-size: 16px;
  font-weight: 700;
  margin-top: 20px;
  padding-left: 15px;
  color: ${({ theme }) => theme?.colors?.black};
`;

const GlobalDayPickerOverride = createGlobalStyle`
  .rdp-month_caption, .rdp-weekday, .rdp-nav {
    display: none !important;
  }
`;
