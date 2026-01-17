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

  // ১. মেইন টাইটেল কন্টেইনার ভেরিয়েন্ট (ওয়ার্ড বাই ওয়ার্ড অ্যানিমেশন)
  const titleContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const wordVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  // ২. কার্ডের ভেতরের কন্টেন্টগুলোর জন্য সিরিয়াল অ্যানিমেশন ভেরিয়েন্ট
  const cardContainerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // আইটেমগুলোর মাঝে ০.৩ সেকেন্ড গ্যাপ
        delayChildren: 0.1, // কার্ড ভিউপোর্টে আসার পর সামান্য ডিলে
      },
    },
  };

  // ৩. আইটেমগুলোর কমন অ্যানিমেশন (নাম্বার, টাইটেল, ডেসক্রিপশন)
  const childItemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <section className="py-24 px-4 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Title Section: Word by Word */}
        <motion.h2
          variants={titleContainerVariants}
          initial="hidden"
          whileInView="visible"
          // amount 0.8 নিশ্চিত করে টাইটেলটি প্রায় পুরোপুরি দেখা গেলে তবেই অ্যানিমেশন হবে
          viewport={{ once: false, amount: 0.8 }}
          className="text-3xl md:text-5xl font-serif text-center mb-20 text-gray-900 flex justify-center gap-3"
        >
          {titleWords.map((word, i) => (
            <motion.span key={i} variants={wordVariants}>
              {word}
            </motion.span>
          ))}
        </motion.h2>

        {/* Steps Grid: কার্ডগুলো একসাথে অ্যানিমেট হবে */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          {steps.map((step) => (
            <motion.div
              key={step.id}
              variants={cardContainerVariants}
              initial="hidden"
              whileInView="visible"
              // amount 0.4 এবং negative margin ব্যবহার করা হয়েছে যাতে স্ক্রল করার পর চোখের সামনে অ্যানিমেশন শুরু হয়
              viewport={{ once: false, amount: 0.4, margin: "-100px 0px" }}
              className="flex flex-col items-center text-center group"
            >
              {/* ১. নাম্বার সার্কেল */}
              <motion.div
                variants={childItemVariants}
                whileHover={{ scale: 1.1, backgroundColor: "#faf7f0" }}
                className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-100 flex items-center justify-center mb-8 border border-transparent hover:border-[#c8a24a]/30 transition-all shadow-sm"
              >
                <span className="text-xl md:text-2xl font-medium text-gray-700">
                  {step.id}
                </span>
              </motion.div>

              {/* ২. টাইটেল */}
              <motion.h3
                variants={childItemVariants}
                className="text-xl md:text-2xl font-semibold mb-4 text-gray-900"
              >
                {step.title}
              </motion.h3>

              {/* ৩. ডেসক্রিপশন */}
              <motion.p
                variants={childItemVariants}
                className="text-gray-600 leading-relaxed max-w-xs text-sm md:text-base"
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
