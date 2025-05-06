"use client";
import React, { useState } from "react";
import { Menu, User, ChevronDown, ChevronUp, X, Moon } from "lucide-react";
import { useSidebar } from "@/app/Context/SidebarContext/SidebarContext";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const { toggleSidebar, isOpen } = useSidebar();
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  return (
    <>
      <header className="h-[46px] shadow-md fixed w-full top-0 bg-red-600 text-white z-50">
        <div className="flex items-center justify-between h-full px-4 md:px-6 mx-auto">
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
              href="/"
              className="text-lg font-bold tracking-wider hover:opacity-80 flex items-center space-x-2"
            >
              <Image
                src="/icons/pen-tool.png"
                alt="Logo"
                width={24}
                height={24}
              />
              <span className="hidden sm:inline">Bemi Editors</span>
            </Link>
            <div>
              <span className="font-semibold text-sm">USERID:0050</span>
            </div>
          </div>

          {/* Right section - User info and dropdown */}
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex items-center bg-green-700 px-3 py-1 rounded-md">
              <span className="text-sm font-medium">Balance: sh 45,000</span>
            </div>
            <button className="bg-green-700 p-2 rounded-md">
              <Moon className="text-white w-4 h-4" />
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
                    href="/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/user/dashboard/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                  <Link
                    href="/admin/"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Admin
                  </Link>
                  <Link
                    href="/auth/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100 text-sm border-t border-gray-200"
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
      {/* Push content down to account for fixed navbar */}
      <div className="mt-[46px]" />
    </>
  );
};

export default Navbar;
