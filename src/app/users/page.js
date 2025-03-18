import Link from "next/link";

export default function Page() {
  return (
    <div className="p-2">
      <h1 className="my-2 text-3xl">User List Page</h1>
      <Link className="underline" href="/users/123">
        Alexender
      </Link>
    </div>
  );
}
