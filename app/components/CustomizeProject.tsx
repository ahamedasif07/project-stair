"use client";
import React, { useState } from "react";

import { FaStairs, FaHouse, FaLayerGroup } from "react-icons/fa6";
import StairsForm from "./froms/StairsForm";
import FloorForm from "./froms/FloorFrom";
import CombinedForm from "./froms/CombinedForm";
import SidebarSummary from "./froms/SidebarSummary";

const CustomizeProject = () => {
  const [projectType, setProjectType] = useState("Stairs Only");

  // কন্ডিশনাল ফর্ম রেন্ডারিং ফাংশন
  const renderForm = () => {
    switch (projectType) {
      case "Stairs Only":
        return <StairsForm />;
      case "Floor Only":
        return <FloorForm />;
      case "Floor & Stairs":
        return <CombinedForm />;
      default:
        return <StairsForm />;
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8">
      <div className="text-center max-w-2xl mx-auto mb-16">
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Customize Your Project
        </h1>
        <p className="text-gray-600">Tell us about your flooring needs...</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-12">
          {/* Project Selection (Step 1) */}
          <div data-aos="fade-right">
            <span className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold">
              Step 1
            </span>
            <h2 className="text-2xl font-semibold mb-6">
              What type of project do you need?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Stairs Only", icon: <FaStairs /> },
                { label: "Floor Only", icon: <FaHouse /> },
                { label: "Floor & Stairs", icon: <FaLayerGroup /> },
              ].map((item) => (
                <button
                  key={item.label}
                  onClick={() => setProjectType(item.label)}
                  className={`p-6 border-2 rounded-xl flex flex-col items-center gap-3 transition-all ${
                    projectType === item.label
                      ? "border-[#c8a24a] bg-[#faf7f0]"
                      : "border-gray-100"
                  }`}
                >
                  <span className="text-2xl text-[#8b6d2e]">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* কন্ডিশনাল ফর্ম এখানে দেখাবে */}
          <div className="transition-all duration-500">{renderForm()}</div>
        </div>

        {/* RIGHT COLUMN (Sidebar) */}
        <div className="lg:col-span-5">
          <SidebarSummary projectType={projectType} />
        </div>
      </div>
    </section>
  );
};

export default CustomizeProject;
