import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Government Internal System",
      description:
        "Designed and developed a web-based internal management system for a government institution to streamline reporting and data processing workflows using MVC architecture and structured database management.",
      tech: [
        {
          name: "CodeIgniter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
      ],
      demo: null,
      github: null,
      featured: true,
    },
    {
      title: "Company Profile Website",
      description:
        "Built a responsive company profile website using modern UI principles, focusing on performance, accessibility, and clean component-based architecture.",
      tech: [
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Tailwind CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
      demo: null,
      github: null,
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Selected Projects
        </h2>

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="relative rounded-xl p-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40"
            >
              <div className="group bg-black/70 backdrop-blur-xl rounded-xl border border-white/10 p-6 hover:border-blue-400/40 transition-all duration-300">
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg md:text-xl font-semibold">
                    {project.title}
                  </h3>

                  {project.featured && (
                    <span className="text-xs uppercase bg-white text-black px-3 py-1 rounded-full font-semibold">
                      Featured
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="flex items-center gap-2 text-xs uppercase tracking-wide bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                    >
                      <img
                        src={tech.logo}
                        alt={tech.name}
                        className="w-4 h-4 object-contain"
                      />
                      {tech.name}
                    </span>
                  ))}
                </div>

                {!project.demo && !project.github && (
                  <p className="text-xs text-gray-500 italic">
                    Internal project – demo unavailable
                  </p>
                )}

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-white text-black px-4 py-2 rounded-full text-sm"
                    >
                      <ExternalLink size={16} />
                      Live Demo
                    </a>
                  )}

                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 border border-white/20 px-4 py-2 rounded-full text-sm hover:bg-white/10 transition"
                    >
                      <Github size={16} />
                      View Code
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
