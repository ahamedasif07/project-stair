"use client";
import React, { useState } from "react";
import RoomSelection from "../from-components/RoomSelection";
import RoomSize from "../from-components/RoomSize";
import FlooringRemoval from "../from-components/FlooringRemoval";
import FinishColor from "../from-components/FinishColor";
import StartProject from "../from-components/StartProject";
import FromButtons from "../from-components/FromButtons";

export default function FloorForm() {
  const [roomCount, setRoomCount] = useState<number>(1);
  const [roomSizes, setRoomSizes] = useState<string[]>([""]);
  const [removalType, setRemovalType] = useState<string>("none");

  // Step 2 theke room count change hole eikhane array update hobe
  const handleRoomCountChange = (count: number) => {
    setRoomCount(count);
    const newSizes = Array(count).fill("");
    // Agonkar value gulo retain korbe (jodi thake)
    roomSizes.forEach((val, i) => {
      if (i < count) newSizes[i] = val;
    });
    setRoomSizes(newSizes);
  };

  const handleSizeChange = (index: number, value: string) => {
    const updatedSizes = [...roomSizes];
    updatedSizes[index] = value;
    setRoomSizes(updatedSizes);
  };

  return (
    <div className="space-y-12">
      {/* Step 2: Room Selection - handleRoomCountChange pathate hobe */}
      <RoomSelection />

      {/* Step 3: Room Size Input - roomSizes array pathate hobe */}
      <RoomSize />

      {/* Step 4: Removal Options */}
      <FlooringRemoval />

      {/* Debug Info */}
      <div className="mt-8 p-4 bg-gray-50 rounded-lg text-xs text-gray-500 italic">
        Debug Info: Rooms: {roomCount} | Sizes: [{roomSizes.join(", ")}] |
        Removal: {removalType}
      </div>

      {/* vinylFenish */}
      <FinishColor />
      {/* start yout project */}
      <StartProject />
      {/* buttons */}
      <FromButtons
        buttonOne=" Continue to Contact Information"
        buttonTwo="Skip to Schedule"
      />
    </div>
  );
}
