import styled from "styled-components";
import Requester from "./Requester";
import Designer from "./Designer";
import Manager from "./Manager";

interface MainProps {
  userRole: number | null;
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData | null) => void;
}

export default function Main({ userRole, setIsDrawerOpen, setEditData }: MainProps) {
  // ✅ 권한별 컴포넌트 렌더링
  const renderComponent = () => {
    if (userRole === 1) return <Requester setIsDrawerOpen={setIsDrawerOpen} setEditData={setEditData} />;
    if (userRole === 2) return <Designer />;
    if (userRole === 3) return <Manager />;
  }

  return <Container>{renderComponent()}</Container>;
}

const Container = styled.main``;