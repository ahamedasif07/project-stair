"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useFormContext } from "../custom/FormContext";

type ShapeProps = {
  stairShape: string;
  setStairShape: (value: string) => void;
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
  hidden: { opacity: 0, y: 25 }, // Halka beshi y value jate uthar effect bujha jay
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type step = {
  step: string;
};
const FromShape = ({ step = "" }: step) => {
  const { stairShape, setStairShape } = useFormContext();
  return (
    <motion.div
      className="p-2"
      variants={containerVariants}
      initial="hidden"
      // 'animate' er jaygay 'whileInView' bebohar kora hoyeche
      whileInView="visible"
      // Viewport control:
      // once: true mane animation shudhu ekbar-i hobe
      // amount: 0.2 mane component-er 20% dekha gele animation shuru hobe
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Step Label */}
      <motion.span
        variants={itemVariants}
        className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold block"
      >
        {step}
      </motion.span>

      {/* Heading */}
      <motion.h2
        variants={itemVariants}
        className="text-xl md:text-2xl font-semibold text-gray-900 mt-1"
      >
        Select your stair shape
      </motion.h2>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4">
        {["Straight stairs", "Curved stairs"].map((shape) => (
          <motion.label
            key={shape}
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center px-4 py-[28px] border-2 rounded-xl cursor-pointer transition-colors duration-300 ${
              stairShape === shape
                ? "border-[#c8a24a] bg-[#faf7f0]"
                : "border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
            }`}
          >
            <input
              type="radio"
              name="stairShape"
              checked={stairShape === shape}
              className="w-4 h-4 accent-[#c8a24a]"
              onChange={() => setStairShape(shape)}
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              {shape}
            </span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

export default FromShape;
