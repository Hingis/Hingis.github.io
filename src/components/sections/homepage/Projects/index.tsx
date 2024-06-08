import Tabs from "@components/commons/Tabs";
import ProjectItem from "./components/ProjectItem";

import * as S from "./Projects.styles";

const tabs = [
  {
    title: "UI/UX",
    content: (
      <S.ProjectWrapper>
        <ProjectItem
          title="Emosic: A Mood-Based Music Recommendation Plug-in Embedded Into Spotify"
          imageSrc="/00Homepage/Emosic.png"
          link="/projects/emosic"
        />
        <ProjectItem
          title="DELL World: Camp Furbish"
          imageSrc="/00Homepage/Dell.png"
          link="#"
        />
      </S.ProjectWrapper>
    ),
  },
  { title: "Illustrations/Art", content: "This is Tab 2 content" },
  { title: "Others", content: "This is Tab 3 content" },
];

const Projects = () => {
  return (
    <S.ProjectContainer>
      <S.TabsWrapper>
        <Tabs tabs={tabs} />
      </S.TabsWrapper>
    </S.ProjectContainer>
  );
};

export default Projects;
