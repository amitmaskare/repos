export default function ReviewCard({ replied, issue }) {
  return (
    <div className="bg-white border rounded-xl p-6">

      {/* HEADER */}
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-semibold">
            SJ
          </div>
          <div>
            <h4 className="font-semibold">Sarah Johnson</h4>
            <div className="text-orange-400 text-sm">★★★★★</div>
            <p className="text-xs text-gray-500">Today, 11:42 AM</p>
          </div>
        </div>

        <button className="text-sm bg-orange-50 text-orange-600 px-4 py-1 rounded-lg">
          Reply
        </button>
      </div>

      {/* TEXT */}
      <p className="text-gray-600 mt-4 text-sm leading-relaxed">
        "The truffle pasta was absolutely divine! We had a wonderful evening..."
      </p>

      {/* REPLY */}
      {replied && (
        <div className="mt-4 border-l-4 border-orange-500 bg-orange-50 p-4 rounded">
          <p className="text-xs font-semibold text-orange-600 mb-1">
            YOUR REPLY
          </p>
          <p className="text-sm text-gray-600">
            Thank you for your feedback! We're glad you enjoyed the meal.
          </p>
        </div>
      )}

      {/* ISSUE TAG */}
      {issue && (
        <span className="inline-block mt-4 text-xs bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full">
          AMBIANCE ISSUE
        </span>
      )}
    </div>
  );
}
