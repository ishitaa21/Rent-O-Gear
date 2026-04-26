import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Products from './components/Products'
import FloatingButtons from './components/FloatingButtons'
import Reviews from './components/Reviews'
import Gallery from './components/Gallery'
import SEOContent from './components/SEOcontent'

import ReviewTabs from './components/ReviewTabs'

function App() {
  return (
    <div className="bg-black text-white min-h-screen">
      <Navbar />
      <Hero />
      <Products />
      <Gallery />
      
      <ReviewTabs />
      <SEOContent />
      <FloatingButtons />
    </div>

  );
}

export default App;