import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom'; // 1. Import Link
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
import FooterBg from '@/assets/footer.png';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Helper to ensure page starts at top when navigating
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 2. Exact same links as your Navbar
  const usefulLinks = [
    { name: 'Home',       path: '/' },
    { name: 'About',      path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    // { name: 'Gallery',    path: '/gallery' },
    { name: 'Our Rooms',  path: '/rooms' },
    { name: 'Contact',    path: '/contact' },
  ];

  const supportLinks = [
    { name: 'Privacy Policy',     path: '/privacy' },
    { name: 'Terms & Conditions', path: '/terms' },
  ];

  const socialLinks = [
    { icon: <Facebook size={18} />, href: 'https://www.facebook.com/profile.php?id=61556977596017',  label: 'Facebook' },
    { icon: <Instagram size={18} />, href: 'https://www.instagram.com/algladieshostel_?igsh=NW5hbGxtYzcybHJk', label: 'Instagram' },
  ];

  return (
    <footer 
      className="relative w-full text-gray-300 overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gray-900/95 lg:bg-gray-900/90"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Column 1: Logo & About */}
          <div className="space-y-6">
            <Link to="/" onClick={scrollToTop} className="block">
                <img src={Logo} alt="ALG Ladies Hostel" className="h-14 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-gray-400">
               Change this - ALG Ladies Hostel offers safe, comfortable, and affordable accommodation for women in Puducherry.
            </p>
          </div>

          {/* Column 2: Useful Links (Navbar Links) */}
          <div>
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Useful Links
              <span className="absolute left-0 bottom-[-8px] w-8 h-0.5 bg-[#eab308]"></span>
            </h4>
            <ul className="space-y-4">
              {usefulLinks.map((link, index) => (
                <li key={index}>
                  {/* Changed from <a> to <Link> */}
                  <Link 
                    to={link.path} 
                    onClick={scrollToTop}
                    className="flex items-center gap-2 hover:text-[#eab308] transition-colors group text-sm"
                  >
                    <ChevronRight size={14} className="text-[#eab308] group-hover:translate-x-1 transition-transform" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Support */}
                <div>
                 <h4 className="text-white font-bold text-lg mb-6 relative">
                  Follow Us
                  <span className="absolute left-0 bottom-[-8px] w-8 h-0.5 bg-[#eab308]"></span>
                </h4>
                <div className="flex flex-col gap-4">
                    {socialLinks.map((social, index) => (
                        <a 
                            key={index}
                            href={social.href}
                            target='_blank' 
                            rel="noopener noreferrer"
                            className="flex items-center gap-3 group w-fit"
                        >
                             <div className="bg-white/10 p-2 rounded-lg group-hover:bg-[#eab308] group-hover:text-black transition-all duration-300">
                                {social.icon}
                             </div>
                             <span className="text-sm text-gray-400 group-hover:text-[#eab308] transition-colors">
                                {social.label}
                             </span>
                        </a>
                    ))}
                </div>
            </div>

         <div className="space-y-6">
            <h4 className="text-white font-bold text-lg mb-8 relative">
              Contact Us
              <span className="absolute left-0 bottom-[-8px] w-8 h-0.5 bg-[#eab308]"></span>
            </h4>
            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="bg-[#eab308]/10 p-2 rounded-lg shrink-0">
                  <MapPin className="text-[#eab308]" size={18} />
                </div>
                <p className="text-sm leading-snug">
                  No: 73, 75, Amman Koil Street,<br/> Orleanpet, Puducherry – 605 005.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#eab308]/10 p-2 rounded-lg shrink-0">
                  <Phone className="text-[#eab308]" size={18} />
                </div>
                <a href="tel:+919894169241" className="text-sm hover:text-white transition-colors">
                  +91 98941 69241
                </a>
              </div>
              <div className="flex items-center gap-4">
                <div className="bg-[#eab308]/10 p-2 rounded-lg shrink-0">
                  <Mail className="text-[#eab308]" size={18} />
                </div>
                <a href="mailto:algladieshostel1@gmail.com" className="text-sm hover:text-white transition-colors">
                  algladieshostel1@gmail.com
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[14px] tracking-widest text-white">
            © {currentYear} <span className="text-yellow-500 font-bold"><a href="https://bmtechx.in" target='_blank'>Bmtechx.in</a></span>. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;