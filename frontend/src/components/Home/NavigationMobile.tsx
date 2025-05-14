import React from "react";
import Link from "next/link";
import { X } from "lucide-react";

interface NavLink {
  href: string;
  label: string;
}

interface NavigationMobileProps {
  isOpen?: boolean;
  onClose?: () => void;
  links?: NavLink[];
}

const defaultLinks: NavLink[] = [
  { href: "/", label: "Home" },
  { href: "/user/blogs", label: "Blogs" },
  { href: "/auth/login", label: "Login" },
  { href: "/auth/signup", label: "Sign Up" },
];

const NavigationMobile: React.FC<NavigationMobileProps> = ({
  isOpen = false,
  onClose,
  links = defaultLinks,
}) => {
  return (
    <div
      className={`fixed inset-0 bg-red-600 dark:bg-red-800 z-40 transform ${
        isOpen ? "translate-x-0" : "-translate-x-full"
      } md:hidden transition-transform duration-300 ease-in-out`}
    >
      <div className="container mx-auto px-4 py-16 relative h-full">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-white hover:bg-red-700 dark:hover:bg-red-900 rounded-full transition-colors"
          aria-label="Close menu"
        >
          <X className="h-6 w-6" />
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-2 font-medium text-white pt-10">
          {links.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className="block py-3 px-4 text-xl rounded-lg
                  hover:bg-red-500/20 dark:hover:bg-red-900/50 
                  hover:text-white transition-colors duration-200
                  aria-[current=page]:bg-red-500/30 aria-[current=page]:dark:bg-red-900/70"
                onClick={onClose}
                aria-current={
                  typeof window !== "undefined" &&
                  window.location.pathname === link.href
                    ? "page"
                    : undefined
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default NavigationMobile;
