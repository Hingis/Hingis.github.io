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
