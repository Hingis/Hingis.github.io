import styled from "styled-components";

import { mediaQueryDown } from "@styles/mixins";

export const ProjectItemContainer = styled.a`
  position: relative;
  width: 550px;
  height: 500px;
  margin: 10px;
  overflow: hidden;
  border-radius: 10px;
  text-decoration: none;
  color: inherit;
  display: block;
  cursor: pointer;

  ${mediaQueryDown("md")`
		width: 320px;
  	height: 300px;
	`}
`;

export const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease-in-out;

  ${ProjectItemContainer}:hover & {
    opacity: 1;
  }
`;

export const OverlayText = styled.div`
  color: white;
  text-align: center;
  margin: 40px 60px;

  ${mediaQueryDown("md")`
		margin: 20px;
	`}
`;

export const ProjectTitle = styled.h3`
  margin: 0;
  font-size: 1.5em;
  line-height: 1.4;

  ${mediaQueryDown("md")`
		font-size: 1.2em;
	`}
`;

export const ProjectDescription = styled.p`
  margin: 0;
  font-size: 1em;
`;
