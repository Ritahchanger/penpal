"use client"
import { useState } from "react";
import { Sun, Moon } from "lucide-react";
import Link from "next/link";
import "./Navbar.css";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle("dark", !isDarkMode);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 h-[46px]  bg-red-600 shadow-md z-50`}>
      <nav className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <div className="text-xl font-bold text-[#FF0000] dark:text-white tracking-wide">
          <Link href="/">LOGO</Link>
        </div>

        {/* Navigation Links */}
        <ul className="flex gap-6 text-sm font-medium text-gray-800 dark:text-gray-100">
          <li>
            <Link href="/" className="hover:text-[#FF0000] dark:hover:text-[#FF0000] transition">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blogs" className="hover:text-[#FF0000] dark:hover:text-[#FF0000] transition">
              Blogs
            </Link>
          </li>
          <li>
            <Link href="/auth/login" className="hover:text-[#FF0000] dark:hover:text-[#FF0000] transition">
              Login
            </Link>
          </li>
          <li>
            <Link href="/auth/signup" className="hover:text-[#FF0000] dark:hover:text-[#FF0000] transition">
              Sign Up
            </Link>
          </li>
        </ul>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className="text-gray-800 dark:text-gray-100"
          aria-label={isDarkMode ? "Switch to Light Mode" : "Switch to Dark Mode"}
        >
          {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
