import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState, useEffect } from "react";
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

export default function Header() {
  const [width] = useDeviceSize();
  const isMD = width >= 600;
  const router = useRouter();
  const searchInputRef = useRef(null);
  const [term, setTerm] = useState(null);

  const handleSearchChange = (e) => {
    setTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    router.push(`/search?term=${term}`);
  };

  return (
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
          onSubmit={handleSearchSubmit}
        >
          <SearchIcon className="h-6 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            onChange={handleSearchChange}
            className="flex-grow w-full focus:outline-none px-3"
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
      <div className="flex w-full pl-5 md:pl-44 pb-1 text-gray-600 text-sm justify-start border-b-[1px] overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-3">
          <HeaderOption Icon={ColoredSearchIcon} title="All" selected />
          <HeaderOption
            Icon={ImageIcon}
            title="Images"
            pushTitle="images"
            term={term}
          />
          <HeaderOption
            Icon={VideosIcon}
            title="Videos"
            pushTitle="videohp"
            term={term}
          />
          <HeaderOption
            Icon={NewsIcon}
            title="News"
            pushTitle="news"
            term={term}
          />
          <HeaderOption
            Icon={MapIcon}
            title="Maps"
            pushTitle="maps"
            term={term}
          />
          <HeaderOption
            Icon={BooksIcon}
            title="Books"
            pushTitle="books"
            term={term}
          />
          <HeaderOption
            Icon={FlightsIcon}
            title="Flights"
            pushTitle="flights"
            term={term}
          />
          <HeaderOption
            Icon={FinanceIcon}
            title="Finance"
            pushTitle="finance"
            term={term}
          />
        </div>
      </div>
    </header>
  );
}
