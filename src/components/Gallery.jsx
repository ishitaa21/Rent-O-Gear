import { useState } from "react";
import { gallery } from "../data/gallery";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const Gallery = () => {
  const [index, setIndex] = useState(0);

  // Animation variants for smooth stack transition
  const cardVariants = {
    initial: { scale: 0.8, opacity: 0, y: 30 },
    active: { scale: 1, opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
    next: { scale: 0.9, opacity: 0.3, y: -20 },
    prev: { scale: 0.9, opacity: 0.3, y: 20 },
  };

  const next = () => {
    setIndex((prev) => (prev + 1) % gallery.length);
  };

  const prev = () => {
    setIndex((prev) =>
      prev === 0 ? gallery.length - 1 : prev - 1
    );
  };

  return (
    <div id="gallery" className="py-24 px-6 bg-black text-white text-center overflow-hidden">
      
      {/* Title with improved weight and spacing */}
      <motion.h2 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-4xl md:text-5xl font-extrabold tracking-tighter mb-16"
      >
        Trips Powered by <span className="text-yellow-400 font-black">Rent <span className="underline decoration-white underline-offset-8">O</span> Gear </span> 
      </motion.h2>

      <div className="relative max-w-6xl mx-auto flex items-center justify-center h-[500px] md:h-[600px]">
        
        {/* Simplified Left Arrow with Hover Effect */}
        <button
          onClick={prev}
          className="absolute left-0 z-50 p-4 border border-white/10 rounded-full text-white/50 hover:text-yellow-400 hover:border-yellow-400/50 hover:bg-zinc-900/50 transition-all group"
        >
          <FaChevronLeft className="w-5 h-5 group-hover:scale-110" />
        </button>

        {/* --- DYNAMIC IMAGE STACK --- */}
        <div className="relative w-full max-w-lg h-full flex items-center justify-center">
          <AnimatePresence mode="popLayout">
            {/* The Active Image */}
            <motion.div
              key={index}
              variants={cardVariants}
              initial="initial"
              animate="active"
              exit={next ? "next" : "prev"}
              className="absolute z-40 p-4 bg-zinc-900 rounded-3xl border border-white/5 shadow-[0_0_60px_rgba(250,204,21,0.2)] aspect-[4/5] overflow-hidden"
            >
              <img
                src={gallery[index].image}
                alt="trip"
                className="w-full h-full object-cover rounded-2xl"
              />
            </motion.div>

            {/* Subtle "Ghost" cards for depth (optional, remove if too much) */}
            {[1, 2].map((i) => (
                <motion.div
                    key={`ghost-${i}`}
                    className="absolute z-10 p-4 bg-zinc-900 rounded-3xl border border-white/5 shadow-lg aspect-[4/5] opacity-20"
                    style={{
                        transform: `translateY(${i * -10}px) scale(${1 - i * 0.05})`,
                    }}
                />
            ))}
          </AnimatePresence>
        </div>

        {/* Simplified Right Arrow with Hover Effect */}
        <button
          onClick={next}
          className="absolute right-0 z-50 p-4 border border-white/10 rounded-full text-white/50 hover:text-yellow-400 hover:border-yellow-400/50 hover:bg-zinc-900/50 transition-all group"
        >
          <FaChevronRight className="w-5 h-5 group-hover:scale-110" />
        </button>

      </div>
    </div>
  );
};

export default Gallery;