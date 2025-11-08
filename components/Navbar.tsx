'use client';

import { useState, useEffect } from 'react';
import { Button } from './ui';
import { ThemeToggle } from './ThemeToggle';

const navItems = [
  { name: 'Home', href: '#hero' },
  { name: 'About', href: '#about' },
  { name: 'Experience', href: '#experience' },
  { name: 'Projects', href: '#projects' },
  { name: 'Skills', href: '#skills' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out border ${
        isScrolled
          ? 'glass-strong shadow-lg shadow-ocean-blue/10 py-4 border-ocean-light/20'
          : 'bg-transparent py-6 border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between">
          <a
            href="#hero"
            className="text-2xl font-bold gradient-text font-[family-name:var(--font-plus-jakarta-sans)]"
          >
            AK
          </a>

          <div className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  activeSection === item.href.slice(1)
                    ? 'bg-ocean-blue/80 text-white'
                    : 'text-text-secondary hover:text-text-primary hover:bg-ocean-light/10'
                }`}
              >
                {item.name}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button 
              href="#contact" 
              variant="gradient" 
              gradientType="secondary"
              size="sm"
              className="hidden md:inline-flex"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
