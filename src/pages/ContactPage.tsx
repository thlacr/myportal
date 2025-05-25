import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const ContactPage: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    service: '',
  });
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormState({
        name: '',
        email: '',
        phone: '',
        company: '',
        message: '',
        service: '',
      });
    }, 1500);
  };

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
            Get in Touch
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100"
          >
            Have a question or ready to start your next project? We're here to help.
          </motion.p>
        </div>
      </Section>
      
      {/* Contact Form & Info */}
      <Section background="white" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Information</h2>
            <p className="text-neutral-600 mb-8">
              Our team is ready to answer your questions and discuss how we can help your business succeed.
            </p>
            
            <div className="space-y-6 mb-12">
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-4">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Phone</h4>
                  <a href="tel:+14155552671" className="text-neutral-600 hover:text-primary-900 transition-colors">
                    (91) 7300465258
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-4">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Email</h4>
                  <a href="mailto:info@thlacr.com" className="text-neutral-600 hover:text-primary-900 transition-colors">
                    info@thlacr.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="h-12 w-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-900 mr-4">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold">Office</h4>
                  <address className="text-neutral-600 not-italic">
                  58, Shiv Shakti Nagar,<br />
                  Mansarovar, Jaipur - 302020
                  </address>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-semibold mb-4">Business Hours</h3>
              <table className="w-full text-neutral-600">
                <tbody>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Monday - Friday</td>
                    <td className="py-2">8:00 AM - 6:00 PM PST</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Saturday</td>
                    <td className="py-2">10:00 AM - 4:00 PM PST</td>
                  </tr>
                  <tr>
                    <td className="py-2 pr-4 font-medium">Sunday</td>
                    <td className="py-2">Closed</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="bg-white p-8 rounded-xl shadow-md">
              {isSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 mb-6">
                    <CheckCircle size={32} className="text-primary-900" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-primary-900">Message Sent!</h3>
                  <p className="text-neutral-600 mb-6">
                    Thank you for reaching out. We'll get back to you within 24 hours.
                  </p>
                  <Button 
                    onClick={() => setIsSubmitted(false)}
                    variant="primary"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                  <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your name"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formState.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-neutral-700 mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formState.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium text-neutral-700 mb-2">
                          Company
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formState.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                          placeholder="Your company name"
                        />
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="service" className="block text-sm font-medium text-neutral-700 mb-2">
                        Service of Interest
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formState.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                      >
                        <option value="" disabled>Select a service</option>
                        <option value="it-consultancy">IT Consultancy</option>
                        <option value="staffing">Staffing Solutions</option>
                        <option value="software-development">Software Development</option>
                        <option value="web-development">Web Development</option>
                        <option value="ai-solutions">AI Solutions</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-neutral-700 mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 rounded-lg border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                        placeholder="Tell us about your project or inquiry..."
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      variant="primary"
                      disabled={isLoading}
                      fullWidth
                      icon={isLoading ? undefined : <Send size={16} />}
                    >
                      {isLoading ? 'Sending...' : 'Send Message'}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Map Section */}
      <Section background="light" spacing="lg">
        <div className="max-w-4xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Find Us</h2>
          <p className="text-neutral-600">
            We're conveniently located in the heart of Silicon Valley.
          </p>
        </div>
        
        <div className="relative h-[400px] rounded-xl overflow-hidden shadow-md">
          <img 
            src="https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Map location"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm">
              <h3 className="text-xl font-bold mb-2">THLACR Headquarters</h3>
              <p className="text-neutral-600 mb-4">
                1234 Tech Avenue,<br />
                Silicon Valley, CA 94043
              </p>
              <Button 
                href="https://maps.google.com" 
                variant="primary"
                fullWidth
              >
                Get Directions
              </Button>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default ContactPage;