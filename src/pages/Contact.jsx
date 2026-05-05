import React from 'react';
import { FaInstagram, FaFacebook, FaWhatsapp, FaLinkedin, FaEnvelope, FaPhoneAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <div className="max-w-4xl mx-auto px-6 py-20 text-center min-h-screen flex flex-col justify-center">
      <h1 className="text-4xl font-bold text-yellow-400 mb-6 uppercase tracking-tight">
        Need Help? Get in Touch
      </h1>
      
      <div className="text-gray-300 text-lg leading-relaxed mt-4 mb-12 max-w-2xl mx-auto">
        <p className="mb-6">
          Whether you're planning a weekend ride to Mandarmani or a trek to Sandakphu, we've got you covered.
        </p>
        
        <div className="flex flex-col gap-4 items-center mb-10">
            <a href="tel:+919123894013" className="flex items-center gap-2 hover:text-yellow-400 transition">
                <FaPhoneAlt className="text-yellow-400" /> +91 91238 94013
            </a>
            <a href="mailto:rentogear@gmail.com?subject=Enquiry regarding gear rental" className="flex items-center gap-2 hover:text-yellow-400 transition">
                <FaEnvelope className="text-yellow-400" /> <span>rentogear@gmail.com</span>
            </a>
        </div>

        <p className="text-sm uppercase tracking-widest text-gray-500 font-bold mb-6">
            Follow the Journey
        </p>

        {/* Social Icons Grid */}
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