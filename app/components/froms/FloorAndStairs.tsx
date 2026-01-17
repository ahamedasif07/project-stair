"use client";
import React from "react";
import FromShape from "../from-components/FromShape";
import StairDetails from "../from-components/StairDetails";
import RoomSelection from "../from-components/RoomSelection";
import RoomSize from "../from-components/RoomSize";
import FlooringRemoval from "../from-components/FlooringRemoval";
import FinishColor from "../from-components/FinishColor";
import StartProject from "../from-components/StartProject";
import FromButtons from "../from-components/FromButtons";

export default function FloorAndStairs() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <FromShape step="step 2" />
      <StairDetails step="step 3" />
      <RoomSelection step="step 4" />
      <RoomSize step="step 5" />
      <FlooringRemoval step="step 6" />
      <FinishColor step="step 7" />
      <StartProject step="step 8" />
      <FromButtons
        buttonOne=" Continue to Contact Information"
        buttonTwo="Skip to Schedule"
      />
    </div>
  );
}
