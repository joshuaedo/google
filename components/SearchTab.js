import { SearchIcon } from "@heroicons/react/outline";
import { useRef } from "react";
import { useRouter } from "next/navigation";
import { MicrophoneIcon, CameraIcon, SearchButtons } from "@/components/icons";

export default function SearchTab() {
  const searchInputRef = useRef();
  const router = useRouter(null);

  const search = (e) => {
    e.preventDefault();
    const term = searchInputRef.current.value;
    if (!term) return;
    router.push(`/search?term=${term}`);
  };

  return (
    <>
      <div className="flex w-full hover:shadow-lg focus-within:shadow-lg rounded-full border border-gray-200 px-3 md:px-5 py-2 md:py-3 items-center max-w-xs md:max-w-lg">
        <SearchIcon className="h-4 text-gray-400" />
        <input
          ref={searchInputRef}
          type="text"
          className="focus:outline-none flex-grow mx-1"
        />
        <MicrophoneIcon />
        <CameraIcon />
      </div>
      <SearchButtons onClick={search} />
    </>
  );
}
