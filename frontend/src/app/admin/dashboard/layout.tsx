import React from "react";

import Sidebar from "@/components/admin/sidebar/Sidebar";

import Navbar from "@/components/admin/navbar/Navbar";

interface Props {
  children: React.ReactNode;
}

const layout = ({ children }: Props) => {
  return (
    <div>
      <Navbar />
      {children}
      <Sidebar />
    </div>
  );
};

export default layout;
