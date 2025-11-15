import Image from 'next/image';
import { Heading, Text } from './ui';

const projects = [
  {
    title: "Surfstore",
    description: "Built a cloud-based file storage service with distinct microservices for efficient data storage and metadata management. Implemented the RAFT consensus protocol across metadata servers to improve fault tolerance and ensure high system uptime and consistency.",
    technologies: ["Go", "Distributed Systems", "RAFT Consensus", "Networking"],
    github: "https://github.com/arnavk2001/Surfstore",
    image: "/surf-store.png",
    gradient: "from-sky-600 to-sky-400",
    hoverTextColor: "group-hover:text-sky-400",
    hoverShadow: "hover:shadow-sky-400/20",
    hoverBorder: "hover:!border-sky-400/50"
  },
  {
    title: "Quack",
    description: "Designed and implemented a HTTP/1.1 web server using socket programming. Developed multi-client capability with persistent connections, request pipelining, and timeout mechanism to optimize network efficiency. Ensured secure file access with URL validation.",
    technologies: ["Go", "Systems Programming", "Networking", "HTTP/1.1"],
    github: "https://github.com/arnavk2001/QuACK",
    image: "/quack.png",
    imageWidth: "w-36",
    imageHeight: "h-36",
    gradient: "from-yellow-600 to-yellow-400",
    hoverTextColor: "group-hover:text-yellow-400",
    hoverShadow: "hover:shadow-yellow-400/20",
    hoverBorder: "hover:!border-yellow-400/50"
  },
  {
    title: "FinAnswer",
    description: "Developed a Question Answering model using Llama, optimized through prompt engineering and chain-of-thought reasoning. Utilized Parameter Efficient Fine-Tuning (PEFT) techniques like LoRA to optimize generative capabilities. Integrated a RAG module using FAISS and LangChain for better contextual understanding.",
    technologies: ["Python", "PyTorch", "LLM", "PEFT", "LoRA", "RAG", "FAISS", "LangChain"],
    github: "https://github.com/arnavk2001/FinAnswer",
    image: "/chat-bot.png",
    imageWidth: "w-28",
    imageHeight: "h-28",
    gradient: "from-orange-600 to-orange-400",
    hoverTextColor: "group-hover:text-orange-400",
    hoverShadow: "hover:shadow-orange-400/20",
    hoverBorder: "hover:!border-orange-400/50"
  },
  {
    title: "Hey Ambulance!",
    description: "Devised an intelligent traffic control system using Atmega-328 microcontroller capable of operating stoplights to create a dynamically shifting green corridor for ambulances based on GPS location. Built a mobile application to call ambulances and manage patient data on Google Cloud. Selected for finals (top 10) at Rakuten Hackathon from 6000+ teams.",
    technologies: ["C", "Embedded Systems", "Flutter", "Dart", "Firebase", "GPS"],
    image: "/ambulance.png",
    imageWidth: "w-24",
    imageHeight: "h-24",
    gradient: "from-red-600 to-red-400",
    hoverTextColor: "group-hover:text-red-400",
    hoverShadow: "hover:shadow-red-400/20",
    hoverBorder: "hover:!border-red-400/50"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16 md:py-32 px-6 relative">
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
              className={`glass-strong rounded-3xl p-8 shadow-2xl ${project.hoverShadow} transition-all duration-300 group hover:-translate-y-2 border border-transparent ${project.hoverBorder} relative overflow-visible cursor-default`}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-3xl`}></div>
              
              {project.image && (
                <div className={`absolute bottom-0 right-0 ${project.imageWidth || 'w-32'} ${project.imageHeight || 'h-32'} opacity-40 group-hover:opacity-50 transition-opacity`}>
                  <div className="relative w-full h-full">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              )}
              
              <div className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Heading level={3} className={`${project.hoverTextColor} transition-colors`}>
                    {project.title}
                  </Heading>
                  {project.github && (
                    <a 
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 glass rounded-lg hover:bg-ocean-light/10 transition-all group/icon"
                      aria-label="GitHub"
                    >
                      <svg className="w-5 h-5 text-text-secondary group-hover/icon:text-text-primary transition-colors" fill="currentColor" viewBox="0 0 24 24">
                        <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                      </svg>
                    </a>
                  )}
                </div>

                <Text variant="secondary" className="mb-6 leading-relaxed">
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
            href="https://github.com/arnavk2001"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-[#24292e] hover:bg-[#1b1f23] text-white rounded-xl font-semibold transition-all transform hover:scale-105 shadow-xl border border-[#30363d]"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
            </svg>
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
