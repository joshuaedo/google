import HeaderOption from "@/components/HeaderOption";
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from "@heroicons/react/outline";
import Link from "next/link";

export default function HeaderOptions() {
  return (
    <>
      <div className="flex w-full text-gray-700 justify-evenly text-sm md:text-base md:justify-start md:space-x-25 md:pl-52 border-b-[1px]">
        {/* Left */}
        <div className="flex space-x-6">
          <HeaderOption Icon={SearchIcon} title="All" selected />
          <HeaderOption Icon={PhotographIcon} title="Images" />
          <HeaderOption Icon={PlayIcon} title="Videos" />
          <HeaderOption Icon={NewspaperIcon} title="News" />
          <HeaderOption Icon={MapIcon} title="Maps" />
          <HeaderOption Icon={DotsVerticalIcon} title="More" />
        </div>

        {/* Right */}
        <div className="flex space-x-4">
          <Link href="https://www.github.com/joshuaedo/google" className="link">
            <span>Source Code</span>
          </Link>
        </div>
      </div>
    </>
  );
}
