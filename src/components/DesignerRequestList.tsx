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
    <RequestListTableWrap>
      <RequestListTable>
        <colgroup>
          <col style={{ width: '50px' }} /><col style={{ width: '100px' }} />
          <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
          <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
          <col style={{ width: '80px' }} /><col style={{ width: '120px' }}/>
          <col /><col style={{ width: '90px' }} />
          <col style={{ width: '160px' }} /><col style={{ width: '120px' }} />
          <col style={{ width: '120px' }}/><col />
          <col style={{ width: '100px' }} /><col style={{ width: '80px' }} />
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
            <RequestListTableTh>요청서 URL</RequestListTableTh>
            <RequestListTableTh>메모</RequestListTableTh>
            <RequestListTableTh>디자인 시작일</RequestListTableTh>
            <RequestListTableTh>디자인 종료일</RequestListTableTh>
            <RequestListTableTh>산출물 링크</RequestListTableTh>
            <RequestListTableTh>진행상태</RequestListTableTh>
            <RequestListTableTh>저장</RequestListTableTh>
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
              <td colSpan={16} style={{ textAlign: "center" }}>
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
  padding: 0 48px;
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
  background-color: ${({ theme }) => theme.colors.white02};

  &:first-of-type {
    border-left: none;
  }

  &:nth-of-type(11) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15) {
    border-right: 1px solid ${({ theme }) => theme.colors.pink02}
  }

  &:nth-of-type(12), &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;