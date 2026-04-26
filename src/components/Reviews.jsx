import { reviews } from "../data/reviews";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  return (
    <div className="py-16 px-6 bg-gray-950 text-white">
      
      <h3 className="text-2xl font-bold text-center mb-10">
        All the love received from our customers
      </h3>

      <div className="grid md:grid-cols-3 gap-6">
        {reviews.map((item) => (
          <ReviewCard key={item.id} review={item} />
        ))}
      </div>

    </div>
  );
};

export default Reviews;