/* ================= components/HeroSection.tsx ================= */
"use client";
import Image from "next/image";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 py-24 items-center">
        {/* Left Content */}
        <div>
          <p className="uppercase tracking-widest text-[#c8a24a] mb-4 text-sm">
            Premium LVP Flooring & Stairs
          </p>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-light leading-tight">
            Get an Online <br />
            Estimate for Your <br />
            Flooring Project
          </h1>

          <p className="mt-6 text-gray-300 max-w-xl">
            Whether you need new floors, stairs, or both — customize your
            project and get instant pricing. Choose your materials, sizes, and
            finishes to receive a personalized online estimate.
          </p>

          <div className="flex items-center gap-6 mt-8 text-gray-400 text-sm">
            <span>Floors & Stairs</span>
            <span>•</span>
            <span>Honest pricing</span>
            <span>•</span>
            <span>Professional installation</span>
          </div>

          <button className="mt-10 inline-flex items-center gap-2 bg-[#c8a24a] text-black px-8 py-4 rounded-xl font-medium hover:opacity-90 transition">
            Get My Online Quote →
          </button>

          <p className="text-xs text-gray-400 mt-3">
            Takes less than 60 seconds · No obligation
          </p>
        </div>

        {/* Right Slider Card */}
        <div className="relative flex justify-center">
          <div className="relative w-[260px] h-[420px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/stairs.jpg"
              alt="Wooden Stairs"
              fill
              className="object-cover"
            />

            <div className="absolute bottom-0 left-0 right-0 bg-black/60 p-4 text-center">
              <p className="text-sm">Wooden Stairs</p>
              <div className="flex justify-center gap-2 mt-2">
                <span className="h-1 w-6 bg-[#c8a24a] rounded" />
                <span className="h-1 w-3 bg-gray-500 rounded" />
                <span className="h-1 w-3 bg-gray-500 rounded" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
