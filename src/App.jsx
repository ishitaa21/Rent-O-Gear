import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import FloatingButtons from './components/FloatingButtons'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import SEOContent from './components/SEOcontent'
import ReviewTabs from './components/ReviewTabs'
import About from './pages/About'
import Gallery2 from './components/Gallery2';
import Work from './pages/Work';
import  Contact  from './pages/Contact';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="bg-black text-white min-h-screen">
        <Navbar />
        <ScrollToTop />
        <Routes>
          {/* Define the Home Page Route */}
          <Route path="/" element={
            <>
              <Hero />
              <Products />
              <Gallery />
              <ReviewTabs />
              <SEOContent />
            </>
          } />

          {/* Define the About Page Route */}
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery2 />} />
          <Route path="/products" element={<Products />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        {/* This stays outside because you want it on every page */}
        <FloatingButtons />
      </div>
    </Router>
  );
}

export default App;