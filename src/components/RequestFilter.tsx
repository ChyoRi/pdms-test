import { useState } from "react";
import styled from "styled-components"
import selectBoxArrow from "../assets/selectbox-arrow.svg";
import DateCalendar from "./DateCalendar";

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_REQUESTER = "요청자 선택";
const DEFAULT_DESIGNER = "디자이너 선택";
const DEFAULT_COMPANY = "회사 선택";
const EXCLUDED_COMPANIES = new Set(["PushComz"].map(s => s.toLowerCase()));
const EMPTY_RANGE = { start: null, end: null };

type RoleKey = "requester" | "designer" | "manager";

const toRoleKey = (num?: number | null): RoleKey =>
  num === 3 ? "manager" : num === 2 ? "designer" : "requester";

// 역할별 셀렉트 옵션 (요청자는 5개)
const STATUS_OPTIONS: Record<RoleKey, string[]> = {
  requester: [DEFAULT_STATUS, "대기", "진행중", "검수중", "완료", "취소"],
  manager:   [DEFAULT_STATUS, "대기", "진행중", "검수중", "검수요청", "완료", "취소"],
  designer:  [DEFAULT_STATUS, "대기", "진행중", "검수요청", "완료", "취소"],
};

// ★ 추가: 역할별(=매니저) 셀렉트 표시값 → 실제 필터값 매핑
const mapSelectToFilterValue = (role: RoleKey, v: string) => {
  if (role === "manager") {
    if (v === "검수중") return "검수요청";
    if (v === "검수요청") return "검수중";
  }
  return v;
};

export default function RequestFilter({
  onApplyStatus,
  onApplyRange,
  isManager = false,
  requesterOptions = [],
  onApplyRequester,
  designerOptions = [],
  companyOptions = [],
  onApplyCompany,
  onApplyDesigner,
  roleNumber
}: {
  onApplyStatus: (status: string) => void;
  onApplyRange: (range: { start: Date | null; end: Date | null }) => void;
  isManager?: boolean;
  requesterOptions?: string[];
  onApplyRequester?: (name: string) => void;
  designerOptions?: string[];
  companyOptions?: string[];
  onApplyDesigner?: (name: string) => void;
  onApplyCompany?: (company: string) => void;
  roleNumber?: number | null;
}) {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>(EMPTY_RANGE);
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const [requester, setRequester] = useState(DEFAULT_REQUESTER);
  const [designer, setDesigner] = useState(DEFAULT_DESIGNER);
  const [company, setCompany]   = useState(DEFAULT_COMPANY);

  const reset = () => {
    setStatus(DEFAULT_STATUS);
    setRange(EMPTY_RANGE);
    setRequester(DEFAULT_REQUESTER);
    setDesigner(DEFAULT_DESIGNER);                // ★ 추가
    setCompany(DEFAULT_COMPANY);
    onApplyStatus(DEFAULT_STATUS);
    onApplyRange(EMPTY_RANGE);
    onApplyRequester?.(DEFAULT_REQUESTER);
    onApplyDesigner?.(DEFAULT_DESIGNER);          // ★ 추가
    onApplyCompany?.(DEFAULT_COMPANY);
  };

  const roleKey = toRoleKey(roleNumber);
  const visibleStatuses = STATUS_OPTIONS[roleKey];

  return (
    <Container>
      <DateCalendar
        value={range}
        onApply={(r) => {
          setRange(r);
          onApplyRange(r);
        }}
      />

      {/* ★ 회사 셀렉트: 요청자(role=1)는 숨김, 그 외(디자이너/매니저)만 표시 */}
      {roleKey !== "requester" && (
        <SelectBox
          aria-label="회사 선택"
          value={company}
          onChange={(e) => {
            const v = e.target.value;
            setCompany(v);
            onApplyCompany?.(v);
          }}
        >
          <option value={DEFAULT_COMPANY}>{DEFAULT_COMPANY}</option>
          {(companyOptions || [])
            .filter(name => !!name && !EXCLUDED_COMPANIES.has(String(name).toLowerCase()))
            .map((name) => (
              <option key={name} value={name}>{name}</option>
            ))}
        </SelectBox>
      )}

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
          const uiValue = e.target.value;              // 화면에 보이는 값
          const filterValue = mapSelectToFilterValue(roleKey, uiValue); // DB 비교용
          setStatus(uiValue);
          onApplyStatus(filterValue);
        }}
      >
        {visibleStatuses.map((s) => (
          <option key={s} value={s}>{s}</option>
        ))}
      </SelectBox>
      <ResetButton type="button" onClick={reset}>필터 초기화</ResetButton>
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

  width: 150px;
  height: 48px;
  margin-right: 8px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
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
  padding: 11.5px 10px;
  border-radius: 4px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 400;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;
`