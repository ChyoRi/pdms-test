import styled from "styled-components"
import { useMemo } from "react";
import { useSearchParams } from "react-router-dom";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

interface MainTitleProps {
  userRole: number | null; // 1: 요청자, 2: 디자이너, 3: 매니저
}

export default function MainTitle({ userRole }: MainTitleProps) {
  const [params] = useSearchParams();
  const view = (params.get("view") || "dashboard") as ViewType;

  const role = (userRole ?? 1);

  // 역할별 라벨 매핑
  const VIEW_LABEL = useMemo<Record<ViewType, string>>(() => {
    const common = {
      dashboard: "전체 현황",
      inworkhour: "내부 공수",
    } as const;

    if (role === 2) {
      // 디자이너
      return {
        ...common,
        myrequestlist: "나의 작업 리스트",
        allrequestlist: "전체 작업 리스트",
      };
    }
    if (role === 3) {
      // 매니저: 단일 라벨 통일
      return {
        ...common,
        myrequestlist: "요청 리스트",
        allrequestlist: "요청 리스트",
      };
    }
    // 요청자(기본)
    return {
      ...common,
      myrequestlist: "나의 요청 리스트",
      allrequestlist: "전체 요청 리스트",
    };
  }, [role]);

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return (
    <MainTitleWrap>
      <MainTitleText>{year}년 {month}월 디자인 {VIEW_LABEL[view]}</MainTitleText>
    </MainTitleWrap>
  );
}

const MainTitleWrap = styled.div`
  padding: 29px 48px;
  background-color: ${({ theme }) => theme.colors.gray08};
`;

const MainTitleText = styled.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;