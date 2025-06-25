"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Menu,
  User,
  ChevronDown,
  ChevronUp,
  X,
  Search,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

import { openSidebar } from "@/store/features/sidebarSice";

// ✅ fix typo from 'sidebarSice'
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/store/store/store";

const Navbar = () => {
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (
        dropdownRef.current &&
        !(dropdownRef.current as any).contains(e.target)
      ) {
        setIsUserDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <header className="h-[46px] shadow-md fixed w-full top-0 bg-red-600 text-white z-50">
        <div className="flex items-center justify-between h-full px-4 md:px-6 mx-auto">
          <div className="flex items-center space-x-4">
            <button
              className="p-1 rounded-md hover:bg-green-700 transition-colors"
              onClick={() => dispatch(openSidebar())} // ✅ dispatch directly
              aria-label="Open sidebar"
            >
              <Menu className="w-9 h-9" />
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

          <div className="flex items-center space-x-4">
           

            <div className="hidden md:flex items-center bg-green-700 px-3 py-1 rounded-md">
              <span className="text-sm font-medium">
                Total revenue: sh 45,000
              </span>
            </div>

            <div className="relative" ref={dropdownRef}>
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
                    className="block px-4 py-2 text-gray-800 hover:bg-red-300 text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Home
                  </Link>
                  <Link
                    href="/user/dashboard/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-red-300 text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Profile
                  </Link>
                 
                  <Link
                    href="/user/dashboard/orders/getorders"
                    className="block px-4 py-2 text-gray-800 hover:bg-red-300 text-sm"
                    onClick={() => setIsUserDropdownOpen(false)}
                  >
                    Writer
                  </Link>
                  <Link
                    href="/auth/login"
                    className="block px-4 py-2 text-gray-800 hover:bg-red-300 text-sm border-t border-gray-200"
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

      {/* Push content below navbar */}
      <div className="mt-[46px]" />
    </>
  );
};

export default Navbar;
