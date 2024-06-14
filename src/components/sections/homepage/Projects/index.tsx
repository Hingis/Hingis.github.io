import { useEffect } from "react";
import { useRouter } from "next/router";
import Tabs from "@components/commons/Tabs";
import ProjectItem from "./components/ProjectItem";
import Carousel from "@components/commons/Carousel";
import { carousel1, carousel2 } from "@misc-data/gallery";

import * as S from "./Projects.styles";
import * as T from "@styles/typography";

const tabs = [
  {
    title: "UI / UX",
    content: (
      <S.ProjectWrapper>
        <ProjectItem
          title="Emosic: A Mood-Based Music Recommendation Plug-in Embedded Into Spotify"
          imageSrc="/00Homepage/Emosic.png"
          link="/projects/emosic"
        />
        {/* <ProjectItem
          title="DELL World: Camp Furbish"
          imageSrc="/00Homepage/Dell.png"
          link="#"
        /> */}
      </S.ProjectWrapper>
    ),
  },
  {
    title: "Illustrations / Art",
    content: (
      <S.CarouselWrapper>
        <T.Heading3 textAlign="center" color="white">
          Illustrations
        </T.Heading3>
        <Carousel imgsArray={carousel1} />
        <Carousel imgsArray={carousel2} />
      </S.CarouselWrapper>
    ),
  },
  // { title: "Others", content: "This is Tab 3 content" },
];

const Projects = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      console.log("Route changed!");
      window.scrollTo(-100, -1000);
    };

    router.events.on("routeChangeComplete", handleRouteChange);

    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return (
    <S.ProjectContainer>
      <S.TabsWrapper>
        <Tabs tabs={tabs} />
      </S.TabsWrapper>
    </S.ProjectContainer>
  );
};

export default Projects;
