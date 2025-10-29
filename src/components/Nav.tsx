import styled from "styled-components";
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

interface NavProps {
  userRole: number | null; // 1: 요청자, 2: 디자이너, 3: 담당자(매니저)
}

export default function Nav({ userRole }: NavProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = (searchParams.get("view") || "dashboard") as ViewType;

  const go = (v: ViewType) => {
    setSearchParams(prev => {
      const sp = new URLSearchParams(prev);
      sp.set("view", v);
      return sp;
    });
  };

  const role = userRole ?? 1;
  const isManager = role === 3;

  // ★ 역할별 라벨 매핑
  const labels = useMemo(() => {
    switch (role) {
      case 1: // 요청자
        return { my: "요청 리스트", all: "전체 요청 리스트" };
      case 2: // 디자이너
        return { my: "작업 리스트", all: "전체 작업 리스트" };
      case 3: // 매니저
        return { my: "요청 리스트", all: "" }; // 매니저는 단일 메뉴
      default:
        return { my: "요청 리스트", all: "전체 요청 리스트" };
    }
  }, [role]);

  // ★ 변경: 매니저의 단일 메뉴 타깃을 myrequestlist 로 고정
  const firstTarget: ViewType = isManager ? "myrequestlist" : "myrequestlist";

  // ★ 매니저는 두 번째(전체) 버튼 숨김
  const showSecond = !isManager;

  return (
    <NavFrame>
      <MainMenuList>
        {/* 1) 첫 버튼: 라벨만 역할별로 변경, 매니저는 myrequestlist 로 이동 */}
        <MainMenuItem>
          <MainMenuItemButton
            type="button"
            onClick={() => go(firstTarget)}
            $active={view === firstTarget}
          >
            {labels.my}
          </MainMenuItemButton>
        </MainMenuItem>

        {/* 2) 두 번째 버튼: 요청자/디자이너만 노출 */}
        {showSecond && (
          <MainMenuItem>
            <MainMenuItemButton
              type="button"
              onClick={() => go("allrequestlist")}
              $active={view === "allrequestlist"}
            >
              {labels.all}
            </MainMenuItemButton>
          </MainMenuItem>
        )}

        {/* 3) 공통: 전체 현황 */}
        <MainMenuItem>
          <MainMenuItemButton
            type="button"
            onClick={() => go("dashboard")}
            $active={view === "dashboard"}
          >
            전체 현황
          </MainMenuItemButton>
        </MainMenuItem>

        {/* 4) 매니저 전용: 내부 공수 */}
        {isManager && (
          <MainMenuItem>
            <MainMenuItemButton
              type="button"
              onClick={() => go("inworkhour")}
              $active={view === "inworkhour"}
            >
              내부 공수
            </MainMenuItemButton>
          </MainMenuItem>
        )}
      </MainMenuList>
    </NavFrame>
  );
}

const NavFrame = styled.nav``;

const MainMenuList = styled.ul`
  ${({ theme }) => theme.mixin.flex("center", "flex-start")};
  gap: 0 20px;
`;

const MainMenuItem = styled.li``;

const MainMenuItemButton = styled.button<{ $active?: boolean }>`
  color: ${({ theme, $active }) => ($active ? theme.colors.white01 : theme.colors.gray02)};
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;

  &:hover {
    color: ${({ theme }) => theme.colors.white01};
  }
`;