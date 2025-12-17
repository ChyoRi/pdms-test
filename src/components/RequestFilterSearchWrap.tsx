import styled from "styled-components";
import RequestFilter from "./RequestFilter";
import RequestSearch from "./RequestSearch";

export default function RequestFilterSearchWrap({
  onApplyStatus,
  onApplyRange,
  onSearch,
  keyword,
  onKeywordChange,
  // ⬇️ 매니저만 사용
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
  onSearch: (keyword: string) => void;       // 버튼 클릭 시 적용
  keyword: string;                            // 입력값(타이핑용)
  onKeywordChange: (v: string) => void;    
  isManager?: boolean;
  requesterOptions?: string[];
  onApplyRequester?: (name: string) => void;
  designerOptions?: string[];
  companyOptions?: string[];
  onApplyCompany?: (name: string) => void;
  onApplyDesigner?: (name: string) => void;
  roleNumber?: number | null;
  onResetFilters?: () => void;
  resetKey?: number;
  deptOptions?: string[];
  onApplyDept?: (dept: string) => void;
}) {
  return (
    <Container>
      <RequestFilter 
        onApplyStatus={onApplyStatus} 
        onApplyRange={onApplyRange} 
        isManager={isManager} 
        requesterOptions={requesterOptions} 
        onApplyRequester={onApplyRequester}
        designerOptions={designerOptions}
        companyOptions={companyOptions}
        onApplyCompany={onApplyCompany}
        onApplyDesigner={onApplyDesigner}
        roleNumber={roleNumber}
        onResetFilters={onResetFilters}
        resetKey={resetKey}
        deptOptions={deptOptions}
        onApplyDept={onApplyDept}
      />
      <RequestSearch keyword={keyword} onKeywordChange={onKeywordChange} onSearch={onSearch} />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  width: 100%;
  padding: 24px 0 30px;
`;