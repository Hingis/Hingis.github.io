import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const Heading1 = styled.h1<{
  textAlign?: "left" | "right" | "center" | "justify";
  color?: string;
}>`
  margin: 0;
  padding: 0;
  font-size: 38px;
  font-weight: 700;
  color: ${({ color }) => color || "white"};
  text-align: ${({ textAlign }) => textAlign || "left"};

  ${mediaQueryDown("sm")`
	  font-size: 28px;
	  line-height: 1.3;
`}
`;

export const Heading2 = styled.h2<{
  color?: string;
}>`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 32px;
  color: ${({ color }) => color || "black"};

  ${mediaQueryDown("md")`
		font-size: 24px;
	`}
`;

export const Heading3 = styled.h3<{
  color?: string;
  textAlign?: "left" | "right" | "center" | "justify";
}>`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 28px;
  color: ${({ color }) => color || "black"};
  text-align: ${({ textAlign }) => textAlign || "left"};

  ${mediaQueryDown("md")`
		font-size: 22px;
		font-weight: 500;
	`}
`;

export const Heading4 = styled.h4<{
  textAlign?: "left" | "right" | "center" | "justify";
}>`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 22px;
  text-align: ${({ textAlign }) => textAlign || "left"};

  ${mediaQueryDown("md")`
		font-size: 20px;
	`}
`;

export const Heading5 = styled.h5<{
  textAlign?: "left" | "right" | "center" | "justify";
}>`
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 20px;
  text-align: ${({ textAlign }) => textAlign || "left"};

  ${mediaQueryDown("md")`
		font-size: 18px;
    font-weight: 700;
	`}
`;

export const Subtitle1 = styled.p<{
  textAlign?: "left" | "right" | "center" | "justify";
  color?: string;
}>`
  margin: 0;
  padding: 0;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 1.6px;
  text-align: ${({ textAlign }) => textAlign || "left"};
  color: ${({ color }) => color || "#000"};
`;

export const Text1 = styled.p<{
  textAlign?: "left" | "right" | "center" | "justify";
  color?: string;
}>`
  margin: 0;
  padding: 0;
  font-weight: 400;
  font-size: 16px;
  line-height: 1.3;
  text-align: ${({ textAlign }) => textAlign || "left"};
  color: ${({ color }) => color || "#000"};
  white-space: pre-line;
`;

export const TextBold = styled.span`
  font-weight: 600;
  font-size: 16px;
  line-height: 1.3;
`;

export const TextHighlight = styled.span<{ bgColor?: string }>`
  background-color: ${({ bgColor }) => bgColor || "transparent"};
`;

export const ListText = styled.li`
  font-weight: 500;
`;
