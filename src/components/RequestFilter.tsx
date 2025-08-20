import { useState } from "react";
import styled from "styled-components"
import selectBoxArrow from "../assets/selectbox-arrow.svg";
import DateCalendar from "./DateCalendar";

export default function RequestSearch({
  onApplyStatus,
}: {
  onApplyStatus: (status: string) => void;
}) {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>({start: null, end: null });
  const [status, setStatus] = useState("진행 상태 선택");

  return (
    <Container>
      <DateCalendar
        value={range}
        minDate={new Date()}
        onApply={(r) => {
          setRange(r);
          console.log("적용된 기간:", r);
        }}
      />

      {/* <SelectBox aria-label="작업 담당자 선택">
        <option>작업 담당자 선택</option>
        <option>이영철</option>
        <option>홍길동</option>
        <option>김디자이너</option>
      </SelectBox> */}

      <SelectBox value={status} onChange={(e) => setStatus(e.target.value)}>
        <option>진행 상태 선택</option>
        <option value="대기">대기</option>
        <option value="진행중">진행중</option>
        <option value="검수요청">검수요청</option>
        <option value="완료">완료</option>
        <option value="취소">취소</option>
      </SelectBox>
      <FilterButton type="button" onClick={() => onApplyStatus(status)}>필터 적용</FilterButton>
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
`;

const SelectBox = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 200px;
  margin-right: 8px;
  padding: 11px 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white01};
  background-image: url(${selectBoxArrow}); // ✅ 직접 제작한 화살표 아이콘 경로
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

const FilterButton = styled.button`
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01}
`;