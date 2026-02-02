import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, Facebook, Instagram, Youtube, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import your logo
import Logo from '@/assets/logo.png';

const Navbar = () => {
  const [showTopBar, setShowTopBar] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAtTop, setIsAtTop] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const controlNavbar = () => {
      const currentScrollY = window.scrollY;
      
      // Logic for background shadow/transparency
      if (currentScrollY <= 20) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }

      // Logic for hiding Top Bar
      // Added a "Threshold" (Math.abs) so it doesn't jitter on tiny scrolls
      if (currentScrollY <= 50) {
        setShowTopBar(true);
      } else if (currentScrollY > lastScrollY && Math.abs(currentScrollY - lastScrollY) > 10) {
        // Scrolling Down > 10px
        setShowTopBar(false);
      } else if (currentScrollY < lastScrollY && Math.abs(currentScrollY - lastScrollY) > 10) {
        // Scrolling Up > 10px
        setShowTopBar(true);
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

  // --- OPTIMIZED VARIANTS ---
  
  // Using a custom bezier for "Apple-like" smoothness
  const smoothTransition = { duration: 0.4, ease: [0.4, 0, 0.2, 1] };

  const topBarVariants = {
    hidden: { 
      height: 0, 
      opacity: 0,
      transition: { ...smoothTransition, duration: 0.3 }
    },
    visible: { 
      height: "40px", // Fixed height prevents layout calculation errors
      opacity: 1,
      transition: { ...smoothTransition, duration: 0.3 }
    }
  };

  const navContainerVariants = {
    top: {
      paddingTop: "1.25rem",
      paddingBottom: "1.25rem",
      boxShadow: "0px 0px 0px rgba(0,0,0,0)",
      backgroundColor: "rgba(255, 255, 255, 1)",
    },
    scrolled: {
      paddingTop: "0.75rem",
      paddingBottom: "0.75rem",
      boxShadow: "0px 4px 20px rgba(0,0,0,0.06)",
      backgroundColor: "rgba(255, 255, 255, 0.98)",
    }
  };

  const menuVariants = {
    hidden: { 
      clipPath: "circle(0% at 100% 0%)",
      transition: { duration: 0.5, ease: [0.4, 0, 0.2, 1] } 
    },
    show: { 
      clipPath: "circle(150% at 100% 0%)",
      transition: { 
        duration: 0.7, 
        ease: [0.19, 1, 0.22, 1], // "Expo Out" for dramatic opening
      } 
    }
  };

  const menuItemVariants = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.4 } }
  };

  return (
    <>
      <header className="fixed w-full z-50 font-sans top-0 left-0">
        
        {/* 1st HEADER (TOP BAR) */}
        {/* 'layout' prop here ensures neighbor elements slide smoothly when this resizes */}
        <AnimatePresence initial={false}>
          {showTopBar && (
            <motion.div 
              variants={topBarVariants}
              initial="visible"
              animate="visible"
              exit="hidden"
              className="bg-[#004d5a] text-white px-6 hidden md:flex justify-between items-center text-[13px] font-medium border-b border-white/5 overflow-hidden origin-top"
            >
             <div className="flex gap-6 h-full items-center">
  <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
    <Mail size={14} className="text-yellow-400" /> algladieshostel1@gmail.com
  </span>
  <span className="flex items-center gap-2 hover:text-yellow-400 transition-colors cursor-pointer">
    <Phone size={14} className="text-yellow-400" /> +91 98941 69241
  </span>
</div>
              {/* <div className="flex gap-4 h-full items-center">
                <Facebook size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <Instagram size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
                <Youtube size={16} className="hover:text-yellow-400 cursor-pointer transition-colors" />
              </div> */}
            </motion.div>
          )}
        </AnimatePresence>

        {/* 2nd HEADER (MAIN NAVIGATION) */}
        {/* Added 'layout' here so it slides up physically when TopBar disappears */}
        <motion.nav
          layout 
          initial="top"
          animate={isAtTop ? "top" : "scrolled"}
          variants={navContainerVariants}
          transition={smoothTransition}
          className="px-6 flex items-center justify-between bg-white z-40 relative"
        >
          {/* LOGO SECTION */}
          <Link to="/" className="flex items-center gap-3 cursor-pointer group">
            <motion.div layout className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
              <img 
                src={Logo} 
                alt="ALG Ladies Hostel Logo" 
                className="w-full h-full object-contain"
              />
            </motion.div>
            <div>
              <p className="text-yellow-600 text-[8px] md:text-[10px] font-bold tracking-[0.2em] uppercase group-hover:text-[#004d5a] transition-colors">Ladies Hostel</p>
            </div>
          </Link>

          {/* Desktop Links */}
          <ul className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link 
                  to={link.path}
                  className="text-[#004d5a] font-bold text-[13px] xl:text-[14px] uppercase tracking-widest hover:text-yellow-600 transition-colors relative group py-2"
                >
                  {link.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-yellow-500 transition-all duration-300 group-hover:w-full" />
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-4">
            <a href="tel:+919894169241">
  <motion.button 
    whileHover={{ scale: 1.05, backgroundColor: "#eab308", color: "#004d5a" }}
    whileTap={{ scale: 0.95 }}
    className="hidden sm:block bg-[#004d5a] text-white px-6 py-2.5 rounded-sm font-bold uppercase text-xs tracking-widest transition-colors shadow-sm"
  >
    Call Now
  </motion.button>
</a>

            <button onClick={() => setIsMenuOpen(true)} className="lg:hidden text-[#004d5a] p-1 hover:bg-gray-100 rounded-md transition-colors">
              <Menu size={32} />
            </button>
          </div>
        </motion.nav>
      </header>

      {/* MOBILE OFF-CANVAS */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            variants={menuVariants}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="fixed inset-0 z-[60] bg-[#004d5a] text-white p-6 flex flex-col overflow-hidden"
          >
            <div className="flex justify-between items-center mb-10">
              <Link to="/" className="flex items-center gap-2" onClick={() => setIsMenuOpen(false)}>
                <img src={Logo} alt="ALG Logo" className="w-8 h-8 object-contain brightness-0 invert" />
                <span className="font-black tracking-tighter text-2xl uppercase">ALG</span>
              </Link>
              <motion.button 
                whileHover={{ rotate: 90 }}
                onClick={() => setIsMenuOpen(false)} 
                className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
              >
                <X size={24} />
              </motion.button>
            </div>

            <motion.div 
              className="flex flex-col gap-8 items-center justify-center flex-grow"
              initial="hidden"
              animate="show"
              variants={{ show: { transition: { staggerChildren: 0.1 } } }}
            >
              {navLinks.map((link) => (
                <div key={link.name} className="overflow-hidden">
                  <motion.div variants={menuItemVariants}>
                    <Link
                      to={link.path}
                      onClick={() => setIsMenuOpen(false)}
                      className="text-3xl font-bold tracking-widest block uppercase hover:text-yellow-300 transition-colors relative group"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                </div>
              ))}
            </motion.div>

            <motion.div 
              variants={menuItemVariants}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.5 }}
              className="mt-auto flex flex-col gap-8 items-center border-t border-white/10 pt-10 pb-6"
            >
              <div className="flex gap-10">
                <Facebook size={24} className="hover:text-yellow-400 transition-transform hover:scale-125" /> 
                <Instagram size={24} className="hover:text-yellow-400 transition-transform hover:scale-125" /> 
                <Youtube size={24} className="hover:text-yellow-400 transition-transform hover:scale-125" />
              </div>
              <Link to="/contact">
  <button className="w-full max-w-xs bg-yellow-500 text-[#004d5a] py-4 font-black uppercase tracking-widest rounded-sm hover:bg-white transition-colors">
    Book a Room
  </button>
</Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;