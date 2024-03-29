import Avatar from "@/components/Avatar";
import Head from "next/head";
import Link from "next/link";

export default function HomeHeader() {
  return (
    <>
      <Head>
        <title>Search</title>
        <meta name="description" content="Joshua Edo's Search Engine" />
        <meta property="og:title" content="Joshua Edo • Search" />
        <meta name="twitter:title" content="Joshua Edo • Search" />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <header className="flex text-sm text-gray-700 w-full">
        <div className="flex space-x-4 items-center absolute top-4 right-4 justify-between w-[90%] md:w-auto">
          <div className="flex space-x-4">
            {" "}
            <Link href="https://mail.google.com/mail/">
              <p className="link">Gmail</p>
            </Link>
            <Link href="https://photos.google.com/">
              <p className="link">Images</p>
            </Link>
          </div>
          <div className="flex space-x-4">
            <Link href="https://www.google.com.ng/intl/en-GB/about/products?tab=rh">
              <svg
                className="text-gray-300 h-8 w-8 p-1 rounded-full hover:bg-gray-100 cursor-pointer"
                focusable="false"
                viewBox="0 0 24 24"
              >
                <path d="M6,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM6,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM12,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM16,6c0,1.1 0.9,2 2,2s2,-0.9 2,-2 -0.9,-2 -2,-2 -2,0.9 -2,2zM12,8c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,14c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2zM18,20c1.1,0 2,-0.9 2,-2s-0.9,-2 -2,-2 -2,0.9 -2,2 0.9,2 2,2z"></path>
              </svg>
            </Link>
            <Avatar
              url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232"
              // url="https://lh3.googleusercontent.com/ogw/AAEL6sjHUuJEzokl1bNe-TzdoAymNKB--G2zWt4czTUP7Q"
              href="https://accounts.google.com/SignOutOptions?hl=en-GB&continue=https://www.google.com%3Fhl%3Den-GB"
            />
          </div>
        </div>
      </header>
    </>
  );
}
