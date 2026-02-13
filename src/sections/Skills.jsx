function Skills() {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "PHP",
    "CodeIgniter",
    "Laravel",
    "MySQL",
    "PostgreSQL",
  ];

  return (
    <section
      id="skills"
      className="fade-section min-h-screen bg-black text-white px-6 flex items-center"
    >
      <div className="max-w-5xl mx-auto w-full">
        <h2 className="text-4xl font-bold mb-10">Skills</h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="border border-gray-700 p-4 text-center hover:border-white transition"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
