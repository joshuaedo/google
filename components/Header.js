import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import { XIcon, SearchIcon } from "@heroicons/react/solid";
import { MicrophoneIcon, CameraIcon } from "@/components/icons";
import HeaderOptions from "@/components/HeaderOptions";

export default function Header() {
  const router = useRouter();
  const searchInputRef = useRef(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <header className="sticky top-0 bg-white">
      <div className="block md:flex w-full p-6 items-center">
        <Image
          priority
          width={100}
          height={30}
          onClick={() => {
            router.push("/");
          }}
          alt="Google Search"
          className="cursor-pointer m-auto md:m-0"
          src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
        />
        <form className="flex flex-grow border px-3 md:px-5 py-2 md:py-3 ml-0 md:ml-10 mr-0 md:mr-5  mt-4 md:mt-0 border-gray-100 rounded-full shadow-lg max-w-3xl items-center">
          <SearchIcon className="h-6 text-gray-400" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow w-full focus:outline-none px-3"
          />
          <XIcon
            className="h-6 pr-3 sm:mr-3 text-gray-500 cursor-pointer hover:opacity-70 border-r-2 border-gray-200"
            onClick={() => {
              searchInputRef.current.value = "";
            }}
          />
          <MicrophoneIcon />
          <CameraIcon />
          <button hidden onClick={search}>
            Search
          </button>
        </form>
      </div>

      <HeaderOptions />
    </header>
  );
}
