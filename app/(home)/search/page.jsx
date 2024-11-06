import Table from "@/components/Table";
import fetchSearchProducts from "@/app/lib/api/fetchSearchProducts";
import { notFound } from "next/navigation";

export default function Page({ searchParams }) {
  if (!searchParams.query) notFound();

  return (
    <>
      <main className="w-full">
        <section className="container max-w-7xl pt-8 pb-16 px-8">
          <h1 className="pb-8 text-black-dark text-[1.25rem] first-letter:uppercase font-semibold leading-7">
            Search results for {` \"${searchParams.query}\":`}
          </h1>
          <Table
            fetchData={() => fetchSearchProducts(searchParams.query)}
            currentPage={searchParams.page}
          />
        </section>
      </main>
    </>
  );
}
