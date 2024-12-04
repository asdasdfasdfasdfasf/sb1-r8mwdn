import React from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';
import WhyChooseUs from '../components/WhyChooseUs';
import Stats from '../components/Stats';
import CTA from '../components/CTA';
import DigitalTransformation from '../components/DigitalTransformation';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <main className="flex-grow">
        <Hero />
        <About />
        <Services />
        <Clients />
        <WhyChooseUs />
        <DigitalTransformation />
        {/* <Stats /> */}
        {/* <CTA /> */}
      </main>
      <Footer />
    </div>
  );
}

