import styled from "styled-components";

interface MyRequestItemProps {
  item: {
    status: string;
    count: number;
  };
}


export default function MyRequestItem({ item }: MyRequestItemProps) {
  return (
    <ItemWrap status={item.status}>
      <Status>{item.status}</Status>
      <StatusCount status={item.status}>{item.count}</StatusCount>
    </ItemWrap>
  )
}

const ItemWrap = styled.li<{ status: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({ theme }) => theme.colors.black};

  background-color: ${({ status, theme }) => {
    switch (status) {
      case "대기중":
        return theme.colors.beige01; // 연한 주황
      case "작업중":
        return theme.colors.lightpupple; // 연한 파랑
      case "완료":
        return theme.colors.gray04; // 연한 회색
      default:
        return "#f9f9f9"; // 기본 회색
    }
  }};
`;

const Status = styled.span`
  font-size: 16px;
  font-weight: 500;
`;

const StatusCount = styled.span<{ status: string }>`
  position: relative;
  font-size: 14px;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -41px;
    display: block;
    width: 1px;
    height: 18px;
    transform: translateY(-50%);

    background-color: ${({ status, theme }) => {
      switch (status) {
        case "대기중":
          return theme.colors.orange;
        case "작업중":
          return theme.colors.blue01;
        case "완료":
          return theme.colors.gray02;
        default:
          return theme.colors.gray03;
      }
    }};
  }
`;