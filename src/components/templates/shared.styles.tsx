import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const ContentContainer = styled.div`
  margin: 80px 120px;
  display: flex;
  flex-direction: column;
  gap: 20px;

  ${mediaQueryDown("md")`
		margin: 40px 30px;
	`}
`;

// Design Images
export const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

export const ImageWrapper = styled.div`
  max-width: 840px;
`;

// List Text
export const ListTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`;
