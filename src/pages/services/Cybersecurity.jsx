import { Shield, Lock, Eye, AlertTriangle } from 'lucide-react';

const features = [
  {
    title: 'Threat Detection',
    description: 'Advanced threat detection and prevention systems',
    icon: Shield
  },
  {
    title: 'Data Protection',
    description: 'Comprehensive data protection solutions',
    icon: Lock
  },
  {
    title: 'Security Monitoring',
    description: '24/7 security monitoring and response',
    icon: Eye
  },
  {
    title: 'Risk Assessment',
    description: 'Regular security audits and risk assessments',
    icon: AlertTriangle
  }
];

export default function Cybersecurity() {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Cybersecurity</h1>
          <p className="text-xl text-blue-200">Protecting your digital assets</p>
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