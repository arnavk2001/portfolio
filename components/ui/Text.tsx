import { ReactNode } from 'react';

interface TextProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'muted' | 'accent';
  size?: 'sm' | 'base' | 'lg' | 'xl' | '2xl';
  className?: string;
  as?: 'p' | 'span' | 'div';
}

export function Text({ 
  children, 
  variant = 'primary', 
  size = 'base',
  className = '',
  as: Component = 'p'
}: TextProps) {
  const variantClasses = {
    primary: 'text-text-primary',
    secondary: 'text-text-secondary',
    muted: 'text-text-muted',
    accent: 'text-ocean-light',
  };

  const sizeClasses = {
    sm: 'text-sm',
    base: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
  };

  return (
    <Component className={`${variantClasses[variant]} ${sizeClasses[size]} ${className}`}>
      {children}
    </Component>
  );
}
