const items = [
  { name: "Food Delivery", active: true, count: "4 Active" },
  { name: "Payments", count: "2 Active" },
  { name: "Marketing", count: "1 Active" },
  { name: "Logistics", count: "None Linked" }
];

export default function PlatformSidebar() {
  return (
    <div className="w-[260px] border-r p-4 bg-white">
      <h3 className="font-semibold mb-3">Platforms</h3>

      <input
        placeholder="Search platforms..."
        className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
      />

      {items.map(i => (
        <div
          key={i.name}
          className={`p-3 rounded-xl mb-2 flex justify-between cursor-pointer
          ${i.active
            ? "border border-orange-500 bg-[#FFF3EA]"
            : "hover:bg-gray-50"}`}
        >
          <span className="font-medium">{i.name}</span>
          <span className="text-xs text-gray-500">{i.count}</span>
        </div>
      ))}
    </div>
  );
}
