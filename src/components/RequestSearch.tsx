import styled from "styled-components"
import searchIcon from "../assets/search-icon.svg";

export default function RequestSearch({
  keyword,
  onKeywordChange,
  onSearch,
}: {
  keyword: string;
  onKeywordChange: (v: string) => void;
  onSearch: (keyword: string) => void;
}) {
  const push = (v: string) => {
    onKeywordChange(v);      // 인풋 바인딩
    onSearch(v.trim());      // 타이핑 즉시 검색 (빈 문자열이면 전체 표시)
  };

  return (
    <Container>
      <SearchInput
        placeholder="문서번호와 작업항목을 검색해 주세요."
        value={keyword}
        onChange={(e) => push(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Escape") push(""); // 선택: ESC로 빠른 초기화
        }}
      />
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  ${({ theme }) => theme.mixin.flex('center', 'space-between')};
  padding: 11.5px 14.5px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  border-radius: 8px;

  /* 🔍 아이콘: 버튼 제거하고 래퍼에 ::after로 표시 */
  &::after {
    content: "";
    position: absolute;
    right: 12px;
    top: 50%;
    display: block;
    width: 24px;
    height: 24px;
    background: url(${searchIcon}) no-repeat center / contain;
    transform: translateY(-50%);
  }
`;

const SearchInput = styled.input`
  width: 458px;
  margin-right: 12px;
  font-family: 'Pretendard';
  font-size: 16px;
  font-weight: 500;
`;