import styled from "styled-components";
import RequestItem from "./RequestItem";

interface RequestData {
  id: string;
  request_date: string;
  requester: string;
  completion_dt: string;
  open_dt: string;
  task_form: string;
  task_type: string;
  requirement: string;
  assigned_designer?: string;
  status?: string;
  review_status?: string;
  url1?: string;
  url2?: string;
}

interface ResponseData {
  start_dt?: string;
  end_dt?: string;
  status?: string;
  result_url?: string;
  is_sent_to_requester?: boolean;
}

interface MergedData {
  id: string;
  request: RequestData;
  response: ResponseData | null;
}

interface RequestListProps {
  data: MergedData[];
  onReviewComplete: (id: string) => void;
}

export default function RequestList({ data, onReviewComplete }: RequestListProps) {
  return (
    <RequestListTable>
      <RequestListTableCaption>요청 리스트</RequestListTableCaption>
      <colgroup>
        <col style={{ width: '60px' }} /><col style={{ width: '80px' }} />
        <col style={{ width: '100px' }} /><col style={{ width: '60px' }} />
        <col style={{ width: '100px' }} /><col style={{ width: '100px' }} />
        <col /><col />
        {data.some(item => item.request.url2) && <col />}<col style={{ width: '100px' }} />
        <col style={{ width: '100px' }} /><col />
        <col style={{ width: '80px' }} />
      </colgroup>
      <thead>
        <tr>
          <th>요청일</th>
          <th>요청자</th>
          <th>완료 요청일</th>
          <th>오픈일</th>
          <th>업무형태</th>
          <th>업무타입</th>
          <th>요청내용</th>
          <th>기획안 URL</th>
          {/* ✅ url2가 있는 경우만 헤더 표시 */}
          {data.some(item => item.request.url2) && <th>비고</th>}
          <th>진행상태</th>
          <th>담당디자이너</th>
          <th>산출물 URL</th>
          <th>검수</th>
        </tr>
      </thead>
      <tbody>
        {data.length > 0 ? (
          data.map(item => (
            <RequestItem key={item.id} item={item} onReviewComplete={onReviewComplete} />
          ))
        ) : (
          <tr>
            <td colSpan={12} style={{ textAlign: "center", padding: "20px" }}>
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