import { useState } from "react";
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
  ChevronDown,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const skillCategories = [
    {
      category: "Frontend",
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
      skills: [
        { name: "PHP", icon: Server },
        { name: "Python", icon: Server },
        { name: "Laravel", icon: Server },
        { name: "CodeIgniter", icon: Boxes },
      ],
    },
    {
      category: "Database",
      skills: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
      ],
    },
    {
      category: "System Architecture",
      skills: [
        { name: "RESTful API Design", icon: GitBranch },
        { name: "MVC Pattern Implementation", icon: Boxes },
        { name: "Authentication & Authorization", icon: ShieldCheck },
      ],
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", icon: GitBranch },
        { name: "Docker", icon: Package },
        { name: "Postman", icon: Wrench },
      ],
    },
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      id="skills"
      className="min-h-screen bg-black text-white px-6 py-24"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="space-y-4">
          {skillCategories.map((section, index) => (
            <div
              key={index}
              className="border border-white/10 rounded-xl overflow-hidden"
            >
              {/* HEADER */}
              <button
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition"
              >
                <span className="text-lg font-semibold">
                  {section.category}
                </span>

                <ChevronDown
                  className={`transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>

              {/* CONTENT */}
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="px-5 pb-5"
                  >
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {section.skills.map(({ name, icon: Icon }, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-3 border border-white/10 rounded-lg p-3 bg-white/5"
                        >
                          <Icon size={18} className="text-gray-300" />
                          <span className="text-sm text-gray-300">{name}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
