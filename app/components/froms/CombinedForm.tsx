"use client";
import React from "react";

export default function CombinedForm() {
  return (
    <div className="space-y-10 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Floor Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c8a24a] rounded-full"></span>
          Flooring Area Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Total Square Footage *
            </label>
            <input
              type="number"
              placeholder="e.g. 500"
              className="w-full p-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-[#c8a24a] outline-none transition-all"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Material Type
            </label>
            <select className="w-full p-3 border border-gray-200 rounded-lg outline-none bg-white">
              <option>Luxury Vinyl Plank (LVP)</option>
              <option>Hardwood</option>
              <option>Laminate</option>
            </select>
          </div>
        </div>
      </div>

      {/* Stairs Section */}
      <div className="bg-gray-50 p-6 rounded-xl border border-gray-100">
        <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
          <span className="w-2 h-2 bg-[#c8a24a] rounded-full"></span>
          Staircase Details
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Number of steps *
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-200 rounded-lg"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Landings
            </label>
            <input
              type="number"
              className="w-full p-3 border border-gray-200 rounded-lg"
              placeholder="0"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Stair Shape
            </label>
            <select className="w-full p-3 border border-gray-200 rounded-lg bg-white">
              <option>Straight</option>
              <option>L-Shaped</option>
              <option>Curved</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
