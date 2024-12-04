export default function Hero() {
  return (
    <div className="relative bg-blue-900 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center min-h-[calc(100vh-4rem)]">
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-2">
              YOUR <span className="text-blue-400">GLOBAL</span>
            </h1>
            <h2 className="text-4xl md:text-6xl font-bold mb-6">
              Technology Partner
            </h2>
            <p className="text-lg mb-8 text-gray-300">
              Building ecosystems, solutions, and technology to accelerate
              growth, drive efficiencies, increase revenues, and change how
              organizations work and serve customers.
            </p>
            <button className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-full transition-colors duration-200">
              Get Started
            </button>
          </div>
          <div className="relative">
            <div className="rounded-full overflow-hidden border-8 border-blue-400">
              <img
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" className="w-full">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
}