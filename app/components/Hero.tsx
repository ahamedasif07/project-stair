"use client";
import Image from "next/image";
import HeroSlider from "./HeroSlider";
import HeroSliderTwo from "./HeroSliderTwo";
import SliderLast from "./SliderLast";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center "
      style={{
        height: "calc(100vh - 50px)", // Full screen height minus 40px
        backgroundImage: "url('/assets/images/stair-bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="
    absolute inset-0 z-0 backdrop-blur-[2px]
    bg-gradient-to-br
    from-[#1a1a1a]
    to-[#2d2d2d]
    opacity-95
  "
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24 items-center w-full">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-10 h-[2px] bg-[#c8a24a]"></span>
            <p className="uppercase tracking-widest text-[#c8a24a] text-xs font-bold">
              Premium LVP Flooring & Stairs
            </p>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-light leading-tight text-white mb-6">
            Get an Online <br />
            Estimate for Your <br />
            <span className="font-normal">Flooring Project</span>
          </h1>

          <p className="text-white/80 max-w-lg text-lg leading-relaxed">
            Whether you need new floors, stairs, or both — customize your
            project and get instant pricing. Choose your materials, sizes, and
            finishes to receive a personalized online estimate.
          </p>

          <div className="flex items-center gap-4 mt-8 text-white/60 text-sm">
            <span>Floors & Stairs</span>
            <span className="text-[#c8a24a]">•</span>
            <span>Honest pricing</span>
            <span className="text-[#c8a24a]">•</span>
            <span>Professional installation</span>
          </div>

          <button className="mt-10 inline-flex items-center gap-3 bg-[#c8a24a] text-black px-10 py-4 rounded-lg font-semibold hover:bg-[#b08d3a] transition-all duration-300 shadow-lg shadow-[#c8a24a]/20">
            Get My Online Quote
            <span className="text-xl">→</span>
          </button>

          <p className="text-xs text-white/50 mt-4 italic">
            Takes less than 60 seconds · No obligation
          </p>
        </div>

        {/* Right Slider (Visual Mockup for the Card stacking effect) */}
        <div className="relative flex justify-center lg:justify-end items-center ">
          <HeroSlider />
        </div>
      </div>
    </section>
  );
}
