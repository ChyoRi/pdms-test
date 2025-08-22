import { useState } from "react";
import styled from "styled-components"
import selectBoxArrow from "../assets/selectbox-arrow.svg";
import DateCalendar from "./DateCalendar";

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_REQUESTER = "요청자 선택";
const DEFAULT_DESIGNER = "디자이너 선택";
const EMPTY_RANGE = { start: null, end: null };

export default function RequestSearch({
  onApplyStatus,
  onApplyRange,
  isManager = false,
  requesterOptions = [],
  onApplyRequester,
  designerOptions = [],
  onApplyDesigner,
}: {
  onApplyStatus: (status: string) => void;
  onApplyRange: (range: { start: Date | null; end: Date | null }) => void;
  isManager?: boolean;
  requesterOptions?: string[];
  onApplyRequester?: (name: string) => void;
  designerOptions?: string[];
  onApplyDesigner?: (name: string) => void;
}) {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>(EMPTY_RANGE);
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const [requester, setRequester] = useState(DEFAULT_REQUESTER);
  const [designer, setDesigner] = useState(DEFAULT_DESIGNER);

  const reset = () => {
    setStatus(DEFAULT_STATUS);
    setRange(EMPTY_RANGE);
    setRequester(DEFAULT_REQUESTER);
    setDesigner(DEFAULT_DESIGNER);                // ★ 추가
    onApplyStatus(DEFAULT_STATUS);
    onApplyRange(EMPTY_RANGE);
    onApplyRequester?.(DEFAULT_REQUESTER);
    onApplyDesigner?.(DEFAULT_DESIGNER);          // ★ 추가
  };

  return (
    <Container>
      <DateCalendar
        value={range}
        onApply={(r) => {
          setRange(r);
          onApplyRange(r);
        }}
      />

      {isManager && (
        <>
          <SelectBox
            aria-label="요청자 선택"
            value={requester}
            onChange={(e) => {
              setRequester(e.target.value);
              onApplyRequester?.(e.target.value);
            }}
          >
            <option value={DEFAULT_REQUESTER}>{DEFAULT_REQUESTER}</option>
            {requesterOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </SelectBox>

          <SelectBox
            aria-label="디자이너 선택"
            value={designer}
            onChange={(e) => {
              const v = e.target.value;
              setDesigner(v);
              onApplyDesigner?.(v);  // ★ 즉시 반영
            }}
          >
            <option value={DEFAULT_DESIGNER}>{DEFAULT_DESIGNER}</option>
            {designerOptions.map((name) => (
              <option key={name} value={name}>
                {name}
              </option>
            ))}
          </SelectBox>
        </>
      )}

      <SelectBox
        value={status}
        onChange={(e) => {
          const v = e.target.value;
          setStatus(v);
          onApplyStatus(v); // ★ 즉시 적용
        }}>
        <option value={DEFAULT_STATUS}>{DEFAULT_STATUS}</option>
        <option value="대기">대기</option>
        <option value="진행중">진행중</option>
        <option value="검수요청">검수요청</option>
        <option value="완료">완료</option>
        <option value="취소">취소</option>
      </SelectBox>
      <ResetButton type="button" onClick={reset}>초기화</ResetButton>
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
  background-image: url(${selectBoxArrow});
  background-repeat: no-repeat;
  background-position: right 12px center;
  background-size: 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

const ResetButton = styled.button`
  padding: 12.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
`