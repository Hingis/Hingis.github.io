import styled from "styled-components";

export const FooterContainer = styled.div<{ backgroundColor?: string }>`
  padding-top: 40px;
  padding-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  width: 100%;
  background-color: ${({ backgroundColor }) => backgroundColor || "white"};
`;

export const BackToTop = styled.button`
  background-color: white;
  border-radius: 40px;
  padding: 18px 24px;
  border: 1px solid #3000ff;
  font-weight: 700;
  font-size: 16px;
  transition: background-color 0.3s, transform 0.3s, color 0.3s;
  cursor: pointer;

  &:hover {
    transform: translate3d(0, -3px, 0.01px);
    background-color: #f2f1ff;
  }
`;
