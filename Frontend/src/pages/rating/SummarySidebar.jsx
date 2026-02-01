export default function SummarySidebar() {
  return (
    <div className="space-y-8">

      {/* SCORE */}
      <div className="bg-[#FBFCFE] border rounded-xl p-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900">4.5</h2>
        <div className="text-orange-400 mt-2">★★★★★</div>
        <p className="text-xs text-gray-500 mt-2">
          OUT OF 5 • 1,248 REVIEWS
        </p>
      </div>

      {/* BREAKDOWN */}
      <div>
        <h4 className="text-xs font-semibold text-gray-500 mb-4 tracking-wider">
          RATING BREAKDOWN
        </h4>

        {[5,4,3,2,1].map((star) => (
          <div key={star} className="flex items-center gap-3 mb-2">
            <span className="text-sm w-6">{star}★</span>
            <div className="flex-1 h-2 bg-gray-100 rounded">
              <div
                className="h-2 bg-orange-500 rounded"
                style={{ width: `${star * 15}%` }}
              />
            </div>
            <span className="text-xs text-gray-500 w-8">
              {star * 5}%
            </span>
          </div>
        ))}
      </div>

      {/* CATEGORIES */}
      <div>
        <h4 className="text-xs font-semibold text-gray-500 mb-4 tracking-wider">
          CATEGORIES
        </h4>

        {[
          { label: "Food", score: "4.8" },
          { label: "Service", score: "4.4" },
          { label: "Ambiance", score: "4.6" },
        ].map((item) => (
          <div
            key={item.label}
            className="flex justify-between items-center p-3 bg-white border rounded-lg mb-2"
          >
            <span className="text-sm font-medium">{item.label}</span>
            <span className="font-semibold">{item.score}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
