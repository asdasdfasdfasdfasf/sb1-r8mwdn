import React from "react";

const WhyChooseUs = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        {/* Title and Description */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-blue-800 mb-4">Why Choose Us</h2>
          <p className="text-lg text-gray-600">
            We offer specific advanced digital transformation services to various associations, chipping away at an organized guide with clear vision.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Image */}
          <div className="flex justify-center">
            <img
              src="https://via.placeholder.com/600x400" // Replace with your actual image URL
              alt="Workspace"
              className="rounded-lg shadow-md"
            />
          </div>

          {/* Right Text Content */}
          <div className="space-y-8">
            {/* Strategy */}
            <div className="flex items-start space-x-4">
              <div className="text-4xl text-blue-800">📋</div> {/* Replace with your icon */}
              <div>
                <h3 className="text-xl font-bold text-blue-800">Strategy</h3>
                <p className="text-gray-600">
                  Our specialists use analytics to devise a secure user acquisition methodology to allow a business to succeed and flourish in the global markets.
                </p>
              </div>
            </div>

            {/* Solutions */}
            <div className="flex items-start space-x-4">
              <div className="text-4xl text-blue-800">🛡️</div> {/* Replace with your icon */}
              <div>
                <h3 className="text-xl font-bold text-blue-800">Solutions</h3>
                <p className="text-gray-600">
                  We as a solutions service, is centered around distinguishing development opportunities and executing the correct activities that convey market achievement.
                </p>
              </div>
            </div>

            {/* Support */}
            <div className="flex items-start space-x-4">
              <div className="text-4xl text-blue-800">⏰</div> {/* Replace with your icon */}
              <div>
                <h3 className="text-xl font-bold text-blue-800">Support</h3>
                <p className="text-gray-600">
                  The reliability of an Magista Inc solution is based on our solid support system as we are one of the fastest growing IT solution providers in America.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
