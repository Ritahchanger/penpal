// components/Loader.tsx
"use client";

import { useState } from "react";

import { PacmanLoader } from "react-spinners";

export default function Loader() {
  const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     const handleStart = () => setLoading(true);
  //     const handleComplete = () => setLoading(false);
  //     window.addEventListener("routeChangeStart", handleStart);
  //     window.addEventListener("routeChangeComplete", handleComplete);
  //     window.addEventListener("routeChangeError", handleComplete);

  //     return () => {
  //       window.removeEventListener("routeChangeStart", handleStart);
  //       window.removeEventListener("routeChangeComplete", handleComplete);
  //       window.removeEventListener("routeChangeError", handleComplete);
  //     };
  //   }, []);

  //   if (!loading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50 backdrop-blur-sm">
      <PacmanLoader color="#36d7b7" size={25} />
    </div>
  );
}
