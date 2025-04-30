"use client";

import { useEffect, useState } from "react";
import { PacmanLoader } from "react-spinners";

export default function Loader({ isLoading }: { isLoading: boolean }) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      
      const timer = setTimeout(() => setIsVisible(false), 300);
      return () => clearTimeout(timer);
    } else {
      setIsVisible(true);
    }
  }, [isLoading]);

  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 bg-opacity-50 backdrop-blur-sm">
      <PacmanLoader color="#36d7b7" size={25} />
    </div>
  );
}