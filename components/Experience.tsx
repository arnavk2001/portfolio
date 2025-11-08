import { Heading, Text } from './ui';

const experiences = [
  {
    title: "Senior Software Engineer",
    company: "Tech Innovations Inc.",
    period: "2023 - Present",
    description: "Leading development of enterprise-scale applications and mentoring junior developers. Architecting scalable solutions using modern cloud technologies.",
    achievements: [
      "Built microservices architecture serving 100K+ daily users",
      "Reduced API response time by 60% through optimization",
      "Led team of 5 developers in agile environment",
      "Implemented CI/CD pipelines reducing deployment time by 75%"
    ],
    tags: ["React", "Node.js", "AWS", "Docker"]
  },
  {
    title: "Full-Stack Developer",
    company: "Digital Solutions Ltd.",
    period: "2021 - 2023",
    description: "Developed and maintained multiple client-facing web applications. Collaborated with design and product teams to deliver high-quality solutions.",
    achievements: [
      "Created responsive SPAs with React and TypeScript",
      "Integrated payment gateways and third-party APIs",
      "Improved application performance by 40%",
      "Mentored 3 junior developers"
    ],
    tags: ["TypeScript", "PostgreSQL", "GraphQL", "Next.js"]
  },
  {
    title: "Software Engineer Intern",
    company: "StartUp Ventures",
    period: "2020 - 2021",
    description: "Contributed to MVP development and learned industry best practices. Worked on both frontend and backend features.",
    achievements: [
      "Developed key features for product launch",
      "Wrote comprehensive unit and integration tests",
      "Participated in code reviews and design discussions"
    ],
    tags: ["JavaScript", "MongoDB", "Express", "React"]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-32 px-6 relative">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Work <span className="gradient-text">Experience</span>
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-sky-500 via-sky-600 to-sky-500"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gradient-to-r from-sky-600 to-sky-400 border-4 border-background-secondary z-10"></div>

                <div className={`w-full md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div className="glass-strong rounded-2xl p-8 shadow-2xl hover:shadow-ocean-light/10 transition-all duration-300 group hover:-translate-y-1 border border-border-default">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                      <div>
                        <Heading level={3} className="mb-2 group-hover:text-ocean-light transition-colors">
                          {exp.title}
                        </Heading>
                        <Text variant="accent" size="lg" className="font-semibold">{exp.company}</Text>
                      </div>
                      <span className="inline-block px-4 py-2 bg-ocean-light/20 text-ocean-light rounded-lg text-sm font-medium mt-2 md:mt-0 border border-ocean-light/30">
                        {exp.period}
                      </span>
                    </div>
                    
                    <Text variant="secondary" className="mb-4 leading-relaxed">{exp.description}</Text>
                    
                    <ul className="space-y-2 mb-6">
                      {exp.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-ocean-light mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <Text variant="secondary">{achievement}</Text>
                        </li>
                      ))}
                    </ul>

                    <div className="flex flex-wrap gap-2">
                      {exp.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="px-3 py-1 bg-background-tertiary text-text-secondary rounded-lg text-sm border border-border-default hover:border-ocean-light/50 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
