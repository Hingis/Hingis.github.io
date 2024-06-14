import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

// Hero part
export const CoverContainer = styled.div`
  position: relative;
  width: 100%;
  height: 480px;
  z-index: -5;

  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.1); // 半透明的黑色覆盖层
    z-index: -3;
    height: 480px;
  }

  ${mediaQueryDown("sm")`
		height: 520px;
		::before {
			height: 520px;
		}
`}
`;

export const ImageWrapper = styled.div`
  width: 100%;
  height: 100%;
`;

// Hero text part
export const TitleContainer = styled.div`
  position: relative;
  z-index: 100;
`;

export const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 160px;
  margin: 0px 120px;
  max-width: 1400px;
  gap: 20px;

  ${mediaQueryDown("md")`
		padding-top: 160px;
		margin: 0px 30px;
`}
`;

export const TagsContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const TagWrapper = styled.div`
  background-color: white;
  border-radius: 100px;
  font-size: 14px;
  font-weight: 500;
  padding: 10px 32px;
  background: #1ed760;
`;

export const Subtitle = styled.p`
  margin: 0;
  padding: 0;
  font-size: 16px;
  font-weight: 300;
  color: #b8ffcd;
  line-height: 1.3;
`;

// 4 details part
export const OverviewDetailContainer = styled.div`
  margin: 60px 0px;
  display: flex;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
`;

export const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 240px;
  gap: 8px;
`;

export const DetailContent = styled.p`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 14px;
  text-align: center;
`;

// Delivery
export const DeliveryContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 32px 0px;
`;

// Overview & Primary users
export const OverviewContainer = styled.div`
  background-color: #eee;
  padding: 80px 120px;
  display: flex;
  gap: 20px;
  justify-content: space-between;
  flex-wrap: wrap;

  ${mediaQueryDown("md")`
    padding: 80px 30px;
	`}
`;

export const OverviewTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 600px;

  ${mediaQueryDown("xxl")`
		width: 100%;
		gap: 12px;
	`}
`;

export const OverviewTextWrapper2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;

  ${mediaQueryDown("xxl")`
		gap: 12px;
	`}
`;

// Objective & Goal

export const ObjectiveContainer = styled.div`
  width: 100%;
  background-color: #1ed760;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 120px 0px;
  gap: 20px;
`;

export const ObjectiveTextWrapper = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin: 0px 30px;
`;

// Design Process
export const ProcessContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 120px 0px;
  align-items: center;
  gap: 40px;
`;
