import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>KKM | Portfolio</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="KKM | Portfolio" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="KKM | Portfolio" />
        <meta name="description" content="Hey! I'm KKM, a Python AWS Developer dedicated to building scalable and efficient backend systems." />

        <meta property="og:title" content="KKM | Portfolio" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://krishnakantmishra.com/" />
        <meta property="og:image" content="/screenshot.png" />
        <meta property="og:description" content="Hey! I'm KKM, a Python AWS Developer dedicated to building scalable and efficient backend systems." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@krishnakant_m" />
        <meta name="twitter:title" content="KKM | Portfolio" />
        <meta name="twitter:description" content="Hey! I'm KKM, a Python AWS Developer dedicated to building scalable and efficient backend systems." />
        <meta name="twitter:creator" content="@krishnakant_m" />
        <meta name="twitter:image" content="/screenshot.png" />

      </Head>
      <Home />
    </>
  );
}
