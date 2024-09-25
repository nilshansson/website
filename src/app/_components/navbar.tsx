"use client";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className=" animate-fadeIn">
      <div className="w-full px-5">
        {" "}
        {/* Reduced horizontal padding */}
        <div className="flex justify-between items-center ">
          {" "}
          {/* Reduced padding top/bottom */}
          {/* Logo Section */}
          <div className="flex-shrink-0 ">
            <Link href="/">
              <div className="relative group">
                <div className="absolute inset-0 bg-white z-10 animate-reveal group-hover:animate-reveal-hover"></div>
                <Image
                  src="/images/signatur.png"
                  alt="Signature"
                  width={120} // Reduced width
                  height={40} // Reduced height
                  className="w-full h-auto"
                />
              </div>
            </Link>
          </div>
          {/* Navigation Links Section */}
          <div className="flex items-center space-x-24 ml-auto">
            {" "}
            {/* Reduced spacing between links */}
            <Link
              href="/about"
              className="relative text-black hover:text-gray-800 px-2 py-1 text-3xl font-medium transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-500"
            >
              NILS HANSSON MENG
            </Link>
            <Link
              href="/artworks"
              className="relative text-black hover:text-gray-800 px-3 py-1 text-3xl font-medium transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-500"
            >
              ARTWORKS
            </Link>
            {/* <Link
              href="/exhibition"
              className="relative text-gray-600 hover:text-gray-800 px-2 py-1 text-2xl font-medium transition-colors duration-500 after:content-[''] after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0 after:bg-gray-600 hover:after:w-full after:transition-all after:duration-500"
            >
              EXHIBITIONS
            </Link> */}
          </div>
        </div>
      </div>
    </nav>
  );
}
