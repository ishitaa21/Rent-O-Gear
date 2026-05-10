import { useState } from "react";
import logo from "../assets/logo.jpeg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="bg-black text-white border-b border-gray-800">
      <div className="px-6 py-4 flex justify-between items-center">
        
        {/* Logo Section */}
        <Link title="Home" to="/">
        <div className="flex items-center">
          
          <img 
            src={logo} 
            alt="Rent <u>O</u> Gear Logo" 
            className="h-10 w-auto object-contain" 
          />
          <span className="ml-3 text-xl font-bold tracking-wide hidden sm:block">
            RENT <u>O</u> GEAR
          </span>
        </div>
        {/* Logo / need to add the actual logo here*/}
        <h1 className="text-xl font-bold tracking-wide md:hidden">
          RENT <u>O</u> GEAR
        </h1>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-sm items-center">
          <Link title="Home" to="/" className="hover:text-yellow-400">Home</Link>
          <Link title="Gear" to="/products" className="hover:text-yellow-400">Gear</Link>
          <Link title="Work" to="/work" className="hover:text-yellow-400">How we Work</Link>
          <Link title="About" to="/about" className="hover:text-yellow-400">About Us</Link>
          
          <Link title="Gallery" to="/gallery" className="hover:text-yellow-400">Gallery</Link>
          

          {/* <a
            href="https://wa.me/919123894013"
            className="bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
          >
            Book Now
          </a> */}
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
          <Link title="Home" to="/" className="hover:text-yellow-400">Home</Link>
          <Link title="Gear" to="/products" className="hover:text-yellow-400">Gear</Link>
          <Link title="Work" to="/work" className="hover:text-yellow-400">How we Work</Link>
          <Link title="About" to="/about" className="hover:text-yellow-400">About Us</Link>
          
          <Link title="Gallery" to="/gallery" className="hover:text-yellow-400">Gallery</Link>

          
        </div>
      )}
    </div>
  );
};

export default Navbar;