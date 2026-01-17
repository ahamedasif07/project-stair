import React from "react";
export type Finish = {
  name: string;
  color: string;
};
type VinylProps = {
  finishes: Finish[];
  selectedFinish: string;
  setSelectedFinish: React.Dispatch<React.SetStateAction<string>>;
};
const VinylFenish = ({
  finishes,
  selectedFinish,
  setSelectedFinish,
}: VinylProps) => {
  return (
    <div>
      <div className="space-y-6">
        <div className="space-y-1">
          <span className="text-[10px] uppercase tracking-widest text-[#c8a24a] font-bold">
            Step 4
          </span>
          <h2 className="text-xl md:text-2xl font-semibold text-gray-900">
            Choose your vinyl finish
          </h2>
          <p className="text-sm text-gray-500">
            We specialize in high-quality Luxury Vinyl Plank (LVP) finishes that
            are durable, stylish, and easy to maintain.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {finishes.map((f) => (
            <div
              key={f.name}
              onClick={() => setSelectedFinish(f.name)}
              className={`p-2 border-2 rounded-xl cursor-pointer transition-all ${
                selectedFinish === f.name
                  ? "border-[#c8a24a]"
                  : "border-gray-100 hover:border-gray-200"
              }`}
            >
              <div
                className={`w-full h-20 md:h-24 rounded-lg mb-3 ${f.color}`}
              />
              <div className="flex items-center gap-2 px-1 pb-1">
                <input
                  type="checkbox"
                  checked={selectedFinish === f.name}
                  readOnly
                  className="w-4 h-4 accent-[#c8a24a] rounded"
                />
                <span className="text-[11px] md:text-xs font-bold text-gray-700">
                  {f.name}
                </span>
              </div>
            </div>
          ))}
        </div>
        <p className="text-[11px] text-gray-400 italic">
          Looking for a different material? We can help with other finishes upon
          request.
        </p>
      </div>
    </div>
  );
};

export default VinylFenish;
