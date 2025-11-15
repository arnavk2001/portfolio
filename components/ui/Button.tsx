import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'solid' | 'gradient' | 'outline' | 'ghost';
  gradientType?: 'primary' | 'secondary' | 'accent' | 'complementary' | 'orange' | 'purple' | 'magenta';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  onClick?: () => void;
}

export function Button({ 
  children, 
  href,
  variant = 'solid',
  gradientType = 'primary',
  size = 'md',
  className = '',
  onClick
}: ButtonProps) {
  const baseClasses = 'font-semibold rounded-xl transition-all duration-300 transform hover:scale-105 inline-flex items-center gap-2';
  
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const variantClasses = {
    solid: 'bg-ocean-blue hover:bg-ocean-dark text-white shadow-sm hover:shadow-md hover:shadow-ocean-light/20',
    gradient: (() => {
      const gradients = {
        primary: 'bg-gradient-to-r from-sky-600 via-sky-500 to-sky-600 animate-gradient',
        secondary: 'bg-gradient-to-r from-sky-700 via-sky-600 to-sky-500 animate-gradient-xy',
        accent: 'bg-gradient-to-r from-sky-500 via-sky-400 to-sky-500 animate-gradient',
        complementary: 'bg-gradient-to-r from-orange-500 via-orange-400 to-yellow-400 animate-gradient',
        orange: 'bg-gradient-to-r from-orange-600 via-orange-500 to-orange-400 animate-gradient',
        purple: 'bg-gradient-to-r from-purple-600 via-purple-500 to-purple-400 animate-gradient',
        magenta: 'bg-gradient-to-r from-pink-600 via-pink-500 to-pink-400 animate-gradient',
      };
      return `${gradients[gradientType]} text-white shadow-sm hover:shadow-md hover:shadow-ocean-light/20`;
    })(),
    outline: 'glass-strong hover:bg-ocean-light/10 text-text-primary border-ocean-light/20 hover:border-ocean-light/50 shadow-sm hover:shadow-md',
    ghost: 'text-text-secondary hover:text-text-primary hover:bg-ocean-light/5',
  };

  const classes = `${baseClasses} ${sizeClasses[size]} ${variantClasses[variant]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
