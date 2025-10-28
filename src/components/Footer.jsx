// --- Data Structures ---

const unityPages = [
  { name: "About us", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Condition", href: "/terms" },
];

const contactInfo = {
  email: "yourmail@gmail.com",
  phone: "(00) 56567890",
};

// --- Main Component ---

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 sm:py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          {/* Column 1: Logo and Description */}
          <div className="md:col-span-2 space-y-4">
            {/* Logo Placeholder */}
            <div className="flex items-center space-x-2">
              {/* Using a simple Unicode triangle for the logo, replace with your SVG/image */}
              <span className="text-3xl text-white">△</span>
              <span className="text-xl font-bold text-white uppercase tracking-wider">
                THEPEAK
              </span>
            </div>

            {/* Description */}
            <p className="text-sm leading-relaxed max-w-sm">
              This app helps men improve sexual performance naturally through
              guided exercises, enhancing stamina, control, and confidence. Easy
              to use, it offers effective techniques for men of all ages to
              boost vitality.
            </p>
          </div>

          {/* Column 2: Unity Pages (Links) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Unity Pages
            </h4>
            <ul className="space-y-2">
              {unityPages.map((page) => (
                <li key={page.name}>
                  <a
                    href={page.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    {page.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Get in Touch (Contact) */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white mb-2">
              Get in Touch
            </h4>
            <div className="text-sm space-y-2">
              <p>{contactInfo.email}</p>
              <p>{contactInfo.phone}</p>
            </div>
          </div>
        </div>
        {/* Optional: Add a copyright line at the bottom if needed */}
        <div className="mt-10 pt-6 border-t border-gray-700 text-center">
          <p className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} THEPEAK. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
