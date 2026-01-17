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
      <FromShape />
      <StairDetails />
      <RoomSelection />
      <RoomSize />
      <FlooringRemoval />
      <FinishColor />
      <StartProject />
      <FromButtons
        buttonOne=" Continue to Contact Information"
        buttonTwo="Skip to Schedule"
      />
    </div>
  );
}
