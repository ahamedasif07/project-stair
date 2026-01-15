"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden flex items-center"
      style={{
        height: "calc(100vh - 50px)", // Full screen height minus 40px
        backgroundImage: "url('/assets/images/stair-bg-img.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div
        className="absolute inset-0 z-0 backdrop-blur-sm"
        style={{
          backgroundColor: "rgba(42, 41, 40, 0.85)", // #2A2928 with 85% opacity
        }}
      ></div>

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24 items-center w-full">
        {/* Left Content */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <span className="w-8 h-[1px] bg-[#c8a24a]"></span>
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
        <div className="relative flex justify-center lg:justify-end items-center h-[500px]">
          {/* Background Card (Left) */}
          <div className="absolute left-10 scale-90 opacity-40 blur-[1px] rotate-[-5deg] hidden xl:block">
            <div className="w-[260px] h-[400px] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src="/stairs.jpg"
                alt="prev"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>

          {/* Main Active Card */}
          <div className="relative z-20 w-[300px] h-[460px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border border-white/10 group">
            <Image
              src="/stairs.jpg"
              alt="Wooden Stairs"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-110"
            />

            {/* Card Content Overlay */}
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-6 text-center">
              <p className="text-white text-lg font-medium">Wooden Stairs</p>
              <div className="flex justify-center gap-1.5 mt-3">
                <span className="h-1.5 w-8 bg-[#c8a24a] rounded-full" />
                <span className="h-1.5 w-1.5 bg-white/30 rounded-full" />
                <span className="h-1.5 w-1.5 bg-white/30 rounded-full" />
              </div>
            </div>
          </div>

          {/* Background Card (Right) */}
          <div className="absolute right-[-20px] scale-90 opacity-40 blur-[1px] rotate-[5deg] hidden xl:block">
            <div className="w-[260px] h-[400px] rounded-2xl overflow-hidden border border-white/20">
              <Image
                src="/stairs.jpg"
                alt="next"
                fill
                className="object-cover grayscale"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
