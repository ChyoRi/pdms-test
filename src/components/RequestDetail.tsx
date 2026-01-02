import styled from "styled-components"
import requestFormExitButton from "../assets/requestformexit-button.svg";
import RequestDeliver from "./RequestDeliver";
import Comment from "./Comment";
import { useLayoutEffect, useMemo, useRef, useState } from "react";

interface RequestDetailProps {
  data: RequestData;
  onClose: () => void;
  currentUserName?: string;
  currentUserRole?: number; // (1: 요청자, 2: 디자이너, 3+: 매니저 등 가정)
}

export default function RequestDetail({ data, onClose, currentUserName, currentUserRole }: RequestDetailProps) {
  // 날짜 포맷 함수
  const formatDate = (timestamp: any) => {
    if (!timestamp) return "-";
    if (timestamp.toDate) {
      const date = timestamp.toDate();
      return `${date.getMonth() + 1}/${date.getDate()}`;
    }
    return timestamp;
  };

  const parseUrls = (raw?: any): string[] => {
    if (!raw) return [];

    // 이미 배열로 저장되어 있는 경우까지 커버
    if (Array.isArray(raw)) {
      return Array.from(
        new Set(
          raw
            .map(String)
            .map((s) => s.trim())
            .filter(Boolean)
        )
      );
    }

    const text = String(raw);

    // 1) 가장 정확: http/https URL을 정규식으로 직접 추출
    const httpMatches = text.match(/https?:\/\/[^\s<>"']+/g) || [];

    const clean = (u: string) =>
      u
        .trim()
        // 뒤에 붙는 흔한 문장부호 제거
        .replace(/[)\]}>,.;:!?]+$/g, "");

    let urls = httpMatches.map(clean).filter(Boolean);

    // 2) http URL이 하나도 없으면, 줄바꿈/공백/쉼표로 토큰 분리 후 보정
    // (예: drive.google.com/... 처럼 프로토콜 없이 붙여넣은 경우)
    if (urls.length === 0) {
      const tokens = text
        .split(/[\n\r\t ]+|,+/g)
        .map((t) => t.trim())
        .filter(Boolean);

      urls = tokens
        .map(clean)
        .map((t) => {
          // 프로토콜 없는 대표 케이스들만 보정 (과잉 매칭 방지)
          if (/^https?:\/\//i.test(t)) return t;
          if (/^(www\.)/i.test(t)) return `https://${t}`;
          if (/^drive\.google\.com\//i.test(t)) return `https://${t}`;
          if (/^docs\.google\.com\//i.test(t)) return `https://${t}`;
          return ""; // URL 확신 없으면 버림
        })
        .filter(Boolean);
    }

    // 중복 제거
    return Array.from(new Set(urls));
  };

  // 완료/취소 여부
  const isEnded = data?.status === "완료" || data?.status === "취소";

  // 전달 UI 토글 (요청자에게만 노출)
  const canTransfer =
    currentUserName &&
    currentUserName === data?.requester &&
    (currentUserRole === 1) &&// 요청자만 허용
    !isEnded;

  // 렌더 전에 한번만 파싱
  const urlList = useMemo(() => parseUrls(data?.url), [data?.url]);

  // "내용이 넘쳐서 잘릴 때만" hover 확장 허용
  const urlWrapRef = useRef<HTMLDivElement | null>(null);
  const [enableUrlHover, setEnableUrlHover] = useState(false);

  const URL_COLLAPSED_MAX = 50;

  useLayoutEffect(() => {
    const el = urlWrapRef.current;
    if (!el) {
      setEnableUrlHover(false);
      return;
    }

    const checkOverflow = () => {
      // ★ 변경: clientHeight(hover로 변하는 값) 기준 말고,
      //         접힌 상태 기준값(50px)으로만 overflow 여부 판단
      const isOverflow = el.scrollHeight > URL_COLLAPSED_MAX + 1;
      setEnableUrlHover(isOverflow);
    };

    checkOverflow();

    const ro = new ResizeObserver(() => checkOverflow());
    ro.observe(el);

    requestAnimationFrame(checkOverflow);

    return () => ro.disconnect();
  }, [urlList.join("\n")]);

  return (
    <>
      <RequestDetailWrap>
        <RequestTitleWrap>
          <RequestTitle>디자인 요청 상세</RequestTitle>
          <RequestExitButton type="button" onClick={onClose} />
        </RequestTitleWrap>
        <RequestDetailTable>
          <RequestDetailTableCaption>디자인 요청 상세</RequestDetailTableCaption>
          <colgroup>
            <col style={{ width: "120px" }} />
            {canTransfer && (
              <>
                <col style={{ width: "190px"}} />
                <col style={{ width: "120px"}} />
              </>
            )}
          </colgroup>
          <tbody>
            <tr>
              <RequestDetailTableTh>문서번호</RequestDetailTableTh>
              <RequestDetailTableTd>{data?.design_request_id}</RequestDetailTableTd>
              {canTransfer && (
                <>
                  <RequestDetailTableTh>문서전달</RequestDetailTableTh>
                  <RequestDeliverTd>
                    <RequestDeliverWrap>
                      {/* <span className="name">{data?.requester || "-"}</span> */}
                        <RequestDeliver
                          // 전달에 필요한 최소 정보 전달
                          designRequestId={data?.design_request_id}           // 비즈니스 키
                          currentRequester={data?.requester || ""}
                          company={data?.company || ""}                       // data.company 없는 경우를 대비해 컴포넌트 내부에서 보강
                          status={data?.status}
                          onDone={() => {
                            // 성공 시 UI 반응은 간단하게: 상세는 실시간 snapshot으로 최신 반영될 가능성이 높음
                            // 필요하면 토스트 사용 가능(여기서는 간단히 alert)
                            alert("요청자 변경 완료");
                          }}
                        />
                    </RequestDeliverWrap>
                  </RequestDeliverTd>
                </>
              )}
            </tr>
            <tr>
              <RequestDetailTableTh>요청일</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{formatDate(data?.request_date)}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>완료 요청일</RequestDetailTableTh>
              <RequestListcompletionTd colSpan={3}>{formatDate(data?.completion_date)}</RequestListcompletionTd>
            </tr>
            <tr>
              <RequestDetailTableTh>오픈일</RequestDetailTableTh>
              <RequestListOpenDtTd colSpan={3}>{formatDate(data?.open_date)}</RequestListOpenDtTd>
            </tr>
            <tr>
              <RequestDetailTableTh>담당 MD</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{data?.merchandiser || ""}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>업무 부서</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{data?.task_form}</RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>업무 유형</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>
                <RequestDetailTaskType>{data?.task_type}</RequestDetailTaskType>
                {data?.task_type_detail && (
                  <>
                    <RequestDetailTaskTypeArrow>＞</RequestDetailTaskTypeArrow>
                    <RequestDetailTaskTypeDetail>{data?.task_type_detail}</RequestDetailTaskTypeDetail>
                  </>
                )}
              </RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>작업 항목</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>
                <Requirement>
                  {data?.requirement}
                </Requirement>
              </RequestDetailTableTd>
            </tr>
            <tr>
              <RequestDetailTableTh>긴급 일정</RequestDetailTableTh>
              <RequestDetailTableTd colSpan={3}>{data?.emergency ? "긴급 일정으로 설정" : "긴급 일정으로 설정 안함"}</RequestDetailTableTd>
            </tr>
            {/* ★ 변경: urlList 2개 이상일 때만 hover 확장 클래스 부여 */}
            <tr className={`urlRow ${enableUrlHover ? "urlHover" : ""}`}>
              <RequestUrlTh>
                <UrlThInner>요청서 URL</UrlThInner>
              </RequestUrlTh>

              <RequestUrlTd colSpan={3}>
                <UrlTdInner>
                  {urlList.length > 0 ? (
                    <UrlListWrap ref={urlWrapRef}>
                      {urlList.map((u, idx) => (
                        <UrlLink
                          key={`${u}-${idx}`}
                          className="urlLink"
                          href={u} // ★ 변경: 무조건 그대로 href
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {u}
                        </UrlLink>
                      ))}
                    </UrlListWrap>
                  ) : (
                    ""
                  )}
                </UrlTdInner>
              </RequestUrlTd>
            </tr>
          </tbody>
        </RequestDetailTable>
      </RequestDetailWrap>
      <Comment
        // 문서번호로 부모 문서 찾아서 그 아래 서브컬렉션 사용
        designRequestId={data?.design_request_id!}   // 필수
        currentUserName={currentUserName || ""}      // 작성자 이름
        status={data?.status}
      />
    </>
  );
}

const RequestDetailWrap = styled.div`
`;

const RequestTitleWrap = styled.div`
  ${({ theme }) => theme.mixin.flex("center", "space-between")};
  margin-bottom: 24px;
`;

const RequestTitle = styled.h3`
  font-family: "Pretendard";
  font-size: 24px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.black};
  letter-spacing: -0.48px;
`;

const RequestExitButton = styled.button`
  width: 24px;
  height: 24px;
  background: url(${requestFormExitButton}) no-repeat center;
  background-size: contain;
`;

const RequestUrlTh = styled.th` /* ★ 추가 */
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
  position: relative; /* inner absolute 기준 */
  padding: 0;         /* 중앙 정렬을 inner에서 처리 */
`;

const RequestUrlTd = styled.td` /* ★ 추가 */
  border-right: none;
  position: relative; /* inner absolute 기준 */
  overflow: visible;  /* hover 확장 시 아래로 덮이게 */
  padding-left: 0;    /* 기존 td padding-left(24px) 대신 inner에서 처리 */
`;

const UrlThInner = styled.div` /* ★ 추가 */
  height: 45px;            /* 기본 행 높이 */
  display: flex;           /* ★ th 텍스트 중앙 */
  align-items: center;     /* ★ 수직 중앙 */
  justify-content: center; /* ★ 수평 중앙 */
`;

const UrlTdInner = styled.div`
  height: 45px;
  padding-top: 0;
  overflow: hidden; /* ★ 추가: 기본은 닫아두고 hover에서 visible */
`;

const UrlListWrap = styled.div`
  padding-right: 6px;
`;

const RequestDetailTable = styled.table`
  width: 100%;
  border-top: 1px solid ${({ theme }) => theme.colors.black};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray02};
  color: ${({ theme }) => theme.colors.black};
  font-family: "Pretendard";

  th,
  td {
    height: 45px;
    border-bottom: none;
  }

  td {
    padding-left: 24px;
    border-left: none;
  }

  tr.urlRow {
    position: relative;
    z-index: 1;
  }

  tr.urlRow.urlHover:hover,
  tr.urlRow.urlHover:focus-within {
    z-index: 9998;
  }

  tr.urlRow.urlHover:hover ${UrlTdInner},
  tr.urlRow.urlHover:focus-within ${UrlTdInner} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    min-height: 220px;
    z-index: 10000;
    background: #fff;
    padding-left: 24px;
    padding-top: 12px;
    padding-bottom: 12px;
    overflow: visible !important;
  }

  tr.urlRow.urlHover:hover ${UrlListWrap},
  tr.urlRow.urlHover:focus-within ${UrlListWrap} {
    max-height: none !important;
    overflow: visible !important;
  }

  tr.urlRow.urlHover:hover .urlLink,
  tr.urlRow.urlHover:focus-within .urlLink {
    display: block !important;
  }
`;

const RequestDetailTableCaption = styled.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const RequestDetailTableTh = styled.th`
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
`;

const RequestDetailTableTd = styled.td`
  border-right: none;
`;

const RequestDeliverTd = styled.td`
  padding: 0 24px;
  border-right: none;
`

const RequestListcompletionTd = styled.td`
  border-right: none;
  color: ${({ theme }) => theme.colors.red};
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
`;

const RequestListOpenDtTd = styled.td`
  border-right: none;
  color: ${({ theme }) => theme.colors.blue02};
  font-family: 'Pretendard';
  font-size: 15px;
  font-weight: 500;
`;

const RequestDetailTaskType = styled.span`
`;

const RequestDetailTaskTypeArrow = styled.span`
  margin: 0 5px;
`;

const RequestDetailTaskTypeDetail = styled.span`
  
`;

const Requirement = styled.p`
  max-height: 50px;
  overflow-y: auto;
`;

const UrlLink = styled.a` /* ★ 변경 */
  display: block;
  -webkit-box-orient: vertical;
  word-break: break-word;
`;

const RequestDeliverWrap = styled.div`
  .name {
    font-weight: 600;
  }
`;
