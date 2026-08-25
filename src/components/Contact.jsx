import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);
    setResult("");

    const form = event.target;
    const formData = new FormData(form);

    formData.append(
      "access_key",
      "dc3d17a6-c88f-4070-bfb7-de3fc775d66b"
    );

    formData.append(
      "subject",
      "📩 New Portfolio Contact Message"
    );

    formData.append(
      "from_name",
      "Srikanth Portfolio Website"
    );

    try {
      const response = await fetch(
        "https://api.web3forms.com/submit",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (data.success) {
        setResult(
          "✅ Thank you! Your message has been sent successfully."
        );

        form.reset();

        setTimeout(() => {
          setResult("");
        }, 5000);
      } else {
        setResult(
          "❌ Failed to send your message. Please try again."
        );
      }
    } catch (error) {
      setResult(
        "❌ Something went wrong. Please try again later."
      );
    }

    setLoading(false);
  };

  return (
    <section
      id="contact"
      className="relative pt-10 pb-12 md:pt-14 md:pb-16 bg-[#070B1A] text-white overflow-hidden"
    >

      {/* Background Glow */}

      <div className="absolute inset-0 pointer-events-none">

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
          "
        />

      </div>

      <div className="relative max-w-7xl mx-auto px-6">

        {/* ================= HEADING ================= */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >

          <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
            Contact
          </p>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold">

            Get In{" "}

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
              Touch
            </span>

          </h2>

          <p className="text-gray-400 mt-5 max-w-3xl mx-auto leading-7">
            I'm currently looking for Java Full Stack opportunities,
            internships and exciting projects.
            Feel free to contact me anytime.
          </p>

        </motion.div>


        {/* ================= CONTACT GRID ================= */}

        <div className="grid lg:grid-cols-2 gap-8">

          {/* ================= LEFT CARD ================= */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            md:p-8
            "
          >

            <h3 className="text-2xl md:text-3xl font-bold mb-7">
              Contact Information
            </h3>


            {/* EMAIL */}

            <div className="flex items-center gap-5 mb-7">

              <div
                className="
                flex-shrink-0
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-400/20
                text-cyan-400
                flex
                items-center
                justify-center
                "
              >
                <FaEnvelope size={21} />
              </div>

              <div className="min-w-0">

                <p className="text-gray-400 text-sm mb-1">
                  Email
                </p>

                <a
                  href="mailto:srikanthnarisetty4@gmail.com"
                  className="break-all hover:text-cyan-400 transition"
                >
                  srikanthnarisetty4@gmail.com
                </a>

              </div>

            </div>


            {/* PHONE */}

            <div className="flex items-center gap-5 mb-7">

              <div
                className="
                flex-shrink-0
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-400/20
                text-cyan-400
                flex
                items-center
                justify-center
                "
              >
                <FaPhoneAlt size={19} />
              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Phone
                </p>

                <a
                  href="tel:+919182509068"
                  className="hover:text-cyan-400 transition"
                >
                  +91 9182509068
                </a>

              </div>

            </div>


            {/* LOCATION */}

            <div className="flex items-center gap-5">

              <div
                className="
                flex-shrink-0
                w-14
                h-14
                rounded-2xl
                bg-cyan-500/10
                border
                border-cyan-400/20
                text-cyan-400
                flex
                items-center
                justify-center
                "
              >
                <FaMapMarkerAlt size={20} />
              </div>

              <div>

                <p className="text-gray-400 text-sm mb-1">
                  Location
                </p>

                <p>
                  Hyderabad, Telangana, India
                </p>

              </div>

            </div>


            {/* SOCIAL */}

            <div className="mt-9 pt-7 border-t border-white/10">

              <h4 className="text-xl font-semibold mb-5">
                Connect With Me
              </h4>

              <div className="flex gap-4">

                <a
                  href="https://github.com/SrikanthNarisetty4"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-400
                  hover:text-cyan-400
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaGithub size={22} />
                </a>

                <a
                  href="https://www.linkedin.com/in/srikanth-narisetty-424558259/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="
                  w-12
                  h-12
                  rounded-full
                  border
                  border-slate-700
                  flex
                  items-center
                  justify-center
                  hover:border-cyan-400
                  hover:text-cyan-400
                  hover:scale-110
                  transition
                  duration-300
                  "
                >
                  <FaLinkedin size={22} />
                </a>

              </div>

            </div>

          </motion.div>


          {/* ================= MESSAGE FORM ================= */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
            bg-white/5
            backdrop-blur-xl
            border
            border-white/10
            rounded-3xl
            p-7
            md:p-8
            "
          >

            <h3 className="text-2xl md:text-3xl font-bold mb-7">
              Send Me a Message
            </h3>

            <form
              onSubmit={onSubmit}
              className="space-y-5"
            >

              {/* NAME */}

              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="
                w-full
                bg-slate-900/80
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                transition
                "
              />


              {/* EMAIL */}

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="
                w-full
                bg-slate-900/80
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                transition
                "
              />


              {/* SUBJECT */}

              <input
                type="text"
                name="message_subject"
                placeholder="Subject"
                required
                className="
                w-full
                bg-slate-900/80
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                transition
                "
              />


              {/* MESSAGE */}

              <textarea
                name="message"
                rows="5"
                placeholder="Write your message..."
                required
                className="
                w-full
                bg-slate-900/80
                border
                border-slate-700
                rounded-xl
                px-5
                py-4
                text-white
                placeholder-gray-500
                outline-none
                resize-none
                focus:border-cyan-400
                focus:ring-1
                focus:ring-cyan-400
                transition
                "
              />


              {/* SUBMIT */}

              <button
                type="submit"
                disabled={loading}
                className="
                w-full
                py-4
                rounded-xl
                bg-gradient-to-r
                from-cyan-500
                via-blue-500
                to-fuchsia-500
                text-lg
                font-semibold
                hover:scale-[1.02]
                hover:shadow-lg
                hover:shadow-cyan-500/20
                transition-all
                duration-300
                disabled:opacity-60
                disabled:cursor-not-allowed
                disabled:hover:scale-100
                "
              >

                {loading ? (

                  <span className="flex items-center justify-center gap-3">

                    <svg
                      className="animate-spin h-5 w-5"
                      viewBox="0 0 24 24"
                      fill="none"
                    >

                      <circle
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="white"
                        strokeWidth="4"
                        strokeOpacity=".3"
                      />

                      <path
                        d="M22 12a10 10 0 0 1-10 10"
                        stroke="white"
                        strokeWidth="4"
                      />

                    </svg>

                    Sending...

                  </span>

                ) : (

                  "Send Message 🚀"

                )}

              </button>


              {/* RESULT MESSAGE */}

              {result && (

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`
                  rounded-xl
                  border
                  p-4
                  text-center
                  font-medium
                  ${
                    result.startsWith("✅")
                      ? "border-green-500/40 bg-green-500/10 text-green-400"
                      : "border-red-500/40 bg-red-500/10 text-red-400"
                  }
                  `}
                >
                  {result}
                </motion.div>

              )}

            </form>

          </motion.div>

        </div>


        {/* ================= BOTTOM MESSAGE ================= */}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="pt-12 text-center"
        >

          <p className="text-gray-400">
            Thank you for visiting my portfolio.
            <br />
            Looking forward to working with you 🚀
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Contact;