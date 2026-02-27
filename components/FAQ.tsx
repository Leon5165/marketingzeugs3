
import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onClick: () => void;
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group focus:outline-none"
      >
        <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${isOpen ? 'text-[#22c55e]' : 'text-black group-hover:text-[#22c55e]'}`}>
          {question}
        </span>
        <div className={`flex-shrink-0 ml-4 transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
          {isOpen ? (
            <Minus className="text-[#22c55e]" size={24} />
          ) : (
            <Plus className="text-gray-300 group-hover:text-[#22c55e]" size={24} />
          )}
        </div>
      </button>
      <div
        className={`overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? 'max-h-[500px] pb-8 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <p className="text-gray-500 text-lg leading-relaxed max-w-3xl">
          {answer}
        </p>
      </div>
    </div>
  );
};

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      question: "Was kostet mich das – und rechnet sich das überhaupt?",
      answer: "Dies ist von Fall zu Fall unterschiedlich. Im ersten Momant nichts! Unsere Erstberatung ist umsonst. Gemeinsam erstellen wir eine Machbarkeitsanalyse und danach können wir Ihnen genau sagen, wie hoch die Investition wäre. Die Kosten liegen weit unter den Kosten für eine unbesetzte Stelle. Die Einstellungskosten liegen zwischen 1.000 und 3.000 Euro."
    },
    {
      question: "Unsere Stellen sind zu speziell, dafür gibt es kein Personal:",
      answer: "Das mag man meinen, denn die Ergebnisse im Recruiting aus den letzten Jahren spiegeln das wieder. Doch solang Ihr Wettbewerb weiterhin produziert, gibt es Kandidatinnen am Markt. Diese müssen nur Zielgrichtet erreicht und überzeugt werden."
    },
    {
      question: "Bei uns funktioniert das nicht. Wir haben schon schlechte Erfahrungen gemacht.",
      answer: "Viele Betriebe haben Recruiting ausprobiert – mit viel Aufwand, wenig Passung und vielen Abbrüchen. Der Unterschied liegt im System, nicht im Versuch."
    },
    {
      question: "Ein befreundeter Unternehmer hat das auch probiert – das hat nichts gebracht.",
      answer: "Einzelne Kampagnen oder isolierte Maßnahmen ersetzen kein strukturiertes, durchgängiges System mit klarer Candidate Journey und sauberer Übergabe."
    },
    {
      question: "Wir haben aktuell keinen akuten Bedarf.",
      answer: "Kein akuter Bedarf heißt oft nur: Der Druck ist noch beherrschbar. Die eigentliche Frage ist, was passiert, wenn morgen jemand ausfällt oder Wissen verloren geht."
    },
    {
      question: "Wenn heute ein Top-Bewerber käme – würden wir ihn überhaupt einstellen können?",
      answer: "Fehlende Strukturen führen dazu, dass gute Kandidaten nicht erkannt, nicht schnell genug entschieden oder nicht sauber integriert werden."
    },
    {
      question: "Darum kümmert sich bei uns schon jemand intern.",
      answer: "Interne Verantwortung ist wichtig. Doch ohne klare Prozesse, Zielgruppenlogik und Geschwindigkeit bleibt Recruiting oft nebenbei – und nicht strategisch. Mit einfachen Werbemaßnahmen ist es nicht getan. Heute benötigt man ein spezifisches und zuverlässiges System- genau da setzten wir an!"
    },
    {
      question: "Wie läuft die Zusammenarbeit konkret ab?",
      answer: "Klare Analyse, saubere Zieldefinition, strukturierte Candidate Journey, Vorqualifizierung, Tempo im Prozess and nachhaltige Integration – mit messbaren Ergebnissen."
    },
    {
      question: "Ist das Leiharbeit, Headhunting oder klassische Personalvermittlung?",
      answer: "Nein. Es ist ein speziell für den Mittelstand entwickeltes System, das Recruiting, Prozesse und interne Abläufe so verbindet, dass die richtigen Menschen kommen – und bleiben."
    }
  ];

  return (
    <section className="pt-8 md:pt-12 pb-32 bg-white font-sans">
      <div className="max-w-4xl mx-auto px-6">
        <div className="mb-16">
          <span className="bg-gray-100 px-5 py-2 rounded-full text-xs font-black text-gray-900 mb-8 inline-block tracking-widest uppercase">
            Fragen & Antworten
          </span>
          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight tracking-tight">
            Häufig gestellte <span className="text-[#22c55e]">Fragen</span>
          </h2>
        </div>

        <div className="flex flex-col">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
