import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import projects from "../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="relative pt-10 pb-20 md:pb-24 bg-[#070B1A] text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          bg-fuchsia-600/10
          rounded-full
          blur-[140px]
          pointer-events-none
        "
      />

      <div className="relative z-10 max-w-[1500px] mx-auto px-6 md:px-10 lg:px-14">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-cyan-400 uppercase tracking-[5px] mb-3 text-sm md:text-base">
            Portfolio
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">
            My{" "}
            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              Projects
            </span>
          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-7">
            Here are some of the projects I've built using Java, Spring Boot,
            React, MySQL, Python, and modern web technologies.
          </p>
        </motion.div>


        {/* ================= PROJECT CARDS ================= */}

        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -8,
              }}
              className="
                group
                relative
                rounded-3xl
                overflow-hidden
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                hover:border-cyan-400/30
                transition-all
                duration-500
                hover:shadow-[0_0_35px_rgba(34,211,238,0.15)]
              "
            >

              {/* ================= FEATURED BADGE ================= */}

              {index === 0 && (
                <div
                  className="
                    absolute
                    top-5
                    left-5
                    z-20
                    px-4
                    py-2
                    rounded-full
                    bg-fuchsia-600/90
                    backdrop-blur-md
                    text-sm
                    font-semibold
                    shadow-lg
                    shadow-fuchsia-500/20
                  "
                >
                  ⭐ Featured
                </div>
              )}


              {/* ================= IMAGE ================= */}

              <div className="relative overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="
                    w-full
                    h-56
                    md:h-60
                    object-cover
                    transition-transform
                    duration-700
                    group-hover:scale-105
                  "
                />

                {/* Image Overlay */}

                <div
                  className="
                    absolute
                    inset-0
                    bg-gradient-to-t
                    from-[#070B1A]/70
                    via-transparent
                    to-transparent
                    pointer-events-none
                  "
                />

              </div>


              {/* ================= CONTENT ================= */}

              <div className="p-7 md:p-8">

                <h3
                  className="
                    text-2xl
                    md:text-3xl
                    font-bold
                    mb-4
                    group-hover:text-cyan-400
                    transition
                    duration-300
                  "
                >
                  {project.title}
                </h3>


                <p className="text-gray-400 leading-7 mb-6">
                  {project.description}
                </p>


                {/* ================= TECH STACK ================= */}

                <div className="flex flex-wrap gap-2.5 mb-7">

                  {project.tech.map((tech, i) => (

                    <span
                      key={i}
                      className="
                        px-3.5
                        py-1.5
                        rounded-full
                        bg-cyan-500/5
                        border
                        border-cyan-500/20
                        text-cyan-300
                        text-sm
                        transition-all
                        duration-300
                        hover:bg-cyan-500/10
                        hover:border-cyan-400/40
                      "
                    >
                      {tech}
                    </span>

                  ))}

                </div>


                {/* ================= BUTTONS ================= */}

                <div className="flex gap-3 flex-wrap">

                  {/* GitHub */}

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      bg-slate-800/80
                      border
                      border-slate-700
                      text-gray-200
                      hover:bg-cyan-500
                      hover:border-cyan-500
                      hover:text-slate-950
                      transition-all
                      duration-300
                    "
                  >
                    <FaGithub size={17} />
                    GitHub
                  </a>


                  {/* Demo Coming Soon */}

                  <button
                    type="button"
                    disabled
                    className="
                      flex
                      items-center
                      gap-2
                      px-5
                      py-3
                      rounded-xl
                      border
                      border-slate-700
                      bg-slate-900/50
                      text-gray-500
                      cursor-not-allowed
                    "
                  >
                    <FaExternalLinkAlt size={15} />
                    Demo Coming Soon
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;