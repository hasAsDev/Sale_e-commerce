"use client";

import { useSearchParams, useRouter } from "next/navigation";

export default function Search() {
  const searchParams = useSearchParams();
  const router = useRouter();

  function handleSubmit(e) {
    e.preventDefault();

    // const urlSearchParams = new URLSearchParams(searchParams);
    // urlSearchParams.set("query", e.target.query.value.toLowerCase());
    // router.push(`/search?${urlSearchParams.toString()}`);
    router.push(`/search?query=${e.target.query.value.toLowerCase()}`);
  }

  return (
    <form action="/" method="get" onSubmit={handleSubmit}>
      <label className="block relative">
        <input
          className="h-10 w-full laptop:w-80 pt-2 pr-10 pb-2 pl-4 rounded-md border border-solid border-black-boundary text-desc placeholder:text-black-light"
          placeholder="Search for products..."
          type="text"
          name="query"
          required
          defaultValue={searchParams.get("query")}
        ></input>
        <button
          className="h-10 w-10 rounded-md absolute top-0 right-0 flex justify-center items-center group"
          type="submit"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-search h-5 w-5 text-black-light group-hover:text-black-active"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </svg>
        </button>
      </label>
    </form>
  );
}
