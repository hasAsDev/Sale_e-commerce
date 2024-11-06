import Image from "next/image";

export default function Loading() {
  return (
    <main className="w-full">
      <section className="container max-w-7xl pt-8 pb-16 px-8 min-h-80 flex items-center justify-center">
        <div className="animate-spin">
          <Image
            src="/diagrams/spinner.png"
            width={100}
            height={100}
            alt="loading"
          ></Image>
        </div>
      </section>
    </main>
  );
}
