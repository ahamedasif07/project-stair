"use client";
import React from "react";
import { motion, Variants } from "framer-motion";

const HowItWorks = () => {
  const steps = [
    {
      id: 1,
      title: "Customize Your Project",
      description:
        "Choose floors, stairs, or both. Select your size, materials, and preferred finish.",
    },
    {
      id: 2,
      title: "Get Instant Pricing",
      description:
        "See your estimated cost in real-time as you configure your project details.",
    },
    {
      id: 3,
      title: "Professional Installation",
      description:
        "Our experienced team handles everything from old flooring removal to final installation.",
    },
  ];

  // Parent container variant for staggering
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Protiti step 0.3s gap e asbe
      },
    },
  };

  // Individual item variant
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Heading Animation */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-900"
        >
          How It Works
        </motion.h2>

        {/* Steps Grid with Scroll Trigger */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-12"
        >
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={itemVariants}
              className="flex flex-col items-center text-center"
            >
              {/* Number Circle with Hover effect */}
              <motion.div
                whileHover={{ scale: 1.1, backgroundColor: "#faf7f0" }}
                className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 border border-transparent hover:border-[#c8a24a]/30 transition-colors"
              >
                <span className="text-xl font-medium text-gray-700">
                  {step.id}
                </span>
              </motion.div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 text-gray-900">
                {step.title}
              </h3>
              <p className="text-gray-600 leading-relaxed max-w-xs">
                {step.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default HowItWorks;
