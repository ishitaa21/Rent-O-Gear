const ReviewCard = ({ review }) => {
  return (
    // Added whitespace-normal so the text inside the card still wraps properly
    <div className="bg-gray-900 p-6 rounded-xl shadow-md border border-gray-800 h-full whitespace-normal">
      <p className="text-gray-300 mb-4 italic">“{review.text}”</p>
      <h3 className="text-yellow-400 font-semibold">— {review.name}</h3>
    </div>
  );
};

export default ReviewCard;