import React from 'react';
import { ArrowRight, MapPin, ShieldCheck, Utensils, Wifi, Heart } from 'lucide-react';

const AboutSection = () => {
  return (
    <section className="relative w-full py-24 bg-[#eeee] overflow-hidden">
      {/* Background Decorative Blob */}
      <div className="absolute top-0 right-0 translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* --- LEFT COLUMN: CONTENT --- */}
          <div className="order-2 lg:order-1">
            {/* Tagline */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-teal-50 text-teal-700 text-sm font-semibold mb-6">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-teal-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-teal-500"></span>
              </span>
              About ALG Hostel
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              A Safe Haven for <span className="text-teal-600">Women</span> in Puducherry
            </h2>

            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Welcome to ALG Ladies Hostel, a safe and comfortable home for women in Puducherry. Located at Amman Koil Street, Orleanpet, just 100 meters from Puducherry New Bus Stand, our hostel offers easy access to colleges, offices, and essential facilities.

            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Experience the comfort of home with our hygienic food, well-maintained facilities, and a supportive environment that lets you focus on your career and studies.
            </p>

            {/* Feature Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
              <FeatureItem icon={<Utensils size={20} />} text="Hygienic Home Food" />
              <FeatureItem icon={<ShieldCheck size={20} />} text="24/7 CCTV Security" />
              <FeatureItem icon={<Wifi size={20} />} text="High-Speed Wi-Fi" />
              <FeatureItem icon={<Heart size={20} />} text="Homely Environment" />
            </div>

            {/* CTA Button */}
            <a 
              href="/about" 
              className="inline-flex items-center justify-center gap-2 bg-teal-600 text-white px-8 py-4 rounded-full font-semibold hover:bg-teal-700 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              Discover More
              <ArrowRight size={20} />
            </a>
          </div>

          {/* --- RIGHT COLUMN: IMAGE COMPOSITION --- */}
          <div className="relative order-1 lg:order-2">
            {/* Main Large Image (Room/Interior) */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white z-10">
              <img 
                src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=2069&auto=format&fit=crop" 
                alt="Clean Hostel Room" 
                className="w-full h-[500px] object-cover hover:scale-105 transition-transform duration-700"
              />
              
              {/* Floating Overlay Card: Location Highlight */}
              <div className="absolute bottom-6 left-6 md:left-auto md:right-6 bg-white/95 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-teal-50 max-w-xs">
                <div className="flex items-start gap-3">
                  <div className="bg-yellow-100 p-2 rounded-full text-yellow-700 shrink-0">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Prime Spot</p>
                    <p className="text-xs text-gray-600 mt-0.5">100m from New Bus Stand</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Secondary Image (Lifestyle) - Positioned Top Left now to avoid screen edge */}
            {/* <div className="hidden md:block absolute -top-10 -left-10 w-48 h-48 rounded-2xl overflow-hidden shadow-xl border-4 border-white -rotate-3 hover:rotate-0 transition-all duration-300 z-20">
              <img 
                src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=1000&auto=format&fit=crop" 
                alt="Happy Student" 
                className="w-full h-full object-cover"
              />
            </div> */}
            
            {/* Decorative Dots Pattern - Bottom Right */}
            <div className="absolute -z-10 -bottom-8 -right-8 text-teal-100">
              <svg width="100" height="100" fill="currentColor" viewBox="0 0 100 100">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2"></circle>
                </pattern>
                <rect width="100" height="100" fill="url(#dots)"></rect>
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

// Small Helper Component for the Feature List
const FeatureItem = ({ icon, text }) => (
  <div className="flex items-center gap-3 p-3 bg-slate-50 rounded-lg hover:bg-teal-50 transition-colors group">
    <div className="text-teal-600 group-hover:text-teal-700">{icon}</div>
    <span className="font-medium text-gray-700 group-hover:text-gray-900">{text}</span>
  </div>
);

export default AboutSection;