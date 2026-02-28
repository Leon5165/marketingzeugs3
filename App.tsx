
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Ticker from './components/Ticker';
import History from './components/History';
import References from './components/References';
import Comparison from './components/Comparison';
import Team from './components/Team';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Ticker />
        <References />
        <History />
        <Comparison />
        <Testimonials />
        <FAQ />
        <Team />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
