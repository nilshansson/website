"use client";

import Image from "next/image";
import Link from "next/link";
import { League_Script } from "next/font/google";

const league_Script = League_Script({
  weight: "400",
  subsets: ["latin"],
});

export default function Navbar() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/artworks", label: "Artworks" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 h-screen w-[300px] shadow-md animate-fadeIn pt-10 px-10 bg-white z-50">
      <div className="flex flex-col items-center h-full">
        {/* Logo Section */}
        <div className="mb-8">
          <Link href="/" className="relative group">
            <div className="absolute inset-0 z-10 animate-reveal group-hover:animate-reveal-hover" />
            <Image
              src="/images/signatur.png"
              alt="Signature"
              width={400}
              height={600}
              className="w-full h-auto"
            />
          </Link>
          <h1 className={`${league_Script.className} text-2xl font-bold ml-4`}>
            Nils Hansson Meng
          </h1>
        </div>

        {/* Links Section */}
        <div className="flex flex-col items-start w-full space-y-3">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="relative text-gray-700 hover:text-gray-800 text-xl w-full
              px-3 py-2 transition-colors duration-500 after:content-['']
              after:absolute after:left-0 after:bottom-0 after:h-[1px] after:w-0
              after:bg-gray-600 hover:after:w-full after:transition-all
              after:duration-500"
            >
              {label}
            </Link>
          ))}
          <Link href="https://www.instagram.com/nilshanssonmeng">
            <div className="pl-3 pt-3">
              <Image
                src="/images/insta-logo.png"
                style={{ width: "20px", height: "auto" }}
                alt="instagram logo"
              />
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
