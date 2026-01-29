import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Home from './pages/Home';
import Gallery from './pages/Gallery';
import EventGallery from './pages/EventGallery';
import Team from './pages/Team';
import Events from './pages/Events';
import Audiences from './pages/Audiences';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen font-sans selection:bg-brand-purple selection:text-white">
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/galerie" element={<Gallery />} />
          <Route path="/galerie/:eventId" element={<EventGallery />} />
          <Route path="/equipe" element={<Team />} />
          <Route path="/evenements" element={<Events />} />
          <Route path="/publics" element={<Audiences />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
