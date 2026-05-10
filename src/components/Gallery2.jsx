import { gallery } from "../data/gallery";

const Gallery2 = () => {
  return (
    <div id="gallery" className="py-16 px-6 bg-black text-white text-center">
  <h2 className="text-3xl font-bold mb-10">Trips Powered by <span className="text-yellow-400">Rent <u>O</u> Gear </span> </h2>

  {/* Pinterest Column Container */}
  <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4 max-w-6xl mx-auto">
    {gallery.map((item, i) => (
      <div key={i} className="break-inside-avoid rounded-xl overflow-hidden shadow-lg">
        <img
          src={item.image}
          alt={`trip-${i}`}
          className="w-full h-auto object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>
    ))}
  </div>
</div>
  );
};

export default Gallery2;