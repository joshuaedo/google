import Image from "next/image";
import Link from "next/link";
export default function Avatar({ url, href, className }) {
  return (
    <Link href={href}>
      <Image
        src={url}
        alt="Avatar"
        width={100}
        height={100}
        className={`w-8 h-8 rounded-full cursor-pointer transition duration-150 transform hover:scale-110 ${className}`}
      />
    </Link>
  );
}
