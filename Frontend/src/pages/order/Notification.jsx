import { notifications } from "../../data/OrderData";

export default function Notification() {
  return (
    <>
      <div className="p-4 border-b flex justify-between items-center">
        <h3 className="font-semibold">Notifications</h3>
        <span className="text-orange-500 text-sm">4 New</span>
      </div>

      <div className="flex-1 overflow-y-auto">
        {notifications.map((n, i) => (
          <div key={i} className="p-4 border-b">
            <p className="font-medium">{n.title}</p>
            <p className="text-sm text-gray-500">{n.text}</p>
            <span className="inline-block mt-2 text-xs bg-gray-100 px-2 py-1 rounded">
              {n.tag}
            </span>
          </div>
        ))}
      </div>

      <div className="p-4">
        <button className="w-full border rounded-lg py-2 text-sm">
          View All Notifications
        </button>
      </div>
    </>
  );
}
