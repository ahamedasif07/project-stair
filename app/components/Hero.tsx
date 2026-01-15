"use client";
import Image from "next/image";
import HeroSlider from "./HeroSlider";

export default function Hero() {
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
      {/* Premium Overlay #323130 */}
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
        {/* Left Content: মোবাইলে এটি উপরে থাকবে (order-1) */}
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left order-1 lg:order-1">
          <div className="flex items-center gap-3 mb-4">
            <span className="hidden md:block w-10 h-[2px] bg-[#c8a24a]"></span>
            <p className="uppercase tracking-[0.2em] text-[#c8a24a] text-[10px] md:text-xs font-bold">
              Premium LVP Flooring & Stairs
            </p>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-light leading-[1.2] text-white mb-4 md:mb-6">
            Get an Online <br />
            <span className="font-normal">Estimate for Your</span> <br />
            <span className="text-[#c8a24a] lg:text-white">
              Flooring Project
            </span>
          </h1>

          <p className="text-white/80 max-w-md md:max-w-lg text-sm md:text-lg leading-relaxed mb-6 md:mb-8">
            Whether you need new floors, stairs, or both — customize your
            project and get instant pricing. Receive a personalized online
            estimate today.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:flex items-center sm:gap-4 mb-8 text-white/60 text-[10px] md:text-sm">
            <span>Floors & Stairs</span>
            <span className="hidden sm:block text-[#c8a24a]">•</span>
            <span>Honest pricing</span>
            <span className="hidden sm:block text-[#c8a24a]">•</span>
            <span>Professional installation</span>
          </div>

          <div className="w-full sm:w-auto">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#c8a24a] text-black px-10 py-4 rounded-lg font-bold hover:bg-[#b08d3a] transition-all duration-300 shadow-xl shadow-black/20 active:scale-95">
              Get My Online Quote
              <span className="text-xl">→</span>
            </button>
          </div>
        </div>

        {/* Right Slider: মোবাইলে এটি নিচে থাকবে (order-2) */}
        <div className="order-2 lg:order-2 flex justify-center items-center w-full overflow-visible py-10 lg:py-0">
          <div className="w-full">
            <HeroSlider />
          </div>
        </div>
      </div>
    </section>
  );
}
