import React from 'react';
import { Link } from 'react-router-dom'; // Assumes you are using react-router-dom

const SEOContent = () => {
  const footerLinks = [
    {
      title: "Quick Links",
      links: [
        { name: "Home", path: "/" },
        { name: "Our Gear", path: "/products" },
        { name: "How it Works", path: "/work" },
        { name: "About Us", path: "/about" },
        { name: "Contact", path: "/contact" }
      ]
    },
    {
      title: "Popular Gear",
      links: [
        { name: "Shoes", path: "/products" },
        { name: "Riding Jackets and Pants", path: "/products" },
        { name: "Saddlebags", path: "/products" },
        { name: "Action Cameras", path: "/products" },
        { name: "Gloves & Knee Guards", path: "/products" },
        { name: "Trekking Essentials", path: "/products" }
      ]
    },
    {
      title: "Ride Destinations",
      links: [
        { name: "Kolkata to Digha", path: "/work" },
        { name: "Kolkata to Guwahati", path: "/work" },
        { name: "Mandarmani Coastal Ride", path: "/work" },
        { name: "North Bengal Trails", path: "/work" },
        { name: "Sikkim Expeditions", path: "/work" }
      ]
    }
  ];

  return (
    <footer className="bg-zinc-950 border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand & SEO Paragraph */}
          <div className="lg:col-span-1">
            <h2 className="text-yellow-400 font-black text-xl tracking-tighter mb-4 uppercase">
              Rent O Gear
            </h2>
            <p className="text-gray-500 text-xs leading-relaxed italic">
              Kolkata's premier destination for high-quality riding and adventure gear. 
              We specialize in medical-grade sanitized helmets, jackets, and protective 
              equipment for every rider. Whether you're conquering the heights of Sandakphu 
              or cruising the Digha highway, our mission is to make professional-grade 
              safety accessible and affordable for the local riding community.
            </p>
          </div>

          {/* Link Columns */}
          {footerLinks.map((column, idx) => (
            <div key={idx}>
              <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">
                {column.title}
              </h3>
              <ul className="space-y-4">
                {column.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link 
                      to={link.path} 
                      className="text-gray-500 hover:text-yellow-400 text-xs transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 text-center">
          <p className="text-gray-600 text-[10px] uppercase tracking-[0.2em]">
            © 2026 Rent O Gear Kolkata. All Roads Lead To Adventure.
          </p>
          <p className="text-gray-600 text-[10px] text-right">Made with ♡ in Kolkata!</p>
        </div>
        
      </div>
    </footer>
  );
};

export default SEOContent;