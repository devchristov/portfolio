function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center bg-black text-white px-6 relative z-0"
    >
      <div className="max-w-6xl mx-auto w-full">
        <p className="text-gray-400 mb-4">Hello I'm</p>

        <h1 className="text-5xl md:text-7xl font-bold leading-tight">
          Devidson Goenawan
        </h1>

        <h2 className="text-4xl md:text-6xl font-bold text-gray-500 mt-2">
          I build modern web interfaces.
        </h2>

        <p className="mt-6 max-w-xl text-gray-400">
          Fullstack Web Developer building modern, scalable, and user-focused
          web applications.
        </p>

        <div className="mt-8">
          <a
            href="#projects"
            className="border border-white px-6 py-3 hover:bg-white hover:text-black transition"
          >
            View My Work
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
