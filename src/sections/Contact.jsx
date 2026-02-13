function Contact() {
  return (
    <section
      id="contact"
      className="fade-section min-h-screen bg-black text-white px-6 py-20"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">Contact Me</h2>

        <p className="text-gray-400 mb-12">
          Interested in working together or have a project in mind? Feel free to
          reach out.
        </p>

        <div className="space-y-4">
          <p>
            Email:{" "}
            <a
              href="mailto:work.devchristov@gmail.com"
              className="text-blue-400 hover:underline"
            >
              work.devchristov@gmail.com
            </a>
          </p>

          <p>
            GitHub:{" "}
            <a
              href="https://github.com/devchristov"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              github.com/devchristov
            </a>
          </p>

          <p>
            LinkedIn:{" "}
            <a
              href="https://linkedin.com/in/devidson-goenawan-536ba2286/"
              target="_blank"
              className="text-blue-400 hover:underline"
            >
              linkedin.com/in/devidson-goenawan
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
