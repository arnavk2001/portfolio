import { Heading, Text } from './ui';

export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            About <span className="gradient-text">Me</span>
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-strong rounded-3xl p-10 shadow-2xl hover:shadow-ocean-light/10 transition-all duration-300 border border-ocean-light/20">
            <div className="space-y-6">
              <Text size="lg" variant="secondary" className="leading-relaxed">
                I&apos;m a <Text as="span" variant="primary" className="font-semibold">passionate software engineer</Text> with 
                expertise in building modern web applications. My focus is on creating efficient, scalable, 
                and user-friendly solutions that solve real-world problems.
              </Text>
              <Text size="lg" variant="secondary" className="leading-relaxed">
                With a strong foundation in both <Text as="span" variant="primary" className="font-semibold">frontend</Text> and{' '}
                <Text as="span" variant="primary" className="font-semibold">backend</Text> technologies, I specialize in 
                the full software development lifecycle—from concept and design to deployment and maintenance.
              </Text>
              <Text size="lg" variant="secondary" className="leading-relaxed">
                I&apos;m always eager to learn new technologies and collaborate on innovative projects that 
                make a <Text as="span" variant="accent" className="font-semibold">meaningful impact</Text>.
              </Text>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean-light/20 rounded-lg group-hover:bg-ocean-light/30 transition-colors">
                  <svg className="w-6 h-6 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <Heading level={3} className="mb-2">Problem Solver</Heading>
                  <Text variant="secondary">Analytical mindset with a passion for elegant solutions</Text>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean-blue/20 rounded-lg group-hover:bg-ocean-blue/30 transition-colors">
                  <svg className="w-6 h-6 text-ocean-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <Heading level={3} className="mb-2">Fast Learner</Heading>
                  <Text variant="secondary">Quickly adapt to new technologies and frameworks</Text>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-ocean-light/10 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-ocean-dark/20 rounded-lg group-hover:bg-ocean-dark/30 transition-colors">
                  <svg className="w-6 h-6 text-ocean-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <Heading level={3} className="mb-2">Team Player</Heading>
                  <Text variant="secondary">Collaborative approach to building great products</Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
