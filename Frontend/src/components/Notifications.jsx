import React from "react";

const Notifications = ({ data }) => {
  return (
    <aside className="w-80 bg-white border-l border-gray-200 flex flex-col">
      
      {/* Header */}
      <div className="px-6 py-5 border-b border-gray-200 flex justify-between items-center">
        <h3 className="font-semibold text-lg text-gray-900">
          Notifications
        </h3>
        <button className="text-primary text-sm font-medium">
          Mark all read
        </button>
      </div>

      {/* List */}
      <div className="flex-1 overflow-y-auto">
        {data.map((n, i) => (
          <div
            key={i}
            className={`px-6 py-5 border-b border-gray-100 ${
              n.active ? "bg-orange-50" : "bg-white"
            }`}
          >
            <div className="flex items-start gap-3">
              
              {/* Dot indicator */}
              <span
                className={`mt-2 h-2 w-2 rounded-full ${
                  n.active ? "bg-orange-400" : "bg-gray-300"
                }`}
              />

              <div className="flex-1">
                <p className="font-medium text-gray-900">
                  {n.title}
                </p>

                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {n.message}
                </p>

                <div className="flex items-center gap-2 text-xs text-gray-400 mt-3">
                  <span>🕒</span>
                  <span>{n.time}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full py-2.5 rounded-xl bg-gray-100 text-sm font-medium text-gray-700 hover:bg-gray-200 transition">
          View History
        </button>
      </div>
    </aside>
  );
};

export default Notifications;
