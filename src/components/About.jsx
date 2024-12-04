export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-full overflow-hidden border-8 border-blue-400">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80"
              alt="Team collaboration"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold text-blue-900 mb-6">Innovative Technologies.<br/>Global Solutions</h2>
            <p className="text-gray-600 mb-8">
              All that we do mirrors our industry understanding, domain information and thought initiative. Our accomplished group offers proficient types of assistance, content administration, learning management to customers across enterprises.
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full transition-colors duration-200">
              More About Us
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}