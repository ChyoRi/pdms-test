import styled from "styled-components"

export default function MainTitle() {
  const today = new Date();
  const year = today.getFullYear();
  const month = today.getMonth() + 1;
  const date = today.getDate();

  return (
    <MainTitleWrap>
      <MainTitleText>{year}년 {month}월 {date}일 디자인 편성 요청 스케줄</MainTitleText>
    </MainTitleWrap>
  )
}

const MainTitleWrap = styled.div`
  padding: 30px 48px;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const MainTitleText = styled.h2`
  font-family: 'Pretendard';
  font-size: 36px;
  font-weight: 700;
`;