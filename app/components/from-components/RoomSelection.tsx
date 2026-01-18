"use client";
import React from "react";
import { motion } from "framer-motion";
import { useFormContext } from "../custom/FormContext";

type step = {
  step: string;
};
const RoomSelection = ({ step = "" }: step) => {
  const { handleRoomCountChange, roomCount } = useFormContext();
  const rooms = [1, 2, 3, 4, 5];
  return (
    <div className="w-full">
      <span className="text-[11px] uppercase tracking-[0.15em] text-[#c8a24a] font-bold block mb-2">
        {step}
      </span>
      <h2 className="text-[28px] font-semibold text-gray-900 mb-6 leading-tight">
        How many rooms need flooring?
      </h2>

      <div className="grid grid-cols-5 gap-3 w-full">
        {rooms.map((num) => (
          <button
            key={num}
            onClick={() => handleRoomCountChange(num)}
            className={`flex flex-col items-center justify-center py-5 rounded-xl border-[1.5px] transition-all duration-300 ${
              roomCount === num
                ? "border-[#c8a24a] bg-[#faf7f0] ring-1 ring-[#c8a24a]"
                : "border-gray-200 bg-white hover:border-gray-300"
            }`}
          >
            <span
              className={`text-2xl font-semibold mb-1 ${
                roomCount === num ? "text-gray-900" : "text-gray-600"
              }`}
            >
              {num}
            </span>
            <span className="text-[10px] text-gray-400 uppercase tracking-tight">
              {num === 1 ? "Room" : "Rooms"}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
};

export default RoomSelection;
