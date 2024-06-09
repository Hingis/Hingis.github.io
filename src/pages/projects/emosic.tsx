import Head from "next/head";
import Navigation from "@components/commons/Navigation";
import ProjectOverview from "@components/templates/01ProjectOverview";
import Background from "@components/templates/02Background";
import UserResearch from "@components/templates/03UserResearch";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emosic</title>
        <meta name="description" content="Hingis's Storytelling Time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navigation />
        <ProjectOverview />
        <Background />
        <UserResearch />
      </main>
    </>
  );
}
