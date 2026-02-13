import { useEffect, useState } from "react";

function Navbar() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { threshold: 0.6 },
    );

    sections.forEach((section) => observer.observe(section));

    const handleScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", handleScroll);
    return () => {
      sections.forEach((section) => observer.unobserve(section));
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const linkClass = (id) =>
    active === id
      ? "text-white font-semibold"
      : "text-gray-400 hover:text-white";

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] bg-black transition-all duration-300`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-white font-bold text-lg">Devidson Goenawan</h1>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-6">
          <li>
            <a href="#hero" className={linkClass("hero")}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" className={linkClass("about")}>
              About
            </a>
          </li>
          <li>
            <a href="#skills" className={linkClass("skills")}>
              Skills
            </a>
          </li>
          <li>
            <a href="#projects" className={linkClass("projects")}>
              Projects
            </a>
          </li>
          <li>
            <a href="#contact" className={linkClass("contact")}>
              Contact
            </a>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {["hero", "about", "skills", "projects", "contact"].map((id) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={linkClass(id)}
              >
                {id.charAt(0).toUpperCase() + id.slice(1)}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
