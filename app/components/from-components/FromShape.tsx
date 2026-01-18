"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useFormContext } from "../custom/FormContext";

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.1 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

type StepProps = {
  step: string;
};

const FromShape = ({ step = "" }: StepProps) => {
  const { register, watch } = useFormContext();

  const selectedShape = watch("stairShape");

  return (
    <motion.div
      className="p-2"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
    >
      <motion.span
        variants={itemVariants}
        className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold block"
      >
        {step}
      </motion.span>

      <motion.h2
        variants={itemVariants}
        className="text-xl md:text-2xl font-semibold text-gray-900 mt-1"
      >
        Select your stair shape
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 mt-6 gap-4">
        {["Straight stairs", "Curved stairs"].map((shape) => (
          <motion.label
            key={shape}
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.98 }}
            className={`flex items-center px-4 py-[28px] border-2 rounded-xl cursor-pointer transition-colors duration-300 ${
              selectedShape === shape
                ? "border-[#c8a24a] bg-[#faf7f0]"
                : "border-gray-100 hover:border-gray-200 hover:bg-gray-50/50"
            }`}
          >
            <input
              type="radio"
              value={shape} // ভ্যালু অবশ্যই দিতে হবে যাতে register বুঝতে পারে কোন ডাটা সেভ করবে
              {...register("stairShape", { required: "Please select a shape" })}
              className="w-4 h-4 accent-[#c8a24a]"
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
