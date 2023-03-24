import HeaderOption from "@/components/HeaderOption";
import {
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
} from "@heroicons/react/outline";
import { MapIcon, BooksIcon, FinanceIcon, FlightsIcon, ColoredSearchIcon, } from "@/components/icons";
import Link from "next/link";

export default function HeaderOptions() {
  return (
    <>
      <div className="flex w-full pl-5 md:pl-44 pb-1 text-gray-500 text-sm justify-start border-b-[1px] overflow-x-scroll scrollbar-hide">
        <div className="flex space-x-3">
          <HeaderOption Icon={ColoredSearchIcon} title="All" selected />
          <HeaderOption Icon={PhotographIcon} title="Images" />
          <HeaderOption Icon={PlayIcon} title="Videos" />
          <HeaderOption Icon={NewspaperIcon} title="News" />
          <HeaderOption Icon={MapIcon} title="Maps" />
          <HeaderOption Icon={BooksIcon} title="Books" />
          <HeaderOption Icon={FlightsIcon} title="Flights" />
          <HeaderOption Icon={FinanceIcon} title="Finance" />
        </div>
      </div>
    </>
  );
}
