import Link from "next/link";

export default function Nav() {
  return (
    <nav className="mt-2 laptop:mt-0 laptop:ml-4">
      <ul className="laptop:flex">
        <li className="py-3 laptop:px-5 border border-solid border-black-boundary border-t-px border-b-0 border-x-0 laptop:border-0">
          <Link
            className="w-fit text-desc text-black-light font-medium hover:text-black-dark"
            href="/products"
          >
            All
          </Link>
        </li>
        <li className="py-3 laptop:px-5 border border-solid border-black-boundary border-t-px border-b-0 border-x-0 laptop:border-0">
          <Link
            className="w-fit text-desc text-black-light font-medium hover:text-black-dark"
            href="/categories/apparel"
          >
            Apparel
          </Link>
        </li>
        <li className="py-3 laptop:px-5 border border-solid border-black-boundary border-t-px border-b-0 border-x-0 laptop:border-0">
          <Link
            className="w-fit text-desc text-black-light font-medium hover:text-black-dark"
            href="/categories/accessories"
          >
            Accessories
          </Link>
        </li>
      </ul>
    </nav>
  );
}
