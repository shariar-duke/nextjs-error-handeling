"use client"; // Error boundaries must be Client Components

import { useEffect } from "react";
import ErrorDisplay from "./components/error-dispaly";

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error("Error:", error);
  }, [error]);

  return (
    <>
      <ErrorDisplay message={error?.message} reset={reset} />
    </>
  );
}
