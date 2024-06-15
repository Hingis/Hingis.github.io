import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const HomeSectionContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 0px 60px;

  ${mediaQueryDown("md")`
  	margin: 0px 8px;
  `}
`;
