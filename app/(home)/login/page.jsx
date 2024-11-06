export default function Page() {
  return (
    <>
      <main className="w-full">
        <section className="container max-w-7xl pt-8 pb-16 px-8">
          <form className="" action="" method="post">
            <section>
              <label for="username">User name:</label>
              <input
                className="border border-solid border-black-boundary rounded-md"
                type="text"
                name="username"
                id="username"
              />
            </section>
            <section>
              <label for="password">Password:</label>
              <input
                className="border border-solid border-black-boundary rounded-md"
                type="password"
                name="password"
                id="password"
              />
            </section>

            <button
              className="w-28 px-1 py-2 rounded-md text-desc text-white-Default hover:bg-black-dark bg-black-light"
              type="submit"
            >
              Login
            </button>
          </form>
        </section>
      </main>
    </>
  );
}
