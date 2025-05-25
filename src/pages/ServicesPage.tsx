import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, LineChart, Code, Users, Brain, Globe, ShieldCheck, Server, Database } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

interface ServiceCardProps {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  benefits: string[];
  index: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ id, title, description, icon, benefits, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-all duration-300 border border-neutral-100 group"
    >
      <div className="p-8">
        <div className="h-16 w-16 rounded-lg bg-primary-50 flex items-center justify-center text-primary-900 mb-6">
          {icon}
        </div>
        
        <h3 className="text-2xl font-semibold mb-4">{title}</h3>
        <p className="text-neutral-600 mb-6">{description}</p>
        
        <ul className="space-y-2 mb-8">
          {benefits.map((benefit, i) => (
            <li key={i} className="flex items-start">
              <span className="text-accent-500 mr-2">•</span>
              <span className="text-neutral-700">{benefit}</span>
            </li>
          ))}
        </ul>
        
        <Link
          to={`/services/${id}`}
          className="inline-flex items-center text-primary-900 font-medium group-hover:text-primary-700 transition-colors"
        >
          Learn more
          <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </motion.div>
  );
};

const ServicesPage: React.FC = () => {
  const services = [
    {
      id: 'it-consultancy',
      title: 'IT Consultancy',
      description: 'Strategic technology planning and advice to optimize your IT investments and align with business goals.',
      icon: <LineChart size={32} />,
      benefits: [
        'Technology strategy development',
        'IT infrastructure assessment',
        'Digital transformation roadmaps',
        'Cost optimization'
      ]
    },
    {
      id: 'staffing',
      title: 'Staffing Solutions',
      description: 'Connect with top technical talent for your projects or permanent positions through our specialized recruitment service.',
      icon: <Users size={32} />,
      benefits: [
        'Technical talent acquisition',
        'Project-based staffing',
        'Executive IT recruitment',
        'Team augmentation'
      ]
    },
    {
      id: 'software-development',
      title: 'Software Development',
      description: 'Custom software solutions designed and built to address your specific business challenges and opportunities.',
      icon: <Code size={32} />,
      benefits: [
        'Custom application development',
        'Legacy system modernization',
        'API development and integration',
        'Quality assurance and testing'
      ]
    },
    {
      id: 'web-development',
      title: 'Web Development',
      description: 'Creating responsive, high-performance websites and web applications that engage users and drive results.',
      icon: <Globe size={32} />,
      benefits: [
        'Responsive website design',
        'E-commerce solutions',
        'Content management systems',
        'Progressive web applications'
      ]
    },
    {
      id: 'ai-solutions',
      title: 'AI Solutions',
      description: 'Implementing artificial intelligence and machine learning to automate processes and gain valuable insights.',
      icon: <Brain size={32} />,
      benefits: [
        'Machine learning implementation',
        'Natural language processing',
        'Predictive analytics',
        'AI-powered automation'
      ]
    },
    {
      id: 'cybersecurity',
      title: 'Cybersecurity',
      description: 'Protecting your business from threats with comprehensive security assessments and solutions.',
      icon: <ShieldCheck size={32} />,
      benefits: [
        'Security assessments',
        'Threat detection and response',
        'Compliance management',
        'Security awareness training'
      ]
    },
    {
      id: 'cloud-services',
      title: 'Cloud Services',
      description: 'Helping you leverage cloud technologies to improve scalability, security, and cost-efficiency.',
      icon: <Server size={32} />,
      benefits: [
        'Cloud migration strategy',
        'Multi-cloud architecture',
        'Cloud optimization',
        'Serverless implementations'
      ]
    },
    {
      id: 'data-analytics',
      title: 'Data Analytics',
      description: 'Transform your data into actionable insights that drive better business decisions.',
      icon: <Database size={32} />,
      benefits: [
        'Data warehouse implementation',
        'Business intelligence solutions',
        'Data visualization',
        'Big data processing'
      ]
    }
  ];

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
            Our Services
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            Comprehensive IT solutions tailored to help your business thrive in the digital age.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              to="/contact" 
              variant="accent" 
              size="lg"
            >
              Get Started
            </Button>
          </motion.div>
        </div>
      </Section>
      
      {/* Services Grid */}
      <Section background="light" spacing="xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              description={service.description}
              icon={service.icon}
              benefits={service.benefits}
              index={index}
            />
          ))}
        </div>
      </Section>
      
      {/* Approach Section */}
      <Section background="white" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Approach</h2>
            
            <p className="text-lg text-neutral-700 mb-6">
              We believe in a collaborative, solution-focused approach that puts your business objectives at the center of everything we do.
            </p>
            
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">1. Understand</h3>
                <p className="text-neutral-600">
                  We begin by deeply understanding your business, challenges, and goals to ensure our solutions address your specific needs.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">2. Strategize</h3>
                <p className="text-neutral-600">
                  Our experts develop a comprehensive strategy that outlines the optimal approach, timeline, and resources required.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">3. Implement</h3>
                <p className="text-neutral-600">
                  We execute the plan with precision, keeping you informed and involved throughout the implementation process.
                </p>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold mb-2">4. Optimize</h3>
                <p className="text-neutral-600">
                  After implementation, we continuously monitor, measure, and refine to ensure optimal performance and results.
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <img
              src="https://images.pexels.com/photos/3182811/pexels-photo-3182811.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Team collaborating on a project"
              className="rounded-lg shadow-lg"
            />
            <div className="absolute -top-6 -right-6 w-64 h-64 bg-accent-100 rounded-lg -z-10"></div>
          </motion.div>
        </div>
      </Section>
      
      {/* CTA Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Ready to Start Your Project?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            Contact us today to discuss how our services can help your business succeed.
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
              Contact Us
            </Button>
            
            <Button 
              to="/case-studies" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              View Our Work
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default ServicesPage;