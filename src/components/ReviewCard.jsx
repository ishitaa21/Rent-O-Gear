const ReviewCard = ({ review }) => {
  return (
    <div className="bg-gray-900 p-6 rounded-xl border border-gray-800 h-full flex flex-col justify-between">
      {/* whitespace-normal ensures the text wraps like a paragraph */}
      <p className="text-gray-300 mb-4 italic whitespace-normal leading-relaxed text-sm md:text-base">
        “{review.text}”
      </p>
      <h3 className="text-yellow-400 font-semibold">— {review.name}</h3>
    </div>
  );
};

export default ReviewCard;