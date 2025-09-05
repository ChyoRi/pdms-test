import styled from "styled-components";
import Requester from "./Requester";
import Designer from "./Designer";
import Manager from "./Manager";
import { useSearchParams } from "react-router-dom"; // ★ 추가
import { useEffect } from "react"; // ★ 추가

interface MainProps {
  userRole: number | null;
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
  setDetailData: (data: RequestData) => void;
}

// 전역 타입과 동일해야 함
type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

export default function Main({ userRole, setIsDrawerOpen, setEditData, setDetailData }: MainProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = (searchParams.get("view") || "dashboard") as ViewType;

  // view 파라미터 기본값 강제 주입 (직접 /main 진입 시)
  useEffect(() => { // ★ 추가
    if (!searchParams.get("view")) {
      setSearchParams(prev => {
        const sp = new URLSearchParams(prev);
        sp.set("view", "dashboard");
        return sp;
      }, { replace: true });
    }
  }, []);

  // ✅ 권한별 컴포넌트 렌더링
  const renderComponent = () => {
    if (userRole === 1) return <Requester view={view} setIsDrawerOpen={setIsDrawerOpen} setEditData={setEditData} setDetailData={setDetailData} />;
    if (userRole === 2) return <Designer view={view} setIsDrawerOpen={setIsDrawerOpen} setDetailData={setDetailData} />;
    if (userRole === 3) return <Manager view={view} setIsDrawerOpen={setIsDrawerOpen} setDetailData={setDetailData} />;
  }

  return <Container>{renderComponent()}</Container>;
}

const Container = styled.main`
  height: calc(100% - 64px);
`;