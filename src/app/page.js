import Link from "next/link";

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="flex space-x-4 bg-white p-6 shadow-lg rounded-lg">
        <Link
          className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          href="/courses"
        >
          Courses
        </Link>
        <Link
          className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          href="/users"
        >
          Users
        </Link>
      </div>
    </div>
  );
}
