import styled from "styled-components";

interface MyRequestItemProps {
  item: {
    status: string;
    count: number;
  };
  onClickStatus?: (status: string) => void;
}

export default function MyRequestItem({ item, onClickStatus }: MyRequestItemProps) {
  const handleClick = () => {                // ★ 추가
    if (!item.count) return;                // 0건이면 무시
    onClickStatus?.(item.status);
  };

  return (
    <ItemWrap status={item.status} onClick={handleClick} $clickable={item.count > 0}>
      <Status>{item.status}</Status>
      <StatusCount status={item.status}>{item.count}</StatusCount>
    </ItemWrap>
  )
}

/** 상태별 사이드바 색상 톤 */
const getBgColor = (status: string, theme: any) => {
  switch (status) {
    case "대기":
      return theme.colors.beige01;      // 연한 주황
    case "진행중":
      return theme.colors.lightpupple;  // 연한 파랑
    case "검수요청":
    case "검수중":
      return theme.colors.pink03;       // 연한 핑크
    case "수정":
      return "#efe9fb";                 // 배경 (Requester 리스트 배지 톤과 통일)
    case "완료":
      return theme.colors.gray04;       // 연한 회색
    case "취소":
      return theme.colors.gray07;       // 더 옅은 회색
    default:
      return "#f9f9f9";
  }
};

const getBarColor = (status: string, theme: any) => {
  switch (status) {
    case "대기":
      return theme.colors.orange;
    case "진행중":
      return theme.colors.blue01;
    case "검수요청":
    case "검수중":
      return theme.colors.red;
    case "수정":
      return "#6f42c1";
    case "완료":
      return theme.colors.gray02;
    case "취소":
      return theme.colors.gray03;
    default:
      return theme.colors.gray03;
  }
};

const StatusCount = styled.span<{ status: string }>`
  position: relative;
  width: 10px;
  font-size: 14px;
  font-weight: 700;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -40px;
    display: block;
    width: 1px;
    height: 18px;
    transform: translateY(-50%);
    background-color: ${({ status, theme }) => getBarColor(status, theme)};
  }
`;

const ItemWrap = styled.li<{ status: string; $clickable?: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 20.5px 44px 20.5px 28px;
  margin-bottom: 8px;
  border-radius: 4px;
  font-family: 'Pretendard';
  color: ${({ theme }) => theme.colors.black};
  background-color: ${({ status, theme }) => getBgColor(status, theme)};
  cursor: ${({ $clickable }) => ($clickable ? "pointer" : "default")};

  &:hover {
    ${({ $clickable }) =>
      $clickable &&
      `
        opacity: 0.9;
        ${StatusCount} {
          text-decoration: underline;
        }
      `}
  }
`;

const Status = styled.span`
  font-size: 16px;
  font-weight: 500;
`;