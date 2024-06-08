import Image from "next/image";

import * as S from "./ProjectOverview.styles";

interface ProjectOverviewProps {
  imageSrc: string;
}

const ProjectOverview = () => {
  return (
    <>
      <S.CoverContainer>
        <S.TitleContainer>
          <S.TitleWrapper>
            <S.TagsContainer>
              <S.TagWrapper>AI</S.TagWrapper>
              <S.TagWrapper>UX Design</S.TagWrapper>
            </S.TagsContainer>
            <S.Title>
              Emosic: A Mood-Based Music Recommendation Plug-in Embedded Into
              Spotify
            </S.Title>
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
          <S.DetailTitle>Role</S.DetailTitle>
          <S.DetailContent>UI Designer, UX Researcher</S.DetailContent>
        </S.DetailWrapper>
        <S.DetailWrapper>
          <S.DetailTitle>DURATION</S.DetailTitle>
          <S.DetailContent>Feb, 2022 - Jun, 2022</S.DetailContent>
        </S.DetailWrapper>
        <S.DetailWrapper>
          <S.DetailTitle>TEAM</S.DetailTitle>
          <S.DetailContent>
            Ariel Xiong, Iris Xu, Peggy Hu, Hingis Chang
          </S.DetailContent>
        </S.DetailWrapper>
        <S.DetailWrapper>
          <S.DetailTitle>TOOL</S.DetailTitle>
          <S.DetailContent>Figma</S.DetailContent>
        </S.DetailWrapper>
      </S.OverviewDetailContainer>
      <S.OverviewContainer>
        <S.OverviewTextWrapper>
          <S.OverviewTitle>Overview</S.OverviewTitle>
          <S.OverviewText>
            Emosic is an AI-powered, mood-based music recommendation plug-in
            seamlessly integrated with Spotify, designed with a keen focus on
            Human-AI interaction principles. Emosic empowers users to create
            personalized mood playlists that cater to their unique emotional
            states.
          </S.OverviewText>
        </S.OverviewTextWrapper>
        <S.OverviewTextWrapper>
          <S.OverviewTitle>Primary Users</S.OverviewTitle>
          <S.OverviewText>
            Current music streaming app users. Especially target those who
            create their own mood playlists or are unsatisfied with current
            music recommendations.
          </S.OverviewText>
        </S.OverviewTextWrapper>

        <S.OverviewTextWrapper2>
          <S.OverviewTitle>Background</S.OverviewTitle>
          <S.OverviewText>
            Our project stemmed from a mutual interest in mental health. To
            create a genuinely helpful tool, we began by delving into extensive
            research, exploring academic papers, and conducting surveys and
            interviews. We discovered that many people, like us, turn to music
            for comfort during stressful times. This led us to develop a music
            plug-in utilizing AI to provide mood-based recommendations, blending
            our passion for mental well-being with cutting-edge technology.
          </S.OverviewText>
        </S.OverviewTextWrapper2>
      </S.OverviewContainer>

      <S.ObjectiveContainer>
        <S.OverviewTitle>Objectives & Goals</S.OverviewTitle>
        <S.ObjectiveTextWrapper>
          <S.OverviewText>
            - Improve music recommendation accuracy
          </S.OverviewText>
          <S.OverviewText>
            - Design mood-based music recommendation features
          </S.OverviewText>
          <S.OverviewText>
            - Improve transparency between users and AI
          </S.OverviewText>
          <S.OverviewText>
            - Increase data collection channels and diversity
          </S.OverviewText>
        </S.ObjectiveTextWrapper>
      </S.ObjectiveContainer>

      <S.ProcessContainer>
        <S.OverviewTitle>Design Process</S.OverviewTitle>
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
