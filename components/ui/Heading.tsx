import { ReactNode, createElement } from 'react';

interface HeadingProps {
  children: ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
  gradient?: boolean;
  className?: string;
}

export function Heading({ 
  children, 
  level = 2, 
  gradient = false,
  className = '' 
}: HeadingProps) {
  const tag = `h${level}`;
  
  const sizeClasses = {
    1: 'text-6xl md:text-8xl',
    2: 'text-4xl md:text-5xl',
    3: 'text-3xl md:text-4xl',
    4: 'text-2xl md:text-3xl',
    5: 'text-xl md:text-2xl',
    6: 'text-lg md:text-xl',
  };

  const baseClasses = 'font-bold font-[family-name:var(--font-plus-jakarta-sans)]';
  const colorClasses = gradient ? 'gradient-text' : 'text-text-primary';

  return createElement(
    tag,
    { className: `${baseClasses} ${colorClasses} ${sizeClasses[level]} ${className}` },
    children
  );
}
