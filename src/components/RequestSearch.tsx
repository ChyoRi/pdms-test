import styled from "styled-components"
import searchIcon from "../assets/search-icon.svg";

export default function RequestSearch({
  keyword,
  onKeywordChange,
  onSearch,
}: {
  keyword: string;                         // ← 부모가 내려주는 값(입력값)
  onKeywordChange: (v: string) => void;    // ← 타이핑 시 부모로 올림
  onSearch: (keyword: string) => void;     // ← 버튼 클릭 시만 실행
}) {

  const handleSearchClick = () => onSearch(keyword.trim());

  return (
    <Container>
      <SearchInput 
        placeholder="문서번호와 작업항목을 검색해 주세요."
        value={keyword}
        onChange={(e) => onKeywordChange(e.target.value)}
      />
      <SearchButton 
        type="button"
        onClick={handleSearchClick}
      />
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