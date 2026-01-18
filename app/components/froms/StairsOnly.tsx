"use client";
import React, { useState } from "react";
import FromShape from "../from-components/FromShape";
import StairDetails from "../from-components/StairDetails";
import VinylFenish from "../from-components/FinishColor";
import StartProject from "../from-components/StartProject";
import FromButtons from "../from-components/FromButtons";

const StairsOnly = () => {
  // const [stairShape, setStairShape] = useState("");
  // const [selectedFinish, setSelectedFinish] = useState("Light Oak");
  // const [timeline, setTimeline] = useState("");

  // const finishes = [
  //   { name: "Light Oak", color: "bg-[#EBDCC3]" },
  //   { name: "Natural Oak", color: "bg-[#C6A674]" },
  //   { name: "Warm Brown", color: "bg-[#967451]" },
  //   { name: "Dark Walnut", color: "bg-[#5B4033]" },
  //   { name: "Gray Tones", color: "bg-[#9CA3AF]" },
  //   { name: "Other", color: "bg-[#D1D5DB]" },
  // ];

  return (
    <div className="space-y-12 animate-in fade-in slide-in-from-bottom-4 duration-700">
      {/* STEP 2: Stair Shape */}
      <div className="space-y-4">
        <FromShape step="step 2" />
      </div>

      {/* STEP 3: Stair Details */}
      <div className="space-y-6">
        <StairDetails step="step 3" />
      </div>

      {/* STEP 4: Vinyl Finish */}
      <div className="space-y-6">
        <VinylFenish step="step 4" />
      </div>

      {/* STEP 5: Timeline */}
      <div className="space-y-6">
        <StartProject step="step 5" />
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 ">
        <FromButtons
          buttonOne="Continue to Contact Information"
          buttonTwo="Skip to Schedule"
        />
      </div>
    </div>
  );
};

export default StairsOnly;
