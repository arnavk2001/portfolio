'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Button } from './ui';
import { ThemeToggle } from './ThemeToggle';
import posthog from 'posthog-js';

const navItems = [
  { name: 'Home', href: '/#hero' },
  { name: 'Experience', href: '/#experience' },
  { name: 'Projects', href: '/#projects' },
  { name: 'Skills', href: '/#skills' },
  { name: 'Contact', href: '/#contact' },
  { name: 'About', href: '/about-me' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const pathname = usePathname();

  const handleHireMeClick = () => {
    const eventData = {
      button_type: 'hire_me',
      button_location: 'navbar',
    };
    if (process.env.NODE_ENV === 'development') {
      console.log('📊 PostHog Event [DEV]: hire_me_button_clicked', eventData);
    }
    posthog.capture('hire_me_button_clicked', eventData);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems
        .filter(item => item.href.startsWith('/#'))
        .map(item => item.href.slice(2));
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

  const isActive = (href: string) => {
    // If we're on /about-me page, only highlight the About link
    if (pathname === '/about-me') {
      return href === '/about-me';
    }
    // If we're on home page, highlight based on scroll position
    if (href.startsWith('/#')) {
      return activeSection === href.slice(2);
    }
    return false;
  };

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
              <Link
                key={item.name}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  isActive(item.href)
                    ? 'bg-ocean-blue/80 text-white'
                    : 'text-text-secondary hover:text-text-primary hover:bg-ocean-light/10'
                }`}
              >
                {item.name}
              </Link>
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
              onClick={handleHireMeClick}
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
