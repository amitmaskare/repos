export default function PlatformCard({ name, status, color, action }) {
  return (
    <div className="bg-white border rounded-xl p-4">
      <div className="flex gap-4 items-center mb-4">
        <div className="w-12 h-12 rounded-lg bg-gray-100 flex items-center justify-center font-bold">
          {name[0]}
        </div>

        <div>
          <h4 className="font-semibold">{name}</h4>
          <p className={`text-xs ${
            color === "green"
              ? "text-green-600"
              : "text-gray-400"
          }`}>
            {status}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center text-xs text-gray-400">
        <span>Last synced: 15m ago</span>

        {action ? (
          <button className="bg-orange-500 text-white px-3 py-1 rounded-md">
            Complete Setup
          </button>
        ) : (
          <button className="flex items-center gap-1">
            ⚙ Settings
          </button>
        )}
      </div>
    </div>
  );
}
