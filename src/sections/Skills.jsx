import {
  Globe,
  Layers,
  FileCode,
  Braces,
  Palette,
  Server,
  Database,
  ShieldCheck,
  GitBranch,
  Cpu,
  Boxes,
  Wrench,
  Package,
} from "lucide-react";

import { motion } from "framer-motion";

function Skills() {
  const skillCategories = [
    {
      category: "Frontend",
      color: "hover:border-blue-500 hover:bg-blue-500/10",
      skills: [
        { name: "HTML", icon: Globe },
        { name: "CSS", icon: Palette },
        { name: "JavaScript", icon: FileCode },
        { name: "React", icon: Cpu },
        { name: "Vue.js", icon: Boxes },
        { name: "Blade", icon: Braces },
        { name: "Bootstrap", icon: Layers },
        { name: "Tailwind CSS", icon: Layers },
      ],
    },
    {
      category: "Backend",
      color: "hover:border-green-500 hover:bg-green-500/10",
      skills: [
        { name: "PHP", icon: Server },
        { name: "Python", icon: Server },
        { name: "CodeIgniter", icon: Boxes },
        { name: "Laravel", icon: Server },
        { name: "REST API Development", icon: GitBranch },
        { name: "MVC Architecture", icon: Boxes },
        { name: "Authentication & Authorization", icon: ShieldCheck },
      ],
    },
    {
      category: "Database",
      color: "hover:border-purple-500 hover:bg-purple-500/10", // bisa ganti warna bebas
      skills: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "SQL", icon: Database },
      ],
    },
    {
      category: "Tools",
      color: "hover:border-orange-500 hover:bg-orange-500/10",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Package },
        { name: "Postman", icon: Wrench },
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
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    viewport={{ once: true }}
                    className={`flex items-center gap-3 border border-gray-700 rounded-xl p-4 transition-all duration-300 ${section.color}`}
                  >
                    <Icon size={20} className="text-gray-400" />
                    <span className="text-gray-300">{name}</span>
                  </motion.div>
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
