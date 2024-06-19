import Image from "next/image";

import * as S from "./About.styles";
import * as T from "@styles/typography";

const About = () => {
  const openPDF = () => {
    window.open("/About/Hingis_Resume.pdf", "_blank");
  };

  return (
    <S.PageContainer>
      <S.AboutMeContainer reverse>
        <S.AboutMeWrapper>
          <S.Role>UX DESIGNER / ARTIST / HEALER</S.Role>
          <S.Name>Hingis Chang</S.Name>
          <S.SubtitleWrapper>
            <S.Subtitle>About Me</S.Subtitle>
            <T.Text1>
              I wear many hats—UX Designer, Artist, Storyteller, and Healer. My
              journey is an amalgamation of engineering precision and artistic
              creativity. With a background in Biomedical Engineering and a
              profound passion for Human-Computer Interaction, I strive to
              bridge the gap between technology and human experiences through
              thoughtful and impactful design.
            </T.Text1>
          </S.SubtitleWrapper>
        </S.AboutMeWrapper>
        <S.ImageWrapper>
          <Image
            src="/About/photo.jpg"
            alt="Hingis photo"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </S.ImageWrapper>
      </S.AboutMeContainer>

      <S.AboutMeContainer>
        <S.ImageWrapper>
          <Image
            src="/About/artist_profile.jpg"
            alt="Hingis artist_profile"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </S.ImageWrapper>
        <S.AboutMeWrapper>
          <S.SubtitleWrapper>
            <S.Subtitle>My Philosophy</S.Subtitle>
            <T.Text1>
              I define myself as not just a UX Designer but also an artist. My
              love for drawing and storytelling drives me to create visual
              narratives that transcend barriers. As a designer, I harness this
              storytelling ability to craft user experiences that are intuitive,
              engaging, and meaningful.
            </T.Text1>
          </S.SubtitleWrapper>
          <S.SubtitleWrapper>
            <S.Subtitle>Personal Mission</S.Subtitle>
            <T.Text1>
              It&rsquo;s honestly hard to define myself with a specific title.
              My friends call me{" "}
              <T.TextBold>&rdquo;the healer,&rdquo;</T.TextBold> which resonates
              deeply with my life goal: to convey warmth and help others in my
              own way. I believe that even in a challenging world, there&rdquo;s
              an abundance of love and kindness. My mission is to use empathy to
              weave stories behind products, connect people, and create
              experiences that matter.
            </T.Text1>
          </S.SubtitleWrapper>
        </S.AboutMeWrapper>
      </S.AboutMeContainer>

      <S.AboutMeContainer reverse>
        <S.AboutMeWrapper>
          <S.SubtitleWrapper>
            <S.Subtitle>Professional Skillsets</S.Subtitle>
            <T.Text1>
              <T.TextBold>- UX Design:</T.TextBold> Prototyping, Wireframing,
              Usability Testing, User Journey Mapping, Interaction Design,
              Accessibility Guidelines, Design Systems, Competitive Analysis,
              Design Thinking, Personas, UX Research, A/B Testing.
            </T.Text1>
            <T.Text1>
              <T.TextBold>- Visual & Graphic Design:</T.TextBold> I bring
              stories to life through illustrations, motion graphics, and visual
              design, using tools like Adobe Creative Suite (After Effects,
              Premiere, Illustrator, Photoshop).
            </T.Text1>
            <T.Text1>
              <T.TextBold>- Front-End Development:</T.TextBold> Implementing
              designs with HTML, CSS, JavaScript (React.js), TypeScript, and
              Python.
            </T.Text1>
            <T.Text1>
              <T.TextBold>- Data Visualization: </T.TextBold> Telling compelling
              stories with data using Tableau and Power BI.
            </T.Text1>
          </S.SubtitleWrapper>
        </S.AboutMeWrapper>
        <S.ImageWrapper>
          <Image
            src="/About/hotdog.gif"
            alt="Hotdog animation"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </S.ImageWrapper>
      </S.AboutMeContainer>

      <S.AboutFooter>
        <S.ResumeButton onClick={openPDF}>Resume / CV</S.ResumeButton>
        <T.Text1>Hingis Chang © 2024</T.Text1>
      </S.AboutFooter>
    </S.PageContainer>
  );
};

export default About;
