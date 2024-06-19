import styled, { css } from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 180px 100px;
  background-color: #ff5602;
  gap: 80px;

  ${mediaQueryDown("md")`
		padding: 200px 20px;
	`}
`;

export const AboutMeContainer = styled.div<{ reverse?: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 80px;

  ${({ reverse }) =>
    reverse
      ? css`
          ${mediaQueryDown("md")`
						flex-direction: column-reverse;
					`}
        `
      : mediaQueryDown("md")`
				flex-direction: column;
	`}
`;

export const AboutMeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 450px;

  ${mediaQueryDown("md")`
		flex-direction: column;
		width: 320px;
	`}
`;

export const ImageWrapper = styled.div`
  position: relative;
  border-radius: 20px;
  width: 400px;
  height: 400px;

  img {
    border-radius: 20px;
  }

  ${mediaQueryDown("md")`
		width: 320px;
  	height: 320px;
	`}
`;

export const Role = styled.p`
  margin: 0;
  padding: 0;
  text-transform: uppercase;
  color: #3000ff;
  font-size: 20px;
  font-weight: 600;
`;

export const Name = styled.h1`
  margin: 0;
  padding: 0;
  font-size: 38px;
  font-weight: 600;
  color: white;
  margin-bottom: 20px;
`;

export const SubtitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;

export const Subtitle = styled.div`
  margin: 0;
  padding: 0;
  font-size: 24px;
  font-weight: 700;
`;

export const AboutFooter = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ResumeButton = styled.button`
  background-color: #3000ff;
  border-radius: 40px;
  padding: 20px 40px;
  color: white;
  border: none;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    border: 3px solid white;
  }
`;
