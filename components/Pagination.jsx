"use client";

import { usePathname, useSearchParams, useRouter } from "next/navigation";

export default function Pagination({ currentPage, totalPages }) {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const router = useRouter();

  function handlePrevious() {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set("page", parseInt(urlSearchParams.get("page")) - 1);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  }

  function handleNext() {
    const urlSearchParams = new URLSearchParams(searchParams);
    urlSearchParams.set("page", parseInt(urlSearchParams.get("page")) + 1 || 2);
    router.push(`${pathname}?${urlSearchParams.toString()}`);
  }

  return (
    <div className="pt-12">
      <nav className="flex justify-center gap-4">
        <button
          className={
            `w-28 px-1 py-2 rounded-md text-desc text-white-Default hover:bg-black-dark bg-black-light ` +
            (currentPage > 1 ? "" : "invisible")
          }
          onClick={handlePrevious}
        >
          Previous page
        </button>
        <input
          className="size-9 rounded-md text-tit text-white-Default text-center bg-black-dark"
          type="text"
          value={currentPage}
          disabled
        />
        <button
          className={
            `w-28 px-1 py-2 rounded-md text-desc text-white-Default hover:bg-black-dark bg-black-light ` +
            (currentPage == totalPages ? "invisible" : "")
          }
          onClick={handleNext}
        >
          Next page
        </button>
      </nav>
    </div>
  );
}
