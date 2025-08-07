import styled from "styled-components";

interface RequestDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

export default function RequestDrawer({ isOpen, onClose, children }: RequestDrawerProps) {
 
  return (
    <>
      <Dim isVisible={isOpen} onClick={onClose} />
      <DrawerContainer isVisible={isOpen} onClick={(e) => e.stopPropagation()}>
        {children}
      </DrawerContainer>
    </>
  );
}

const Dim = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 0; right: 0; bottom: 0; left: 0;
  background: rgba(0, 0, 0, 0.3);
  z-index: 1000;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  pointer-events: ${({ isVisible }) => (isVisible ? "auto" : "none")};
  transition: opacity 0.3s ease;
`;

const DrawerContainer = styled.div<{ isVisible: boolean }>`
  position: fixed;
  top: 64px;
  right: 0;
  width: 520px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 1001;
  overflow-y: auto;
  padding: 32px;
  transform: ${({ isVisible }) => (isVisible ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease;
`;