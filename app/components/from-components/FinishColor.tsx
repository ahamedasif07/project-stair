"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useFormContext } from "../custom/FormContext";

export type Finish = {
  name: string;
  color: string;
};

type VinylProps = {
  finishes: Finish[];
  selectedFinish: string;
  setSelectedFinish: (value: string) => void;
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, scale: 0.9, y: 15 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

const FinishColor = () => {
  const { finishes, setSelectedFinish, selectedFinish } = useFormContext();
  return (
    <motion.div
      className="p-1"
      variants={containerVariants}
      initial="hidden"
      // Scroll kore ekhane asle animation start hobe
      whileInView="visible"
      // amount: 0.1 mane grid-er matha dekha geleo shuru hobe
      viewport={{ once: false, amount: 0.1 }}
    >
      <div className="space-y-6">
        {/* Header Section */}
        <div className="space-y-1">
          <motion.span
            variants={itemVariants}
            className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold block"
          >
            Step 4
          </motion.span>
          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-2xl font-semibold text-gray-900"
          >
            Choose your vinyl finish
          </motion.h2>
          <motion.p variants={itemVariants} className="text-sm text-gray-500">
            We specialize in high-quality Luxury Vinyl Plank (LVP) finishes that
            are durable, stylish, and easy to maintain.
          </motion.p>
        </div>

        {/* Finishes Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {finishes.map((f) => (
            <motion.div
              key={f.name}
              variants={itemVariants}
              whileHover={{ y: -4, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelectedFinish(f.name)}
              className={`p-2 border-2 rounded-xl cursor-pointer transition-colors duration-300 ${
                selectedFinish === f.name
                  ? "border-[#c8a24a] bg-[#faf7f0]/30 shadow-sm"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div
                className={`w-full h-20 md:h-24 rounded-lg mb-3 shadow-inner ${f.color}`}
              />
              <div className="flex items-center gap-2 px-1 pb-1">
                <input
                  type="checkbox"
                  checked={selectedFinish === f.name}
                  readOnly
                  className="w-4 h-4 accent-[#c8a24a] rounded"
                />
                <span className="text-[11px] md:text-xs font-bold text-gray-700">
                  {f.name}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Footer Hint */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] text-gray-400 italic"
        >
          Looking for a different material? We can help with other finishes upon
          request.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default FinishColor;
