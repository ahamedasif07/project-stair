"use client";
import React, { useState } from "react";
import {
  X,
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  ChevronLeft,
  ChevronRight,
  Briefcase,
} from "lucide-react";
import { useFormContext } from "../custom/FormContext";
import { CiLocationOn } from "react-icons/ci";

const BookingModal = () => {
  const { isModalOpen, setIsModalOpen } = useFormContext();

  const [viewDate, setViewDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<{
    day: number;
    month: number;
    year: number;
  } | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [projectType, setProjectType] = useState<string>("");

  if (!isModalOpen) return null;

  const closeModal = () => setIsModalOpen(false);

  // ক্যালেন্ডার লজিক
  const viewMonth = viewDate.getMonth();
  const viewYear = viewDate.getFullYear();
  const monthName = viewDate.toLocaleString("default", { month: "long" });

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const handlePrevMonth = () =>
    setViewDate(new Date(viewYear, viewMonth - 1, 1));
  const handleNextMonth = () =>
    setViewDate(new Date(viewYear, viewMonth + 1, 1));

  const timeSlots = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-md p-4"
      onClick={closeModal}
    >
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #c4a052;
          border-radius: 10px;
          border: 2px solid #f1f1f1;
        }
      `}</style>

      <div
        className="relative w-full max-w-[600px] bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in duration-300"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="bg-[#1a1a1a] text-white p-6 text-center relative">
          <button
            onClick={closeModal}
            className="absolute right-4 top-4 text-gray-400 hover:text-white transition-colors"
          >
            <X size={22} />
          </button>
          <h2 className="text-2xl font-bold mb-1 tracking-tight">
            Schedule Free In-Home Visit
          </h2>
          <p className="text-gray-400 text-sm italic">
            We'll help measure and provide an accurate quote
          </p>
        </div>

        {/* Scrollable Content Area */}
        <div className="max-h-[75vh] overflow-y-auto p-6 space-y-8 custom-scrollbar">
          {/* 1. Date Selection */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <CalendarIcon size={20} className="text-[#c4a052]" />
              <h3 className="font-bold text-lg text-gray-800">
                Select Your Preferred Date
              </h3>
            </div>
            <div className="border border-gray-100 rounded-2xl p-5 shadow-sm bg-gray-50/30">
              <div className="flex justify-between items-center mb-6">
                <button
                  onClick={handlePrevMonth}
                  className="p-2 hover:bg-white rounded-full transition-shadow shadow-sm"
                >
                  <ChevronLeft size={20} className="text-[#c4a052]" />
                </button>
                <div className="text-center">
                  <span className="block font-extrabold text-gray-800 text-lg leading-none">
                    {monthName} {viewYear}
                  </span>
                </div>
                <button
                  onClick={handleNextMonth}
                  className="p-2 hover:bg-white rounded-full transition-shadow shadow-sm"
                >
                  <ChevronRight size={20} className="text-[#c4a052]" />
                </button>
              </div>
              <div className="grid grid-cols-7 text-center text-[10px] font-black text-gray-400 mb-4 uppercase">
                {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((d) => (
                  <div key={d}>{d}</div>
                ))}
              </div>
              <div className="grid grid-cols-7 gap-1">
                {Array.from({ length: firstDayOfMonth }).map((_, i) => (
                  <div key={`pad-${i}`} />
                ))}
                {Array.from({ length: daysInMonth }).map((_, i) => {
                  const day = i + 1;
                  const isSelected =
                    selectedDate?.day === day &&
                    selectedDate?.month === viewMonth &&
                    selectedDate?.year === viewYear;
                  return (
                    <button
                      key={day}
                      onClick={() =>
                        setSelectedDate({
                          day,
                          month: viewMonth,
                          year: viewYear,
                        })
                      }
                      className={`h-11 text-sm rounded-xl font-bold transition-all ${isSelected ? "bg-[#c4a052] text-white shadow-lg scale-105" : "text-gray-600 hover:bg-white hover:shadow-sm"}`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </section>

          {/* 2. Time Selection */}
          <section>
            <div className="flex items-center gap-2 mb-4">
              <Clock size={20} className="text-[#c4a052]" />
              <h3 className="font-bold text-lg text-gray-800">
                Select Your Preferred Time
              </h3>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
              {timeSlots.map((time) => (
                <button
                  key={time}
                  onClick={() => setSelectedTime(time)}
                  className={`py-2.5 text-[11px] border-2 rounded-xl font-bold transition-all ${selectedTime === time ? "border-[#c4a052] bg-[#c4a052] text-white shadow-md" : "border-gray-100 text-gray-500 hover:border-[#c4a052]/30"}`}
                >
                  {time}
                </button>
              ))}
            </div>
          </section>

          {/* 3. Contact Details */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <User size={20} className="text-[#c4a052]" />
              <h3 className="font-bold text-lg text-gray-800">
                Your Contact Information
              </h3>
            </div>
            <div className="grid grid-cols-1 gap-4">
              <InputField
                label="Full Name *"
                icon={<User size={16} />}
                placeholder="John Smith"
              />
              <InputField
                label="Phone Number *"
                icon={<Phone size={16} />}
                placeholder="+1 (555) 000-0000"
                type="tel"
              />
              <InputField
                label="Email Address *"
                icon={<Mail size={16} />}
                placeholder="john@example.com"
                type="email"
              />
              <InputField
                label="Address *"
                icon={<CiLocationOn size={16} />}
                placeholder="Enter your full address"
              />
            </div>
          </section>

          {/* 4. Project Type Section (Newly Added from Screenshot) */}
          <section className="space-y-4">
            <div className="flex items-center gap-2 mb-2">
              <Briefcase size={20} className="text-[#c4a052]" />
              <h3 className="font-bold text-lg text-gray-800">
                What type of project are you interested in?
              </h3>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {[
                "Stairs Only",
                "Floor Only",
                "Both Stairs & Floor",
                "Not Sure Yet",
              ].map((type) => (
                <label
                  key={type}
                  className={`flex items-center gap-3 p-4 border-2 rounded-xl cursor-pointer transition-all ${projectType === type ? "border-[#c4a052] bg-[#c4a052]/5" : "border-gray-100 hover:border-gray-200"}`}
                >
                  <input
                    type="radio"
                    name="projectType"
                    className="w-4 h-4 accent-[#c4a052]"
                    onChange={() => setProjectType(type)}
                  />
                  <span className="text-sm font-semibold text-gray-700">
                    {type}
                  </span>
                </label>
              ))}
            </div>
          </section>

          {/* 5. Additional Notes */}
          <section className="space-y-1.5">
            <label className="text-[11px] font-black text-gray-500 uppercase ml-1">
              Additional Notes (Optional)
            </label>
            <textarea
              placeholder="Any specific details or questions you'd like to share?"
              className="w-full p-4 bg-gray-50 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c4a052] focus:bg-white transition-all h-32 resize-none"
            />
          </section>

          {/* Footer Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              onClick={closeModal}
              className="flex-1 py-4 border-2 border-gray-100 rounded-xl font-bold text-gray-600 hover:bg-gray-50 transition-all"
            >
              Cancel
            </button>
            <button
              className="flex-[2] bg-[#1a1a1a] text-white py-4 rounded-xl font-bold text-lg hover:bg-black transition-all active:scale-[0.98] shadow-xl"
              onClick={() => {
                if (!selectedDate || !selectedTime)
                  return alert("Select date & time!");
                alert("Visit Scheduled Successfully!");
                closeModal();
              }}
            >
              Confirm Visit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

// Input Helper
const InputField = ({ label, icon, placeholder, type = "text" }: any) => (
  <div className="space-y-1.5">
    <label className="text-[11px] font-black text-gray-500 uppercase ml-1">
      {label}
    </label>
    <div className="relative group">
      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-[#c4a052] transition-colors">
        {icon}
      </div>
      <input
        type={type}
        placeholder={placeholder}
        className="w-full pl-11 p-3.5 bg-gray-50 border-2 border-gray-100 rounded-xl text-sm focus:outline-none focus:border-[#c4a052] focus:bg-white transition-all"
      />
    </div>
  </div>
);

export default BookingModal;
