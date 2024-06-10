import styled from "styled-components";
import Image from "next/image";

import { mediaQueryDown } from "@styles/mixins";

export const CarouselContainer = styled.div`
  position: relative;
  width: 90vw;
  height: 300px;
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  width: 90%;
  height: 300px;

  ${mediaQueryDown("sm")`
		justify-content: center;
	`}
`;

export const StyledImage = styled(Image)`
  object-fit: contain;
  height: 300px;
`;

export const ArrowLeft = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  position: absolute;
  padding: 0px 10px;
  top: 50%;
  left: 10px;
  font-size: 2rem;
  color: white;
  z-index: 1;
  cursor: pointer;
  user-select: none;
  border-radius: 20px;
`;

export const ArrowRight = styled.div`
  background-color: rgba(0, 0, 0, 0.6);
  border-radius: 20px;
  padding: 0px 10px;
  position: absolute;
  top: 50%;
  right: 10px;
  font-size: 2rem;
  color: white;
  z-index: 1;
  cursor: pointer;
  user-select: none;
`;
