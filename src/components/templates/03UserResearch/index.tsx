import Image from "next/image";

import SectionTitle from "@components/sections/project/SectionTitle";
import SectionInsight from "@components/sections/project/SectionInsight";

import * as S from "./UserResearch.styles";
import * as SS from "../shared.styles";
import * as T from "@styles/typography";
import Icon from "@components/commons/Icon";

const UserResearch = () => {
  const InsightDetail = [
    {
      title: "1. Diverse Mood Preferences",
      text: "Users express a wide range of mood preferences when creating playlists, spanning from study-focused and relaxed to energized and motivated. This highlights the importance of catering to various emotional states in playlist organization.",
    },
    {
      title: "2. Varied Music Sources",
      text: "Users acquire music from diverse sources, including background videos, game soundtracks, friend recommendations, and streaming platforms. This suggests a need for a versatile recommendation system that accounts for various music discovery channels.",
    },
    {
      title: "3. Mixed Feedback on Current Recommendation Systems",
      text: "Users express dissatisfaction with the speed and accuracy of current music recommendation systems, particularly regarding the repetitive nature of suggestions and lack of trust in AI.",
    },
    {
      title: "4. Preference for Minimal Input",
      text: "Users prefer minimal input when interacting with recommendation systems, citing concerns about privacy and reluctance to provide extensive feedback.",
    },
    {
      title: "5. Desire for Automation and Simplification",
      text: "Users seek automation features for playlist management, including voice control for adding songs and automatic analysis of existing playlists to categorize new additions.",
    },
    {
      title: "6. Privacy Concerns and Preference for Control",
      text: "Users prioritize privacy and control over their music listening habits, expressing reluctance to share playlists on social media and preferring manual playlist management.",
    },
  ];

  return (
    <>
      <SectionTitle
        number="02"
        title="User Research"
        text="In our user research phase, we gathered insights from 73 participants aged 18-35 through an online survey, focusing on music habits, app usability, and mood-music connections. We followed up with 10 targeted interviews to delve deeper into playlist habits, music discovery sources, and feedback on our mood-based recommendation plug-in concept. This research fuels our project direction, ensuring we align closely with user needs and preferences"
        bgColor="#1ed760"
      />

      <SS.ContentContainer>
        <T.Heading3>Online Survey</T.Heading3>
        <T.Text1>
          Our online survey aimed to gather insights from individuals aged 18-35
          regarding their music listening habits and experiences with music
          streaming apps. With <T.TextBold>73</T.TextBold> valid responses
          collected, we delved into various aspects, including{" "}
          <T.TextHighlight bgColor="#8eebb0">
            usability pain points
          </T.TextHighlight>{" "}
          within current apps,
          <T.TextHighlight bgColor="#8eebb0">
            preferences for playlist categorization
          </T.TextHighlight>
          , and perceptions regarding{" "}
          <T.TextHighlight bgColor="#8eebb0">
            the relationship between mood and music
          </T.TextHighlight>
          . By engaging participants in this survey, we gained valuable data to
          inform our project development and ensure our solution resonates with
          the needs and preferences of our target audience.
        </T.Text1>
        <S.PurposeContainer>
          <T.Subtitle1 color="#1ed760">PURPOSE</T.Subtitle1>
          <T.Text1>
            1. Screener for follow-up interviews <br />
            2. Quantitative data collection to discover current usability
            painpoints and potential insights for following feature development
          </T.Text1>
        </S.PurposeContainer>

        <T.Heading4>Survey Design</T.Heading4>
        <S.QuestionContainer>
          <S.QuestionWrapper>
            <S.QuestionCategoryWrapper>
              <Icon name="Headphone" color="white" size={76} />
              <T.Heading5 textAlign="center">
                Current Music Listening Habits
              </T.Heading5>
            </S.QuestionCategoryWrapper>
            <S.QuestionTextWrapper>
              <S.QuestionText>
                Do you usually listen to music? Briefly describe the situation
                you would listen to music.
              </S.QuestionText>
              <S.QuestionText>How often do you listen to music?</S.QuestionText>
              <S.QuestionText>
                Are you currently using a music streaming platform(i.g. Spotify,
                Apple Music, Pandora...)?
              </S.QuestionText>
              <S.QuestionText>
                Would you listen to music as recommended by the system?
              </S.QuestionText>
            </S.QuestionTextWrapper>
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.QuestionCategoryWrapper>
              <Icon name="Message" color="white" size={76} />
              <T.Heading5 textAlign="center">
                Feedback on Current Music Streaming Apps
              </T.Heading5>
            </S.QuestionCategoryWrapper>
            <S.QuestionTextWrapper>
              <S.QuestionText>
                {" "}
                On a scale from 1 to 5, how would you rate your satisfaction
                with the recommended music in the platform you mention above?
              </S.QuestionText>
              <S.QuestionText>
                What would you do if you were not satisfied with a recommended
                song?
              </S.QuestionText>
              <S.QuestionText>
                Is there anything that you think the song recommendation system
                could be improved?Are there any improvements or additional
                features you would like to see in music streaming apps to better
                support mood-based playlist categorization?
              </S.QuestionText>
              <S.QuestionText>Favorite / Most used features</S.QuestionText>
            </S.QuestionTextWrapper>
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.QuestionCategoryWrapper>
              <Icon name="Emoji" color="white" size={76} />
              <T.Heading5 textAlign="center">
                Mood and Music Correlation
              </T.Heading5>
            </S.QuestionCategoryWrapper>
            <S.QuestionTextWrapper>
              <S.QuestionText>
                Would you choose certain music based on current moods? (i.g.
                happy, sad, angry, relaxed...)
              </S.QuestionText>
              <S.QuestionText>
                How do you typically categorize your music playlists? (e.g., by
                genre, activity, mood, etc.)
              </S.QuestionText>
              <S.QuestionText>
                When creating playlists, do you consider mood as a factor for
                categorization? If so, how important is the mood in your
                playlist organization?
              </S.QuestionText>
              <S.QuestionText>
                Have you used any features within music streaming apps that
                specifically cater to mood-based playlist creation? How often?
              </S.QuestionText>
              <S.QuestionText>
                Do you believe that music has the power to influence or reflect
                your mood? How does this belief impact your approach to playlist
                creation and organization?
              </S.QuestionText>
            </S.QuestionTextWrapper>
          </S.QuestionWrapper>
        </S.QuestionContainer>

        <T.Heading4>Results</T.Heading4>
        <S.ResultContainer>
          <S.ResultWrapper>
            <Image
              src="/01Emosic/Survey_Result01.jpg"
              alt="Competitive Analysis"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
            <Image
              src="/01Emosic/Survey_Result02.jpg"
              alt="Competitive Analysis"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </S.ResultWrapper>
          <S.ResultWrapper>
            <Image
              src="/01Emosic/Survey_Result03.jpg"
              alt="Competitive Analysis"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
            <Image
              src="/01Emosic/Survey_Result04.jpg"
              alt="Competitive Analysis"
              objectFit="cover"
              quality={100}
              layout="responsive"
              width={100}
              height={85}
            />
          </S.ResultWrapper>
        </S.ResultContainer>
      </SS.ContentContainer>

      <SS.ContentContainer>
        <T.Heading3>User Interview</T.Heading3>
        <T.Text1>
          After the online survey, we screened out 10 participants who were our
          potential target audience and conducted the follow-up user interview.
          Our main interview questions were divided into{" "}
          <T.TextBold>3</T.TextBold> parts:{" "}
          <T.TextHighlight bgColor="#8eebb0">
            Playlist Categorization
          </T.TextHighlight>
          , <T.TextHighlight bgColor="#8eebb0">Music Sources</T.TextHighlight>,
          and{" "}
          <T.TextHighlight bgColor="#8eebb0">
            Feedback on Our Concept
          </T.TextHighlight>
          .
        </T.Text1>

        <T.Heading4>Interview Questions</T.Heading4>
        <S.QuestionContainer>
          <S.QuestionWrapper>
            <S.QuestionCategoryWrapper>
              <T.Heading5 textAlign="center">
                Playlist Categorization
              </T.Heading5>
              <T.Text1 color="#272727" textAlign="center">
                Let participants elaborate how they categorize music playlists
                based on mood.
              </T.Text1>
            </S.QuestionCategoryWrapper>
            <S.QuestionTextWrapper>
              <S.QuestionText>
                Can you walk us through your process of creating a new playlist?
              </S.QuestionText>
              <S.QuestionText>
                Do you categorize your playlists based on specific themes,
                genres, activities, or moods? If so, could you provide examples?
              </S.QuestionText>
              <S.QuestionText>
                How do you decide which songs to include in a particular
                playlist? Are there any specific criteria you follow?
              </S.QuestionText>
              <S.QuestionText>
                Have you encountered any challenges or frustrations when
                organizing your playlists? If yes, could you elaborate on them?
              </S.QuestionText>
              <S.QuestionText>
                How often do you update or modify your playlists, particularly
                those based on mood?
              </S.QuestionText>
            </S.QuestionTextWrapper>
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.QuestionCategoryWrapper>
              <T.Heading5 textAlign="center">Music Discovery</T.Heading5>
              <T.Text1 color="#272727" textAlign="center">
                Ask participants how they get to know new songs and what action
                they would take.
              </T.Text1>
            </S.QuestionCategoryWrapper>
            <S.QuestionTextWrapper>
              <S.QuestionText>
                Where do you primarily discover new music? (e.g., streaming
                platforms, radio, social media, recommendations from friends,
                etc.)
              </S.QuestionText>
              <S.QuestionText>
                Can you describe your typical process for finding new songs or
                artists?
              </S.QuestionText>
              <S.QuestionText>
                Are there any specific features or aspects of music discovery
                platforms that you particularly appreciate or wish were
                improved?
              </S.QuestionText>
              <S.QuestionText>Favorite / Most used features</S.QuestionText>
            </S.QuestionTextWrapper>
          </S.QuestionWrapper>
          <S.QuestionWrapper>
            <S.QuestionCategoryWrapper>
              <T.Heading5 textAlign="center">Concept Feedback</T.Heading5>
              <T.Text1 color="#272727" textAlign="center">
                We shared our current product concepts and let participants
                describe their feedback and feelings.
              </T.Text1>
            </S.QuestionCategoryWrapper>
            <S.QuestionTextWrapper>
              <S.QuestionText>
                We're working on developing a mood-based music recommendation
                plug-in. What are your initial thoughts on this concept?
              </S.QuestionText>
              <S.QuestionText>
                Are there any specific features or functionalities you would
                like to see in a mood-based recommendation plug-in?
              </S.QuestionText>
              <S.QuestionText>
                What concerns or reservations, if any, do you have about using a
                mood-based recommendation plug-in?
              </S.QuestionText>
              <S.QuestionText>
                Do you have any additional suggestions or feedback that you
                think would be valuable for us to consider as we develop this
                concept further?
              </S.QuestionText>
            </S.QuestionTextWrapper>
          </S.QuestionWrapper>
        </S.QuestionContainer>

        <T.Heading4>Brief User Feedback</T.Heading4>
        <S.FeedbackContainer>
          <S.FeedbackWrapper>
            <S.UserWrapper>
              <Image
                src="/01Emosic/User01.png"
                alt="User photo"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
              <S.UserName>Teacher / F / 34</S.UserName>
            </S.UserWrapper>
            <S.FeedbackTextContainer>
              <S.FeedbackTextWrapper>
                "I seldom like or dislike; just add the song to the list cause I
                hate input and AI follow-up."
              </S.FeedbackTextWrapper>
              <S.FeedbackTextWrapper>
                "I have relaxed, calm down, evening playlist, and fast beat
                music for the workout."
              </S.FeedbackTextWrapper>
            </S.FeedbackTextContainer>
          </S.FeedbackWrapper>
          <S.FeedbackWrapperReverse>
            <S.FeedbackTextContainer>
              <S.FeedbackTextWrapper>
                “I think Spotify recommended too many similar and repeated songs
                to me, I would like to listen to something new.”
              </S.FeedbackTextWrapper>
              <S.FeedbackTextWrapper>
                "I always play the song based on different scenarios."
              </S.FeedbackTextWrapper>
              <S.FeedbackTextWrapper>
                "I would like the song but not using dislike. If the song is not
                good for me, I'll just skip it."
              </S.FeedbackTextWrapper>
            </S.FeedbackTextContainer>
            <S.UserWrapper>
              <Image
                src="/01Emosic/User02.png"
                alt="User photo"
                objectFit="cover"
                quality={100}
                width={100}
                height={100}
              />
              <S.UserName>Teacher / F / 34</S.UserName>
            </S.UserWrapper>
          </S.FeedbackWrapperReverse>
        </S.FeedbackContainer>
      </SS.ContentContainer>

      <SectionInsight
        titleColor="#005f20"
        bgColor="#8eebb0"
        contentArray={InsightDetail}
      />
    </>
  );
};

export default UserResearch;
