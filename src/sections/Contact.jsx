import { Mail, Github, Linkedin } from "lucide-react";

function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen bg-black text-white px-6 py-20 flex items-center"
    >
      <div className="max-w-4xl mx-auto w-full text-center">
        <h2 className="text-4xl font-bold mb-6">Let’s Connect</h2>

        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Interested in collaborating, building something impactful, or
          discussing opportunities? I’m always open to meaningful conversations.
        </p>

        <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-10 space-y-6">
          <a
            href="mailto:work.devchristov@gmail.com"
            className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <Mail size={20} />
            <span>devchristov@gmail.com</span>
          </a>

          <a
            href="https://github.com/devtryr"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <Github size={20} />
            <span>github.com/devtryr</span>
          </a>

          <a
            href="https://linkedin.com/in/devidson-goenawan-536ba2286/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-3 p-4 rounded-xl hover:bg-white/10 transition-all duration-300"
          >
            <Linkedin size={20} />
            <span>linkedin.com/in/devidson-goenawan</span>
          </a>
        </div>

        <div className="mt-12">
          <a
            href="mailto:work.devchristov@gmail.com"
            className="inline-block bg-white text-black px-8 py-3 rounded-full font-semibold hover:scale-105 transition-all duration-300"
          >
            Send Me an Email
          </a>
        </div>
      </div>
    </section>
  );
}

export default Contact;
