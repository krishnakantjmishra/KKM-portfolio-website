import Head from "next/head";
import { Home } from "@/components/home/Home";

export default function home() {
  return (
    <>
      <Head>
        <title>Krishnakant Mishra | Python AWS Developer</title>
        <link rel="shortcut icon" href="/favicon.png" />
        <meta name="description" content="Krishnakant Mishra | Python AWS Developer" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:title" content="Krishnakant Mishra | Python AWS Developer" />
        <meta name="description" content="Hey! I'm Krishnakant Mishra, and I'm a Python AWS Developer dedicated to building scalable and efficient backend systems." />

        <meta property="og:title" content="Krishnakant Mishra | Python AWS Developer" />
        <meta property="og:type" content="article" />
        <meta property="og:url" content="https://krishnakantmishra.com/" />
        <meta property="og:image" content="/screenshot.png" />
        <meta property="og:description" content="Hey! I'm Krishnakant Mishra, and I'm a Python AWS Developer dedicated to building scalable and efficient backend systems." />

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@krishnakant_m" />
        <meta name="twitter:title" content="Krishnakant Mishra | Python AWS Developer" />
        <meta name="twitter:description" content="Hey! I'm Krishnakant Mishra, and I'm a Python AWS Developer dedicated to building scalable and efficient backend systems." />
        <meta name="twitter:creator" content="@krishnakant_m" />
        <meta name="twitter:image" content="/screenshot.png" />

      </Head>
      <Home />
    </>
  );
}
