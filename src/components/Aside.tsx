import styled from "styled-components"
import asideLogo from "../assets/aside-logo.svg"
import myrequestIcon from "../assets/myrequest-icon.svg"
import MyRequestItem from "../components/MyRequestItem"

interface RequestData {
  status: string;
}

interface AsideProps {
  requests: RequestData[];
  role: number | null;
  onRequestButtonClick: () => void;
}

export default function Aside({ requests, role, onRequestButtonClick }: AsideProps) {
  const statusList = [
    {
      status: "대기중",
      count: requests.filter(r => r.status === "대기").length
    },
    {
      status: "작업중",
      count: requests.filter(r => r.status === "진행중").length
    },
    {
      status: "완료",
      count: requests.filter(r => r.status === "완료").length
    }
  ];

  const getRoleTitle = (role: number | null): string => {
    switch (role) {
      case 1:
        return "나의 요청";
      case 2:
        return "나의 작업 현황";
      case 3:
        return "전체 요청 현황";
      default:
        return "요청 현황";
    }
  };

  return (
    <AsideFrame>
      <AsideLogoWrap>
        <AsideLogo src={asideLogo} />
        <AsideTitle>업무 관리시스템</AsideTitle>
      </AsideLogoWrap>
      {role === 1 && (
        <RequestFormButtonWrap>
          <RequestFormButton onClick={onRequestButtonClick}>디자인 요청 등록</RequestFormButton>
        </RequestFormButtonWrap>
      )}
      <MyRequestWrap>
        <MyRequestTitleWrap>
          <MyRequestIcon src={myrequestIcon} />
          <MyRequestTitle>{getRoleTitle(role)}</MyRequestTitle>
        </MyRequestTitleWrap>
        <MyRequestList>
          {statusList.map((item) => (
            <MyRequestItem key={item.status} item={item} />
          ))}
        </MyRequestList>
      </MyRequestWrap>
    </AsideFrame>
  )
}

const AsideFrame = styled.aside`
  max-width: 240px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
`;

const AsideLogoWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  padding: 20px 24px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray02};
`;

const AsideLogo = styled.img`
  margin-right: 8px;
`;

const AsideTitle = styled.span`
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  white-space: nowrap;
`;

const RequestFormButtonWrap = styled.div`
  padding: 32.5px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray02};
`;

const RequestFormButton = styled.button`
  padding: 12px 44px;
  border-radius: 8px;
  font-family: 'Pretendard';
  font-size: 16px;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white01};
  white-space: nowrap;
`;

const MyRequestWrap = styled.div`
  padding: 0 24px;
`;

const MyRequestTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  gap: 12px;
  padding: 30px 0;
`;

const MyRequestIcon = styled.img``;

const MyRequestTitle = styled.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const MyRequestList = styled.ul`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;