import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../common/Logo';

interface NavItemProps {
  to: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

const NavItem: React.FC<NavItemProps> = ({ to, children, onClick, className }) => {
  return (
    <NavLink
      to={to}
      onClick={onClick}
      className={({ isActive }) => 
        `px-3 py-2 rounded-md text-base font-medium transition-colors duration-200 ${
          isActive ? 'nav-link-active' : 'nav-link'
        } ${className || ''}`
      }
    >
      {children}
    </NavLink>
  );
};

interface DropdownItemProps {
  label: string;
  items: {
    name: string;
    to: string;
    description?: string;
  }[];
  onItemClick?: () => void;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ label, items, onItemClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative group">
      <button
        className="px-3 py-2 rounded-md text-base font-medium nav-link flex items-center gap-1"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        {label}
        <ChevronDown size={16} className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      
      <div 
        className={`absolute left-0 mt-1 w-64 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition-all duration-200 z-50 ${
          isOpen ? 'opacity-100 transform translate-y-0' : 'opacity-0 pointer-events-none transform -translate-y-2'
        }`}
      >
        <div className="py-2">
          {items.map((item) => (
            <Link
              key={item.name}
              to={item.to}
              className="block px-4 py-3 hover:bg-primary-50 transition-colors duration-100"
              onClick={() => {
                setIsOpen(false);
                onItemClick && onItemClick();
              }}
            >
              <span className="block text-sm font-medium text-primary-900">{item.name}</span>
              {item.description && (
                <span className="block mt-1 text-xs text-neutral-500">{item.description}</span>
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const services = [
    {
      name: 'IT Consultancy',
      to: '/services/it-consultancy',
      description: 'Strategic technology planning and advice',
    },
    {
      name: 'Staffing Solutions',
      to: '/services/staffing',
      description: 'Expert IT talent acquisition and management',
    },
    {
      name: 'Software Development',
      to: '/services/software-development',
      description: 'Custom software solutions for your business',
    },
    {
      name: 'Web Development',
      to: '/services/web-development',
      description: 'Professional websites and web applications',
    },
    {
      name: 'AI Solutions',
      to: '/services/ai-solutions',
      description: 'Custom AI tools and implementation',
    },
  ];

  return (
    <nav 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0" onClick={closeMenu}>
            <Logo />
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:space-x-1">
            <NavItem to="/">Home</NavItem>
            <DropdownItem label="Services" items={services} />
            <NavItem to="/case-studies">Case Studies</NavItem>
            <NavItem to="/about">About Us</NavItem>
            <NavItem to="/blog">Blog</NavItem>
            <NavItem to="/contact">Contact</NavItem>
            <Link 
              to="/contact" 
              className="ml-4 btn btn-primary"
            >
              Get Started
            </Link>
          </div>
          
          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 hover:text-primary-900 hover:bg-primary-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
              aria-expanded={isMenuOpen}
              onClick={toggleMenu}
            >
              <span className="sr-only">{isMenuOpen ? 'Close menu' : 'Open menu'}</span>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div 
        className={`lg:hidden transition-all duration-300 ease-in-out ${
          isMenuOpen 
            ? 'max-h-screen opacity-100 visible bg-white shadow-lg'
            : 'max-h-0 opacity-0 invisible'
        } overflow-hidden`}
      >
        <div className="container-custom py-4 space-y-2">
          <NavItem to="/" onClick={closeMenu}>Home</NavItem>
          <div className="border-t border-neutral-200 pt-2">
            <div className="pl-3 py-2 text-neutral-500 text-sm font-medium">Services</div>
            {services.map((service) => (
              <NavItem 
                key={service.name} 
                to={service.to} 
                onClick={closeMenu}
                className="pl-6 text-sm"
              >
                {service.name}
              </NavItem>
            ))}
          </div>
          <NavItem to="/case-studies" onClick={closeMenu}>Case Studies</NavItem>
          <NavItem to="/about" onClick={closeMenu}>About Us</NavItem>
          <NavItem to="/blog" onClick={closeMenu}>Blog</NavItem>
          <NavItem to="/contact" onClick={closeMenu}>Contact</NavItem>
          <div className="pt-4">
            <Link 
              to="/contact" 
              className="btn btn-primary w-full text-center"
              onClick={closeMenu}
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;