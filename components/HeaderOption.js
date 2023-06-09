import { useRouter } from "next/navigation";

export default function HeaderOption({
  Icon,
  title,
  selected,
  pushTitle,
  searchResult,
}) {
  const router = useRouter();
  return (
    <>
      <div
        className={`flex items-center space-x-1 border-b-2 border-transparent hover:border-blue-500 pb-3 cursor-pointer px-1 ${
          selected && "text-blue-500 border-blue-500"
        }`}
        onClick={() => {
          router.push(`https://www.google.com/${pushTitle}?q=${searchResult}`);
        }}
      >
        <Icon className="h-4 hidden md:inline" />
        <p className="">{title}</p>
      </div>
    </>
  );
}
