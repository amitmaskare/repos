const categories = [
  { name: "Starters", count: 12, active: false },
  { name: "Main Course", count: 24, active: true },
  { name: "Desserts", count: 8 },
  { name: "Beverages", count: 15 },
];

export default function CategorySidebar() {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">Categories</h3>
        <button className="text-orange-500 font-medium">+ Add</button>
      </div>

      <input
        className="w-full border rounded-lg px-3 py-2 text-sm mb-4"
        placeholder="Search categories..."
      />

      <div className="space-y-2">
        {categories.map(cat => (
          <div
            key={cat.name}
            className={`flex items-center justify-between p-3 rounded-lg cursor-pointer
            ${cat.active
              ? "border border-orange-500 bg-orange-50"
              : "hover:bg-gray-100"}`}
          >
            <div>
              <p className="font-medium">{cat.name}</p>
              <p className="text-xs text-gray-400">{cat.count} items</p>
            </div>
            {cat.active && (
              <span className="w-4 h-4 bg-orange-500 rounded-full" />
            )}
          </div>
        ))}
      </div>
    </>
  );
}
