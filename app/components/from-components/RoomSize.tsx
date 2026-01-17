"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

type RoomSizeProps = {
  roomSizes: string[]; // roomSizes array receive kora holo
  handleSizeChange: (index: number, value: string) => void;
};

const RoomSize = ({ roomSizes, handleSizeChange }: RoomSizeProps) => {
  return (
    <div className="w-full">
      <span className="text-[11px] uppercase tracking-[0.15em] text-[#c8a24a] font-bold block mb-2">
        Step 3
      </span>
      <h2 className="text-[28px] font-semibold text-gray-900 mb-1 leading-tight">
        Enter the size of each room
      </h2>
      <p className="text-[#6b7280] text-[14px] mb-8">
        Provide square footage for each room. Approximate measurements work
        great!
      </p>

      <div className="space-y-6 w-full">
        <AnimatePresence mode="popLayout">
          {roomSizes.map((size: string, index: number) => (
            <motion.div
              key={index} // unique key for AnimatePresence
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              <label className="block text-[13px] font-bold text-gray-800 mb-2.5">
                {roomSizes.length > 1
                  ? `Room ${index + 1} size (square feet) *`
                  : "Room size (square feet) *"}
              </label>
              <input
                type="number"
                value={size}
                onChange={(e) => handleSizeChange(index, e.target.value)}
                placeholder="e.g., 250"
                className="w-full h-[54px] px-4 border border-gray-200 rounded-xl outline-none focus:border-[#c8a24a] focus:ring-1 focus:ring-[#c8a24a] transition-all bg-white text-gray-700 placeholder:text-gray-300 shadow-sm"
              />
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RoomSize;
