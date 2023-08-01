import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Joshua Edo's Search Engine" />
        <meta name="url" content="https://search.joshuaedo.com" />
        <meta name="identifier-URL" content="https://search.joshuaedo.com" />
        <meta name="pagename" content="Joshua Edo's Search Engine" />
        {/* OpenGraph */}
        <meta property="og:description" content="Joshua Edo's Search Engine" />
        <meta property="og:site_name" content="joshua edo's Search Engine" />
        <meta property="og:url" content="https://search.joshuaedo.com" />
        <meta property="og:type" content="website" />
        <meta
          property="og:image:url"
          content="https://res.cloudinary.com/dnw9fplsw/image/upload/v1687950201/%3D%29.png"
        />
        {/* Twitter */}
        <meta name="twitter:creator" content="joshua edo" />
        <meta name="twitter:description" content="Joshua Edo's Search Engine" />
        <meta
          name="twitter:image"
          content="https://joshuaedo.sirv.com/joshuaedo/public/images/original/projects/google.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
