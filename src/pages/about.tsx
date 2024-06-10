import Head from "next/head";
import Navigation from "@components/commons/Navigation";
import About from "@components/templates/About";

export default function Home() {
  return (
    <>
      <Head>
        <title>About Hingis</title>
        <meta
          name="description"
          content="Hingis's Storytelling Time, About me"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <Navigation />
        <About />
      </main>
    </>
  );
}
