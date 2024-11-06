import Table from "@/components/Table";
import fetchCategoryProducts from "@/app/lib/api/fetchCategoryProducts";
import { notFound } from "next/navigation";

export default function Page({ params, searchParams }) {
  if (!["apparel", "accessories"].includes(params.category)) notFound();

  return (
    <>
      <main className="w-full">
        <section className="container max-w-7xl pt-8 pb-16 px-8">
          <h1 className="pb-8 text-black-dark text-[1.25rem] first-letter:uppercase font-semibold leading-7">
            {params.category}
          </h1>
          <Table
            fetchData={() => fetchCategoryProducts(params.category)}
            currentPage={searchParams.page}
          />
        </section>
      </main>
    </>
  );
}
