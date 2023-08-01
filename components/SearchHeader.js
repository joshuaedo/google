import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import useDeviceSize from "@/lib/useDeviceSize";
import {
  ImageIcon,
  VideosIcon,
  NewsIcon,
  MapIcon,
  BooksIcon,
  FinanceIcon,
  FlightsIcon,
  ColoredSearchIcon,
  MicrophoneIcon,
  CameraIcon,
} from "@/components/icons";
import HeaderOption from "@/components/HeaderOption";
import { useRecoilState } from "recoil";
import { searchResultState } from "@/atoms/searchAtom";

export default function SearchHeader() {
  const [width] = useDeviceSize();
  const isMD = width >= 600;
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [searchResult, setSearchResults] = useRecoilState(searchResultState);

  const search = (e) => {
    e.preventDefault();
    setSearchResults(searchInputRef.current.value);
    router.push(`/search?term=${searchResult}`);
  };

  const changeResult = () => {
    setSearchResults(searchInputRef.current.value);
  };

  return (
    <>
      <Head>
        <title>{searchResult && `${searchResult} - `} Search</title>
        <meta name="description" content="Search Results" />
        <meta
          property="og:title"
          content={searchResult && `${searchResult} - `}
          Search
        />
        <meta
          name="twitter:title"
          content={searchResult && `${searchResult} - `}
          Search
        />
        <meta name="twitter:card" content="summary" />
      </Head>
      <header className="sticky top-0 bg-white">
        <div className="block md:flex w-full p-6 items-center">
          <Image
            priority
            width={92}
            height={30}
            onClick={() => {
              router.push("/");
            }}
            alt="Google Search"
            className="cursor-pointer m-auto md:m-0"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
          />
          <form
            className="flex flex-grow border px-3 md:px-5 py-2 md:py-3 ml-0 md:ml-10 mr-0 md:mr-5  mt-4 md:mt-0 border-gray-100 rounded-full shadow-lg max-w-3xl items-center"
            onSubmit={search}
          >
            <SearchIcon className="h-6 text-gray-400" />
            <input
              ref={searchInputRef}
              type="text"
              className="flex-grow w-full focus:outline-none px-3"
              onChange={changeResult}
            />
            <XIcon
              className="h-6 pr-3 sm:mr-3 text-gray-500 cursor-pointer hover:opacity-70 border-r-0 md:border-r-2 border-gray-200"
              onClick={() => {
                searchInputRef.current.value = "";
              }}
            />
            {isMD && (
              <>
                <MicrophoneIcon />
                <CameraIcon />
              </>
            )}
          </form>
        </div>

        {/*   HeaderOptions */}
        <div className="flex w-full px-5 md:pl-44 pb-1 text-gray-600 text-sm justify-start border-b-[1px] overflow-x-scroll scrollbar-hide">
          <div className="flex space-x-3">
            <HeaderOption Icon={ColoredSearchIcon} title="All" selected />
            <HeaderOption
              Icon={ImageIcon}
              title="Images"
              pushTitle="images"
              searchResult={searchResult}
            />
            <HeaderOption
              Icon={VideosIcon}
              title="Videos"
              pushTitle="videohp"
              searchResult={searchResult}
            />
            <HeaderOption
              Icon={NewsIcon}
              title="News"
              pushTitle="news"
              searchResult={searchResult}
            />
            <HeaderOption
              Icon={MapIcon}
              title="Maps"
              pushTitle="maps"
              searchResult={searchResult}
            />
            <HeaderOption
              Icon={BooksIcon}
              title="Books"
              pushTitle="books"
              searchResult={searchResult}
            />
            <HeaderOption
              Icon={FlightsIcon}
              title="Flights"
              pushTitle="flights"
              searchResult={searchResult}
            />
            <HeaderOption
              Icon={FinanceIcon}
              title="Finance"
              pushTitle="finance"
              searchResult={searchResult}
            />
          </div>
        </div>
      </header>
    </>
  );
}
