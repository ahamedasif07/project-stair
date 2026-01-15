"use client";

import Image from "next/image";
import { FaArrowRightLong } from "react-icons/fa6";
import { FiPhone, FiMail } from "react-icons/fi";
import logo from "../../public/assets/images/stair.png";
export default function Navbar() {
  return (
    <nav className="w-full bg-[#2C2C2C] py-4">
      <div className="max-w-7xl mx-auto px-6 flex  items-center justify-between text-sm text-gray-300">
        {/* Left: Logo + Info */}
        <div className="flex md:items-center flex-col md:flex-row md:gap-6 gap-2">
          {/* Logo Image */}
          <Image
            src={logo}
            alt="Logo"
            width={112}
            height={24}
            className="object-contain"
          />

          <h2 className="text-[#c8a24a] flex items-center gap-2">
            Need help measuring? Book a free visit! <FaArrowRightLong />
          </h2>
        </div>

        {/* Right: Contact Info */}
        <div className="flex items-center gap-6">
          <span className="flex items-center text-[17px] text-white gap-2">
            <FiPhone className="text-[#C9A961] text-[18px]" />{" "}
            <span className="hidden md:block">+1 (321) 805-4605</span>
          </span>
          <h2 className="hidden md:block">
            <span className="flex items-center text-[17px] text-white  gap-2">
              <FiMail className="text-[#C9A961] text-[18px]" />
              alphflooring@gmail.com
            </span>
          </h2>
        </div>
      </div>
    </nav>
  );
}
