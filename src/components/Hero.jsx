const Hero = () => {
  return (
    <div className="  min-h-screen flex flex-col justify-center items-center text-center px-6 bg-gradient-to-b from-black to-gray-900 ">
       
      <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
        From Adda to Adventure(add appt tagline)
      </h1>

      <p className="text-gray-400 mt-4 text-3xl">
        Rent riding & travel gear in Kolkata
      </p>
      

<p className="text-gray-400 mt-4 text-lg">
  Helmets, Jackets, GoPro & Trekking Gear on Rent
</p>

      <div className="mt-8 flex justify-center gap-4 flex-wrap">
        <a
          href="#products" onClick={() => setMenuOpen(false)}
          className="bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold"
        >
          Explore Gear
        </a>

        <a
          href="https://wa.me/9123894013"
          className="border border-yellow-400 px-6 py-3 rounded-lg"
        >
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default Hero;