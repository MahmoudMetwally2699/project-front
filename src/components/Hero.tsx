import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 overflow-hidden">
      {/* Background Elements */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.1 }}
        transition={{ duration: 1.5 }}
        className="absolute inset-0"
      >
        <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzBoLTJWMGgydjMwem0tMiAwSDJ2LTJoMzJ2MnptMCAydjI4aC0yVjMyaDJ6TTMyIDMwSDAgMzJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-10" />
      </motion.div>

      {/* Diagonal Decorative Elements */}
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="absolute right-0 top-0 w-1/2 h-full bg-white/5 transform skew-x-12"
      />
      <motion.div 
        initial={{ x: '100%' }}
        animate={{ x: 0 }}
        transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
        className="absolute right-32 top-0 w-1/4 h-full bg-white/5 transform -skew-x-12"
      />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-12 min-h-screen items-center">
          {/* Left Column - Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="pt-32 lg:pt-0 text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="inline-block px-4 py-1 bg-white/10 rounded-full mb-6"
            >
              <span className="text-white/90 text-sm font-medium">Transforming Financial Technology</span>
            </motion.div>

            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              className="text-5xl lg:text-7xl font-bold text-white leading-tight mb-8"
            >
              Embrace the future of finance
            </motion.h1>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.1 }}
              className="text-white/90 text-lg lg:text-xl mb-12 max-w-xl"
            >
              Reimagine financial services with AnyTech's open platform, distributed
              banking solution that powers transformation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.3 }}
              className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <motion.button 
                whileHover={{ scale: 1.05, backgroundColor: '#ff6a3d' }}
                whileTap={{ scale: 0.95 }}
                className="bg-[#FF7F57] text-white px-8 py-4 rounded-lg text-lg font-medium flex items-center gap-2 shadow-lg shadow-[#FF7F57]/20 transition-all duration-300"
              >
                Get Started
                <ChevronRight className="w-5 h-5" />
              </motion.button>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 rounded-lg text-lg font-medium text-white border border-white/20 hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </motion.button>
            </motion.div>
          </motion.div>
          
          {/* Right Column - Image */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative hidden lg:block"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 1 }}
              className="relative z-10"
            >
              <img
                src="https://images.unsplash.com/photo-1573167243872-43c6433b9d40?auto=format&fit=crop&q=80"
                alt="Business professional"
                className="rounded-2xl shadow-2xl"
              />
              {/* Gradient Overlay */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-600/20 to-transparent" />
            </motion.div>

            {/* Decorative Elements */}
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="absolute -top-8 -right-8 w-32 h-32 bg-[#00D4FF]/10 rounded-full blur-2xl"
            />
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.6, delay: 1.6 }}
              className="absolute -bottom-8 -left-8 w-40 h-40 bg-[#FF7F57]/10 rounded-full blur-2xl"
            />
          </motion.div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-blue-900/50 to-transparent" />
    </div>
  );
};

export default Hero;