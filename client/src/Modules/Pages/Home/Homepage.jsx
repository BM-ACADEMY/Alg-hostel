import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight, ShieldCheck, Zap, Heart, MapPin } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop",
    tag: "Safety First",
    title: "ALG Ladies Hostel",
    desc: "Safe & Comfortable Ladies Hostel in Orleanpet, Puducherry"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?q=80&w=2071&auto=format&fit=crop",
    tag: "Premium Living",
    title: "ALG Ladies Hostel",
    desc: "Safe & Comfortable Ladies Hostel in Orleanpet, Puducherry"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1554998171-7e599bc95ccd?q=80&w=1974&auto=format&fit=crop",
    tag: "Community",
   title: "ALG Ladies Hostel",
    desc: "Safe & Comfortable Ladies Hostel in Orleanpet, Puducherry"
  }
];

// --- ADVANCED TRANSITION VARIANTS ---
const bgVariants = {
  initial: { scale: 1.2, opacity: 0 },
  animate: { scale: 1, opacity: 1, transition: { duration: 1.2, ease: "easeOut" } },
  exit: { scale: 1.1, opacity: 0, transition: { duration: 0.8 } }
};

const contentVariants = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { staggerChildren: 0.2, delayChildren: 0.3 } 
  }
};

const itemVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const Home = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 6 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-white selection:bg-yellow-400 selection:text-[#004d5a]">
      
      {/* --- HERO SECTION WITH LAYERED REVEAL --- */}
      <section className="relative h-screen w-full overflow-hidden flex items-center">
        
        {/* Animated Background Image Layer */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            variants={bgVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            className="absolute inset-0"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#004d5a]/90 via-[#004d5a]/40 to-transparent z-10" />
            <img 
              src={slides[index].image} 
              alt="Hostel" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Floating Background Text (Cool Design Element) */}
        <div className="absolute left-10 top-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden hidden lg:block">
          {/* <motion.h1 
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 0.05, x: 0 }}
            className="text-[20rem] font-black text-white leading-none"
          >
            ALG
          </motion.h1> */}
        </div>

        {/* Content Layer */}
        <div className="relative z-20 container mx-auto px-6 md:px-12">
          <AnimatePresence mode="wait">
            <motion.div
              key={slides[index].id}
              variants={contentVariants}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0, x: 20, transition: { duration: 0.3 } }}
              className="max-w-2xl"
            >
              {/* <motion.span 
                variants={itemVariants}
                className="inline-block py-1 px-4 bg-yellow-400 text-[#004d5a] font-bold text-xs uppercase tracking-[0.3em] rounded-full mb-6"
              >
                {slides[index].tag}
              </motion.span> */}
              
              <motion.h2 
                variants={itemVariants}
                className="text-5xl md:text-7xl font-black text-white leading-[1.1] tracking-tighter mb-6"
              >
                {slides[index].title}
              </motion.h2>
              
              <motion.p 
                variants={itemVariants}
                className="text-lg md:text-xl text-gray-200 mb-10 font-medium max-w-lg"
              >
                {slides[index].desc}
              </motion.p>
              
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
                <button className="bg-yellow-500 hover:bg-yellow-400 text-[#004d5a] px-8 py-4 font-black uppercase tracking-widest text-sm transition-all flex items-center gap-3">
                  Book A Visit <ArrowRight size={18} />
                </button>
                <button className="border-2 border-white/30 hover:border-white text-white px-8 py-4 font-black uppercase tracking-widest text-sm transition-all">
                  Gallery
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Custom Progress Indicators */}
        {/* <div className="absolute bottom-12 left-6 md:left-12 z-30 flex gap-4">
          {slides.map((_, i) => (
            <div 
              key={i} 
              onClick={() => setIndex(i)}
              className="cursor-pointer group py-4"
            >
              <div className={`h-[3px] transition-all duration-500 rounded-full ${index === i ? 'w-16 bg-yellow-400' : 'w-8 bg-white/30 group-hover:bg-white/60'}`} />
              <span className={`text-[10px] font-bold mt-2 block tracking-widest ${index === i ? 'text-yellow-400' : 'text-white/40'}`}>0{i + 1}</span>
            </div>
          ))}
        </div> */}
      </section>
    </div>
  );
};

export default Home;