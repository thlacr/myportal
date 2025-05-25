import React from 'react';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  background?: 'white' | 'light' | 'primary' | 'secondary' | 'accent' | 'dark';
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl';
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  background = 'white',
  spacing = 'lg',
}) => {
  // Background styles
  const bgStyles = {
    white: 'bg-white',
    light: 'bg-neutral-50',
    primary: 'bg-primary-900 text-white',
    secondary: 'bg-secondary-900 text-white',
    accent: 'bg-accent-500 text-white',
    dark: 'bg-neutral-900 text-white',
  };
  
  // Spacing styles
  const spacingStyles = {
    none: 'py-0',
    sm: 'py-8 md:py-12',
    md: 'py-12 md:py-16',
    lg: 'py-16 md:py-24',
    xl: 'py-24 md:py-32',
  };
  
  return (
    <section 
      id={id}
      className={`${bgStyles[background]} ${spacingStyles[spacing]} ${className}`}
    >
      <div className="container-custom">
        {children}
      </div>
    </section>
  );
};

export default Section;