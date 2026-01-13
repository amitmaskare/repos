export default function MenuCard({ item }) {
  const inCart = item.qty && item.qty > 0;

  return (
    <div
      className={`rounded-3xl bg-white shadow-sm overflow-hidden border transition
        ${inCart ? "border-primary ring-2 ring-primary/20" : "border-slate-200"}
      `}
    >
      {/* IMAGE */}
      <div className="h-40 relative">
        <img
          src={item.image}
          className="w-full h-full object-cover"
        />

        {/* IN CART BADGE */}
        {inCart && (
          <span className="absolute top-3 left-3 bg-primary text-white text-xs font-bold px-3 py-1 rounded-full">
            {item.qty} IN CART
          </span>
        )}

        {/* PRICE */}
        <span className="absolute top-3 right-3 bg-white px-3 py-1 rounded-xl font-bold shadow">
          Rs. {item.price}
        </span>
      </div>

      {/* CONTENT */}
      <div className="p-4 flex flex-col h-[170px]">
        <h3 className="font-extrabold text-base">{item.name}</h3>

        {item.desc && (
          <p className="text-sm text-slate-500 mt-1 line-clamp-2">
            {item.desc}
          </p>
        )}

        {/* FOOTER */}
        <div className="mt-auto flex justify-between items-center">
          {/* TIME / CATEGORY */}
          <span className="text-xs text-slate-400 flex items-center gap-1">
            <span className="material-symbols-outlined text-sm">
              schedule
            </span>
            {item.time || item.category}
          </span>

          {/* ACTION */}
          {!inCart ? (
            <button className="w-10 h-10 bg-primary text-white rounded-xl flex items-center justify-center shadow">
              <span className="material-symbols-outlined">add</span>
            </button>
          ) : (
            <div className="flex items-center bg-slate-100 rounded-xl px-2 py-1">
              <button className="px-2">
                <span className="material-symbols-outlined text-sm">
                  remove
                </span>
              </button>
              <span className="px-2 font-bold">{item.qty}</span>
              <button className="px-2">
                <span className="material-symbols-outlined text-sm">
                  add
                </span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
