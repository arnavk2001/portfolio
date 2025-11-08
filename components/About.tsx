export default function About() {
  return (
    <section id="about" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-bold text-white mb-4 font-[family-name:var(--font-space-grotesk)]">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="glass-strong rounded-3xl p-10 shadow-2xl hover:shadow-blue-500/10 transition-all duration-300 border border-slate-700/50">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m a <span className="text-blue-400 font-semibold">passionate software engineer</span> with 
                expertise in building modern web applications. My focus is on creating efficient, scalable, 
                and user-friendly solutions that solve real-world problems.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                With a strong foundation in both <span className="text-purple-400 font-semibold">frontend</span> and{' '}
                <span className="text-purple-400 font-semibold">backend</span> technologies, I specialize in 
                the full software development lifecycle—from concept and design to deployment and maintenance.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                I&apos;m always eager to learn new technologies and collaborate on innovative projects that 
                make a <span className="text-blue-400 font-semibold">meaningful impact</span>.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="glass rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-600/20 rounded-lg group-hover:bg-blue-600/30 transition-colors">
                  <svg className="w-6 h-6 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Problem Solver</h3>
                  <p className="text-slate-400">Analytical mindset with a passion for elegant solutions</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-purple-600/20 rounded-lg group-hover:bg-purple-600/30 transition-colors">
                  <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Fast Learner</h3>
                  <p className="text-slate-400">Quickly adapt to new technologies and frameworks</p>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 hover:bg-slate-800/60 transition-all duration-300 group">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-pink-600/20 rounded-lg group-hover:bg-pink-600/30 transition-colors">
                  <svg className="w-6 h-6 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Team Player</h3>
                  <p className="text-slate-400">Collaborative approach to building great products</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
