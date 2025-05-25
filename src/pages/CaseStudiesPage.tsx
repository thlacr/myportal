import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Filter } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  excerpt: string;
  image: string;
}

const CaseStudiesPage: React.FC = () => {
  const caseStudies: CaseStudy[] = [
    {
      id: 'healthcare-data-migration',
      title: 'Healthcare Data Migration & Integration',
      client: 'MediCare Systems',
      industry: 'Healthcare',
      category: 'Cloud Migration',
      excerpt: 'Migrating sensitive patient data to a secure cloud environment while ensuring compliance with healthcare regulations.',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform Optimization',
      client: 'ShopGlobal Inc.',
      industry: 'Retail',
      category: 'Web Development',
      excerpt: 'Redesigning and optimizing an e-commerce platform to improve user experience and increase conversion rates.',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Solution',
      client: 'ServiceFirst Corporation',
      industry: 'Customer Service',
      category: 'AI Solutions',
      excerpt: 'Implementing an AI chatbot and automated ticket routing system to improve customer service efficiency.',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'financial-data-analytics',
      title: 'Financial Data Analytics Platform',
      client: 'Global Investment Partners',
      industry: 'Finance',
      category: 'Data Analytics',
      excerpt: 'Building a comprehensive analytics platform to provide real-time insights for investment decisions.',
      image: 'https://images.pexels.com/photos/7567464/pexels-photo-7567464.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'supply-chain-optimization',
      title: 'Supply Chain Optimization System',
      client: 'LogiTech Solutions',
      industry: 'Logistics',
      category: 'Software Development',
      excerpt: 'Developing a custom supply chain management system to improve efficiency and reduce costs.',
      image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'cybersecurity-infrastructure',
      title: 'Enterprise Cybersecurity Infrastructure',
      client: 'SecureBank Financial',
      industry: 'Banking',
      category: 'Cybersecurity',
      excerpt: 'Implementing a comprehensive cybersecurity framework to protect sensitive financial data and customer information.',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  const [activeFilter, setActiveFilter] = useState<string>('all');
  const [showFilters, setShowFilters] = useState<boolean>(false);

  // Get unique categories and industries for filters
  const categories = Array.from(new Set(caseStudies.map(study => study.category)));
  const industries = Array.from(new Set(caseStudies.map(study => study.industry)));

  // Filter case studies based on active filter
  const filteredCaseStudies = activeFilter === 'all'
    ? caseStudies
    : caseStudies.filter(study => 
        study.category === activeFilter || study.industry === activeFilter
      );

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Case Studies
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100"
          >
            Explore how we've helped organizations overcome challenges and achieve their goals through innovative technology solutions.
          </motion.p>
        </div>
      </Section>
      
      {/* Filters Section */}
      <Section background="white" spacing="sm">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-4">
          <h2 className="text-2xl font-bold mb-4 md:mb-0">
            {activeFilter === 'all' ? 'All Case Studies' : `Filtered by: ${activeFilter}`}
          </h2>
          
          <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center text-primary-900 font-medium"
          >
            <Filter size={18} className="mr-2" />
            {showFilters ? 'Hide Filters' : 'Show Filters'}
          </button>
        </div>
        
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-neutral-50 p-6 rounded-lg mb-8"
          >
            <div className="mb-4">
              <h3 className="font-medium mb-2">Filter by Category</h3>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveFilter('all')}
                  className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                    activeFilter === 'all'
                      ? 'bg-primary-900 text-white'
                      : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                  }`}
                >
                  All
                </button>
                {categories.map(category => (
                  <button
                    key={category}
                    onClick={() => setActiveFilter(category)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === category
                        ? 'bg-primary-900 text-white'
                        : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Filter by Industry</h3>
              <div className="flex flex-wrap gap-2">
                {industries.map(industry => (
                  <button
                    key={industry}
                    onClick={() => setActiveFilter(industry)}
                    className={`px-3 py-1 rounded-full text-sm font-medium transition-colors ${
                      activeFilter === industry
                        ? 'bg-primary-900 text-white'
                        : 'bg-neutral-200 text-neutral-700 hover:bg-neutral-300'
                    }`}
                  >
                    {industry}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </Section>
      
      {/* Case Studies Grid */}
      <Section background="white" spacing="lg">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCaseStudies.map((study, index) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/case-studies/${study.id}`} className="block">
                <div className="relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all duration-300">
                  {/* Image */}
                  <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img 
                      src={study.image} 
                      alt={study.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                  
                  {/* Content */}
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-medium">
                        {study.category}
                      </span>
                      <span className="inline-block px-3 py-1 rounded-full bg-primary-900/70 text-white text-xs font-medium">
                        {study.industry}
                      </span>
                    </div>
                    <h3 className="text-xl text-white font-semibold mb-1">{study.title}</h3>
                    <p className="text-white/80 mb-4">{study.client}</p>
                    <div className="flex items-center text-white font-medium transition-transform duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
                      <span>View Case Study</span>
                      <ArrowRight size={16} className="ml-2" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {filteredCaseStudies.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-xl font-semibold mb-4">No case studies found</h3>
            <p className="text-neutral-600 mb-6">
              No case studies match your current filter criteria.
            </p>
            <button
              onClick={() => setActiveFilter('all')}
              className="px-6 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
            >
              Reset Filters
            </button>
          </div>
        )}
      </Section>
      
      {/* CTA Section */}
      <Section background="light" spacing="lg">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-6"
          >
            Ready to Become Our Next Success Story?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600 mb-8"
          >
            Let's discuss how our team can help solve your business challenges with innovative technology solutions.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Link 
              to="/contact" 
              className="btn btn-primary inline-flex items-center"
            >
              Contact Us
              <ArrowRight size={16} className="ml-2" />
            </Link>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudiesPage;