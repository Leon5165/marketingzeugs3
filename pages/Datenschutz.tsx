
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">Datenschutzerklärung</h1>
          
          <div className="space-y-12 text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Allgemeine Hinweise</h3>
              <p>
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie unsere Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Datenerfassung auf unserer Website</h3>
              <p>
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="mt-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie unsere Website betreten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Allgemeine Hinweise und Pflichtinformationen</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Datenschutz</h3>
              <p>
                Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.
              </p>
              <p className="mt-4">
                Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie und zu welchem Zweck das geschieht.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Hinweis zur verantwortlichen Stelle</h3>
              <p>
                Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
                marketingzeugs GmbH<br />
                Sachsenring 11<br />
                27711 Osterholz-Scharmbeck<br />
                E-Mail: info@marketingzeugs.de
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Datenschutzbeauftragter</h3>
              <p>
                Wir haben für unser Unternehmen einen Datenschutzbeauftragten bestellt:<br />
                Dr. Stephan Schenk<br />
                Weser Datenschutz GmbH<br />
                Bucht Str. 13<br />
                28195 Bremen
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Datenerfassung auf unserer Website</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Cookies</h3>
              <p>
                Unsere Internetseiten verwenden teilweise so genannte Cookies. Cookies richten auf Ihrem Rechner keinen Schaden an und enthalten keine Viren. Cookies dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen. Cookies sind kleine Textdateien, die auf Ihrem Rechner abgelegt werden und die Ihr Browser speichert.
              </p>
              <h3 className="text-xl font-bold text-gray-900 mt-6 mb-2">Server-Log-Dateien</h3>
              <p>
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Analyse-Tools und Werbung</h2>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Facebook-Pixel</h3>
              <p>
                Unsere Website nutzt zur Konversionsmessung das Besucheraktions-Pixel von Facebook, Meta Platforms Ireland Limited. So kann das Verhalten der Seitenbesucher nachverfolgt werden, nachdem diese durch Klick auf eine Facebook-Werbeanzeige auf die Website des Anbieters weitergeleitet wurden. Dadurch können die Wirksamkeit der Facebook-Werbeanzeigen für statistische und Marktforschungszwecke ausgewertet und zukünftige Werbemaßnahmen optimiert werden.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. SSL- bzw. TLS-Verschlüsselung</h2>
              <p>
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum Beispiel Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ihre Rechte</h2>
              <p>
                Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung, Sperrung oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit unter der im Impressum angegebenen Adresse an uns wenden.
              </p>
              <ul className="list-disc pl-6 mt-4 space-y-2">
                <li><strong>Widerruf Ihrer Einwilligung zur Datenverarbeitung:</strong> Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine bereits erteilte Einwilligung jederzeit widerrufen.</li>
                <li><strong>Beschwerderecht bei der zuständigen Aufsichtsbehörde:</strong> Im Falle von datenschutzrechtlichen Verstößen steht dem Betroffenen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.</li>
                <li><strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
