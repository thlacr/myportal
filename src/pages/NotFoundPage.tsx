import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const NotFoundPage: React.FC = () => {
  return (
    <div className="pt-24">
      <Section background="white" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-primary-900">
              404
            </h1>
            <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-neutral-800">
              Page Not Found
            </h2>
            
            <p className="text-lg text-neutral-600 mb-8">
              We're sorry, the page you're looking for doesn't exist or has been moved.
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/" 
                variant="primary"
                icon={<ArrowLeft />}
                iconPosition="left"
              >
                Back to Home
              </Button>
              
              <Button 
                to="/contact" 
                variant="outline"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <svg 
                width="400" 
                height="300" 
                viewBox="0 0 400 300" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-auto"
              >
                <path 
                  d="M196.5 61.5C133.9 61.5 83 112.4 83 175C83 237.6 133.9 288.5 196.5 288.5C259.1 288.5 310 237.6 310 175C310 112.4 259.1 61.5 196.5 61.5Z" 
                  fill="#E6EBF4"
                />
                <path 
                  d="M229.1 99.3L262.3 132.5M262.3 132.5L295.5 165.7M262.3 132.5L229.1 165.7M262.3 132.5L295.5 99.3" 
                  stroke="#0A2463" 
                  strokeWidth="10" 
                  strokeLinecap="round"
                />
                <path 
                  d="M97.3 99.3L130.5 132.5M130.5 132.5L163.7 165.7M130.5 132.5L97.3 165.7M130.5 132.5L163.7 99.3" 
                  stroke="#0A2463" 
                  strokeWidth="10" 
                  strokeLinecap="round"
                />
                <path 
                  d="M196.5 216.9C176.5 216.9 160.3 208.5 160.3 198.1C160.3 187.7 176.5 216.9 196.5 216.9C216.5 216.9 232.7 187.7 232.7 198.1C232.7 208.5 216.5 216.9 196.5 216.9Z" 
                  fill="#0A2463"
                />
              </svg>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-100 rounded-lg -z-10"></div>
            </div>
          </motion.div>
        </div>
        
        <div className="mt-16">
          <h3 className="text-xl font-semibold mb-6 text-center">
            You might be looking for
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Home Page', path: '/' },
              { name: 'Services', path: '/services' },
              { name: 'About Us', path: '/about' },
              { name: 'Case Studies', path: '/case-studies' },
              { name: 'Blog', path: '/blog' },
              { name: 'Contact', path: '/contact' }
            ].map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="block p-4 bg-neutral-50 hover:bg-primary-50 rounded-lg text-center transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default NotFoundPage;