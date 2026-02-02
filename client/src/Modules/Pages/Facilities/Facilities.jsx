import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  BedDouble,
  UtensilsCrossed,
  Wifi,
  Zap,
  Sparkles,
  Waves,
  Droplets,
  HeartHandshake,
} from "lucide-react";

 import { Helmet } from 'react-helmet';

const facilitiesData = [
  {
    id: 1,
    icon: <ShieldCheck className="w-12 h-12 text-teal-700" />,
    title: "24/7 Security & CCTV",
    description:
      "Round-the-clock security with CCTV monitoring ensures complete safety for all residents.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z"
        />
      </svg>
    ),
  },
  {
    id: 2,
    icon: <BedDouble className="w-12 h-12 text-teal-700" />,
    title: "Furnished Rooms",
    description:
      "Spacious, well-ventilated rooms equipped with cots, wardrobes, and study tables.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
        />
      </svg>
    ),
  },
  {
    id: 3,
    icon: <UtensilsCrossed className="w-12 h-12 text-teal-700" />,
    title: "Home-Style Food",
    description:
      "Nutritious Veg and Non-Veg meals prepared daily in a highly hygienic environment.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z"
        />
      </svg>
    ),
  },
  {
    id: 4,
    icon: <Wifi className="w-12 h-12 text-teal-700" />,
    title: "High-Speed Wi-Fi",
    description:
      "Uninterrupted high-speed internet access available throughout the entire hostel.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8.288 15.038a5.25 5.25 0 0 1 7.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22a.75.75 0 1 1-1.06 1.06.75.75 0 0 1 1.06-1.06Z"
        />
      </svg>
    ),
  },
  {
    id: 5,
    icon: <Zap className="w-12 h-12 text-teal-700" />,
    title: "Power Backup",
    description:
      "24/7 power backup system to ensure comfort and productivity during power outages.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    id: 6,
    icon: <Sparkles className="w-12 h-12 text-teal-700" />,
    title: "Daily Housekeeping",
    description:
      "Professional cleaning services for rooms and common areas to maintain hygiene.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"
        />
      </svg>
    ),
  },
  {
    id: 7,
    icon: <Waves className="w-12 h-12 text-teal-700" />,
    title: "Laundry Facilities",
    description:
      "In-house washing machines available for easy and hassle-free laundry management.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M6 13.5V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m12-3V3.75m0 9.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 3.75V16.5m-6-9V3.75m0 3.75a1.5 1.5 0 010 3m0-3a1.5 1.5 0 000 3m0 9.75V10.5"
        />
      </svg>
    ),
  },
  {
    id: 8,
    icon: <Droplets className="w-12 h-12 text-teal-700" />,
    title: "RO Drinking Water",
    description:
      "Clean and safe purified RO drinking water available 24/7 on all floors.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path d="M10.424 4.679c.631-1.073.947-1.61 1.398-1.69a1 1 0 0 1 .356 0c.451.08.767.617 1.398 1.69l1.668 2.836a27.187 27.187 0 0 1 2.707 6.315c1.027 3.593-1.67 7.17-5.408 7.17h-1.086c-3.737 0-6.435-3.577-5.408-7.17a27.187 27.187 0 0 1 2.707-6.315z" />
      </svg>
    ),
  },
  {
    id: 9,
    icon: <HeartHandshake className="w-12 h-12 text-teal-700" />,
    title: "Peaceful Ambience",
    description:
      "A calm and studious environment perfect for students and working professionals.",
    bgIcon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth="1"
        stroke="currentColor"
        className="absolute right-4 top-4 w-24 h-24 text-gray-200 opacity-50 z-0"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    ),
  },
];

const FacilitiesPage = () => {
  return (
    <div className="bg-white min-h-screen font-sans">

      <Helmet>
        <title>Facilities | ALG Ladies Hostel Puducherry</title>
        <meta name="description" content="Explore our premium hostel facilities including 24/7 security, WiFi, home-style food, and housekeeping services." />
        <link rel="canonical" href="https://algladieshostel.com/facilities" />
      </Helmet>
      
      {/* --- HERO BANNER --- */}
      <section className="relative h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=2070&auto=format&fit=crop"
            alt="ALG Ladies Hostel Interior"
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
            Facilities
          </motion.h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-yellow-400 transition-colors">
              HOME
            </Link>
            <span className="opacity-50">/</span>
            <span className="text-yellow-500">FACILITIES</span>
          </nav>
        </div>
      </section>

      {/* --- FACILITIES GRID SECTION --- */}
      <section className="py-20 bg-[#f7f5f1]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-yellow-600 font-semibold text-sm uppercase tracking-[0.2em] mb-3"
            >
              Premium Amenities
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-gray-900"
            >
              Hostel Facilities at ALG
            </motion.h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilitiesData.map((facility, index) => (
              <motion.div
                key={facility.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="relative bg-white p-10 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 text-left overflow-hidden group border border-gray-100"
              >
                {/* Large Decorative Background Icon */}
                {facility.bgIcon}

                <div className="relative z-10">
                  <div className="mb-6 inline-block p-3 text-teal-700">
                    {React.cloneElement(facility.icon, {
                      className:
                        "w-10 h-10 transition-transform duration-300 group-hover:scale-110",
                    })}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-4">
                    {facility.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    {facility.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default FacilitiesPage;
