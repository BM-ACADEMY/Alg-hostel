import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare } from 'lucide-react';

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
    <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#d4a017] font-semibold text-lg mb-2">Stay Connect With Us</p>
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
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full h-[400px] lg:h-full min-h-[500px] shadow-lg rounded-sm overflow-hidden border border-gray-100"
          >
            <iframe
              title="ALG Ladies Hostel Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.2739023611384!2d77.017772!3d11.021832!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba857003c3998f7%3A0x64765d78a834246c!2sALG%20Ladies%20Hostel!5e0!3m2!1sen!2sin!4v1705660000000!5m2!1sen!2sin"
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