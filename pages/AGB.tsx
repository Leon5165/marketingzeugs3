
import React, { useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const AGB: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="pt-32 pb-24 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight mb-12">Allgemeine Geschäftsbedingungen</h1>
          
          <div className="space-y-12 text-gray-600 font-medium leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 1 Geltung und Vertragsbedingungen</h2>
              <p>
                1. Für alle Dienstleistungen von marketingzeugs GmbH, Sachsenring 11, 27711 Osterholz-Scharmbeck – im Folgenden: „Auftragnehmer“ – für den Auftraggeber zu erbringenden Dienstleistungen gelten ausschließlich diese nachfolgenden Allgemeinen Geschäftsbedingungen, soweit nichts anderes vereinbart ist.
              </p>
              <p className="mt-4">
                2. Auch wenn beim künftigen Abschluss gleichartiger Verträge hierauf nicht nochmals hinterwiesen wird, gelten ausschließlich die Allgemeinen Geschäftsbedingungen des Auftragnehmers in ihrer bei Abgabe der Erklärung des Auftraggebers unter www.marketingzeugs.de/agb abrufbaren Fassung, es sei denn, die Vertragsparteien vereinbaren schriftlich etwas anderes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 2 Vertragsschluss</h2>
              <p>
                Die Angebote des Auftragnehmers sind freibleibend und unverbindlich, es sei denn, sie werden schriftlich als bindend bezeichnet. Eine rechtliche Bindung kommt nur durch beiderseits unterzeichneten Vertrag oder durch schriftliche Auftragsbestätigung des Auftragnehmers zustande, außerdem dadurch, dass der Auftragnehmer nach der Bestellung mit der Leistungserbringung beginnt. Der Auftragnehmer kann schriftliche Bestätigungen mündlicher Vertragserklärungen des Auftraggebers verlangen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 3 Vertragsgegenstand</h2>
              <p>
                1. Der Gegenstand des Vertrages ergibt sich aus dem gesondert abzuschließenden Servicevertrag.
              </p>
              <p className="mt-4">
                2. Der Auftraggeber hat vor Vertragsabschluss überprüft, dass die Spezifikationen aus dem Servicevertrag seinen Wünschen und Bedürfnissen entsprechen.
              </p>
              <p className="mt-4">
                3. Maßgebend für Umfang, Art und Qualität der Leistungen des Auftragnehmers ist der beiderseits unterzeichnete Vertrag oder die Auftragsbestätigung des Auftragnehmers, sonst das Angebot des Auftragnehmers. Sonstige Angaben oder Anforderungen werden nur Vertragsbestandteil, wenn die Vertragsparteien dies schriftlich vereinbart haben oder der Auftragnehmer sie schriftlich bestätigt. Nachträgliche Änderungen des Leistungsumfangs bedürfen der schriftlichen Vereinbarung oder der schriftlichen Bestätigung durch den Auftragnehmer.
              </p>
              <p className="mt-4">
                4. Beschreibungen, Darstellungen, Testläufe usw. sind Leistungsbeschreibungen, jedoch keine Garantien. Eine Garantie bedarf der schriftlichen Erklärung durch den Auftragnehmer.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 4 Rechte des Auftraggebers</h2>
              <p>
                1. Soweit Urheberrechte, Patentrechte, Markenrechte oder sonstige Schutzrechte dem Auftraggeber im Rahmen der Leistungserbringung zugänglich gemacht werden, stehen im Verhältnis der Vertragspartner diese ausschließlich dem Auftragnehmer zu. Soweit die Rechte Dritten zustehen, hat der Auftragnehmer die entsprechenden Verwertungsrechte.
              </p>
              <p className="mt-4">
                2. Verwertungshandlungen durch den Auftraggeber bedürfen der vorherigen schriftlichen Zustimmung des Auftragnehmers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 5 Leistungszeit, Verzögerung, Leistungsort</h2>
              <p>
                1. Angaben zu Leistungszeitpunkten sind unverbindlich, es sei denn, sie sind seitens des Auftragnehmers schriftlich als verbindlich bezeichnet.
              </p>
              <p className="mt-4">
                2. Leistungsfristen verlängern sich um den Zeitraum, in welchem sich der Auftraggeber in Zahlungsverzug aus dem Vertrag befindet und um Zeiten, in denen der Auftragnehmer durch Umstände, die er nicht zu vertreten hat, an der Leistungserbringung gehindert ist und um eine angemessene Anlaufzeit nach Ende des Hinderungsgrundes. Zu diesen Umständen gehören auch höhere Gewalt und Arbeitskampf. Fristen gelten um den Zeitraum als verlängert, in welchem der Auftraggeber vertragswidrig eine Mitwirkungsleistung nicht erbringt, zum Beispiel eine Information nicht gibt, einen Zugang nicht schafft, eine Beistellung nicht leistet oder Mitarbeiter nicht zur Verfügung stellt.
              </p>
              <p className="mt-4">
                3. Vereinbaren die Vertragsparteien nachträglich andere oder zusätzliche Leistungen, die sich auf vereinbarte Fristen auswirken, so verlängern sich diese Fristen um einen angemessenen Zeitraum.
              </p>
              <p className="mt-4">
                4. Mahnungen und Fristsetzungen des Auftraggebers bedürfen zur Wirksamkeit der Schriftform. Eine Nachfrist muss angemessen sein. Eine Frist von weniger als 2 Wochen ist nur in besonderer Eilbedürftigkeit angemessen.
              </p>
              <p className="mt-4">
                5. Leistungsort ist der Ort, an dem die Serviceleistung/Dienstleistung zu erbringen ist. Im Übrigen ist für alle Leistungen aus und im Zusammenhang mit dem Vertrag der Sitz des Auftragnehmers Leistungsort.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 6 Vertragsbindung und Vertragsbeendigung</h2>
              <p>
                1. Jede Beendigung des weiteren Leistungsaustauschs (zum Beispiel bei Rücktritt, Minderung, Kündigung aus wichtigem Grund, Schadensersatz statt der Leistung) muss stets unter Benennung des Grundes und mit angemessener Fristsetzung zur Beseitigung (außer in Notfällen zumindest 2 Wochen) angedroht werden und kann nur binnen 2 Wochen nach Fristablauf erklärt werden. In den gesetzlich angeordneten Fällen kann die Fristsetzung entfallen. Wer die Störung ganz oder überwiegend zu vertreten hat, kann die Rückabwicklung nicht verlangen.
              </p>
              <p className="mt-4">
                2. Alle Erklärungen in diesem Zusammenhang bedürfen zu ihrer Wirksamkeit der Schriftform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 7 Vergütung, Zahlung</h2>
              <p>
                1. Die vereinbarte Vergütung ist unmittelbar, spätestens jedoch innerhalb 1 Woche ab Rechnungstellung zahlbar.
              </p>
              <p className="mt-4">
                2. Fahrtkosten, Spesen und Zubehör sind zusätzlich nach Aufwand zu vergüten. Zusätzliche, vom Auftraggeber verlangte Leistungen werden nach der jeweils aktuellen Preisliste bzw. dem Angebot des Auftragnehmers in Rechnung gestellt.
              </p>
              <p className="mt-4">
                3. Zu allen Vergütungen kommt die gesetzliche Umsatzsteuer hinzu.
              </p>
              <p className="mt-4">
                4. Der Auftraggeber kann nur mit vom Auftragnehmer schriftlich anerkannten oder rechtskräftig festgestellten Forderungen aufrechnen. Außer im Bereich des § 354 a HGB kann der Auftraggeber Ansprüche aus diesem Vertrag nur mit vorheriger schriftlicher Zustimmung des Auftragnehmers an Dritte abtreten. Ein Zurückbehaltungsrecht oder die Einrede des nicht erfüllten Vertrages stehen dem Auftraggeber nur innerhalb dieses Vertragsverhältnisses zu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 8 Pflichten des Auftraggebers</h2>
              <p>
                1. Der Auftraggeber ist verpflichtet, alle Handlungen vorzunehmen, die zu Erbringung des Leistungserfolges durch den Auftragnehmer erforderlich sind und nicht vom Auftragnehmer zu erbringen sind.
              </p>
              <p className="mt-4">
                2. Erkannte Mängel sind unverzüglich und schriftlich zu rügen.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 9 Mangelhaftung</h2>
              <p>
                1. Bei Sachmängeln kann der Auftragnehmer zunächst nacherfüllen. Die Nacherfüllung erfolgt nach Wahl des Auftragnehmers durch Beseitigung des Mangels, durch Lieferung oder dadurch, dass der Auftragnehmer zumutbare Möglichkeiten aufzeigt, die Auswirkungen des Mangels zu vermeiden. Wegen eines Mangels sind zumindest drei Nachbesserungsversuche hinzunehmen.
              </p>
              <p className="mt-4">
                2. Der Auftraggeber unterstützt den Auftragnehmer bei der Fehleranalyse und Mangelbeseitigung, indem er insbesondere auftretende Probleme konkret beschreibt. Der Auftragnehmer kann die Mangelbeseitigung nach seiner Wahl beim Auftraggeber oder in seinen Geschäftsräumen erbringen.
              </p>
              <p className="mt-4">
                3. Haftung: Der Auftragnehmer leistet Schadensersatz oder Ersatz vergeblicher Aufwendungen, gleich aus welchem Rechtsgrund (zum Beispiel aus rechtsgeschäftlichen oder rechtsgeschäftsähnlichen Schuldverhältnissen, Sach- und Rechtsmängeln, Pflichtverletzung und unerlaubte Handlung) nur in folgendem Umfang:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Die Haftung bei Vorsatz, Arglist und aus Garantie ist unbeschränkt.</li>
                <li>Bei grober Fahrlässigkeit haftet der Auftragnehmer in Höhe des typischen und bei Vertragsabschluss vorhersehbaren Schadens.</li>
                <li>Bei einfach fahrlässiger Verletzung einer Kardinalpflicht haftet der Auftraggeber in Höhe des typischen und bei Vertragsabschluss vorhersehbaren Schadens.</li>
              </ul>
              <p className="mt-4">
                4. Dem Auftragnehmer bleibt der Einwand des Mitverschuldens vorbehalten.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 10 Verjährung</h2>
              <p>
                1. Die Verjährung für Ansprüche beträgt:
              </p>
              <ul className="list-disc pl-6 mt-2 space-y-2">
                <li>Bei Sachmängeln für Ansprüche auf Rückzahlung, aus Rücktritt oder Minderung ein Jahr ab Lieferung; bei anderen Ansprüchen aus Sachmängeln ein Jahr.</li>
                <li>Bei Ansprüchen aus Rechtsmängeln zwei Jahre, wenn der Rechtsmangel nicht in einem Recht eines Dritten liegt.</li>
                <li>Bei nicht auf Sach- oder Rechtsmängeln beruhenden Ansprüchen auf Schadensersatz oder Ersatz vergeblicher Aufwendungen zwei Jahre.</li>
              </ul>
              <p className="mt-4">
                2. Die Verjährung tritt spätestens mit Ablauf der in § 199 BGB bestimmten Höchstfristen ein.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 11 Geheimhaltung und Datenschutz</h2>
              <p>
                1. Die Vertragsparteien verpflichten sind, alle ihnen vor oder bei Vertragsdurchführung vom jeweils anderen Vertragspartner zugehenden oder bekanntwerdenden Gegenständen vertraulich zu behandeln.
              </p>
              <p className="mt-4">
                2. Der Auftraggeber macht vertrauliche Vertragsgegenstände nur den Mitarbeitern und sonstigen Dritten zugänglich, die den Zugang zur Ausübung ihrer Dienstaufgaben benötigen.
              </p>
              <p className="mt-4">
                3. Der Auftragnehmer verarbeitet die zur Geschäftsabwicklung erforderlichen Daten des Auftraggebers unter Beachtung der datenschutzrechtlichen Vorschriften.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">§ 12 Schlussbestimmungen</h2>
              <p>
                1. Änderungen und Ergänzungen des Vertrages bedürfen zu ihrer Wirksamkeit der Schriftform.
              </p>
              <p className="mt-4">
                2. Es gilt das Recht der Bundesrepublik Deutschland unter Ausschluss des Kollisionsrechts und des UN-Kaufrechts. Erfüllungsort und ausschließlicher Gerichtsstand ist der Sitz des Auftragnehmers.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AGB;
