import Products from "@/components/Products";
import Pagination from "@/components/Pagination";

export default async function Table({ fetchData, currentPage = 1 }) {
  const products = await fetchData();
  const productsPerPage = 12;

  return (
    <>
      {products.length === 0 ? (
        <div className="min-h-72">
          <p>{"Nothing found :("}</p>
        </div>
      ) : (
        <>
          <Products
            products={products.slice(
              (currentPage - 1) * productsPerPage,
              currentPage * productsPerPage
            )}
            currentPage={currentPage}
          />
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(products.length / productsPerPage)}
          />
        </>
      )}
    </>
  );
}
