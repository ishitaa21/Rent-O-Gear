import React, { useEffect } from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

const Contact = () => {
  useEffect(() => {
    // 1. Function to safely inject and run the script
    const initJdBadge = () => {
      // Check if the container actually exists in the DOM first
      if (document.getElementById('JdBadge')) {
        const script = document.createElement('script');
        script.src = "https://www.justdial.com/Jd-Widget";
        script.async = true;
        script.id = "jd-widget-script"; // ID to track the script
        document.body.appendChild(script);
      }
    };

    // 2. Use a small timeout to let React finish its "painting" process
    const timer = setTimeout(initJdBadge, 800);

    // 3. Cleanup: Remove the script when the user leaves the page to prevent memory leaks
    return () => {
      clearTimeout(timer);
      const existingScript = document.getElementById('jd-widget-script');
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
    };
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6 uppercase tracking-tight text-balance">
        Need Help? Get in Touch
      </h1>
      
      <div className="text-gray-300 text-lg leading-relaxed mt-4 mb-12 max-w-2xl mx-auto">
        <p className="mb-6">
          Whether you're planning a weekend ride to Mandarmani or a trek to Sandakphu, we've got you covered.
        </p>
        
        <div className="flex flex-col gap-4 items-center mb-10 font-medium">
          <a href="tel:+919123894013" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaPhoneAlt className="text-yellow-400" /> +91 91238 94013
          </a>
          
          <a href="mailto:rentogear@gmail.com?subject=Enquiry regarding gear rental" className="flex items-center gap-2 hover:text-yellow-400 transition">
            <FaEnvelope className="text-yellow-400" /> <span>rentogear@gmail.com</span>
          </a>
        </div>

        {/* --- Google Maps Section --- */}
        <div className="mb-12 group">
          <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">to Visit Us~</p>
          <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3686.5815615643444!2d88.38883707588365!3d22.48234193618175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a027131c4a1a667%3A0x5e167a6d3d71f1b7!2sRENT%20O%20GEAR!5e0!3m2!1sen!2sin!4v1715372481000!5m2!1sen!2sin" 
              width="100%" 
              height="300" 
              style={{ border: 0, filter: 'grayscale(1) contrast(1.2) invert(0.9)' }} 
              className="hover:filter-none transition-all duration-700 ease-in-out"
              allowFullScreen="" 
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Rent O Gear Location"
            ></iframe>
            <div className="absolute bottom-4 right-4">
              <a 
                href="https://maps.app.goo.gl/YeyrLDw2nWnBZc2n6" 
                target="_blank" 
                rel="noreferrer"
                className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-bold text-xs flex items-center gap-2 hover:bg-white transition-colors"
              >
                <FaDirections size={14} /> Get Directions
              </a>
            </div>
          </div>
          <p className="text-gray-500 text-xs mt-4 flex items-center justify-center gap-2">
            <FaMapMarkerAlt className="text-yellow-400" /> R/106, Kamdahari, Purbapara, Garia, Kolkata 700084
          </p>
        </div>

        {/* --- Review Badges Section --- */}
        <div className="flex flex-col gap-3 mb-16 mx-auto w-full max-w-sm">
          {/* Justdial Badge Card */}
          <div className="bg-zinc-900/80 p-4 rounded-xl border border-white/10 shadow-lg">
            <div 
              id="JdBadge" 
              data-s1="b1" 
              data-s2="Y3RyY3QlNDAlNDAlNDAwMzNQWFgzMyUyQlhYMzMlMkIyMTEwMDUwMTMwMDUlMkJCMVU0"
            ></div>
            <div id="JdBadgeDest"></div>
            <p className="text-gray-500 text-[10px] mt-2 tracking-widest uppercase font-semibold">
              Verified on Justdial
            </p>
          </div>

          {/* Google Review Card */}
          <a 
            href="https://www.google.com/search?q=RENT+O+GEAR+Reviews" 
            target="_blank" 
            rel="noreferrer"
            className="flex flex-col items-center justify-center bg-zinc-900/80 p-4 rounded-xl border border-white/10 shadow-lg hover:bg-zinc-800 transition-all group"
          >
            <div className="flex items-center gap-3">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
              </svg>
              <div className="flex flex-col text-left">
                <span className="text-white font-bold text-sm">4.7 ★★★★★</span>
                <span className="text-gray-500 text-[10px] uppercase tracking-wider">Verified Google Reviews</span>
              </div>
            </div>
            <span className="text-yellow-400 text-[10px] mt-2 opacity-0 group-hover:opacity-100 transition-opacity">Write a review →</span>
          </a>
        </div>
        {/* --- End Review Badges Section --- */}

        <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">
          Follow the Journey
        </p>

        <div className="flex justify-center gap-8 text-3xl">
          <a href="https://www.instagram.com/rent_o_gear/" target="_blank" rel="noreferrer" className="hover:text-[#E4405F] transition-all transform hover:scale-110">
            <FaInstagram />
          </a>
          <a href="https://www.facebook.com/RentOgearKolkata/" target="_blank" rel="noreferrer" className="hover:text-[#1877F2] transition-all transform hover:scale-110">
            <FaFacebook />
          </a>
          <a href="https://wa.me/919123894013" target="_blank" rel="noreferrer" className="hover:text-[#25D366] transition-all transform hover:scale-110">
            <FaWhatsapp />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" className="hover:text-[#0A66C2] transition-all transform hover:scale-110">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;