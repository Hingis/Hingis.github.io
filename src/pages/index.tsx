import Head from "next/head";
import Navigation from "@components/commons/Navigation";
import Hero from "@components/sections/homepage/Hero";
import Projects from "@components/sections/homepage/Projects";

export default function Home() {
  return (
    <>
      <Head>
        <title>Hingis&rsquo;s Storytelling Time</title>
        <meta name="description" content="Hingis's Storytelling Time" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navigation />
        <Hero />
        <section id="project">
          <Projects />
        </section>
      </main>
    </>
  );
}
