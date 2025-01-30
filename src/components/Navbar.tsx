import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/10 backdrop-blur-lg shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="text-white text-2xl font-bold relative"
            >
              <span className="relative z-10">ANYTECH</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 to-transparent blur-lg"
                animate={{
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                }}
              />
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              <NavItem text="Solutions">
                <ChevronDown className="w-4 h-4 ml-1" />
              </NavItem>
              <NavItem text="Services" />
              <NavItem text="About Us" />

              <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center text-white border border-white/30 rounded-full px-3 py-1 hover:bg-white/10 transition-colors cursor-pointer"
              >
                <Globe className="w-4 h-4 mr-2" />
                <span>EN</span>
                <ChevronDown className="w-4 h-4 ml-1" />
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00D4FF] text-white px-6 py-2 rounded-lg hover:bg-[#00b8e6] transition-colors shadow-lg shadow-[#00D4FF]/20"
              >
                Contact Us
              </motion.button>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-white p-2"
            >
              {isMobileMenuOpen ? <X /> : <Menu />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-blue-900/95 backdrop-blur-lg md:hidden pt-20"
          >
            <div className="flex flex-col items-center space-y-6 p-6">
              <MobileNavItem text="Solutions" />
              <MobileNavItem text="Services" />
              <MobileNavItem text="About Us" />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#00D4FF] text-white px-6 py-2 rounded-lg w-full"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

const NavItem = ({ text, children }: { text: string; children?: React.ReactNode }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="flex items-center text-white cursor-pointer hover:text-[#00D4FF] transition-colors"
  >
    <span>{text}</span>
    {children}
  </motion.div>
);

const MobileNavItem = ({ text }: { text: string }) => (
  <motion.div
    whileHover={{ scale: 1.05 }}
    className="text-white text-lg font-medium w-full text-center py-2 border-b border-white/10"
  >
    {text}
  </motion.div>
);

export default Navbar;