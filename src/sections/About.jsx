import profile from "../assets/IMG_9396.JPG";

function About() {
  return (
    <section
      id="about"
      className="fade-section min-h-screen bg-black text-white px-6 flex items-center"
    >
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-12">
        <div className="w-52 h-52 md:w-64 md:h-64 flex-shrink-0">
          <img
            src={profile}
            alt="Profile Photo"
            className="w-full h-full object-cover rounded-2xl shadow-xl border border-gray-800"
          />
        </div>

        <div>
          <h2 className="text-4xl font-bold mb-8">About Me</h2>

          <p className="text-gray-400 leading-relaxed">
            I am a Fullstack Web Developer with professional experience
            developing and maintaining web applications within a government
            institution. I build structured, secure, and scalable systems using
            CodeIgniter, while continuously expanding my expertise in Laravel to
            stay aligned with modern web development practices. I am committed
            to continuous improvement and applying best practices to deliver
            reliable and efficient digital solutions.
          </p>

          <p className="text-gray-400 leading-relaxed mt-4">
            I hold a Bachelor's degree in Informatics Engineering from
            Universitas Katolik De La Salle Manado. Based in Indonesia, I
            currently work with the Provincial Government of North Sulawesi,
            contributing to the development of dependable and scalable internal
            web systems.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
