import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User, ArrowRight, Share2, Facebook, Twitter, Linkedin, Mail, Tag } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string[];
  date: string;
  readTime: string;
  author: {
    name: string;
    role: string;
    bio: string;
    image: string;
  };
  image: string;
  category: string;
  tags: string[];
}

const blogPosts: BlogPost[] = [
  {
    id: 'cloud-migration-strategies',
    title: 'Top Cloud Migration Strategies for 2025',
    excerpt: 'Learn the best practices for migrating your infrastructure to the cloud and avoiding common pitfalls that can derail your digital transformation journey.',
    content: [
      "As organizations continue to accelerate their digital transformation initiatives, cloud migration remains a critical priority. However, successful cloud migration requires careful planning, strategy, and execution. In this article, we'll explore the most effective cloud migration strategies for 2025 and beyond.",
      
      "## Understanding Your Migration Objectives",
      
      "Before embarking on a cloud migration journey, it's essential to clearly define your objectives and expected outcomes. Are you looking to reduce costs, improve scalability, enhance security, or all of the above? Different objectives may require different migration approaches.",
      
      "Common migration objectives include:",
      "- Cost optimization and predictable IT spending",
      "- Improved scalability and flexibility",
      "- Enhanced security and compliance capabilities",
      "- Better disaster recovery and business continuity",
      "- Accelerated innovation and time-to-market",
      
      "## The 6 R's of Cloud Migration",
      
      "Industry experts often refer to the '6 R's' when discussing cloud migration strategies:",
      
      "### 1. Rehost (Lift and Shift)",
      "This approach involves moving applications from on-premises to the cloud without making significant changes. It's the fastest migration method and ideal for organizations looking to migrate quickly with minimal disruption. However, it may not fully leverage cloud-native capabilities.",
      
      "### 2. Replatform (Lift, Tinker, and Shift)",
      "Replatforming involves making some optimizations to your application to take advantage of cloud capabilities without changing the core architecture. For example, you might move a database to a managed database service while keeping the application logic unchanged.",
      
      "### 3. Refactor/Rearchitect",
      "This strategy involves redesigning your application to be cloud-native, taking full advantage of cloud capabilities like serverless computing, containers, and microservices. While this approach requires more time and resources upfront, it often yields the greatest long-term benefits in terms of scalability, performance, and cost efficiency.",
      
      "### 4. Repurchase (Drop and Shop)",
      "Repurchasing means switching from a traditional license to a SaaS model. For example, moving from a self-hosted CRM to Salesforce, or from an on-premises email server to Microsoft 365.",
      
      "### 5. Retain",
      "Some applications may not be suitable for cloud migration due to technical constraints, compliance requirements, or business justifications. These applications can remain on-premises while you migrate others to the cloud.",
      
      "### 6. Retire",
      "During the assessment phase, you may discover applications that are no longer needed or have been replaced by other systems. These can be retired, reducing your IT footprint and associated costs.",
      
      "## Emerging Trends in Cloud Migration for 2025",
      
      "As we look ahead to 2025, several trends are shaping the future of cloud migration:",
      
      "### Multi-Cloud and Hybrid Cloud Strategies",
      "Organizations are increasingly adopting multi-cloud and hybrid cloud approaches to avoid vendor lock-in, optimize costs, and leverage best-of-breed services from different providers. This requires sophisticated management tools and governance frameworks.",
      
      "### AI-Driven Migration Tools",
      "Artificial intelligence and machine learning are playing a growing role in cloud migration, from automated discovery and assessment to intelligent workload placement and optimization.",
      
      "### Container-First Migration",
      "Containers have become a preferred vehicle for cloud migration, providing a consistent environment across development, testing, and production. Container-based migration simplifies the process and enables greater portability across cloud environments.",
      
      "### Zero-Trust Security Models",
      "As organizations migrate to the cloud, traditional perimeter-based security approaches are giving way to zero-trust models that verify every user and every access attempt, regardless of location or network.",
      
      "## Best Practices for Successful Cloud Migration",
      
      "Regardless of which migration strategy you choose, these best practices will help ensure success:",
      
      "1. **Conduct a thorough assessment** of your current environment, including applications, dependencies, and performance requirements.",
      "2. **Develop a detailed migration plan** with clear phases, milestones, and success criteria.",
      "3. **Start with less critical applications** to gain experience before migrating mission-critical workloads.",
      "4. **Implement robust testing procedures** to verify functionality and performance in the cloud environment.",
      "5. **Establish a cloud center of excellence** to develop best practices, standards, and governance frameworks.",
      "6. **Invest in cloud monitoring and management tools** to optimize performance and costs post-migration.",
      "7. **Provide comprehensive training** for IT staff and end-users to ensure they can effectively use and manage cloud resources.",
      
      "## Conclusion",
      
      "Cloud migration is not a one-size-fits-all proposition. The most successful migrations are those that align with your organization's specific objectives, constraints, and capabilities. By understanding the various migration strategies available and following best practices, you can navigate your cloud journey with confidence and realize the full benefits of cloud computing."
    ],
    date: 'May 15, 2025',
    readTime: '8 min read',
    author: {
      name: 'Michael Chen',
      role: 'Cloud Solutions Architect',
      bio: 'Michael has over 12 years of experience in cloud architecture and migration. He has helped numerous Fortune 500 companies successfully transition to the cloud and optimize their infrastructure.',
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
    content: [
      "Artificial Intelligence (AI) has moved beyond the realm of science fiction and experimental technology to become a transformative force in business operations. Today, organizations across industries are leveraging AI to streamline processes, enhance decision-making, and create entirely new business models. Let's explore how AI is reshaping the business landscape in 2025 and beyond.",
      
      "## The Evolution of AI in Business",
      
      "AI has come a long way from simple rule-based automation. Modern AI systems can learn from data, adapt to new inputs, and perform tasks that traditionally required human intelligence. This evolution has expanded AI's potential applications in business, from basic process automation to complex decision-making and predictive analytics.",
      
      "Key milestones in AI's business evolution include:",
      "- Early automation of repetitive tasks",
      "- Development of natural language processing capabilities",
      "- Advanced pattern recognition and anomaly detection",
      "- Predictive and prescriptive analytics",
      "- Autonomous decision-making systems",
      
      "## AI's Impact Across Business Functions",
      
      "AI is transforming virtually every aspect of business operations. Here's how it's making an impact across key business functions:",
      
      "### Customer Experience",
      "AI-powered chatbots and virtual assistants provide 24/7 customer support, handling routine inquiries and freeing human agents to focus on complex issues. Personalization engines analyze customer data to deliver tailored recommendations and experiences, increasing engagement and conversion rates.",
      
      "### Sales and Marketing",
      "AI is revolutionizing how businesses identify and engage prospects. Predictive lead scoring helps sales teams prioritize the most promising opportunities, while AI-powered content creation tools generate personalized marketing materials at scale. Customer journey analytics provide insights into behavior patterns and preferences, enabling more effective targeting and messaging.",
      
      "### Operations and Supply Chain",
      "In operations, AI is streamlining processes through intelligent automation and predictive maintenance. AI algorithms can forecast demand with unprecedented accuracy, optimize inventory levels, and identify potential disruptions before they impact the business. Autonomous robots and vehicles are transforming warehousing and logistics, reducing costs and improving efficiency.",
      
      "### Human Resources",
      "AI is transforming talent acquisition through automated resume screening and candidate matching. Employee engagement platforms use natural language processing to analyze sentiment and identify potential issues before they lead to turnover. Learning and development systems create personalized training paths based on individual skills gaps and career aspirations.",
      
      "### Finance and Accounting",
      "In finance, AI systems are automating routine transactions, detecting fraudulent activities, and optimizing cash flow management. Intelligent forecasting tools provide more accurate financial projections, while risk management systems identify potential issues before they impact the bottom line.",
      
      "## Emerging AI Technologies Reshaping Business",
      
      "Several cutting-edge AI technologies are having a particularly significant impact on business operations:",
      
      "### Generative AI",
      "Generative AI, exemplified by models like GPT-4 and DALL-E, can create content ranging from text and images to code and product designs. This technology is enabling businesses to automate content creation, accelerate product development, and generate new creative ideas at scale.",
      
      "### Reinforcement Learning",
      "Reinforcement learning enables AI systems to learn through trial and error, optimizing processes in complex, dynamic environments. In business, this technology is being applied to resource allocation, pricing optimization, and autonomous decision-making systems.",
      
      "### Computer Vision",
      "Advanced computer vision systems can analyze visual data from cameras and sensors, enabling applications from quality control in manufacturing to customer behavior analysis in retail. These systems can operate continuously, identifying patterns and anomalies that might escape human attention.",
      
      "### Federated Learning",
      "Federated learning allows AI models to be trained across multiple devices or servers without exchanging the underlying data. This approach addresses privacy concerns and regulatory requirements while still enabling powerful AI applications.",
      
      "## Implementing AI: Challenges and Best Practices",
      
      "Despite its potential, implementing AI successfully requires addressing several challenges:",
      
      "### Data Quality and Accessibility",
      "AI systems are only as good as the data they're trained on. Organizations must ensure they have access to high-quality, relevant data and that this data is properly structured and governed.",
      
      "### Ethical Considerations",
      "AI raises important ethical questions around privacy, bias, transparency, and accountability. Businesses must develop clear ethical guidelines and governance frameworks to ensure their AI systems operate responsibly.",
      
      "### Talent and Skills Gap",
      "The demand for AI expertise far exceeds the supply of qualified professionals. Organizations must develop strategies to attract and retain AI talent while also upskilling existing employees.",
      
      "### Integration with Existing Systems",
      "Integrating AI with legacy systems and processes can be challenging. Successful implementation often requires rethinking workflows and organizational structures.",
      
      "Best practices for AI implementation include:",
      
      "1. **Start with clearly defined business problems** rather than implementing AI for its own sake.",
      "2. **Adopt an incremental approach**, beginning with pilot projects that demonstrate value before scaling.",
      "3. **Invest in data infrastructure** to ensure AI systems have access to high-quality, relevant data.",
      "4. **Develop clear governance frameworks** addressing ethics, privacy, and compliance.",
      "5. **Foster collaboration** between technical experts and business stakeholders to ensure AI initiatives align with strategic objectives.",
      
      "## The Future of AI in Business",
      
      "Looking ahead, we can expect AI to become even more deeply integrated into business operations. Key trends to watch include:",
      
      "- **AI-human collaboration**, with systems designed to augment human capabilities rather than replace them",
      "- **Democratization of AI** through no-code and low-code platforms that make AI accessible to non-technical users",
      "- **Industry-specific AI solutions** tailored to the unique challenges and opportunities in different sectors",
      "- **Embedded AI** that integrates intelligence directly into products, services, and business processes",
      "- **Explainable AI** that provides transparency into how decisions are made, building trust and enabling oversight",
      
      "## Conclusion",
      
      "AI is no longer just a competitive advantage—it's becoming a business necessity. Organizations that effectively harness AI's capabilities can streamline operations, enhance decision-making, and create new value for customers and stakeholders. By addressing challenges around data, ethics, talent, and integration, businesses can unlock the full transformative potential of AI and position themselves for success in an increasingly AI-driven world."
    ],
    date: 'May 2, 2025',
    readTime: '6 min read',
    author: {
      name: 'Sarah Williams',
      role: 'AI Solutions Lead',
      bio: 'Sarah specializes in implementing AI solutions that deliver tangible business results. With a background in both computer science and business administration, she bridges the gap between technical capabilities and business needs.',
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
    content: [
      "The cybersecurity landscape continues to evolve at a rapid pace, with threat actors developing increasingly sophisticated methods to breach defenses and compromise systems. As we move through 2025, organizations must stay vigilant and adapt their security strategies to address emerging threats. This article explores the most significant cybersecurity challenges facing businesses today and provides practical guidance on strengthening your security posture.",
      
      "## The Evolving Threat Landscape",
      
      "Several factors are driving the evolution of cybersecurity threats in 2025:",
      
      "- **Expanding attack surface** due to remote work, IoT devices, and cloud adoption",
      "- **Increasing sophistication** of threat actors, including nation-states and organized criminal groups",
      "- **Monetization of cybercrime** through ransomware-as-a-service and other criminal business models",
      "- **Growing interdependence** of supply chains and digital ecosystems",
      "- **Automation of attacks** using artificial intelligence and machine learning",
      
      "Understanding these drivers helps us anticipate and prepare for the specific threats they enable.",
      
      "## Top Cybersecurity Threats in 2025",
      
      "### 1. Advanced Ransomware Operations",
      
      "Ransomware continues to evolve from simple encryption attacks to multi-faceted extortion operations. Modern ransomware groups employ a triple extortion model: encrypting data, threatening to leak sensitive information, and launching DDoS attacks against victims who refuse to pay.",
      
      "These operations have become highly sophisticated, with specialized roles within criminal organizations handling different aspects of attacks—from initial access brokers to negotiators and technical operators. The rise of Ransomware-as-a-Service (RaaS) has lowered barriers to entry, allowing less technical criminals to launch devastating attacks.",
      
      "**Defense strategies:**",
      "- Implement robust backup solutions with offline copies",
      "- Adopt a zero-trust security model",
      "- Develop and regularly test an incident response plan specifically for ransomware",
      "- Consider ransomware-specific cyber insurance coverage",
      
      "### 2. AI-Powered Attacks",
      
      "Artificial intelligence is being weaponized by threat actors to create more effective and efficient attacks. AI enables:",
      
      "- **Automated vulnerability discovery** that can identify weak points in systems faster than human analysts",
      "- **Sophisticated phishing campaigns** using AI-generated content that mimics legitimate communications with unprecedented accuracy",
      "- **Behavior-based evasion techniques** that can adapt to security controls in real-time",
      "- **Voice and video deepfakes** for social engineering attacks targeting executives and key personnel",
      
      "**Defense strategies:**",
      "- Deploy AI-based security solutions to fight fire with fire",
      "- Implement continuous security awareness training focusing on deepfake detection",
      "- Establish out-of-band verification procedures for sensitive requests",
      "- Develop formal authorization protocols for financial transactions",
      
      "### 3. Supply Chain and Third-Party Compromises",
      
      "After several high-profile supply chain attacks in recent years, this attack vector has become increasingly common. By compromising a single supplier, attackers can gain access to hundreds or thousands of downstream organizations.",
      
      "Modern supply chain attacks target:",
      "- Software dependencies and open-source components",
      "- Managed service providers with privileged access to multiple clients",
      "- Hardware components and firmware",
      "- Cloud service providers and their infrastructure",
      
      "**Defense strategies:**",
      "- Implement rigorous third-party risk management processes",
      "- Use software composition analysis tools to identify vulnerable components",
      "- Segregate networks and apply least-privilege access for third-party connections",
      "- Conduct regular security assessments of critical suppliers",
      
      "### 4. Quantum Computing Threats",
      
      "While full-scale quantum computers capable of breaking current encryption standards aren't yet operational, the threat they pose is driving action today. Organizations must prepare for a 'harvest now, decrypt later' scenario where attackers collect encrypted data today to decrypt it once quantum computing becomes viable.",
      
      "**Defense strategies:**",
      "- Begin transitioning to quantum-resistant cryptographic algorithms",
      "- Implement crypto-agility in systems to enable rapid updates when needed",
      "- Assess which data would remain sensitive in the 5-10 year timeframe",
      "- Participate in standards bodies defining post-quantum cryptography",
      
      "### 5. IoT and Operational Technology (OT) Attacks",
      
      "The proliferation of IoT devices in both consumer and industrial settings has created new attack vectors. Critical infrastructure, manufacturing systems, and smart buildings are increasingly vulnerable to attacks that target operational technology.",
      
      "**Defense strategies:**",
      "- Implement network segmentation between IT and OT environments",
      "- Maintain updated inventories of all connected devices",
      "- Deploy security monitoring specific to OT protocols and behaviors",
      "- Develop incident response plans for scenarios involving physical systems",
      
      "## Building Organizational Resilience",
      
      "Beyond addressing specific threats, organizations need to build overall cybersecurity resilience through a comprehensive approach:",
      
      "### Zero Trust Architecture",
      
      "The zero trust model—'never trust, always verify'—has moved from theoretical concept to practical necessity. Key principles include:",
      
      "- Verifying identity and device health for every access request",
      "- Implementing least-privilege access controls",
      "- Continuously monitoring and validating access",
      "- Encrypting all data in transit and at rest",
      "- Assuming compromise and segmenting networks accordingly",
      
      "### Security by Design",
      
      "Incorporating security from the beginning of any project is more effective and cost-efficient than bolting it on later. This approach includes:",
      
      "- Threat modeling during design phases",
      "- Secure coding practices and code reviews",
      "- Regular penetration testing and vulnerability assessments",
      "- Security requirements in project planning and acceptance criteria",
      
      "### Human-Centric Security",
      
      "Despite technological advances, humans remain both the greatest vulnerability and the strongest defense in cybersecurity:",
      
      "- Implement continuous, context-aware security training",
      "- Foster a positive security culture that encourages reporting",
      "- Design security controls with user experience in mind",
      "- Develop clear security policies that balance protection with productivity",
      
      "### Cyber Resilience Planning",
      
      "Accepting that breaches are inevitable, organizations must plan for resilience and recovery:",
      
      "- Develop detailed incident response plans covering various scenarios",
      "- Conduct regular tabletop exercises and simulations",
      "- Implement business continuity and disaster recovery plans",
      "- Establish relationships with external incident response experts before they're needed",
      
      "## Regulatory and Compliance Considerations",
      
      "The regulatory landscape continues to evolve, with new requirements emerging globally:",
      
      "- Data protection regulations are becoming more stringent and widespread",
      "- Industry-specific regulations are adding detailed cybersecurity requirements",
      "- Mandatory breach reporting timelines are shortening",
      "- Supply chain security requirements are being codified into regulations",
      
      "Organizations must stay informed about regulatory changes and implement compliance programs that align with their security strategies.",
      
      "## Conclusion",
      
      "The cybersecurity threats of 2025 are characterized by greater sophistication, automation, and potential impact. By understanding these emerging threats and implementing a comprehensive, layered defense strategy, organizations can reduce their risk and build resilience against inevitable attacks.",
      
      "The most successful approaches will combine advanced security technologies with well-trained people and robust processes, all supported by strong leadership commitment to cybersecurity as a business priority. In this environment, security is not just the responsibility of the IT department but a critical component of overall business strategy and operations."
    ],
    date: 'April 20, 2025',
    readTime: '10 min read',
    author: {
      name: 'David Thompson',
      role: 'Cybersecurity Director',
      bio: 'David has spent over 15 years in cybersecurity, helping organizations protect their critical assets from evolving threats. He holds CISSP and CISM certifications and regularly speaks at industry conferences.',
      image: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
    },
    image: 'https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    category: 'Cybersecurity',
    tags: ['Cybersecurity', 'Ransomware', 'Data Protection', 'Zero Trust']
  }
];

const BlogPostPage: React.FC = () => {
  const { postId } = useParams<{ postId: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const foundPost = blogPosts.find(p => p.id === postId);
    if (foundPost) {
      setPost(foundPost);
      
      // Find related posts (same category or shared tags)
      const related = blogPosts
        .filter(p => p.id !== postId)
        .filter(p => 
          p.category === foundPost.category || 
          p.tags.some(tag => foundPost.tags.includes(tag))
        )
        .slice(0, 3);
      
      setRelatedPosts(related);
    }
    window.scrollTo(0, 0);
  }, [postId]);

  if (!post) {
    return (
      <div className="pt-24">
        <Section background="white" spacing="xl">
          <div className="text-center">
            <h1 className="text-3xl font-bold mb-6">Blog Post Not Found</h1>
            <p className="mb-8">The article you're looking for doesn't exist or has been moved.</p>
            <Button to="/blog" variant="primary">View All Articles</Button>
          </div>
        </Section>
      </div>
    );
  }

  // Convert markdown-like content to JSX
  const renderContent = (content: string) => {
    // Split content by line breaks
    const lines = content.split('\n');
    
    return lines.map((line, index) => {
      // Headers (## Title)
      if (line.startsWith('## ')) {
        return <h2 key={index} className="text-2xl font-bold mt-8 mb-4">{line.replace('## ', '')}</h2>;
      }
      
      // Subheaders (### Title)
      if (line.startsWith('### ')) {
        return <h3 key={index} className="text-xl font-semibold mt-6 mb-3">{line.replace('### ', '')}</h3>;
      }
      
      // Lists (- Item)
      if (line.startsWith('- ')) {
        return (
          <li key={index} className="ml-6 mb-2 flex items-start">
            <span className="text-accent-500 mr-2">•</span>
            <span>{line.replace('- ', '')}</span>
          </li>
        );
      }
      
      // Numbered lists (1. Item)
      if (/^\d+\.\s/.test(line)) {
        const number = line.match(/^\d+/)?.[0];
        const text = line.replace(/^\d+\.\s/, '');
        return (
          <div key={index} className="ml-6 mb-2 flex items-start">
            <span className="font-bold mr-2">{number}.</span>
            <span>{text}</span>
          </div>
        );
      }
      
      // Empty lines
      if (line.trim() === '') {
        return <div key={index} className="h-4"></div>;
      }
      
      // Regular paragraphs
      return <p key={index} className="mb-4">{line}</p>;
    });
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <Section background="primary" spacing="lg">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex justify-center mb-6">
            <span className="inline-block px-3 py-1 bg-accent-500 text-white text-sm font-medium rounded-full">
              {post.category}
            </span>
          </div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            {post.title}
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-wrap justify-center items-center text-primary-100 mb-8 gap-4"
          >
            <div className="flex items-center">
              <Calendar size={16} className="mr-2" />
              <span>{post.date}</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center">
              <Clock size={16} className="mr-2" />
              <span>{post.readTime}</span>
            </div>
            <span className="hidden md:inline">•</span>
            <div className="flex items-center">
              <User size={16} className="mr-2" />
              <span>{post.author.name}</span>
            </div>
          </motion.div>
        </div>
      </Section>
      
      {/* Featured Image */}
      <div className="relative -mt-8">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-xl overflow-hidden shadow-xl"
          >
            <img 
              src={post.image}
              alt={post.title}
              className="w-full h-auto max-h-[500px] object-cover"
            />
          </motion.div>
        </div>
      </div>
      
      {/* Blog Content */}
      <Section background="white" spacing="xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="prose prose-lg max-w-none text-neutral-700">
              {post.content.map((paragraph, index) => (
                <div key={index}>
                  {renderContent(paragraph)}
                </div>
              ))}
            </article>
            
            {/* Tags */}
            <div className="mt-12 pt-8 border-t border-neutral-200">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-medium">Tags:</span>
                {post.tags.map(tag => (
                  <Link
                    key={tag}
                    to={`/blog?tag=${tag}`}
                    className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-neutral-100 text-neutral-700 hover:bg-neutral-200 transition-colors"
                  >
                    <Tag size={14} className="mr-1" />
                    {tag}
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Share Links */}
            <div className="mt-8">
              <div className="flex flex-wrap items-center gap-3">
                <span className="font-medium">Share:</span>
                <div className="flex space-x-3">
                  <a 
                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors"
                    aria-label="Share on Twitter"
                  >
                    <Twitter size={16} />
                  </a>
                  <a 
                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors"
                    aria-label="Share on Facebook"
                  >
                    <Facebook size={16} />
                  </a>
                  <a 
                    href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}&title=${encodeURIComponent(post.title)}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors"
                    aria-label="Share on LinkedIn"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a 
                    href={`mailto:?subject=${encodeURIComponent(post.title)}&body=${encodeURIComponent(window.location.href)}`}
                    className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-700 hover:bg-neutral-200 transition-colors"
                    aria-label="Share via Email"
                  >
                    <Mail size={16} />
                  </a>
                </div>
              </div>
            </div>
            
            {/* Author Bio */}
            <div className="mt-12 p-6 bg-neutral-50 rounded-xl">
              <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                <div className="flex-shrink-0">
                  <img 
                    src={post.author.image}
                    alt={post.author.name}
                    className="w-20 h-20 rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">{post.author.name}</h3>
                  <p className="text-accent-500 font-medium mb-3">{post.author.role}</p>
                  <p className="text-neutral-600">
                    {post.author.bio}
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-8">
              {/* Table of Contents */}
              <div className="bg-neutral-50 p-6 rounded-xl">
                <h3 className="text-lg font-semibold mb-4">Table of Contents</h3>
                <nav className="space-y-3">
                  {post.content
                    .join('\n')
                    .split('\n')
                    .filter(line => line.startsWith('## ') || line.startsWith('### '))
                    .map((line, index) => {
                      const isSubheader = line.startsWith('### ');
                      const title = line.replace(/^##\s|^###\s/, '');
                      
                      return (
                        <a 
                          key={index}
                          href={`#${title.toLowerCase().replace(/\s+/g, '-')}`}
                          className={`block text-neutral-700 hover:text-primary-900 transition-colors ${isSubheader ? 'pl-4 text-sm' : 'font-medium'}`}
                        >
                          {title}
                        </a>
                      );
                    })}
                </nav>
              </div>
              
              {/* Related Posts */}
              {relatedPosts.length > 0 && (
                <div>
                  <h3 className="text-lg font-semibold mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {relatedPosts.map((relatedPost) => (
                      <Link 
                        key={relatedPost.id}
                        to={`/blog/${relatedPost.id}`}
                        className="flex items-start group"
                      >
                        <div className="w-20 h-20 flex-shrink-0 rounded-md overflow-hidden mr-3">
                          <img 
                            src={relatedPost.image} 
                            alt={relatedPost.title}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <h4 className="text-sm font-medium line-clamp-2 group-hover:text-primary-900 transition-colors">
                            {relatedPost.title}
                          </h4>
                          <p className="text-xs text-neutral-500 mt-1">{relatedPost.date}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>
              )}
              
              {/* Categories */}
              <div>
                <h3 className="text-lg font-semibold mb-4">Categories</h3>
                <div className="space-y-2">
                  {Array.from(new Set(blogPosts.map(p => p.category))).map((category) => (
                    <Link
                      key={category}
                      to={`/blog?category=${category}`}
                      className={`block py-2 px-3 rounded-lg transition-colors ${
                        category === post.category
                          ? 'bg-primary-100 text-primary-900 font-medium'
                          : 'text-neutral-700 hover:bg-neutral-100'
                      }`}
                    >
                      {category}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      
      {/* More Articles Section */}
      <Section background="light" spacing="lg">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">More Articles</h2>
          <p className="text-lg text-neutral-600 max-w-2xl mx-auto">
            Explore more insights and updates from our experts
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogPosts
            .filter(p => p.id !== postId)
            .slice(0, 3)
            .map((post, index) => (
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
                        className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="inline-block px-3 py-1 bg-accent-500 text-white text-xs font-medium rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    
                    <div className="p-6">
                      <div className="flex items-center text-sm text-neutral-500 mb-3">
                        <Calendar size={14} className="mr-1" />
                        <span>{post.date}</span>
                      </div>
                      
                      <h3 className="text-xl font-semibold mb-3 group-hover:text-primary-700 transition-colors line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <div className="flex items-center text-primary-900 font-medium group-hover:text-primary-700 transition-colors">
                        <span>Read article</span>
                        <ArrowRight size={16} className="ml-2 transition-transform group-hover:translate-x-1" />
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
        </div>
        
        <div className="text-center mt-12">
          <Button 
            to="/blog" 
            variant="primary"
            icon={<ArrowRight />}
            iconPosition="right"
          >
            View All Articles
          </Button>
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

export default BlogPostPage;