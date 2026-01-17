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

  const titleWords = "How It Works".split(" ");

  // ১. টাইটেল কন্টেইনার (এটি ওয়ার্ড বাই ওয়ার্ড থাকবে)
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  // ২. কার্ডের ভেতরের কন্টেন্টগুলোর জন্য সিরিয়াল অ্যানিমেশন ভেরিয়েন্ট
  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // কার্ডের ভেতরের আইটেমগুলো ০.৩ সেকেন্ড গ্যাপে আসবে
        delayChildren: 0.2, // কার্ড আসার পর সামান্য দেরি করে আইটেম শুরু হবে
      },
    },
  };

  const childItemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section className="py-16 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Section */}
        <motion.h2
          variants={titleContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="text-3xl md:text-4xl font-serif text-center mb-16 text-gray-900 flex justify-center gap-3"
        >
          {titleWords.map((word, i) => (
            <motion.span key={i} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Steps Grid: কার্ডগুলো এখন একসাথে আসবে */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardContainerVariants} // প্রতিটি কার্ড আলাদাভাবে কাজ করবে
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.2 }}
              className="flex flex-col items-center text-center"
            >
              {/* ১. নাম্বার সার্কেল */}
              <motion.div
                variants={childItemVariants}
                whileHover={{ scale: 1.1, backgroundColor: "#faf7f0" }}
                className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-6 border border-transparent hover:border-[#c8a24a]/30 transition-colors"
              >
                <span className="text-xl font-medium text-gray-700">
                  {step.id}
                </span>
              </motion.div>

              {/* ২. টাইটেল */}
              <motion.h3
                variants={childItemVariants}
                className="text-xl font-semibold mb-3 text-gray-900"
              >
                {step.title}
              </motion.h3>

              {/* ৩. ডেসক্রিপশন */}
              <motion.p
                variants={childItemVariants}
                className="text-gray-600 leading-relaxed max-w-xs"
              >
                {step.description}
              </motion.p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
