import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Target, Zap } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

interface Service {
  id: string;
  title: string;
  description: string;
  fullDescription: string;
  features: string[];
  benefits: string[];
  processSteps: {
    title: string;
    description: string;
  }[];
  image: string;
  faqs: {
    question: string;
    answer: string;
  }[];
  relatedServices: string[];
}

const services: Service[] = [
  {
    id: 'it-consultancy',
    title: 'IT Consultancy',
    description: 'Strategic technology planning and advice to optimize your IT investments and align with business goals.',
    fullDescription: 'Our IT consulting services provide expert guidance to help your organization make informed technology decisions. We analyze your current systems, identify gaps and opportunities, and develop strategic plans that align technology with your business objectives. Whether you\'re undertaking digital transformation, optimizing costs, or improving your IT governance, our consultants bring deep expertise and a business-focused approach.',
    features: [
      'IT strategy development',
      'Technology roadmap planning',
      'Digital transformation consulting',
      'IT cost optimization',
      'IT governance and compliance',
      'Vendor selection and management'
    ],
    benefits: [
      'Align IT initiatives with business goals',
      'Reduce technology costs while improving capabilities',
      'Accelerate digital transformation efforts',
      'Make data-driven technology decisions',
      'Improve IT security and compliance posture',
      'Optimize your IT investment portfolio'
    ],
    processSteps: [
      {
        title: 'Assessment',
        description: 'We conduct a thorough analysis of your current IT environment, business goals, and challenges.'
      },
      {
        title: 'Strategy Development',
        description: 'Our experts develop a customized IT strategy aligned with your business objectives.'
      },
      {
        title: 'Roadmap Creation',
        description: 'We create a detailed implementation roadmap with clear milestones and deliverables.'
      },
      {
        title: 'Implementation Support',
        description: 'Our team provides guidance and support throughout the implementation process.'
      },
      {
        title: 'Continuous Improvement',
        description: 'We monitor progress, measure results, and refine the strategy as needed.'
      }
    ],
    image: 'https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How long does a typical IT consulting engagement last?',
        answer: 'The duration varies based on project scope and complexity. Initial assessments typically take 2-4 weeks, while full strategy development and implementation support can range from 3-12 months.'
      },
      {
        question: 'Do you work with businesses of all sizes?',
        answer: 'Yes, we have experience working with organizations ranging from startups to large enterprises across various industries.'
      },
      {
        question: 'How do you measure the success of your IT consulting services?',
        answer: 'We establish clear KPIs at the beginning of each engagement, which may include cost savings, improved performance metrics, successful project implementations, or other business outcomes.'
      },
      {
        question: 'Will we work with the same consultants throughout the project?',
        answer: 'Yes, we assign a dedicated team to your project to ensure consistency and build a deep understanding of your business.'
      }
    ],
    relatedServices: ['staffing', 'software-development', 'cybersecurity']
  },
  {
    id: 'staffing',
    title: 'Staffing Solutions',
    description: 'Connect with top technical talent for your projects or permanent positions through our specialized recruitment service.',
    fullDescription: 'Finding and retaining qualified IT talent is one of the biggest challenges organizations face today. Our IT staffing solutions help you bridge skill gaps and scale your team quickly with pre-vetted, qualified professionals. Whether you need project-based resources, full-time employees, or executive talent, we leverage our extensive network and rigorous screening process to find the right fit for your technical requirements and company culture.',
    features: [
      'Contract staffing for project needs',
      'Direct hire recruitment',
      'Executive search for IT leadership',
      'Team augmentation',
      'Skill gap assessment',
      'Talent retention consulting'
    ],
    benefits: [
      'Access a pre-vetted pool of qualified candidates',
      'Reduce time-to-hire and recruitment costs',
      'Scale your team quickly for project demands',
      'Improve retention through better culture fit',
      'Fill specialized technical positions',
      'Flexible staffing options to match your needs'
    ],
    processSteps: [
      {
        title: 'Requirements Analysis',
        description: 'We work with you to understand your technical requirements, team dynamics, and company culture.'
      },
      {
        title: 'Candidate Sourcing',
        description: 'Our recruiters leverage our extensive network to identify qualified candidates.'
      },
      {
        title: 'Rigorous Screening',
        description: 'Candidates undergo technical assessments, behavioral interviews, and reference checks.'
      },
      {
        title: 'Presentation',
        description: 'We present a shortlist of qualified candidates with detailed profiles.'
      },
      {
        title: 'Onboarding Support',
        description: 'We facilitate the hiring process and provide ongoing support.'
      }
    ],
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'What types of IT roles can you help us fill?',
        answer: 'We specialize in a wide range of technical roles, including software developers, data scientists, IT project managers, cybersecurity specialists, cloud architects, and IT executives.'
      },
      {
        question: 'How quickly can you provide qualified candidates?',
        answer: 'For most positions, we can present qualified candidates within 1-2 weeks. For highly specialized or executive roles, the timeframe may be 3-4 weeks.'
      },
      {
        question: 'What is your screening process?',
        answer: 'Our multi-step process includes technical skills assessment, behavioral interviews, cultural fit evaluation, reference checks, and background verification.'
      },
      {
        question: 'Do you offer any guarantees on placements?',
        answer: 'Yes, we offer replacement guarantees for direct hires, typically ranging from 60-90 days depending on the position level.'
      }
    ],
    relatedServices: ['it-consultancy', 'software-development', 'ai-solutions']
  },
  {
    id: 'software-development',
    title: 'Software Development',
    description: 'Custom software solutions designed and built to address your specific business challenges and opportunities.',
    fullDescription: 'Our software development services deliver tailored solutions that address your unique business needs. We follow industry best practices and agile methodologies to create robust, scalable, and maintainable software. From concept to deployment and beyond, our experienced development team works closely with you to ensure the final product meets your requirements and delivers measurable business value.',
    features: [
      'Custom application development',
      'Legacy system modernization',
      'API development and integration',
      'Mobile app development',
      'Quality assurance and testing',
      'DevOps and continuous delivery'
    ],
    benefits: [
      'Solutions tailored to your specific business needs',
      'Improved operational efficiency and productivity',
      'Enhanced customer experience and engagement',
      'Competitive advantage through innovative features',
      'Scalable architecture that grows with your business',
      'Reduced technical debt and maintenance costs'
    ],
    processSteps: [
      {
        title: 'Discovery',
        description: 'We gather requirements, understand your business processes, and define success criteria.'
      },
      {
        title: 'Design',
        description: 'Our team creates the software architecture, user experience, and technical specifications.'
      },
      {
        title: 'Development',
        description: 'We build the solution using agile methodologies with regular reviews and feedback.'
      },
      {
        title: 'Testing',
        description: 'Comprehensive quality assurance ensures the software meets all requirements and quality standards.'
      },
      {
        title: 'Deployment',
        description: 'We implement the solution in your environment with minimal disruption.'
      },
      {
        title: 'Support',
        description: 'Ongoing maintenance and support keep your software running smoothly and up-to-date.'
      }
    ],
    image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'What programming languages and technologies do you use?',
        answer: 'We work with a wide range of technologies including Java, Python, .NET, JavaScript/TypeScript, React, Angular, Node.js, AWS, Azure, and more. We select the most appropriate stack based on your project requirements.'
      },
      {
        question: 'How do you ensure the quality of your software?',
        answer: 'We implement robust quality assurance processes including automated testing, code reviews, continuous integration, and regular security assessments throughout the development lifecycle.'
      },
      {
        question: 'Do you provide ongoing maintenance and support?',
        answer: 'Yes, we offer flexible support and maintenance plans to ensure your software remains secure, up-to-date, and aligned with your evolving business needs.'
      },
      {
        question: 'How do you handle intellectual property rights?',
        answer: 'Upon project completion and final payment, all intellectual property rights for custom developed software are transferred to you, unless otherwise specified in our agreement.'
      }
    ],
    relatedServices: ['web-development', 'ai-solutions', 'cloud-services']
  },
  {
    id: 'web-development',
    title: 'Web Development',
    description: 'Creating responsive, high-performance websites and web applications that engage users and drive results.',
    fullDescription: 'Our web development services focus on creating exceptional online experiences that engage your audience and achieve your business objectives. We combine cutting-edge technologies with thoughtful design to build websites and web applications that are not only visually appealing but also fast, responsive, and user-friendly. From corporate websites to complex web applications, our team delivers solutions that stand out in today\'s competitive digital landscape.',
    features: [
      'Responsive website design and development',
      'E-commerce solutions',
      'Content management systems',
      'Progressive web applications',
      'Web portal development',
      'Website performance optimization'
    ],
    benefits: [
      'Establish a professional online presence',
      'Improve user engagement and conversion rates',
      'Enhance brand perception and credibility',
      'Optimize for search engines and accessibility',
      'Seamless experience across all devices',
      'Easy content management and updates'
    ],
    processSteps: [
      {
        title: 'Strategy',
        description: 'We define your goals, audience, and key performance indicators for the project.'
      },
      {
        title: 'Design',
        description: 'Our designers create wireframes and visual designs focused on user experience and brand alignment.'
      },
      {
        title: 'Development',
        description: 'We build your website or web application using modern frameworks and best practices.'
      },
      {
        title: 'Content',
        description: 'We help integrate your content or can provide content creation services if needed.'
      },
      {
        title: 'Testing',
        description: 'Comprehensive testing ensures functionality, performance, and compatibility across devices.'
      },
      {
        title: 'Launch & Support',
        description: 'We handle the deployment and provide ongoing support and maintenance.'
      }
    ],
    image: 'https://images.pexels.com/photos/196646/pexels-photo-196646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'How long does it take to build a website?',
        answer: 'Timeline varies based on complexity. Simple websites typically take 4-8 weeks, while complex web applications may require 3-6 months or more.'
      },
      {
        question: 'Which content management systems do you work with?',
        answer: 'We have expertise in WordPress, Drupal, and custom CMS development. We also build headless CMS solutions using platforms like Contentful or Sanity.'
      },
      {
        question: 'Do you provide hosting and domain registration?',
        answer: 'Yes, we offer hosting solutions and can assist with domain registration. We also provide guidance if you prefer to use your existing hosting provider.'
      },
      {
        question: 'How do you approach website security?',
        answer: 'Security is integrated throughout our development process. We implement best practices for authentication, data protection, regular updates, and vulnerability scanning.'
      }
    ],
    relatedServices: ['software-development', 'ai-solutions', 'cybersecurity']
  },
  {
    id: 'ai-solutions',
    title: 'AI Solutions',
    description: 'Implementing artificial intelligence and machine learning to automate processes and gain valuable insights.',
    fullDescription: 'Our AI solutions help businesses leverage the power of artificial intelligence and machine learning to solve complex problems, automate processes, and uncover insights from data. We work with you to identify high-value use cases for AI in your organization and develop solutions that deliver measurable business impact. From predictive analytics to natural language processing, computer vision, and recommendation systems, we make advanced AI technologies accessible and practical for your business.',
    features: [
      'Machine learning implementation',
      'Natural language processing solutions',
      'Predictive analytics and forecasting',
      'Computer vision applications',
      'Recommendation systems',
      'AI-powered automation'
    ],
    benefits: [
      'Automate repetitive tasks and processes',
      'Gain predictive insights from your data',
      'Enhance customer experience through personalization',
      'Improve decision-making with data-driven intelligence',
      'Discover patterns and opportunities in large datasets',
      'Stay competitive in an AI-driven business landscape'
    ],
    processSteps: [
      {
        title: 'Use Case Discovery',
        description: 'We identify high-value AI applications specific to your business challenges.'
      },
      {
        title: 'Data Assessment',
        description: 'Our data scientists evaluate your data readiness and requirements.'
      },
      {
        title: 'Solution Design',
        description: 'We design an AI solution architecture tailored to your needs and constraints.'
      },
      {
        title: 'Development & Training',
        description: 'Our team develops and trains the AI models using your data.'
      },
      {
        title: 'Integration',
        description: 'We integrate the AI solution with your existing systems and workflows.'
      },
      {
        title: 'Monitoring & Refinement',
        description: 'Continuous monitoring and model refinement ensure optimal performance over time.'
      }
    ],
    image: 'https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    faqs: [
      {
        question: 'Do we need a large amount of data to implement AI solutions?',
        answer: 'While having more quality data generally improves AI performance, we can work with various data situations. For smaller datasets, we can employ transfer learning, synthetic data generation, or other techniques to develop effective solutions.'
      },
      {
        question: 'How do you ensure AI ethics and responsible use?',
        answer: 'We follow ethical AI principles throughout our development process, including bias detection and mitigation, transparency in model decisions, privacy protection, and regular fairness assessments.'
      },
      {
        question: 'What infrastructure is needed to support AI solutions?',
        answer: 'Requirements vary by solution. We can design systems that run on your existing infrastructure, cloud platforms, or hybrid approaches based on your needs and constraints.'
      },
      {
        question: 'How long does it take to see results from an AI implementation?',
        answer: 'Initial proof-of-concept can often be developed in 4-8 weeks. Full implementation timelines vary based on complexity, but many clients begin seeing measurable results within 3-6 months.'
      }
    ],
    relatedServices: ['software-development', 'data-analytics', 'cloud-services']
  }
];

