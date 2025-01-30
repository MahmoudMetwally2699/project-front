import React from 'react';
import { motion } from 'framer-motion';
import { Brain, Database, Cloud } from 'lucide-react';

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const Philosophy = () => {
  return (
    <div className="bg-gray-50 py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-[#0066FF] text-lg font-medium mb-4">OUR PHILOSOPHY</h2>
          <h3 className="text-4xl font-bold text-[#001B44]">Human-centred innovation</h3>
        </motion.div>
        
        <div className="grid grid-cols-3 gap-8">
          <motion.div 
            custom={0}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-[#0066FF] text-sm">CORE TECH</span>
              <h4 className="text-2xl font-bold text-[#001B44] mt-2">Artificial Intelligence</h4>
            </div>
            <p className="text-gray-600">
              Using AI/ML to upgrade legacy processes, reduce cost, and improve efficiency
            </p>
          </motion.div>
          
          <motion.div 
            custom={1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-[#FF7F57] text-sm">MECHANISM</span>
              <h4 className="text-2xl font-bold text-[#001B44] mt-2">Blockchain</h4>
            </div>
            <p className="text-gray-600">
              Enhanced security by eliminating intermediaries
            </p>
          </motion.div>
          
          <motion.div 
            custom={2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            whileHover={{ scale: 1.05 }}
            className="bg-white p-8 rounded-xl shadow-lg transition-all duration-300"
          >
            <div className="mb-6">
              <span className="text-[#00D4FF] text-sm">INFRASTRUCTURE</span>
              <h4 className="text-2xl font-bold text-[#001B44] mt-2">Cloud</h4>
            </div>
            <p className="text-gray-600">
              Scale resources easily on-demand
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Philosophy;