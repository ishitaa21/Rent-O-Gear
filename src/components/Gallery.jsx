import { useState } from "react";
import { gallery } from "../data/gallery";

const Gallery = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % gallery.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <div id="gallery" className="py-16 px-6 bg-black text-white text-center">
      
      <h2 className="text-3xl font-bold mb-10">
        Trips Powered by Rent <u>O</u> Gear
      </h2>

      <div className="relative flex items-center justify-center">

        {/* Image */}
        <img
          src={gallery[index].image}
          alt="trip"
          className="w-full max-w-md rounded-xl shadow-lg transition duration-300"
        />

        {/* Left Button */}
        <button
          onClick={prev}
          className="absolute left-2 bg-black/60 px-3 py-2 rounded-full"
        >
          ◀
        </button>

        {/* Right Button */}
        <button
          onClick={next}
          className="absolute right-2 bg-black/60 px-3 py-2 rounded-full"
        >
          ▶
        </button>

      </div>
    </div>
  );
};

export default Gallery;