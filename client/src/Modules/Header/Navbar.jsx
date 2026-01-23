import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';           // ← added

// Import the logo image
import Logo from '@/assets/logo.png';

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (currentScrollY / scrollHeight) * 100;
      const isScrollingUp = currentScrollY < lastScrollY;

      setIsAtTop(currentScrollY <= 10);

      if (currentScrollY <= 10) {
        setShowTopBar(true);
      } else if (isScrollingUp && scrollPercentage <= 10) {
        setShowTopBar(true);
      } else {
        setShowTopBar(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', controlNavbar);
    return () => window.removeEventListener('scroll', controlNavbar);
  }, [lastScrollY]);

  const navLinks = [
    { name: 'Home',     path: '/' },
    { name: 'About',    path: '/about' },
    { name: 'Facilities', path: '/facilities' },
    { name: 'Gallery',  path: '/gallery' },
    { name: 'Our Rooms', path: '/rooms' },
    { name: 'Contact',  path: '/contact' },
  ];

  // --- ANIMATION VARIANTS ---
  const topBarVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { height: "auto", opacity: 1 }
  };

  const desktopNavLinkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5, ease: "easeOut" },
    }),
  };

  const menuVariants = {
    hidden: { 
      clipPath: "circle(0% at 95% 5%)", 
      transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] } 
    },
    show: { 
      clipPath: "circle(150% at 95% 5%)", 
      transition: { 
        duration: 0.8, 
        ease: [0.76, 0, 0.24, 1],
        staggerChildren: 0.08,
        delayChildren: 0.2
      } 
    }
  };

  const mobileLinkVariants = {
    hidden: { opacity: 0, y: 30, rotateX: -45 },
    show: { opacity: 1, y: 0, rotateX: 0, transition: { duration: 0.6 } },
  };

  return (
    <>
      <header className="fixed w-full z-50 font-sans top-0 left-0">
        
        {/* 1st HEADER (TOP BAR) */}
        <AnimatePresence initial={false}>
          {showTopBar && (
            <motion.div 
              variants={topBarVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="bg-[#004d5a] text-white px-6 hidden md:flex justify-between items-center text-[13px] font-medium border-b border-white/5 overflow-hidden"
            >
              <div className="py-2 flex gap-6">
                <span className="flex items-center gap-2">
                  <Mail size={14} className="text-yellow-400" /> ALGhostels@gmail.com
                </span>
                <span className="flex items-center gap-2">
                  <Phone size={14} className="text-yellow-400" /> +91 73050 10332
                </span>
              </div>
              <div className="flex gap-4">
                <Facebook size={16} className="hover:text-yellow-400 cursor-pointer" />
                <Instagram size={16} className="hover:text-yellow-400 cursor-pointer" />
                <Youtube size={16} className="hover:text-yellow-400 cursor-pointer" />
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2nd HEADER (MAIN NAVIGATION) */}
        <nav className={`
          px-6 py-4 flex items-center justify-between transition-all duration-500 
          ${!isAtTop ? 'bg-white shadow-xl py-3' : 'bg-white'}
        `}>
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer">
            <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0">
              <img 
                src={Logo} 
                alt="ALG Ladies Hostel Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <p className="text-yellow-500 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase">Ladies Hostel</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link, i) => (
              <motion.li 
                key={link.name}
                custom={i}
                initial="hidden"
                animate="visible"
                variants={desktopNavLinkVariants}
              >
                <Link 
                  to={link.path}
                  className="text-[#004d5a] font-semibold text-[14px] uppercase tracking-wider hover:text-yellow-600 transition-colors relative group"
                >
                  {link.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </motion.li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="hidden sm:block bg-[#004d5a] text-white px-8 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest hover:bg-yellow-500 transition-all shadow-md"
            >
              Call Now
            </motion.button>
            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-[#004d5a] p-1">
              <Menu size={32} />
            </button>
          </div>
        </nav>
      </header>

      {/* MOBILE OFF-CANVAS */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 z-[60] bg-[#004d5a] text-white p-6 flex flex-col perspective-[1000px]"
          >
            <div className="flex justify-between items-center mb-10">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <img src={Logo} alt="ALG Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                <span className="font-black tracking-tighter text-2xl uppercase">ALG</span>
              </Link>
              <button onClick={() => setIsMenuOpen(false)} className="p-3 bg-white/10 rounded-full">
                <X size={30} />
              </button>
            </div>

            <div className="flex flex-col gap-6 items-center justify-center flex-grow">
              {navLinks.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div variants={mobileLinkVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-bold tracking-widest block uppercase hover:text-yellow-300 transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </div>

            <motion.div 
              variants={mobileLinkVariants} 
              className="mt-auto flex flex-col gap-8 items-center border-t border-white/10 pt-10 pb-6"
            >
              <div className="flex gap-10">
                <Facebook size={28} /> 
                <Instagram size={28} /> 
                <Youtube size={28} />
              </div>
              <button className="w-full max-w-xs bg-yellow-500 text-[#004d5a] py-4 font-black uppercase tracking-widest rounded-sm">
                Book a Room
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;