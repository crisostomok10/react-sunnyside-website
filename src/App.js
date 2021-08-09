import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Gallery from './components/gallery/Gallery';
import Hero from './components/hero/Hero';
import ServicesStandOut from './components/services/ServicesStandOut';
import ServicesTransform from './components/services/ServicesTransform';
import Testimonials from './components/testimonials/Testimonials';
import TwoImage from './components/twoImage/TwoImage';

function App() {
  return (
    <>
      <Hero />
      <ServicesTransform />
      <ServicesStandOut />
      <TwoImage />
      <Testimonials />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
