import React from 'react';
import { motion } from 'framer-motion';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Facebook, 
  Instagram, 
  Twitter, 
  Linkedin,
  ChevronRight 
} from 'lucide-react';

// Assets
import Logo from '@/assets/logo.png'; 
import FooterBg from '@/assets/footer.png'; // Import your footer background image

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const usefulLinks = [
    { name: 'Home', href: '#' },
    { name: 'About Us', href: '#' },
    { name: 'Rooms & Pricing', href: '#' },
    { name: 'Gallery', href: '#' },
    { name: 'Testimonials', href: '#' },
  ];

  const quickLinks = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'FAQs', href: '#' },
    { name: 'Contact Us', href: '#' },
    { name: 'Map Location', href: '#' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: '#', label: 'Facebook' },
    { icon: <Instagram size={18} />, href: '#', label: 'Instagram' },
    { icon: <Twitter size={18} />, href: '#', label: 'Twitter' },
    { icon: <Linkedin size={18} />, href: '#', label: 'Linkedin' },
  ];

  return (
    <footer 
      className="relative w-full text-gray-300 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      {/* Dark Overlay to ensure readability */}
      <div className="absolute inset-0 bg-gray-900/30 "></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <img src={Logo} alt="ALG Ladies Hostel" className="h-14 w-auto" />
            <p className="text-sm leading-relaxed text-gray-400">
              ALG Ladies Hostel provides a safe, clean, and comfortable environment for students and working professionals in Peelamedu. Experience a home away from home.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ y: -3, backgroundColor: '#eab308', color: '#111827' }}
                  className="bg-white/10 p-2.5 rounded-full transition-all duration-300"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Column 2: Useful Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Useful Links
              <span className="absolute left-0 bottom-[-8px] w-8 h-0.5 bg-[#eab308]"></span>
            </h4>
            <ul className="space-y-4">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="flex items-center gap-2 hover:text-[#eab308] transition-colors group text-sm">
                    <ChevronRight size={14} className="text-[#eab308] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Support
              <span className="absolute left-0 bottom-[-8px] w-8 h-0.5 bg-[#eab308]"></span>
            </h4>
            <ul className="space-y-4">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="flex items-center gap-2 hover:text-[#eab308] transition-colors group text-sm">
                    <ChevronRight size={14} className="text-[#eab308] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Contact Us
              <span className="absolute left-0 bottom-[-8px] w-8 h-0.5 bg-[#eab308]"></span>
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-[#eab308]/10 p-2 rounded-lg">
                  <MapPin className="text-[#eab308]" size={18} />
                </div>
                <p className="text-sm leading-snug">
                  73A, Lakshmipuram 6th St, Peelamedu, Coimbatore, TN 641004
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#eab308]/10 p-2 rounded-lg">
                  <Phone className="text-[#eab308]" size={18} />
                </div>
                <a href="tel:+919876543210" className="text-sm hover:text-white transition-colors">
                  +91 98765 43210
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#eab308]/10 p-2 rounded-lg">
                  <Mail className="text-[#eab308]" size={18} />
                </div>
                <a href="mailto:info@ALGhostel.com" className="text-sm hover:text-white transition-colors">
                  info@ALGhostel.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[11px] tracking-widest text-white">
            © {currentYear} <span className="text-yellow-500"><a href="https://bmtechx.in" target='_blank'>BMTechx.in</a></span> All rights reserved.
          </p>
          
        </div>
      </div>
    </footer>
  );
};

export default Footer;