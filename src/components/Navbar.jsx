"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCross } from "react-icons/im";
import main_logo from "../assets/logo/main_logo_dashboard.svg";

const crimsonColor = "bg-red-800";
const crimsonRing = "ring-red-300";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navItems = [
    { _id: "about", href: "/about", name: "About" },
    { _id: "terms", href: "/terms", name: "Terms" },
    { _id: "privacy", href: "/privacy", name: "Privacy" },
  ];

  return (
    <div className="w-full py-6 px-4 flex justify-center bg-gray-50 font-sans">
      <nav
        className={`w-full max-w-4xl p-2 rounded-full border-2 border-opacity-70 shadow-lg bg-white`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center space-x-2 z-10">
            <Link
              href="/"
              className="flex flex-col items-center leading-none group"
            >
              <Image
                src={main_logo}
                alt="main_logo"
                width={1000}
                height={1000}
                className="w-12 h-12"
              />
            </Link>
          </div>

          {/* Desktop Nav Items */}
          <div className="hidden sm:flex items-center space-x-4">
            {navItems?.map((item) => (
              <Link
                key={item?._id}
                href={item?.href}
                className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${crimsonColor} shadow-md hover:shadow-xl focus:outline-none focus:ring-4 ${crimsonRing} focus:ring-opacity-50`}
              >
                {item?.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="sm:hidden p-2 rounded-full hover:bg-red-700 transition-colors duration-200"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-menu"
          >
            {isMenuOpen ? <ImCross /> : <GiHamburgerMenu />}
          </button>
        </div>

        {/* Mobile Nav Menu (Conditionally Rendered) */}
        {isMenuOpen && (
          <div
            id="mobile-menu"
            className="sm:hidden absolute top-28 left-0 right-0 p-4 bg-white/95 backdrop-blur-sm shadow-xl z-20 transition-transform duration-300 ease-in-out"
          >
            <div className="flex flex-col space-y-3">
              {navItems?.map((item) => (
                <Link
                  key={item?._id}
                  href={item?.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center py-3 rounded-lg text-gray-800 font-semibold transition-colors duration-200 hover:bg-gray-100 active:bg-gray-200"
                >
                  {item?.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}
