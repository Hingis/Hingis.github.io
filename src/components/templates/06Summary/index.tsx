import SectionTitle from "@components/sections/project/SectionTitle";

import * as SS from "../shared.styles";
import * as T from "@styles/typography";

const Summary = () => {
  return (
    <>
      <SectionTitle
        number="06"
        title="Summary"
        text="In the summary section, I outlined key takeaways and reflections from this project, as well as proposed future steps for improvement."
        bgColor="#1ed760"
      />

      <SS.ContentContainer>
        <T.Heading3>Takeaways & Reflection</T.Heading3>
        <SS.ListTextWrapper>
          <T.ListText>
            Users need clear guidance and immediate feedback to navigate new
            features effectively.
          </T.ListText>
          <T.ListText>
            Differentiating features and reducing cognitive load enhances
            usability.
          </T.ListText>
          <T.ListText>
            Engaging, gamified elements can significantly improve user
            satisfaction.
          </T.ListText>
          <T.ListText>
            Providing transparency about how user feedback is utilized fosters
            trust and encourages participation.
          </T.ListText>
        </SS.ListTextWrapper>

        <T.Heading3>Further Steps</T.Heading3>
        <T.Heading4>Mood History and Reports</T.Heading4>
        <T.Text1>
          Develop a user dashboard where users can view their mood history and
          personalized reports, providing deeper insights into their listening
          habits.
        </T.Text1>
        <T.Heading4>Social Interaction</T.Heading4>
        <T.Text1>
          Introduce features that allow users to share their mood test results
          and playlists with friends, enhancing social engagement.
        </T.Text1>
        <T.Heading4>Personalized Searching Filters</T.Heading4>
        <T.Text1>
          Allow users to customize their search parameters based on their unique
          preferences and listening habits. Through this feature, we can enhance
          the user experience and make the music discovery process more
          tailored.
        </T.Text1>
      </SS.ContentContainer>
    </>
  );
};

export default Summary;
