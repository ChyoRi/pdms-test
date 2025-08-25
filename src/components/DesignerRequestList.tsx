import styled from "styled-components";
import DesignerRequestItem from "./DesignerRequestItem";

type RowForm = {
  start_dt?: string;
  end_dt?: string;
  result_url?: string;
  status?: string;
};


interface DesignerRequestListProps {
  requests: any[];
  formData: Record<string, RowForm>;
  onChange: (requestId: string, field: string, value: string) => void;
  onSave: (requestId: string) => void;
  onDetailClick: (item: RequestData) => void;
}

export default function DesignerRequestList({
  requests,
  onChange,
  formData,
  onSave,
  onDetailClick
}: DesignerRequestListProps) {
  return (
    <RequestListTableWrap>
      <RequestListTable>
        <colgroup>
          <col style={{ width: '40px' }} /><col style={{ width: '90px' }} />
          <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
          <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '120px' }}/>
          <col /><col style={{ width: '70px' }} />
          <col style={{ width: '160px' }} /><col style={{ width: '120px' }} />
          <col style={{ width: '120px' }}/><col />
          <col style={{ width: '100px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '60px' }} />
        </colgroup>
        <thead>
          <tr>
            <RequestListTableTh>번호</RequestListTableTh>
            <RequestListTableTh>문서번호</RequestListTableTh>
            <RequestListTableTh>요청일</RequestListTableTh>
            <RequestListTableTh>요청자</RequestListTableTh>
            <RequestListTableTh>완료<br />요청일</RequestListTableTh>
            <RequestListTableTh>오픈일</RequestListTableTh>
            <RequestListTableTh>업무형태</RequestListTableTh>
            <RequestListTableTh>업무타입</RequestListTableTh>
            <RequestListTableTh>작업항목</RequestListTableTh>
            <RequestListTableTh>요청서<br />URL</RequestListTableTh>
            <RequestListTableTh>메모</RequestListTableTh>
            <RequestListTableTh>디자인 시작일</RequestListTableTh>
            <RequestListTableTh>디자인 종료일</RequestListTableTh>
            <RequestListTableTh>산출물 링크</RequestListTableTh>
            <RequestListTableTh>진행상태</RequestListTableTh>
            <RequestListTableTh>저장</RequestListTableTh>
            <RequestListTableTh>공수</RequestListTableTh>
          </tr>
        </thead>
        <tbody>
          {requests.length > 0 ? (
            requests.map((item, index) => (
              <DesignerRequestItem
                key={item.id}
                index={index + 1}
                item={item}
                row={formData[item.id] ?? {}}
                onChange={onChange}
                onSave={onSave}
                onDetailClick={onDetailClick}
              />
            ))
          ) : (
            <tr>
              <td colSpan={17} style={{ textAlign: "center" }}>
                배정된 요청이 없습니다.
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
  text-align: center;
  border-top: 2px solid ${({ theme }) => theme.colors.black};
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

  &:nth-of-type(11) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({ theme }) => theme.colors.pink02}
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;