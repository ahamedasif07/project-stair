import React, { createContext, useContext, useState, ReactNode } from "react";

// Define the shape of our global data
interface FormContextType {
  stairShape: string;
  setStairShape: (val: string) => void;
  selectedFinish: string;
  setSelectedFinish: (val: string) => void;
  timeline: string;
  setTimeline: (val: string) => void;
  roomCount: number;
  roomSizes: string[];
  removalType: string;
  setRemovalType: (val: string) => void;
  handleRoomCountChange: (count: number) => void;
  handleSizeChange: (index: number, value: string) => void;
  finishes: { name: string; color: string }[];
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  // States
  const [stairShape, setStairShape] = useState("");
  const [selectedFinish, setSelectedFinish] = useState("Light Oak");
  const [timeline, setTimeline] = useState("");
  const [roomCount, setRoomCount] = useState<number>(1);
  const [roomSizes, setRoomSizes] = useState<string[]>([""]);
  const [removalType, setRemovalType] = useState<string>("none");

  const finishes = [
    { name: "Light Oak", color: "bg-[#EBDCC3]" },
    { name: "Natural Oak", color: "bg-[#C6A674]" },
    { name: "Warm Brown", color: "bg-[#967451]" },
    { name: "Dark Walnut", color: "bg-[#5B4033]" },
    { name: "Gray Tones", color: "bg-[#9CA3AF]" },
    { name: "Other", color: "bg-[#D1D5DB]" },
  ];

  // Logic Functions
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
    <FormContext.Provider
      value={{
        stairShape,
        setStairShape,
        selectedFinish,
        setSelectedFinish,
        timeline,
        setTimeline,
        roomCount,
        roomSizes,
        removalType,
        setRemovalType,
        handleRoomCountChange,
        handleSizeChange,
        finishes,
      }}
    >
      {children}
    </FormContext.Provider>
  );
};

// Custom hook for easy access
export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context;
};
