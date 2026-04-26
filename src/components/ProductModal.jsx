import { useState } from "react";

const ImageGallery = ({ item }) => {
  const [index, setIndex] = useState(0);
  
  // Determine if it's a catalog or a single image
  const hasCatalog = Array.isArray(item.images) && item.images.length > 1;
  const currentImage = hasCatalog ? item.images[index] : (item.image || item.images?.[0]);

  return (
    <div className="relative group">
      <img
        src={currentImage}
        className="w-full h-50 object-cover rounded-md"
        alt={item.brand}
      />
      
      {hasCatalog && (
        <>
          <button 
            onClick={() => setIndex((prev) => (prev === 0 ? item.images.length - 1 : prev - 1))}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            ←
          </button>
          <button 
            onClick={() => setIndex((prev) => (prev === item.images.length - 1 ? 0 : prev + 1))}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
          >
            →
          </button>
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1">
            {item.images.map((_, i) => (
              <div key={i} className={`w-1.5 h-1.5 rounded-full ${i === index ? 'bg-yellow-400' : 'bg-gray-400'}`} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const ProductModal = ({ product, onClose }) => {
  if (!product) return null;

  const handleWhatsApp = (item) => {
    const message = `Hi, I want to rent ${product.name} (${item.brand}, Size ${item.size}). Is it available?`;
    window.open(`https://wa.me/919123894013?text=${encodeURIComponent(message)}`);
  };

  return (
    <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50 p-4">
      <div className="bg-gray-900 rounded-xl p-6 max-w-3xl w-full max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">{product.name}</h2>
          <button onClick={onClose} className="text-2xl">&times;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {product.items.map((item) => (
            <div key={item.id} className="bg-gray-800 p-3 rounded-lg border border-gray-700">
              
              {/* Using the new ImageGallery Component here */}
              <ImageGallery item={item} />

              <div className="mt-2 text-sm">
                <p><strong>Brand:</strong> {item.brand}</p>
                {/* <p><strong>Size:</strong> {item.size}</p> */}
                <p className="text-yellow-400 font-bold mt-1">{item.price}</p>
              </div>

              <button
                onClick={() => handleWhatsApp(item)}
                className="mt-3 w-full bg-yellow-400 text-black py-2 rounded font-semibold hover:bg-yellow-500 transition"
              >
                Enquire
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;