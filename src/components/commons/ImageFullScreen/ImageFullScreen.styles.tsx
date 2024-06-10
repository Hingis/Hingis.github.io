import Image from "next/image";
import styled from "styled-components";

// Styled-components for image wrapper and fullscreen styles
export const ImageWrapper = styled.div`
  display: flex;
  height: 300px;
  cursor: pointer;
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  height: 300px;
`;

export const FullscreenOverlay = styled.div<{ isFullscreen: boolean }>`
  display: ${({ isFullscreen }) => (isFullscreen ? "flex" : "none")};
  flex-direction: column;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.8);
  justify-content: center;
  align-items: center;
  text-align: center;
  z-index: 9999;
  gap: 20px;
`;

export const TextWrapper = styled.div`
  max-width: 80vw;
`;

export const FullscreenImage = styled(Image)`
  max-width: 80%;
  max-height: 80%;
`;

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  background: transparent;
  color: white;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;
