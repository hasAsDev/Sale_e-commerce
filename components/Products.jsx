import Image from "next/image";
import Link from "next/link";

export default function Products({ products, currentPage = 1 }) {
  return (
    <ul className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-8">
      {products.map((product) => {
        return (
          <li key={product.id} className="group">
            <Link href="">
              <div>
                <div className="bg-white-blur p-2 transition-colors group-hover:bg-black-active group-hover:p-0">
                  <Image
                    src={`/products/${product.image}.webp`}
                    alt={product.name}
                    width="1024"
                    height="1024"
                    priority
                  />
                </div>
                <div className="mt-3 flex justify-between">
                  <div className="space-y-1">
                    <h3 className="text-desc text-black-dark font-semibold">
                      {product.name}
                    </h3>
                    <p className="text-desc text-black-light">
                      {product.categories[0]}
                    </p>
                  </div>
                  <div>
                    <h3 className="text-desc text-black-dark font-medium">
                      {product.range}
                    </h3>
                  </div>
                </div>
              </div>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
