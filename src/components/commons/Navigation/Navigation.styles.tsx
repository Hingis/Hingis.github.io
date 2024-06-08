import { ReactNode } from "react";
import styled, { css } from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const NavBar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 32px 0px;
  color: #333;
  position: fixed;
  z-index: 100;
  background-color: white;

  ${mediaQueryDown("md")`
    flex-direction: column;
    align-items: flex-end;
    background-color: white;
  `}
`;

export const IconWrapper = styled.div<{ children: ReactNode }>`
  display: none;
  flex-direction: column;
  cursor: pointer;

  ${mediaQueryDown("md")`
		display: flex;
    margin-right: 40px;
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
  }
`;
