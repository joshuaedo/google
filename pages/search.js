import Head from "next/head";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Response from "@/lib/Response";

const apiKey = process.env.GOOGLE_API_KEY;
const contextKey = process.env.CONTEXT_ID;

export default function Search({ results }) {
  console.log(results);
  return (
    <>
      <Head>
        <title>Google Search</title>
        <meta name="description" content="Search Results" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="">
        <Header />
        <main>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
          <p>Test Link</p>
        </main>
        <Footer />
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = true;

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}`
      ).then((res) => res.json());

  // Send Results to client after server has rendered
  return {
    props: {
      results: data,
    },
  };
}
