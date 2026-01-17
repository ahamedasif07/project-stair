import React from "react";

const StairDetails = () => {
  return (
    <div>
      <div className="space-y-1">
        <span className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold">
          Step 3
        </span>
        <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
          Enter your stair details
        </h2>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-tight">
            Number of steps *
          </label>
          <input
            type="number"
            placeholder="Enter number of steps"
            className="w-full p-3.5 bg-white border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-[#c8a24a]/20 focus:border-[#c8a24a] transition-all"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-tight">
              Number of landings
            </label>
            <input
              type="number"
              defaultValue="0"
              className="w-full p-3.5 border border-gray-200 rounded-lg outline-none focus:border-[#c8a24a]"
            />
          </div>
          <div>
            <label className="block text-xs font-semibold text-gray-600 mb-2 uppercase tracking-tight">
              Number of box steps
            </label>
            <input
              type="number"
              defaultValue="0"
              className="w-full p-3.5 border border-gray-200 rounded-lg outline-none focus:border-[#c8a24a]"
            />
          </div>
        </div>
        <p className="text-[11px] italic text-gray-400">
          Exact numbers help us provide a more accurate estimate.
        </p>
      </div>
    </div>
  );
};

export default StairDetails;
