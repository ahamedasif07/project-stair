"use client";
import React from "react";
import { motion, Variants } from "framer-motion";
import { useFormContext } from "../custom/FormContext";

type StartProjectProps = {
  timeline: string;
  setTimeline: (value: string) => void;
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

const StartProject = ({ step = "" }: step) => {
  const { timeline, setTimeline } = useFormContext();
  return (
    <motion.div
      className="p-1"
      variants={containerVariants}
      initial="hidden"
      // Viewport-e ashle 'visible' variant trigger hobe
      whileInView="visible"
      // Viewport settings:
      // once: true mane animation shudhu ekbar hobe
      // amount: 0.3 mane component-er 30% dekha gele start hobe
      viewport={{ once: false, amount: 0.3 }}
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
          When would you like to start your project?
        </motion.h2>
      </div>

      {/* Options List */}
      <div className="space-y-3">
        {[
          "As soon as possible",
          "Within 1-2 weeks",
          "Within 1 month",
          "Just planning / exploring",
        ].map((time) => (
          <motion.label
            key={time}
            variants={itemVariants}
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
            className={`flex items-center p-4 border-2 rounded-xl cursor-pointer transition-colors duration-300 ${
              timeline === time
                ? "border-[#c8a24a] bg-[#faf7f0]"
                : "border-gray-100 hover:border-gray-200 hover:bg-gray-50"
            }`}
          >
            <input
              type="radio"
              name="timeline"
              checked={timeline === time}
              className="w-4 h-4 accent-[#c8a24a]"
              onChange={() => setTimeline(time)}
            />
            <span className="ml-3 text-sm font-medium text-gray-700">
              {time}
            </span>
          </motion.label>
        ))}
      </div>
    </motion.div>
  );
};

export default StartProject;
