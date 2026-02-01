export default function InventoryToolbar() {
  return (
    <div className="flex items-center justify-between mb-6">

      <div className="flex gap-3">
        <div className="flex items-center gap-2 border rounded-lg px-4 py-2 bg-white w-[280px]">
          🔍
          <input
            className="outline-none text-sm w-full"
            placeholder="Search inventory items..."
          />
        </div>

        <button className="px-4 py-2 border rounded-lg text-sm bg-white">
          ☰ Filter
        </button>
      </div>

      <button className="bg-orange-500 hover:bg-orange-600 text-white px-5 py-2 rounded-lg font-medium text-sm">
        + Add Stock
      </button>
    </div>
  );
}
