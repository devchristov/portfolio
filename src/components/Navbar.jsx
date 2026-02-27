import { useEffect, useState } from "react";
import { Home, User, Code, Folder, Mail } from "lucide-react";
import profile from "../assets/IMG_9396.JPG";

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

  const menuItems = [
    { id: "hero", label: "Home", icon: Home },
    { id: "about", label: "About", icon: User },
    { id: "skills", label: "Skills", icon: Code },
    { id: "projects", label: "Projects", icon: Folder },
    { id: "contact", label: "Contact", icon: Mail },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-[999] transition-all duration-300 ${
        scrolled ? "bg-black shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo + Profile */}
        <div className="flex items-center gap-3 cursor-pointer">
          <img
            src={profile}
            alt="Devidson Goenawan"
            className="w-9 h-9 rounded-full object-cover border border-gray-700 shadow-sm transition hover:scale-105"
          />
          <h1 className="text-white font-bold text-lg">Devidson Goenawan</h1>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-white text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={`${linkClass(
                  id,
                )} flex items-center gap-2 transition hover:-translate-y-0.5`}
              >
                <Icon size={18} className="opacity-80" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-black overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100 py-4" : "max-h-0 opacity-0 py-0"
        }`}
      >
        <ul className="flex flex-col gap-4 px-6">
          {menuItems.map(({ id, label, icon: Icon }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                onClick={() => setMenuOpen(false)}
                className={`${linkClass(id)} flex items-center gap-2`}
              >
                <Icon size={18} className="opacity-80" />
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
