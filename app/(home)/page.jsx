import Products from "@/components/Products";
import fetchFeatureProducts from "@/app/lib/api/fetchFeatureProducts";

export default async function Page() {
  const products = await fetchFeatureProducts();

  return (
    <>
      <main className="w-full">
        <section className="container max-w-7xl pt-8 pb-16 px-8">
          <Products products={products} />
        </section>
      </main>
    </>
  );
}
