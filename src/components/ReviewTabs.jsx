import { useState } from "react";
import Reviews from "./Reviews";
import VideoReviews from "./VideoReviews";

const ReviewTabs = () => {
  const [activeTab, setActiveTab] = useState("text");

  return (
    <div className="py-16 px-6 bg-black text-white">
      
      <h2 className="text-3xl font-bold text-center mb-8">
        Customer Experiences
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-4 mb-10 flex-wrap">
        <button
          onClick={() => setActiveTab("text")}
          className={`px-5 py-2 rounded-full border ${
            activeTab === "text"
              ? "bg-yellow-400 text-black"
              : "border-gray-600 text-gray-300"
          }`}
        >
          Text Reviews
        </button>

        

        <button
          onClick={() => setActiveTab("videos")}
          className={`px-5 py-2 rounded-full border ${
            activeTab === "videos"
              ? "bg-yellow-400 text-black"
              : "border-gray-600 text-gray-300"
          }`}
        >
          Video Reviews
        </button>
      </div>

      {/* Content */}
      <div>
        {activeTab === "text" && <Reviews />}
        
        {activeTab === "videos" && <VideoReviews />}
      </div>
    </div>
  );
};

export default ReviewTabs;