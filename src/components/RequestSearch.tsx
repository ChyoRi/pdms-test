import styled from "styled-components"
import searchIcon from "../assets/search-icon.svg";

export default function RequestSearch() {
  return (
    <Container>
      <SearchInput placeholder="검색어를 입력해 주세요."/>
      <SearchButton type="button" />
    </Container>
  )
}

const Container = styled.div`
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 11px 14.5px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;
`;

const SearchInput = styled.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;

const SearchButton = styled.button`
  width: 24px;
  height: 24px;
  background-image: url(${searchIcon});
`;