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
  Monitor,
  HardDrive,
  Workflow,
  Settings,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const skillCategories = [
    {
      category: "Frontend",
      icon: Monitor,
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
      icon: Server,
      skills: [
        { name: "PHP", icon: Server },
        { name: "Python", icon: Server },
        { name: "Laravel", icon: Server },
        { name: "CodeIgniter", icon: Boxes },
      ],
    },
    {
      category: "Database",
      icon: HardDrive,
      skills: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
      ],
    },
    {
      category: "System Architecture",
      icon: Workflow,
      skills: [
        { name: "RESTful API Design", icon: GitBranch },
        { name: "MVC Pattern Implementation", icon: Boxes },
        { name: "Authentication & Authorization", icon: ShieldCheck },
      ],
    },
    {
      category: "Tools",
      icon: Settings,
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

        <div className="space-y-5">
          {skillCategories.map((section, index) => {
            const CategoryIcon = section.icon;

            return (
              <div
                key={index}
                className="border border-white/10 rounded-xl overflow-hidden"
              >
                {/* HEADER */}
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-white/5 transition"
                >
                  <div className="flex items-center gap-3">
                    <CategoryIcon size={20} className="text-gray-300" />

                    <span className="text-lg font-semibold">
                      {section.category}
                    </span>
                  </div>

                  <ChevronDown
                    className={`transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* CONTENT */}
                <AnimatePresence initial={false}>
                  {openIndex === index && (
                    <motion.div
                      initial={{ scaleY: 0 }}
                      animate={{ scaleY: 1 }}
                      exit={{ scaleY: 0 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      style={{ transformOrigin: "top" }}
                      className="px-5 pt-3 pb-6 overflow-hidden"
                    >
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-5">
                        {section.skills.map(({ name, icon: Icon }, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 border border-white/10 rounded-lg p-4 bg-white/5 hover:bg-white/10 transition"
                          >
                            <Icon size={18} className="text-gray-300" />

                            <span className="text-sm text-gray-300">
                              {name}
                            </span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
