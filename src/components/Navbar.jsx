import { useState } from "react";
import logo from "../assets/logo.jpeg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white border-b border-gray-800">
      <div className="px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <div className="flex items-center">
          <img 
            src={logo} 
            alt="Rent O Gear Logo" 
            className="h-20 w-auto object-contain" 
          />
          <span className="ml-3 text-xl font-bold tracking-wide hidden sm:block">
            RENT O GEAR
          </span>
        </div>
        {/* Logo / need to add the actual logo here*/}
        <h1 className="text-xl font-bold tracking-wide md:hidden">
          RENT O GEAR
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#products" className="hover:text-yellow-400">Gear</a>

          <a
            href="https://wa.me/919123894013"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Book Now
          </a>
        </div>

        {/* Hamburger Icon */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-6 pb-4 flex flex-col gap-4 bg-black">
          <a href="#" className="hover:text-yellow-400">Home</a>
          <a href="#products" className="hover:text-yellow-400">Gear</a>

          <a
            href="https://wa.me/919123894013"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold text-center"
          >
            Book Now
          </a>
        </div>
      )}
    </div>
  );
};

export default Navbar;