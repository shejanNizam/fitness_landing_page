import Link from "next/link";
import CParagraph from "./CParagraph";
import CSubHeading from "./CSubHeading";

const unityPages = [
  { name: "About us", href: "/about" },
  { name: "Privacy Policy", href: "/privacy" },
  { name: "Terms & Condition", href: "/terms" },
];

const contactInfo = {
  email: "yourmail@gmail.com",
  phone: "(00) 56567890",
};

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-12 sm:py-16 font-sans">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
          <div className="md:col-span-2 space-y-4">
            <div className="flex justify-center md:justify-start items-center space-x-2">
              <span className="text-3xl text-white">△</span>
              <CSubHeading text="THEPEAK" />
            </div>

            <CParagraph
              text="This app helps men improve sexual performance naturally through
              guided exercises, enhancing stamina, control, and confidence. Easy
              to use, it offers effective techniques for men of all ages to
              boost vitality."
            />
          </div>

          <div className="space-y-4">
            <CSubHeading text="Unity Pages" />
            <ul className="space-y-2">
              {unityPages.map((page) => (
                <li key={page.name}>
                  <Link
                    href={page.href}
                    className="text-sm hover:text-white transition-colors duration-200"
                  >
                    <CParagraph text={page.name} />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <CSubHeading text="Get in Touch" />
            <div className="text-sm space-y-2">
              <CParagraph text={contactInfo.email} />
              <CParagraph text={contactInfo.phone} />
            </div>
          </div>
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700 text-center text-sm text-gray-500 flex justify-center items-center gap-2">
          &copy; {new Date().getFullYear()}{" "}
          <CParagraph text="THEPEAK. All rights reserved." />
        </div>
      </div>
    </footer>
  );
}
