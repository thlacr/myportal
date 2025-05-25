import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 to-secondary-900 -z-10"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-500 opacity-10 -z-10 transform skew-x-12"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/2 bg-white opacity-5 -z-10 rounded-tl-[100px]"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Transform Your Business?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg md:text-xl text-primary-100 mb-10"
          >
            Let's discuss how our IT consulting services can help you achieve your business goals 
            and stay ahead in today's digital landscape.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Button 
              to="/contact" 
              variant="accent" 
              size="lg"
              icon={<ArrowRight />}
              iconPosition="right"
            >
              Schedule a Consultation
            </Button>
            
            <Button 
              to="/case-studies" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Our Case Studies
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;