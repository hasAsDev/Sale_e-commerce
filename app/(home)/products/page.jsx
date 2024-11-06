import Table from "@/components/Table";
import fetchProducts from "@/app/lib/api/fetchProducts";

export default function Page({ searchParams }) {
  return (
    <>
      <main className="w-full">
        <section className="container max-w-7xl pt-8 pb-16 px-8">
          <Table fetchData={fetchProducts} currentPage={searchParams.page} />
        </section>
      </main>
    </>
  );
}
