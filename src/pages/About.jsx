import React from 'react';
import { motion } from 'framer-motion';


import { 
  ShieldCheck, Leaf, Users, Award, 
  Heart, Map, Sparkles, Zap 
} from 'lucide-react';

const fadeInVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

const StatItem = ({ count, label }) => (
  <div className="flex flex-col items-center justify-center p-6 space-y-2 border-r last:border-r-0 border-white/5">
    <h4 className="text-4xl md:text-5xl font-black text-yellow-400 tracking-tighter">
      {count}
    </h4>
    <p className="text-gray-500 uppercase text-[10px] md:text-xs tracking-[0.2em] font-bold text-center">
      {label}
    </p>
  </div>
);

  
const About = () => {
  return (
    <div className="bg-black text-white min-h-screen w-full overflow-x-hidden selection:bg-yellow-400 selection:text-black">
      
      {/* --- 1. HERO SECTION --- */}
      <div className="relative h-[90vh] flex items-center justify-center">
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-8xl font-extrabold text-yellow-400 mb-6 tracking-tight"
          >
            Born from the Road. <br />
            <span className="text-white">Built for the Rider.</span>
          </motion.h1>
          
          <motion.h3 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-xl md:text-2xl font-bold text-green-400 mb-8 uppercase tracking-widest"
          >
            West Bengal’s <span className="underline decoration-white underline-offset-8">first</span> dedicated rental hub
          </motion.h3>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="text-gray-300 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto italic"
          >
            "In 2021, the world was changing. Post-COVID, we saw a community of riders eager to explore but held back by high costs. We didn't just start a business; we started a mission to make safety accessible to everyone in Kolkata and beyond."
          </motion.p>
        </div>
      </div>

      {/* --- 2. THE TRANSPARENCY BAR --- */}
      <section className="py-12 md:py-20 bg-zinc-950/50 border-y border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-0">
            <StatItem count="1500+" label="Rides Protected" />
            <StatItem count="100+" label="5-Star Reviews" />
            <StatItem count="100%" label="Sanitized" />
            <StatItem count="0" label="Safety Compromises" />
          </div>
          
          <div className="mt-12 text-center">
            <p className="text-gray-600 text-xs italic">
              *Transparency is our core value. Stats updated as of May 2026.
            </p>
          </div>
        </div>
      </section>

      {/* --- 3. HUMAN & SUSTAINABLE ELEMENTS --- */}
      <section className="max-w-6xl mx-auto px-6 py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <motion.div 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="space-y-6"
        >
          <div className="flex items-center gap-4">
            <Users className="text-yellow-400 w-10 h-10" />
            <h2 className="text-3xl font-bold">More Than Just a Business</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg">
            We don't see our gear as inventory; we see it as your lifeline on the road. We are riders first. We know the silence of a highway at 4 AM, the grit of the dust on the way to Digha, and the weight of a long, rainy stretch toward Guwahati. We know because we've been there, feeling the same wind and facing the same risks.
            <br /><br />
            When we hand-check a visor or tighten a strap, we aren't just following a checklist, we are looking out for a brother or sister of the road. We treat every helmet and jacket as if our own family were wearing it. When you rent from us, you aren't just a customer; you're a fellow traveler borrowing gear from a friend who knows exactly what the road demands and exactly what's at stake.
          </p>
        </motion.div>

        <motion.div 
          variants={fadeInVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="bg-zinc-900/50 p-8 md:p-12 rounded-[2.5rem] border border-white/5 space-y-6 shadow-2xl"
        >
          <div className="flex items-center gap-4">
            <Leaf className="text-green-500 w-10 h-10" />
            <h2 className="text-3xl font-bold text-white">Ride Greener</h2>
          </div>
          <p className="text-gray-400 leading-relaxed text-lg">
            Renting is inherently sustainable. By sharing high-quality gear, we reduce the environmental impact of manufacturing products that might otherwise sit in a closet for 350 days a year. We believe in high-quality gear, low-waste adventure, and a cleaner planet for the next generation of riders.
          </p>
          <div className="pt-4 flex items-center gap-2 text-yellow-400 font-bold text-sm uppercase tracking-tighter text-left">
            <Award className="w-5 h-5 flex-shrink-0" />
            <span>Top-Notch Quality. Lowest Price Guarantee.</span>
          </div>
        </motion.div>
      </section>

      {/* --- 4. THE GEAR PHILOSOPHY --- */}
      <section className="py-24 px-6">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInVariant}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-zinc-900/40 rounded-[3rem] border border-white/10 p-8 md:p-20 relative overflow-hidden text-left">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <ShieldCheck size={300} className="text-yellow-400" />
            </div>
            
            <div className="relative z-10 space-y-8">
              <div className="inline-flex items-center gap-2 bg-yellow-400/10 text-yellow-400 px-4 py-2 rounded-full text-xs font-bold uppercase tracking-[0.2em]">
                <Sparkles size={14} /> Our Sanitization Protocol
              </div>
              <h2 className="text-4xl md:text-6xl font-bold leading-tight text-white">
                We take hygiene as <br />
                <span className="text-yellow-400 text-5xl md:text-7xl font-black">seriously as safety.</span>
              </h2>
              <p className="text-gray-400 text-lg md:text-xl leading-relaxed max-w-2xl">
                Every piece of gear undergoes medical-grade cleaning. All the gears are treated with anti-bacterial steam and are thoroughly washed and sanitized after every trip. You get that "new gear" feel, every time.
              </p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* --- 5. THE ROAD AHEAD --- */}
      <section className="py-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-4 text-left text-yellow-400">
              <Map className="w-10 h-10 flex-shrink-0" /> <span className="text-white font-black">The Road Ahead</span>
            </h2>
            <p className="text-gray-400 leading-relaxed text-xl text-left">
              We are expanding to include specialized trekking equipment and essentials other than what we already have, for routes like Sandakphu. Our goal is to be the basecamp for every adventure starting in Bengal.
            </p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="relative h-80 rounded-[2rem] overflow-hidden border border-white/10 bg-zinc-900/20 flex items-center justify-center"
          >
            <p className="text-yellow-400/10 font-black text-7xl uppercase tracking-tighter rotate-6 select-none text-center">
              Kolkata <br /> & Beyond
            </p>
            <Zap className="absolute text-yellow-400/20 w-32 h-32" />
          </motion.div>
        </div>
      </section>

      {/* --- 6. FINAL CALL TO AUTHENTICITY --- */}
      <section className="py-40 text-center px-6 border-t border-white/5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-10"
        >
          <Heart className="mx-auto text-red-500 animate-pulse" size={54} />
          <h2 className="text-3xl md:text-6xl font-bold italic tracking-tight leading-tight">
            "We aren't just a rental service. <br />
            We are your <span className="text-yellow-400">pit-stop</span> before the big adventure."
          </h2>
          <div className="h-[2px] w-24 bg-yellow-400 mx-auto"></div>
          <p className="text-gray-500 font-bold uppercase tracking-[0.5em] text-sm md:text-base">
            See you on the road.
          </p>
        </motion.div>
      </section>

    </div>
  );
};

export default About;