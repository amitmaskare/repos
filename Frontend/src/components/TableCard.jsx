import React from "react";

const statusStyles = {
  occupied: {
    bar: "bg-orange-500",
    badge: "bg-orange-100 text-orange-600",
    label: "OCCUPIED",
  },
  free: {
    bar: "bg-green-500",
    badge: "bg-green-100 text-green-600",
    label: "FREE",
  },
  reserved: {
    bar: "bg-blue-500",
    badge: "bg-blue-100 text-blue-600",
    label: "RESERVED",
  },
  payment: {
    bar: "bg-yellow-400",
    badge: "bg-yellow-100 text-yellow-700",
    label: "PAYMENT",
  },
};

const TableCard = ({ table }) => {
  const s = statusStyles[table.status];

  return (
    <div className="relative bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-md transition min-h-[190px] overflow-hidden">
      
      {/* LEFT STATUS BAR */}
      <div className={`absolute left-0 top-0 h-full w-1.5 ${s.bar}`} />

      <div className="p-6 flex flex-col justify-between h-full">
        
        {/* Header */}
        <div className="flex justify-between items-start">
          <span className="text-3xl font-bold text-gray-900">
            {table.no}
          </span>
          <span
            className={`text-[11px] font-bold px-3 py-1 rounded-full ${s.badge}`}
          >
            {s.label}
          </span>
        </div>

        {/* Body */}
        <div className="mt-6 space-y-5 text-sm text-gray-600">
          {table.people && (
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="material-icons-round text-base text-gray-400">
                  person
                </span>
                {table.people}
              </span>
              <span>{table.time || "--"}</span>
            </div>
          )}

          {table.name && (
            <div className="flex justify-between">
              <span className="flex items-center gap-2">
                <span className="material-icons-round text-base text-gray-400">
                  schedule
                </span>
                {table.time}
              </span>
              <span className="font-medium text-gray-700">
                {table.name}
              </span>
            </div>
          )}

          {table.amount && (
            <div className="flex justify-between items-center font-semibold text-gray-900">
              <span className="flex items-center gap-2">
                <span className="material-icons-round text-base text-gray-500">
                  receipt
                </span>
                {table.amount}
              </span>
              <span className="text-gray-500 text-sm">
                {table.note}
              </span>
            </div>
          )}
        </div>

        {/* Footer */}
        {table.status === "free" && (
          <button className="mt-6 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-semibold py-2 rounded-xl">
            Assign
          </button>
        )}

        {table.status === "payment" && (
          <button className="mt-6 w-full bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 rounded-xl">
            Settle
          </button>
        )}
      </div>
    </div>
  );
};

export default TableCard;
