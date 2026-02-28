import { ExternalLink, Github } from "lucide-react";

function Projects() {
  const projects = [
    {
      title: "Government Internal System",
      description:
        "Designed and developed a web-based internal management system for a government institution to streamline reporting and data processing workflows using MVC architecture and structured database management.",
      tech: ["CodeIgniter", "MySQL"],
      demo: null,
      github: null,
    },
    {
      title: "Company Profile Website",
      description:
        "Built a responsive company profile website using modern UI principles, focusing on performance, accessibility, and clean component-based architecture.",
      tech: ["React", "Tailwind CSS"],
      demo: null,
      github: null,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-center">
          Selected Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm hover:border-white/30 hover:-translate-y-2 hover:shadow-xl hover:shadow-white/5 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-8 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs uppercase tracking-wide bg-white/10 text-gray-300 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {!project.demo && !project.github && (
                <p className="text-xs text-gray-500 mb-6">
                  Internal project – demo unavailable
                </p>
              )}

              <div className="flex gap-4">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
