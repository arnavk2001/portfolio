'use client';

'use client';

import { Heading, Text, Button } from './ui';

export default function Hero() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center px-6 pt-32 md:pt-20 relative overflow-hidden">
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] left-[10%] w-2 h-2 bg-ocean-light/35 dark:bg-ocean-light/25 rounded-full animate-float shadow-md shadow-ocean-light/25" style={{ animationDuration: '6s', animationDelay: '0s' }}></div>
        <div className="absolute top-[30%] right-[15%] w-1.5 h-1.5 bg-ocean-light/40 dark:bg-ocean-light/30 rounded-full animate-float shadow-md shadow-ocean-light/30" style={{ animationDuration: '8s', animationDelay: '1s' }}></div>
        <div className="absolute top-[60%] left-[20%] w-2.5 h-2.5 bg-ocean-blue/30 dark:bg-ocean-blue/25 rounded-full animate-float shadow-md shadow-ocean-blue/25" style={{ animationDuration: '7s', animationDelay: '2s' }}></div>
        <div className="absolute top-[70%] right-[25%] w-1 h-1 bg-ocean-light/35 dark:bg-ocean-light/30 rounded-full animate-float shadow-sm shadow-ocean-light/30" style={{ animationDuration: '9s', animationDelay: '3s' }}></div>
        <div className="absolute top-[40%] left-[5%] w-1.5 h-1.5 bg-ocean-blue/35 dark:bg-ocean-blue/25 rounded-full animate-float shadow-sm shadow-ocean-blue/25" style={{ animationDuration: '5s', animationDelay: '1.5s' }}></div>
        <div className="absolute top-[50%] right-[8%] w-2 h-2 bg-ocean-light/35 dark:bg-ocean-light/25 rounded-full animate-float shadow-md shadow-ocean-light/25" style={{ animationDuration: '7.5s', animationDelay: '0.5s' }}></div>
      </div>

      {/* Single wave animation in background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-25 pointer-events-none">
        <svg className="absolute w-full h-full" viewBox="0 0 1200 800" preserveAspectRatio="none">
          <defs>
            <linearGradient id="heroWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.2" />
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#38bdf8" stopOpacity="0.2" />
            </linearGradient>
            <filter id="heroGlow">
              <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path fill="url(#heroWaveGradient)" filter="url(#heroGlow)" d="M0,300 Q150,350 300,300 Q450,250 600,300 Q750,350 900,300 Q1050,250 1200,300 L1200,0 L0,0 Z">
            <animate attributeName="d" dur="18s" repeatCount="indefinite"
              values="M0,300 Q150,350 300,300 Q450,250 600,300 Q750,350 900,300 Q1050,250 1200,300 L1200,0 L0,0 Z;
                      M0,300 Q150,250 300,300 Q450,350 600,300 Q750,250 900,300 Q1050,350 1200,300 L1200,0 L0,0 Z;
                      M0,300 Q150,350 300,300 Q450,250 600,300 Q750,350 900,300 Q1050,250 1200,300 L1200,0 L0,0 Z" />
          </path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <div className="mb-6 animate-fade-in">
          <span className="px-4 py-2 rounded-full bg-ocean-light/10 dark:bg-ocean-light/5 border border-ocean-light/30 text-ocean-blue text-sm font-medium">
            🌊 Welcome to my digital ocean
          </span>
        </div>
        
        <Heading level={1} gradient className="mb-6 animate-fade-in">
          Arnav Kulkarni
        </Heading>
        
        <Text size="2xl" variant="primary" className="mb-4 animate-fade-in-delay font-medium">
          Software Engineer <span className="text-ocean-light">×</span> Full-Stack Developer
        </Text>
        
        <Text size="base" variant="muted" className="mb-8 animate-fade-in-delay italic">
          अर्णव | Sanskrit: Ocean, Sea
        </Text>
        
        <Text size="xl" variant="secondary" className="mb-12 max-w-3xl mx-auto animate-fade-in-delay-2 leading-relaxed">
          I am a software developer and machine learning enthusiast with hands-on experience in research, systems engineering, On-device deep learning, and Generative AI. I am excited to contribute to innovative projects that make a meaningful impact.
        </Text>
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-delay-3">
          <Button href="#projects" variant="gradient" gradientType="primary" size="lg">
            <span>Dive Into My Work</span>
            <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </Button>
          <Button href="#contact" variant="outline" size="lg">
            Get in Touch
          </Button>
        </div>        <div className="mt-16 flex justify-center gap-6 animate-fade-in-delay-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-ocean-light transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-ocean-light transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-text-secondary hover:text-ocean-light transition-all transform hover:scale-110">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </a>
        </div>
      </div>

      {/* Scroll indicator with wave */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
