import styled from "styled-components";
import RequestFilter from "./RequestFilter";
import RequestSearch from "./RequestSearch";

export default function RequestFilterSearchWrap({
  onApplyStatus,
  onApplyRange
}: {
  onApplyStatus: (status: string) => void;
  onApplyRange: (range: { start: Date | null; end: Date | null }) => void;
}) {
  return (
    <Container>
      <RequestFilter onApplyStatus={onApplyStatus} onApplyRange={onApplyRange} />
      <RequestSearch />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 24px 48px 30px;
`;