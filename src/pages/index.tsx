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
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <main>
        <Navigation />
        <Hero />
        <Projects />
      </main>
    </>
  );
}
