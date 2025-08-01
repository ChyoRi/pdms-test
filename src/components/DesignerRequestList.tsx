import styled from "styled-components";
import DesignerRequestItem from "./DesignerRequestItem";

interface DesignerRequestListProps {
  requests: any[];
  formData: { [key: string]: any };
  onChange: (requestId: string, field: string, value: string) => void;
  onSave: (requestId: string) => void;
}

export default function DesignerRequestList({
  requests,
  onChange,
  onSave
}: DesignerRequestListProps) {
  return (
    <RequestListTable>
      <colgroup>
        <col style={{ width: '50px' }} /><col style={{ width: '60px' }} />
        <col style={{ width: '80px' }} /><col style={{ width: '80px' }} />
        <col style={{ width: '70px' }} /><col style={{ width: '90px' }} />
        <col style={{ width: '120px' }}/><col />
        <col /><col />
        <col style={{ width: '100px' }} /><col style={{ width: '80px' }}/>
        <col /><col style={{ width: '60px' }} />
        <col style={{ width: '100px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>NO</th>
          <th>요청일</th>
          <th>요청자</th>
          <th>완료<br />요청일</th>
          <th>오픈일</th>
          <th>업무형태</th>
          <th>업무타입</th>
          <th>작업항목</th>
          <th>기획안 URL</th>
          <th>비고</th>
          <th>디자인<br />시작일</th>
          <th>디자인<br />종료일</th>
          <th>산출물 링크</th>
          <th>진행상태</th>
          <th>저장</th>
        </tr>
      </thead>
      <tbody>
        {requests.length > 0 ? (
          requests.map((item, index) => (
            <DesignerRequestItem
              key={item.id}
              index={index + 1}
              item={item}
              onChange={onChange}
              onSave={onSave}
            />
          ))
        ) : (
          <tr>
            <td colSpan={15} style={{ textAlign: "center" }}>
              배정된 요청이 없습니다.
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
  border-collapse: collapse;
  th, td {
    border: 1px solid #ddd;
    padding: 8px;
  }
`;