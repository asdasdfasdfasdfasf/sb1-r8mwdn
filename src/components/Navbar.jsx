import { useState } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import Logo from './Logo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  const menuItems = [
    { 
      title: 'About Us', 
      path: '/#about' 
    },
    { 
      title: 'Services',
      path: '/services',
      submenu: [
        { name: 'Services Overview', path: '/services' },
        { name: 'Cloud Solutions', path: '/services/cloud-solutions' },
        { name: 'Cybersecurity', path: '/services/cybersecurity' },
        { name: 'Data Analytics', path: '/services/data-analytics' },
        { name: 'Application Development', path: '/services/application-development' },
        { name: 'Enterprise Resource Planning', path: '/services/erp-solutions' },
        { name: 'Contract Staffing', path: '/services/contract-staffing' }
      ]
    },
    { 
      title: 'Products',
      path: '/products',
      submenu: [
        { name: 'Product Overview', path: '/products' },
        { name: 'Digital Solutions', path: '/products/digital-solutions' },
        { name: 'Enterprise Software', path: '/products/enterprise-software' },
        { name: 'Mobile Applications', path: '/products/mobile-applications' }
      ]
    },
    { 
      title: 'Careers',
      path: '/careers',
      submenu: [
        { name: 'Current Openings', path: '/careers/openings' },
        { name: 'Life at Magista', path: '/careers/life' },
        { name: 'Benefits', path: '/careers/benefits' }
      ]
    },
    { 
      title: 'Investor Relations', 
      path: '/investor-relations' 
    },
    { 
      title: 'Contact Us', 
      path: '/contact' 
    },
  ];

  return (
    <nav className="fixed w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/">
            <Logo />
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {menuItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.path}
                  className={`text-gray-700 hover:text-blue-800 transition-colors duration-200 flex items-center ${
                    location.pathname === item.path ? 'text-blue-800' : ''
                  }`}
                  onMouseEnter={() => setActiveDropdown(item.title)}
                  onMouseLeave={() => setActiveDropdown(null)}
                >
                  {item.title}
                  {item.submenu && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>
                
                {item.submenu && activeDropdown === item.title && (
                  <div
                    className="absolute left-0 mt-2 w-64 bg-white border border-gray-200 rounded-md shadow-lg py-2"
                    onMouseEnter={() => setActiveDropdown(item.title)}
                    onMouseLeave={() => setActiveDropdown(null)}
                  >
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-800 ${
                          location.pathname === subItem.path ? 'bg-blue-50 text-blue-800' : ''
                        }`}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-blue-800"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            {menuItems.map((item) => (
              <div key={item.title}>
                <Link
                  to={item.path}
                  className={`block px-3 py-2 text-gray-700 hover:text-blue-800 hover:bg-gray-50 ${
                    location.pathname === item.path ? 'text-blue-800 bg-gray-50' : ''
                  }`}
                  onClick={() => {
                    setActiveDropdown(activeDropdown === item.title ? null : item.title);
                    if (!item.submenu) setIsOpen(false);
                  }}
                >
                  <div className="flex items-center justify-between">
                    {item.title}
                    {item.submenu && <ChevronDown className="h-4 w-4" />}
                  </div>
                </Link>
                
                {item.submenu && activeDropdown === item.title && (
                  <div className="pl-6 bg-gray-50">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.path}
                        className={`block px-3 py-2 text-sm text-gray-700 hover:text-blue-800 ${
                          location.pathname === subItem.path ? 'text-blue-800' : ''
                        }`}
                        onClick={() => setIsOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}