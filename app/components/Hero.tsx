"use client";
import { useEffect } from "react";
import Image from "next/image";
import HeroSlider from "./HeroSlider";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from "aos";
import "aos/dist/aos.css";

export default function Hero() {
  useEffect(() => {
    AOS.init({
      duration: 600, // অক্ষরের জন্য এটি আদর্শ গতি
      once: true,
      easing: "ease-out-quad",
    });
  }, []);

  // টেক্সটকে অক্ষরে ভাগ করার ফাংশন
  const splitText = (text: string) => text.split("");

  const badgeText = splitText("Premium LVP Flooring & Stairs");
  const title1 = splitText("Get an Online");
  const title2 = splitText("Estimate for Your");
  const title3 = splitText("Flooring Project");

  return (
    <section
      className="relative min-h-screen lg:h-screen w-full overflow-hidden flex items-center justify-center py-12 lg:py-0"
      style={{
        backgroundImage: "url('/assets/images/stair-bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Premium Overlay */}
      <div
        className="absolute inset-0 z-0 backdrop-blur-[2px]"
        style={{
          background:
            "linear-gradient(to bottom, rgba(50, 49, 48, 0.95), rgba(50, 49, 48, 0.85))",
        }}
      >
        <div className="hidden lg:block absolute inset-0 bg-gradient-to-r from-[#323130] via-[#323130]/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-1">
          {/* 1. Badge Alphabet Serial Animation */}
          <div className="flex items-center gap-3 mb-4">
            <span
              className="hidden md:block w-10 h-[2px] bg-[#c8a24a]"
              data-aos="fade-right"
              data-aos-delay="50"
            ></span>
            <p className="uppercase tracking-[0.2em] text-[#c8a24a] text-[10px] md:text-xs font-bold flex flex-wrap">
              {badgeText.map((char, i) => (
                <span
                  key={i}
                  data-aos="fade-in"
                  data-aos-delay={100 + i * 40} // প্রতিটি অক্ষর ৪০ms পর পর আসবে
                  className={char === " " ? "whitespace-pre" : "inline-block"}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </p>
          </div>

          {/* 2. Title Alphabet Animation */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-[1.2] text-white mb-4 md:mb-6">
            {/* Line 1 */}
            <div className="flex flex-wrap justify-center lg:justify-start">
              {title1.map((char, i) => (
                <span
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={800 + i * 30}
                  className={char === " " ? "whitespace-pre" : "inline-block"}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </div>
            {/* Line 2 */}
            <div className="flex flex-wrap justify-center lg:justify-start font-normal">
              {title2.map((char, i) => (
                <span
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={1500 + i * 30}
                  className={char === " " ? "whitespace-pre" : "inline-block"}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </div>
            {/* Line 3 */}
            <div className="flex flex-wrap justify-center lg:justify-start text-[#c8a24a] lg:text-white">
              {title3.map((char, i) => (
                <span
                  key={i}
                  data-aos="fade-up"
                  data-aos-delay={2200 + i * 30}
                  className={char === " " ? "whitespace-pre" : "inline-block"}
                >
                  {char === " " ? " " : char}
                </span>
              ))}
            </div>
          </h1>

          {/* 3. Description Animation */}
          <p
            className="text-white/80 max-w-md md:max-w-lg text-sm md:text-lg leading-relaxed mb-6 md:mb-8"
            data-aos="fade-up"
            data-aos-delay="3200"
          >
            Whether you need new floors, stairs, or both — customize your
            project and get instant pricing. Receive a personalized online
            estimate today.
          </p>

          {/* 4. Features & Button */}
          <div className="w-full">
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:flex items-center sm:gap-4 mb-8 text-white/60 text-[10px] md:text-sm"
              data-aos="fade-in"
              data-aos-delay="3500"
            >
              <span>Floors & Stairs</span>
              <span className="hidden sm:block text-[#c8a24a]">•</span>
              <span>Honest pricing</span>
              <span className="hidden sm:block text-[#c8a24a]">•</span>
              <span>Professional installation</span>
            </div>

            <div
              className="w-full sm:w-auto"
              data-aos="zoom-in-up"
              data-aos-delay="3800"
            >
              <button className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c8a24a] text-black px-10 py-4 rounded-lg font-bold hover:bg-[#b08d3a] transition-all duration-300 shadow-xl shadow-black/20 active:scale-95">
                Get My Online Quote
                <span className="text-xl transition-transform duration-300 group-hover:translate-x-2">
                  <FaArrowRightLong />
                </span>
              </button>
              <h4 className="mt-4 text-white/60 text-[12px]">
                Takes less than 60 seconds · No obligation
              </h4>
            </div>
          </div>
        </div>

        {/* Right Slider */}
        <div
          className="order-2 lg:order-2 flex justify-center items-center w-full py-10 lg:py-0"
          data-aos="zoom-in"
          data-aos-duration="1500"
          data-aos-delay="2000"
        >
          <div className="w-full">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
