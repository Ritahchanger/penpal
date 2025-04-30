"use client";

import React from "react";
import Link from "next/link";
import { menuItems } from "../userDashboard/MenuItems";
import { useSidebar } from "@/app/Context/SidebarContext/SidebarContext";

const Sidebar = () => {
  const { isOpen, closeSidebar } = useSidebar();

  return (
    <div
      className={`fixed left-0 top-0 h-full sidebar w-64 bg-red-600 text-white shadow-md z-50 transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0 opacity-100" : "-translate-x-full opacity-0"
      }`}
    >
      <div className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                onClick={() => {
                  closeSidebar();
                }}
                className="flex items-center p-3 rounded-sm hover:bg-gray-100 transition-colors text-white text-sm hover:text-red-600"
              >
                <span className="mr-3 text-sm font-semibold">{item.icon}</span>
                <span className="font-medium text-xs ">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
