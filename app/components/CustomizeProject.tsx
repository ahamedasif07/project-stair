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
        className="text-center max-w-2xl mx-auto mb-16"
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {[
                { label: "Stairs Only", icon: <FaStairs /> },
                { label: "Floor Only", icon: <FaHouse /> },
                { label: "Floor & Stairs", icon: <FaLayerGroup /> },
              ].map((item) => (
                <motion.button
                  key={item.label}
                  variants={itemVariants}
                  whileHover={{ scale: 1.03, y: -5 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setProjectType(item.label)}
                  className={`p-6 border-2 rounded-xl flex flex-col items-center gap-3 transition-colors duration-300 ${
                    projectType === item.label
                      ? "border-[#c8a24a] bg-[#faf7f0] shadow-md"
                      : "border-gray-100 hover:border-gray-200"
                  }`}
                >
                  <span className="text-3xl text-[#8b6d2e]">{item.icon}</span>
                  <span className="text-sm font-medium">{item.label}</span>
                </motion.button>
              ))}
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
