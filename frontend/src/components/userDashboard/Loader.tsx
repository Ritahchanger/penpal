"use client";

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Loader({ isLoading }: { isLoading: boolean }) {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  if (!isMounted || !isLoading) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 bg-opacity-50 backdrop-blur-sm">
      <PacmanLoader color="#36d7b7" size={25} />
    </div>
  );
}
