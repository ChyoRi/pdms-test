import styled from "styled-components";
import RequestFilter from "./RequestFilter";
import RequestSearch from "./RequestSearch";

export default function RequestFilterSearchWrap({
  onApplyStatus,
}: {
  onApplyStatus: (status: string) => void;
}) {
  return (
    <Container>
      <RequestFilter onApplyStatus={onApplyStatus} />
      <RequestSearch />
    </Container>
  )
}

const Container = styled.div`
  padding: 24px 48px 30px;
`;