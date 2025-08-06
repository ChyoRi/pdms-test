import styled from "styled-components"
import asideLogo from "../assets/aside-logo.svg"
import myrequestIcon from "../assets/myrequest-icon.svg"
import MyRequestItem from "../components/MyRequestItem"

interface RequestData {
  id: string;
  design_request_id: string;
  status: string;
}

interface AsideProps {
  requests: RequestData[];
}

export default function Aside({ requests }: AsideProps) {
  return (
    <AsideFrame>
      <AsideLogoWrap>
        <AsideLogo src={asideLogo} />
        <AsideTitle>업무 관리시스템</AsideTitle>
      </AsideLogoWrap>
      <RequestFormButtonWrap>
        <RequestFormButton>디자인 요청 등록</RequestFormButton>
      </RequestFormButtonWrap>
      <MyRequestWrap>
        <MyRequestTitleWrap>
          <MyRequestIcon src={myrequestIcon} />
          <MyRequestTitle>나의 요청</MyRequestTitle>
        </MyRequestTitleWrap>
        <MyRequestList>
          {requests.length > 0 ? (
            requests.slice(0, 5).map(item => (
              <MyRequestItem key={item.id} design_request_id={item.design_request_id} status={item.status} />
            ))
          ) : (
            <EmptyMessage>나의 요청이 없습니다.</EmptyMessage>
          )}
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

const MyRequestWrap = styled.div``;

const MyRequestTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center')};
  gap: 12px;
  padding: 24px 30px;
`;

const MyRequestIcon = styled.img``;

const MyRequestTitle = styled.h4`
  font-family: 'Pretendard';
  font-size: 20px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const MyRequestList = styled.ul``;

const EmptyMessage = styled.div`
  text-align: center;
  color: #999;
  font-size: 14px;
`