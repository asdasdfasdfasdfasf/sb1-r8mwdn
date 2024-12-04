import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-10">
      <div className="container mx-auto px-4">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">About Magista Inc</h3>
            <p className="text-sm leading-relaxed">
              Magista Inc is a preferred digital transformation partner. By utilizing the force of innovation, we assist organizations with opportunities, tackle their hardest issues, and enable them to scale.
            </p>
            <div className="mt-4 flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Get in Touch</h3>
            <ul className="text-sm space-y-2">
              <li>
                <i className="fas fa-envelope mr-2"></i>
                <a href="mailto:sales@magistainc.com" className="hover:underline">
                  sales@magistainc.com
                </a>
              </li>
              <li>
                <i className="fas fa-phone-alt mr-2"></i>(732) 227-1772
              </li>
              <li>
                <i className="fas fa-clock mr-2"></i>Mon - Fri: 9am - 5pm
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                USA HQ: Suite #306, 510 Thornall St, Edison, NJ 08837
              </li>
              <li>
                <i className="fas fa-map-marker-alt mr-2"></i>
                India HQ: Plot No. 19, Sanali Spazio, Madhapur, Hyderabad, Telangana 500081
              </li>
            </ul>
          </div>

          {/* Useful Links Section */}
          <div>
            <h3 className="text-lg font-bold mb-4">Useful Links</h3>
            <ul className="text-sm space-y-2">
              <li>
                <a href="#" className="hover:underline">
                  Cloud Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Cybersecurity Solutions
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Data Analytics
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Application Development
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Contract Staffing
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  Enterprise Resource Planning
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 border-t border-gray-700 pt-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-xs text-gray-400">
            © 1999 - 2023 Magista Inc. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-4 text-xs">
            <a href="#" className="hover:underline">
              Privacy Policy
            </a>
            <a href="#" className="hover:underline">
              Terms & Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
