import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import Format from './components/Format';
import About from './components/About';
import Corporate from './components/Corporate';
import Festivals from './components/Festivals';
import Footer from './components/Footer';

function App() {
  return (
    <main className="min-h-screen font-sans selection:bg-brand-purple selection:text-white">
      <Navigation />
      <Hero />
      <About />
      <Format />
      <Festivals />
      <Corporate />
      <Footer />
    </main>
  );
}

export default App;