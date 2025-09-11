import styled from "styled-components"

interface ExportCSVProps {
  onClick: () => void;
  loading?: boolean;
  label?: string;
}

export default function ExportCSV({ onClick, loading, label = "Export CSV" }: ExportCSVProps) {
  return (
    <ExportButton type="button" onClick={onClick} disabled={!!loading}>
      {loading ? "추출 중…" : label}
    </ExportButton>
  )
}

const ExportButton = styled.button`
  margin-bottom: 10px;
  padding: 8px 12px;
  border-radius: 4px;
  border: 1px solid ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white01};
  font-size: 14px;
  &:disabled { opacity: 0.5; pointer-events: none; }
`;