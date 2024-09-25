"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [scale, setScale] = useState(1); // Initial scale

  // Use effect to handle scroll event
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const newScale = Math.min(1.05, 1 + scrollPosition / 1000); // Max zoom at 1.05x
      setScale(newScale);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="flex justify-center items-center h-screen w-full gap-x-6 mx-auto animate-fadeIn">
      {/* Flex layout with gap between images */}
      <img
        src="/images/galleribild1.JPEG"
        className="w-[50%] h-[500px] object-cover"
        alt="Gallery Image 1"
      />
      <img
        src="/images/mainpage.JPEG"
        className="w-[45%] h-[500px] object-cover"
        alt="Main Page Image"
      />
    </div>
  );
}
