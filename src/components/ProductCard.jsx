const ProductCard = ({ product, onOpen }) => {
  return (
    <div
      onClick={() => onOpen(product)}
      className="bg-[#111827] rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform cursor-pointer flex flex-col h-full"
    >
      {/* Aspect Ratio Container */}
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-white">
        <img
          src={product.items[0].image || product.items[0].images?.[0]}
          className="w-full h-full object-contain p-2" 
          alt={product.name}
        />
      </div>

      {/* Text Content Area */}
      <div className="p-5 flex-grow">
        <h2 className="text-xl font-bold text-white">{product.name}</h2>
        <p className="text-gray-400 text-sm mt-2">
          {product.items.length} options available
        </p>
      </div>
    </div>
  );
};
export default ProductCard;