// providers/PageLoadProvider.tsx
"use client";

import Loader from "@/components/userDashboard/Loader";

import { usePageLoad } from "../hooks/usePageLoaded";

export function PageLoadProvider({ children }: { children: React.ReactNode }) {
  const isLoading = usePageLoad();

  return (
    <>
      <Loader isLoading={isLoading} />
      {children}
    </>
  );
}
