import { reviews } from "../data/reviews";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  // We double the reviews to ensure there's always content visible during the scroll
  const doubledReviews = [...reviews, ...reviews];

  return (
    <div className="py-16 bg-gray-950 overflow-hidden">
      <h3 className="text-2xl font-bold text-center mb-10 text-white">
        All the love received from our customers
      </h3>

      {/* The Wrapper */}
      <div className="relative flex overflow-x-hidden">
        {/* The Animated Container */}
        <div className="flex animate-marquee whitespace-nowrap gap-6 hover:[animation-play-state:paused]">
          {doubledReviews.map((item, index) => (
            // We use index because IDs are now duplicated
            <div key={index} className="w-[300 md:w-[400px] flex-shrink-0">
              <ReviewCard review={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;