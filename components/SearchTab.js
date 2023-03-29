import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { MicrophoneIcon, CameraIcon, SearchButtons } from "@/components/icons";
import { useRecoilState } from "recoil";
import { searchResultState } from "@/atoms/searchAtom";

export default function SearchTab() {
  const [searchResult, setSearchResults] = useRecoilState(searchResultState);
  const searchInputRef = useRef();
  const router = useRouter(null);

  const search = (e) => {
    e.preventDefault();
    setSearchResults(searchInputRef.current.value);
    searchResult && router.push(`/search?searchResult=${searchResult}`);
  };

  const changeResult = () => {
    setSearchResults(searchInputRef.current.value);
  };

  return (
    <>
      <div className="flex w-full hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 px-3 md:px-5 py-2 md:py-3 items-center max-w-xs md:max-w-lg">
        <SearchIcon className="h-4 text-gray-400" />
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none flex-grow mx-1"
          onChange={changeResult}
        />
        <MicrophoneIcon />
        <CameraIcon />
      </div>
      <SearchButtons onClick={search} />
    </>
  );
}
