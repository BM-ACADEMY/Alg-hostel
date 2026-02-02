import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async'; // Ensure using async to prevent crashes

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 10) {
      setFormData(prev => ({ ...prev, phone: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, phone, email, message } = formData;
    const whatsappMessage = 
      `*New Enquiry from Website* %0A%0A` +
      `*Name:* ${name} %0A` +
      `*Phone:* ${phone} %0A` +
      `*Email:* ${email} %0A` +
      `*Message:* ${message}`;
    
    const whatsappUrl = `https://wa.me/919894169241?text=${whatsappMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    // 1. Removed global padding (px-4...) so image touches edges
    <div className="bg-white min-h-screen relative z-10 font-sans">
      <Helmet>
        <title>Contact Us | ALG Ladies Hostel Puducherry</title>
        <meta name="description" content="Contact ALG Ladies Hostel to book your stay or inquire about rates and facilities." />
        <link rel="canonical" href="https://algladieshostel.com/contact" />
      </Helmet>

      {/* 2. Hero Image Section - Now spans full width */}
      <section className="relative h-[300px] md:h-[450px] flex items-center justify-center overflow-hidden w-full">
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

      {/* 3. Content Section - Added padding here instead */}
      <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Enquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div>
              <p className="text-[#d4a017] font-semibold text-lg mb-2">Stay Connected With Us</p>
              <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Enquire Now</h2>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                
                {/* Name */}
                <div className="space-y-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <User size={18} className="text-gray-400" /> Name
                  </label>
                  <input 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
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
                    name="phone"
                    value={formData.phone}
                    onChange={handlePhoneChange}
                    placeholder="10-digit mobile number"
                    pattern="[0-9]{10}"
                    required
                    className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                  />
                </div>

                {/* Email */}
                <div className="space-y-2 md:col-span-2">
                  <label className="flex items-center gap-2 text-gray-700 font-medium">
                    <Mail size={18} className="text-gray-400" /> Email
                  </label>
                  <input 
                    type="email" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
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
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
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
                Send via WhatsApp
              </motion.button>
            </form>
          </motion.div>

          {/* Right Side: Map */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }} 
            transition={{ duration: 0.5 }}
            className="w-full h-[400px] lg:h-full min-h-[500px] shadow-lg rounded-sm overflow-hidden border border-gray-100 bg-gray-100"
          >
             <iframe
              title="ALG Ladies Hostel Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3903.632412411086!2d79.81102568424782!3d11.930649806687143!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a536182644dc2bb%3A0xcf6547345ece286c!2sALG%20Ladies%20Hostel!5e0!3m2!1sen!2sin!4v1770030945792!5m2!1sen!2sin" 
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
    </div>
  );
};

export default ContactSection;