
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">Impressum</h1>
          
          <div className="space-y-12 text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Dienstanbieter dieser Webseite</h2>
              <p>
                marketingzeugs GmbH<br />
                Sachsenring 11<br />
                D-27711 Osterholz-Scharmbeck
              </p>
              <p className="mt-4">
                E-Mail: info@marketingzeugs.de<br />
                Web: www.marketingzeugs.de
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Registereintrag</h2>
              <p>
                Handelsregisternummer: HRB 211106<br />
                Registergericht: Amtsgericht Walsrode
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Geschäftsführung</h2>
              <p>
                Stephan Müller, Reinhard Müller
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Umsatzsteuer-ID</h2>
              <p>
                USt-Id-Nr.: DE361025171
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">EU-Streitschlichtung</h2>
              <p>
                Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" className="text-[#22c55e] hover:underline">https://ec.europa.eu/consumers/odr</a>.
              </p>
              <p className="mt-4">
                Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Haftungsausschluss / Disclaimer</h2>
              <p>
                Die Informationen auf der Website der marketingzeugs GmbH wurden sorgfältig and gewissenhaft zusammengestellt. Sie werden auch in Zukunft regelmäßig geprüft, aktualisiert und erweitert. Trotzdem können sich Angaben zwischenzeitlich verändert haben. Eine Haftung oder Garantie für die Aktualität, Richtigkeit und Vollständigkeit der zur Verfügung gestellten Informationen kann daher von der marketingzeugs GmbH nicht übernommen werden.
              </p>
              <p className="mt-4">
                Gleiches gilt auch für alle Websites, auf die mittels eines Hyperlinks verwiesen wird. Für den Inhalt der Websites, die mit einer solchen Verbindung erreicht werden, ist allein der jeweilige Anbieter verantwortlich.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
