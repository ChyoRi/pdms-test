import styled from "styled-components";
import selectBoxArrow from "../assets/selectbox-arrow.svg";

export type Period = "day" | "week" | "month";

type YM = { y: number; m: number };

// ★ 추가: companies 문서 타입(필요한 필드만)
export type CompanyDoc = {
  id: string;
  company_name: string;
  logo_url?: string;
  signup_active?: boolean;
  avail_hour?: number;
};

interface DashBoardFilterProps {
  // 권한/모드
  roleReady: boolean;
  isRequester: boolean;

  // ★ 변경: 기존 fixed 탭 대신 동적 탭
  companyMode: string;
  companyDocs: CompanyDoc[];
  setCompanyMode: React.Dispatch<React.SetStateAction<string>>;

  // 모드 분기
  isAll: boolean;

  // 년/월(월 화면용)
  ym: YM;
  setYM: React.Dispatch<React.SetStateAction<YM>>;
  nowYear: number;

  // 기간 탭(전체 화면용)
  period: Period;
  setPeriod: React.Dispatch<React.SetStateAction<Period>>;
  periodLabel?: string;
}

export default function DashBoardFilter({
  roleReady,
  isRequester,
  companyMode,
  companyDocs,
  setCompanyMode,
  isAll,
  ym,
  setYM,
  nowYear,
  period,
  setPeriod,
  periodLabel,
}: DashBoardFilterProps) {
  return (
    <DashBoardFilterWrap>
      {/* 회사 탭 */}
      {roleReady && !isRequester && (
        <CompanyToggleWrap>
          {/* ★ 변경: companies 문서 기반으로 버튼 생성 (pushcomz 제외는 상위에서 처리) */}
          {companyDocs.map((c) => (
            <CompanyToggleButton
              key={c.id}
              $active={companyMode === c.id}
              onClick={() => setCompanyMode(c.id)}
              title={c.id}
            >
              {c.company_name}
            </CompanyToggleButton>
          ))}

          {/* ★ 유지: 전체 버튼은 고정 */}
          <CompanyToggleButton $active={companyMode === "all"} onClick={() => setCompanyMode("all")}>
            전체
          </CompanyToggleButton>
        </CompanyToggleWrap>
      )}

      {/* 요청자/회사별: 년/월 셀렉트 / 운영 전체: 일·주·월 탭 */}
      {!isAll ? (
        <DateSelectBoxWrap>
          <SelectBox value={ym.y} onChange={(e) => setYM((p) => ({ ...p, y: Number(e.target.value) }))}>
            {Array.from({ length: 5 }).map((_, i) => {
              const y = nowYear - 2 + i;
              return (
                <option key={y} value={y}>
                  {y}년
                </option>
              );
            })}
          </SelectBox>

          <SelectBox value={ym.m} onChange={(e) => setYM((p) => ({ ...p, m: Number(e.target.value) }))}>
            {Array.from({ length: 12 }).map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}월
              </option>
            ))}
          </SelectBox>
        </DateSelectBoxWrap>
      ) : (
        <PeriodTabsWrap>
          <PeriodTab $active={period === "day"} onClick={() => setPeriod("day")}>
            일
          </PeriodTab>
          <PeriodTab $active={period === "week"} onClick={() => setPeriod("week")}>
            주
          </PeriodTab>
          <PeriodTab $active={period === "month"} onClick={() => setPeriod("month")}>
            월
          </PeriodTab>
          <span className="range">{periodLabel}</span>
        </PeriodTabsWrap>
      )}
    </DashBoardFilterWrap>
  );
}

/* ───────── styled (필터 전용) ───────── */
const DashBoardFilterWrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  width: 100%;
  padding: 24px 0 30px;
`;

const CompanyToggleWrap = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
`;

const CompanyToggleButton = styled.button<{ $active?: boolean }>`
  min-width: 98px;
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  border: 1px solid ${({ $active }) => ($active ? "#111" : "#D0D5DD")};
  background: ${({ $active }) => ($active ? "#111" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
  font-family: "Pretendard";
  font-size: 14px;
  font-weight: 600;
  letter-spacing: -0.2px;
  transition: all 0.15s ease;
  box-shadow: ${({ $active }) => ($active ? "0 1px 3px rgba(0,0,0,0.08)" : "none")};

  &:hover {
    border-color: #111;
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(17, 17, 17, 0.12);
  }
`;

const DateSelectBoxWrap = styled.div`
  margin-left: auto;
`;

const SelectBox = styled.select`
  appearance: none;
  width: 150px;
  height: 44px;
  margin-right: 8px;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 4px;
  font-family: "Pretendard";
  font-size: 16px;
  font-weight: 400;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white01} url(${selectBoxArrow}) no-repeat right 12px center / 16px 16px;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.black};
  }
`;

/* 전체 탭 전용: 기간 탭 */
const PeriodTabsWrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center")};
  gap: 8px;
  margin-left: auto;

  .range {
    margin-left: 12px;
    color: #667085;
    font-size: 14px;
  }
`;

const PeriodTab = styled.button<{ $active?: boolean }>`
  padding: 10px 14px;
  border-radius: 8px;
  font-family: "Pretendard";
  font-size: 15px;
  background: ${({ $active }) => ($active ? "#111" : "#fff")};
  color: ${({ $active }) => ($active ? "#fff" : "#111")};
  border: 1px solid #111;
  transition: all 0.15s ease;
`;