import styled from "styled-components";
import ManagerRequestItem from "./ManagerRequestItem";

interface RequestData {
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
  sendToRequester
}: ManagerRequestListProps) {
  return (
    <RequestListTable>
      <RequestListTableCaption>요청 리스트</RequestListTableCaption>
      <colgroup>
        <col style={{ width: '50px' }} /><col style={{ width: '60px' }} />
        <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
        <col style={{ width: '60px' }} /><col style={{ width: '80px' }} />
        <col style={{ width: '120px' }}/><col />
        <col /><col />
        <col style={{ width: '80px' }} /><col style={{ width: '80px' }}/>
        <col /><col style={{ width: '60px' }} />
        <col style={{ width: '60px' }} /><col style={{ width: '170px' }} />
        <col style={{ width: '60px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>NO</th>
          <th>요청일</th>
          <th>요청자</th>
          <th>완료<br/>요청일</th>
          <th>오픈일</th>
          <th>업무형태</th>
          <th>업무타입</th>
          <th>작업항목</th>
          <th>기획안 URL</th>
          <th>비고</th>
          <th>진행상태</th>
          <th>담당<br/>디자이너</th>
          <th>산출물 URL</th>
          <th>디자인<br />시작일</th>
          <th>디자인<br />종료일</th>
          <th>배정</th>
          <th>검수</th>
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
`;

const RequestListTableCaption = styled.caption`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;