"use client";

export default function GlobalError({ error, reset }) {
  return (
    <html lang="en">
      <body className="flex items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
        <div className="max-w-md p-6 text-center bg-white shadow-lg rounded-lg dark:bg-gray-800">
          <h2 className="text-2xl font-semibold text-red-600 dark:text-red-400">
            Oops! Something Went Wrong
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            {error?.message || "An unexpected error has occurred."}
          </p>
          <button
            onClick={reset}
            className="mt-4 px-4 py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
          >
            Try Again
          </button>
        </div>
      </body>
    </html>
  );
}
