import { useState } from "react";
import { Monitor, Server, Database, Settings, ChevronDown } from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

function Skills() {
  const [openIndex, setOpenIndex] = useState(null);

  const skillCategories = [
    {
      category: "Frontend",
      icon: Monitor,
      skills: [
        {
          name: "HTML",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
        },
        {
          name: "CSS",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
        },
        {
          name: "JavaScript",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
        },
        {
          name: "React",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
        },
        {
          name: "Vue",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
        },
        {
          name: "Tailwind",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
        },
      ],
    },
    {
      category: "Backend",
      icon: Server,
      skills: [
        {
          name: "PHP",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
        },
        {
          name: "Laravel",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
        },
        {
          name: "Python",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
        },
        {
          name: "CodeIgniter",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/codeigniter/codeigniter-plain.svg",
        },
      ],
    },
    {
      category: "Database",
      icon: Database,
      skills: [
        {
          name: "MySQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg",
        },
        {
          name: "PostgreSQL",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
        },
      ],
    },
    {
      category: "Tools",
      icon: Settings,
      skills: [
        {
          name: "Git",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
        },
        {
          name: "Docker",
          logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
        },
        {
          name: "Postman",
          logo: "https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg",
        },
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
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-16 text-center">
          Skills
        </h2>

        <div className="space-y-5">
          {skillCategories.map((section, index) => {
            const CategoryIcon = section.icon;

            return (
              <div
                key={index}
                className="relative rounded-xl p-[1px] bg-gradient-to-r from-blue-500/40 via-purple-500/40 to-cyan-500/40"
              >
                <div className="bg-black/70 backdrop-blur-xl rounded-xl border border-white/10 overflow-hidden">
                  <button
                    onClick={() => toggle(index)}
                    className="group w-full flex items-center justify-between p-5 hover:bg-white/5 transition"
                  >
                    <div className="flex items-center gap-3">
                      <CategoryIcon className="text-gray-400 group-hover:text-blue-400 transition" />

                      <span className="text-lg font-semibold group-hover:text-blue-400 transition">
                        {section.category}
                      </span>
                    </div>

                    <ChevronDown
                      className={`transition-transform duration-300 ${
                        openIndex === index ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>

                  <AnimatePresence initial={false}>
                    {openIndex === index && (
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        exit={{ scaleY: 0 }}
                        transition={{ duration: 0.25 }}
                        style={{ transformOrigin: "top" }}
                        className="px-6 pb-6 overflow-hidden"
                      >
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-4">
                          {section.skills.map((skill, i) => (
                            <div
                              key={i}
                              className="flex items-center gap-3 p-4 rounded-lg bg-white/5 border border-white/10 hover:border-blue-400/40 hover:bg-white/10 transition"
                            >
                              <img
                                src={skill.logo}
                                alt={skill.name}
                                className="w-6 h-6"
                              />

                              <span className="text-sm font-medium text-gray-200">
                                {skill.name}
                              </span>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
