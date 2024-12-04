import React from "react";

const servicesData = [
  {
    title: "Application Development",
    description: "Developing smarter applications - The new norm.",
    icon: "🖥️", // Replace with your actual icon/image source
  },
  {
    title: "Enterprise Resource Management",
    description: "Your One-stop-shop for Ecm services.",
    icon: "👥", // Replace with your actual icon/image source
  },
  {
    title: "Cloud Solutions",
    description: "The urgency for advanced cloud solutions.",
    icon: "☁️", // Replace with your actual icon/image source
  },
  {
    title: "Contract Staffing Services",
    description: "Ensuring the knowledge alignment.",
    icon: "🤝", // Replace with your actual icon/image source
  },
  {
    title: "Cybersecurity Solutions",
    description: "The need for enhanced cybersecurity.",
    icon: "🔒", // Replace with your actual icon/image source
  },
  {
    title: "Data Analytics",
    description: "AI/ML – Setting Standards for the future.",
    icon: "📊", // Replace with your actual icon/image source
  },
];

const Services = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-gray-600 mb-8">Get to know our services.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicesData.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-6 text-center border-t-4 border-blue-600"
            >
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-blue-800 mb-2">
                {service.title}
              </h3>
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
