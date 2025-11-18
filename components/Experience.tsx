import { Heading, Text } from './ui';

const experiences = [
  {
    title: "Staff Research Associate II",
    company: "UCSD, Contijoch Research Laboratory",
    period: "June 2024 - September 2025",
    description: "Engineered a C++ package for Siemens MRI scanner to implement Autonomous Radial K-space Sampling (ARKS), improving uniformity by 15% and image quality by 6% for cardiac MRI through data-driven angle selection.",
    achievements: [
      "Utilized nested virtualization to compile and validate shared libraries, enabling interoperability between the reconstruction system running on Linux and the Windows-based control environment.",
      "Implemented a high-performance compute pipeline with efficient memory and buffer management, ensured scalability, while optimizing for low latency and high throughput in real-time imaging.",
    ],
  },
  {
    title: "Research Assistant",
    company: "UCSD, Machine Intelligence, Computing and Security Lab",
    period: " March 2024 - May 2024",
    description: "Compressed model size without altering model architecture by collapsing layers of the neural network.",
    achievements: [
      "Implemented LayerCollapse Algorithm on Integer-only BERT to selectively collapse layers of the Transformer model.",
      "Optimized model training with CUDA for GPU acceleration, and conducted debugging and performance evaluation."
    ],

  },
  {
    title: "Software Developer",
    company: "UCSD, ITA Conference",
    period: "Jan 2024 - March 2024",
    description: "Engineered dynamic event scheduling system with streamlining planning and engagement.",
    achievements: [
      "Designed a database for 6000+ attendees, implemented authentication based on OAuth2, access control, and integrated RESTful APIs to suppport web and mobile application.",
      "Designed and developed a responsive front-end, improving user experience across devices.",
    ],
  },
  {
    title: "Research Assistant",
    company: "UCSD, Boolean Labs",
    period: "November 2023 - February 2024",
    description: "Designed a lightweight neural network for on-device arrhythmia detection using time-series ECG signal, deploying on embedded hardware.",
    achievements: [
      "Deployed compressed models on STM32-microcontroller for real-time detection of Ventricular Arrhythmia in patients from ECG signal.",
      "Implemented selective pruning based on Lottery Ticket Hypothesis, retaining only critical model weights, reducing memory usage by 37% and maintaining 97% precision." ,
      "Utilized Docker and Kubernetes to manage distributed training across GPU nodes."
    ],

  },
  {
    title: "Research Assistant",
    company: "PICT, Computational Linguistics Lab",
    period: "July 2022 - June 2023",
    description: "Conducted research on multi-modal video summarization of English news videos to develop an assistive tool for the visually impaired.",
    achievements: [
      "Utilized seq2seq RNNs for subtitle generation",
      "Used CRAFT (Character Region Awareness for Text Detection) for text detection in video frames with WER of 0.96.",
      "Summarized the generated text using BERT-based transformer models."
    ],
  },
  {
    title: "Software Development Intern",
    company: "Siemens Digital Industries Software",
    period: "May 2022 - July 2022",
    description: "Improving user experience in finding items unassigned to structure partitions in CAD designs on the web-based client PLM platform, Teamcenter.",
    achievements: [
      "Developed a proof-of-concept feature that enhanced item finding functionality for unassigned items in CAD designs.",
      "Refactored feature test files to improve reliability of Cucumber tests for Acceptance Test-Driven Development (ATDD).",
    ],
  },
  {
    title: "Software Development Intern",
    company: "Dynamisch IT Pvt. Ltd.",
    period: "February 2022 - March 2022",
    description: "Developed a client-centric dashboard for visualizing real-time financial data, and enhanced the web application's performance with regard to the response time.",
    achievements: [
      "Developed a dynamic dashboard and integrated RESTful APIs to ensure seamless updates.",
      "Optimized API calls to improve data load times, enhancing user experience and dashboard responsiveness.",
    ],
  },   
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 md:py-32 px-6 relative">
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
                  <div className="glass-strong rounded-2xl p-8 shadow-2xl hover:shadow-ocean-light/10 transition-all duration-300 group hover:-translate-y-1 hover:border-2 hover:border-ocean-light">
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
