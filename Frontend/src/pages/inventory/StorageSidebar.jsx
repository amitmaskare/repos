const locations = [
  { name: "Main Kitchen", items: 124, fill: "82%", active: true },
  { name: "Bar Storage", items: 45, fill: "40%" },
  { name: "Cold Storage", items: 32, fill: "95%" },
  { name: "Dry Pantry", items: 210, fill: "65%" },
];

export default function StorageSidebar() {
  return (
    <div>
      <h4 className="text-xs font-semibold text-gray-500 mb-4 tracking-wider">
        STORAGE LOCATIONS
      </h4>

      <div className="space-y-3">
        {locations.map((loc) => (
          <div
            key={loc.name}
            className={`p-4 rounded-xl border cursor-pointer transition
              ${loc.active
                ? "border-orange-500 bg-orange-50"
                : "border-gray-200 hover:bg-gray-50"}
            `}
          >
            <h3 className="font-semibold text-sm">{loc.name}</h3>
            <p className="text-xs text-gray-500 mt-1">
              {loc.items} Items • {loc.fill} Full
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
