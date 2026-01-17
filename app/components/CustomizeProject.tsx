"use client";
import React, { useState } from "react";
import { FaStairs, FaHouse, FaLayerGroup } from "react-icons/fa6";
import { motion, AnimatePresence, Variants } from "framer-motion";
import StairsOnly from "./froms/StairsOnly";
import FloorOnly from "./froms/FloorOnly";

import SidebarSummary from "./froms/SidebarSummary";
import FloorAndStairs from "./froms/FloorAndStairs";

// Sub-components

const CustomizeProject = () => {
  const [projectType, setProjectType] = useState("Stairs Only");

  // Animation Variants for the whole section
  const containerVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { staggerChildren: 0.1, duration: 0.6, ease: "easeOut" },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  // Form switching animation logic
  const formAnimation: Variants = {
    initial: { opacity: 0, x: 30 },
    animate: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: { opacity: 0, x: -30, transition: { duration: 0.3 } },
  };

  const renderForm = () => {
    switch (projectType) {
      case "Stairs Only":
        return <StairsOnly />;
      case "Floor Only":
        return <FloorOnly />;
      case "Floor & Stairs":
        return <FloorAndStairs />;
      default:
        return <StairsOnly />;
    }
  };

  return (
    <section className="bg-white py-12 px-4 md:px-8 overflow-hidden">
      {/* Header Section - Animates on Page Load */}
      <motion.div
        className="text-center max-w-2xl  mx-auto mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h1 className="text-4xl font-serif text-gray-900 mb-4">
          Customize Your Project
        </h1>
        <p className="text-gray-600">Tell us about your flooring needs...</p>
      </motion.div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* LEFT COLUMN */}
        <div className="lg:col-span-7 space-y-12">
          {/* Step 1: Project Selection - Triggered on Scroll */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2 }}
          >
            <motion.span
              variants={itemVariants}
              className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold"
            >
              Step 1
            </motion.span>
            <motion.h2
              variants={itemVariants}
              className="text-2xl font-semibold mb-6"
            >
              What type of project do you need?
            </motion.h2>
            {/* chose your category */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Stairs Only", icon: "🪜" },
                { label: "Floor Only", icon: "🏠" },
                { label: "Floor & Stairs", icon: "✨" },
              ].map((item) => {
                const isSelected = projectType === item.label;

                return (
                  <motion.button
                    key={item.label}
                    variants={itemVariants}
                    whileHover={{ scale: 1.03, y: -5 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setProjectType(item.label)}
                    className={`p-6 border-2 rounded-xl flex flex-col items-center gap-4 transition-all duration-300 ${
                      isSelected
                        ? "border-[#c8a24a] bg-[#faf7f0] shadow-md"
                        : "border-gray-100 hover:border-gray-200 bg-white"
                    }`}
                  >
                    {/* উপরের আইকন */}
                    <span
                      className={`text-3xl ${
                        isSelected ? "text-[#8b6d2e]" : "text-gray-400"
                      }`}
                    >
                      {item.icon}
                    </span>

                    {/* নিচের অংশ: চেক বক্স + টেক্সট */}
                    <div className="flex items-center gap-2">
                      {/* গোল চেক বক্স */}
                      <div
                        className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                          isSelected ? "border-[#c8a24a]" : "border-gray-300"
                        }`}
                      >
                        {isSelected && (
                          <motion.div
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            className="w-2 h-2 bg-[#c8a24a] rounded-full"
                          />
                        )}
                      </div>

                      {/* টেক্সট */}
                      <span
                        className={`text-sm font-medium ${
                          isSelected ? "text-gray-900" : "text-gray-600"
                        }`}
                      >
                        {item.label}
                      </span>
                    </div>
                  </motion.button>
                );
              })}
            </div>
          </motion.div>

          {/* Conditional Form Area - AnimatePresence handles the 'swap' effect */}
          <div className="min-h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={projectType}
                variants={formAnimation}
                initial="initial"
                animate="animate"
                exit="exit"
              >
                {renderForm()}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* RIGHT COLUMN (Sidebar) - Slides in from Right */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="sticky top-8">
            <SidebarSummary projectType={projectType} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CustomizeProject;
