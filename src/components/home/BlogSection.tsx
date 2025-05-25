import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../common/Section';

interface BlogPostCardProps {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
  index: number;
}

const BlogPostCard: React.FC<BlogPostCardProps> = ({ 
  id, title, excerpt, date, readTime, image, category, index 
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link to={`/blog/${id}`} className="block">
        <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
          <div className="relative">
            <img 
              src={image}
              alt={title}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute top-4 left-4">
              <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                {category}
              </span>
            </div>
          </div>
          
          <div className="p-6">
            <div className="flex items-center text-sm text-neutral-500 mb-3">
              <div className="flex items-center">
                <Calendar size={14} className="mr-1" />
                <span>{date}</span>
              </div>
              <span className="mx-2">•</span>
              <div className="flex items-center">
                <Clock size={14} className="mr-1" />
                <span>{readTime}</span>
              </div>
            </div>
            
            <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors">
              {title}
            </h3>
            
            <p className="text-neutral-600 mb-4 line-clamp-2">
              {excerpt}
            </p>
            
            <div className="flex items-center text-primary-900 font-medium group-hover:text-primary-700 transition-colors">
              <span>Read more</span>
              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

const BlogSection: React.FC = () => {
  const blogPosts = [
    {
      id: 'cloud-migration-strategies',
      title: 'Top Cloud Migration Strategies for 2025',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud and avoiding common pitfalls.',
      date: 'May 15, 2025',
      readTime: '8 min read',
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cloud Computing'
    },
    {
      id: 'ai-business-transformation',
      title: 'How AI is Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes across industries.',
      date: 'May 2, 2025',
      readTime: '6 min read',
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'AI & Machine Learning'
    },
    {
      id: 'cybersecurity-threats-2025',
      title: 'Emerging Cybersecurity Threats to Watch in 2025',
      excerpt: 'Stay ahead of the curve by understanding the latest cybersecurity challenges facing businesses.',
      date: 'April 20, 2025',
      readTime: '10 min read',
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cybersecurity'
    }
  ];

  return (
    <Section background="white">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
        <div className="max-w-2xl mb-6 md:mb-0">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold mb-4"
          >
            Latest Insights
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-neutral-600"
          >
            Stay updated with the latest trends and insights in technology and business innovation.
          </motion.p>
        </div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Link 
            to="/blog" 
            className="group inline-flex items-center text-primary-900 font-medium hover:text-primary-700"
          >
            View all articles
            <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {blogPosts.map((post, index) => (
          <BlogPostCard
            key={post.id}
            id={post.id}
            title={post.title}
            excerpt={post.excerpt}
            date={post.date}
            readTime={post.readTime}
            image={post.image}
            category={post.category}
            index={index}
          />
        ))}
      </div>
    </Section>
  );
};

export default BlogSection;