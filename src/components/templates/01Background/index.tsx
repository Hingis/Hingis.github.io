import Image from "next/image";

import * as S from "./Background.styles";
import * as SS from "../shared.styles";
import * as T from "@styles/typography";
import SectionTitle from "../../sections/project/SectionTitle";
import SectionInsight from "@components/sections/project/SectionInsight";

const Background = () => {
  const InsightDetail = [
    {
      title: "1. Diverse Approach to Mood Categorization",
      text: "Each platform adopts a unique approach to categorizing mood within  its interface, with some emphasizing genre and scenario combinations (KKBOX), while others focus on curated playlists (Spotify) or a broader range of categorized units including artists and albums (Apple Music).",
    },
    {
      title: "2. Varied Feedback Mechanisms",
      text: `Feedback mechanisms across platforms vary in terms of users' actions to interact with music content. These actions range from liking and adding to playlists to more nuanced features like historical data usage for recommendation refinement (KKBOX).`,
    },
    {
      title: "3. Recommendation Generation Methods",
      text: "Platforms generate recommendations by combining manual curation, metadata analysis, collaborative filtering, and user interaction data. Spotify and Apple Music, for example, leverage expert manual curation and user feedback, while KKBOX incorporates offline measurement and A/B testing for recommendation accuracy assessment.",
    },
    {
      title: "4. Limited Focus on Mood in Some Platforms",
      text: "Not all platforms prioritize mood as a distinct category for music recommendation. Amazon Music, for instance, lacks specific mood-related features, instead focusing more on artist preferences and similar music recommendations based on user interactions.",
    },
    {
      title: "5. User-Centric Approach",
      text: "Despite differences in approach, all platforms aim to personalize recommendations based on user behavior and preferences. This includes considering factors like listening history, likes/dislikes, and account creation preferences to tailor recommendations to individual users.",
    },
  ];

  return (
    <>
      <SectionTitle
        number="01"
        title="Background Research"
        text="In the initial stage, we conducted a thorough background review.
            This included studying academic papers and articles on music
            streaming app features and the role of AI, as well as research on
            how music influences mood and its categorization. We also analyzed 6
            competitor apps to understand their recommendation systems and
            mood-related features, using this to inform and inspire our own
            brainstorming."
        bgColor="#1ed760"
      />

      <SS.ContentContainer>
        <T.Heading3>Literary Review</T.Heading3>
        <T.Text1>
          In laying the groundwork for our design, our team delved into an
          extensive literary review. Our objective was twofold: to grasp the
          intricate relationship between music and mood, and to glean insights
          that could shape the trajectory of our product development.
        </T.Text1>
        <Image
          src="/01Emosic/Literature_Review.png"
          alt="Literature Review"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <T.Text1>
          We approached the review with a structured focus, dividing our inquiry
          into several key themes:
        </T.Text1>
        <S.DetailContainer>
          <S.DetailWrapper>
            <S.HeadingWrapper>
              <T.Heading4 textAlign="center">
                Data Collection Strategies
              </T.Heading4>
            </S.HeadingWrapper>
            <T.Text1>
              Understanding how AI models gather user feedback within music
              streaming applications was central to our investigation. We
              explored various feedback systems, evaluating their efficiency and
              applicability to our product. This analysis guided our decisions
              on implementing robust mechanisms for soliciting and processing
              user input.
            </T.Text1>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.HeadingWrapper>
              <T.Heading4 textAlign="center">
                AI Awareness and Transparency
              </T.Heading4>
            </S.HeadingWrapper>
            <T.Text1>
              Central to our investigation was understanding how AI models
              gather user feedback within music streaming applications. We
              explored various feedback systems, evaluating their efficiency and
              applicability to our product. This analysis guided our decisions
              on implementing robust mechanisms for soliciting and processing
              user input.
            </T.Text1>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.HeadingWrapper>
              <T.Heading4 textAlign="center">Psychological Insights</T.Heading4>
            </S.HeadingWrapper>
            <T.Text1>
              Delving into psychological research, we unearthed nuanced
              understandings of the interplay between mood and music. We
              examined prevailing mood models and their implications for
              categorizing and recognizing human emotions. This deep dive
              enabled us to refine our algorithm&rsquo;s capacity to discern and
              cater to diverse emotional states, enhancing user engagement and
              satisfaction.
            </T.Text1>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.HeadingWrapper>
              <T.Heading4 textAlign="center">
                Current Methodologies in Music Recommendation
              </T.Heading4>
            </S.HeadingWrapper>
            <T.Text1>
              Grounded in technical inquiry, we dissected prevailing
              methodologies underpinning music recommendation algorithms.
              Understanding the intricacies of data processing and model
              training allowed us to optimize our plug-in&rsquo;s performance.
              Moreover, we identified constraints inherent to AI models,
              ensuring our design process remained cognizant of ethical and
              practical considerations.
            </T.Text1>
          </S.DetailWrapper>
        </S.DetailContainer>
      </SS.ContentContainer>

      <SS.ContentContainer>
        <T.Heading3>Competitive Analysis</T.Heading3>
        <T.Text1>
          I conducted a competitive analysis of four leading music streaming
          platforms:{" "}
          <T.TextHighlight bgColor="#8eebb0">
            KKBOX, Apple Music, Spotify, and Amazon Music.
          </T.TextHighlight>{" "}
          This analysis honed in on understanding their recommendation models,
          including how they gather user feedback, as well as evaluating their
          mood-related features.
        </T.Text1>
        <Image
          src="/01Emosic/Competitive_Analysis.png"
          alt="Competitive Analysis"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />

        <S.DetailContainer>
          <S.DetailWrapper>
            <T.Heading4 textAlign="center">KKBOX</T.Heading4>
            <S.IconWrapper>
              <Image
                src="/01Emosic/Icon_KKBOX.jpeg"
                alt="KKBOX Icon"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
            </S.IconWrapper>
            <T.Text1>
              <T.TextBold>- Mood Features: </T.TextBold> Mood is categorized
              more as a combination of genre and scenario. <br />{" "}
              <T.TextBold>- Feedback Mechanism: </T.TextBold> Various actions
              including adding songs to queue, liking songs or playlists,
              downloading, and historical data usage for offline measurement.{" "}
              <br /> <T.TextBold>- Insights: </T.TextBold> Offline measurement
              and A/B testing are utilized for recommendation accuracy.
            </T.Text1>
          </S.DetailWrapper>

          <S.DetailWrapper>
            <T.Heading4 textAlign="center">Spotify</T.Heading4>

            <S.IconWrapper>
              <Image
                src="/01Emosic/Icon_Spotify.jpeg"
                alt="Spotify Icon"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
            </S.IconWrapper>
            <T.Text1>
              <T.TextBold>- Mood Features: </T.TextBold> Mood playlists are
              presented as special scenario titles, organized as playlists
              rather than individual songs. <br />
              <T.TextBold>- Feedback Mechanism: </T.TextBold> Users can interact
              with playlists through actions like adding to the collection,
              offline downloading, liking, hiding, or skipping songs. <br />
              <T.TextBold>- Insights: </T.TextBold> Manual curation, metadata,
              audio signals, and collaborative filtering are used for
              recommendation generation.
            </T.Text1>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <T.Heading4 textAlign="center">Apple Music</T.Heading4>
            <S.IconWrapper>
              <Image
                src="/01Emosic/Icon_Apple_Music.jpeg"
                alt="Apple Music icon"
                objectFit="cover"
                quality={100}
                width={110}
                height={100}
              />
            </S.IconWrapper>
            <T.Text1>
              <T.TextBold>- Mood Features: </T.TextBold>
              Mood isn&rsquo;t explicitly categorized. Instead, playlists,
              artists, albums, and subgenres are included. <br />
              <T.TextBold>- Feedback Mechanism: </T.TextBold>
              Users can interact with songs and playlists through actions like
              adding to the library, sharing, rating, liking, and providing
              feedback on preferences. <br />
              <T.TextBold>- Insights: </T.TextBold>
              User listening habits, likes/dislikes, and account creation
              preferences are considered for recommendations.
            </T.Text1>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <T.Heading4 textAlign="center">Amazon Music</T.Heading4>
            <S.IconWrapper>
              <Image
                src="/01Emosic/Icon_Amazon_Music.jpeg"
                alt="Amazon Music Icon"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
            </S.IconWrapper>
            <T.Text1>
              <T.TextBold>- Mood features: </T.TextBold>
              No specific mood category available. <br />
              <T.TextBold>- Feedback Mechanism: </T.TextBold>
              Users can interact with music through actions like adding to the
              library, liking, adding to playlists, and providing initial
              preference settings. <br />
              <T.TextBold>- Insights: </T.TextBold>
              Limited mood-related features with a focus on artist preferences
              and similar music recommendations.
            </T.Text1>
          </S.DetailWrapper>
        </S.DetailContainer>
      </SS.ContentContainer>

      <SectionInsight
        titleColor="#005f20"
        bgColor="#8eebb0"
        contentArray={InsightDetail}
      />
    </>
  );
};

export default Background;
