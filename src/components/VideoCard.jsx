const VideoCard = ({ review }) => {
  return (
    
    /* break-inside-avoid is essential for the masonry layout */
    <div className="break-inside-avoid mb-5 bg-zinc-900 rounded-xl overflow-hidden border border-white/5 shadow-lg transition-all duration-500 hover:scale-[1.02] group">
      
      <div className="relative">
        <video
          controls
          className="w-full h-auto block grayscale-[20%] group-hover:grayscale-0 transition-all duration-500"
        >
          <source src={review.video} type="video/mp4" />
        </video>
      </div>

      <div className="py-2 bg-zinc-900">
        <p className="text-gray-500 text-[9px] text-center uppercase tracking-[0.25em] font-bold">
          Verified Rider
        </p>
      </div>
      
    </div>
    
  );
};

export default VideoCard;