const FloatingButtons = () => {
  const phoneNumber = "919123894013";

  const message = "Hi, I want to rent gear. Please share details.";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-3 rounded-full shadow-lg flex items-center gap-2 transition"
      >
        💬 WhatsApp
      </a>

      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="bg-yellow-400 hover:bg-yellow-500 text-black px-4 py-3 rounded-full shadow-lg flex items-center gap-2 font-semibold transition"
      >
        📞 Call
      </a>

    </div>
  );
};

export default FloatingButtons;