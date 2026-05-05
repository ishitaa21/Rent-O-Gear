import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const FloatingButtons = () => {
  const phoneNumber = "919123894013";

  const message = "Hi, I want to rent gear. Please share details.";

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-50">
      
      {/* WhatsApp */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] hover:bg-green-600 text-white px-4 py-4 rounded-full shadow-2xl flex items-center justify-center gap-2 transition-all transform hover:scale-110 active:scale-95"
      >
        <FaWhatsapp size={35} />
      </a>

      {/* Call Button */}
      
      <a
        href={`tel:${phoneNumber}`}
        className="bg-yellow-400 hover:bg-yellow-500 text-black p-4 rounded-full shadow-2xl flex items-center justify-center transition-all transform hover:scale-110 active:scale-95"
        title="Call Us"
      >
        <FaPhoneAlt size={24} />
      </a>

    </div>
  );
};

export default FloatingButtons;