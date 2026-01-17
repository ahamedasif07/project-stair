"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

// Animation settings
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
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};
type step = {
  step: string;
};
const StairDetails = ({ step = "" }: step) => {
  return (
    <motion.div
      className="p-1"
      variants={containerVariants}
      initial="hidden"
      // 'animate' bad diye 'whileInView' use kora hoyeche scroll trigger er jonno
      whileInView="visible"
      // viewport settings:
      // amount: 0.2 mane 20% component dekha gele animation shuru hobe
      // once: true mane ekbar scroll kore asle animation hobe, bar bar hobe na
      viewport={{ once: false, amount: 0.2 }}
    >
      {/* Heading Section */}
      <div className="space-y-1 mb-6">
        <motion.span
          variants={itemVariants}
          className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold block"
        >
          {step}
        </motion.span>
        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl font-semibold text-gray-900"
        >
          Enter your stair details
        </motion.h2>
      </div>

      {/* Form Section */}
      <div className="space-y-5">
        {/* Number of steps - Full Width */}
        <motion.div variants={itemVariants}>
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-tight">
            Number of steps *
          </label>
          <input
            type="number"
            placeholder="Enter number of steps"
            className="w-full p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#c8a24a]/20 focus:border-[#c8a24a] transition-all"
          />
        </motion.div>

        {/* Grid for Landings and Box Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div variants={itemVariants}>
            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-tight">
              Number of landings
            </label>
            <input
              type="number"
              defaultValue="0"
              className="w-full p-3.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#c8a24a]/20 focus:border-[#c8a24a] transition-all"
            />
          </motion.div>

          <motion.div variants={itemVariants}>
            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-tight">
              Number of box steps
            </label>
            <input
              type="number"
              defaultValue="0"
              className="w-full p-3.5 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#c8a24a]/20 focus:border-[#c8a24a] transition-all"
            />
          </motion.div>
        </div>

        {/* Footer Text */}
        <motion.p
          variants={itemVariants}
          className="text-[11px] italic text-gray-400"
        >
          Exact numbers help us provide a more accurate estimate.
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StairDetails;
