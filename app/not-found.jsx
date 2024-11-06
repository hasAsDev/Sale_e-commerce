import Link from "next/link";

export default function NotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 tablet:py-32 laptop:px-8">
        <div className="text-center">
          <p className="text-tit font-semibold text-black-dark">404</p>
          <h1 className="mt-4 text-head font-bold tracking-tight text-black-dark">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-black-light">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/"
              className="rounded-md bg-white-blur px-3.5 py-2.5 font-semibold hover:bg-black-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-light"
            >
              Go back home
            </Link>
            <Link
              href="https://github.com/hasAsDev"
              className="rounded-md bg-white-blur px-3.5 py-2.5 font-semibold hover:bg-black-light focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-light"
            >
              Contact support
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
