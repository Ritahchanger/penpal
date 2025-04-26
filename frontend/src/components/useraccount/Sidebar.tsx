"use client";

import React from "react";

import Link from "next/link";

import { menuItems } from "../userDashboard/MenuItems";

import { useSidebar } from "@/app/Context/SidebarContext/SidebarContext";

const Sidebar = () => {
  const { isOpen } = useSidebar();

  return (
    <div
      className={`fixed left-0 sidebar  h-full w-64 bg-green-400 text-white shadow-md ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item, index) => (
            <li key={index}>
              <Link
                href={item.href}
                className="flex items-center p-3 rounded-sm hover:bg-gray-100 transition-colors text-gray-700 hover:text-blue-600 text-sm"
              >
                <span className="mr-3 text-gray-500">{item.icon}</span>
                <span className="font-medium">{item.label}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
