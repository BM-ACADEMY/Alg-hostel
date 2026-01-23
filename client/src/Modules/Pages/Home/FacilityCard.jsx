import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, BedDouble, UtensilsCrossed, Wifi } from 'lucide-react';

const facilitiesData = [
  {
    id: 1,
    icon: <BedDouble className="w-12 h-12 text-teal-700" />,
    title: "Spacious & Well-Ventilated Rooms",
    description: "Comfortable, airy rooms designed for a relaxed and pleasant living experience.",
    bgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute right-4 top-4 w-24 h-24 text-gray-100 opacity-50 z-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
      </svg>
    )
  },
  {
    id: 2,
    icon: <Wifi className="w-12 h-12 text-teal-700" />,
    title: "High-Speed Wi-Fi",
    description: "Fast and reliable Wi-Fi access available throughout the hostel premises.",
    bgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute right-4 top-4 w-24 h-24 text-gray-100 opacity-50 z-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.348 14.652a3.75 3.75 0 0 1 0-5.304m5.304 0a3.75 3.75 0 0 1 0 5.304m-7.425-7.425a6.75 6.75 0 0 1 0-9.546m9.546 0a6.75 6.75 0 0 1 0 9.546m-2.121 2.121c.585.586 1.535.586 2.121 0m-4.242 0c.586.586 1.536.586 2.121 0M12 15.75h.008v.008H12v-.008Z" />
      </svg>
    )
  },
  {
    id: 3,
    icon: <UtensilsCrossed className="w-12 h-12 text-teal-700" />,
    title: "Hygienic Home-Style Food",
    description: "Fresh, nutritious, home-style meals prepared daily in a hygienic environment.",
    bgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute right-4 top-4 w-24 h-24 text-gray-100 opacity-50 z-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 0 1-6.364 0M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0ZM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75Zm-.375 0h.008v.015h-.008V9.75Z" />
      </svg>
    )
  },
  {
    id: 4,
    icon: <ShieldCheck className="w-12 h-12 text-teal-700" />,
    title: "24/7 Security & CCTV Surveillance",
    description: "Round-the-clock security with CCTV monitoring ensures complete safety for all residents.",
    bgIcon: (
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1" stroke="currentColor" className="absolute right-4 top-4 w-24 h-24 text-gray-100 opacity-50 z-0">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 0 1-1.043 3.296 3.745 3.745 0 0 1-3.296 1.043A3.745 3.745 0 0 1 12 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 0 1-3.296-1.043 3.745 3.745 0 0 1-1.043-3.296A3.745 3.745 0 0 1 3 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 0 1 1.043-3.296 3.746 3.746 0 0 1 3.296-1.043A3.746 3.746 0 0 1 12 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 0 1 3.296 1.043 3.746 3.746 0 0 1 1.043 3.296A3.745 3.745 0 0 1 21 12Z" />
      </svg>
    )
  }
];

const HostelFacilities = () => {
  return (
    <section className="py-16 bg-gray-50 text-center">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-yellow-600 text-sm font-semibold tracking-wider uppercase mb-2"
        >
          Facilities
        </motion.h2>
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-4xl font-bold text-gray-900 mb-12"
        >
          Facilities at ALG Ladies Hostel
        </motion.h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {facilitiesData.map((facility) => (
            <motion.div
              key={facility.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5 }}
              className="relative bg-white rounded-xl p-8 shadow-lg text-left overflow-hidden group"
            >
              {facility.bgIcon}
              <div className="relative z-10">
                <div className="mb-6">{facility.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-4">{facility.title}</h3>
                <p className="text-gray-600 leading-relaxed">{facility.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-12 bg-yellow-500 text-white font-semibold py-3 px-8 rounded-md shadow-md hover:bg-yellow-600 transition duration-300"
        >
          EXPLORE MORE FACILITIES
        </motion.button>
      </div>
    </section>
  );
};

export default HostelFacilities;