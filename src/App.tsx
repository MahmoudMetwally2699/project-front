import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CustomerSection from './components/CustomerSection';
import TechnologySection from './components/TechnologySection';
import Philosophy from './components/Philosophy';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <CustomerSection />
      <TechnologySection />
      <Philosophy />
      <Footer />
    </div>
  );
}

export default App;