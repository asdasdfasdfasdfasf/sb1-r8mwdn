import { Code, Smartphone, Globe, Layout } from 'lucide-react';

const features = [
  {
    title: 'Web Development',
    description: 'Custom web applications and solutions',
    icon: Globe
  },
  {
    title: 'Mobile Development',
    description: 'Native and cross-platform mobile apps',
    icon: Smartphone
  },
  {
    title: 'UI/UX Design',
    description: 'User-centered design and experiences',
    icon: Layout
  },
  {
    title: 'Custom Software',
    description: 'Tailored software solutions for your business',
    icon: Code
  }
];

export default function ApplicationDev() {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Application Development</h1>
          <p className="text-xl text-blue-200">Building the future of digital solutions</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <feature.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}