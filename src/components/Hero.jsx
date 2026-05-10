import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  // States for the Hover-Swap effect
  const [isHovered, setIsHovered] = useState(false);
  
  // List of adventure spots for the marquee
  const locations = [
    "LEH LADAKH", "SIKKIM", "DARJEELING", "SANDAKPHU", "BHUTAN", 
    "DIGHA", "MANDARMANI", "NORTH BENGAL", "TAWANG"
  ];

  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center px-6 bg-black overflow-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* Background Cinematic Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-yellow-400/5 blur-[120px] rounded-full z-0" />

      <div className="relative z-10 max-w-5xl">
        {/* Main Title with Hover-Swap Effect */}
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
          className="text-2xl md:text-4xl font-bold tracking-tight mt-4 text-white"
        > 
          With Rent <span className="text-yellow-400 underline decoration-white underline-offset-8">O</span> Gear
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-gray-400 mt-8 text-xl md:text-3xl font-medium"
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
          className="mt-12 flex justify-center gap-4 flex-wrap"
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
      <div className="absolute bottom-10 left-0 w-full overflow-hidden bg-black/50 py-4 border-y border-white/5 rotate-[-1deg]">
        <motion.div 
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="flex whitespace-nowrap gap-12"
        >
          {[...locations, ...locations].map((loc, i) => (
            <span key={i} className="text-gray-700 text-4xl md:text-6xl font-black uppercase tracking-tighter opacity-30 hover:opacity-100 transition-opacity cursor-default">
              {loc} <span className="text-yellow-400 ml-12">•</span>
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;