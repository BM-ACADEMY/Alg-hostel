import React from 'react';

const HomeSection = () => {
  return (
    <section className="relative w-full min-h-screen bg-white flex items-center justify-center overflow-hidden py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* LEFT COLUMN: Image Grid */}
        <div className="relative w-full max-w-lg mx-auto lg:max-w-none">
          {/* Main Exterior Image */}
          <div className="w-4/5 h-[400px] sm:h-[500px] overflow-hidden rounded-lg shadow-lg">
            {/* Placeholder for Building Image - Replace src with your actual image */}
            <img 
              src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1000&auto=format&fit=crop" 
              alt="ALG Ladies Hostel Exterior" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Secondary Interior Image (Overlapping) */}
          <div className="absolute bottom-[-20px] right-0 w-3/5 h-[250px] overflow-hidden rounded-lg shadow-2xl border-4 border-white">
            {/* Placeholder for Room Image - Replace src with your actual image */}
            <img 
              src="https://images.unsplash.com/photo-1505693314120-0d443867891c?q=80&w=1000&auto=format&fit=crop" 
              alt="ALG Ladies Hostel Room" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* RIGHT COLUMN: Text Content */}
        <div className="flex flex-col justify-center mt-12 lg:mt-0">
          
          {/* Optional Tagline matching design style */}
          <h3 className="text-teal-700 font-bold uppercase tracking-wider text-sm mb-2">
            Welcome To
          </h3>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            ALG Ladies Hostel
          </h1>

          {/* Body Content - Exact Text Provided */}
          <div className="space-y-4 text-gray-600 text-lg leading-relaxed font-light">
            <p>
              ALG Ladies Hostel is a safe, comfortable, and affordable ladies hostel in Orleanpet, Puducherry, ideal for students and working women. Located in a peaceful residential area, our hostel offers a secure living environment with modern amenities and homely care.
            </p>
            <p>
              With easy access to colleges, workplaces, and public transport, ALG Ladies Hostel ensures convenience, comfort, and safety for every resident. We focus on cleanliness, hygiene, and security to provide a worry-free stay.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="mt-10 flex flex-col sm:flex-row flex-wrap gap-4">
            {/* Button 1: Enquire Now (Primary Style based on image) */}
            <button className="px-8 py-3 bg-yellow-500 hover:bg-yellow-600 text-white font-semibold rounded shadow-md transition-all duration-300 uppercase tracking-wide">
              Enquire Now
            </button>

            {/* Button 2: Call Now */}
            <button className="px-8 py-3 bg-gray-900 hover:bg-gray-800 text-white font-semibold rounded shadow-md transition-all duration-300 uppercase tracking-wide">
              Call Now
            </button>

            {/* Button 3: Book Your Stay */}
            <button className="px-8 py-3 border-2 border-yellow-500 text-yellow-600 hover:bg-yellow-50 font-semibold rounded shadow-sm transition-all duration-300 uppercase tracking-wide">
              Book Your Stay
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HomeSection;