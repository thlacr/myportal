import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import Button from '../common/Button';

const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-primary-50 rounded-bl-[100px] opacity-70"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent-500 rounded-full filter blur-3xl opacity-10 -translate-x-1/2 translate-y-1/2"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-secondary-500 rounded-full filter blur-3xl opacity-10"></div>
      </div>

      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Transforming Businesses Through
              <span className="text-accent-500"> Technology</span>
            </h1>
            
            <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-xl">
              We deliver innovative IT solutions to help your business adapt, 
              grow, and succeed in today's digital landscape.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/contact" 
                variant="primary" 
                size="lg" 
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Get Started
              </Button>
              
              <Button 
                to="/services" 
                variant="outline" 
                size="lg"
              >
                Explore Services
              </Button>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-12">
              <p className="text-sm uppercase tracking-wider text-neutral-500 mb-4">
                Trusted by industry leaders
              </p>
              <div className="flex flex-wrap items-center gap-8">
                {['Microsoft', 'Oracle', 'IBM', 'Salesforce'].map((company) => (
                  <div key={company} className="text-neutral-400 font-semibold">
                    {company}
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 rounded-2xl"></div>
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Team collaborating on IT solutions"
                className="w-full h-auto rounded-2xl shadow-lg"
              />
              
              {/* Stats overlay */}
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex gap-6">
                  <div>
                    <p className="text-3xl font-bold text-primary-900">500+</p>
                    <p className="text-sm text-neutral-500">Projects Completed</p>
                  </div>
                  <div>
                    <p className="text-3xl font-bold text-accent-500">98%</p>
                    <p className="text-sm text-neutral-500">Client Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;