import { motion } from "framer-motion";
import { FaGraduationCap, FaSchool } from "react-icons/fa";

const education = [
  {
    icon: <FaGraduationCap />,
    title: "Bachelor of Technology (B.Tech)",
    institute: "Tirumala Engineering College, Narasaraopeta",
    specialization: "Information Technology",
    score: "CGPA: 7.9",
    year: "2021 – 2025",
  },
  {
    icon: <FaSchool />,
    title: "Intermediate (MPC)",
    institute: "Oxford VIT Junior College, Narasaraopet",
    specialization: "Board of Intermediate Education",
    score: "Percentage: 86.5%",
    year: "2019 – 2021",
  },
  {
    icon: <FaSchool />,
    title: "Secondary School Education (SSC)",
    institute: "Andhra High School, Narasaraopet",
    specialization: "Board of Secondary Education",
    score: "CGPA: 9.3",
    year: "2018 – 2019",
  },
];

function Education() {
  return (
    <section
      id="education"
      className="
        relative
        pt-28
        pb-20
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
          h-[350px]
          bg-fuchsia-600/10
          rounded-full
          blur-[140px]
          pointer-events-none
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          w-[350px]
          h-[300px]
          bg-cyan-500/5
          rounded-full
          blur-[120px]
          pointer-events-none
        "
      />

      {/* ================= CONTENT ================= */}

      <div className="relative z-10 max-w-6xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
            Education
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">

            Academic{" "}

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
              Journey
            </span>

          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            My educational journey that built a strong foundation in software
            development and problem-solving.
          </p>

        </motion.div>


        {/* ================= TIMELINE ================= */}

        <div className="relative">

          {/* Vertical Line */}

          <div
            className="
              absolute
              left-7
              top-0
              bottom-0
              w-1
              bg-gradient-to-b
              from-cyan-500
              via-blue-500
              to-fuchsia-500
              rounded-full
            "
          />


          <div className="space-y-12">

            {education.map((item, index) => (

              <motion.div
                key={index}
                initial={{ opacity: 0, x: -80 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.7,
                  delay: index * 0.2,
                }}
                viewport={{ once: true }}
                className="
                  relative
                  flex
                  items-start
                  gap-8
                "
              >

                {/* ================= TIMELINE ICON ================= */}

                <div
                  className="
                    relative
                    z-10
                    flex-shrink-0
                    w-14
                    h-14
                    rounded-full
                    bg-cyan-500
                    flex
                    items-center
                    justify-center
                    text-2xl
                    text-white
                    shadow-lg
                    shadow-cyan-500/50
                  "
                >
                  {item.icon}
                </div>


                {/* ================= EDUCATION CARD ================= */}

                <div
                  className="
                    flex-1
                    bg-white/5
                    backdrop-blur-xl
                    border
                    border-white/10
                    rounded-3xl
                    p-8
                    hover:border-cyan-500/40
                    hover:shadow-xl
                    hover:shadow-cyan-500/20
                    transition-all
                    duration-500
                  "
                >

                  <div
                    className="
                      flex
                      flex-col
                      md:flex-row
                      md:justify-between
                      md:items-center
                    "
                  >

                    <div>

                      <h3 className="text-2xl font-bold">
                        {item.title}
                      </h3>

                      <p className="text-cyan-400 mt-2">
                        {item.institute}
                      </p>

                    </div>


                    {/* YEAR */}

                    <span
                      className="
                        mt-4
                        md:mt-0
                        bg-cyan-500/10
                        border
                        border-cyan-500/30
                        text-cyan-300
                        px-5
                        py-2
                        rounded-full
                        whitespace-nowrap
                      "
                    >
                      {item.year}
                    </span>

                  </div>


                  <p className="text-gray-300 mt-5">
                    {item.specialization}
                  </p>


                  <p className="text-fuchsia-400 font-semibold mt-3">
                    {item.score}
                  </p>

                </div>

              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;