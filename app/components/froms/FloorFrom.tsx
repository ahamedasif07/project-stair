export default function FloorForm() {
  return (
    <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h2 className="text-2xl font-semibold">Flooring Area Details</h2>
      <div className="grid grid-cols-1 gap-4">
        <input
          type="number"
          placeholder="Square footage of the area"
          className="p-3 border rounded-lg w-full"
        />
        <input
          type="text"
          placeholder="Room type (e.g. Living room)"
          className="p-3 border rounded-lg w-full"
        />
      </div>
    </div>
  );
}
