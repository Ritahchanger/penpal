"use client";
import { useState } from "react";
import { Sun, Moon, Menu } from "lucide-react";
import Link from "next/link";
import Logo from "./Logo";
import NavigationMobile from "./NavigationMobile";

interface NavLink {
  href: string;
  label: string;
}

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);

  const navLinks: NavLink[] = [
    { href: "/", label: "Home" },
    { href: "/user/blogs", label: "Blogs" },
    { href: "/auth/login", label: "Login" },
    { href: "/auth/signup", label: "Sign Up" }
  ];

  const toggleTheme = (): void => {
    const newMode = !isDarkMode;
    setIsDarkMode(newMode);
    document.documentElement.classList.toggle("dark", newMode);
  };

  const toggleMobileMenu = (): void => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 right-0 h-[46px] bg-red-600 shadow-md z-50 dark:bg-red-800">
      <nav className="container mx-auto flex items-center justify-between px-4 h-full">
        {/* Logo */}
        <Link href="/" className="flex items-center" aria-label="Home">
          <Logo />
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8 font-medium text-white">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="hover:text-red-200 dark:hover:text-red-300 transition-colors duration-200"
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Side Controls */}
        <div className="flex items-center gap-4">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="text-white hover:text-red-200 transition-colors duration-200"
            aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {isDarkMode ? (
              <Sun className="h-5 w-5" aria-hidden="true" />
            ) : (
              <Moon className="h-5 w-5" aria-hidden="true" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMobileMenu}
            className="md:hidden text-white hover:text-red-200 transition-colors duration-200"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        {/* Mobile Navigation */}
        <NavigationMobile 
          isOpen={isMobileMenuOpen} 
          onClose={() => setIsMobileMenuOpen(false)}
          links={navLinks}
        />
      </nav>
    </header>
  );
};

export default Navbar;