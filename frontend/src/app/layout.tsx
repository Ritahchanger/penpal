import "./globals.css";

import "./fonts/index.css";

import { SidebarProvider } from "./Context/SidebarContext/SidebarContext";

import { PageLoadProvider } from "./Providers/PageLoadProvider";

import { Outfit } from "next/font/google";

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
        <PageLoadProvider>
          <SidebarProvider>{children}</SidebarProvider>
        </PageLoadProvider>
      </body>
    </html>
  );
}