const ServiceDetailPage: React.FC = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const [service, setService] = useState<Service | null>(null);
  const [activeTab, setActiveTab] = useState('overview');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  useEffect(() => {
    const foundService = services.find(s => s.id === serviceId);
    if (foundService) {
      setService(foundService);
    }
    // Reset states when service changes
    setActiveTab('overview');
    setOpenFaq(null);
  }, [serviceId]);

  if (!service) {
    return (
      <div className="pt-24">
        <Section background="white" spacing="xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Service Not Found</h1>
            <p className="mb-8">The service you\'re looking for doesn\'t exist or has been moved.</p>
            <Button to="/services" variant="primary">View All Services</Button>
          </div>
        </Section>
      </div>
    );
  }

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const relatedServicesData = service.relatedServices
    .map(id => services.find(s => s.id === id))
    .filter((s): s is Service => s !== undefined);

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
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              {service.title}
            </h1>
            
            <p className="text-xl text-primary-100 mb-8">
              {service.description}
            </p>
            
            <div className="flex flex-wrap gap-4">
              <Button 
                to="/contact" 
                variant="accent" 
                size="lg"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Get Started
              </Button>
              
              <Button 
                onClick={() => document.getElementById('learn-more')?.scrollIntoView({ behavior: 'smooth' })}
                variant="outline" 
                size="lg"
                className="border-white text-white hover:bg-white/10"
              >
                Learn More
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative rounded-xl overflow-hidden shadow-lg">
              <img 
                src={service.image}
                alt={service.title}
                className="w-full h-auto"
              />
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Content Section */}
      <Section background="white" spacing="xl" id="learn-more">
        {/* Tabs Navigation */}
        <div className="border-b border-neutral-200 mb-12">
          <div className="flex flex-wrap -mb-px">
            {['overview', 'features', 'process', 'faq'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`inline-block py-4 px-6 border-b-2 font-medium text-lg transition-colors ${
                  activeTab === tab
                    ? 'border-primary-900 text-primary-900'
                    : 'border-transparent text-neutral-500 hover:text-primary-800 hover:border-primary-200'
                }`}
              >
                {tab.charAt(0).toUpperCase() + tab.slice(1)}
              </button>
            ))}
          </div>
        </div>
        
        {/* Tab Content */}
        <div className="mb-16">
          {/* Overview Tab */}
          {activeTab === 'overview' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                <div className="lg:col-span-2">
                  <h2 className="text-3xl font-bold mb-6">Overview</h2>
                  <div className="prose prose-lg max-w-none text-neutral-700">
                    <p>{service.fullDescription}</p>
                  </div>
                  
                  <h3 className="text-2xl font-semibold mt-10 mb-6">Key Benefits</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {service.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start">
                        <CheckCircle size={20} className="text-accent-500 mt-1 mr-3 flex-shrink-0" />
                        <p>{benefit}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-primary-50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-6 flex items-center">
                    <Zap size={20} className="text-primary-900 mr-2" />
                    Why Choose Our {service.title}
                  </h3>
                  
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <Users size={18} className="text-primary-900" />
                        </div>
                        <h4 className="font-semibold">Expert Team</h4>
                      </div>
                      <p className="text-neutral-600 pl-13">
                        Seasoned professionals with deep industry expertise and technical knowledge.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <Target size={18} className="text-primary-900" />
                        </div>
                        <h4 className="font-semibold">Results-Focused</h4>
                      </div>
                      <p className="text-neutral-600 pl-13">
                        We measure success by the tangible business outcomes we deliver.
                      </p>
                    </div>
                    
                    <div>
                      <div className="flex items-center mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                          <Award size={18} className="text-primary-900" />
                        </div>
                        <h4 className="font-semibold">Quality Assurance</h4>
                      </div>
                      <p className="text-neutral-600 pl-13">
                        Rigorous quality standards and best practices in everything we do.
                      </p>
                    </div>
                  </div>
                  
                  <div className="mt-8">
                    <Button 
                      to="/contact" 
                      variant="primary"
                      fullWidth
                    >
                      Request a Consultation
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
          
          {/* Features Tab */}
          {activeTab === 'features' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-10">Service Features</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {service.features.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-6 rounded-xl shadow-md border border-neutral-100 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mb-4">
                      <CheckCircle size={20} />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{feature}</h3>
                    <p className="text-neutral-600">
                      {/* Generate a generic description based on the feature name */}
                      Our {feature.toLowerCase()} services provide comprehensive solutions tailored to your specific business needs and objectives.
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* Process Tab */}
          {activeTab === 'process' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-10">Our Process</h2>
              
              <div className="space-y-8">
                {service.processSteps.map((step, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="relative pl-12 pb-8"
                  >
                    {/* Timeline connector */}
                    {index < service.processSteps.length - 1 && (
                      <div className="absolute left-6 top-10 bottom-0 w-px bg-primary-200"></div>
                    )}
                    
                    {/* Step number */}
                    <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-primary-900 text-white flex items-center justify-center font-bold text-lg">
                      {index + 1}
                    </div>
                    
                    <h3 className="text-2xl font-semibold mb-3">{step.title}</h3>
                    <p className="text-neutral-600">{step.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
          
          {/* FAQ Tab */}
          {activeTab === 'faq' && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl font-bold mb-10">Frequently Asked Questions</h2>
              
              <div className="space-y-4">
                {service.faqs.map((faq, index) => (
                  <div 
                    key={index} 
                    className="border border-neutral-200 rounded-lg overflow-hidden"
                  >
                    <button
                      onClick={() => toggleFaq(index)}
                      className="flex justify-between items-center w-full p-5 text-left bg-white hover:bg-neutral-50 transition-colors"
                    >
                      <h3 className="text-lg font-medium">{faq.question}</h3>
                      <span className={`transform transition-transform ${openFaq === index ? 'rotate-180' : ''}`}>
                        <ArrowRight size={16} className="transform rotate-90" />
                      </span>
                    </button>
                    
                    <div 
                      className={`overflow-hidden transition-all duration-300 ${
                        openFaq === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                      }`}
                    >
                      <div className="p-5 pt-0 bg-white border-t border-neutral-100">
                        <p className="text-neutral-600">{faq.answer}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          )}
        </div>
        
        {/* CTA Section */}
        <div className="bg-primary-900 rounded-xl p-8 md:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Ready to get started with {service.title}?
              </h3>
              <p className="text-primary-100 mb-6 md:mb-0">
                Contact us today to discuss your needs and how we can help your business succeed.
              </p>
            </div>
            <div className="md:text-right">
              <Button 
                to="/contact" 
                variant="accent" 
                size="lg"
                icon={<ArrowRight />}
                iconPosition="right"
              >
                Schedule a Consultation
              </Button>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Related Services */}
      {relatedServicesData.length > 0 && (
        <Section background="light" spacing="lg">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Related Services</h2>
            <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
              Explore other services that complement {service.title}
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {relatedServicesData.map((relatedService, index) => (
              <motion.div
                key={relatedService.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden group hover:shadow-lg transition-all duration-300"
              >
                <Link to={`/services/${relatedService.id}`} className="block">
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors">
                      {relatedService.title}
                    </h3>
                    <p className="text-neutral-600 mb-4">
                      {relatedService.description}
                    </p>
                    <div className="flex items-center text-primary-900 font-medium group-hover:text-primary-700 transition-colors">
                      <span>Learn more</span>
                      <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </Section>
      )}
    </div>
  );
};

export default ServiceDetailPage;