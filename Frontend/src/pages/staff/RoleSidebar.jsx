const roles = [
  { name: "Servers", count: 14, active: true },
  { name: "Chefs", count: 8 },
  { name: "Cashiers", count: 5 },
  { name: "Management", count: 3 }
];

export default function RoleSidebar() {
  return (
    <div className="w-[260px] bg-white rounded-xl p-4 border border-gray-200">
      <h3 className="font-semibold text-lg mb-3">Roles</h3>

      <input
        placeholder="Search roles..."
        className="w-full px-3 py-2 border rounded-lg mb-4 text-sm"
      />

      {roles.map(r => (
        <div
          key={r.name}
          className={`flex justify-between items-center p-3 rounded-lg mb-2 cursor-pointer
          ${r.active
            ? "border border-[#FF7A18] bg-[#FFF3EA]"
            : "hover:bg-gray-50"}`}
        >
          <span className="font-medium">{r.name}</span>
          <span className="text-sm text-gray-500">{r.count} Members</span>
        </div>
      ))}
    </div>
  );
}
