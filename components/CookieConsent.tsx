
import React, { useState, useEffect } from 'react';

const CookieConsent: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookie-consent');
    if (!consent) {
      setIsVisible(true);
    }

    const handleShowSettings = () => setIsVisible(true);
    window.addEventListener('show-cookie-settings', handleShowSettings);
    return () => window.removeEventListener('show-cookie-settings', handleShowSettings);
  }, []);

  const handleAccept = () => {
    localStorage.setItem('cookie-consent', 'accepted');
    setIsVisible(false);
    // In a real app, you'd trigger script loading here
    window.location.reload();
  };

  const handleDecline = () => {
    localStorage.setItem('cookie-consent', 'declined');
    setIsVisible(false);
    window.dispatchEvent(new Event('cookie-consent-changed'));
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 w-full z-[100] p-4 md:p-6">
      <div className="max-w-4xl mx-auto bg-white border border-gray-100 shadow-2xl rounded-3xl p-6 md:p-8 flex flex-col md:flex-row items-center gap-6">
        <div className="flex-1">
          <h3 className="text-lg font-bold text-gray-900 mb-2">Datenschutz & Cookies</h3>
          <p className="text-sm text-gray-500 leading-relaxed">
            Wir nutzen Cookies und externe Dienste (wie Elfsight Chat & Formulare), um unsere Website zu verbessern und Ihnen ein optimales Erlebnis zu bieten. Details finden Sie in unserer <a href="#datenschutz" className="text-[#22c55e] underline">Datenschutzerklärung</a>.
          </p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button 
            onClick={handleDecline}
            className="flex-1 md:flex-none px-6 py-3 text-sm font-bold text-gray-500 hover:text-gray-900 transition-colors"
          >
            Ablehnen
          </button>
          <button 
            onClick={handleAccept}
            className="flex-1 md:flex-none px-8 py-3 bg-[#22c55e] text-white rounded-full text-sm font-bold hover:scale-105 transition-all shadow-lg shadow-green-500/20"
          >
            Alle akzeptieren
          </button>
        </div>
      </div>
    </div>
  );
};

export default CookieConsent;
