import "./globals.css";

import "./fonts/index.css";

import { SidebarProvider } from "./Context/SidebarContext/SidebarContext";

import { PageLoadProvider } from "./Providers/PageLoadProvider";

import { Outfit } from "next/font/google";

import MoreContentModal from "@/components/admin/MoreContent/MoreContentModal";

import AdminSidebarProvider from "@/Providers/AdminSidebarProvider";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} antialiased`}>
        <AdminSidebarProvider>
          <SidebarProvider>
            {children}
            <MoreContentModal />
          </SidebarProvider>
        </AdminSidebarProvider>
      </body>
    </html>
  );
}
