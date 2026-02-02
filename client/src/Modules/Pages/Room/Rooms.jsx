import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  Bed, 
  Wifi, 
  Car, 
  Coffee, 
  Utensils, 
  Zap,
  ArrowRight,
  ShieldCheck, 
  Waves, 
  Wind, 
  Layers, 
  Maximize 
} from 'lucide-react';
import single from "@/assets/single.webp"
import Double from "@/assets/double.webp"
import Third from "@/assets/third.webp"
 import { Helmet } from 'react-helmet';

const RoomsPage = () => {
  // Updated data to match the text in your image
  const roomTypes = [
    {
      id: 1,
      name: "Single Room",
      description: "Affordable single room in a vibrant hostel. Enjoy a cozy space with a social atmosphere for an unforgettable stay.",
      image: single,
    },
    {
      id: 2,
      name: "Two Sharing",
      description: "Shared room in lively hostel. Perfect for friends or solo travelers. Enjoy a budget-friendly stay with a fun and social ambiance.",
      image: Double,
    },
    {
      id: 3,
      name: "Four Sharing",
      description: "Economical four-sharing room in our lively hostel. Ideal for group travelers seeking a sociable and budget-friendly accommodation option.",
      image: Third,
    }
  ];

  // Icons displayed at the bottom of the card (matching the image visual)
  const cardIcons = [
    <Bed className="w-5 h-5 text-gray-400" />,
    <Wifi className="w-5 h-5 text-gray-400" />,
    <Car className="w-5 h-5 text-gray-400" />,
    <Coffee className="w-5 h-5 text-gray-400" />,
    <Utensils className="w-5 h-5 text-gray-400" />,
    <Zap className="w-5 h-5 text-gray-400" />
  ];

  const amenities = [
    { icon: <Bed className="w-6 h-6" />, title: "Comfortable Beds", detail: "High-quality mattresses for restful sleep." },
    { icon: <Layers className="w-6 h-6" />, title: "Storage Cupboards", detail: "Ample space for your clothes and belongings." },
    { icon: <Waves className="w-6 h-6" />, title: "Attached Bathrooms", detail: "Clean and modern sanitation facilities." },
    { icon: <Wind className="w-6 h-6" />, title: "Well Ventilated", detail: "Large windows for natural light and fresh air." },
    { icon: <ShieldCheck className="w-6 h-6" />, title: "Safe & Secure", detail: "24/7 security for your peace of mind." },
    { icon: <Maximize className="w-6 h-6" />, title: "Spacious Living", detail: "Designed to avoid overcrowding." }
  ];

  return (
    <div className="bg-white min-h-screen font-sans">

      <Helmet>
        <title>Our Rooms | ALG Ladies Hostel Puducherry</title>
        <meta name="description" content="View our room options: Single, Two Sharing, and Four Sharing rooms available at ALG Ladies Hostel." />
        <link rel="canonical" href="https://algladieshostel.com/rooms" />
      </Helmet>
      
      {/* Header Section */}
      <section className="relative h-[300px] md:h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2070&auto=format&fit=crop"
            alt="Hostel Room Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="relative z-10 text-center text-white pt-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Our Rooms
          </motion.h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-medium tracking-widest">
            <Link to="/" className="hover:text-yellow-400 transition-colors uppercase">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-yellow-500 uppercase">Rooms</span>
          </nav>
        </div>
      </section>

      {/* Main Title Section */}
      <div className="text-center pt-16 pb-8">
        <h3 className="text-xl font-bold text-gray-800 mb-2">Our Rooms</h3>
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Rooms Availability</h2>
      </div>

      {/* NEW Room Selection Grid - Matching the Image */}
      <section className="max-w-7xl mx-auto pb-20 px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {roomTypes.map((room) => (
            <motion.div
              key={room.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
              className="bg-white shadow-[0_5px_20px_rgba(0,0,0,0.05)] rounded-lg overflow-hidden group border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative h-64 w-full overflow-hidden">
                <img 
                  src={room.image} 
                  alt={room.name} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
                />
               
              </div>

              {/* Card Content */}
              <div className="pt-6 pb-8 px-6 text-left">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{room.name}</h3>
                
                <p className="text-gray-500 text-sm leading-relaxed mb-8 h-20">
                  {room.description}
                </p>

                {/* Icons Row */}
                <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                  {cardIcons.map((icon, index) => (
                    <div key={index} title="Amenity">
                      {icon}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Existing Amenities Section (Kept for details) */}
      <section className="bg-[#f7f5f1] py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose Us?</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">ALG Ladies Hostel offers well-furnished single, double, and shared rooms designed to meet the needs of students and working women. All rooms are clean, spacious, and well-ventilated, ensuring a comfortable stay.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {amenities.map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
                <div className="text-yellow-600 bg-yellow-50 p-3 rounded-lg">
                  {item.icon}
                </div>
                <div>
                  <h4 className="font-bold text-lg text-gray-900">{item.title}</h4>
                  <p className="text-gray-500 text-sm mt-1">{item.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default RoomsPage;