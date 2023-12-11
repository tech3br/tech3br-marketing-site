import config from "@config/config.json";
import { Head, Html, Main, NextScript } from "next/document";

const Document = () => {
  const { favicon } = config.site;
  return (
    <Html lang="en">
      <Head>
        <link
          rel="shortcut icon"
          type="image/png"
          sizes="32x32"
          href={favicon}
        />
        <meta name="theme-name" content="website" />
        <meta name="msapplication-TileColor" content="#000000" />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: light)"
          content="#fff"
        />
        <meta
          name="theme-color"
          media="(prefers-color-scheme: dark)"
          content="#000"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
};

export default Document;
