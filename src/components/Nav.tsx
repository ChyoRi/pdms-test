import styled from "styled-components";
import { useSearchParams } from "react-router-dom";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

export default function Nav() {
  const [searchParams, setSearchParams] = useSearchParams(); // ★ 추가
  const view = (searchParams.get("view") || "dashboard") as ViewType; // ★ 추가

  const go = (v: ViewType) => { // ★ 추가
    setSearchParams(prev => {
      const sp = new URLSearchParams(prev);
      sp.set("view", v);
      return sp;
    });
  };

  return (
    <NavFrame>
      <MainMenuList>
        <MainMenuItem>
          <MainMenuItemButton 
            type="button"
            onClick={() => go("allrequestlist")} // ★ 변경
            $active={view === "allrequestlist"} // ★ 추가
          >
            전체 요청 리스트
          </MainMenuItemButton>
        </MainMenuItem>
        <MainMenuItem>
          <MainMenuItemButton
            type="button"
            onClick={() => go("myrequestlist")} // ★ 변경
            $active={view === "myrequestlist"} // ★ 추가
          >
            나의 요청 리스트
          </MainMenuItemButton>
        </MainMenuItem>
        <MainMenuItem>
          <MainMenuItemButton 
            type="button"
            onClick={() => go("dashboard")} // ★ 변경 (기본 대시보드)
            $active={view === "dashboard"} // ★ 추가
          >
            전체 현황
          </MainMenuItemButton>
        </MainMenuItem>
        <MainMenuItem>
          <MainMenuItemButton type="button"
            onClick={() => go("inworkhour")} // ★ 변경
            $active={view === "inworkhour"} // ★ 추가
          >
            내부 공수
          </MainMenuItemButton>
        </MainMenuItem>
      </MainMenuList>
    </NavFrame>
  )
}

const NavFrame = styled.nav`
  font-family: 'Pretendard';
`;

const MainMenuList = styled.ul`
  ${({ theme }) => theme.mixin.flex("center", "flex-start")};
  gap: 0 20px;
`;

const MainMenuItem = styled.li`
  
`;

const MainMenuItemButton = styled.button<{ $active?: boolean }>`
  color: ${({ theme, $active }) => ($active ? theme.colors.white01 : theme.colors.gray02)};
  font-weight: 500;
  
  &:hover {
    color: ${({ theme }) => theme.colors.white01};
  }
`;