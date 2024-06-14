import Image from "next/image";

import SectionTitle from "@components/sections/project/SectionTitle";

import * as SS from "../shared.styles";
import * as T from "@styles/typography";

const Iteration = () => {
  return (
    <>
      <SectionTitle
        number="05"
        title="Iterations & Final Delivery"
        text="Following insights gathered from usability testing and post-test interviews, we embarked on an iterative redesign process for our lo-fi prototype. Through multiple iterations and pilot tests, we refined our design to address user feedback and enhance usability. Today, we are proud to deliver the hi-fi prototype, representing a significant improvement over the initial lo-fi version."
        bgColor="#1ed760"
      />

      <SS.ContentContainer>
        <T.Heading3>Mid-Fi Prototypes Iterations</T.Heading3>
        <T.Heading4>
          Iteration #1: Improve User Engagement by Increasing Feature Touchpoint
        </T.Heading4>
        <SS.ListTextWrapper>
          <T.ListText>Push Notification</T.ListText>
          <T.ListText>Homepage Pop-Up Check-In</T.ListText>
          <T.ListText>Quiz Link for Active Homepage Browsing</T.ListText>
        </SS.ListTextWrapper>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Midfi01.jpg"
              alt="Midfi 1"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
        </SS.ImageContainer>

        <T.Heading4>
          Iteration #2: Tutorial and Hints for first-time users
        </T.Heading4>
        <T.Text1>
          To address the pain point identified in the usability test, where
          users struggled to find the starting point and were confused by new
          features, we implemented tutorials and tooltips for first-time users.
          These guides not only help users navigate the app but also increase
          exposure to our features, enhancing overall usability and user
          experience. ‍
        </T.Text1>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Midfi02.png"
              alt="Midfi 2"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
        </SS.ImageContainer>

        <T.Heading4>
          Iteration #3: Gamification & More Visual Presentation instead of Wordy
          Description
        </T.Heading4>
        <T.Text1>
          Gamifying elements, such as the mood test, enhance user engagement and
          enjoyment of the app. Users prefer concise information and streamlined
          visual presentation rather than avoiding excessive text or
          overwhelming interfaces.
        </T.Text1>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Midfi03.png"
              alt="Midfi 3"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
        </SS.ImageContainer>

        <T.Heading3>Hi-fi Prototypes</T.Heading3>
        <SS.ImageContainer>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Hifi01.png"
              alt="Hifi 1"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Hifi02.png"
              alt="Hifi 2"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Hifi03.png"
              alt="Hifi 3"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <SS.ImageWrapper>
            <Image
              src="/01Emosic/Hifi04.png"
              alt="Hifi 4"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </SS.ImageWrapper>
          <Image
            src="/01Emosic/Hifi05.png"
            alt="Hifi 5"
            objectFit="cover"
            quality={100}
            layout="responsive"
            width={100}
            height={85}
          />
          <Image
            src="/01Emosic/Hifi06.png"
            alt="Hifi 6"
            objectFit="cover"
            quality={100}
            layout="responsive"
            width={100}
            height={85}
          />
        </SS.ImageContainer>
      </SS.ContentContainer>
    </>
  );
};

export default Iteration;
