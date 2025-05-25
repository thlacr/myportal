import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code, Brain, Users, LineChart, Globe, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  link: string;
  delay: number;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon, link, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay * 0.1 }}
      className="animate-on-scroll bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-300 border border-neutral-100"
    >
      <div className="flex justify-between items-start">
        <div className="h-14 w-14 rounded-lg bg-primary-50 flex items-center justify-center text-primary-900 mb-5">
          {icon}
        </div>
        <div className="opacity-0 group-hover:opacity-100 transition-opacity">
          <ArrowRight size={20} className="text-primary-900" />
        </div>
      </div>
      <h3 className="text-xl font-semibold mb-3">{title}</h3>
      <p className="text-neutral-600 mb-4">{description}</p>
      <Link 
        to={link}
        className="group inline-flex items-center text-primary-900 font-medium hover:text-primary-700"
      >
        Learn more
        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
      </Link>
    </motion.div>
  );
};

const ServicesSection: React.FC = () => {
  const services = [
    {
      title: "IT Consultancy",
      description: "Strategic planning and advice to optimize your technology investments and drive business value.",
      icon: <LineChart size={28} />,
      link: "/services/it-consultancy"
    },
    {
      title: "Staffing Solutions",
      description: "Access to top technical talent, whether for project-based work or long-term positions.",
      icon: <Users size={28} />,
      link: "/services/staffing"
    },
    {
      title: "Software Development",
      description: "Custom software solutions designed and built to address your specific business challenges.",
      icon: <Code size={28} />,
      link: "/services/software-development"
    },
    {
      title: "Web Development",
      description: "Creating responsive, high-performance websites and web applications that engage users.",
      icon: <Globe size={28} />,
      link: "/services/web-development"
    },
    {
      title: "AI Solutions",
      description: "Implementing artificial intelligence and machine learning to automate and enhance operations.",
      icon: <Brain size={28} />,
      link: "/services/ai-solutions"
    },
    {
      title: "Cybersecurity",
      description: "Protecting your business from threats with comprehensive security assessments and solutions.",
      icon: <ShieldCheck size={28} />,
      link: "/services/cybersecurity"
    }
  ];

  return (
    <Section background="light" id="services">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
        <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
          We offer a comprehensive range of IT services to help your business thrive in the digital age.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
            link={service.link}
            delay={index}
          />
        ))}
      </div>

      <div className="text-center mt-12">
        <Link 
          to="/services" 
          className="btn btn-primary inline-flex items-center"
        >
          View All Services
          <ArrowRight size={16} className="ml-2" />
        </Link>
      </div>
    </Section>
  );
};

export default ServicesSection;