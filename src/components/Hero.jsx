import { TypeAnimation } from "react-type-animation";
import CodeAnimation from "./CodeAnimation";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaCode,
  FaGraduationCap,
  FaJava,
  FaReact,
} from "react-icons/fa";

import { SiSpringboot, SiMysql } from "react-icons/si";

import Background from "./Background";
import profile from "../assets/profile.png";

function Hero() {
  return (
    <section
      id="home"
      className="
        relative
        w-full
        min-h-0
        lg:min-h-[780px]
        pt-24
        sm:pt-28
        lg:pt-24
        pb-12
        sm:pb-16
        lg:pb-10
        overflow-hidden
        bg-[#070B1A]
        text-white
      "
    >
      {/* ================= BACKGROUND ================= */}
      <Background />

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
          lg:px-8
        "
      >
        <div
          className="
            grid
            grid-cols-1
            lg:grid-cols-2
            gap-12
            lg:gap-10
            xl:gap-16
            items-center
          "
        >

          {/* ================================================= */}
          {/* LEFT SIDE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            className="
              min-w-0
              w-full
              text-center
              lg:text-left
            "
          >

            {/* Greeting */}

            <p
              className="
                text-cyan-400
                text-lg
                sm:text-xl
                md:text-2xl
                mb-4
              "
            >
              👋 Hello, I'm
            </p>


            {/* ================= NAME ================= */}

            <h1
              className="
                font-extrabold
                leading-[1.05]
                break-words
                text-5xl
                sm:text-6xl
                md:text-7xl
                lg:text-6xl
                xl:text-7xl
                bg-gradient-to-r
                from-blue-400
                via-cyan-300
                to-fuchsia-500
                bg-clip-text
                text-transparent
              "
            >
              Srikanth
              <br />
              Narisetty
            </h1>


            {/* ================= TYPING ================= */}

            <TypeAnimation
              sequence={[
                "Java Full Stack Developer",
                2000,
                "Spring Boot Developer",
                2000,
                "React Developer",
                2000,
                "Software Engineer",
                2000,
              ]}
              speed={50}
              repeat={Infinity}
              wrapper="span"
              className="
                block
                mt-5
                sm:mt-6
                text-2xl
                sm:text-3xl
                md:text-4xl
                lg:text-3xl
                xl:text-4xl
                font-semibold
                text-cyan-400
                min-h-[40px]
              "
            />


            {/* ================= OPEN TO WORK ================= */}

            <div
              className="
                mt-5
                inline-flex
                items-center
                gap-3
                rounded-full
                border
                border-green-500/40
                bg-green-500/10
                px-5
                py-2.5
              "
            >
              <span
                className="
                  w-3
                  h-3
                  rounded-full
                  bg-green-400
                  animate-pulse
                  shrink-0
                "
              />

              <span className="text-green-400 font-medium">
                Open to Work
              </span>
            </div>


            {/* ================= DESCRIPTION ================= */}

            <p
              className="
                mt-7
                text-base
                sm:text-lg
                md:text-xl
                lg:text-lg
                xl:text-xl
                leading-7
                sm:leading-8
                text-gray-300
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >
              Passionate Java Full Stack Developer with strong knowledge of
              Java, Spring Boot, React, MySQL and modern web technologies.

              <br />
              <br />

              I enjoy building scalable, secure and user-friendly applications
              that solve real-world problems.
            </p>


            {/* ================= BUTTONS ================= */}

            <div
              className="
                flex
                flex-col
                sm:flex-row
                gap-3
                sm:gap-4
                mt-7
                w-full
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >

              <Link
                to="projects"
                smooth={true}
                duration={500}
                offset={-80}
                className="
                  cursor-pointer
                  w-full
                  sm:w-auto
                  text-center
                  px-7
                  py-3.5
                  rounded-xl
                  bg-gradient-to-r
                  from-violet-600
                  to-fuchsia-600
                  hover:scale-105
                  transition
                  shadow-xl
                  shadow-fuchsia-600/30
                  font-medium
                "
              >
                🚀 View Projects
              </Link>


              <a
                href="/resume.pdf"
                download
                className="
                  w-full
                  sm:w-auto
                  text-center
                  px-7
                  py-3.5
                  rounded-xl
                  border
                  border-cyan-500
                  hover:bg-cyan-500
                  hover:text-black
                  transition
                  font-medium
                "
              >
                📄 Download Resume
              </a>

            </div>


            {/* ================= SOCIAL ICONS ================= */}

            <div
              className="
                flex
                justify-center
                lg:justify-start
                gap-4
                mt-7
              "
            >

              <a
                href="https://github.com/SrikanthNarisetty4"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:bg-fuchsia-600
                  hover:border-fuchsia-500
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaGithub size={21} />
              </a>


              <a
                href="https://www.linkedin.com/in/srikanth-narisetty-424558259/"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:bg-blue-500
                  hover:border-blue-500
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaLinkedin size={21} />
              </a>


              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=srikanthnarisetty4@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="
                  w-11
                  h-11
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:bg-red-500
                  hover:border-red-500
                  hover:scale-110
                  transition-all
                  duration-300
                "
              >
                <FaEnvelope size={21} />
              </a>

            </div>


            {/* ================= STATS ================= */}

            <div
              className="
                grid
                grid-cols-3
                gap-2
                sm:gap-4
                mt-7
                max-w-xl
                mx-auto
                lg:mx-0
              "
            >

              {/* Projects */}

              <div
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-2xl
                  p-3
                  sm:p-5
                  text-center
                  min-w-0
                "
              >

                <FaCode
                  className="
                    mx-auto
                    text-cyan-400
                    text-2xl
                    sm:text-3xl
                    mb-2
                  "
                />

                <h2 className="text-2xl sm:text-3xl font-bold">
                  5+
                </h2>

                <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                  Projects
                </p>

              </div>


              {/* Technologies */}

              <div
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-2xl
                  p-3
                  sm:p-5
                  text-center
                  min-w-0
                "
              >

                <h2
                  className="
                    text-2xl
                    sm:text-3xl
                    font-bold
                    text-fuchsia-400
                  "
                >
                  10+
                </h2>

                <p className="text-gray-400 mt-3 text-xs sm:text-sm">
                  Technologies
                </p>

              </div>


              {/* Graduate */}

              <div
                className="
                  bg-white/5
                  backdrop-blur-lg
                  border
                  border-white/10
                  rounded-2xl
                  p-3
                  sm:p-5
                  text-center
                  min-w-0
                "
              >

                <FaGraduationCap
                  className="
                    mx-auto
                    text-green-400
                    text-2xl
                    sm:text-3xl
                    mb-2
                  "
                />

                <h2 className="text-2xl sm:text-3xl font-bold">
                  2025
                </h2>

                <p className="text-gray-400 mt-1 text-xs sm:text-sm">
                  Graduate
                </p>

              </div>

            </div>

          </motion.div>


          {/* ================================================= */}
          {/* RIGHT SIDE / PROFILE */}
          {/* ================================================= */}

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{
              opacity: 1,
              x: 0,
              y: [0, -8, 0],
            }}
            transition={{
              duration: 0.9,
              y: {
                repeat: Infinity,
                duration: 6,
                ease: "easeInOut",
              },
            }}
            className="
              flex
              justify-center
              items-center
              w-full
              mt-4
              lg:mt-0
            "
          >

            {/* ================= PROFILE AREA ================= */}

            <div
              className="
                relative
                flex
                justify-center
                items-center

                w-[280px]
                h-[320px]

                sm:w-[330px]
                sm:h-[370px]

                md:w-[390px]
                md:h-[420px]

                lg:w-[410px]
                lg:h-[450px]

                xl:w-[450px]
                xl:h-[490px]
              "
            >

              {/* Code Animation */}

              <div className="hidden md:block">
                <CodeAnimation />
              </div>


              {/* ================= JAVA ================= */}

              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                  absolute
                  z-30
                  left-0
                  md:-left-8
                  lg:-left-10
                  top-5
                  md:top-8

                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  md:w-16
                  md:h-16

                  rounded-full
                  bg-[#1A1F35]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <FaJava className="text-orange-500 text-2xl sm:text-3xl" />
              </motion.div>


              {/* ================= REACT ================= */}

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="
                  absolute
                  z-30
                  right-0
                  md:-right-8
                  lg:-right-10
                  top-8
                  md:top-12

                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  md:w-16
                  md:h-16

                  rounded-full
                  bg-[#1A1F35]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <FaReact className="text-cyan-400 text-2xl sm:text-3xl" />
              </motion.div>


              {/* ================= SPRING BOOT ================= */}

              <motion.div
                animate={{ x: [0, 8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 3,
                }}
                className="
                  absolute
                  z-30
                  left-0
                  md:-left-8
                  lg:-left-10
                  bottom-12
                  md:bottom-20

                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  md:w-16
                  md:h-16

                  rounded-full
                  bg-[#1A1F35]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <SiSpringboot className="text-green-400 text-2xl sm:text-3xl" />
              </motion.div>


              {/* ================= MYSQL ================= */}

              <motion.div
                animate={{ x: [0, -8, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="
                  absolute
                  z-30
                  right-0
                  md:-right-8
                  lg:-right-10
                  bottom-12
                  md:bottom-20

                  w-12
                  h-12
                  sm:w-14
                  sm:h-14
                  md:w-16
                  md:h-16

                  rounded-full
                  bg-[#1A1F35]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  shadow-lg
                "
              >
                <SiMysql className="text-blue-400 text-2xl sm:text-3xl" />
              </motion.div>


              {/* ================= OUTER RING ================= */}

              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 18,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-1
                  sm:-inset-2
                  md:-inset-3
                  rounded-full
                  border-[3px]
                  md:border-4
                  border-fuchsia-500
                  pointer-events-none
                "
              />


              {/* ================= SECOND RING ================= */}

              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  inset-4
                  sm:inset-2
                  md:inset-1
                  rounded-full
                  border
                  border-cyan-400
                  pointer-events-none
                "
              />


              {/* ================= PURPLE GLOW ================= */}

              <div
                className="
                  absolute
                  inset-10
                  rounded-full
                  bg-fuchsia-600
                  blur-3xl
                  opacity-30
                  pointer-events-none
                "
              />


              {/* ================= PROFILE IMAGE ================= */}

              <img
                src={profile}
                alt="Srikanth"
                className="
                  relative
                  z-20

                  w-[220px]
                  h-[220px]

                  sm:w-[270px]
                  sm:h-[270px]

                  md:w-[330px]
                  md:h-[330px]

                  lg:w-[375px]
                  lg:h-[375px]

                  xl:w-[410px]
                  xl:h-[410px]

                  rounded-full
                  object-cover
                  border-4
                  border-white/20
                  shadow-2xl
                "
              />


              {/* ================= BOTTOM BADGE ================= */}

              <motion.div
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                animate={{
                  opacity: 1,
                  y: [0, -5, 0],
                }}
                transition={{
                  opacity: {
                    duration: 1.2,
                  },
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  },
                }}
                className="
                  absolute
                  left-1/2
                  -translate-x-1/2
                  bottom-0
                  sm:-bottom-2
                  md:-bottom-6
                  z-40

                  bg-white/10
                  backdrop-blur-xl
                  border
                  border-fuchsia-400/30
                  rounded-2xl
                  px-4
                  py-3
                  shadow-2xl
                  shadow-fuchsia-500/20

                  w-[180px]
                  sm:w-[220px]
                  md:w-[250px]

                  text-center
                "
              >

                <p className="text-sm sm:text-lg font-bold text-white">
                  💻 Java Full Stack
                </p>

                <p className="text-cyan-400 text-sm sm:text-base font-semibold">
                  Developer
                </p>

              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>


      {/* ================= SCROLL DOWN ================= */}

      <motion.div
        animate={{
          y: [0, 12, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 1.5,
        }}
        className="
          hidden
          sm:block
          absolute
          bottom-5
          left-1/2
          -translate-x-1/2
          z-20
        "
      >

        <Link
          to="about"
          smooth={true}
          duration={500}
          offset={-80}
          className="cursor-pointer flex flex-col items-center"
        >

          <span className="text-gray-400 text-sm mb-2">
            Scroll Down
          </span>

          <div
            className="
              w-6
              h-10
              rounded-full
              border-2
              border-gray-500
              flex
              justify-center
            "
          >

            <motion.div
              animate={{
                y: [0, 10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 1.5,
              }}
              className="
                w-2
                h-2
                rounded-full
                bg-cyan-400
                mt-2
              "
            />

          </div>

        </Link>

      </motion.div>

    </section>
  );
}

export default Hero;