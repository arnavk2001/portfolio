import { Heading, Text } from './ui';

const skillCategories = [
  {
    title: "Languages",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    skills: ["C++", "C", "Python", "Go", "JavaScript", "TypeScript", "Java", "Dart", "Ruby", "SQL", "HTML/CSS"],
    gradient: "from-sky-600 to-sky-400"
  },
  {
    title: "Frameworks & Libraries",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
      </svg>
    ),
    skills: ["React", "Next.js", "Django", "FastAPI", "Flask", "Flutter", "Ruby on Rails", "Jest", "Tailwind CSS", "Bootstrap", "PostgreSQL", "MongoDB"],
    gradient: "from-sky-500 to-sky-600"
  },
  {
    title: "AI/ML",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    skills: ["PyTorch", "TensorFlow", "scikit-learn", "Keras", "OpenCV", "NLTK", "spaCy", "Pandas", "NumPy", "Hugging Face"],
    gradient: "from-sky-600 to-sky-700"
  },
  {
    title: "Tools & Cloud",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z" />
      </svg>
    ),
    skills: ["Docker", "AWS", "Sagemaker", "Google Cloud", "Kubernetes", "CI/CD", "Linux", "Git", "Nginx", "Vercel"],
    gradient: "from-sky-700 to-sky-500"
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-32 px-6 relative">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <Heading level={2} className="mb-4">
            Skills & <span className="gradient-text">Expertise</span>
          </Heading>
          <div className="w-24 h-1 bg-gradient-to-r from-sky-600 to-sky-400 mx-auto rounded-full"></div>
          <Text variant="secondary" size="lg" className="mt-6 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </Text>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="glass-strong rounded-3xl p-8 shadow-2xl hover:shadow-ocean-light/20 transition-all duration-300 group hover:-translate-y-1 border border-border-default relative overflow-hidden"
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className={`inline-flex p-4 rounded-2xl bg-gradient-to-br ${category.gradient} bg-opacity-10 mb-6 text-ocean-light`}>
                  {category.icon}
                </div>
                
                <Heading level={3} className="mb-6 group-hover:text-ocean-light transition-colors">
                  {category.title}
                </Heading>
                
                <div className="flex flex-wrap gap-3">
                  {category.skills.map((skill, idx) => (
                    <span 
                      key={idx}
                      className="px-4 py-2.5 glass rounded-xl text-text-primary hover:bg-ocean-light/10 transition-all transform hover:scale-105 font-medium border border-border-default hover:border-ocean-light/50"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
