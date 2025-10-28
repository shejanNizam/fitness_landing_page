"use client";
const crimsonColor = "bg-red-800";
const crimsonRing = "ring-red-300";

export default function Navbar() {
  return (
    // Outer container for centering the entire bar
    <div className="w-full py-6 px-4 flex justify-center bg-gray-50 font-sans">
      {/* Navbar Content Container - Matches the rounded, bordered bar */}
      <nav
        className={`w-full max-w-4xl p-2 rounded-full border-2 ${crimsonColor} border-opacity-70 shadow-lg bg-white`}
      >
        <div className="flex items-center justify-between h-14 px-4">
          {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <a
              href="#"
              className="flex flex-col items-center leading-none group"
            >
              {/* Simple Triangle Logo (Inline SVG) */}
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="text-gray-800 transition-colors duration-200 group-hover:text-red-700"
              >
                <path d="M12 2L2 22H22L12 2Z" fill="currentColor" />
              </svg>
              <span className="text-xs font-semibold uppercase text-gray-700 tracking-widest mt-0.5">
                ThePeak
              </span>
            </a>
          </div>

          {/* Sign In Button */}
          <div>
            <button
              onClick={() => console.log("Sign In clicked")}
              className={`px-6 py-2 rounded-full text-white font-semibold transition-all duration-300 transform hover:scale-105 ${crimsonColor} shadow-md hover:shadow-xl focus:outline-none focus:ring-4 ${crimsonRing} focus:ring-opacity-50`}
            >
              Sign In
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
