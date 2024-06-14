import Image from "next/image";

import SectionTitle from "@components/sections/project/SectionTitle";

import * as SS from "../shared.styles";
import * as T from "@styles/typography";

const UserDesign = () => {
  return (
    <>
      <SectionTitle
        number="03"
        title="User Design"
        text="In the Design stage, we use insights and painpoints from user feedback and app analysis to brainstorm new features. We develop user flows and sketch initial concepts, then create low-fidelity prototypes for testing and refinement. This iterative process ensures our designs meet user needs effectively."
        bgColor="#1ed760"
      />

      <SS.ContentContainer>
        <T.Heading3>Brainstorming & Ideation</T.Heading3>
        <Image
          src="/01Emosic/Brainstorm01.png"
          alt="Brainstorm"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <Image
          src="/01Emosic/Brainstorm02.jpg"
          alt="Pain points and solutions"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />

        <T.Heading3>User Flows</T.Heading3>
        <Image
          src="/01Emosic/User_Flow.png"
          alt="Userflow"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />

        <T.Heading3>Sketch Ideas</T.Heading3>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Sketch01.jpg"
              alt="Sketch"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Sketch02.png"
              alt="Sketch"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
        </SS.ImageContainer>
        <T.Heading4>Data Collection Mechanism</T.Heading4>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Sketch03.png"
              alt="Data Collection Mechanism"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
        </SS.ImageContainer>

        <T.Heading3>Lo-fi Prototypes</T.Heading3>
        <T.Text1>
          Here are some lo-fi prototypes we&rsquo;ve designed, incorporating the
          <T.TextBold> &rdquo;Emotion Mode&rdquo;</T.TextBold> feature based on
          user insights. In this mode, users can enter their current mood and
          feelings via a dedicated button on the interface, allowing for random
          mood-based playlist recommendations. Additionally, we&rsquo;ve
          included an initial setup for first-time users to collect basic data.
          During music playback, users have both passive feedback options, like
          skipping songs, and active feedback options on the player page to rate
          how well the song matches their mood. These features aim to enhance
          user engagement and provide valuable data for improving the
          recommendation system.
        </T.Text1>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Lofi01.png"
              alt="Lofi 1"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Lofi02.png"
              alt="Lofi 2"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Lofi03.png"
              alt="Lofi 3"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
        </SS.ImageContainer>
      </SS.ContentContainer>
    </>
  );
};

export default UserDesign;
