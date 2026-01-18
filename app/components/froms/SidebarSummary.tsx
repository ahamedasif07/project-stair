/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import { FaHouse, FaCalendarCheck } from "react-icons/fa6";
import { motion, type Variants, AnimatePresence } from "framer-motion";
import { useFormContext } from "../custom/FormContext";
import Image from "next/image";

const STAIR_IMAGES: Record<string, string> = {
  "Straight stairs": "/assets/images/pexels-fotoaibe-1571458.jpg",
  "Curved stairs":
    "/assets/images/custom-staircase-contractor-salt-lake-city-utah.jpg",
};

interface SidebarProps {
  projectType: string;
}

const SidebarSummary = ({ projectType }: SidebarProps) => {
  const { isModalOpen, setIsModalOpen, stairShape } = useFormContext();
  const currentImage = STAIR_IMAGES[stairShape as keyof typeof STAIR_IMAGES];

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.6,
        ease: [0.215, 0.61, 0.355, 1],
      },
    }),
  };

  return (
    <div className="sticky top-10 space-y-6">
      {/* 1. Schedule Visit Card */}
      <motion.div
        custom={0}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={cardVariants}
        className="bg-[#fdfcfb] border border-[#e5e0d5] rounded-2xl p-6 shadow-sm group hover:shadow-md transition-shadow"
      >
        <div className="flex gap-4 mb-5">
          <div className="w-12 h-12 bg-[#c8a24a]/10 rounded-full flex items-center justify-center text-[#c8a24a] group-hover:scale-110 transition-transform">
            <FaHouse size={20} />
          </div>
          <div>
            <h4 className="font-bold text-gray-900 leading-tight">
              Prefer an In-Home Visit?
            </h4>
            <p className="text-xs text-gray-500 mt-1">
              Free home visit for an exact quote.
            </p>
          </div>
        </div>
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={() => setIsModalOpen(true)}
          className="w-full py-4 bg-[#1a1a1a] text-white rounded-lg font-bold flex items-center justify-center gap-2 hover:bg-black transition-colors"
        >
          <FaCalendarCheck className="text-[#c8a24a]" />
          Schedule Free In-Home Quote
        </motion.button>
      </motion.div>

      {/* 2. Investment Estimation Card */}
      <motion.div
        custom={1}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        className="bg-[#1a1a1a] h-[350px] rounded-2xl p-8 text-center text-white border-l-4 border-[#c8a24a] shadow-xl relative overflow-hidden"
      >
        <p className="text-[10px] uppercase tracking-[0.2em] text-[#c8a24a] mb-3 font-bold">
          Your Investment
        </p>
        <div className="space-y-1">
          <h3 className="text-gray-400 text-sm font-medium">
            Estimated cost for:
          </h3>
          <p className="text-white text-lg font-semibold capitalize">
            {projectType || "Select Project"}
          </p>
        </div>
        <div className="mt-6">
          <div className="text-5xl font-light text-[#c8a24a] mb-2">$ --</div>
        </div>
      </motion.div>

      {/* 3. Visual Preview Card - Fixed 500px height */}
      <motion.div
        custom={2}
        initial="hidden"
        whileInView="visible"
        variants={cardVariants}
        // aspect-video soriye h-[500px] add kora hoyeche
        className="bg-[#242424] rounded-2xl h-[400px] w-full flex flex-col items-center justify-center text-center relative overflow-hidden group border border-white/5 shadow-2xl"
      >
        <AnimatePresence mode="wait">
          {currentImage ? (
            <motion.div
              key={stairShape}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 w-full h-full"
            >
              <Image
                src={currentImage}
                alt={stairShape}
                fill // Container fill korar jonno
                className="object-cover" // Image jate chyapta na hoy
                priority
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 text-left">
                <p className="text-[#c8a24a] text-[10px] font-bold uppercase tracking-widest mb-1">
                  Visual Preview
                </p>
                <h5 className="text-white text-lg font-semibold uppercase">
                  {stairShape}
                </h5>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="placeholder"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="p-8"
            >
              <div className="relative mb-4">
                <motion.span
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-[#c8a24a] text-5xl block"
                >
                  ✨
                </motion.span>
              </div>
              <h4 className="text-white text-lg font-medium mb-2">
                Visual Preview
              </h4>
              <p className="text-gray-500 text-sm max-w-[200px]">
                Select your stair shape and details to see the configuration
                here.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
};

export default SidebarSummary;
