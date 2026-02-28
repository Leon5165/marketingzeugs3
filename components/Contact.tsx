
import React, { useState, useEffect } from 'react';
import { Copy, Check } from 'lucide-react';

const Contact: React.FC = () => {
  const [isCookiesDeclined, setIsCookiesDeclined] = useState(false);
  const [copied, setCopied] = useState(false);
  const email = "hallo@marketingzeugs.de";

  useEffect(() => {
    const checkConsent = () => {
      const consent = localStorage.getItem('cookie-consent');
      setIsCookiesDeclined(consent === 'declined');
    };

    checkConsent();
    window.addEventListener('cookie-consent-changed', checkConsent);
    return () => window.removeEventListener('cookie-consent-changed', checkConsent);
  }, []);

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 tracking-tighter mb-4">
            Kontaktieren Sie <span className="text-[#22c55e]">uns.</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Haben Sie Fragen oder möchten Sie ein Projekt besprechen? Wir freuen uns auf Ihre Nachricht.
          </p>
        </div>
        
        <div className="bg-white rounded-[2.5rem] p-4 md:p-8 border border-gray-100 min-h-[400px] flex items-center justify-center">
          {isCookiesDeclined ? (
            <div className="text-center space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
              <p className="text-gray-400 font-medium">
                Da Sie Cookies abgelehnt haben, wird das Kontaktformular nicht geladen. <br />
                Sie können uns jedoch direkt per E-Mail erreichen:
              </p>
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-[#22c55e] to-emerald-400 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-4 bg-white px-8 py-6 rounded-2xl border border-gray-100 shadow-sm">
                  <span className="text-2xl md:text-3xl font-bold text-gray-900 tracking-tight">
                    {email}
                  </span>
                  <button 
                    onClick={handleCopy}
                    className="p-3 bg-gray-50 hover:bg-gray-100 rounded-xl transition-all active:scale-95"
                    title="E-Mail kopieren"
                  >
                    {copied ? (
                      <Check className="w-6 h-6 text-[#22c55e]" />
                    ) : (
                      <Copy className="w-6 h-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>
              {copied && (
                <p className="text-sm font-bold text-[#22c55e] animate-in fade-in zoom-in duration-300">
                  E-Mail Adresse kopiert!
                </p>
              )}
            </div>
          ) : (
            <div className="w-full">
              <div className="elfsight-app-17035d24-7828-4c83-a5b8-72dcbeba23e3" data-elfsight-app-lazy></div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
