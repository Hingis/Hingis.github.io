import { useState } from "react";

import * as S from "./ImageFullScreen.styles";
import * as T from "@styles/typography";

export interface ImgFullScreenProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  title?: string;
  text?: string;
  source?: string;
}

const ImageFullScreen = ({
  src,
  alt,
  width,
  height,
  title,
  text,
  source,
}: ImgFullScreenProps) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const handleImageClick = () => {
    setIsFullscreen(true);
  };

  const handleCloseClick = () => {
    setIsFullscreen(false);
  };

  return (
    <>
      <S.ImageWrapper onClick={handleImageClick}>
        <S.StyledImage
          src={src}
          alt={alt}
          layout="responsive"
          width={width || 400}
          height={height || 400}
          quality={100}
        />
      </S.ImageWrapper>

      <S.FullscreenOverlay
        isFullscreen={isFullscreen}
        onClick={handleCloseClick}
      >
        <S.CloseButton onClick={handleCloseClick}>×</S.CloseButton>
        {title && (
          <S.TextWrapper>
            <T.Heading3 color="white">{title}</T.Heading3>
          </S.TextWrapper>
        )}
        {source && (
          <T.Text1 color="white" style={{ fontStyle: "italic" }}>
            {source}
          </T.Text1>
        )}
        <S.FullscreenImage
          src={src}
          alt={alt}
          layout="intrinsic"
          width={600}
          height={600}
          quality={100}
        />

        {text && (
          <S.TextWrapper>
            <T.Text1 color="white">{text}</T.Text1>
          </S.TextWrapper>
        )}
      </S.FullscreenOverlay>
    </>
  );
};

export default ImageFullScreen;
