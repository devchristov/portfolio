function About() {
  return (
    <section
      id="about"
      className="fade-section min-h-screen bg-black text-white px-6 flex items-center"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-8">About Me</h2>

        <p className="text-gray-400 leading-relaxed">
          I am a web developer with experience working in a government
          institution, where I was responsible for developing and maintaining
          internal web applications.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4">
          I have worked extensively with CodeIgniter and Laravel to build
          structured, secure, and scalable systems.
        </p>

        <p className="text-gray-400 leading-relaxed mt-4">
          I hold a Bachelor's degree in Informatics Engineering and have
          experience working with relational databases such as MySQL and
          PostgreSQL.
        </p>
      </div>
    </section>
  );
}

export default About;
