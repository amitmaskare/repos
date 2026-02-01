import ReviewCard from "./ReviewCard";

export default function ReviewsList() {
  return (
    <>
      {/* HEADER */}
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-2xl font-semibold">Customer Reviews</h2>
          <p className="text-sm text-gray-500">
            Recent feedback and ratings from your patrons
          </p>
        </div>

        <div className="flex gap-3">
          <button className="px-4 py-2 border rounded-lg text-sm">
            ⭐ All Ratings
          </button>
          <button className="px-4 py-2 border rounded-lg text-sm">
            Sort • Newest
          </button>
        </div>
      </div>

      {/* REVIEWS */}
      <div className="space-y-6">
        <ReviewCard replied />
        <ReviewCard />
        <ReviewCard issue />
      </div>
    </>
  );
}
