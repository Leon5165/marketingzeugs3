
import React from 'react';

const Contact: React.FC = () => {
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
        
        <div className="bg-white rounded-[2.5rem] p-4 md:p-8 border border-gray-100">
          <div className="elfsight-app-17035d24-7828-4c83-a5b8-72dcbeba23e3" data-elfsight-app-lazy></div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
