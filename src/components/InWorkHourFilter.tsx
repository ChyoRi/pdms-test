import styled from "styled-components";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

// ★ 변경: 연도/월 둘 다 외부에서 제어
type Props = {
  year: number;                          // 예: 2024
  month: number;                         // 0(1월) ~ 11(12월)
  onChangeYear: (year: number) => void;
  onChangeMonth: (month: number) => void;
};

// 월 라벨
const monthOptions = Array.from({ length: 12 }, (_, i) => `${i + 1}월`);

export default function InWorkHourFilter({
  year,
  month,
  onChangeYear,
  onChangeMonth,
}: Props) {
  // ★ 추가: 기준 연도 근처 5년을 기본으로 보여주고, 선택 연도는 무조건 포함
  const currentYear = new Date().getFullYear();
  const base = Math.min(year, currentYear);
  const yearCandidates = Array.from({ length: 5 }, (_, i) => base - 2 + i);

  const yearSet = new Set<number>([...yearCandidates, year]);
  const yearOptions = Array.from(yearSet).sort((a, b) => a - b);

  return (
    <FilterWrap>
      {/* 연도 선택 */}
      <SelectBox
        value={year}
        onChange={(e) => onChangeYear(Number(e.target.value))}
      >
        {yearOptions.map((y) => (
          <option key={y} value={y}>
            {y}년
          </option>
        ))}
      </SelectBox>

      {/* 월 선택 */}
      <SelectBox
        value={month}
        onChange={(e) => onChangeMonth(Number(e.target.value))}
      >
        {monthOptions.map((label, idx) => (
          <option key={idx} value={idx}>
            {label}
          </option>
        ))}
      </SelectBox>
    </FilterWrap>
  );
}

const FilterWrap = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  padding: 24px 0 30px;
  font-size: 14px;
`;

const SelectBox = styled.select`
  appearance: none;
  -webkit-appearance: none;
  -moz-appearance: none;

  width: 125px;
  height: 48px;
  margin-right: 8px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ theme }) => theme.colors.white01};
  background-image: url(${selectBoxArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;
