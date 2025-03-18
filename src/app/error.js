"use client"; // Error boundaries must be Client Components

import { useEffect, useState } from "react";
import ErrorDisplay from "./components/error-dispaly";

export default function Error({ error, reset }) {
  const [message, setMessage] = useState(null);
  useEffect(() => {
    setMessage(error.message);
    console.error("Error:", error);
  }, [error]);

  return (
    <>
      <ErrorDisplay message={message} reset={reset} />
    </>
  );
}
