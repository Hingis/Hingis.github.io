import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const HeroContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  gap: 32px;

  ${mediaQueryDown("lg")`
		flex-direction: column;
		align-items: center;
	`}
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const HorizonBar = styled.div`
  background-color: #000;
  width: 80px;
  height: 2px;
  margin-top: 92px;
  margin-bottom: 92px;

  ${mediaQueryDown("md")`
		margin-top: 20px;
  	margin-bottom: 20px;
	`}
`;

export const Title = styled.h1`
  margin: 0px;
  padding: 0px;
  font-size: 40px;
  font-weight: 700;
  line-height: 1.5;
`;

export const SubtitleWrapper = styled.div`
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;
  text-wrap: nowrap;

  ${mediaQueryDown("md")`
		text-wrap: wrap;
	`}
`;

export const Subtitle = styled.p`
  margin: 0px;
  padding: 0px;
  white-space: normal;
  font-size: 20px;
  font-weight: 300;
  line-height: 20px;
  text-wrap: nowrap;

  ${mediaQueryDown("md")`
		text-wrap: wrap;
	`}
`;
