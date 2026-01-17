"use client";
import React from "react";
import { useFormContext } from "../custom/FormContext";
type FlooringRemovalProps = {
  selectedOption: string;
  setSelectedOption: (val: string) => void;
};

const FlooringRemoval = () => {
  const { removalType, setRemovalType } = useFormContext();
  const options = [
    { id: "none", label: "No removal needed (new construction)", price: "" },
    { id: "carpet", label: "Remove old carpet", price: "+$1.5/sqft" },
    { id: "vinyl", label: "Remove old vinyl/LVP", price: "+$2/sqft" },
    { id: "tile", label: "Remove tile flooring", price: "+$3.5/sqft" },
    { id: "hardwood", label: "Remove hardwood flooring", price: "+$2.5/sqft" },
  ];

  return (
    <div className="w-full">
      <span className="text-[11px] uppercase tracking-[0.15em] text-[#c8a24a] font-bold block mb-2">
        Step 4
      </span>
      <h2 className="text-[28px] font-semibold text-gray-900 mb-8 leading-tight">
        Do you need old flooring removed?
      </h2>

      <div className="space-y-3 w-full">
        {options.map((option) => (
          <div
            key={option.id}
            onClick={() => setRemovalType(option.id)}
            className={`flex items-center justify-between h-[64px] px-5 border-[1.5px] rounded-xl cursor-pointer transition-all duration-200 ${
              removalType === option.id
                ? "border-[#c8a24a] bg-[#faf7f0] shadow-sm"
                : "border-gray-100 bg-white hover:border-gray-200"
            }`}
          >
            <div className="flex items-center gap-4">
              {/* Custom Radio Circle */}
              <div
                className={`w-5 h-5 rounded-full border-[1.5px] flex items-center justify-center transition-colors ${
                  removalType === option.id
                    ? "border-[#c8a24a]"
                    : "border-gray-300"
                }`}
              >
                {removalType === option.id && (
                  <div className="w-[10px] h-[10px] rounded-full bg-[#c8a24a]" />
                )}
              </div>
              <span
                className={`text-[15px] font-medium ${
                  removalType === option.id ? "text-gray-900" : "text-gray-700"
                }`}
              >
                {option.label}
              </span>
            </div>
            {option.price && (
              <span className="text-[11px] font-bold text-gray-400 tracking-tight">
                {option.price}
              </span>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default FlooringRemoval;
