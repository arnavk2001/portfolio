import Image from 'next/image';
import { Heading, Text } from './ui';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-5xl mx-auto">
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
                  className="object-contain"
                />
              </div>
            </div>

            {/* Fact 3 - Poetry - Card (2x2) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:col-span-2 md:row-span-2 md:min-h-0">
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">✍️</div>
              <div className="relative z-10 h-full flex flex-col justify-center">
                <div className="text-5xl mb-3">📝</div>
                <Text variant="primary" className="font-semibold mb-2 text-lg">Poet at Heart</Text>
                <Text variant="secondary" className="leading-relaxed mb-4">
                  I write poems to express thoughts that code can&apos;t capture. 
                  Words flow like water, creating ripples of emotion.
                </Text>
                <Text variant="muted" size="sm" className="italic">
                  &ldquo;Debugging code by day, crafting verses by night&rdquo; ✨
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
                    className="object-contain"
                  />
                </div>
                <div className="flex flex-col items-center text-center">
                  <Text variant="accent" className="font-bold text-5xl mb-2">5&apos;10&rdquo;</Text>
                  <Text variant="muted" size="sm">Perfect for reaching keyboards and coffee mugs</Text>
                </div>
              </div>
            </div>

            {/* Fact 4 - Years Coding - Small Card (1x1) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:min-h-0">
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">💻</div>
              <div className="relative z-10">
                <Text variant="accent" className="font-bold text-4xl mb-2">5+</Text>
                <Text variant="primary" className="font-semibold mb-1">Years Coding</Text>
                <Text variant="muted" size="sm">Building things since high school</Text>
              </div>
            </div>

            {/* Fact 5 - Coffee - Small Card (1x1) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:min-h-0">
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">☕</div>
              <div className="relative z-10">
                <Text variant="accent" className="font-bold text-4xl mb-2">∞</Text>
                <Text variant="primary" className="font-semibold mb-1">Cups of Coffee</Text>
                <Text variant="muted" size="sm">Fueling late-night coding sessions</Text>
              </div>
            </div>

            {/* Fact 6 - Ocean Name - Wide Card (3x1) */}
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group relative overflow-hidden border border-ocean-light/20 md:col-span-2 md:min-h-0">
              <div className="absolute top-0 right-0 text-8xl opacity-5 group-hover:opacity-10 transition-opacity">🌊</div>
              <div className="relative z-10 flex items-center gap-6">
                <div className="text-6xl">🌊</div>
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
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="glass-strong rounded-2xl p-8 hover:shadow-ocean-light/20 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">🎯</div>
              <Heading level={4} className="mb-3">Clarity</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Clean code, clear communication, and straightforward solutions. Complexity is the enemy of maintainability.
              </Text>
            </div>

            <div className="glass-strong rounded-2xl p-8 hover:shadow-ocean-light/20 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">🚀</div>
              <Heading level={4} className="mb-3">Growth</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Learning never stops. Every project is an opportunity to level up and discover new approaches.
              </Text>
            </div>

            <div className="glass-strong rounded-2xl p-8 hover:shadow-ocean-light/20 transition-all duration-300 border border-ocean-light/20">
              <div className="text-4xl mb-4">💡</div>
              <Heading level={4} className="mb-3">Impact</Heading>
              <Text variant="secondary" className="leading-relaxed">
                Technology should make people&apos;s lives better. I build things that solve real problems for real people.
              </Text>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
