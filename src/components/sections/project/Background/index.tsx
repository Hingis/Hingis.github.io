import Image from "next/image";

import * as S from "./Background.styles";

const Background = () => {
  return (
    <>
      <S.TitleContainer>
        <S.TitleWrapper>
          <S.Number>01</S.Number>
          <S.Title>Background Research</S.Title>
          <S.Text>
            In the initial stage, we conducted a thorough background review.
            This included studying academic papers and articles on music
            streaming app features and the role of AI, as well as research on
            how music influences mood and its categorization. We also analyzed 6
            competitor apps to understand their recommendation systems and
            mood-related features, using this to inform and inspire our own
            brainstorming.
          </S.Text>
        </S.TitleWrapper>
      </S.TitleContainer>

      <S.ContentContainer>
        <S.Heading>Literary Review</S.Heading>
        <S.Text2>
          In laying the groundwork for our design, our team delved into an
          extensive literary review. Our objective was twofold: to grasp the
          intricate relationship between music and mood, and to glean insights
          that could shape the trajectory of our product development.
        </S.Text2>
        <Image
          src="/01Emosic/Literature_Review.png"
          alt="Literature Review"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <S.Text2>
          We approached the review with a structured focus, dividing our inquiry
          into several key themes:
        </S.Text2>
        <S.DetailContainer>
          <S.DetailWrapper>
            <S.Heading2>Data Collection Strategies</S.Heading2>
            <S.Text2>
              Understanding how AI models gather user feedback within music
              streaming applications was central to our investigation. We
              explored various feedback systems, evaluating their efficiency and
              applicability to our product. This analysis guided our decisions
              on implementing robust mechanisms for soliciting and processing
              user input.
            </S.Text2>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.Heading2>AI Awareness and Transparency</S.Heading2>
            <S.Text2>
              Central to our investigation was understanding how AI models
              gather user feedback within music streaming applications. We
              explored various feedback systems, evaluating their efficiency and
              applicability to our product. This analysis guided our decisions
              on implementing robust mechanisms for soliciting and processing
              user input.
            </S.Text2>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.Heading2>Psychological Insights</S.Heading2>
            <S.Text2>
              Delving into psychological research, we unearthed nuanced
              understandings of the interplay between mood and music. We
              examined prevailing mood models and their implications for
              categorizing and recognizing human emotions. This deep dive
              enabled us to refine our algorithm&rsquo;s capacity to discern and
              cater to diverse emotional states, enhancing user engagement and
              satisfaction.
            </S.Text2>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.Heading2>
              Current Methodologies in Music Recommendation
            </S.Heading2>
            <S.Text2>
              Grounded in technical inquiry, we dissected prevailing
              methodologies underpinning music recommendation algorithms.
              Understanding the intricacies of data processing and model
              training allowed us to optimize our plug-in&rsquo;s performance.
              Moreover, we identified constraints inherent to AI models,
              ensuring our design process remained cognizant of ethical and
              practical considerations.
            </S.Text2>
          </S.DetailWrapper>
        </S.DetailContainer>
      </S.ContentContainer>

      <S.ContentContainer>
        <S.Heading>Competitive Analysis</S.Heading>
        <S.Text2>
          I conducted a competitive analysis of four leading music streaming
          platforms: KKBOX, Apple Music, Spotify, and Amazon Music. This
          analysis honed in on understanding their recommendation models,
          including how they gather user feedback, as well as evaluating their
          mood-related features.
        </S.Text2>
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
            <S.Heading2>KKBOX</S.Heading2>
            <S.IconWrapper>
              <Image
                src="/01Emosic/KKBOX.jpeg"
                alt="Competitive Analysis"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
            </S.IconWrapper>
            <S.Text2>
              <S.HighlightText>- Mood Features: </S.HighlightText> Mood is
              categorized more as a combination of genre and scenario. <br />{" "}
              <S.HighlightText>- Feedback Mechanism: </S.HighlightText> Various
              actions including adding songs to queue, liking songs or
              playlists, downloading, and historical data usage for offline
              measurement. <br />{" "}
              <S.HighlightText>- Insights: </S.HighlightText> Offline
              measurement and A/B testing are utilized for recommendation
              accuracy.
            </S.Text2>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.Heading2>Spotify</S.Heading2>
            <S.IconWrapper>
              <Image
                src="/01Emosic/Spotify.jpeg"
                alt="Competitive Analysis"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
            </S.IconWrapper>
            <S.Text2>
              <S.HighlightText>- Mood Features: </S.HighlightText> Mood
              playlists are presented as special scenario titles, organized as
              playlists rather than individual songs. <br />
              <S.HighlightText>- Feedback Mechanism: </S.HighlightText> Users
              can interact with playlists through actions like adding to the
              collection, offline downloading, liking, hiding, or skipping
              songs. <br />
              <S.HighlightText>- Insights: </S.HighlightText> Manual curation,
              metadata, audio signals, and collaborative filtering are used for
              recommendation generation.
            </S.Text2>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.Heading2>Apple Music</S.Heading2>
            <S.IconWrapper>
              <Image
                src="/01Emosic/Apple_Music.jpeg"
                alt="Competitive Analysis"
                objectFit="cover"
                quality={100}
                width={110}
                height={100}
              />
            </S.IconWrapper>
            <S.Text2>
              <S.HighlightText>- Mood Features: </S.HighlightText>
              Mood isn&rsquo;t explicitly categorized. Instead, playlists,
              artists, albums, and subgenres are included. <br />
              <S.HighlightText>- Feedback Mechanism: </S.HighlightText>
              Users can interact with songs and playlists through actions like
              adding to the library, sharing, rating, liking, and providing
              feedback on preferences. <br />
              <S.HighlightText>- Insights: </S.HighlightText>
              User listening habits, likes/dislikes, and account creation
              preferences are considered for recommendations.
            </S.Text2>
          </S.DetailWrapper>
          <S.DetailWrapper>
            <S.Heading2>Amazon Music</S.Heading2>
            <S.IconWrapper>
              <Image
                src="/01Emosic/Amazon_Music.jpeg"
                alt="Competitive Analysis"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
            </S.IconWrapper>
            <S.Text2>
              <S.HighlightText>- Mood features: </S.HighlightText>
              No specific mood category available. <br />
              <S.HighlightText>- Feedback Mechanism: </S.HighlightText>
              Users can interact with music through actions like adding to the
              library, liking, adding to playlists, and providing initial
              preference settings. <br />
              <S.HighlightText>- Insights: </S.HighlightText>
              Limited mood-related features with a focus on artist preferences
              and similar music recommendations.
            </S.Text2>
          </S.DetailWrapper>
        </S.DetailContainer>
      </S.ContentContainer>

      <S.InsightContainer>
        <S.InsightWrapper>
          <S.InsightTitle>Insight</S.InsightTitle>
          <S.TextWrapper>
            <S.Heading3>1. Diverse Approach to Mood Categorization:</S.Heading3>
            <S.Text2>
              Each platform adopts a unique approach to categorizing mood within
              its interface, with some emphasizing genre and scenario
              combinations (KKBOX), while others focus on curated playlists
              (Spotify) or a broader range of categorized units including
              artists and albums (Apple Music).
            </S.Text2>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Heading3>2. Varied Feedback Mechanisms:</S.Heading3>
            <S.Text2>
              Feedback mechanisms across platforms vary in terms of users&rsquo;
              actions to interact with music content. These actions range from
              liking and adding to playlists to more nuanced features like
              historical data usage for recommendation refinement (KKBOX).
            </S.Text2>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Heading3>3. Recommendation Generation Methods:</S.Heading3>
            <S.Text2>
              Platforms generate recommendations by combining manual curation,
              metadata analysis, collaborative filtering, and user interaction
              data. Spotify and Apple Music, for example, leverage expert manual
              curation and user feedback, while KKBOX incorporates offline
              measurement and A/B testing for recommendation accuracy
              assessment.
            </S.Text2>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Heading3>4. Limited Focus on Mood in Some Platforms:</S.Heading3>
            <S.Text2>
              FNot all platforms prioritize mood as a distinct category for
              music recommendation. Amazon Music, for instance, lacks specific
              mood-related features, instead focusing more on artist preferences
              and similar music recommendations based on user interactions.
            </S.Text2>
          </S.TextWrapper>
          <S.TextWrapper>
            <S.Heading3>5. User-Centric Approach:</S.Heading3>
            <S.Text2>
              Despite differences in approach, all platforms aim to personalize
              recommendations based on user behavior and preferences. This
              includes considering factors like listening history,
              likes/dislikes, and account creation preferences to tailor
              recommendations to individual users.
            </S.Text2>
          </S.TextWrapper>
        </S.InsightWrapper>
      </S.InsightContainer>
    </>
  );
};

export default Background;
