"use client"
import { Provider } from "react-redux";
import { store } from "@/store/store/store";
import React from "react";

interface Props {
  children: React.ReactNode;
}

const AdminSidebarProvider = ({ children }: Props) => {
  return <Provider store={store}>{children}</Provider>;
};

export default AdminSidebarProvider;
