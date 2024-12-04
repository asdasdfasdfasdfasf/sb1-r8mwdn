import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Clients from '../components/Clients';

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Services />
      <Clients />
    </div>
  );
}