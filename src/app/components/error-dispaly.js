export default function ErrorDisplay({ message, reset }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[40vh] p-6 bg-red-100 text-red-800 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold">Something went wrong!</h2>
      <p className="mt-2 text-lg text-red-700">{message}</p>
      <button
        onClick={reset}
        className="mt-4 px-6 py-2 bg-red-600 text-white font-medium rounded-lg shadow-md hover:bg-red-700 transition-all"
      >
        Try Again
      </button>
    </div>
  );
}
