import Image from "next/image";
import useMobileMode from "@hooks/useMobileMode";

import * as S from "./Hero.styles";
import * as SS from "../Shared.styles";

const Hero = () => {
  const isMobile = useMobileMode();

  return (
    <SS.HomeSectionContainer>
      <S.HeroContainer>
        <S.TextContainer>
          <S.HorizonBar />
          <S.Title>Hi, </S.Title>
          <S.Title>I'm Hingis Chang,</S.Title>
          <S.SubtitleWrapper>
            <S.Subtitle>an interdisciplinary</S.Subtitle>
            <S.Subtitle>UX / Product Designer</S.Subtitle>
            <S.Subtitle>with expertise in visual storytelling.</S.Subtitle>
          </S.SubtitleWrapper>
        </S.TextContainer>

        <Image
          src="/HomeHero.png"
          alt="Hingis selfie"
          width={isMobile ? 300 : 560}
          height={isMobile ? 300 : 560}
          priority
        />
      </S.HeroContainer>
    </SS.HomeSectionContainer>
  );
};

export default Hero;
