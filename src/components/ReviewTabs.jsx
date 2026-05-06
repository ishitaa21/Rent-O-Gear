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
      <div className="flex flex-col items-center gap-4 mt-12 mb-20">
  <a 
    href="https://www.google.com/search?sca_esv=97234541236c36f9&sxsrf=ANbL-n6laJDBd93ZkDfG5roJMStPS5j82Q:1778081065457&si=AL3DRZEsmMGCryMMFSHJ3StBhOdZ2-6yYkXd_doETEE1OR-qObAU6NmCjRFWup8pQXzI_Lvo1FbwyeavPgtqNuQ1v-Dx-AhCpoPOEklrbwBhUSsi5FmkmuZyUbGjYGAXkvfpyFYce2ax&q=RENT+O+GEAR+Reviews&sa=X&ved=2ahUKEwjS_6aS_KSUAxVAr1YBHfjiM7YQ0bkNegQINxAH&biw=1536&bih=730&dpr=1.25" 
    target="_blank" 
    rel="noreferrer"
    className="group flex items-center gap-3 bg-yellow-400 text-black px-8 py-3 rounded-full font-bold shadow-[0_0_20px_rgba(250,204,21,0.2)] hover:bg-yellow-500 transition-all transform hover:scale-105"
  >
    {/* Google "G" Icon */}
    <svg className="w-5 h-5 bg-white rounded-full p-0.5" viewBox="0 0 24 24">
      <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
      <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
      <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
      <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
    </svg>
    
    <span className="text-sm uppercase tracking-wider">View all on Google</span>
  </a>
</div>
    </div>
    
  );
};

export default ReviewTabs;