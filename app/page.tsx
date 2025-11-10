import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Experience from '@/components/Experience';
import Projects from '@/components/Projects';
import Skills from '@/components/Skills';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-background via-background-secondary to-background relative overflow-hidden transition-colors duration-300">
      {/* Animated ocean waves at top */}
            {/* Subtle gradient orbs */}
      <div className="absolute top-1/4 right-1/4 w-[500px] h-[500px] rounded-full bg-gradient-to-br from-ocean-light/5 to-transparent blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/3 w-[400px] h-[400px] rounded-full bg-gradient-to-tr from-ocean-blue/3 to-transparent blur-3xl"></div>

      {/* Wave patterns at bottom with glowing edge */}
      <div className="absolute bottom-0 left-0 w-full h-32 opacity-40">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <defs>
            <linearGradient id="wave-gradient-2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0284c7" stopOpacity="0.6"/>
              <stop offset="50%" stopColor="#0ea5e9" stopOpacity="0.8"/>
              <stop offset="100%" stopColor="#0284c7" stopOpacity="0.6"/>
            </linearGradient>
            <filter id="glow">
              <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
              <feMerge>
                <feMergeNode in="coloredBlur"/>
                <feMergeNode in="SourceGraphic"/>
              </feMerge>
            </filter>
          </defs>
          <path 
            d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z" 
            fill="url(#wave-gradient-2)"
            filter="url(#glow)"
          >
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z;
                      M0,40 C200,10 400,70 600,40 C800,10 1000,70 1200,40 L1200,120 L0,120 Z;
                      M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50 L1200,120 L0,120 Z"/>
          </path>
          {/* Glowing top edge of wave */}
          <path 
            d="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50" 
            fill="none" 
            stroke="#0ea5e9" 
            strokeWidth="2"
            opacity="0.8"
            filter="url(#glow)"
          >
            <animate attributeName="d" dur="8s" repeatCount="indefinite"
              values="M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50;
                      M0,40 C200,10 400,70 600,40 C800,10 1000,70 1200,40;
                      M0,50 C200,80 400,20 600,50 C800,80 1000,20 1200,50"/>
          </path>
        </svg>
      </div>

      {/* Second wave layer for depth */}
      <div className="absolute bottom-0 left-0 w-full h-24 opacity-25">
        <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,70 C300,100 600,40 900,70 C1050,85 1150,60 1200,70 L1200,120 L0,120 Z" fill="#0ea5e9" fillOpacity="0.5">
            <animate attributeName="d" dur="12s" repeatCount="indefinite"
              values="M0,70 C300,100 600,40 900,70 C1050,85 1150,60 1200,70 L1200,120 L0,120 Z;
                      M0,60 C300,30 600,90 900,60 C1050,45 1150,80 1200,60 L1200,120 L0,120 Z;
                      M0,70 C300,100 600,40 900,70 C1050,85 1150,60 1200,70 L1200,120 L0,120 Z"/>
          </path>
        </svg>
      </div>
      
      <Navbar />
      <Hero />
      <Experience />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
