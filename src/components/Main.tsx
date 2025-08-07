import styled from "styled-components";
import Requester from "./Requester";
import Designer from "./Designer";
import Manager from "./Manager";

interface MainProps {
  userRole: number | null;
}

export default function Main({ userRole }: MainProps) {
  // ✅ 권한별 컴포넌트 렌더링
  const renderComponent = () => {
    if (userRole === 1) return <Requester />;
    if (userRole === 2) return <Designer />;
    if (userRole === 3) return <Manager />;
  }

  return <Container>{renderComponent()}</Container>;
}

const Container = styled.main``;