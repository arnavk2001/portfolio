import { Heading, Text } from './ui';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-featured e-commerce platform with real-time inventory management, secure payments, and an intuitive admin dashboard.",
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Stripe", "Tailwind CSS"],
    github: "#",
    demo: "#",
    gradient: "from-sky-600 to-sky-400"
  },
  {
    title: "AI Content Generator",
    description: "Advanced AI-powered content creation tool with GPT-4 integration, multi-language support, and custom training capabilities.",
    technologies: ["Python", "FastAPI", "React", "OpenAI API", "Docker"],
    github: "#",
    demo: "#",
    gradient: "from-sky-500 to-sky-600"
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Interactive dashboard with live data visualization, custom reporting, and predictive analytics for business intelligence.",
    technologies: ["Vue.js", "D3.js", "Node.js", "Redis", "PostgreSQL"],
    github: "#",
    demo: "#",
    gradient: "from-sky-700 to-sky-500"
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool with real-time updates, team workspaces, and advanced filtering capabilities.",
    technologies: ["React", "Node.js", "MongoDB", "Socket.io", "Express"],
    github: "#",
    demo: "#",
    gradient: "from-sky-600 to-sky-700"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Featured <span className="gradient-text">Projects</span>
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full"></div>
          <Text variant="secondary" size="lg" className="mt-6 max-w-2xl mx-auto">
            A showcase of my recent work and side projects
          </Text>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-strong rounded-3xl p-8 shadow-2xl hover:shadow-ocean-light/20 transition-all duration-300 group hover:-translate-y-2 border border-border-default relative overflow-hidden"
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                    <svg className="w-8 h-8 text-ocean-light" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                    </svg>
                  </div>
                  <div className="flex gap-3">
                    <a 
                      href={project.github}
                      className="p-2 glass rounded-lg hover:bg-ocean-light/10 transition-all group/icon"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5 text-text-secondary group-hover/icon:text-text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                    <a 
                      href={project.demo}
                      className="p-2 glass rounded-lg hover:bg-ocean-light/10 transition-all group/icon"
                      aria-label="Live Demo"
                    >
                      <svg className="w-5 h-5 text-text-secondary group-hover/icon:text-text-primary transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                </div>

                <Heading level={3} className="mb-3 group-hover:text-ocean-light transition-colors">
                  {project.title}
                </Heading>
                <Text variant="secondary" className="mb-6 leading-relaxed min-h-[4.5rem]">
                  {project.description}
                </Text>
                
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, idx) => (
                    <span 
                      key={idx}
                      className="px-3 py-1.5 bg-background-tertiary text-text-secondary rounded-lg text-sm border border-border-default hover:border-ocean-light/50 transition-colors font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 glass-strong hover:bg-slate-700/50 text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl"
          >
            <span>View All Projects on GitHub</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
