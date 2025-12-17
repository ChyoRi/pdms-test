import styled from "styled-components";
import RequesterRequestItem from "./RequesterRequestItem";

interface RequestListProps {
  data: RequestData[];
  disableActions: boolean;
  lockOthers?: boolean;
  currentUserName?: string;
  userUid?: string; // ★ 추가
  onReviewComplete: (id: string) => void;
  onCancel: (id: string) => void;
  onEditClick: (id: string) => void;
  // ✅ 디테일 열기 콜백 추가: 메모/작업항목 클릭 시 사용
  onDetailClick: (item: RequestData) => void;
  readLocal: { [id: string]: number };
  // 수정요청
  onRequestRevision?: (id: string) => void;
}

export default function RequesterRequestList({ data, disableActions = false, lockOthers = false, currentUserName = "", userUid, readLocal, onReviewComplete, onCancel, onEditClick, onRequestRevision, onDetailClick }: RequestListProps) {
  return (
    <RequestListTableWrap>
      <RequestListTable>
        <RequestListTableCaption>요청 리스트</RequestListTableCaption>
        <colgroup>
          <col style={{ width: '3.177%' }} /><col style={{ width: '6.354%' }} />
          <col style={{ width: '3.812%' }} /><col style={{ width: '3.812%' }} />
          <col style={{ width: '3.812%' }} /><col style={{ width: '3.812%' }} />
          <col style={{ width: '6.354%' }} /><col style={{ width: '7.624%' }} />
          <col style={{ width: '16.776%' }} /><col style={{ width: '5.718%' }} />
          <col style={{ width: '5.718%' }} /><col style={{ width: '5.718%' }} />
          <col style={{ width: '5.401%' }} /><col style={{ width: '5.718%' }} />
          <col style={{ width: '6.354%' }} /><col style={{ width: '5.083%' }} />
          <col style={{ width: '5.083%' }} />
        </colgroup>
        <thead>
          <tr>
            <RequestListTableTh>번호</RequestListTableTh>
            <RequestListTableTh>문서번호</RequestListTableTh>
            <RequestListTableTh>요청일</RequestListTableTh>
            <RequestListTableTh>완료<br />요청일</RequestListTableTh>
            <RequestListTableTh>오픈일</RequestListTableTh>
            <RequestListTableTh>담당MD</RequestListTableTh>
            <RequestListTableTh>업무부서</RequestListTableTh>
            <RequestListTableTh>업무유형</RequestListTableTh>
            <RequestListTableTh>작업항목</RequestListTableTh>
            <RequestListTableTh>요청서<br />URL</RequestListTableTh>
            <RequestListTableTh>메모 Talk</RequestListTableTh>
            <RequestListTableTh>진행상태</RequestListTableTh>
            <RequestListTableTh>디자이너</RequestListTableTh>
            <RequestListTableTh>산출물<br />URL</RequestListTableTh>
            <RequestListTableTh>검수</RequestListTableTh>
            <RequestListTableTh>수정</RequestListTableTh>
            <RequestListTableTh>취소</RequestListTableTh>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => {
              const isMine = item.requester === currentUserName;
              const rowDisabled = disableActions || (lockOthers && !isMine); // ✨ 타인 글만 잠금
              return (
                <RequesterRequestItem
                  key={item.id}
                  index={index + 1}
                  item={item}
                  disableActions={rowDisabled}
                  userUid={userUid}
                  onReviewComplete={onReviewComplete}
                  onCancel={onCancel}
                  onEditClick={onEditClick}
                  onRequestRevision={onRequestRevision}
                  onDetailClick={onDetailClick}
                  localReadMs={readLocal[item.id]}
                />
              );
            })
          ) : (
            <tr>
              <td colSpan={17} style={{ textAlign: "center", padding: 20 }}>
                등록된 요청이 없습니다.
              </td>
            </tr>
          )}
        </tbody>
      </RequestListTable>
    </RequestListTableWrap>
  );
}

const RequestListTableWrap = styled.div`
  position: relative;
  /* height: calc(100% - 302px); */
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  overflow-y: auto;
  scrollbar-width: thin;
`;

const RequestListTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray02};
  text-align: center;
  transform: translateY(-2px);
`;

const RequestListTableCaption = styled.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;

const RequestListTableTh = styled.th`
  position: sticky;
  top: 1px;
  line-height: 16px;
  padding: 13px 0;
  border-right: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.gray08};
  z-index: 10;

  &:first-of-type {
    border-left: none;
  }

  &:last-of-type {
    border-right: none;
  }

  &:nth-of-type(12) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    /* border-right: 1px solid ${({ theme }) => theme.colors.pink02} */
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;