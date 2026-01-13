const categories = [
  { name: "All Items", icon: "grid_view", active: true },
  { name: "Starters", icon: "tapas" },
  { name: "Main Course", icon: "restaurant" },
  { name: "Beverages", icon: "local_bar" },
];

export default function Category() {
  return (
    <div className="px-8 flex gap-2 overflow-x-auto border-b">
      {categories.map((c) => (
        <button
          key={c.name}
          className={`px-8 py-4 flex flex-col items-center gap-1 ${
            c.active
              ? "border-t border-l border-r rounded-t-2xl bg-white"
              : "text-slate-400"
          }`}
        >
          <span className="material-symbols-outlined">{c.icon}</span>
          <span className="text-sm font-bold">{c.name}</span>
        </button>
      ))}
    </div>
  );
}
