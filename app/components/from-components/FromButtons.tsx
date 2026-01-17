"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

type buttonProps = {
  buttonOne: string; // Prothom button (Next/Submit)
  buttonTwo: string; // Ditiyo button (Back/Cancel)
};

// Animation Variants
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1, // Ekta ashar kisu khon por arekta asbe
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const FromButtons = ({
  buttonOne = " Continue to Contact Information",
  buttonTwo = "Skip to Schedule",
}: buttonProps) => {
  return (
    <motion.div
      className="flex flex-col gap-4 mt-10" // flex-col use korle spacing control kora shohoj
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.8 }} // 80% button area dekha gele animate hobe
    >
      {/* Primary Button */}
      <motion.button
        variants={itemVariants}
        whileHover={{ scale: 1.01, backgroundColor: "#C5C9D0" }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-[#D1D5DB] text-gray-800 rounded-xl font-bold text-sm transition-colors shadow-sm"
      >
        {buttonOne}
      </motion.button>

      {/* Secondary Button */}
      <motion.button
        variants={itemVariants}
        whileHover={{
          scale: 1.01,
          backgroundColor: "rgba(209, 213, 219, 0.5)",
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full py-4 bg-[#D1D5DB]/30 text-gray-500 rounded-xl font-bold text-sm transition-colors border border-gray-100"
      >
        {buttonTwo}
      </motion.button>
    </motion.div>
  );
};

export default FromButtons;
