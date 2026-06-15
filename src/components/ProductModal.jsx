import { useState } from "react";
import { useCart } from "../context/CartContext";

const ImageGallery = ({ item }) => {
  const [index, setIndex] = useState(0);
  
  // Determine if it's a catalog or a single image
  const hasCatalog = Array.isArray(item.images) && item.images.length > 1;
  const currentImage = hasCatalog ? item.images[index] : (item.image || item.images?.[0]);

  return (
    <div className="relative group">
      <img
        src={currentImage}
        className="w-full h-52 object-contain bg-white rounded-md p-2"
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

  const { addToCart } = useCart();
  
  // Track configurations individually for each sub-item using its unique ID string
  const [itemConfigurations, setItemConfigurations] = useState({});

  const handleConfigChange = (itemId, key, value) => {
    setItemConfigurations((prev) => ({
      ...prev,
      [itemId]: {
        ...prev[itemId],
        [key]: value,
      },
    }));
  };

  const sizesList = ["S", "M", "L", "XL", "XXL"];

  const handleAddClick = (item) => {
    const config = itemConfigurations[item.id];
    
    // Safety guard to make sure users can't add an incomplete choice
    if (!config?.size || !config?.startDate || !config?.endDate) {
      alert("Please specify a valid Size, Start Date, and End Date first.");
      return;
    }

    // CRASH-PROOF PRICE EXTRACTION: Checks if item.price exists, otherwise defaults to 250
    const numericPrice = item.price 
      ? parseInt(item.price.replace(/[^0-9]/g, ""), 10) 
      : 250;

    addToCart({
      id: item.id,
      parentCategory: product.name,
      brand: item.brand,
      image: item.image || item.images?.[0],
      pricePerDay: numericPrice,
      size: config.size,
      startDate: config.startDate,
      endDate: config.endDate,
    });

    alert(`${product.name} (${item.brand}) added to your rental cart!`);
  };

  return (
    <div className="fixed inset-0 bg-black/85 flex justify-center items-center z-50 p-4 backdrop-blur-sm">
      <div className="bg-gray-900 rounded-xl p-6 max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/5">
        <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-3">
          <h2 className="text-2xl font-bold text-yellow-400">{product.name}</h2>
          <button onClick={onClose} className="text-3xl text-gray-400 hover:text-white transition">&times;</button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {product.items.map((item) => {
            const currentConfig = itemConfigurations[item.id] || {};
            const isConfigComplete = currentConfig.size && currentConfig.startDate && currentConfig.endDate;

            return (
              <div key={item.id} className="bg-gray-800/50 p-4 rounded-xl border border-gray-700/50 flex flex-col justify-between">
                <div>
                  <ImageGallery item={item} />
                  
                  <div className="mt-4 space-y-4">
                    <div className="flex justify-between items-baseline">
                      <p className="text-lg font-semibold text-white">{item.brand}</p>
                      <p className="text-yellow-400 font-bold text-lg">{item.price || "₹250/day"}</p>
                    </div>

                    {/* Size Selector System */}
                    <div>
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-2 text-left">Select Size</p>
                      <div className="flex gap-1.5 flex-wrap">
                        {sizesList.map((sz) => (
                          <button
                            key={sz}
                            type="button"
                            onClick={() => handleConfigChange(item.id, "size", sz)}
                            className={`w-9 h-9 rounded-md text-xs font-bold transition border ${
                              currentConfig.size === sz
                                ? "bg-yellow-400 text-black border-yellow-400"
                                : "bg-gray-900 text-white border-gray-700 hover:border-yellow-400"
                            }`}
                          >
                            {sz}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Rental Date Window Selectors */}
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">From</p>
                        <input
                          type="date"
                          min={new Date().toISOString().split("T")[0]}
                          value={currentConfig.startDate || ""}
                          onChange={(e) => handleConfigChange(item.id, "startDate", e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-xs focus:outline-none focus:border-yellow-400 text-white"
                        />
                      </div>
                      <div>
                        <p className="text-xs text-gray-400 uppercase font-bold tracking-wider mb-1">To</p>
                        <input
                          type="date"
                          min={currentConfig.startDate || new Date().toISOString().split("T")[0]}
                          value={currentConfig.endDate || ""}
                          onChange={(e) => handleConfigChange(item.id, "endDate", e.target.value)}
                          className="w-full bg-gray-900 border border-gray-700 rounded p-2 text-xs focus:outline-none focus:border-yellow-400 text-white"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Interactive Dynamic Form Button */}
                <button
                  type="button"
                  onClick={() => handleAddClick(item)}
                  className={`mt-5 w-full py-3 rounded-lg font-bold transition uppercase text-xs tracking-wider ${
                    isConfigComplete
                      ? "bg-yellow-400 text-black hover:bg-yellow-500"
                      : "bg-gray-700 text-gray-400 cursor-not-allowed"
                  }`}
                >
                  {isConfigComplete ? "Add to Cart" : "Select Options"}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductModal;