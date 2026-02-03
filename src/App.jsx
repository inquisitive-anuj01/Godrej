import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FaWhatsapp } from "react-icons/fa";

import Home from './Pages/Home';
import Disclaimer from './Pages/Disclaimer';
import Privacy from './Pages/Privacy';

function App() {
  return (
    <>
      <Router>
        {/* All Pages */}
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/disclaimer' element={<Disclaimer />} />
          <Route path='/privacy' element={<Privacy />} />
        </Routes>

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/919990217085"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-5 right-5 z-50 
          w-14 h-14 rounded-full flex items-center justify-center
          bg-white/30 backdrop-blur-lg shadow-xl
          border border-white/40
          hover:scale-110 transition-all duration-300 cursor-pointer"
        >
          <FaWhatsapp size={32} color="#25D366" />
        </a>
      </Router>
    </>
  );
}

export default App;
