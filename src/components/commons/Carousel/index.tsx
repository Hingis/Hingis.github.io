import { useState } from "react";

import useMobileMode from "@hooks/useMobileMode";
import ImageFullScreen, { ImgFullScreenProps } from "../ImageFullScreen";

import * as S from "./Carosel.styles";

interface CarouselProps {
  imgsArray: ImgFullScreenProps[];
}

const Carousel = ({ imgsArray }: CarouselProps) => {
  const isMobile = useMobileMode();
  const [currentIndex, setCurrentIndex] = useState(0);
  const picturesPerPage = isMobile ? 1 : 5;
  const newPicturesPerClick = isMobile ? 1 : 2;

  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide
      ? imgsArray.length - newPicturesPerClick
      : currentIndex - newPicturesPerClick;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex >= imgsArray.length - newPicturesPerClick;
    const newIndex = isLastSlide ? 0 : currentIndex + newPicturesPerClick;
    setCurrentIndex(newIndex);
  };

  const getImageArray = () => {
    const end = currentIndex + picturesPerPage;
    if (end <= imgsArray.length) {
      return imgsArray.slice(currentIndex, end);
    } else {
      return [
        ...imgsArray.slice(currentIndex),
        ...imgsArray.slice(0, end - imgsArray.length),
      ];
    }
  };

  return (
    <S.CarouselContainer>
      <S.ArrowLeft onClick={goToPrevious}>&lt;</S.ArrowLeft>
      <S.ImageWrapper>
        {getImageArray().map((img, ind) => (
          <ImageFullScreen
            key={ind}
            src={img.src}
            alt={img.title || `Carousel image ${ind}`}
            title={img.title}
            text={img.text}
            source={img.source}
          />
        ))}
      </S.ImageWrapper>
      <S.ArrowRight onClick={goToNext}>&gt;</S.ArrowRight>
    </S.CarouselContainer>
  );
};

export default Carousel;
