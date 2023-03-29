import Image from "next/image";
import SearchTab from "@/components/SearchTab";
import useDeviceSize from "@/lib/useDeviceSize";

export default function HomeForm() {
  const [width] = useDeviceSize();
  const isMobile = width <= 600;

  <form className="flex flex-col items-center mt-40 md:mt-20 flex-grow">
    {isMobile ? (
      <Image
        priority
        width={160}
        height={56}
        alt="Google Homepage"
        className="m-3"
        src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_160x56dp.png"
      />
    ) : (
      <Image
        priority
        width={272}
        height={92}
        alt="Google Homepage"
        className="m-5"
        src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png"
      />
    )}
    <SearchTab />
  </form>;
}
