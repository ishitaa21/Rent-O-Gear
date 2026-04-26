const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl shadow-md">
      <p className="text-gray-300 mb-4">“{review.text}”</p>

      <h3 className="text-yellow-400 font-semibold">
        — {review.name}
      </h3>
    </div>
  );
};

export default ReviewCard;