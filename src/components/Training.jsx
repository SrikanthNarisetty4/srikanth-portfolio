import { motion } from "framer-motion";
import { FaLaptopCode } from "react-icons/fa";

function Training() {
  return (
    <section
      id="training"
      className="py-24 bg-linear-to-b from-[#0B1224] to-[#070B1A] text-white"
    >
      <div className="max-w-6xl mx-auto px-6">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
            Training
          </p>

          <h2 className="text-5xl md:text-6xl font-bold">
            Professional{" "}
            <span className="bg-linear-to-r from-cyan-400 via-blue-400 to-fuchsia-500 bg-clip-text text-transparent">
              Training
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto">
            Strengthening my software development skills through hands-on
            training and real-world project development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.02 }}
          className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-8 hover:border-cyan-500/40 transition duration-500"
        >
          <div className="flex gap-6">

            <div className="w-16 h-16 rounded-full bg-cyan-500 flex items-center justify-center text-3xl shadow-lg shadow-cyan-500/40">
              <FaLaptopCode />
            </div>

            <div className="flex-1">

              <div className="flex flex-col md:flex-row md:justify-between">

                <div>
                  <h3 className="text-3xl font-bold">
                    Java Full Stack Development
                  </h3>

                  <a
  href="https://www.vcubesoftsolutions.com/"
  target="_blank"
  rel="noopener noreferrer"
  className="text-cyan-400 mt-2 inline-block hover:text-fuchsia-400 transition duration-300 hover:underline"
>
  V Cube Software Solutions
</a>
                </div>

                <span className="mt-4 md:mt-0 px-5 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 h-fit">
                  2025 – Present
                </span>

              </div>

              <p className="text-gray-300 mt-6 leading-8">
                Currently undergoing professional training in Java Full Stack
                Development with practical exposure to enterprise application
                development, REST APIs, databases, and modern frontend
                technologies.
              </p>

              <div className="flex flex-wrap gap-3 mt-8">

                {[
                  "Core Java",
                  "Advanced Java",
                  "JDBC",
                  "Servlets",
                  "JSP",
                  "Spring Boot",
                  "React",
                  "MySQL",
                  "Git",
                  "HTML",
                  "CSS",
                  "JavaScript",
                ].map((skill, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 rounded-full bg-slate-800 border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500 hover:text-black transition"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Training;