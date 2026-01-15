/* ================= components/Nav.tsx ================= */
"use client";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#2C2C2C] to-transparent py-[14px]">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between text-sm text-gray-300">
        <div className="flex items-center gap-6">
          {/* Logo */}
          <div className="h-6 w-28 bg-white rounded" />
          <span className="text-[#c8a24a]">
            Need help measuring? Book a free visit! →
          </span>
        </div>

        <div className="flex items-center gap-6">
          <span className="flex items-center gap-2">📞 +1 (321) 805-4605</span>
          <span className="flex items-center gap-2">
            ✉️ alphflooring@gmail.com
          </span>
        </div>
      </div>
    </nav>
  );
}
