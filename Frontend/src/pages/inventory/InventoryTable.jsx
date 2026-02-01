const items = [
  { name: "Premium Ribeye Steak", cat: "Meat", stock: "12.5 kg", value: "8,450", status: "IN" },
  { name: "Organic Tomatoes", cat: "Produce", stock: "4.2 kg", value: "420", status: "LOW" },
  { name: "Whole Milk", cat: "Dairy", stock: "0.0 L", value: "0", status: "OUT" },
  { name: "Truffle Oil", cat: "Pantry", stock: "2.5 L", value: "12,500", status: "IN" },
  { name: "Sea Salt", cat: "Pantry", stock: "15.0 kg", value: "1,200", status: "IN" },
];

const statusMap = {
  IN: "text-green-600",
  LOW: "text-orange-500",
  OUT: "text-red-500",
};

export default function InventoryTable() {
  return (
    <div className="bg-white rounded-xl border overflow-hidden">

      {/* HEADER */}
      <div className="grid grid-cols-5 text-xs font-semibold text-gray-500 px-6 py-4 border-b">
        <span>ITEM NAME</span>
        <span>CATEGORY</span>
        <span>CURRENT STOCK</span>
        <span>VALUE</span>
        <span>STATUS</span>
      </div>

      {/* ROWS */}
      {items.map((item, i) => (
        <div
          key={i}
          className="grid grid-cols-5 px-6 py-4 border-b text-sm items-center"
        >
          <span className="font-medium">{item.name}</span>
          <span className="px-3 py-1 text-xs rounded-full bg-gray-100 w-fit">
            {item.cat}
          </span>
          <span>{item.stock}</span>
          <span>Rs. {item.value}</span>
          <span className={`font-semibold ${statusMap[item.status]}`}>
            {item.status === "IN" && "IN STOCK"}
            {item.status === "LOW" && "LOW STOCK"}
            {item.status === "OUT" && "OUT OF STOCK"}
          </span>
        </div>
      ))}

    </div>
  );
}
