import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDatabase,
  FaCode,
  FaGraduationCap,
  FaMapMarkerAlt,
} from "react-icons/fa";

function About() {
  const cards = [
    {
      icon: <FaJava className="text-4xl sm:text-5xl text-orange-500" />,
      title: "Java",
      desc: "Core Java, OOP, Collections, Multithreading",
    },
    {
      icon: <FaReact className="text-4xl sm:text-5xl text-cyan-400" />,
      title: "React",
      desc: "ReactJS, Hooks, Components",
    },
    {
      icon: <FaDatabase className="text-4xl sm:text-5xl text-blue-400" />,
      title: "MySQL",
      desc: "Database Design & SQL",
    },
    {
      icon: <FaCode className="text-4xl sm:text-5xl text-green-400" />,
      title: "Spring Boot",
      desc: "REST APIs & Backend Development",
    },
  ];

  return (
    <section
      id="about"
      className="
        relative
        w-full
        overflow-hidden
        pt-20
        sm:pt-24
        lg:pt-28
        pb-20
        sm:pb-24
        bg-[#070B1A]
        text-white
      "
    >

      {/* ================= BACKGROUND GLOW ================= */}

      <div
        className="
          absolute
          top-20
          left-0
          sm:left-10
          w-64
          sm:w-80
          h-64
          sm:h-80
          bg-blue-500
          opacity-10
          blur-[120px]
          sm:blur-[150px]
          rounded-full
          pointer-events-none
        "
      />


      {/* ================= MAIN CONTAINER ================= */}

      <div
        className="
          relative
          z-10
          w-full
          max-w-7xl
          mx-auto
          px-5
          sm:px-6
          md:px-10
          lg:px-14
        "
      >

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14 sm:mb-16 lg:mb-20"
        >

          <p className="text-cyan-400 uppercase tracking-[5px] text-sm sm:text-base mb-3">
            About
          </p>

          <h2
            className="
              text-4xl
              sm:text-5xl
              md:text-6xl
              font-bold
            "
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Me
            </span>
          </h2>

        </motion.div>


        {/* ================= CONTENT ================= */}

        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-16
            items-start
          "
        >

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="min-w-0"
          >

            <h3
              className="
                text-2xl
                sm:text-3xl
                font-bold
                mb-5
                sm:mb-6
              "
            >
              Java Full Stack Developer
            </h3>


            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                text-gray-400
                leading-8
                text-base
                sm:text-lg
              "
            >
              I'm{" "}
              <span className="text-blue-400 font-semibold">
                Srikanth Narisetty
              </span>
              , a passionate Java Full Stack Developer with a strong
              foundation in Java, Spring Boot, React, MySQL and REST APIs.

              <br />
              <br />

              I enjoy building scalable web applications, learning modern
              technologies and solving real-world problems through software.

              <br />
              <br />

              Currently looking for an opportunity where I can grow as a
              Software Engineer and contribute to impactful projects.
            </p>


            {/* ================================================= */}
            {/* INFORMATION CARDS */}
            {/* ================================================= */}

            <div
              className="
                grid
                grid-cols-1
                sm:grid-cols-2
                gap-5
                sm:gap-6
                mt-8
                sm:mt-10
              "
            >

              {/* Education */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-5
                  sm:p-6
                  hover:border-blue-500/50
                  transition
                  duration-300
                "
              >

                <FaGraduationCap
                  className="
                    text-blue-400
                    text-2xl
                    sm:text-3xl
                    mb-3
                  "
                />

                <h4 className="font-semibold text-lg">
                  Education
                </h4>

                <p className="text-gray-400 mt-2 leading-7">
                  B.Tech Information Technology
                  <br />
                  2025 Graduate
                </p>

              </motion.div>


              {/* Location */}

              <motion.div
                whileHover={{
                  y: -6,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-5
                  sm:p-6
                  hover:border-blue-500/50
                  transition
                  duration-300
                "
              >

                <FaMapMarkerAlt
                  className="
                    text-blue-400
                    text-2xl
                    sm:text-3xl
                    mb-3
                  "
                />

                <h4 className="font-semibold text-lg">
                  Location
                </h4>

                <p className="text-gray-400 mt-2 leading-7">
                  Hyderabad
                  <br />
                  Open to Relocation
                </p>

              </motion.div>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* RIGHT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="
              grid
              grid-cols-1
              sm:grid-cols-2
              gap-5
              sm:gap-6
              min-w-0
            "
          >

            {cards.map((card, index) => (

              <motion.div
                key={index}
                whileHover={{
                  y: -8,
                  scale: 1.02,
                }}
                transition={{ duration: 0.3 }}
                className="
                  bg-slate-900
                  border
                  border-slate-800
                  rounded-2xl
                  p-6
                  sm:p-7
                  hover:border-blue-500
                  hover:shadow-lg
                  hover:shadow-blue-500/10
                  transition
                  duration-300
                  min-w-0
                "
              >

                {/* Icon */}

                {card.icon}


                {/* Title */}

                <h3
                  className="
                    text-xl
                    sm:text-2xl
                    font-bold
                    mt-5
                    sm:mt-6
                  "
                >
                  {card.title}
                </h3>


                {/* Description */}

                <p
                  className="
                    text-gray-400
                    mt-3
                    sm:mt-4
                    leading-7
                    text-sm
                    sm:text-base
                  "
                >
                  {card.desc}
                </p>

              </motion.div>

            ))}

          </motion.div>

        </div>

      </div>

    </section>
  );
}

export default About;