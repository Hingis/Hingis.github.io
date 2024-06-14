import { ReactNode } from "react";
import Image from "next/image";

import * as S from "./ProjectOverview.styles";
import * as T from "@styles/typography";

interface ProjectOverviewProps {
  primaryColor: string;
  secondaryColor: string;
  imageSrc: string;
  tags?: string[];
  title: string;
  subtitle: string;
  role: string;
  duration: string;
  team: string;
  tools: string;
  overview: string;
  primaryUser: string;
  background: string;
  objective: ReactNode;
  outcomeSrc: string;
  designProcessSrc?: string;
}

const ProjectOverview = () => {
  return (
    <>
      <S.CoverContainer id="cover">
        <S.TitleContainer>
          <S.TitleWrapper>
            <S.TagsContainer>
              <S.TagWrapper>UX Research</S.TagWrapper>
              <S.TagWrapper>UX Design</S.TagWrapper>
              <S.TagWrapper>AI</S.TagWrapper>
            </S.TagsContainer>
            <T.Heading1>
              Emosic: A Mood-Based Music Recommendation Plug-in Embedded Into
              Spotify
            </T.Heading1>
            <S.Subtitle>
              An AI-driven plug-in for music streaming players, based on
              research in Human-AI interaction, aims to comprehend music
              users&rsquo; awareness of AI and is designed following the
              guidelines of AI design ethics.
            </S.Subtitle>
          </S.TitleWrapper>
        </S.TitleContainer>
        <S.ImageWrapper>
          <Image
            src="/01Emosic/Emosic.png"
            alt="Background Image"
            layout="fill"
            objectFit="cover"
            quality={100}
          />
        </S.ImageWrapper>
      </S.CoverContainer>

      <S.OverviewDetailContainer>
        <S.DetailWrapper>
          <T.Subtitle1 color="#1ed760">Role</T.Subtitle1>
          <S.DetailContent>UI Designer, UX Researcher</S.DetailContent>
        </S.DetailWrapper>
        <S.DetailWrapper>
          <T.Subtitle1 color="#1ed760">DURATION</T.Subtitle1>
          <S.DetailContent>Feb, 2022 - Jun, 2022</S.DetailContent>
        </S.DetailWrapper>
        <S.DetailWrapper>
          <T.Subtitle1 color="#1ed760">TEAM</T.Subtitle1>
          <S.DetailContent>
            Ariel Xiong, Iris Xu, Peggy Hu, Hingis Chang
          </S.DetailContent>
        </S.DetailWrapper>
        <S.DetailWrapper>
          <T.Subtitle1 color="#1ed760">TOOL</T.Subtitle1>
          <S.DetailContent>Figma</S.DetailContent>
        </S.DetailWrapper>
      </S.OverviewDetailContainer>

      <S.DeliveryContainer>
        <Image
          src="/01Emosic/Delivery.gif"
          alt="Final Delivery"
          quality={100}
          width={320}
          height={640}
        />
      </S.DeliveryContainer>

      <S.OverviewContainer>
        <S.OverviewTextWrapper>
          <T.Heading2>Overview</T.Heading2>
          <T.Text1>
            Emosic is an AI-powered, mood-based music recommendation plug-in
            seamlessly integrated with Spotify, designed with a keen focus on
            Human-AI interaction principles. Emosic empowers users to create
            personalized mood playlists that cater to their unique emotional
            states.
          </T.Text1>
        </S.OverviewTextWrapper>
        <S.OverviewTextWrapper>
          <T.Heading2>Primary Users</T.Heading2>
          <T.Text1>
            Current music streaming app users. Especially target those who
            create their own mood playlists or are unsatisfied with current
            music recommendations.
          </T.Text1>
        </S.OverviewTextWrapper>

        <S.OverviewTextWrapper2>
          <T.Heading2>Background</T.Heading2>
          <T.Text1>
            Our project stemmed from a mutual interest in mental health. To
            create a genuinely helpful tool, we began by delving into extensive
            research, exploring academic papers, and conducting surveys and
            interviews. We discovered that many people, like us, turn to music
            for comfort during stressful times. This led us to develop a music
            plug-in utilizing AI to provide mood-based recommendations, blending
            our passion for mental well-being with cutting-edge technology.
          </T.Text1>
        </S.OverviewTextWrapper2>
      </S.OverviewContainer>

      <S.ObjectiveContainer>
        <T.Heading2>Objectives & Goals</T.Heading2>
        <S.ObjectiveTextWrapper>
          <T.Text1>- Improve music recommendation accuracy</T.Text1>
          <T.Text1>- Design mood-based music recommendation features</T.Text1>
          <T.Text1>- Improve transparency between users and AI</T.Text1>
          <T.Text1>- Increase data collection channels and diversity</T.Text1>
        </S.ObjectiveTextWrapper>
      </S.ObjectiveContainer>

      <S.ProcessContainer>
        <T.Heading2>Design Process</T.Heading2>
        <Image
          src="/01Emosic/Design_Process.png"
          alt="Design Process"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={15}
        />
      </S.ProcessContainer>
    </>
  );
};

export default ProjectOverview;
