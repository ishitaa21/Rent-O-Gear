import React from 'react';

const Work = () => {
  const steps = [
    { title: "step ", desc: "description" },
    { title: "step ", desc: "description" },
    { title: "step ", desc: "description" },
    { title: "step ", desc: "description" }
  ];

  return (
    <div className="bg-black text-white py-20 px-6 min-h-screen overflow-hidden">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto text-center mb-24">
        <p className="text-yellow-400 text-sm tracking-[0.3em] font-bold mb-4 uppercase">How We Work?</p>
        <h1 className="text-4xl md:text-5xl font-bold mb-4">As simple as borrowing from a friend!</h1>
        <p className="text-gray-400">Process to rent on <span className="underline decoration-yellow-400 underline-offset-4">Rent <u>O</u> Gear</span></p>
      </div>

      <div className="relative max-w-6xl mx-auto">
        
        {/* THE LINE - Perfectly Centered on Mobile */}
        <div className="absolute 
          left-1/2 -translate-x-1/2 
          md:left-0 md:translate-x-0 md:top-1/2 md:w-full md:h-[2px] 
          w-[2px] h-full 
          bg-gray-800 z-0" 
        />

        <div className="relative z-10 flex flex-col md:flex-row justify-between items-center">
          
          {steps.map((step, index) => {
            const isEven = index % 2 === 0;

            return (
              <div key={index} className="flex flex-row md:flex-col items-center w-full relative mb-20 md:mb-0">
                
                {/* Left Side Content (Mobile) / Top Side (Desktop) */}
                <div className={`flex-1 text-right pr-8 md:pr-0 md:absolute md:w-56 md:text-center 
                  ${isEven ? 'block md:bottom-12' : 'invisible md:hidden'}`}>
                  <h3 className="text-yellow-400 font-bold text-lg leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{step.desc}</p>
                </div>

                {/* The Circle - Locked to the Line */}
                <div className="relative z-20 flex-shrink-0">
                  <div className="w-10 h-10 bg-black border-2 border-yellow-400 rounded-full flex items-center justify-center font-bold text-yellow-400 shadow-[0_0_15px_rgba(250,204,21,0.4)]">
                    {index + 1}
                  </div>
                </div>

                {/* Right Side Content (Mobile) / Bottom Side (Desktop) */}
                <div className={`flex-1 text-left pl-8 md:pl-0 md:absolute md:w-56 md:text-center 
                  ${!isEven ? 'block md:top-12' : 'invisible md:hidden'}`}>
                  <h3 className="text-yellow-400 font-bold text-lg leading-tight">{step.title}</h3>
                  <p className="text-gray-500 text-xs mt-1">{step.desc}</p>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;