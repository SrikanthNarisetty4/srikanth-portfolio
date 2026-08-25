import { motion } from "framer-motion";
import skills from "../data/skills";

function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        pt-24
        pb-16
        bg-[#070B1A]
        text-white
        overflow-hidden
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          top-1/3
          left-1/2
          -translate-x-1/2
          w-[500px]
          h-[300px]
          bg-cyan-500/5
          rounded-full
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          right-0
          w-[400px]
          h-[300px]
          bg-fuchsia-600/5
          rounded-full
          blur-[130px]
          pointer-events-none
        "
      />


      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-8">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >

          <p className="uppercase tracking-[5px] text-cyan-400 mb-3 text-sm">
            Expertise
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
              Skills
            </span>

          </h2>

        </motion.div>


        {/* ================= SKILL CARDS ================= */}

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
              }}
              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="
                group
                relative
                bg-white/5
                backdrop-blur-xl
                border
                border-white/10
                rounded-2xl
                p-6
                transition-all
                duration-300
                hover:border-cyan-400/40
                hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
              "
            >

              {/* Skill Icon */}

              <div
                className="
                  text-5xl
                  transition-transform
                  duration-300
                  group-hover:scale-110
                "
              >
                {skill.icon}
              </div>


              {/* Skill Name */}

              <h3
                className="
                  text-xl
                  md:text-2xl
                  font-bold
                  mt-5
                  group-hover:text-cyan-400
                  transition-colors
                  duration-300
                "
              >
                {skill.name}
              </h3>


              {/* ================= PROFICIENCY ================= */}

              <div className="mt-6">

                <div className="flex justify-between text-sm mb-2">

                  <span className="text-gray-400">
                    Proficiency
                  </span>

                  <span className="text-cyan-400 font-semibold">
                    {skill.level}%
                  </span>

                </div>


                {/* Progress Background */}

                <div
                  className="
                    w-full
                    h-2.5
                    bg-slate-800
                    rounded-full
                    overflow-hidden
                  "
                >

                  <motion.div
                    initial={{ width: 0 }}

                    whileInView={{
                      width: `${skill.level}%`,
                    }}

                    transition={{
                      duration: 1.5,
                      delay: 0.2,
                      ease: "easeOut",
                    }}

                    viewport={{
                      once: true,
                    }}

                    className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      ${skill.color}
                    `}
                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>


        {/* ================= BOTTOM SPACE ================= */}

        <div className="h-4" />

      </div>

    </section>
  );
}

export default Skills;