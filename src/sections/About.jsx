import profile from "../assets/IMG_9396.JPG";

function About() {
  const baseUrl = import.meta.env.BASE_URL;

  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 py-20 md:py-28 flex items-center"
    >
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 md:gap-20">
        {/* Profile Image */}
        <div className="w-48 h-48 md:w-72 md:h-72 flex-shrink-0">
          <img
            src={profile}
            alt="Devidson Goenawan"
            className="w-full h-full object-cover rounded-2xl border border-neutral-800"
          />
        </div>

        {/* Content */}
        <div className="max-w-3xl text-center md:text-left">
          <p className="inline-block px-4 py-1 text-xs tracking-widest uppercase bg-white/10 rounded-full text-gray-300 mb-6">
            Fullstack Web Developer
          </p>

          <h2 className="text-3xl md:text-5xl font-bold mb-4">About Me</h2>

          <p className="text-neutral-400 text-base md:text-lg leading-relaxed text-left md:text-justify">
            I am a Fullstack Web Developer focused on building structured,
            secure, and scalable web systems from the ground up. With
            professional experience in government institutions, I develop
            digital solutions that prioritize reliability, long-term
            maintainability, and compliance with institutional standards.
            <br />
            <br />
            My expertise lies in designing clean architectures, optimizing
            system performance, and ensuring sustainable development practices.
            I have extensive experience using CodeIgniter for enterprise-grade
            systems, while also leveraging modern frameworks such as Laravel to
            build robust and future-ready applications.
            <br />
            <br />I continuously adapt to evolving technologies and best
            practices, ensuring every system I build is not only functional, but
            efficient, secure, and built to scale.
          </p>

          {/* Stats */}
          <div className="flex justify-center md:justify-start gap-10 md:gap-16 mt-10">
            <div>
              <p className="text-2xl md:text-3xl font-semibold">5+</p>
              <p className="text-neutral-500 text-sm">Years Experience</p>
            </div>

            <div>
              <p className="text-2xl md:text-3xl font-semibold">9+</p>
              <p className="text-neutral-500 text-sm">Systems Developed</p>
            </div>
          </div>

          <div className="w-full h-px bg-neutral-800 my-10"></div>

          {/* Core Stack */}
          <div>
            <p className="text-lg font-semibold mb-4">Core Stack</p>

            <p className="text-neutral-400 text-left md:text-justify">
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

          {/* Buttons */}
          <div className="mt-12 flex flex-col sm:flex-row gap-4 sm:gap-5 justify-center md:justify-start">
            <a
              href={`${baseUrl}assets/files/Devidson-Goenawan.pdf`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-neutral-200 transition text-center"
            >
              View CV
            </a>

            <a
              href={`${baseUrl}assets/files/Devidson-Goenawan.pdf`}
              download
              className="px-6 py-3 border border-neutral-700 rounded-lg hover:border-white transition text-center"
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
