import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';


const ContactSection = () => {
  const [phone, setPhone] = useState('');

  // Function to handle phone input and restrict to 10 digits
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); // Remove non-numeric characters
    if (value.length <= 10) {
      setPhone(value);
    }
  };

  return (
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8 relative z-10">
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
            Contact
          </motion.h1>
          <nav className="flex items-center justify-center gap-2 text-sm font-medium tracking-wide">
            <Link to="/" className="hover:text-yellow-400 transition-colors uppercase">Home</Link>
            <span className="opacity-50">/</span>
            <span className="text-yellow-500 uppercase">Contact</span>
          </nav>
        </div>
      </section>


      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 pt-25 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Fix: Triggers when 20% visible
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#d4a017] font-semibold text-lg mb-2">Stay Connected With Us</p>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Enquire Now</h2>
            </div>

            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <User size={18} className="text-gray-400" /> Name
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your name"
                    required
                    className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                  />
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Phone size={18} className="text-gray-400" /> Phone
                  </label>
                  <input 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                    className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                  />
                  {phone.length > 0 && phone.length < 10 && (
                    <p className="text-xs text-red-500 mt-1">Please enter a valid 10-digit number.</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Mail size={18} className="text-gray-400" /> Email
                  </label>
                  <input 
                    type="email" 
                    placeholder="Email Address"
                    required
                    className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                  />
                </div>

                {/* Message */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <MessageSquare size={18} className="text-gray-400" /> Message
                  </label>
                  <textarea 
                    placeholder="How can we help you?"
                    rows="4"
                    className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#d4a017] transition-colors resize-none"
                  ></textarea>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-[#eab308] hover:bg-[#d4a017] text-white font-bold py-4 px-6 transition-colors tracking-widest uppercase text-sm shadow-md"
              >
                Enquire Now
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} // Fix: Triggers earlier
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] lg:h-full min-h-[500px] shadow-lg rounded-sm overflow-hidden border border-gray-100 bg-gray-100"
          >
            {/* Fix: Added valid Puducherry Map URL */}
            <iframe
              title="ALG Ladies Hostel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.275463728639!2d79.8105!3d11.9337!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a53616ec4851859%3A0x6280064f2e9643d9!2sPuducherry!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;