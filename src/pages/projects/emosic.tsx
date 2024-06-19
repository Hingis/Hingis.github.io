import Head from "next/head";
import Navigation from "@components/commons/Navigation";
import ProjectOverview from "@components/templates/00ProjectOverview";
import Background from "@components/templates/01Background";
import UserResearch from "@components/templates/02UserResearch";
import UserDesign from "@components/templates/03UserDesign";
import UsabilityTesting from "@components/templates/04UsabilityTesting";
import Iteration from "@components/templates/05Iterations";
import Summary from "@components/templates/06Summary";
import Footer from "@components/commons/Footer";

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
        <UserDesign />
        <UsabilityTesting />
        <Iteration />
        <Summary />
        <Footer />
      </main>
    </>
  );
}
