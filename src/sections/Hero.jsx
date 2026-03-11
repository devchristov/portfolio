import { ArrowRight, Mail } from "lucide-react";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-black text-white px-6 relative z-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-gray-400 mb-4 tracking-wide">
          Fullstack Web Developer
        </p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Devidson Goenawan
        </h1>

        <h2 className="text-3xl md:text-5xl font-semibold text-gray-500 mt-4 leading-snug">
          I design and build scalable web systems.
        </h2>

        <p className="mt-6 max-w-xl text-gray-400 leading-relaxed">
          I specialize in developing structured, secure, and maintainable web
          applications — from system architecture to modern user interfaces.
        </p>

        <div className="mt-10 flex gap-4">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-medium transition-all duration-300 hover:bg-neutral-200"
          >
            View My Work
            <ArrowRight size={18} />
          </a>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 border border-gray-600 px-6 py-3 rounded-xl transition-all duration-300 hover:border-white"
          >
            <Mail size={18} />
            Contact Me
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
