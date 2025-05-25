import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';

const AboutSection: React.FC = () => {
  const benefits = [
    "Expert team with 15+ years of industry experience",
    "Tailored solutions that align with your business goals",
    "Transparent communication and project management",
    "Long-term partnership approach focused on your success"
  ];

  return (
    <Section background="white">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative z-10">
            <img
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="THLACR team collaborating"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -bottom-6 -left-6 w-64 h-64 bg-secondary-100 rounded-lg -z-10"></div>
          <div className="absolute -top-6 -right-6 w-32 h-32 bg-accent-100 rounded-lg -z-10"></div>
          
          {/* Stats card */}
          <div className="absolute -right-8 bottom-16 bg-white p-5 rounded-lg shadow-lg max-w-[200px]">
            <p className="text-4xl font-bold text-primary-900 mb-1">10+</p>
            <p className="text-sm text-neutral-600">Years of excellence in IT consulting</p>
          </div>
        </motion.div>
        
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Who We Are</h2>
            
            <p className="text-lg text-neutral-700">
              THLACR is a leading IT consultancy that partners with businesses to drive digital transformation and achieve strategic objectives through technology.
            </p>
            
            <p className="text-neutral-600">
              Our team of experts brings decades of combined experience across industries, allowing us to provide insights and solutions tailored to your unique challenges and opportunities.
            </p>
            
            <div className="space-y-3 mt-6">
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start"
                >
                  <CheckCircle size={20} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                  <p>{benefit}</p>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8">
              <Link 
                to="/about" 
                className="group inline-flex items-center text-primary-900 font-medium hover:text-primary-700"
              >
                Learn more about us
                <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};

export default AboutSection;