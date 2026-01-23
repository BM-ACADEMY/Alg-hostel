import React from 'react';
import { motion } from 'framer-motion';
import { 
  ShieldCheck, 
  Home, 
  Utensils, 
  MapPin, 
  Sparkles, 
  Star,
  Zap,
  CheckCircle2,
  Clock
} from 'lucide-react';
import { Link } from 'react-router-dom';


const AboutPage = () => {
  // Animation Variants
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.7, ease: "easeOut" }
  };

  const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <div className="bg-white min-h-screen">

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
                  About
                </motion.h1>
                <nav className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
                  <Link to="/" className="hover:text-yellow-400 transition-colors uppercase">Home</Link>
                  <span className="opacity-50">/</span>
                  <span className="text-yellow-500 uppercase">About</span>
                </nav>
              </div>
            </section>
      {/* HERO SECTION 
          pt-32 ensures the content isn't hidden under a sticky header
      */}
      <section className="relative pt-32 pb-20 overflow-hidden bg-slate-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* LEFT SIDE: Text Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              {/* <div className="inline-flex items-center gap-2 bg-teal-100 text-teal-700 px-4 py-1.5 rounded-full text-sm font-bold tracking-wide">
                <Zap size={16} className="fill-current" />
                WELCOME TO ALG LADIES HOSTEL
              </div> */}
              
              <h1 className="text-4xl md:text-3xl lg:text-4xl font-extrabold text-slate-900 leading-tight">
                About <span className="text-teal-600">ALG Ladies Hostel</span>, Puducherry
              </h1>
              
              <p className="text-lg text-slate-600 leading-relaxed">
                ALG Ladies Hostel is a safe, comfortable, and affordable ladies hostel in Orleanpet, Puducherry, ideal for students and working women. Located in a peaceful residential area, our hostel offers a secure living environment with modern amenities and homely care.
With easy access to colleges, workplaces, and public transport, ALG Ladies Hostel ensures convenience, comfort, and safety for every resident. We focus on cleanliness, hygiene, and security to provide a worry-free stay.

              </p>

              {/* <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 text-teal-600">
                    <MapPin size={20} />
                  </div>
                  100m from New Bus Stand
                </div>
                <div className="flex items-center gap-3 text-slate-700 font-medium">
                  <div className="bg-white p-2 rounded-lg shadow-sm border border-slate-100 text-teal-600">
                    <CheckCircle2 size={20} />
                  </div>
                  Ideal for Students & Workers
                </div>
              </div> */}
            </motion.div>

            {/* RIGHT SIDE: Image Composition */}
            <motion.div 
               initial={{ opacity: 0, scale: 0.9 }}
               animate={{ opacity: 1, scale: 1 }}
               transition={{ duration: 0.8 }}
               className="relative"
            >
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border-8 border-white">
                <img 
                  src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop" 
                  alt="Hostel Interior" 
                  className="w-full h-[450px] object-cover"
                />
              </div>
              {/* Decorative Elements */}
              {/* <div className="absolute -top-6 -right-6 w-32 h-32 bg-teal-100 rounded-full -z-0 blur-2xl"></div> */}
              <div className="absolute -bottom-10 -left-10 bg-white p-6 rounded-xl shadow-xl z-20 hidden md:block border border-slate-100">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-teal-50 rounded-full text-teal-600">
                    <Home size={28} />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-widest leading-none mb-1">Stay with us</p>
                    <p className="text-xl font-black text-slate-900 leading-none tracking-tight">Feel Like Home</p>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* DETAILED FEATURES GRID */}
      <section className="py-24 bg-[#f7f5f1]">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              The Best Ladies Hostel in Orleanpet
            </h2>
            <div className="w-20 h-1.5 bg-teal-500 mx-auto rounded-full" />
          </motion.div>

          <motion.div 
            variants={staggerContainer}
            initial="initial"
            whileInView="whileInView"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {/* Safe & Secure */}
            <FeatureCard 
              icon={<ShieldCheck className="text-teal-600" size={32} />}
              title="Safe and Secure Environment"
              content="At ALG Ladies Hostel, the safety of our residents is our top priority. The hostel is equipped with 24/7 CCTV surveillance and secure entry systems to ensure complete protection. Our management closely monitors the premises to maintain a safe and disciplined environment, giving residents and their families complete peace of mind."
            />

            {/* Accommodation */}
            <FeatureCard 
              icon={<Home className="text-teal-600" size={32} />}
              title="Comfortable Accommodation"
              content="We offer comfortable and well-ventilated rooms that provide a calm and relaxing living experience. Each room is neatly furnished and designed to feel like a home away from home. Residents are provided with comfortable beds, adequate storage space, and a pleasant atmosphere suitable for studying and resting."
            />

            {/* Hygiene */}
            <FeatureCard 
              icon={<Sparkles className="text-teal-600" size={32} />}
              title="Hygienic Facilities"
              content="Cleanliness and hygiene are strictly maintained at ALG Ladies Hostel. Rooms and common areas are cleaned daily, and hygiene standards are followed consistently. Well-maintained bathrooms and RO drinking water ensure a healthy and safe living environment for all residents."
            />

            {/* Food */}
            <FeatureCard 
              icon={<Utensils className="text-teal-600" size={32} />}
              title="Healthy and Homely Food"
              content="We understand the importance of nutritious food for women pursuing studies or careers. ALG Ladies Hostel provides hygienic, home-style meals prepared with care, ensuring both taste and health. Our dining facility is maintained with high cleanliness standards to offer a comfortable dining experience."
            />

            {/* Location */}
            <FeatureCard 
              icon={<MapPin className="text-teal-600" size={32} />}
              title="Convenient Location"
              content="ALG Ladies Hostel is strategically located in Orleanpet, Puducherry, just 100 meters from the Puducherry New Bus Stand, making daily commuting easy and convenient. The hostel offers quick access to colleges, workplaces, shopping areas, and public transportation."
            />

            {/* Quality Living */}
            <FeatureCard 
              icon={<CheckCircle2 className="text-teal-600" size={32} />}
              title="Quality Living Experience"
              content="At ALG Ladies Hostel, we strive to provide a quality living experience where women can focus on their education, career, and personal growth without worry. Our peaceful environment, reasonable tariffs, and resident-friendly facilities make us one of the trusted ladies hostels in Puducherry.
If you are searching for a safe ladies hostel or women’s PG hostel in Puducherry, ALG Ladies Hostel is the right choice for comfort, security, and convenience."
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

const FeatureCard = ({ icon, title, content }) => (
  <motion.div 
    variants={{
      initial: { opacity: 0, y: 20 },
      whileInView: { opacity: 1, y: 0 }
    }}
    className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 group"
  >
    <div className="w-16 h-16 bg-teal-50 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300">
      <div className="group-hover:text-white transition-colors duration-300">
        {icon}
      </div>
    </div>
    <h3 className="text-xl font-bold text-slate-900 mb-4">{title}</h3>
    <p className="text-slate-600 leading-relaxed text-sm">
      {content}
    </p>
  </motion.div>
);

export default AboutPage;