import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import Section from '../common/Section';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

const TestimonialsSection: React.FC = () => {
  const testimonials: Testimonial[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "CTO",
      company: "TechFusion Inc.",
      quote: "THLACR's expertise in cloud migration saved us months of downtime and significantly improved our system performance. Their team was professional, responsive, and truly invested in our success.",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Director of Operations",
      company: "GlobalTrade Solutions",
      quote: "Working with THLACR transformed our approach to digital security. Their comprehensive assessment identified vulnerabilities we weren't aware of, and their implementation plan was clear and effective.",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id: 3,
      name: "Jessica Rivera",
      position: "CEO",
      company: "Innovate Health",
      quote: "The custom software solution developed by THLACR revolutionized our patient management system. Their understanding of our industry challenges and technical expertise delivered results beyond our expectations.",
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <Section background="primary">
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4"
        >
          What Our Clients Say
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-primary-100 max-w-2xl mx-auto"
        >
          Don't just take our word for it. Hear from organizations we've helped transform through technology.
        </motion.p>
      </div>

      <div className="relative max-w-4xl mx-auto">
        {/* Quote decoration */}
        <div className="absolute -top-10 -left-10 opacity-10">
          <Quote size={80} />
        </div>
        
        {/* Testimonial card */}
        <motion.div
          key={testimonials[currentIndex].id}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-white rounded-xl shadow-lg p-8 md:p-10"
        >
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex-shrink-0">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-20 h-20 md:w-24 md:h-24 rounded-full object-cover mx-auto md:mx-0"
              />
            </div>
            
            <div className="flex-grow">
              <p className="text-neutral-700 text-lg mb-6 italic">
                "{testimonials[currentIndex].quote}"
              </p>
              
              <div>
                <h4 className="text-xl font-semibold text-primary-900">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-neutral-500">
                  {testimonials[currentIndex].position}, {testimonials[currentIndex].company}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        
        {/* Navigation buttons */}
        <div className="flex justify-center mt-8 space-x-4">
          <button 
            onClick={prevTestimonial}
            className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div className="flex items-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-white scale-110' 
                    : 'bg-primary-200 opacity-60'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="p-2 rounded-full bg-primary-800 text-white hover:bg-primary-700 transition-colors"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialsSection;