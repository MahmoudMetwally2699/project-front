import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const featureVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.5,
    },
  }),
};

const TechnologySection = () => {
  return (
    <div className="bg-gradient-to-br from-[#001B44] to-[#002a66] py-24 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-[#00D4FF] text-lg font-medium mb-4">TECHNOLOGY THAT DELIVERS</h2>
            <h3 className="text-4xl font-bold mb-6">Transformative solutions for modern finance</h3>
            <p className="text-white/80 text-lg mb-8">
              Our cutting-edge technology platform enables financial institutions to deliver innovative services while reducing operational complexity and cost.
            </p>
            
            <div className="space-y-6">
              {[
                {
                  title: "Real-time Processing",
                  description: "Instant transaction processing and settlement capabilities",
                  color: "#0066FF"
                },
                {
                  title: "Scalable Architecture",
                  description: "Built to handle high-volume transactions with ease",
                  color: "#FF7F57"
                },
                {
                  title: "Advanced Security",
                  description: "Enterprise-grade security with multi-layer protection",
                  color: "#00D4FF"
                }
              ].map((feature, index) => (
                <motion.div
                  key={feature.title}
                  custom={index}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={featureVariants}
                  whileHover={{ x: 10 }}
                  className="flex items-start space-x-4"
                >
                  <motion.div
                    whileHover={{ rotate: 45 }}
                    className={`bg-[${feature.color}]/10 p-4 rounded-lg`}
                  >
                    <ArrowRight className={`w-6 h-6 text-[${feature.color}]`} />
                  </motion.div>
                  <div>
                    <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                    <p className="text-white/70">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80"
              alt="Technology visualization"
              className="rounded-lg shadow-xl"
            />
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="absolute inset-0 bg-gradient-to-t from-[#001B44]/50 to-transparent rounded-lg"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default TechnologySection;