import Link from "next/link";
import { getSession } from "../../../lib/auth";

export default async function Page() {
  const session = await getSession();
  console.log(session);

  if (!session) {
    throw new Error("No Session info available");
  }
  return (
    <div className="p-2">
      <h1 className="my-2 text-3xl">User List Page</h1>
      <Link className="underline" href="/users/123">
        Alexender
      </Link>
    </div>
  );
}
