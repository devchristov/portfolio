function Projects() {
  const projects = [
    {
      title: "Government Internal System",
      description:
        "A web-based internal management system built for a government institution to manage data and reporting processes.",
      tech: ["Laravel", "MySQL"],
      demo: "#",
      github: "#",
    },
    {
      title: "Company Profile Website",
      description:
        "A responsive company profile website built with React and modern UI principles.",
      tech: ["React", "Tailwind CSS"],
      demo: "#",
      github: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="fade-section min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center">Projects</h2>

        <div className="grid md:grid-cols-2 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-gray-800 p-8 rounded-lg hover:border-white transition duration-300 hover:-translate-y-2"
            >
              <h3 className="text-2xl font-semibold mb-4">{project.title}</h3>

              <p className="text-gray-400 mb-6 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm border border-gray-600 px-3 py-1 rounded-md"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-4">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition"
                >
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border border-gray-600 px-4 py-2 rounded-md hover:border-white transition"
                >
                  View Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
