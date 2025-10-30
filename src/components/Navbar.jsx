"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar({ getPlanRef }) {
  const handleGetPlanClick = () => {
    if (getPlanRef && getPlanRef.current) {
      getPlanRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="w-full py-2 px-4 flex justify-center bg-white font-sans sticky top-0 z-50 shadow-sm ">
      <nav className="w-full max-w-3xl flex items-center justify-between h-16">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
              <span className="text-white text-xl font-bold">Dr.</span>
            </div>
            <div className="flex flex-col">
              <span className="text-black font-semibold text-lg">
                Dr. Kegel:
              </span>
              <span className="text-gray-600 text-sm">For Men's Health</span>
            </div>
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <button
            onClick={handleGetPlanClick}
            className={`
              px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-[#A50015] text-white font-semibold text-sm sm:text-base 
              transition-all duration-300 hover:bg-red-700 focus:outline-none focus:ring-4 
              focus:ring-red-300 focus:ring-opacity-50 shadow-md            
            `}
          >
            Get My Plan
          </button>
        </div>
      </nav>
    </div>
  );
}
