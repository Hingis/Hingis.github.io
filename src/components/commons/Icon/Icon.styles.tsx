import styled from "styled-components";

export const IconWrapper = styled.div<{ width?: number }>`
  min-width: ${({ width }) => width + `px` || "24px"};
`;
