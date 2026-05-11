import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [isHovered, setIsHovered] = useState(false);
  
  const locations = [
    "LEH LADAKH", "SIKKIM", "DARJEELING", "SANDAKPHU", "BHUTAN", 
    "DIGHA", "MANDARMANI", "NORTH BENGAL", "TAWANG"
  ];

  return (
    /* CHANGE: min-h-[85vh] on mobile makes the section shorter so the marquee is pulled up. 
       Reduced pb-40 to pb-24 to close the gap.
    */
    <div className="relative min-h-[85vh] md:min-h-screen w-full flex flex-col justify-start items-center text-center px-6 bg-black overflow-hidden selection:bg-yellow-400 selection:text-black pt-24 md:pt-32 pb-24 md:pb-0">
      
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 blur-[120px] rounded-full z-0 pointer-events-none" />

      <div className="relative z-10 max-w-5xl">
        {/* Main Title */}
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl font-black tracking-tighter leading-tight"
        >
          From Adda to{" "}
          <span 
            className="relative inline-block text-green-400 cursor-help"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <AnimatePresence mode="wait">
              {isHovered ? (
                <motion.span
                  key="adventure"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                  className="text-yellow-400"
                >
                  Expeditions
                </motion.span>
              ) : (
                <motion.span
                  key="adda"
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -10, opacity: 0 }}
                >
                  Adventure
                </motion.span>
              )}
            </AnimatePresence>
          </span>
        </motion.h1>

        <motion.h2 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-2xl md:text-4xl font-bold tracking-tight mt-2 text-white"
        > 
          With Rent <span className="text-yellow-400 underline decoration-white underline-offset-8">O</span> Gear
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-6 text-xl md:text-3xl font-medium"
        >
          Rent riding & travel gear in <span className="text-white border-b border-yellow-400">Kolkata</span>
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-gray-500 mt-2 text-sm md:text-lg uppercase tracking-[0.3em] font-semibold"
        >
          Riding Gears, GoPro & Trekking Gear on Rent
        </motion.p>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex justify-center gap-4 flex-wrap"
        >
          <Link 
            to="/products" 
            className="bg-yellow-400 text-black px-10 py-4 rounded-full font-bold text-lg hover:bg-white hover:scale-105 transition-all shadow-[0_0_20px_rgba(250,204,21,0.3)]"
          > 
            Explore Gear 
          </Link>
          <Link 
            to="/contact" 
            className="border border-white/20 text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
          > 
            Contact Us 
          </Link>
        </motion.div>
      </div>

      {/* --- SCROLLING MARQUEE --- */}
      {/* CHANGE: Changed bottom-4 to bottom-0 on mobile to pull it up as much as possible */}
      <div className="absolute bottom-[50px] md:bottom-10 left-0 w-full overflow-hidden bg-black/50 py-4 border-y border-white/5 rotate-[-1deg] z-20" >
        <motion.div 
          animate={{ x: [0, -1500] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-8 md:gap-12"
        >
          {[...locations, ...locations, ...locations].map((loc, i) => (
            <span key={i} className="text-gray-800 text-3xl md:text-6xl font-black uppercase tracking-tighter opacity-40 md:opacity-30 hover:opacity-100 transition-opacity cursor-default">
              {loc} <span className="text-yellow-400 ml-8 md:ml-12">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;