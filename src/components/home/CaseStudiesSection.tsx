import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  category: string;
  image: string;
  index: number;
}

const CaseStudyCard: React.FC<CaseStudyCardProps> = ({ id, title, client, category, image, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/case-studies/${id}`} className="block">
        <div className="relative overflow-hidden rounded-xl">
          {/* Image */}
          <div className="aspect-w-16 aspect-h-9 overflow-hidden">
            <img 
              src={image} 
              alt={title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
          
          {/* Content */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <span className="inline-block px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-medium mb-3">
              {category}
            </span>
            <h3 className="text-xl text-white font-semibold mb-1">{title}</h3>
            <p className="text-white/80 mb-4">{client}</p>
            <div className="flex items-center text-white font-medium transition-transform duration-300 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100">
              <span>View Case Study</span>
              <ArrowRight size={16} className="ml-2" />
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
};

const CaseStudiesSection: React.FC = () => {
  const caseStudies = [
    {
      id: 'healthcare-data-migration',
      title: 'Healthcare Data Migration & Integration',
      client: 'MediCare Systems',
      category: 'Cloud Migration',
      image: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'ecommerce-platform',
      title: 'E-commerce Platform Optimization',
      client: 'ShopGlobal Inc.',
      category: 'Web Development',
      image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      id: 'ai-customer-service',
      title: 'AI-Powered Customer Service Solution',
      client: 'ServiceFirst Corporation',
      category: 'AI Solutions',
      image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  return (
    <Section background="light">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div className="max-w-2xl mb-6 md:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Case Studies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            Explore how we've helped organizations overcome challenges and achieve their goals through innovative technology solutions.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/case-studies" 
            className="group inline-flex items-center text-primary-900 font-medium hover:text-primary-700"
          >
            View all case studies
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {caseStudies.map((study, index) => (
          <CaseStudyCard 
            key={study.id}
            id={study.id}
            title={study.title}
            client={study.client}
            category={study.category}
            image={study.image}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default CaseStudiesSection;