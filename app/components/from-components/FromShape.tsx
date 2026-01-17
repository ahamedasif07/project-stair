"use client";
import React from "react";
type ShapeProps = {
  stairShape: string;
  setStairShape: React.Dispatch<React.SetStateAction<string>>;
};
const FromShape = ({ stairShape, setStairShape }: ShapeProps) => {
  return (
    <div>
      <span className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold">
        Step 2
      </span>
      <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
        Select your stair shape
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-4 gap-4">
        {["Straight stairs", "Curved stairs"].map((shape) => (
          <label
            key={shape}
            className={`flex items-center px-4 py-[28px] border-2 rounded-xl cursor-pointer transition-all ${
              stairShape === shape
                ? "border-[#c8a24a] bg-[#faf7f0]"
                : "border-gray-100 hover:border-gray-200"
            }`}
          >
            <input
              type="radio"
              name="stairShape"
              className="w-4 h-4 accent-[#c8a24a]"
              onChange={() => setStairShape(shape)}
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              {shape}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
};

export default FromShape;
