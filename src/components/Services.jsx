import { Cloud, Shield, BarChart3, Code, Building2, Users } from 'lucide-react';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'The urgency for advanced cloud solutions.',
    icon: Cloud,
  },
  {
    title: 'Cybersecurity',
    description: 'The need for enhanced cybersecurity.',
    icon: Shield,
  },
  {
    title: 'Data Analytics',
    description: 'AI/ML – Setting Standards for the future.',
    icon: BarChart3,
  },
  {
    title: 'Application Development',
    description: 'Developing smarter applications- The new norm.',
    icon: Code,
  },
  {
    title: 'Enterprise Resource Planning',
    description: 'Your One-stop-shop for ERP services.',
    icon: Building2,
  },
  {
    title: 'Contract Staffing & Workforce Solutions',
    description: 'Ensuring the knowledge alignment.',
    icon: Users,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-blue-900">Our Services</h2>
          <p className="mt-4 text-gray-600">Get to know our services.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <div key={service.title} className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}