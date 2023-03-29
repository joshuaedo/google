import SearchHeader from "@/components/SearchHeader";
import Footer from "@/components/Footer";
import SearchResults from "@/components/SearchResults";
import Response from "@/lib/Response";

const apiKey = process.env.GOOGLE_API_KEY;
const contextKey = process.env.CONTEXT_ID;

export default function Search({ results }) {
  // console.log(results);
  return (
    <>
      <SearchHeader />
      <SearchResults results={results} />
      <Footer />
    </>
  );
}

export async function getServerSideProps(context) {
  const useDummyData = false;
  const startIndex = context.query.start || "0";

  const data = useDummyData
    ? Response
    : await fetch(
        `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=${contextKey}&q=${context.query.term}&start=${startIndex}`
      ).then((res) => res.json());

  // Send Results to client after server has rendered
  return {
    props: {
      results: data,
    },
  };
}
