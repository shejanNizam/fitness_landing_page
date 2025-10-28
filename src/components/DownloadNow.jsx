import Image from "next/image";
import image from "../assets/download_now/phone.png";

export default function DownloadNow() {
  return (
    <div className="flex flex-col items-center py-16 bg-white font-sans text-gray-800">
      {/* Main Title */}
      <h2 className="text-4xl font-extrabold mb-12 text-center">
        Download Now
      </h2>

      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 w-full max-w-6xl px-4">
        {/* Left Section: Phone Mockups - These are now treated as background images or direct image assets */}
        <div className="relative flex justify-center lg:justify-end w-full lg:w-1/2 min-h-[500px] sm:min-h-[550px] lg:min-h-[560px]">
          <Image src={image} alt="double_phone_image" />
        </div>

        {/* Right Section: QR Code, Text, and App Store Links */}
        <div className="flex flex-col items-center lg:items-start text-center lg:text-left w-full lg:w-1/2 max-w-md lg:max-w-none px-4 lg:px-0">
          {/* QR Code */}
          <div className="mb-6 flex flex-col items-center">
            {/* Placeholder for QR Code - you can generate one online or replace with your asset */}
            <img
              src="https://api.qrserver.com/v1/create-qr-code/?size=120x120&data=https://your-app-link.com"
              alt="QR Code to download app"
              className="w-32 h-32 mb-2 bg-gray-200" // bg-gray-200 is a fallback if the QR code fails to load
            />
            <p className="text-sm text-gray-600">Scan me for download</p>
          </div>

          {/* Main Call to Action Text */}
          <h3 className="text-2xl sm:text-3xl font-bold mb-4 text-gray-900 leading-tight">
            Download the App and Find Your <br className="hidden sm:inline" />
            Perfect Job Today
          </h3>

          {/* Description */}
          <p className="text-base text-gray-600 mb-8">
            Available on iOS and Android. Start your journey towards a
            fulfilling career in just a few taps!
          </p>

          {/* App Store Badges - These are now using the correct SVG URLs */}
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Google Play Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg"
                alt="Get it on Google Play"
                className="h-12 w-auto"
              />
            </a>

            {/* Apple App Store Button */}
            <a
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block"
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/3c/Download_on_the_App_Store_Badge.svg"
                alt="Download on the Apple App Store"
                className="h-12 w-auto"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
