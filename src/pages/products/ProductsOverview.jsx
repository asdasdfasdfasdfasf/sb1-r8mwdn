import { Link } from 'react-router-dom';
import { Smartphone, Globe, Database } from 'lucide-react';

const products = [
  {
    title: 'Digital Solutions',
    description: 'Transform your business with cutting-edge digital solutions.',
    icon: Globe,
    path: '/products/digital-solutions'
  },
  {
    title: 'Enterprise Software',
    description: 'Scalable and secure enterprise software solutions.',
    icon: Database,
    path: '/products/enterprise-software'
  },
  {
    title: 'Mobile Applications',
    description: 'Native and cross-platform mobile applications.',
    icon: Smartphone,
    path: '/products/mobile-applications'
  }
];

export default function ProductsOverview() {
  return (
    <div className="pt-16">
      <div className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-6">Our Products</h1>
          <p className="text-xl text-blue-200">Innovative solutions for modern businesses</p>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product) => (
            <Link 
              key={product.title} 
              to={product.path}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <product.icon className="w-12 h-12 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold text-blue-900 mb-2">{product.title}</h3>
              <p className="text-gray-600">{product.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}