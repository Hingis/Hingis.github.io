import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const NavBar = styled.nav`
  margin-top: 20px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 1rem;
  color: #333;

  ${mediaQueryDown("md")`
    margin-top: 0px;
    flex-direction: column;
    align-items: flex-start;
  `}
`;

export const IconWrapper = styled.div<{ children: ReactNode }>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  ${mediaQueryDown("md")`
		display: flex;
	`}
`;

export const Menu = styled.div<{ $isOpen: boolean }>`
  margin-right: 40px;
  display: flex;
  gap: 2rem;

  ${({ $isOpen }) =>
    $isOpen
      ? css`
          ${mediaQueryDown("md")`
						flex-direction: column;
						width: 100%;
						display: none;
					`}
        `
      : mediaQueryDown("md")`
        margin-top: 20px;
        margin-left: 12px;
				flex-direction: column;
				width: 100%;
				display: flex;
	`}
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: #333;
  font-weight: 600;
  font-size: 20px;
  font-family: Montserrat, sans-serif;

  &:hover {
    color: #05f;
    font-family: Bitter, serif;
    font-style: italic;
    font-weight: 400;
  }
`;
