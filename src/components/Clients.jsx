import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function Clients() {
  const scrollRef = useRef(null);
  const clients = [
    { name: 'ASCO Numatics', logo: 'https://upload.wikimedia.org/wikipedia/commons/c/ce/Asco_Numatics_logo.png' },
    { name: 'TD Ameritrade', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/TD_Ameritrade.svg/2560px-TD_Ameritrade.svg.png' },
    { name: 'Deloitte', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/56/Deloitte.svg/2560px-Deloitte.svg.png' },
    { name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/2048px-Microsoft_logo.svg.png' },
    { name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/IBM_logo.svg/2048px-IBM_logo.svg.png' },
    { name: 'Oracle', logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Oracle_logo.svg/2048px-Oracle_logo.svg.png' }
  ];

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { current } = scrollRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="clients" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900">Clients</h2>
        </div>
        <div className="relative">
          <button
            onClick={() => scroll('left')}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
          >
            <ChevronLeft className="h-6 w-6 text-blue-900" />
          </button>
          <div
            ref={scrollRef}
            className="flex overflow-x-hidden scroll-smooth gap-12 px-12"
          >
            {clients.map((client) => (
              <div
                key={client.name}
                className="flex-shrink-0 w-48 flex items-center justify-center"
              >
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-16 object-contain filter grayscale hover:grayscale-0 transition-all duration-300"
                />
              </div>
            ))}
          </div>
          <button
            onClick={() => scroll('right')}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg z-10 hover:bg-gray-100"
          >
            <ChevronRight className="h-6 w-6 text-blue-900" />
          </button>
        </div>
      </div>
    </section>
  );
}