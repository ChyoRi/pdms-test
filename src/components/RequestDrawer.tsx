import styled from "styled-components";

interface RequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  isDetail?: boolean;
}

export default function RequestDrawer({ isOpen, onClose, children, isDetail }: RequestDrawerProps) {
 
  return (
    <>
      <Dim isVisible={isOpen} onClick={onClose} />
      <DrawerContainer isVisible={isOpen} $isDetail={isDetail} onClick={(e) => e.stopPropagation()}>
        {children}
      </DrawerContainer>
    </>
  );
}

const Dim = styled.div<{ isVisible: boolean; $isDetail?: boolean }>`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const DrawerContainer = styled.div<{ isVisible: boolean; $isDetail?: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  width: 680px;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  padding: 24px;
  transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
  overflow: auto;

  /* ✅ detail일 때만 세로 플렉스 + 필요시 스크롤 */
  /* ✅ detail일 때만 상단 고정 + 아래 스크롤 등의 컬럼 레이아웃 */
  display: ${({ $isDetail }) => ($isDetail ? "flex" : "block")};
  flex-direction: ${({ $isDetail }) => ($isDetail ? "column" : "initial")};
  justify-content: ${({ $isDetail }) => ($isDetail ? "space-between" : "initial")};
  gap: ${({ $isDetail }) => ($isDetail ? "20px" : "0")};
`;