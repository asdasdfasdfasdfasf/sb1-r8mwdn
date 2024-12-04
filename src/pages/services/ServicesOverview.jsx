import { Link } from 'react-router-dom';
import { Cloud, Shield, BarChart3, Code, Building2, Users } from 'lucide-react';

const services = [
  {
    title: 'Cloud Solutions',
    description: 'The urgency for advanced cloud solutions.',
    icon: Cloud,
    path: '/services/cloud-solutions'
  },
  {
    title: 'Cybersecurity',
    description: 'The need for enhanced cybersecurity.',
    icon: Shield,
    path: '/services/cybersecurity'
  },
  {
    title: 'Data Analytics',
    description: 'AI/ML – Setting Standards for the future.',
    icon: BarChart3,
    path: '/services/data-analytics'
  },
  {
    title: 'Application Development',
    description: 'Developing smarter applications- The new norm.',
    icon: Code,
    path: '/services/application-development'
  },
  {
    title: 'Enterprise Resource Planning',
    description: 'Your One-stop-shop for ERP services.',
    icon: Building2,
    path: '/services/erp-solutions'
  },
  {
    title: 'Contract Staffing & Workforce Solutions',
    description: 'Ensuring the knowledge alignment.',
    icon: Users,
    path: '/services/contract-staffing'
  },
];

export default function ServicesOverview() {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Services</h1>
          <p className="text-xl text-blue-200">Comprehensive solutions for your business needs</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <Link 
              key={service.title} 
              to={service.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <service.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}