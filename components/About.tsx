import Image from 'next/image';
import { Heading, Text } from './ui';

export default function About() {
  return (
    <section id="about" className="py-16 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <Heading level={2} className="mb-4">
            About <span className="gradient-text">Arnav</span>
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-6 gap-6 md:[grid-auto-rows:180px]">
            {/* Fact 1 - Shinchan Fan - Card (2x2) */}
            <div className="glass rounded-2xl p-8 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-visible border border-ocean-light/20 md:col-span-2 md:row-span-2 md:min-h-0">
              <div className="relative z-10">
                <Text variant="primary" className="font-semibold mb-3 text-2xl">Shinchan Superfan</Text>
                <Text variant="secondary" className="leading-relaxed text-base mb-4">
                  Huge fan of Shinchan! His mischievous humor and life philosophy never get old. 
                  &ldquo;Action Kamen&rdquo; is my childhood hero too! 🦸‍♂️
                </Text>
              </div>
              <div className="absolute bottom-30 md:bottom-10 right-2 w-20 h-20 md:w-35 md:h-35">
                <Image 
                  src="/shinchan-sprite.png" 
                  alt="Shinchan" 
                  fill
                  sizes="(max-width: 768px) 80px, 140px"
                  className="object-contain"
                />
              </div>
            </div>

            {/* Fact 3 - Poetry - Card (2x2) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:col-span-2 md:row-span-2 md:min-h-0">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full opacity-10 group-hover:opacity-15 transition-opacity">
                <Image 
                  src="/parchment.png" 
                  alt="Parchment" 
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-contain"
                />
              </div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-5xl mb-3">📝</div>
                <Text variant="primary" className="font-semibold mb-2 text-lg">Poet at Heart</Text>
                <Text variant="secondary" className="leading-relaxed mb-4">
                  I enjoy expressing myself through poetry, weaving words into emotions and stories.
                </Text>
             
              </div>
            </div>

            {/* Fact 2 - Height - Tall Card (2x3) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:col-span-2 md:row-span-3 md:min-h-0">
              <div className="relative z-10 h-full flex flex-col items-center justify-center gap-6">
                <div className="relative w-full h-64 md:h-2/3">
                  <Image 
                    src="/height.png" 
                    alt="Height" 
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <Text variant="accent" className="font-bold text-5xl mb-2">5&apos;10&rdquo;</Text>
                  <Text variant="muted" size="sm">Perfect for reaching keyboards and tea cups</Text>
                </div>
              </div>
            </div>

            {/* Fact 4 - Years Coding - Small Card (1x1) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:min-h-0">
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">💻</div>
              <div className="relative z-10">
                <Text variant="accent" className="font-bold text-4xl mb-2">15</Text>
                <Text variant="primary" className="font-semibold mb-1">Years Ago</Text>
                <Text variant="muted" size="sm">I built my first website</Text>
              </div>
            </div>

            {/* Fact 5 - Chai - Small Card (1x1) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:min-h-0">
              <div className="absolute bottom-0 right-0 w-24 h-24 opacity-30 group-hover:opacity-50 transition-opacity">
                <Image 
                  src="/chai-cup.png" 
                  alt="Chai" 
                  fill
                  sizes="96px"
                  className="object-contain"
                />
              </div>
              <div className="relative z-10">
                <Text variant="primary" className="font-semibold mb-1">Chai Lover</Text>
                <Text variant="muted" size="sm">Fueling coding sessions, one cup at a time</Text>
              </div>
            </div>

            {/* Fact 6 - Ocean Name - Wide Card (3x1) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:col-span-2 md:min-h-0">
              <div className="absolute top-0 right-0 w-40 h-40 opacity-15 group-hover:opacity-30 transition-opacity">
                <Image 
                  src="/wave.png" 
                  alt="Wave" 
                  fill
                  sizes="160px"
                  className="object-contain"
                />
              </div>
              <div className="relative z-10 flex items-center gap-6">
                <div>
                  <Text variant="accent" className="font-bold text-4xl mb-1">अर्णव</Text>
                  <Text variant="primary" className="font-semibold mb-1 text-lg">Ocean-Themed Name</Text>
                  <Text variant="muted" size="sm">Sanskrit for &ldquo;ocean&rdquo; - Vast, deep, and full of mysteries</Text>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div>
          <Heading level={3} className="mb-8 text-center">
            What I <span className="gradient-text">Value</span>
          </Heading>
          
          <div className="grid md:grid-cols-4 gap-6">
            <div className="glass-strong rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">⚡</div>
              <Heading level={4} className="mb-3">Citius</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Faster is better. I prioritize efficiency and performance in everything I build.
              </Text>
            </div>

            <div className="glass-strong rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">🧗</div>
              <Heading level={4} className="mb-3">Altius</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Love to scale new heights. I am driven by challenges that push me beyond my limits.
              </Text>
            </div>

            <div className="glass-strong rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">🦾</div>
              <Heading level={4} className="mb-3">Fortius</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Strength comes from resilience. Persisting through tough times is what matters.
              </Text>
            </div>
              
              <div className="glass-strong rounded-2xl p-8 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">🤝</div>
              <Heading level={4} className="mb-3">Communiter</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Together we thrive. I am a team player who believes in playing for the front of the jersey. 
              </Text>
              
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
