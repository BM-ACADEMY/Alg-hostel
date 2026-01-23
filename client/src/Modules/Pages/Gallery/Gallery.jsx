import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

const GalleryPage = () => {
  // Change state to a number to track how many images to show
  const [displayLimit, setDisplayLimit] = useState(6);

  const allImages = [
    { id: 1, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=207", title: "Study Lounge" },
    { id: 2, src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2070", title: "Premium Suite" },
    { id: 3, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070", title: "Modern Washroom" },
    { id: 4, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070", title: "Common Room" },
    { id: 5, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070", title: "Dining Area" },
    { id: 6, src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070", title: "Reception" },
    { id: 7, src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070", title: "Kitchen Area" },
    { id: 8, src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070", title: "Shared Bedroom" },
    { id: 9, src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070", title: "Yoga Deck" },
    { id: 10, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=207", title: "Study Lounge" },
    { id: 11, src: "https://images.unsplash.com/photo-1522770179533-24471fcdba45?q=80&w=2070", title: "Premium Suite" },
    { id: 12, src: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=2070", title: "Modern Washroom" },
    { id: 13, src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070", title: "Common Room" },
    { id: 14, src: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=2070", title: "Dining Area" },
    { id: 15, src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070", title: "Reception" },
    { id: 16, src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070", title: "Kitchen Area" },
    { id: 17, src: "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=2070", title: "Shared Bedroom" },
    { id: 18, src: "https://images.unsplash.com/photo-1559827291-72ee739d0d9a?q=80&w=2070", title: "Yoga Deck" },
  ];

  // Slice based on the current limit
  const visibleImages = allImages.slice(0, displayLimit);

  const handleShowMore = () => {
    setDisplayLimit(prevLimit => prevLimit + 6);
  };

  const handleShowLess = () => {
    setDisplayLimit(6); // Reset back to initial 6
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header Section */}
      <section className="relative h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop"
            alt="Interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 text-center text-white pt-10 px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-bold mb-4"
          >
            Gallery
          </motion.h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-yellow-400 transition-colors uppercase">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-yellow-500 uppercase">Gallery</span>
          </nav>
        </div>
      </section>

      {/* Gallery Grid Section */}
      <section className="max-w-7xl mx-auto py-16 px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 tracking-tight">Our Living Spaces</h2>
          <div className="w-16 h-1 bg-yellow-500 mx-auto" />
        </div>

        {/* --- Uniform Grid --- */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {visibleImages.map((img, index) => (
              <GalleryItem key={img.id} img={img} index={index} />
            ))}
          </AnimatePresence>
        </div>

        {/* --- Action Buttons --- */}
        <div className="mt-16 text-center flex flex-col sm:flex-row gap-4 justify-center">
          {displayLimit < allImages.length && (
            <button
              onClick={handleShowMore}
              className="px-8 py-3 font-bold text-white bg-gray-900 border-2 border-gray-900 hover:bg-gray-800 transition-all duration-200 uppercase tracking-widest text-xs"
            >
              View More Images
            </button>
          )}

          {displayLimit > 6 && (
            <button
              onClick={handleShowLess}
              className="px-8 py-3 font-bold text-gray-900 bg-white border-2 border-gray-900 hover:bg-gray-100 transition-all duration-200 uppercase tracking-widest text-xs"
            >
              Show Less
            </button>
          )}
        </div>
      </section>
    </div>
  );
};

const GalleryItem = ({ img, index }) => (
  <motion.div
    layout
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    exit={{ opacity: 0, scale: 0.9 }}
    transition={{ duration: 0.3 }}
    className="relative group aspect-[4/3] overflow-hidden bg-gray-100 shadow-sm"
  >
    <img
      src={img.src}
      alt={img.title}
      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
    />
    
    <div className="absolute inset-0 bg-gray-900/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col items-center justify-center">
      <h3 className="text-white font-bold uppercase tracking-[0.2em] text-sm mb-2 translate-y-2 group-hover:translate-y-0 transition-transform duration-300 text-center px-4">
        {img.title}
      </h3>
      <div className="w-10 h-[1px] bg-yellow-500 translate-y-2 group-hover:translate-y-0 transition-transform duration-500" />
    </div>
  </motion.div>
);

export default GalleryPage;