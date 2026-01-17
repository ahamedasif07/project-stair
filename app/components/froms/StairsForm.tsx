"use client";
import React, { useState } from "react";
import FromShape from "../from-components/FromShape";
import StairDetails from "../from-components/StairDetails";
import VinylFenish from "../from-components/VinylFenish";

const StairsForm = () => {
  const [stairShape, setStairShape] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("Light Oak");
  const [timeline, setTimeline] = useState("");

  const finishes = [
    { name: "Light Oak", color: "bg-[#EBDCC3]" },
    { name: "Natural Oak", color: "bg-[#C6A674]" },
    { name: "Warm Brown", color: "bg-[#967451]" },
    { name: "Dark Walnut", color: "bg-[#5B4033]" },
    { name: "Gray Tones", color: "bg-[#9CA3AF]" },
    { name: "Other", color: "bg-[#D1D5DB]" },
  ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* STEP 2: Stair Shape */}
      <div className="space-y-4">
        <FromShape stairShape={stairShape} setStairShape={setStairShape} />
      </div>

      {/* STEP 3: Stair Details */}
      <div className="space-y-6">
        <StairDetails />
      </div>

      {/* STEP 4: Vinyl Finish */}
      <div className="space-y-6">
        <VinylFenish
          finishes={finishes}
          selectedFinish={selectedFinish}
          setSelectedFinish={setSelectedFinish}
        />
      </div>

      {/* STEP 5: Timeline */}
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold">
            Step 5
          </span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            When would you like to start your project?
          </h2>
        </div>

        <div className="space-y-3">
          {[
            "As soon as possible",
            "Within 1-2 weeks",
            "Within 1 month",
            "Just planning / exploring",
          ].map((time) => (
            <label
              key={time}
              className={`flex items-center p-4 border rounded-xl cursor-pointer transition-all ${
                timeline === time
                  ? "border-[#c8a24a] bg-[#faf7f0]"
                  : "border-gray-100 hover:bg-gray-50"
              }`}
            >
              <input
                type="radio"
                name="timeline"
                className="w-4 h-4 accent-[#c8a24a]"
                onChange={() => setTimeline(time)}
              />
              <span className="ml-3 text-sm font-medium text-gray-700">
                {time}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 pt-4">
        <button className="w-full py-4 bg-[#D1D5DB] text-gray-600 rounded-lg font-bold text-sm hover:bg-[#C5C9D0] transition-colors">
          Continue to Contact Information
        </button>
        <button className="w-full py-4 bg-[#D1D5DB]/50 text-gray-500 rounded-lg font-bold text-sm hover:bg-[#D1D5DB]/70 transition-colors">
          Skip to Schedule
        </button>
      </div>
    </div>
  );
};

export default StairsForm;
