import styled from "styled-components"
import { useNavigate, useLocation } from "react-router-dom";
import asideLogo from "../assets/aside-logo.svg"
import myrequestIcon from "../assets/myrequest-icon.svg"
import MyRequestItem from "../components/MyRequestItem"
import Footer from "./Footer"

interface RequestData {
  status?: string;
  completion_date?: any; // 게이트 용
}

interface AsideProps {
  requests: RequestData[];
  role: number | null;
  userName: string;
  onRequestButtonClick: () => void;
  onClickStatus?: (status: string) => void;
}

type Bucket = { status: string; count: number };

// 모든 화면에서 공통으로 쓸 원본 상태 라벨(서버/DB 기준)
const RAW = {
  WAIT: "대기",
  PROG: "진행중",
  REQ:  "검수요청",
  REV:  "검수중",
  REVISION: "수정",
  DONE: "완료",
  CAN:  "취소",
} as const;

// 월 비교 + 관대 파서
const isSameMonth = (d: Date, base = new Date()) =>
  d.getFullYear() === base.getFullYear() && d.getMonth() === base.getMonth();

const toMidnight = (d: Date) => new Date(d.getFullYear(), d.getMonth(), d.getDate());
const parseLoose = (v: any): Date | null => {
  if (!v) return null;
  if (typeof v === "object" && typeof v.toDate === "function") return toMidnight(v.toDate());
  if (v instanceof Date) return toMidnight(v);
  if (typeof v === "number") return toMidnight(new Date(v));
  if (typeof v === "string") {
    const s = v.replace(/\./g, "-").replace(/\//g, "-");
    const parts = s.split("-");
    if (parts.length === 3) {
      const [a,b,c] = parts.map(Number);
      const y = a > 31 ? a : new Date().getFullYear(); // '11-14-..' 같은 이상 포맷 보호
      return toMidnight(new Date(y, b - 1, c));
    }
    if (parts.length === 2) {
      const [m, d] = parts.map(Number);
      const y = new Date().getFullYear();             // ★ 연도 보정
      return toMidnight(new Date(y, m - 1, d));
    }
    const dt = new Date(v);
    return isNaN(+dt) ? null : toMidnight(dt);
  }
  return null;
};

// 규칙 2·3 게이트
const applyCompletionGate = (list: RequestData[]) => {
  const today = new Date();
  return list.filter((r) => {
    const status = String(r.status ?? "").trim();
    const isDoneOrCancel = status === "완료" || status === "취소";

    // ★ alias 모두 체크(혹시 대시보드에서 안 실려와도 안전)
    const cd =
      parseLoose((r as any).completion_date) ||
      parseLoose((r as any).complete_date) ||
      parseLoose((r as any).completion_dt) ||
      parseLoose((r as any).completed_at) ||
      null;

    const completedThisMonth = cd ? isSameMonth(cd, today) : false;

    // 2) 이번 달 완료/취소 → 상태 무관 포함
    if (completedThisMonth) return true;

    // 3) 이번 달이 아니면 완료/취소는 제외, 그 외는 유지
    if (isDoneOrCancel) return false;

    return true;
  });
};


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
        { status: "수정",     count: getCount([RAW.REVISION]) },
        { status: "완료",     count: getCount([RAW.DONE]) },
        { status: "취소",     count: getCount([RAW.CAN]) },
      ];

    // 디자이너: 대기 / 진행중 / 검수요청(검수요청+검수중) / 완료 / 취소
    case 2:
      return [
        { status: "대기",     count: getCount([RAW.WAIT]) },
        { status: "진행중",   count: getCount([RAW.PROG]) },
        { status: "검수요청", count: getCount([RAW.REQ, RAW.REV]) },
        { status: "수정",     count: getCount([RAW.REVISION]) },
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
        { status: "수정",     count: getCount([RAW.REVISION]) },
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
        { status: "수정",     count: getCount([RAW.REVISION]) },
        { status: "완료",     count: getCount([RAW.DONE]) },
        { status: "취소",     count: getCount([RAW.CAN]) },
      ];
  }
};

const mapSidebarStatusToFilterValue = (role: number | null, status: string): string => {
  // 매니저 화면에서는 검수중/검수요청이 뒤바뀐 상태라 한 번 swap
  if (role === 3) {
    if (status === "검수중") return "검수요청"; // 실제 DB상의 검수요청
    if (status === "검수요청") return "검수중"; // 실제 DB상의 검수중
  }
  // 요청자/디자이너는 화면 라벨 그대로 필터 값으로 사용
  return status;
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

export default function Aside({ requests, role, userName, onRequestButtonClick, onClickStatus }: AsideProps) {
  const gated = applyCompletionGate(requests);
  const statusList = makeStatusBuckets(role, gated as any[]);

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <AsideFrame>
      <AsideTopFrame>
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
              <MyRequestItem 
                key={item.status} 
                item={item} 
                onClickStatus={(s) => {
                  const filterValue = mapSidebarStatusToFilterValue(role, s);

                  // view 만 맞춰주고 status 파라미터는 항상 제거
                  const sp = new URLSearchParams(location.search);
                  sp.set("view", "myrequestlist");   // 리스트 화면으로 전환
                  sp.delete("status");              // URL 에는 status 안 남기기

                  navigate({ pathname: "/main", search: sp.toString() });

                  // 기존 부모 필터 콜백도 그대로 호출
                  onClickStatus?.(filterValue);
                }}
              />
            ))}
          </MyRequestList>
        </MyRequestWrap>
      </AsideTopFrame>
      <Footer />
    </AsideFrame>
  )
}

const AsideFrame = styled.aside`
  ${({ theme }) => theme.mixin.flex('', 'space-between')};
  flex-direction: column;
  width: 240px;
  height: 100%;
  border-right: 1px solid ${({ theme }) => theme.colors.black};
`;

const AsideTopFrame = styled.div`
  
`;

const AsideLogoWrap = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'center')};
  padding: 18.5px 0;
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
  text-align: center;
  padding: 32px 0;
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
  font-size: 17px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
`;

const MyRequestList = styled.ul`
  ${({ theme }) => theme.mixin.flex('center')};
  flex-direction: column;
`;