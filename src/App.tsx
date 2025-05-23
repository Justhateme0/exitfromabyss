import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/LanguageContext';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Story from './pages/Story';
import Trailer from './pages/Trailer';
import Download from './pages/Download';
import Contact from './pages/Contact';
import Footer from './components/Footer';

const AppContent = () => {
  const { language } = useLanguage();
  
  return (
    <div className="min-h-screen bg-black text-gray-100 vintage-effect" lang={language}>
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/story" element={<Story />} />
          <Route path="/trailer" element={<Trailer />} />
          <Route path="/download" element={<Download />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;