import "./globals.css";
import "./fonts/index.css";

import { SidebarProvider } from "./Context/SidebarContext/SidebarContext";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <SidebarProvider>
        <body>{children}</body>
      </SidebarProvider>
    </html>
  );
}
