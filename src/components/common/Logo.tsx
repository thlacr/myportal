import React from 'react';
import { Terminal } from 'lucide-react';

interface LogoProps {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<LogoProps> = ({ variant = 'dark' }) => {
  const textColor = variant === 'light' ? 'text-white' : 'text-primary-900';
  
  return (
    <div className="flex items-center">
      <Terminal 
        size={28} 
        className={`${variant === 'light' ? 'text-accent-500' : 'text-primary-900'} mr-2`} 
      />
      <span className={`text-xl font-bold ${textColor}`}>THLACR</span>
    </div>
  );
};

export default Logo;