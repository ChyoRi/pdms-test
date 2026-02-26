import styled from "styled-components";
import ManagerRequestItem from "./ManagerRequestItem";

interface ManagerRequestListProps {
  data: RequestData[];
  userUid?: string;
  sendToRequester: (requestId: string) => void;
  onDetailClick: (item: RequestData) => void;
  unassignDesigner: (requestId: string, payload: { uid?: string; name: string }) => void;
  readLocal: { [id: string]: number };
  onOpenAssignDesigner?: (target: RequestData) => void;
}

export default function ManagerRequestList({
  data,
  userUid,
  unassignDesigner,
  sendToRequester,
  onDetailClick,
  readLocal,
  onOpenAssignDesigner
}: ManagerRequestListProps) {
  return (
    <RequestListTableWrap>
      <RequestListTable>
        <RequestListTableCaption>매니저 요청 리스트</RequestListTableCaption>
        <colgroup>
          <col style={{ width: '2.542%' }} /><col style={{ width: '6.057%' }} />
          <col style={{ width: '4.583%' }} /><col style={{ width: '3.177%' }} />
          <col style={{ width: '3.177%' }} /><col style={{ width: '3.177%' }} />
          <col style={{ width: '3.177%' }} /><col style={{ width: '3.677%' }} />
          <col style={{ width: '5.354%' }} /><col style={{ width: '9.024%' }} />
          <col style={{ width: '12.514%' }} /><col style={{ width: '3.177%' }} />
          <col style={{ width: '5.401%' }} /><col style={{ width: '5.401%' }} />
          <col style={{ width: '3.177%' }} /><col style={{ width: '3.177%' }} />
          <col style={{ width: '3.177%' }} /><col style={{ width: '10.886%' }} />
          <col style={{ width: '5.083%' }} /><col style={{ width: '4.082%' }} />
        </colgroup>
        <thead>
          <tr>
            <RequestListTableTh>번호</RequestListTableTh>
            <RequestListTableTh>문서번호</RequestListTableTh>
            <RequestListTableTh>회사</RequestListTableTh>
            <RequestListTableTh>요청일</RequestListTableTh>
            <RequestListTableTh>완료<br/>요청일</RequestListTableTh>
            <RequestListTableTh>오픈일</RequestListTableTh>
            <RequestListTableTh>담당<br />MD</RequestListTableTh>
            <RequestListTableTh>요청자</RequestListTableTh>
            <RequestListTableTh>업무부서</RequestListTableTh>
            <RequestListTableTh>업무유형</RequestListTableTh>
            <RequestListTableTh>작업항목</RequestListTableTh>
            <RequestListTableTh>요청서<br />URL</RequestListTableTh>
            <RequestListTableTh>메모 Talk</RequestListTableTh>
            <RequestListTableTh>진행상태</RequestListTableTh>
            <RequestListTableTh>산출물<br />URL</RequestListTableTh>
            <RequestListTableTh>디자인<br />시작일</RequestListTableTh>
            <RequestListTableTh>디자인<br />종료일</RequestListTableTh>
            <RequestListTableTh>디자이너 배정</RequestListTableTh>
            <RequestListTableTh>검수</RequestListTableTh>
            <RequestListTableTh>공수</RequestListTableTh>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <ManagerRequestItem key={item.id} 
                                  index={index + 1} 
                                  item={item}
                                  userUid={userUid}
                                  onUnassignDesigner={(payload) => unassignDesigner(item.id, payload)}
                                  onSendToRequester={() => sendToRequester(item.id)} 
                                  onDetailClick={onDetailClick}
                                  localReadMs={readLocal[item.id]}
                                  onOpenAssignDesigner={onOpenAssignDesigner}
              />
            ))
          ) : (
            <tr>
              <td colSpan={20} style={{ textAlign: "center", padding: "20px" }}>
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
  height: calc(100vh - 336px);
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

  &:nth-of-type(14) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18), &:nth-of-type(19) {
    /* border-right: 1px solid ${({ theme }) => theme.colors.pink02}; */
  }

  &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18), &:nth-of-type(19), &:nth-of-type(20) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;