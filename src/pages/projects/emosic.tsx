import Head from "next/head";
import Navigation from "@components/commons/Navigation";
import ProjectOverview from "@components/sections/project/ProjectOverview";
import Background from "@components/sections/project/Background";

export default function Home() {
  return (
    <>
      <Head>
        <title>Emosic</title>
        <meta name="description" content="Hingis's Storytelling Time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Navigation />
        <ProjectOverview />
        <Background />
      </main>
    </>
  );
}
