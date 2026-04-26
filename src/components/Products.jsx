import { useState } from "react";
import ProductModal from "./ProductModal";
import ProductCard from "./ProductCard"; // Ensure this is imported
import { products } from "../data/products";

const Products = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [filter, setFilter] = useState("All");

  const categories = ["All", "Riding", "Trekking", "Camera"];

  // Logic to filter products based on the button clicked
  const filteredProducts = filter === "All" 
    ? products 
    : products.filter(p => p.category === filter);

  return (
    <div id="products" className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">Our Gear</h2>

      {/* Filter Buttons */}
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-6 py-2 rounded-full border transition ${
              filter === cat
                ? "bg-yellow-400 text-black border-yellow-400"
                : "border-gray-600 text-white hover:border-yellow-400"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Product Grid with proper spacing */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={setSelectedProduct} />
        ))}
      </div>

      {/* Your existing Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  );
};

export default Products;