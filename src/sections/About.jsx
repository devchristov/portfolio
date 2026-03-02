import profile from "../assets/IMG_9396.JPG";

function About() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-28 flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-20">
        <div className="w-60 h-60 md:w-72 md:h-72 flex-shrink-0">
          <img
            src={profile}
            alt="Devidson Goenawan"
            className="w-full h-full object-cover rounded-2xl border border-neutral-800"
          />
        </div>

        <div className="max-w-3xl">
          <p className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-white/10 rounded-full text-gray-300 mb-6">
            Fullstack Web Developer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>

          <p className="text-neutral-400 text-lg leading-relaxed text-justify">
            I am a Fullstack Web Developer specializing in structured, secure,
            and scalable web systems for institutional environments. With
            professional experience in government projects, I focus on clean
            architecture, performance optimization, and long-term
            maintainability to deliver reliable digital solutions.
          </p>

          <div className="flex gap-16 mt-10">
            <div>
              <p className="text-3xl font-semibold">5+</p>
              <p className="text-neutral-500 text-sm">Years Experience</p>
            </div>

            <div>
              <p className="text-3xl font-semibold">9+</p>
              <p className="text-neutral-500 text-sm">Systems Developed</p>
            </div>
          </div>

          <div className="w-full h-px bg-neutral-800 my-10"></div>

          <div>
            <p className="text-lg font-semibold mb-4">Core Stack</p>

            <p className="text-neutral-400 text-justify">
              <span className="text-white font-medium">Backend:</span> Laravel,
              CodeIgniter, PHP <br />
              <span className="text-white font-medium">Database:</span> MySQL,
              PostgreSQL <br />
              <span className="text-white font-medium">Frontend:</span> HTML,
              CSS, JavaScript, Bootstrap, React <br />
              <span className="text-white font-medium">Tools:</span> Git,
              Docker, Postman
            </p>
          </div>

          <div className="mt-12 flex gap-5">
            <a
              href={`${baseUrl}assets/files/Devidson-Goenawan.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition"
            >
              View CV
            </a>

            <a
              href={`${baseUrl}assets/files/Devidson-Goenawan.pdf`}
              download
              className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-white transition"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
