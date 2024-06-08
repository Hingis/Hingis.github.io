import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

// Title part
export const TitleContainer = styled.div`
  padding: 120px 0px;
  width: 100%;
  background-color: #1ed760;

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

export const Title = styled.h2`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 32px;

  ${mediaQueryDown("md")`
		font-size: 24px;
	`}
`;

export const Text = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  text-align: center;
  line-height: 1.3;
`;

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

export const Heading = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 28px;

  ${mediaQueryDown("md")`
		font-size: 22px;
		font-weight: 500;
	`}
`;

export const Text2 = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
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

export const Heading2 = styled.h4`
  display: flex;
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 22px;
  text-align: center;
  height: 60px;
  align-items: center;
  ${mediaQueryDown("md")`
		font-size: 20px;
		font-weight: 500;
		height: auto;
	`}
`;

export const HighlightText = styled.span`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
`;

export const IconWrapper = styled.div`
  margin-bottom: 16px;
  ${mediaQueryDown("md")`
		margin-top: 12px;
	`}
`;

// Insight
export const InsightContainer = styled.div`
  padding: 80px 0px;
  width: 100%;
  background-color: #8eebb0;

  ${mediaQueryDown("md")`
		padding: 60px 0px;
	`}
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

export const InsightTitle = styled.h3`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 32px;
  color: #005f20;

  ${mediaQueryDown("md")`
		font-size: 24px;
	`}
`;

export const Heading3 = styled.h4`
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
