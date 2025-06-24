"use client";

import React from "react";
import Link from "next/link";
import { adminMenuItems } from "@/components/userDashboard/MenuItems";
import { RootState, AppDispatch } from "@/store/store/store";
import { useDispatch, useSelector } from "react-redux";

import { closeSidebar } from "@/store/features/sidebarSice";

import { X } from "lucide-react";

const Sidebar = () => {
  const dispatch = useDispatch<AppDispatch>();
  const isOpen = useSelector((state: RootState) => state.sidebar.isOpen);

  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-red-600 text-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex justify-end p-2">
        <button onClick={() => dispatch(closeSidebar())}>
          <X className="text-white w-6 h-6" />
        </button>
      </div>

      <div className="p-4">
        <ul className="space-y-2">
          {adminMenuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => dispatch(closeSidebar())}
                className="flex items-center p-3 rounded-sm hover:bg-white hover:text-red-600 transition-colors text-sm"
              >
                <span className="mr-3 text-sm font-semibold">{item.icon}</span>
                <span className="font-medium text-xs">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
