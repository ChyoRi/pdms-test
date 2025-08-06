import styled from "styled-components";
import ManagerRequestItem from "./ManagerRequestItem";

interface RequestData {
  design_request_id: string;
  id: string;
  request_date: string;
  requester: string;
  completion_dt: string;
  open_dt: string;
  task_form: string;
  task_type: string;
  requirement: string;
  url?: string;
  note?: string;
  status?: string;
  assigned_designer?: string;
  manager_review_status?: string;
  requester_review_status?: string;
  designer_start_date?: string;
  designer_end_date?: string;
  result_url?: string;
}

interface ManagerRequestListProps {
  data: RequestData[];
  designerList: any[];
  selectedDesigners: { [key: string]: string };
  designerSelect: (requestId: string, designerName: string) => void;
  assignDesigner: (requestId: string) => void;
  sendToRequester: (requestId: string) => void;
}

export default function ManagerRequestList({
  data,
  designerList,
  selectedDesigners,
  designerSelect,
  assignDesigner,
  sendToRequester,
}: ManagerRequestListProps) {
  return (
    <RequestListTable>
      <RequestListTableCaption>매니저 요청 리스트</RequestListTableCaption>
      <colgroup>
        <col style={{ width: '50px' }} /><col style={{ width: '80px' }}/>
        <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
        <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
        <col style={{ width: '80px' }} /><col style={{ width: '120px' }}/>
        <col /><col />
        <col /><col style={{ width: '80px' }}/>
        <col /><col style={{ width: '60px' }} />
        <col style={{ width: '60px' }} /><col style={{ width: '180px' }} />
        <col style={{ width: '60px' }} />
      </colgroup>
      <thead>
        <tr>
          <RequestListTableTh>NO</RequestListTableTh>
          <RequestListTableTh>문서번호</RequestListTableTh>
          <RequestListTableTh>요청일</RequestListTableTh>
          <RequestListTableTh>요청자</RequestListTableTh>
          <RequestListTableTh>완료<br/>요청일</RequestListTableTh>
          <RequestListTableTh>오픈일</RequestListTableTh>
          <RequestListTableTh>업무형태</RequestListTableTh>
          <RequestListTableTh>업무타입</RequestListTableTh>
          <RequestListTableTh>작업항목</RequestListTableTh>
          <RequestListTableTh>기획안 URL</RequestListTableTh>
          <RequestListTableTh>메모</RequestListTableTh>
          <RequestListTableTh>진행상태</RequestListTableTh>
          <RequestListTableTh>산출물 URL</RequestListTableTh>
          <RequestListTableTh>디자인<br />시작일</RequestListTableTh>
          <RequestListTableTh>디자인<br />종료일</RequestListTableTh>
          <RequestListTableTh>배정</RequestListTableTh>
          <RequestListTableTh>검수</RequestListTableTh>
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
                                onSendToRequester={() => sendToRequester(item.id)} />
          ))
        ) : (
          <tr>
            <td colSpan={17} style={{ textAlign: "center", padding: "20px" }}>
              등록된 요청이 없습니다.
            </td>
          </tr>
        )}
    </tbody>
    </RequestListTable>
  );
}

const RequestListTable = styled.table`
  width: 100%;
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
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
  border-bottom: none;
  font-family: 'Pretendard';
  font-size: 14px;
  font-weight: 700;
  background-color: ${({ theme }) => theme.colors.white02};
`;