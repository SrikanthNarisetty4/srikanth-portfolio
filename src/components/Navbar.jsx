import { useState, useEffect } from "react";
import {
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,
  FaJava,
} from "react-icons/fa";
import { Link } from "react-scroll";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", to: "home" },
    { name: "About", to: "about" },
    { name: "Skills", to: "skills" },
    { name: "Projects", to: "projects" },
    { name: "Education", to: "education" },
    { name: "Training", to: "training" },
    { name: "Contact", to: "contact" },
  ];

  useEffect(() => {
    let previousScroll = window.scrollY;

    const handleScroll = () => {
      const currentScroll = window.scrollY;

      setScrolled(currentScroll > 20);

      if (currentScroll <= 20) {
        setShowNavbar(true);
      } else if (currentScroll > previousScroll) {
        // scrolling down
        setShowNavbar(false);
        setMenuOpen(false);
      } else {
        // scrolling up
        setShowNavbar(true);
      }

      previousScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      } ${
        scrolled
          ? "bg-slate-950/80 backdrop-blur-xl border-b border-slate-800 shadow-lg"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 lg:px-8 py-4">

        {/* Logo */}
        <Link
          to="home"
          smooth={true}
          duration={500}
          offset={-80}
          className="flex items-center gap-2 cursor-pointer"
        >
          {/* Java Logo */}
          <FaJava className="text-3xl text-orange-500" />

          <h1 className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent whitespace-nowrap">
            Srikanth.dev
          </h1>
        </Link>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-7 text-gray-300 font-medium">

          {navLinks.map((item) => (
            <li key={item.to}>
              <Link
                to={item.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-cyan-400"
                className="cursor-pointer hover:text-cyan-400 transition"
              >
                {item.name}
              </Link>
            </li>
          ))}

        </ul>

        {/* Desktop Icons */}

        <div className="hidden lg:flex items-center gap-4">

          <a
            href="https://github.com/SrikanthNarisetty4"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/srikanth-narisetty-424558259/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition"
          >
            <FaLinkedin />
          </a>

        </div>

        {/* Mobile Menu Button */}

        <button
          className="lg:hidden text-white text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}

      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ${
          menuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-slate-950/95 backdrop-blur-xl border-t border-slate-800 px-6 py-6">

          <ul className="flex flex-col gap-6 text-lg text-gray-300">

            {navLinks.map((item) => (
              <li key={item.to}>
                <Link
                  to={item.to}
                  spy={true}
                  smooth={true}
                  offset={-80}
                  duration={500}
                  onClick={() => setMenuOpen(false)}
                  activeClass="text-cyan-400"
                  className="cursor-pointer hover:text-cyan-400 transition"
                >
                  {item.name}
                </Link>
              </li>
            ))}

          </ul>

          {/* Divider */}

          <div className="border-t border-slate-800 my-6"></div>

          {/* Social Icons */}

          <div className="flex items-center gap-4">

            <a
              href="https://github.com/SrikanthNarisetty4"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.linkedin.com/in/srikanth-narisetty-424558259/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-11 h-11 rounded-full border border-slate-700 flex items-center justify-center hover:border-cyan-400 hover:text-cyan-400 hover:scale-110 transition"
            >
              <FaLinkedin size={20} />
            </a>

          </div>

        </div>
      </div>

    </nav>
  );
}

export default Navbar;