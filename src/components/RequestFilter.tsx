import { useState, useEffect, useMemo } from "react";
import styled from "styled-components"
import selectBoxArrow from "../assets/selectbox-arrow.svg";
import DateCalendar from "./DateCalendar";

const DEFAULT_STATUS = "진행 상태 선택";
const DEFAULT_REQUESTER = "요청자 선택";
const DEFAULT_DESIGNER = "디자이너 선택";
const DEFAULT_COMPANY = "회사 선택";
const DEFAULT_DEPT = "부서 선택";
const EXCLUDED_COMPANIES = new Set(["PushComz"].map(s => s.toLowerCase()));
const EMPTY_RANGE = { start: null, end: null };

type RoleKey = "requester" | "designer" | "manager";

const toRoleKey = (num?: number | null): RoleKey =>
  num === 3 ? "manager" : num === 2 ? "designer" : "requester";

// 역할별 셀렉트 옵션 (요청자는 5개)
const STATUS_OPTIONS: Record<RoleKey, string[]> = {
  requester: [DEFAULT_STATUS, "대기", "진행중", "검수중", "수정", "완료", "취소"],
  manager:   [DEFAULT_STATUS, "대기", "진행중", "검수중", "검수요청", "수정", "완료", "취소"],
  designer:  [DEFAULT_STATUS, "대기", "진행중", "검수요청", "수정", "완료", "취소"],
};

// 역할별(=매니저) 셀렉트 표시값 → 실제 필터값 매핑
const mapSelectToFilterValue = (role: RoleKey, v: string) => {
  if (role === "manager") {
    if (v === "검수중") return "검수요청";
    if (v === "검수요청") return "검수중";
  }
  return v;
};

// 별(★) 붙은 허수 계정 필터
const isFakeDesignerName = (name: unknown) => {
  const s = String(name ?? "").trim();
  if (!s) return true;
  return s.includes("★");
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
  roleNumber,
  onResetFilters,
  resetKey,
  deptOptions = [],
  onApplyDept
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
  onResetFilters?: () => void;
  resetKey?: number;
  deptOptions?: string[];
  onApplyDept?: (dept: string) => void;
}) {
  const [range, setRange] = useState<{ start: Date | null; end: Date | null }>(EMPTY_RANGE);
  const [status, setStatus] = useState(DEFAULT_STATUS);
  const [requester, setRequester] = useState(DEFAULT_REQUESTER);
  const [designer, setDesigner] = useState(DEFAULT_DESIGNER);
  const [company, setCompany]   = useState(DEFAULT_COMPANY);
  const [dept, setDept]         = useState(DEFAULT_DEPT);

  const roleKey = toRoleKey(roleNumber);
  const visibleStatuses = STATUS_OPTIONS[roleKey];

  // 디자이너 옵션 정리(★ 계정 제거)
  const visibleDesignerOptions = useMemo(() => {
    return (designerOptions || [])
      .map(v => String(v).trim())
      .filter(v => !isFakeDesignerName(v));
  }, [designerOptions]);

  // deptOptions가 바뀌면, 현재 선택값이 옵션에 없을 때 자동 리셋 (UI/필터 싱크 유지)
  useEffect(() => {
    if (roleKey !== "requester") return;
    if (dept === DEFAULT_DEPT) return;

    const list = (deptOptions || []).map(v => String(v).trim()).filter(Boolean);
    if (!list.includes(dept)) {
      setDept(DEFAULT_DEPT);
      onApplyDept?.(DEFAULT_DEPT);
    }
  }, [deptOptions, roleKey, dept])

  // 디자이너 옵션이 바뀌면, 현재 선택값이 "★계정/미존재"일 때 자동 리셋
  useEffect(() => {
    if (!isManager) return;
    if (designer === DEFAULT_DESIGNER) return;

    // 현재 선택값이 ★ 포함이거나, 필터링 후 옵션에 없으면 리셋
    if (isFakeDesignerName(designer) || !visibleDesignerOptions.includes(designer)) {
      setDesigner(DEFAULT_DESIGNER);
      onApplyDesigner?.(DEFAULT_DESIGNER);
    }
  }, [isManager, designer, visibleDesignerOptions]);

  // 외부에서 resetKey 가 바뀌면 UI 필터값 초기화
  useEffect(() => {
    if (resetKey === undefined) return;

    const nextRange = EMPTY_RANGE;

    // 1) 자기 자신 UI 초기화
    setStatus(DEFAULT_STATUS);
    setRange(nextRange);
    setRequester(DEFAULT_REQUESTER);
    setDesigner(DEFAULT_DESIGNER);
    setCompany(DEFAULT_COMPANY);
    setDept(DEFAULT_DEPT);

    // 2) 부모 필터 상태도 같이 초기화
    onApplyStatus(DEFAULT_STATUS);
    onApplyRange(nextRange);
    onApplyRequester?.(DEFAULT_REQUESTER);
    onApplyDesigner?.(DEFAULT_DESIGNER);
    onApplyCompany?.(DEFAULT_COMPANY);
    onApplyDept?.(DEFAULT_DEPT);
  }, [resetKey]);

  const reset = () => {
    setStatus(DEFAULT_STATUS);
    setRange(EMPTY_RANGE);
    setRequester(DEFAULT_REQUESTER);
    setDesigner(DEFAULT_DESIGNER);
    setCompany(DEFAULT_COMPANY);
    setDept(DEFAULT_DEPT);
    onApplyStatus(DEFAULT_STATUS);
    onApplyRange(EMPTY_RANGE);
    onApplyRequester?.(DEFAULT_REQUESTER);
    onApplyDesigner?.(DEFAULT_DESIGNER);
    onApplyCompany?.(DEFAULT_COMPANY);
    onApplyDept?.(DEFAULT_DEPT);
    onResetFilters?.();
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

      {/* ★ 회사 셀렉트: 요청자(role=1)는 숨김, 그 외(디자이너/매니저)만 표시 */}
      {roleKey !== "requester" && (
        <SelectBox
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

      {/* ★ 요청자 전용: 부서(업무부서) 필터 셀렉트 */}
      {roleKey === "requester" && (
        <SelectBox
          value={dept}
          onChange={(e) => {
            const v = e.target.value;
            setDept(v);
            onApplyDept?.(v);
          }}
        >
          <option value={DEFAULT_DEPT}>{DEFAULT_DEPT}</option>
          {(deptOptions || [])
            .map(v => String(v).trim())
            .filter(Boolean)
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
              onApplyDesigner?.(v);
            }}
          >
            <option value={DEFAULT_DESIGNER}>{DEFAULT_DESIGNER}</option>

            {/* ★ 변경: 별(★) 붙은 허수 디자이너 제거된 목록만 렌더 */}
            {visibleDesignerOptions.map((name) => (
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

  width: 135px;
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