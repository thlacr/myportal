import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Search, Tag } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/common/Section';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    image: string;
  };
  image: string;
  category: string;
  tags: string[];
}

const BlogPage: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      id: 'cloud-migration-strategies',
      title: 'Top Cloud Migration Strategies for 2025',
      excerpt: 'Learn the best practices for migrating your infrastructure to the cloud and avoiding common pitfalls that can derail your digital transformation journey.',
      date: 'May 15, 2025',
      readTime: '8 min read',
      author: {
        name: 'Michael Chen',
        role: 'Cloud Solutions Architect',
        image: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      image: 'https://images.pexels.com/photos/1181467/pexels-photo-1181467.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cloud Computing',
      tags: ['Cloud Migration', 'AWS', 'Azure', 'Digital Transformation']
    },
    {
      id: 'ai-business-transformation',
      title: 'How AI is Transforming Business Operations',
      excerpt: 'Discover how artificial intelligence is revolutionizing business processes across industries and creating new opportunities for innovation and efficiency.',
      date: 'May 2, 2025',
      readTime: '6 min read',
      author: {
        name: 'Sarah Williams',
        role: 'AI Solutions Lead',
        image: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      image: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'AI & Machine Learning',
      tags: ['Artificial Intelligence', 'Machine Learning', 'Business Intelligence', 'Automation']
    },
    {
      id: 'cybersecurity-threats-2025',
      title: 'Emerging Cybersecurity Threats to Watch in 2025',
      excerpt: 'Stay ahead of the curve by understanding the latest cybersecurity challenges facing businesses and how to protect your organization from sophisticated attacks.',
      date: 'April 20, 2025',
      readTime: '10 min read',
      author: {
        name: 'David Thompson',
        role: 'Cybersecurity Director',
        image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Cybersecurity',
      tags: ['Cybersecurity', 'Ransomware', 'Data Protection', 'Zero Trust']
    },
    {
      id: 'devops-best-practices',
      title: 'DevOps Best Practices for Agile Teams',
      excerpt: 'Implement these proven DevOps methodologies to streamline your development process, improve collaboration, and accelerate your time to market.',
      date: 'April 8, 2025',
      readTime: '7 min read',
      author: {
        name: 'Jennifer Martinez',
        role: 'DevOps Engineer',
        image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      image: 'https://images.pexels.com/photos/7367/startup-photos.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Software Development',
      tags: ['DevOps', 'CI/CD', 'Agile', 'Automation']
    },
    {
      id: 'data-analytics-trends',
      title: 'Data Analytics Trends Reshaping Business Intelligence',
      excerpt: 'Explore how advances in data analytics are providing organizations with deeper insights and enabling more informed decision-making across departments.',
      date: 'March 25, 2025',
      readTime: '9 min read',
      author: {
        name: 'Robert Kim',
        role: 'Data Science Lead',
        image: 'https://images.pexels.com/photos/937481/pexels-photo-937481.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Data Analytics',
      tags: ['Big Data', 'Data Visualization', 'Predictive Analytics', 'Business Intelligence']
    },
    {
      id: 'remote-work-technology',
      title: 'Technologies Enabling the Future of Remote Work',
      excerpt: 'Discover the innovative tools and platforms that are reshaping how teams collaborate and stay productive in remote and hybrid work environments.',
      date: 'March 12, 2025',
      readTime: '6 min read',
      author: {
        name: 'Lisa Johnson',
        role: 'Digital Workplace Strategist',
        image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
      },
      image: 'https://images.pexels.com/photos/4226140/pexels-photo-4226140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      category: 'Digital Workplace',
      tags: ['Remote Work', 'Collaboration Tools', 'Virtual Teams', 'Digital Transformation']
    }
  ];

  const categories = Array.from(new Set(blogPosts.map(post => post.category)));
  
  const allTags = blogPosts.flatMap(post => post.tags);
  const uniqueTags = Array.from(new Set(allTags));
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedTag, setSelectedTag] = useState<string | null>(null);

  // Filter blog posts based on search, category, and tag
  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = searchQuery === '' || 
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      
    const matchesCategory = selectedCategory === null || post.category === selectedCategory;
    
    const matchesTag = selectedTag === null || post.tags.includes(selectedTag);
    
    return matchesSearch && matchesCategory && matchesTag;
  });

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const clearFilters = () => {
    setSearchQuery('');
    setSelectedCategory(null);
    setSelectedTag(null);
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
            Our Blog
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-xl text-primary-100 mb-8"
          >
            Insights, trends, and expert perspectives on technology and business innovation.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-lg mx-auto"
          >
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-5 py-3 pr-12 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-accent-500"
              />
              <button
                type="submit"
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-neutral-500"
              >
                <Search size={20} />
              </button>
            </form>
          </motion.div>
        </div>
      </Section>
      
      {/* Blog Content Section */}
      <Section background="white" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Categories */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((category) => (
                    <li key={category}>
                      <button
                        onClick={() => setSelectedCategory(selectedCategory === category ? null : category)}
                        className={`flex items-center w-full text-left py-2 px-3 rounded-lg transition-colors ${
                          selectedCategory === category
                            ? 'bg-primary-100 text-primary-900 font-medium'
                            : 'text-neutral-700 hover:bg-neutral-100'
                        }`}
                      >
                        <span>{category}</span>
                        <span className="ml-auto text-sm text-neutral-500">
                          {blogPosts.filter(post => post.category === category).length}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              {/* Popular Tags */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Popular Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {uniqueTags.map((tag) => (
                    <button
                      key={tag}
                      onClick={() => setSelectedTag(selectedTag === tag ? null : tag)}
                      className={`inline-flex items-center px-3 py-1 rounded-full text-sm transition-colors ${
                        selectedTag === tag
                          ? 'bg-primary-900 text-white'
                          : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
                      }`}
                    >
                      <Tag size={14} className="mr-1" />
                      {tag}
                    </button>
                  ))}
                </div>
              </div>
              
              {/* Recent Posts */}
              <div>
                <h3 className="text-xl font-semibold mb-4">Recent Posts</h3>
                <div className="space-y-4">
                  {blogPosts.slice(0, 3).map((post) => (
                    <Link 
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="flex items-start group"
                    >
                      <div className="w-16 h-16 flex-shrink-0 rounded-md overflow-hidden mr-3">
                        <img 
                          src={post.image} 
                          alt={post.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary-900 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-neutral-500 mt-1">{post.date}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
              
              {/* Clear Filters Button (visible only when filters are applied) */}
              {(selectedCategory || selectedTag || searchQuery) && (
                <div className="pt-4">
                  <button
                    onClick={clearFilters}
                    className="w-full py-2 px-4 bg-neutral-100 hover:bg-neutral-200 text-neutral-700 rounded-lg transition-colors"
                  >
                    Clear All Filters
                  </button>
                </div>
              )}
            </div>
          </div>
          
          {/* Blog Posts Grid */}
          <div className="lg:col-span-3">
            {searchQuery || selectedCategory || selectedTag ? (
              <div className="mb-8 pb-6 border-b border-neutral-200">
                <h2 className="text-2xl font-bold">
                  {filteredPosts.length} {filteredPosts.length === 1 ? 'result' : 'results'} found
                  {selectedCategory && ` in "${selectedCategory}"`}
                  {selectedTag && ` with tag "${selectedTag}"`}
                  {searchQuery && ` for "${searchQuery}"`}
                </h2>
              </div>
            ) : (
              <div className="mb-8 pb-6 border-b border-neutral-200">
                <h2 className="text-2xl font-bold">Latest Articles</h2>
              </div>
            )}
            
            {filteredPosts.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filteredPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="group"
                  >
                    <Link to={`/blog/${post.id}`} className="block">
                      <div className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300">
                        <div className="relative">
                          <img 
                            src={post.image}
                            alt={post.title}
                            className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                              {post.category}
                            </span>
                          </div>
                        </div>
                        
                        <div className="p-6">
                          <div className="flex items-center text-sm text-neutral-500 mb-3">
                            <div className="flex items-center">
                              <Calendar size={14} className="mr-1" />
                              <span>{post.date}</span>
                            </div>
                            <span className="mx-2">•</span>
                            <div className="flex items-center">
                              <Clock size={14} className="mr-1" />
                              <span>{post.readTime}</span>
                            </div>
                          </div>
                          
                          <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors">
                            {post.title}
                          </h3>
                          
                          <p className="text-neutral-600 mb-4 line-clamp-2">
                            {post.excerpt}
                          </p>
                          
                          <div className="flex items-center justify-between">
                            <div className="flex items-center">
                              <img 
                                src={post.author.image}
                                alt={post.author.name}
                                className="w-8 h-8 rounded-full object-cover mr-2"
                              />
                              <span className="text-sm font-medium">{post.author.name}</span>
                            </div>
                            
                            <div className="flex items-center text-primary-900 font-medium group-hover:text-primary-700 transition-colors">
                              <span>Read more</span>
                              <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <h3 className="text-xl font-semibold mb-4">No articles found</h3>
                <p className="text-neutral-600 mb-6">
                  No articles match your current search criteria.
                </p>
                <button
                  onClick={clearFilters}
                  className="px-6 py-2 bg-primary-900 text-white rounded-lg hover:bg-primary-800 transition-colors"
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </Section>
      
      {/* Newsletter Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-white mb-4"
          >
            Subscribe to Our Newsletter
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-lg text-primary-100 mb-8"
          >
            Stay updated with the latest insights and news in technology and business innovation.
          </motion.p>
          
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
          >
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-5 py-3 rounded-lg border-none focus:outline-none focus:ring-2 focus:ring-accent-500"
              required
            />
            <button
              type="submit"
              className="btn btn-accent whitespace-nowrap"
            >
              Subscribe
            </button>
          </motion.form>
        </div>
      </Section>
    </div>
  );
};

export default BlogPage;