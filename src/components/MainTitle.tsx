import styled from "styled-components"
import { useSearchParams } from "react-router-dom";

type ViewType = "dashboard" | "myrequestlist" | "allrequestlist" | "inworkhour";

const VIEW_LABEL: Record<ViewType, string> = {
  dashboard: "전체 현황",
  myrequestlist: "나의 요청 리스트",
  allrequestlist: "전체 요청 리스트",
  inworkhour: "내부 공수",
};

export default function MainTitle() {
  const [params] = useSearchParams();
  const view = (params.get("view") || "dashboard") as ViewType;

  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;

  return (
    <MainTitleWrap>
      <MainTitleText>{year}년 {month}월 디자인 {VIEW_LABEL[view]}</MainTitleText>
    </MainTitleWrap>
  )
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