"use client";
import React from "react";
import { FaHouse, FaCalendarCheck } from "react-icons/fa6";

interface SidebarProps {
  projectType: string;
}

const SidebarSummary = ({ projectType }: SidebarProps) => {
  return (
    <div className="sticky top-10 space-y-6">
      {/* 1. Schedule Visit Card */}
      <div className="bg-[#fdfcfb] border border-[#e5e0d5] rounded-2xl p-6 shadow-sm group hover:shadow-md transition-shadow">
        <div className="flex gap-4 mb-5">
          <div className="w-12 h-12 bg-[#c8a24a]/10 rounded-full flex items-center justify-center text-[#c8a24a] group-hover:scale-110 transition-transform">
            <FaHouse size={20} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 leading-tight">
              Prefer an In-Home Visit?
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Don't have all the details? We'll visit your home for free and
              provide an exact quote.
            </p>
          </div>
        </div>

        <button className="w-full py-4 bg-[#1a1a1a] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition-all active:scale-95">
          <FaCalendarCheck className="text-[#c8a24a]" />
          Schedule Free In-Home Quote
        </button>
      </div>

      {/* 2. Investment Estimation Card */}
      <div className="bg-[#1a1a1a] rounded-2xl p-8 text-center text-white border-l-4 border-[#c8a24a] shadow-xl relative overflow-hidden">
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-[#c8a24a]/5 rounded-full -mr-10 -mt-10 blur-2xl" />

        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a24a] mb-3 font-bold">
          Your Investment
        </p>

        <div className="space-y-1">
          <h3 className="text-gray-400 text-sm font-medium">
            Estimated cost for:
          </h3>
          <p className="text-white text-lg font-semibold capitalize">
            {projectType}
          </p>
        </div>

        <div className="mt-6">
          <div className="text-5xl font-light text-[#c8a24a] mb-2">$ --</div>
          <p className="text-gray-500 text-[11px] italic">
            Start configuring to see your estimate
          </p>
        </div>
      </div>

      {/* 3. Visual Preview Placeholder */}
      <div className="bg-[#242424] rounded-2xl aspect-video flex flex-col items-center justify-center text-center p-6 relative overflow-hidden group">
        <div className="absolute inset-0 bg-gradient-to-br from-[#c8a24a]/5 to-transparent opacity-50" />

        {/* Animated Icon */}
        <div className="relative mb-4">
          <div className="absolute inset-0 bg-[#c8a24a] blur-xl opacity-20 group-hover:opacity-40 transition-opacity" />
          <span className="text-[#c8a24a] text-4xl block animate-bounce">
            ✨
          </span>
        </div>

        <h4 className="text-white font-medium mb-2 relative z-10">
          Visual Preview
        </h4>
        <p className="text-gray-500 text-xs max-w-[200px] leading-relaxed relative z-10">
          Select project type and details to see your visualization here
        </p>
      </div>
    </div>
  );
};

export default SidebarSummary;
