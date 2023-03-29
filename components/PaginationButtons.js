import { useRouter } from "next/navigation";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";

export default function PaginationButtons() {
  const router = useRouter();
  const startIndex = Number(router.query?.start) || 0;
  return (
    <>
      <div className="">
        {startIndex >= 10 && (
          <Link>
            <div>
              <ChevronLeftIcon />
              <p>Previous</p>
            </div>
          </Link>
        )}
      </div>
    </>
  );
}
