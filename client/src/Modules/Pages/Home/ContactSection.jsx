import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { User, Phone, Mail, MessageSquare } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

const ContactSection = () => {
  // 1. Create state for all form fields
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Special handler for phone to restrict to numbers only (keeping your existing logic)
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, ''); 
    if (value.length <= 10) {
      setFormData(prev => ({ ...prev, phone: value }));
    }
  };

  // 3. Handle Form Submission
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, phone, email, message } = formData;

    // Construct the WhatsApp Message
    const whatsappMessage = `*New Enquiry from Website* %0A%0A` +
      `*Name:* ${name} %0A` +
      `*Phone:* ${phone} %0A` +
      `*Email:* ${email} %0A` +
      `*Message:* ${message}`;

    // Redirect to WhatsApp
    // Using the number you provided: 9894169241
    const whatsappUrl = `https://wa.me/919894169241?text=${whatsappMessage}`;
    
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-white min-h-screen relative z-10">
       {/* SEO Tags (Optional if this is a standalone page) */}
       <Helmet>
        <title>Contact Us | ALG Ladies Hostel</title>
      </Helmet>

      {/* Hero Section (Optional - kept if you are using it) */}
      {/* ... Hero code if needed ... */}

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
                <p className="text-[#d4a017] font-semibold text-lg mb-2">Stay Connected With Us</p>
                <h2 className="text-5xl font-bold text-gray-900 tracking-tight">Enquire Now</h2>
              </div>

              {/* Added onSubmit handler */}
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Name */}
                  <div className="space-y-2">
                    <label className="flex items-center gap-2 text-gray-700 font-medium">
                      <User size={18} className="text-gray-400" /> Name
                    </label>
                    <input 
                      type="text" 
                      name="name" // Added name attribute
                      value={formData.name} // Controlled input
                      onChange={handleChange} // Handler
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
                      onChange={handlePhoneChange} // Use specific phone handler
                      placeholder="10-digit mobile number"
                      pattern="[0-9]{10}"
                      required
                      className="w-full p-3 border border-gray-200 rounded-sm focus:outline-none focus:border-[#d4a017] transition-colors"
                    />
                    {formData.phone.length > 0 && formData.phone.length < 10 && (
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
                  Send on WhatsApp
                </motion.button>
              </form>
            </motion.div>

            {/* Right Side: Map */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full h-[400px] lg:h-full min-h-[500px] shadow-lg rounded-sm overflow-hidden border border-gray-100 bg-gray-100"
            >
              <iframe
                title="ALG Ladies Hostel Map"
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
      </section>
    </div>
  );
};

export default ContactSection;