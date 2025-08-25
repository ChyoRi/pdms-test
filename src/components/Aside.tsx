import styled from "styled-components"
import asideLogo from "../assets/aside-logo.svg"
import myrequestIcon from "../assets/myrequest-icon.svg"
import MyRequestItem from "../components/MyRequestItem"

interface RequestData {
  status?: string;
}

interface AsideProps {
  requests: RequestData[];
  role: number | null;
  userName: string;
  onRequestButtonClick: () => void;
}

type Bucket = { status: string; count: number };

// 모든 화면에서 공통으로 쓸 원본 상태 라벨(서버/DB 기준)
const RAW = {
  WAIT: "대기",
  PROG: "진행중",
  REQ:  "검수요청",
  REV:  "검수중",
  DONE: "완료",
  CAN:  "취소",
} as const;

const makeStatusBuckets = (
  role: number | null,
  requests: { status?: string }[]
): Bucket[] => {
  const getCount = (labels: string[]) =>
    requests.reduce((acc, r) => (r.status && labels.includes(r.status) ? acc + 1 : acc), 0);

  switch (role) {
    // 요청자: 대기 / 진행중(진행중+검수요청) / 검수중 / 완료 / 취소
    case 1:
      return [
        { status: "대기",     count: getCount([RAW.WAIT]) },
        { status: "진행중",   count: getCount([RAW.PROG, RAW.REQ]) },
        { status: "검수중",   count: getCount([RAW.REV]) },
        { status: "완료",     count: getCount([RAW.DONE]) },
        { status: "취소",     count: getCount([RAW.CAN]) },
      ];

    // 디자이너: 대기 / 진행중 / 검수요청(검수요청+검수중) / 완료 / 취소
    case 2:
      return [
        { status: "대기",     count: getCount([RAW.WAIT]) },
        { status: "진행중",   count: getCount([RAW.PROG]) },
        { status: "검수요청", count: getCount([RAW.REQ, RAW.REV]) },
        { status: "완료",     count: getCount([RAW.DONE]) },
        { status: "취소",     count: getCount([RAW.CAN]) },
      ];

    // 매니저: 대기 / 진행중 / 검수요청(=raw 검수중) / 검수중(=raw 검수요청) / 완료 / 취소
    case 3:
      return [
        { status: "대기",     count: getCount([RAW.WAIT]) },
        { status: "진행중",   count: getCount([RAW.PROG]) },
        { status: "검수중",   count: getCount([RAW.REQ]) }, // flip
        { status: "검수요청", count: getCount([RAW.REV]) }, // flip
        { status: "완료",     count: getCount([RAW.DONE]) },
        { status: "취소",     count: getCount([RAW.CAN]) },
      ];

    // 기타/초기값: 그냥 원본 상태 그대로 6종 집계
    default:
      return [
        { status: "대기",     count: getCount([RAW.WAIT]) },
        { status: "진행중",   count: getCount([RAW.PROG]) },
        { status: "검수요청", count: getCount([RAW.REQ]) },
        { status: "검수중",   count: getCount([RAW.REV]) },
        { status: "완료",     count: getCount([RAW.DONE]) },
        { status: "취소",     count: getCount([RAW.CAN]) },
      ];
  }
};

const getRoleTitle = (role: number | null, name: string): string => {
  switch (role) {
    case 1:
      return `${name}님의 요청`;
    case 2:
      return `${name}님의 작업 현황`;
    case 3:
      return "전체 요청 현황";
    default:
      return "요청 현황";
  }
};

export default function Aside({ requests, role, userName, onRequestButtonClick }: AsideProps) {
  const statusList = makeStatusBuckets(role, requests);

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
          <MyRequestTitle>{getRoleTitle(role, userName)}</MyRequestTitle>
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
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
`;

const AsideLogoWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  padding: 19.5px 23px;
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
  padding: 32px 20px;
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