import React from "react";

import Sidebar from "@/components/admin/sidebar/Sidebar";

import Navbar from "@/components/admin/navbar/Navbar";

import AdminSidebarProvider from "@/Providers/AdminSidebarProvider";

import MoreContentModal from "@/components/admin/MoreContent/MoreContentModal";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <AdminSidebarProvider>
        <Navbar />
        {children}
        <Sidebar />
        <MoreContentModal/>
      </AdminSidebarProvider>
    </div>
  );
};

export default layout;
