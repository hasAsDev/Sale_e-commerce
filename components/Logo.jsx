import Link from "next/link";

export default function Logo() {
  return (
    <div>
      <Link href="/" className="font-bold">
        ACME
      </Link>
    </div>
  );
}
