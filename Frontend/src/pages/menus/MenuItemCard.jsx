export default function MenuItemCard({ soldOut }) {
  return (
    <div className="border rounded-xl p-4 flex gap-4">
      <div className="w-20 h-20 bg-gray-100 rounded-lg" />

      <div className="flex-1">
        <div className="flex justify-between">
          <h4 className="font-semibold">Classic Burger</h4>
          <span className="text-orange-500 font-semibold">Rs. 450</span>
        </div>

        <p className="text-sm text-gray-400 mb-3">
          Juicy beef patty with cheese...
        </p>

        <div className="flex items-center gap-2">
          <span
            className={`w-10 h-5 rounded-full relative 
            ${soldOut ? "bg-gray-200" : "bg-green-500"}`}
          >
            <span
              className={`w-4 h-4 bg-white rounded-full absolute top-0.5
              ${soldOut ? "left-1" : "right-1"}`}
            />
          </span>
          <span className="text-xs font-medium">
            {soldOut ? "SOLD OUT" : "AVAILABLE"}
          </span>
        </div>
      </div>
    </div>
  );
}
