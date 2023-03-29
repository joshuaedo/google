import Link from "next/link";
import PaginationButtons from "@/components/PaginationButtons";

export default function SearchResults({ results }) {
  return (
    <>
      <div className="min-h-screen mx-auto w-full px-4 sm:pl-[5%] md:pl-[14%] lg:pl-52">
        <p className="text-gray-500 text-xs md:text-sm mt-2 hidden md:block">
          About {results.searchInformation?.formattedTotalResults} results (
          {results.searchInformation?.formattedSearchTime} seconds){" "}
        </p>

        {results.items?.map((result) => (
          <div
            key={result.link}
            className="max-w-xl py-5 border-b-4 md:border-b-0 border-gray-300"
          >
            <div className="group">
              <div className="flex">
                {result.pagemap?.cse_image && (
                  <div className="w-7 h-7 my-2 mr-3 rounded-full bg-[#F1F3F4]">
                    <img
                      src={result.pagemap?.cse_image?.[0].src}
                      className="w-[75%] h-[75%] p-0 mt-[11%] mx-auto object-contain"
                    />
                  </div>
                )}
                <div className="max-w-[50%] my-auto">
                  <p></p>
                  <Link
                    href={result.link}
                    className="text-xs line-clamp-1 text-gray-600"
                  >
                    {result.formattedUrl}
                  </Link>{" "}
                </div>
              </div>

              <Link href={result.link} className="">
                <h2 className="truncate text-lg md:text-xl text-blue-800 font-medium group-hover:underline">
                  {result.title}
                </h2>
              </Link>
            </div>
            <p className="line-clamp-2 text-gray-600 text-sm md:text-md">
              {result.snippet}
            </p>
          </div>
        ))}

        <PaginationButtons />
      </div>
    </>
  );
}
