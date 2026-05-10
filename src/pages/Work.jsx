import React from 'react';
import { motion } from 'framer-motion';
// Import the specific icons you used in the features array
import { ShieldCheck, Banknote, Clock, Zap } from 'lucide-react';

const Work = () => {
  const steps = [
    { title: "Browse & Connect ", desc: "Explore our catalog on the website and reach out via WhatsApp or a direct call to share your gear requirements and sizes." },
    { title: "Confirm & Book", desc: "Once we verify availability, secure your booking by paying a nominal, fully-refundable security deposit." },
    { title: "Pay & Pickup", desc: "Complete the rental payment and collect your gear from our designated location mentioned on the Contact page for free or get it delivered via bike parcel. We don't charge any delivery fees, you only pay the standard Rapido/Uber fare!." },
    { title: "Trial & Go", desc: "Try on your gear during a mutually scheduled trial meet to ensure a perfect fit before you head out on your adventure." }
  ];

  const features = [
    {
      icon: <ShieldCheck className="text-yellow-400 w-8 h-8" />,
      title: "Pioneer in Bengal",
      desc: "West Bengal's first dedicated riding gear rental hub, managed by riders who know the road."
    },
    {
      icon: <Banknote className="text-yellow-400 w-8 h-8" />,
      title: "Lowest Price Guarantee",
      desc: "Top-notch safety shouldn't be expensive. We offer the most competitive rental rates in the state."
    },
    {
      icon: <Clock className="text-yellow-400 w-8 h-8" />,
      title: "9AM - 10PM Support",
      desc: "Fast, efficient human support. We're available right at your fingertips nearly all day, every day."
    },
    {
      icon: <Zap className="text-yellow-400 w-8 h-8" />,
      title: "Medical-Grade Hygiene",
      desc: "Every single Gear is thoroughly washed, sanitized and steam-cleaned before every single adventure."
    }
  ];

  return (
    <div className="bg-black text-white min-h-screen selection:bg-yellow-400 selection:text-black">
      {/* SECTION 1: HOW WE WORK */}
      <section className="py-20 px-6 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center mb-12 md:mb-32"> 
          <p className="text-yellow-400 text-sm tracking-[0.3em] font-bold mb-4 uppercase">How We Work?</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-balance">As simple as borrowing from a friend!</h1>
          <p className="text-gray-400 mb-12"> 
            Process to rent on <span className="underline decoration-yellow-400 underline-offset-4 font-semibold">Rent O Gear</span>
          </p>
        </div>

        <div className="relative max-w-6xl mx-auto">
          {/* THE LINE */}
          <div className="absolute left-1/2 -translate-x-1/2 md:left-0 md:translate-x-0 md:top-1/2 md:w-full md:h-[2px] w-[2px] h-full bg-gray-800 z-0" />

          <div className="relative z-10 flex flex-col md:flex-row justify-between items-center gap-12 md:gap-0">
            {steps.map((step, index) => {
              const isEven = index % 2 === 0;
              return (
                <div key={index} className="flex flex-row md:flex-col items-center w-full relative mb-12 md:mb-0">
                  
                  {/* Top Content (Desktop) */}
                  <div className={`flex-1 text-right pr-8 md:pr-0 md:absolute md:w-80 md:left-1/2 md:-translate-x-1/2 md:text-center 
                    ${isEven ? 'block md:bottom-12' : 'invisible md:hidden'}`}>
                    <h3 className="text-yellow-400 font-bold text-lg leading-tight uppercase">{step.title}</h3>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{step.desc}</p>
                  </div>

                  {/* The Circle */}
                  <div className="relative z-20 flex-shrink-0">
                    <div className="w-10 h-10 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center font-bold text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                      {index + 1}
                    </div>
                  </div>

                  {/* Bottom Content (Desktop) */}
                  <div className={`flex-1 text-left pl-8 md:pl-0 md:absolute md:w-80 md:left-1/2 md:-translate-x-1/2 md:text-center 
                    ${!isEven ? 'block md:top-12' : 'invisible md:hidden'}`}>
                    <h3 className="text-yellow-400 font-bold text-lg leading-tight uppercase">{step.title}</h3>
                    <p className="text-gray-500 text-xs mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 2: WHY CHOOSE US? */}
      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Why Choose Us?</h2>
            <div className="h-1 w-20 bg-yellow-400 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                viewport={{ once: true }}
                className="p-8 rounded-[2.5rem] bg-zinc-900/40 border border-white/5 hover:border-yellow-400/30 transition-all group"
              >
                <div className="mb-4 group-hover:scale-110 transition-transform duration-300">{f.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{f.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Work;