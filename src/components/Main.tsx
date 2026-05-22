import styled from "styled-components";
import Requester from "./Requester";
import Designer from "./Designer";
import Manager from "./Manager";
import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";

// ★ 추가: MainPage에서 내려받는 DB 카운트 정보 타입
type DbCountInfo = {
  totalCount: number;
  readDocCount: number;
  unreadDocCount: number;
};

// ★ 추가: MainPage 기본 조회 중단 여부 판단용 필터 상태
type GlobalFilterState = {
  hasDateFilter: boolean;
  hasKeyword: boolean;
};

interface MainProps {
  userRole: number | null;
  requestRows: RequestData[];
  dbCountInfo: DbCountInfo;
  onGlobalFilterChange: (state: GlobalFilterState) => void;
  setIsDrawerOpen: (value: boolean) => void;
  setEditData: (data: RequestData) => void;
  setDetailData: (data: RequestData) => void;
  statusFromAside?: string | null;
  clearStatusFromAside?: () => void;
  filterResetKey?: number;
  onOpenAssignDesigner?: (target: RequestData) => void;
}

// ★ 요청자/디자이너가 실제로 볼 수 있는 view
type CommonViewType =
  | "dashboard"
  | "myrequestlist"
  | "allrequestlist";

// ★ 매니저까지 포함한 전체 view
type ViewType =
  | "dashboard"
  | "myrequestlist"
  | "allrequestlist"
  | "inworkhour"
  | "channelworkhour";

// ★ 추가: 요청자/디자이너에게 넘길 수 있는 view로 좁힘
const toCommonView = (view: ViewType): CommonViewType => {
  if (
    view === "dashboard" ||
    view === "myrequestlist" ||
    view === "allrequestlist"
  ) {
    return view;
  }

  // 요청자/디자이너가 접근할 수 없는 view면 기본값으로 보정
  return "dashboard";
};

export default function Main({ userRole, requestRows, dbCountInfo, onGlobalFilterChange, setIsDrawerOpen, setEditData, setDetailData, statusFromAside, clearStatusFromAside, filterResetKey, onOpenAssignDesigner }: MainProps) {
  const [searchParams, setSearchParams] = useSearchParams();
  const view = (searchParams.get("view") || "dashboard") as ViewType;

  // view 파라미터 기본값 강제 주입 (직접 /main 진입 시)
  useEffect(() => {
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
    if (userRole === 1) {
      // ★ 변경: 요청자는 CommonViewType만 받음
      const requesterView = toCommonView(view);

      return (
        <Requester
          view={requesterView}
          userRole={userRole}
          dbCountInfo={dbCountInfo}
          onGlobalFilterChange={onGlobalFilterChange}
          requestRows={requestRows}
          setIsDrawerOpen={setIsDrawerOpen}
          setEditData={setEditData}
          setDetailData={setDetailData}
          statusFromAside={statusFromAside}
          clearStatusFromAside={clearStatusFromAside}
          filterResetKey={filterResetKey}
        />
      );
    }

    if (userRole === 2) {
      // ★ 변경: 디자이너도 CommonViewType만 받음
      const designerView = toCommonView(view);

      return (
        <Designer
          view={designerView}
          userRole={userRole}
          dbCountInfo={dbCountInfo}
          onGlobalFilterChange={onGlobalFilterChange}
          requestRows={requestRows}
          setIsDrawerOpen={setIsDrawerOpen}
          setDetailData={setDetailData}
          statusFromAside={statusFromAside}
          clearStatusFromAside={clearStatusFromAside}
          filterResetKey={filterResetKey}
        />
      );
    }

    if (userRole === 3) {
      // ★ 매니저는 전체 view 가능
      return (
        <Manager
          view={view}
          userRole={userRole}
          dbCountInfo={dbCountInfo}
          onGlobalFilterChange={onGlobalFilterChange}
          requestRows={requestRows}
          setIsDrawerOpen={setIsDrawerOpen}
          setDetailData={setDetailData}
          statusFromAside={statusFromAside}
          clearStatusFromAside={clearStatusFromAside}
          filterResetKey={filterResetKey}
          onOpenAssignDesigner={onOpenAssignDesigner}
        />
      );
    }

    return null;
  };

  return <Container>{renderComponent()}</Container>;
}

const Container = styled.main`
  height: calc(100% - 64px);
`;