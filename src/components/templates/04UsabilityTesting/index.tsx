import Image from "next/image";

import SectionTitle from "@components/sections/project/SectionTitle";
import SectionInsight from "@components/sections/project/SectionInsight";

import * as SS from "../shared.styles";
import * as T from "@styles/typography";

const UsabilityTesting = () => {
  const InsightDetail = [
    {
      title: "1. Clarity and Guidance",
      text: "Users require clear onboarding and guidance to navigate new features like Mood Mode effectively. Visual cues, tooltips, or tutorials can help orient users and streamline their experience.",
    },
    {
      title: "2. Immediate Feedback",
      text: `Corresponding with "Visibility of System Status" from N&N Group's Heuristic Evaluation rules, users value immediate feedback or visible changes after taking actions within the app, such as providing feedback on songs or selecting mood preferences.`,
    },
    {
      title: "3. Engaging Experiences",
      text: "Gamified elements, such as the mood test, can enhance user engagement and enjoyment of the app. Incorporating interactive and engaging features can improve overall user satisfaction.",
    },
    {
      title: "4. Well-Visualized Presentation",
      text: "‍Users prefer concise information and streamlined presentation of results or feedback, avoiding excessive text or overwhelming interfaces.",
    },
  ];

  return (
    <>
      <SectionTitle
        number="04"
        title="Usability Testing"
        text={`After designing our lo-fi prototypes, we've progressed to usability testing. 
        With 10 participants, we've administered specific tasks to evaluate prototype usability and provide qualitative feedback for further refinement through post-test interviews.`}
        bgColor="#1ed760"
      />

      <SS.ContentContainer>
        <T.Heading3>Overview</T.Heading3>
        <T.Text1>
          In our usability test, we aim to evaluate the effectiveness and
          user-friendliness of our lo-fi prototypes, particularly focusing on
          the newly implemented <T.TextBold>Emotion/Mood Mode</T.TextBold>{" "}
          feature and feedback mechanisms. With 4 primary tasks and associated
          flows, we&rsquo;ll assess how users interact with the prototypes and
          gather insights to refine our design further.
        </T.Text1>

        <T.Heading4>Task 1: Initial Setting</T.Heading4>
        <T.Text1>
          <T.TextBold>Scenario:</T.TextBold> You&rsquo;re feeling sad today and
          would like to use Mood Mode to generate music suitable for a sad mood.
        </T.Text1>
        <Image
          src="/01Emosic/Task01.png"
          alt="Usability Test Task 1"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <T.Text1>
          <T.TextBold>User Feedback</T.TextBold>
        </T.Text1>
        <SS.ListTextWrapper>
          <T.ListText>
            Difficulty finding the starting point, as it resembles the regular
            Spotify homepage.
          </T.ListText>
          <T.ListText>
            Lack of tooltips or tutorials led to confusion and a sense of being
            lost.
          </T.ListText>
          <T.ListText>
            Fatigue from reading through text in the mood test; users struggled
            to find the option that best fit their mood.
          </T.ListText>
          <T.ListText>
            Request for more scenario descriptions to guide users in identifying
            their feelings.
          </T.ListText>
          <T.ListText>
            Overwhelmed by excessive text in the mood result dialog; users
            prefer concise information.
          </T.ListText>
          <T.ListText>
            Desire for the system to pre-select artists before user input.
          </T.ListText>
          <T.ListText>
            Appreciation for the refresh/regenerate feature to explore
            alternative options.
          </T.ListText>
          <T.ListText>
            Lack of feedback during playlist generation leaves users uncertain
            about completion status.
          </T.ListText>
        </SS.ListTextWrapper>

        <T.Heading4>Task 2: Listen to Songs and Give Feedback</T.Heading4>
        <T.Text1>
          <T.TextBold>Scenario:</T.TextBold> Listen to songs and provide
          feedback based on how well they match your feelings.
        </T.Text1>
        <Image
          src="/01Emosic/Task02.png"
          alt="Usability Test Task 2"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <T.Text1>
          <T.TextBold>User Feedback</T.TextBold>
        </T.Text1>
        <SS.ListTextWrapper>
          <T.ListText>
            Confusion between &rdquo;Match&rdquo; and &rdquo;Like&rdquo;
            features; users suggest clearer differentiation.
          </T.ListText>
          <T.ListText>
            Request for a tutorial to understand the &rdquo;Match&rdquo; feature
            better.
          </T.ListText>
          <T.ListText>
            Uncertainty about the system&rsquo;s response after providing
            feedback; desire for immediate changes.
          </T.ListText>
          <T.ListText>
            Appreciation for the slider but dislike excessive text.
          </T.ListText>
          <T.ListText>
            Inquiry about changing the mood from the current mood playlist.
          </T.ListText>
        </SS.ListTextWrapper>

        <T.Heading4>Task 3: Check-In and Mood Test</T.Heading4>
        <T.Text1>
          <T.TextBold>Scenario:</T.TextBold> Perform a mood check-in and take
          the mood test to generate a personalized playlist.
        </T.Text1>
        <Image
          src="/01Emosic/Task03.png"
          alt="Usability Test Task 3"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <T.Text1>
          <T.TextBold>User Feedback</T.TextBold>
        </T.Text1>
        <SS.ListTextWrapper>
          <T.ListText>
            Enjoyment of the fun and gamified aspect of the mood test.
          </T.ListText>
          <T.ListText>
            Curiosity about how the test affects the algorithm and data
            collection.
          </T.ListText>
          <T.ListText>
            Inquiry about sharing the test or test results with friends.
          </T.ListText>
          <T.ListText>
            Interest in accessing result history or mood report.
          </T.ListText>
          <T.ListText>
            Preference for not having the mood test popup constantly.
          </T.ListText>
        </SS.ListTextWrapper>

        <T.Heading4>Task 4: Create a Playlist with Recommendation</T.Heading4>
        <T.Text1>
          <T.TextBold>Scenario:</T.TextBold> You want to create a personalized
          playlist for an upcoming event or activity.
        </T.Text1>
        <Image
          src="/01Emosic/Task04.png"
          alt="Usability Test Task 4"
          objectFit="cover"
          quality={100}
          layout="responsive"
          width={100}
          height={85}
        />
        <T.Text1>
          <T.TextBold>User Feedback</T.TextBold>
        </T.Text1>
        <SS.ListTextWrapper>
          <T.ListText>
            Appreciation for the feature when unable to decide what to add to a
            specific playlist.
          </T.ListText>
          <T.ListText>
            Suggestion for including options beyond mood for playlist creation.
          </T.ListText>
          <T.ListText>
            Desire for the feature to be available for both new playlist
            creation and existing playlist updates.
          </T.ListText>
        </SS.ListTextWrapper>
      </SS.ContentContainer>

      <SectionInsight
        titleColor="#005f20"
        bgColor="#8eebb0"
        contentArray={InsightDetail}
      />
    </>
  );
};

export default UsabilityTesting;
