"use client";
import React, { useState } from "react";
import { Menu, User, ChevronDown, ChevronUp, X } from "lucide-react";
import { useSidebar } from "@/app/Context/SidebarContext/SidebarContext";
import Link from "next/link";
import { Sun, Moon } from "lucide-react";
const Navbar = () => {
  const { toggleSidebar, isOpen } = useSidebar();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <>
      <header className="h-[46px] shadow-md fixed w-full top-0 bg-(background:--red) text-white z-50">
        <div className="flex items-center justify-between h-full px-4 md:px-6  mx-auto">
          {/* Left section - Logo and menu toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={toggleSidebar}
              className="p-1 rounded-md hover:bg-green-700 transition-colors"
              aria-label={isOpen ? "Close sidebar" : "Open sidebar"}
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
            <Link
              href="#"
              className="text-lg font-bold tracking-wider hover:opacity-80"
            >
              LOGO
            </Link>
            <div>
              <span className="font-semibold">USERID:0050</span>
            </div>
          </div>

          {/* Right section - User info and dropdown */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-green-700 px-3 py-1 rounded-md justify-between">
              <span className="text-sm font-medium block">
                Balance: sh 45,000
              </span>
              <div></div>
            </div>
            <button className="bg-green-700 p-[0.5rem] rounded-sm">
              <Moon />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsUserDropdownOpen(!isUserDropdownOpen)}
                className="flex items-center space-x-2 focus:outline-none"
                aria-haspopup="true"
                aria-expanded={isUserDropdownOpen}
              >
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center">
                  <User className="w-4 h-4 text-green-600" />
                </div>
                <span className="hidden sm:inline font-medium">
                  Dennis Peter
                </span>
                {isUserDropdownOpen ? (
                  <ChevronUp className="w-4 h-4" />
                ) : (
                  <ChevronDown className="w-4 h-4" />
                )}
              </button>

              {isUserDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50 border border-gray-200">
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Admin
                  </Link>
                  <Link
                    href="#"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 transition-colors text-sm border-t border-gray-200"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </header>
      <p className="mt-[46px]"></p>
    </>
  );
};

export default Navbar;
