export default function StaffCard({ name, emp, active }) {
  return (
    <div className="bg-white border border-gray-200 rounded-xl p-4 flex gap-4 w-[280px]">
      <div className="w-12 h-12 rounded-full bg-gray-200" />

      <div className="flex-1">
        <h4 className="font-semibold">{name}</h4>
        <p className="text-xs text-gray-500">{emp}</p>

        <div className="flex items-center gap-2 mt-3">
          <div
            className={`w-9 h-5 rounded-full p-[2px] ${
              active ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full transition ${
                active ? "translate-x-4" : ""
              }`}
            />
          </div>

          <span className="text-xs text-gray-600">
            {active ? "ON DUTY" : "OFF DUTY"}
          </span>
        </div>
      </div>
    </div>
  );
}
