import React from 'react';

export default function Stats() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center text-primary mb-12">
          Drive digital transformation for your business
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">900</div>
            <p className="text-gray-500">EMPLOYEES</p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">320</div>
            <p className="text-gray-500">PROJECTS</p>
          </div>
          <div className="p-6 text-center bg-white rounded-lg shadow-md">
            <div className="text-4xl font-bold text-primary mb-2">50%</div>
            <p className="text-gray-500">GROWTH</p>
          </div>
        </div>
      </div>
    </section>
  );
}
