import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const InsightContainer = styled.div<{ bgColor?: string }>`
  padding: 80px 0px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor || "transparent"};
  ${mediaQueryDown("md")`
		padding: 60px 0px;
	`};
`;

export const InsightWrapper = styled.div`
  margin: 0px 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mediaQueryDown("md")`
		margin: 0px 30px;
	`}
`;

export const InsightTitle = styled.h2<{ color?: string }>`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 32px;
  color: ${({ color }) => color || "#000"};

  ${mediaQueryDown("md")`
		font-size: 24px;
	`}
`;

export const Heading3 = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;

  ${mediaQueryDown("md")`
		font-weight: 500;
		font-size: 18px;
	`}
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;
