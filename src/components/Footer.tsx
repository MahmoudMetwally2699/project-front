import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  return (
    <footer className="bg-gradient-to-b from-[#001B44] to-[#001533] text-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#00D4FF]/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-[#FF7F57]/5 rounded-full blur-3xl" />
      </div>

      <div className="relative">
        {/* Call to Action Section */}
        <div className="border-b border-white/10">
          <div className="max-w-7xl mx-auto px-6 py-16">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 gap-12 items-center"
            >
              <motion.div variants={itemVariants}>
                <h2 className="text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-white to-white/80">
                  Legacy no longer
                </h2>
                <p className="text-white/80 mb-8 text-lg">
                  Talk to us to find out how we can transform your organisation for the future
                </p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-[#FF7F57] text-white px-8 py-3 rounded-lg hover:bg-[#ff6a3d] transition-colors shadow-lg shadow-[#FF7F57]/20 flex items-center gap-2 group"
                >
                  Contact Us
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-6 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-4 gap-12"
          >
            {/* Brand Column */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="text-2xl font-bold">ANYTECH</div>
              <p className="text-white/60">
                Transforming financial technology for a better future
              </p>
              <div className="flex space-x-4">
                {[Facebook, Twitter, Linkedin, Instagram].map((Icon, index) => (
                  <motion.a
                    key={index}
                    href="#"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="text-white/60 hover:text-[#00D4FF] transition-colors"
                  >
                    <Icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Solutions Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#00D4FF] font-medium mb-6">Our Solutions</h3>
              <ul className="space-y-4">
                {['AnyCaaS', 'AnyBaaS', 'AnyPaaS'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Company Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#FF7F57] font-medium mb-6">Company</h3>
              <ul className="space-y-4">
                {['About Us', 'Careers', 'Contact'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Resources Column */}
            <motion.div variants={itemVariants}>
              <h3 className="text-[#00D4FF] font-medium mb-6">Resources</h3>
              <ul className="space-y-4">
                {['Blog', 'Documentation', 'Support'].map((item, index) => (
                  <motion.li
                    key={index}
                    whileHover={{ x: 5 }}
                    className="text-white/60 hover:text-white cursor-pointer transition-colors"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mt-16 pt-8 border-t border-white/10"
          >
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <motion.div variants={itemVariants} className="text-white/60 text-sm">
                ©2023 All rights reserved. Any Technology Pte Ltd.
              </motion.div>
              <motion.div variants={itemVariants} className="flex space-x-6 text-sm">
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="text-white/60 hover:text-white transition-colors">
                  Cookie Policy
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;