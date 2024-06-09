import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

// Title part
export const TitleContainer = styled.div<{ bgColor: string }>`
  padding: 120px 0px;
  width: 100%;
  background-color: ${({ bgColor }) => bgColor};

  ${mediaQueryDown("md")`
		padding: 60px 0px;
	`}
`;

export const TitleWrapper = styled.div`
  margin: 0px 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;

  ${mediaQueryDown("md")`
		margin: 0px 30px;
	`}
`;

export const Number = styled.div`
  font-size: 20px;
  font-weight: 600;
  border-bottom: 4px solid #fff;
`;
