import { videoReviews } from "../data/videoReviews";
import VideoCard from "./VideoCard";

const VideoReviews = () => {
  return (
    <div className="py-16 px-6 bg-black text-white">
      
      <h2 className="text-2xl font-bold text-center mb-10">
        All the love received from our customers
      </h2>

      <div className="columns-1 md:columns-2 gap-6 space-y-6">
  {videoReviews.map((item) => (
    <div key={item.id} className="break-inside-avoid">
      <VideoCard review={item} />
    </div>
  ))}
</div>

    </div>
  );
};

export default VideoReviews;