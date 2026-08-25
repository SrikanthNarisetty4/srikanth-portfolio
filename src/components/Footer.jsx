import {
  FaGithub,
  FaLinkedin,
  FaHeart,
  FaArrowUp,
  FaJava,
} from "react-icons/fa";

function Footer() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="relative bg-[#070B1A] text-white overflow-hidden">

      {/* ================= FOOTER CONTENT ================= */}

      <div className="max-w-7xl mx-auto px-6 pt-8 pb-8 md:pt-10 md:pb-10">

        <div className="grid md:grid-cols-3 gap-10 md:gap-14">

          {/* ================= BRAND ================= */}

          <div>

            {/* Java Logo + Brand */}

            <div className="flex items-center gap-3">

              <FaJava className="text-5xl text-orange-500" />

              <h2
                className="
                text-3xl
                font-bold
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-fuchsia-500
                bg-clip-text
                text-transparent
                "
              >
                Srikanth.dev
              </h2>

            </div>

            <p className="text-gray-400 mt-5 leading-7 max-w-md">

              Passionate Java Full Stack Developer focused on
              building scalable, secure and modern web applications.

            </p>

            <p className="text-gray-500 mt-4">

              Always learning. Always building. 🚀

            </p>

          </div>


          {/* ================= QUICK LINKS ================= */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Quick Links
            </h3>

            <div className="grid grid-cols-2 gap-y-4 text-gray-400">

              <button
                onClick={() => scrollToSection("home")}
                className="text-left hover:text-cyan-400 transition"
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="text-left hover:text-cyan-400 transition"
              >
                About
              </button>

              <button
                onClick={() => scrollToSection("skills")}
                className="text-left hover:text-cyan-400 transition"
              >
                Skills
              </button>

              <button
                onClick={() => scrollToSection("projects")}
                className="text-left hover:text-cyan-400 transition"
              >
                Projects
              </button>

              <button
                onClick={() => scrollToSection("education")}
                className="text-left hover:text-cyan-400 transition"
              >
                Education
              </button>

              <button
                onClick={() => scrollToSection("contact")}
                className="text-left hover:text-cyan-400 transition"
              >
                Contact
              </button>

            </div>

          </div>


          {/* ================= CONNECT ================= */}

          <div>

            <h3 className="text-2xl font-semibold mb-5">
              Connect With Me
            </h3>

            <p className="text-gray-400 mb-6 leading-7">
              Let's connect and build something meaningful together.
            </p>

            <div className="flex gap-4">

              {/* GitHub */}

              <a
                href="https://github.com/SrikanthNarisetty4"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="
                w-12
                h-12
                rounded-full
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-gray-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaGithub size={21} />
              </a>


              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/srikanth-narisetty-424558259/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="
                w-12
                h-12
                rounded-full
                border
                border-slate-700
                flex
                items-center
                justify-center
                text-gray-300
                hover:border-cyan-400
                hover:text-cyan-400
                hover:scale-110
                transition-all
                duration-300
                "
              >
                <FaLinkedin size={21} />
              </a>

            </div>

          </div>

        </div>


        {/* ================= COPYRIGHT ================= */}

        <div
          className="
          border-t
          border-white/5
          mt-8
          pt-6
          flex
          flex-col
          md:flex-row
          justify-between
          items-center
          gap-4
          "
        >

          <p className="text-gray-500 text-sm text-center md:text-left">

            © 2026 Srikanth Narisetty. All rights reserved.

          </p>


          <p className="text-gray-500 text-sm flex items-center gap-2">

            Made with

            <FaHeart className="text-red-500" />

            using React & Tailwind CSS

          </p>

        </div>

      </div>


      {/* ================= BACK TO TOP ================= */}

      <button
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          })
        }
        aria-label="Back to top"
        className="
        fixed
        bottom-6
        right-6
        z-50
        w-12
        h-12
        rounded-full
        bg-cyan-500
        text-white
        shadow-lg
        shadow-cyan-500/20
        hover:bg-cyan-400
        hover:scale-110
        transition-all
        duration-300
        flex
        items-center
        justify-center
        "
      >

        <FaArrowUp />

      </button>

    </footer>
  );
}

export default Footer;