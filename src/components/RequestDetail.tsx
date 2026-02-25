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

  // ★ 추가: url_text 우선, 없으면 url 배열 fallback해서 "원문"을 만든다
  const urlTextForView = useMemo(() => {
    const t = (data as any)?.url_text;
    if (t && String(t).trim()) return String(t);

    const arr = (data as any)?.url;
    if (Array.isArray(arr) && arr.length) return arr.map(String).join("\n");

    // 혹시 url이 string으로 들어오는 케이스까지
    if (typeof arr === "string" && arr.trim()) return arr;

    return "";
  }, [data]);

  // ★ 추가: URL만 <a>, 나머지는 텍스트(span)로 렌더
  const URL_RE =
    /https?:\/\/[^\s<>"']+|www\.[^\s<>"']+|(?:docs|drive)\.google\.com\/[^\s<>"']+|figma\.com\/[^\s<>"']+/gi;

  const cleanUrl = (u: string) =>
    u
      .trim()
      .replace(/^[(\[{"'`]+/g, "")
      .replace(/[)\]}>"'`’‘,.;:!?]+$/g, "");

  const toHref = (u: string) => {
    const x = cleanUrl(u);
    if (!x) return "";
    if (/^https?:\/\//i.test(x)) return x;
    if (/^www\./i.test(x)) return `https://${x}`;
    return `https://${x}`;
  };

  const renderBodyWithLinks = (text: any) => {
    const lines = String(text ?? "").replace(/\r/g, "").split("\n");

    return lines.map((line, lineIdx) => {
      const nodes: React.ReactNode[] = [];
      let last = 0;

      for (const m of line.matchAll(URL_RE)) {
        const raw = m[0];
        const start = m.index ?? 0;
        const end = start + raw.length;

        if (start > last) nodes.push(line.slice(last, start));

        const href = toHref(raw);
        const label = cleanUrl(raw);

        if (href) {
          nodes.push(
            <UrlLink
              key={`url-${lineIdx}-${start}`}
              className="urlLink"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {label}
            </UrlLink>
          );
        } else {
          nodes.push(raw);
        }

        last = end;
      }

      if (last < line.length) nodes.push(line.slice(last));

      return (
        <span key={`line-${lineIdx}`}>
          {nodes}
          {lineIdx < lines.length - 1 ? <br /> : null}
        </span>
      );
    });
  };

  // 완료/취소 여부
  const isEnded = data?.status === "완료" || data?.status === "취소";

  // 전달 UI 토글 (요청자에게만 노출)
  const canTransfer =
    currentUserName &&
    currentUserName === data?.requester &&
    (currentUserRole === 1) &&// 요청자만 허용
    !isEnded;

  // ★ 변경: "URL만 리스트"를 더 이상 안쓴다 (원문 유지가 목표)
  // const urlList = useMemo(() => parseUrls(data?.url), [data?.url]);

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
      const isOverflow = el.scrollHeight > URL_COLLAPSED_MAX + 1;
      setEnableUrlHover(isOverflow);
    };

    checkOverflow();

    const ro = new ResizeObserver(() => checkOverflow());
    ro.observe(el);

    requestAnimationFrame(checkOverflow);

    return () => ro.disconnect();
    // ★ 변경: urlTextForView 기준으로 체크 (텍스트가 길어도 hover 필요)
  }, [urlTextForView]);

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
                      <RequestDeliver
                        designRequestId={data?.design_request_id}
                        currentRequester={data?.requester || ""}
                        company={data?.company || ""}
                        status={data?.status}
                        onDone={() => {
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

            {/* ★ 변경: url_text 원문을 그대로 보여주되, URL만 a로 처리 */}
            <tr className={`urlRow ${enableUrlHover ? "urlHover" : ""}`}>
              <RequestUrlTh>
                <UrlThInner>요청서 URL</UrlThInner>
              </RequestUrlTh>

              <RequestUrlTd colSpan={3}>
                <UrlTdInner>
                  {urlTextForView ? (
                    <UrlListWrap ref={urlWrapRef}>
                      {renderBodyWithLinks(urlTextForView)}
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
        designRequestId={data?.design_request_id!}
        currentUserName={currentUserName || ""}
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

const RequestUrlTh = styled.th`
  font-size: 15px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-left: none;
  background-color: ${({ theme }) => theme.colors.gray04};
  position: relative;
  padding: 0;
`;

const RequestUrlTd = styled.td`
  border-right: none;
  position: relative;
  overflow: visible;
  padding-left: 0;
`;

const UrlThInner = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const UrlTdInner = styled.div`
  height: 45px;
  padding-top: 0;
  overflow: hidden;
`;

const UrlListWrap = styled.div`
  padding-right: 6px;
  white-space: pre-wrap;      /* ★ 추가: 줄바꿈 유지 */
  overflow-wrap: anywhere;    /* ★ 추가: 긴 줄 줄바꿈 */
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
    display: inline; /* ★ 변경: renderBodyWithLinks 안에서 인라인/줄바꿈은 <br>로 처리 */
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
`;

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

const RequestDetailTaskType = styled.span``;

const RequestDetailTaskTypeArrow = styled.span`
  margin: 0 5px;
`;

const RequestDetailTaskTypeDetail = styled.span``;

const Requirement = styled.p`
  max-height: 50px;
  overflow-y: auto;
`;

// ★ 변경: a 스타일은 그대로 유지 (renderBodyWithLinks에서 사용)
const UrlLink = styled.a`
  display: inline;
  text-decoration: underline;
  word-break: break-word;
`;

const RequestDeliverWrap = styled.div`
  .name {
    font-weight: 600;
  }
`;