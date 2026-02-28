
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Impressum from './pages/Impressum';
import Datenschutz from './pages/Datenschutz';
import AGB from './pages/AGB';
import CookieConsent from './components/CookieConsent';

const App: React.FC = () => {
  return (
    <Router>
      <div className="relative min-h-screen bg-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/impressum" element={<Impressum />} />
          <Route path="/datenschutz" element={<Datenschutz />} />
          <Route path="/agb" element={<AGB />} />
        </Routes>
        <CookieConsent />
      </div>
    </Router>
  );
};

export default App;
