import { useState } from "react";

export default function Cart() {
  const [items, setItems] = useState([
    {
      id: 1,
      name: "Margherita Pizza",
      price: 1200,
      qty: 2,
      image: "https://cdn-icons-png.flaticon.com/512/6978/6978255.png",
      note: "",
    },
    {
      id: 2,
      name: "Caesar Salad",
      price: 870,
      qty: 1,
      image: "https://cdn-icons-png.flaticon.com/512/706/706164.png",
      note: "",
    },
  ]);

  const updateQty = (id, type) => {
    setItems((prev) =>
      prev.map((i) =>
        i.id === id
          ? { ...i, qty: type === "inc" ? i.qty + 1 : Math.max(1, i.qty - 1) }
          : i
      )
    );
  };

  const subtotal = items.reduce((t, i) => t + i.price * i.qty, 0);
  const tax = Math.round(subtotal * 0.1);
  const total = subtotal + tax;

  return (
    <aside className="w-[400px] bg-white border-l flex flex-col">
      {/* Header */}
      <div className="px-6 py-5 border-b flex items-center justify-between">
        <h2 className="text-xl font-bold">Current Order</h2>
        <button className="text-slate-400 hover:text-red-500">
          <span className="material-symbols-outlined">delete_sweep</span>
        </button>
      </div>

      {/* Items */}
      <div className="flex-1 overflow-y-auto px-6 custom-scrollbar">
        {items.map((item) => (
          <div
            key={item.id}
            className="py-5 border-b border-slate-100"
          >
            <div className="flex justify-between mb-3">
              <div className="flex gap-4">
                <div className="w-14 h-14 rounded-xl bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold">{item.name}</h4>
                  <p className="text-xs text-slate-500">
                    Rs. {item.price}
                  </p>
                </div>
              </div>

              <p className="font-bold">
                Rs. {item.price * item.qty}
              </p>
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1">
                <span className="material-symbols-outlined text-slate-400 text-sm">
                  notes
                </span>
                <input
                  placeholder="Add note..."
                  className="text-xs bg-transparent focus:ring-0 border-none text-slate-500"
                />
              </div>

              <div className="flex items-center bg-slate-100 rounded-xl p-1">
                <button
                  onClick={() => updateQty(item.id, "dec")}
                  className="p-1"
                >
                  <span className="material-symbols-outlined">remove</span>
                </button>
                <span className="px-3 font-bold">{item.qty}</span>
                <button
                  onClick={() => updateQty(item.id, "inc")}
                  className="p-1"
                >
                  <span className="material-symbols-outlined">add</span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Summary */}
      <div className="p-6 border-t bg-slate-50">
        <div className="space-y-2 text-sm">
          <div className="flex justify-between text-slate-500">
            <span>Subtotal</span>
            <span>Rs. {subtotal}</span>
          </div>
          <div className="flex justify-between text-slate-500">
            <span>Tax (10%)</span>
            <span>Rs. {tax}</span>
          </div>
          <div className="flex justify-between font-bold text-green-600">
            <span>Discount</span>
            <span>- Rs. 0</span>
          </div>
        </div>

        <div className="border-t border-dashed my-4 pt-4 flex justify-between items-center">
          <span className="text-lg font-extrabold">Total</span>
          <span className="text-2xl font-black text-primary">
            Rs. {total}
          </span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-4 gap-3">
          <button className="col-span-1 border rounded-xl py-3 flex flex-col items-center text-xs font-bold">
            <span className="material-symbols-outlined">receipt_long</span>
            BILL
          </button>

          <button className="col-span-1 border rounded-xl py-3 flex flex-col items-center text-xs font-bold">
            <span className="material-symbols-outlined">pause_circle</span>
            HOLD
          </button>

          <button className="col-span-2 bg-primary text-white rounded-xl py-3 flex items-center justify-center gap-2 font-extrabold shadow-lg">
            Pay Now
            <span className="material-symbols-outlined">arrow_forward</span>
          </button>
        </div>
      </div>
    </aside>
  );
}
