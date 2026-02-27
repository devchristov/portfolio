import {
  FileCode,
  Braces,
  Database,
  Server,
  Globe,
  Layers,
} from "lucide-react";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Layers },
        { name: "JavaScript", icon: FileCode },
        { name: "React", icon: Braces },
      ],
    },
    {
      category: "Backend",
      skills: [
        { name: "PHP", icon: Server },
        { name: "Python", icon: Server },
        { name: "CodeIgniter", icon: Server },
        { name: "Laravel", icon: Server },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", icon: Database },
        { name: "SQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-16">Skills</h2>

        <div className="space-y-16">
          {skillCategories.map((section, index) => (
            <div key={index}>
              <h3 className="text-2xl font-semibold mb-6 text-gray-300">
                {section.category}
              </h3>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                {section.skills.map(({ name, icon: Icon }, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3 border border-gray-700 rounded-xl p-4 hover:border-white hover:bg-gray-900 transition-all duration-300"
                  >
                    <Icon size={20} className="text-gray-400" />
                    <span className="text-gray-300">{name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
