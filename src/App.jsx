import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import FloatingButtons from './components/FloatingButtons'
import SEOContent from './components/SEOcontent'
import ReviewTabs from './components/ReviewTabs'
import About from './pages/About'
import Gallery2 from './components/Gallery2';
import Gallery from './components/Gallery';
import Work from './pages/Work';
import Contact from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

// Placeholders for your new checkout routes (We will create these files next!)
const CartPage = () => <div className="pt-24 text-center text-xl">Shopping Cart Review View coming soon...</div>;
const CheckoutPage = () => <div className="pt-24 text-center text-xl">Payment & Delivery Form coming soon...</div>;

function App() {
  return (
    <CartProvider>
      <Router>
        <div className="bg-black text-white min-h-screen">
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={
              <>
                <Hero />
                <Products />
                <Gallery />
                <ReviewTabs />
              </>
            } />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery2 />} />
            <Route path="/products" element={<Products />} />
            <Route path="/work" element={<Work />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Added E-Commerce Funnel Routes */}
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
          </Routes>

          <FloatingButtons />
          <SEOContent />
        </div>
      </Router>
    </CartProvider>
  );
}

export default App;