"use client";
import React, { createContext, useContext, useState, ReactNode } from "react";
import {
  useForm,
  FormProvider as RHFFormProvider,
  UseFormReturn,
} from "react-hook-form";

// ১. ফর্মের ইনপুট টাইপ
export interface FormInputs {
  stairShape: string;
  selectedFinish: string;
  timeline: string;
  numberOfSteps: number;
  numberOfLandings: number;
  numberOfBoxSteps: number;
}

// ২. কনটেক্সট টাইপ (RHF এর মেথডসহ)
interface FormContextType extends UseFormReturn<FormInputs> {
  roomCount: number;
  roomSizes: string[];
  removalType: string;
  isModalOpen: boolean;
  setIsModalOpen: (val: boolean) => void;
  setRemovalType: (val: string) => void;
  handleRoomCountChange: (count: number) => void;
  handleSizeChange: (index: number, value: string) => void;
  finishes: { name: string; color: string }[];
}

const FormContext = createContext<FormContextType | undefined>(undefined);

export const FormProvider = ({ children }: { children: ReactNode }) => {
  const methods = useForm<FormInputs>({
    defaultValues: {
      stairShape: "",
      selectedFinish: "Light Oak",
      timeline: "",
      numberOfSteps: 0,
      numberOfLandings: 0,
      numberOfBoxSteps: 0,
    },
  });

  const [roomCount, setRoomCount] = useState<number>(1);
  const [roomSizes, setRoomSizes] = useState<string[]>([""]);
  const [removalType, setRemovalType] = useState<string>("none");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const finishes = [
    { name: "Light Oak", color: "bg-[#EBDCC3]" },
    { name: "Natural Oak", color: "bg-[#C6A674]" },
    { name: "Warm Brown", color: "bg-[#967451]" },
    { name: "Dark Walnut", color: "bg-[#5B4033]" },
    { name: "Gray Tones", color: "bg-[#9CA3AF]" },
    { name: "Other", color: "bg-[#D1D5DB]" },
  ];

  const handleRoomCountChange = (count: number) => {
    setRoomCount(count);
    setRoomSizes((prev) =>
      Array(count)
        .fill("")
        .map((_, i) => prev[i] || ""),
    );
  };

  const handleSizeChange = (index: number, value: string) => {
    const updatedSizes = [...roomSizes];
    updatedSizes[index] = value;
    setRoomSizes(updatedSizes);
  };
  console.log(methods.getValues("stairShape"));
  return (
    <RHFFormProvider {...methods}>
      <FormContext.Provider
        value={{
          ...methods,
          roomCount,
          roomSizes,
          removalType,
          isModalOpen,
          setIsModalOpen,
          setRemovalType,
          handleRoomCountChange,
          handleSizeChange,
          finishes,
        }}
      >
        {children}
      </FormContext.Provider>
    </RHFFormProvider>
  );
};

export const useFormContext = () => {
  const context = useContext(FormContext);
  if (!context)
    throw new Error("useFormContext must be used within FormProvider");
  return context;
};
