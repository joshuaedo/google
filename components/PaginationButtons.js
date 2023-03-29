import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRecoilState } from "recoil";
import { searchResultState } from "@/atoms/searchAtom";
import { useState } from "react";

export default function PaginationButtons() {
  const [searchResult, setSearchResults] = useRecoilState(searchResultState);
  const [startIndex, setStartIndex] = useState(0);
  const router = useRouter();

  const handlePrevClick = () => {
    setStartIndex(startIndex - 10);
    router.push(`/search?term=${searchResult}&start=${startIndex - 10}`);
  };

  const handleNextClick = () => {
    setStartIndex(startIndex + 10);
    router.push(`/search?term=${searchResult}&start=${startIndex + 10}`);
  };

  return (
    <>
      <div className="flex max-w-lg justify-between text-blue-600 my-7">
        {startIndex >= 10 && (
          <div
            className="flex flex-grow flex-col items-center hover:underline cursor-pointer"
            onClick={handlePrevClick}
          >
            <ChevronLeftIcon className="h-5 w-5 " />
            <p className="text-sm">Previous</p>
          </div>
        )}

        <div
          className="flex flex-grow flex-col items-center hover:underline cursor-pointer"
          onClick={handleNextClick}
        >
          <ChevronRightIcon className="h-5 w-5 " />
          <p className="text-sm">Next</p>
        </div>
      </div>
    </>
  );
}
