import styled from "styled-components";
import RequesterRequestItem from "./RequesterRequestItem";

interface RequestListProps {
  data: RequestData[];
  onReviewComplete: (id: string) => void;
  onCancel: (id: string) => void;
  onEditClick: (id: string) => void;
  // ✅ 디테일 열기 콜백 추가: 메모/작업항목 클릭 시 사용
  onDetailClick: (item: RequestData) => void;
}

export default function RequesterRequestList({ data, onReviewComplete, onCancel, onEditClick, onDetailClick }: RequestListProps) {
  return (
    <RequestListTableWrap>
      <RequestListTable>
        <RequestListTableCaption>요청 리스트</RequestListTableCaption>
        <colgroup>
          <col style={{ width: '50px' }} /><col style={{ width: '85px' }}/>
          <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
          <col style={{ width: '60px' }} /><col style={{ width: '60px' }} />
          <col style={{ width: '100px' }} /><col style={{ width: '120px' }}/>
          <col /><col style={{ width: '90px' }} />
          <col style={{ width: '180px' }} /><col style={{ width: '100px' }} />
          <col style={{ width: '85px' }}/><col style={{ width: '90px' }} />
          <col style={{ width: '100px' }} /><col style={{ width: '80px' }} />
          <col style={{ width: '80px' }} />
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
            <RequestListTableTh>요청서 URL</RequestListTableTh>
            <RequestListTableTh>메모</RequestListTableTh>
            <RequestListTableTh>진행상태</RequestListTableTh>
            <RequestListTableTh>디자이너</RequestListTableTh>
            <RequestListTableTh>산출물 URL</RequestListTableTh>
            <RequestListTableTh>검수</RequestListTableTh>
            <RequestListTableTh>수정</RequestListTableTh>
            <RequestListTableTh>취소</RequestListTableTh>
          </tr>
        </thead>
        <tbody>
          {data.length > 0 ? (
            data.map((item, index) => (
              <RequesterRequestItem key={item.id} index={index + 1} item={item} onReviewComplete={onReviewComplete} onCancel={onCancel} onEditClick={onEditClick} onDetailClick={onDetailClick} />
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

  &:nth-of-type(12) {
    border-right: 1px solid ${({ theme }) => theme.colors.black};
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16) {
    border-right: 1px solid ${({ theme }) => theme.colors.pink02}
  }

  &:nth-of-type(13), &:nth-of-type(14), &:nth-of-type(15), &:nth-of-type(16), &:nth-of-type(17) {
    background-color: ${({ theme }) => theme.colors.pink01};
  }
`;