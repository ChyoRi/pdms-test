import styled from "styled-components";
import ManagerRequestItem from "./ManagerRequestItem";

interface ManagerRequestListProps {
  data: RequestData[];
  designerList: any[];
  selectedDesigners: { [key: string]: string };
  designerSelect: (requestId: string, designerName: string) => void;
  assignDesigner: (requestId: string) => void;
  sendToRequester: (requestId: string) => void;
  onDetailClick: (item: RequestData) => void;
  // ★ 추가
  workHours: { [id: string]: string };
  onChangeWorkHour: (requestId: string, val: string) => void;
  onSaveWorkHour: (requestId: string) => void;
  onStartEditWorkHour: (requestId: string) => void;
  onCancelEditWorkHour: (requestId: string) => void;
}

export default function ManagerRequestList({
  data,
  designerList,
  selectedDesigners,
  designerSelect,
  assignDesigner,
  sendToRequester,
  onDetailClick,
  workHours,
  onChangeWorkHour,
  onSaveWorkHour,
  onStartEditWorkHour,
  onCancelEditWorkHour
}: ManagerRequestListProps) {
  return (
    <RequestListTableWrap>
      <RequestListTable>
        <RequestListTableCaption>매니저 요청 리스트</RequestListTableCaption>
        <colgroup>
          <col style={{ width: '40px' }} /><col style={{ width: '85px' }}/>
          <col style={{ width: '80px' }}/><col style={{ width: '50px' }} />
          <col style={{ width: '50px' }} /><col style={{ width: '50px' }} />
          <col style={{ width: '50px' }} /><col style={{ width: '50px' }} />
          <col style={{ width: '100px' }} /><col style={{ width: '120px' }} />
          <col /><col style={{ width: '50px' }} />
          <col style={{ width: '140px' }} /><col style={{ width: '85px' }} />
          <col style={{ width: '50px' }} /><col style={{ width: '50px' }} />
          <col style={{ width: '50px' }} /><col style={{ width: '160px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '110px' }} />
        </colgroup>
        <thead>
          <tr>
            <RequestListTableTh>번호</RequestListTableTh>
            <RequestListTableTh>문서번호</RequestListTableTh>
            <RequestListTableTh>회사</RequestListTableTh>
            <RequestListTableTh>요청일</RequestListTableTh>
            <RequestListTableTh>완료<br/>요청일</RequestListTableTh>
            <RequestListTableTh>오픈일</RequestListTableTh>
            <RequestListTableTh>담당 MD</RequestListTableTh>
            <RequestListTableTh>요청자</RequestListTableTh>
            <RequestListTableTh>업무부서</RequestListTableTh>
            <RequestListTableTh>업무형태</RequestListTableTh>
            <RequestListTableTh>작업항목</RequestListTableTh>
            <RequestListTableTh>요청서<br />URL</RequestListTableTh>
            <RequestListTableTh>메모</RequestListTableTh>
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
                                  designerList={designerList}
                                  selectedDesigner={selectedDesigners[item.id] || ""}
                                  onDesignerSelect={(name) => designerSelect(item.id, name)}
                                  onAssignDesigner={() => assignDesigner(item.id)}
                                  onSendToRequester={() => sendToRequester(item.id)} 
                                  onDetailClick={onDetailClick}
                                  workHourValue={workHours[item.id] ?? ""}
                                  onChangeWorkHour={(v) => onChangeWorkHour(item.id, v)}
                                  onSaveWorkHour={() => onSaveWorkHour(item.id)}
                                  onStartEditWorkHour={() => onStartEditWorkHour(item.id)}
                                  onCancelEditWorkHour={() => onCancelEditWorkHour(item.id)}
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
  max-height: 609px;
  overflow-y: auto;
  scrollbar-width: thin;
`

const RequestListTable = styled.table`
  table-layout: fixed;
  width: 100%;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
  text-align: center;
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
  line-height: 16px;
  padding: 13px 0;
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.gray08};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(14) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18), &:nth-of-type(19) {
    border-right: 1px solid ${({ theme }) => theme.colors.pink02}
  }

  &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17), &:nth-of-type(18), &:nth-of-type(19), &:nth-of-type(20) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;