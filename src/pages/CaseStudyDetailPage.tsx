import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Building, Calendar, Clock, Award, ChevronRight, Quote } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  category: string;
  timeframe: string;
  challenge: string;
  solution: string;
  results: string[];
  testimonial?: {
    quote: string;
    author: string;
    position: string;
  };
  keyFeatures: string[];
  technologies: string[];
  heroImage: string;
  additionalImages: string[];
}

const caseStudies: CaseStudy[] = [
  {
    id: 'healthcare-data-migration',
    title: 'Healthcare Data Migration & Integration',
    client: 'MediCare Systems',
    industry: 'Healthcare',
    category: 'Cloud Migration',
    timeframe: '6 months',
    challenge: 'MediCare Systems, a growing healthcare provider network, was struggling with fragmented patient data across multiple legacy systems. This fragmentation was causing delays in patient care, increased administrative overhead, and compliance risks. They needed to consolidate their data into a modern, secure cloud environment while ensuring HIPAA compliance and minimal disruption to their operations.',
    solution: 'We developed a comprehensive data migration strategy that included data mapping, cleansing, and validation processes. Our team implemented a secure cloud architecture on AWS with enhanced security controls specifically designed for healthcare data. We created custom APIs to integrate with their existing EHR system and developed automated reconciliation tools to ensure data integrity throughout the migration process.',
    results: [
      'Successfully migrated over 5 million patient records with 99.99% accuracy',
      'Reduced data retrieval time by 78%, significantly improving patient care efficiency',
      'Implemented robust security controls that exceeded HIPAA requirements',
      'Decreased system maintenance costs by 45% annually',
      'Enabled real-time data sharing between departments while maintaining strict access controls'
    ],
    testimonial: {
      quote: 'The THLACR team demonstrated exceptional expertise in healthcare data migration. They understood our unique compliance requirements and delivered a solution that not only met our technical needs but also improved our patient care capabilities.',
      author: 'Dr. Sarah Johnson',
      position: 'CIO, MediCare Systems'
    },
    keyFeatures: [
      'Secure cloud architecture with healthcare-specific security controls',
      'Custom data validation and reconciliation tools',
      'Automated compliance reporting',
      'Seamless integration with existing systems',
      'Comprehensive staff training program'
    ],
    technologies: [
      'AWS (Amazon Web Services)',
      'Microsoft Azure',
      'Python',
      'Terraform',
      'Kubernetes',
      'MongoDB',
      'Apache Kafka'
    ],
    heroImage: 'https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/7089401/pexels-photo-7089401.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/6476589/pexels-photo-6476589.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 'ecommerce-platform',
    title: 'E-commerce Platform Optimization',
    client: 'ShopGlobal Inc.',
    industry: 'Retail',
    category: 'Web Development',
    timeframe: '4 months',
    challenge: 'ShopGlobal, an international e-commerce retailer, was experiencing high cart abandonment rates and declining conversion rates. Their existing platform was slow, difficult to navigate on mobile devices, and lacked modern features expected by today\'s consumers. They needed a complete overhaul of their online store to improve user experience and boost sales.',
    solution: 'We redesigned their e-commerce platform with a focus on performance, usability, and conversion optimization. The new platform featured a responsive design optimized for all devices, advanced search functionality with AI-powered recommendations, streamlined checkout process, and integration with multiple payment gateways. We also implemented a robust analytics system to provide actionable insights on customer behavior.',
    results: [
      'Increased conversion rate by 35% within the first three months',
      'Reduced page load time by 67%, significantly improving user experience',
      'Decreased cart abandonment rate from 76% to 42%',
      'Mobile sales increased by 85% year-over-year',
      'Implemented AI-driven product recommendations that drove 28% of total sales'
    ],
    testimonial: {
      quote: 'The transformation of our e-commerce platform has been nothing short of remarkable. THLACR delivered a solution that not only looks great but has significantly improved our bottom line. The attention to detail and focus on conversion optimization was impressive.',
      author: 'Michael Wong',
      position: 'Director of Digital Commerce, ShopGlobal Inc.'
    },
    keyFeatures: [
      'Responsive design optimized for all devices',
      'AI-powered product recommendations',
      'Advanced search functionality',
      'One-click checkout process',
      'Real-time inventory management',
      'Multi-currency and multi-language support'
    ],
    technologies: [
      'React',
      'Node.js',
      'Elasticsearch',
      'AWS Lambda',
      'Stripe API',
      'Google Analytics',
      'Cloudflare'
    ],
    heroImage: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/6169049/pexels-photo-6169049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/5076516/pexels-photo-5076516.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  },
  {
    id: 'ai-customer-service',
    title: 'AI-Powered Customer Service Solution',
    client: 'ServiceFirst Corporation',
    industry: 'Customer Service',
    category: 'AI Solutions',
    timeframe: '5 months',
    challenge: 'ServiceFirst Corporation, a large customer service provider, was struggling to handle increasing support ticket volume while maintaining quality service. Their agents were overwhelmed with repetitive inquiries, leading to longer response times and decreased customer satisfaction. They needed an intelligent solution to automate routine inquiries while ensuring their human agents could focus on complex issues.',
    solution: 'We developed an AI-powered customer service platform that combines natural language processing and machine learning to handle customer inquiries. The system includes an intelligent chatbot for front-line support, automated ticket classification and routing, sentiment analysis for prioritizing urgent issues, and a knowledge base that continuously improves through machine learning. The solution integrates seamlessly with their existing CRM system.',
    results: [
      'Automated handling of 65% of routine customer inquiries',
      'Reduced average response time from 24 hours to 15 minutes',
      'Improved customer satisfaction ratings by 32%',
      'Decreased support costs by 40% while handling 3x more inquiries',
      'Enabled 24/7 support coverage without additional staffing'
    ],
    testimonial: {
      quote: 'The AI solution THLACR implemented has transformed our customer service operations. We\'re now able to provide faster, more accurate responses while allowing our agents to focus on complex issues where they add the most value. The ROI has exceeded our expectations.',
      author: 'Jennifer Martinez',
      position: 'VP of Customer Experience, ServiceFirst Corporation'
    },
    keyFeatures: [
      'AI-powered chatbot with natural language understanding',
      'Automated ticket classification and routing',
      'Sentiment analysis for priority handling',
      'Self-learning knowledge base',
      'Seamless handoff between AI and human agents',
      'Comprehensive analytics dashboard'
    ],
    technologies: [
      'TensorFlow',
      'Python',
      'Microsoft Azure Cognitive Services',
      'MongoDB',
      'Elasticsearch',
      'React',
      'Node.js'
    ],
    heroImage: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    additionalImages: [
      'https://images.pexels.com/photos/8867434/pexels-photo-8867434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      'https://images.pexels.com/photos/7709086/pexels-photo-7709086.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    ]
  }
];

const CaseStudyDetailPage: React.FC = () => {
  const { caseId } = useParams<{ caseId: string }>();
  const [caseStudy, setCaseStudy] = useState<CaseStudy | null>(null);

  useEffect(() => {
    const foundCaseStudy = caseStudies.find(cs => cs.id === caseId);
    if (foundCaseStudy) {
      setCaseStudy(foundCaseStudy);
    }
    window.scrollTo(0, 0);
  }, [caseId]);

  if (!caseStudy) {
    return (
      <div className="pt-24">
        <Section background="white" spacing="xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Case Study Not Found</h1>
            <p className="mb-8">The case study you\'re looking for doesn\'t exist or has been moved.</p>
            <Button to="/case-studies" variant="primary">View All Case Studies</Button>
          </div>
        </Section>
      </div>
    );
  }

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section background="primary" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
                {caseStudy.category}
              </span>
              <span className="inline-block px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full">
                {caseStudy.industry}
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              {caseStudy.title}
            </h1>
            
            <div className="flex items-center text-primary-100 mb-8">
              <Building size={18} className="mr-2" />
              <span>{caseStudy.client}</span>
            </div>
            
            <div className="flex flex-wrap gap-6 text-primary-100 mb-8">
              <div className="flex items-center">
                <Calendar size={18} className="mr-2" />
                <span>Timeframe: {caseStudy.timeframe}</span>
              </div>
            </div>
            
            <Button 
              onClick={() => document.getElementById('challenge')?.scrollIntoView({ behavior: 'smooth' })}
              variant="accent" 
              size="lg"
              icon={<ChevronRight />}
              iconPosition="right"
            >
              Read Case Study
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={caseStudy.heroImage}
                alt={caseStudy.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Challenge & Solution Section */}
      <Section background="white" spacing="lg">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div id="challenge" className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                The Challenge
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="prose prose-lg max-w-none text-neutral-700"
              >
                <p>{caseStudy.challenge}</p>
              </motion.div>
            </div>
            
            <div className="mb-12">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Our Solution
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="prose prose-lg max-w-none text-neutral-700"
              >
                <p>{caseStudy.solution}</p>
              </motion.div>
            </div>
            
            {caseStudy.additionalImages.length > 0 && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
                {caseStudy.additionalImages.map((image, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="rounded-lg overflow-hidden shadow-md"
                  >
                    <img 
                      src={image}
                      alt={`${caseStudy.title} - Image ${index + 1}`}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            )}
            
            <div>
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-3xl font-bold mb-6"
              >
                Results & Impact
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
              >
                <div className="space-y-4 mb-8">
                  {caseStudy.results.map((result, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 + (index * 0.1) }}
                      className="flex items-start"
                    >
                      <CheckCircle size={24} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                      <p className="text-neutral-700">{result}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
              
              {caseStudy.testimonial && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="bg-neutral-50 p-6 rounded-xl border-l-4 border-accent-500 mb-8"
                >
                  <div className="flex items-start">
                    <div className="flex-shrink-0 mr-4">
                      <Quote size={36} className="text-accent-500 opacity-50" />
                    </div>
                    <div>
                      <p className="text-lg italic text-neutral-700 mb-4">
                        "{caseStudy.testimonial.quote}"
                      </p>
                      <div>
                        <p className="font-semibold">{caseStudy.testimonial.author}</p>
                        <p className="text-neutral-500">{caseStudy.testimonial.position}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
          
          <div>
            <div className="bg-primary-50 p-6 rounded-xl sticky top-24">
              <h3 className="text-xl font-semibold mb-6 flex items-center">
                <Award size={20} className="text-primary-900 mr-2" />
                Project Details
              </h3>
              
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Client</h4>
                  <p>{caseStudy.client}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Industry</h4>
                  <p>{caseStudy.industry}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Timeframe</h4>
                  <p>{caseStudy.timeframe}</p>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Key Features</h4>
                  <ul className="space-y-1">
                    {caseStudy.keyFeatures.map((feature, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-accent-500 mr-2">•</span>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold text-primary-900 mb-2">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {caseStudy.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="inline-block px-3 py-1 bg-white text-primary-900 text-sm rounded-full border border-primary-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div>
                <Link 
                  to="/contact" 
                  className="btn btn-primary w-full text-center flex justify-center"
                >
                  Discuss Your Project
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Related Case Studies Section */}
      <Section background="light" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Explore More Case Studies</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Discover how we\'ve helped other organizations overcome their challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {caseStudies
            .filter(cs => cs.id !== caseId)
            .slice(0, 3)
            .map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 20 }}
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
                        src={study.heroImage} 
                        alt={study.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-80"></div>
                    
                    {/* Content */}
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-accent-500 text-white text-xs font-medium mb-3">
                        {study.category}
                      </span>
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
            Ready to Achieve Similar Results?
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            Let\'s discuss how our team can help solve your business challenges with innovative technology solutions.
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
              to="/services" 
              variant="outline" 
              size="lg"
              className="border-white text-white hover:bg-white/10"
            >
              Explore Our Services
            </Button>
          </motion.div>
        </div>
      </Section>
    </div>
  );
};

export default CaseStudyDetailPage;