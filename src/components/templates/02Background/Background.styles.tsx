import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

// Literature Review

export const ContentContainer = styled.div`
  margin: 80px 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mediaQueryDown("md")`
		margin: 40px 30px;
	`}
`;

// 4 details part
export const DetailContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  flex-wrap: wrap;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 320px;
  gap: 8px;
`;

export const HeadingWrapper = styled.div`
  display: flex;
  height: 60px;

  ${mediaQueryDown("md")`
		height: auto;
	`}
`;

export const IconWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 16px;
`;
