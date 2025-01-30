import React from 'react';
import { motion } from 'framer-motion';
import { BarChart3, Building2, Wallet } from 'lucide-react';

const CustomerSection = () => {
  return (
    <div className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#0066FF] text-lg font-medium mb-4">POWERING THE FUTURE OF FINANCE</h2>
            <h3 className="text-4xl font-bold text-[#001B44] mb-6">Uncovering new ways to delight customers</h3>
            <p className="text-[#001B44]/80 text-lg mb-6">
              AnyTech is revolutionising financial technology by introducing innovative and real-time transaction account processing capabilities, specifically designed for retail financial services.
            </p>
            <p className="text-[#001B44]/80 text-lg">
              Our modern approach surpasses traditional banking and card processing systems, empowering you with the most advanced technology for lasting success.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80"
              alt="Professional working on tablet"
              className="rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="absolute -top-4 -left-4"
            >
              <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                <BarChart3 className="w-6 h-6 text-[#0066FF]" />
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute -bottom-4 -right-4"
            >
              <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                <Building2 className="w-6 h-6 text-[#FF7F57]" />
              </div>
            </motion.div>
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7 }}
              className="absolute top-1/2 -right-4 transform -translate-y-1/2"
            >
              <div className="bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow">
                <Wallet className="w-6 h-6 text-[#00D4FF]" />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CustomerSection;