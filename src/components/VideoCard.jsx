const VideoCard = ({ review }) => {
  return (
    <div className="bg-gray-900 p-4 rounded-xl shadow-md">
      
      <video
        controls
        className="w-full  rounded-lg"
      >
        <source src={review.video} type="video/mp4" />
      </video>

      <h3 className="text-yellow-400 mt-3 font-semibold text-center">
        — {review.name}
      </h3>
    </div>
  );
};

export default VideoCard;