import React from "react";

const DigitalTransformation = () => {
  return (
    <section className="bg-white py-12">
      <div className="container mx-auto px-4">
        {/* Title Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">
            Drive digital transformation for your business
          </h2>
          <div className="flex justify-center">
            <div className="h-1 w-12 bg-blue-600 rounded-full"></div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your image URL
              alt="Collaboration"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Text Content */}
          <div>
            <p className="text-gray-600 mb-6">
              Our experts influence their aptitude to drive development, disruptive solutions, and concoct a thorough technique that incorporates an operational greatness, capabilities, processes, and enterprise’s goal.
            </p>
            <p className="text-gray-600 mb-6">
              Digital Transformation scales up by embracing cutting-edge digital technology to acquire quicker, more transparent, and better outcomes from business results with a 360° effect all across.
            </p>
            {/* Statistics */}
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <h3 className="text-3xl font-bold text-blue-800">900</h3>
                <p className="text-gray-600 uppercase text-sm">Employees</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-800">320</h3>
                <p className="text-gray-600 uppercase text-sm">Projects</p>
              </div>
              <div>
                <h3 className="text-3xl font-bold text-blue-800">50%</h3>
                <p className="text-gray-600 uppercase text-sm">YOY Growth</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 bg-gray-50 py-8 text-center">
          <h3 className="text-xl font-bold text-gray-800 mb-4">
            Form Closer Partnerships With Increased Collaboration
          </h3>
          <a
            href="mailto:sales@magistainc.com"
            className="bg-blue-600 text-white py-2 px-6 rounded-full text-lg font-semibold"
          >
            sales@magistainc.com
          </a>
        </div>
      </div>
    </section>
  );
};

export default DigitalTransformation;
