import styled from "styled-components";

interface MyRequestItemProps {
  design_request_id: string;
  status: string;
}

export default function MyRequestItem({ design_request_id, status }: MyRequestItemProps) {
  return (
    <ItemWrap>
      <RequestId>{design_request_id}</RequestId>
      <Status>{status}</Status>
    </ItemWrap>
  )
}

const ItemWrap = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 16px;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const RequestId = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

const Status = styled.span`
  font-size: 12px;
  color: #666;
`;