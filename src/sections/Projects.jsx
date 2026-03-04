import { ExternalLink, Github } from "lucide-react";
import { motion } from "framer-motion";

function Projects() {
  const projects = [
    {
      title: "Government Internal System",
      description:
        "Designed and developed a web-based internal management system for a government institution to streamline reporting and data processing workflows using MVC architecture and structured database management.",
      tech: ["CodeIgniter", "MySQL"],
      demo: null,
      github: null,
      featured: true,
    },
    {
      title: "Company Profile Website",
      description:
        "Built a responsive company profile website using modern UI principles, focusing on performance, accessibility, and clean component-based architecture.",
      tech: ["React", "Tailwind CSS"],
      demo: null,
      github: null,
      featured: false,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-4 md:px-6 py-20 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-14 md:mb-20 text-center">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group relative bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 backdrop-blur-sm hover:border-white/30 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-2xl hover:shadow-white/10 transition-all duration-500"
            >
              {project.featured && (
                <span className="absolute top-4 right-4 text-xs bg-white text-black px-3 py-1 rounded-full font-semibold">
                  Featured
                </span>
              )}

              <h3 className="text-xl md:text-2xl font-semibold mb-4">
                {project.title}
              </h3>

              <p className="text-gray-400 text-sm md:text-base mb-6 md:mb-8 leading-6 md:leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6 md:mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-[10px] md:text-xs uppercase tracking-wide bg-white/10 text-gray-300 px-3 py-1 rounded-full transition group-hover:bg-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {!project.demo && !project.github && (
                <p className="text-xs text-gray-500 mb-6 italic">
                  Internal project – demo unavailable
                </p>
              )}

              <div className="flex flex-wrap gap-4">
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-white text-black px-5 py-2 rounded-full text-sm font-medium hover:scale-105 transition"
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
                    className="flex items-center gap-2 border border-white/20 px-5 py-2 rounded-full text-sm hover:border-white hover:bg-white/10 transition"
                  >
                    <Github size={16} />
                    View Code
                  </a>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
