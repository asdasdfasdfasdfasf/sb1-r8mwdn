import { Link } from 'react-router-dom';
import { Briefcase, Users, Heart } from 'lucide-react';

const sections = [
  {
    title: 'Current Openings',
    description: 'Explore exciting career opportunities with us.',
    icon: Briefcase,
    path: '/careers/openings'
  },
  {
    title: 'Life at Magista',
    description: 'Discover our vibrant work culture and values.',
    icon: Users,
    path: '/careers/life'
  },
  {
    title: 'Benefits',
    description: 'Comprehensive benefits package for our employees.',
    icon: Heart,
    path: '/careers/benefits'
  }
];

export default function Careers() {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Careers</h1>
          <p className="text-xl text-blue-200">Join our team of innovators</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {sections.map((section) => (
            <Link 
              key={section.title} 
              to={section.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <section.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{section.title}</h3>
              <p className="text-gray-600">{section.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}