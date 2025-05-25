import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Target, ChevronRight } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
  // Team members data
  const teamMembers = [
    {
      name: 'Alex Thompson',
      position: 'CEO & Founder',
      bio: 'Former CTO with 20+ years of experience in enterprise technology and digital transformation.',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Maria Rodriguez',
      position: 'CTO',
      bio: 'Specialized in cloud architecture and AI solutions with a background in software engineering.',
      image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'David Chen',
      position: 'Director of Consulting',
      bio: 'Expert in IT strategy and business process optimization across multiple industries.',
      image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    {
      name: 'Sarah Williams',
      position: 'Head of Software Development',
      bio: 'Leads our software engineering team with expertise in scalable architecture and agile methodologies.',
      image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    }
  ];

  // Values data
  const values = [
    {
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality solutions and exceeding client expectations.',
      icon: <Award size={36} className="text-primary-900" />
    },
    {
      title: 'Collaboration',
      description: 'We work closely with our clients, forming partnerships to achieve shared success.',
      icon: <Users size={36} className="text-primary-900" />
    },
    {
      title: 'Innovation',
      description: 'We embrace new technologies and creative approaches to solve complex challenges.',
      icon: <Target size={36} className="text-primary-900" />
    }
  ];

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section background="primary" spacing="xl">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6"
          >
            About THLACR
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            We're a team of technology experts passionate about helping businesses thrive 
            in the digital world.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4"
          >
            <Button 
              to="/contact" 
              variant="accent" 
              size="lg"
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
      
      {/* Story Section */}
      <Section background="white" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="THLACR team collaborating"
                className="w-full h-auto rounded-lg shadow-lg"
              />
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-accent-100 rounded-lg -z-10"></div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
            
            <div className="space-y-4 text-neutral-700">
              <p>
                Founded in 2015, THLACR began with a simple mission: to bridge the gap between business challenges and technology solutions. Our founder, Alex Thompson, recognized that many organizations struggled to harness the full potential of technology due to a lack of strategic guidance and technical expertise.
              </p>
              
              <p>
                Starting with a small team of consultants specializing in IT strategy, we quickly expanded our services to include software development, cloud solutions, and staffing services as client needs evolved. Today, we've grown into a comprehensive technology partner serving clients across industries and around the globe.
              </p>
              
              <p>
                Our growth has been driven by our commitment to excellence, deep technical expertise, and genuine passion for helping our clients succeed. We pride ourselves on building long-term relationships based on trust, transparency, and consistently delivering results.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Mission & Vision Section */}
      <Section background="light" spacing="lg">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Mission & Vision
          </motion.h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary-900">Our Mission</h3>
            <p className="text-neutral-700 mb-6">
              To empower organizations with innovative technology solutions that drive growth, 
              efficiency, and competitive advantage in an ever-evolving digital landscape.
            </p>
            
            <ul className="space-y-3">
              {['Deliver exceptional value through technology', 'Foster digital innovation', 'Build lasting client partnerships'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-primary-900 mt-1 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-white p-8 rounded-xl shadow-md"
          >
            <h3 className="text-2xl font-semibold mb-4 text-primary-900">Our Vision</h3>
            <p className="text-neutral-700 mb-6">
              To be the most trusted technology partner for forward-thinking organizations, 
              known for our expertise, innovation, and transformative impact on our clients' success.
            </p>
            
            <ul className="space-y-3">
              {['Lead in technology innovation', 'Set the standard for IT consulting excellence', 'Create measurable business impact'].map((item, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle size={18} className="text-primary-900 mt-1 mr-3 flex-shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>
      
      {/* Values Section */}
      <Section background="white" spacing="lg">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Core Values
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            These principles guide everything we do and define how we work with our clients and each other.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-neutral-50 p-8 rounded-xl text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                {value.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
              <p className="text-neutral-600">{value.description}</p>
            </motion.div>
          ))}
        </div>
      </Section>
      
      {/* Team Section */}
      <Section background="light" spacing="lg">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-6"
          >
            Our Leadership Team
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            Meet the experts who lead our company and drive our vision forward.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-w-1 aspect-h-1 overflow-hidden">
                <img 
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
                <p className="text-accent-500 font-medium mb-3">{member.position}</p>
                <p className="text-neutral-600 text-sm">{member.bio}</p>
              </div>
            </motion.div>
          ))}
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
            Join Our Team
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            We're always looking for talented professionals to join our growing team.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Button 
              to="/careers" 
              variant="accent" 
              size="lg"
              icon={<ChevronRight />}
            >
              View Open Positions
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default AboutPage;