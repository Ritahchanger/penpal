"use client";

import React from "react";
import Link from "next/link";
import "./Navbar.css";

import {Sun,Moon} from "lucide-react"

const Navbar = () => {
  return (
    <header className="fixed top-0 left-0 right-0 h-[46px] bg-white dark:bg-[#111] shadow-md z-50 navbar">
        
      <nav className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <div className="text-xl font-bold text-blue-600 dark:text-white tracking-wide">
          <Link href="/">LOGO</Link>
        </div>

        {/* Navigation Links */}

        <ul className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <li>
            <Link
              href="/"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              href="/blogs"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Blogs
            </Link>
          </li>
          <li>
            <Link
              href="/auth/login"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Login
            </Link>
          </li>
          <li>
            <Link
              href="/auth/signup"
              className="hover:text-blue-600 dark:hover:text-blue-400 transition"
            >
              Sign Up
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
