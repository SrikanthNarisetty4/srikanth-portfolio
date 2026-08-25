import { motion } from "framer-motion";

const stars = Array.from({ length: 70 }, (_, i) => ({
  id: i,
  left: (i * 37) % 100,
  top: (i * 53) % 100,
  size: 2 + (i % 3),
  duration: 2 + (i % 4),
  delay: (i % 6) * 0.5,
}));

const particles = Array.from({ length: 18 }, (_, i) => ({
  id: i,
  left: (i * 47) % 100,
  top: (i * 61) % 100,
  duration: 6 + (i % 5),
  delay: (i % 5) * 0.8,
}));

function Background() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10 pointer-events-none">

      {/* Main Background */}
      <div className="absolute inset-0 bg-[#070B1A]" />

      {/* Purple Glow */}
      <motion.div
        animate={{
          x: [0, -40, 0],
          y: [0, 30, 0],
          scale: [1, 1.08, 1],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -top-40
          -right-40
          w-[650px]
          h-[650px]
          rounded-full
          bg-fuchsia-600/20
          blur-[180px]
        "
      />

      {/* Blue Glow */}
      <motion.div
        animate={{
          x: [0, 40, 0],
          y: [0, -40, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          -bottom-40
          -left-40
          w-[550px]
          h-[550px]
          rounded-full
          bg-blue-500/20
          blur-[180px]
        "
      />

      {/* Center Violet Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          top-1/2
          left-1/2
          w-[350px]
          h-[350px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-violet-500/20
          blur-[150px]
        "
      />

      {/* ⭐ Stars */}
      {stars.map((star) => (
        <motion.span
          key={star.id}
          className="
            absolute
            rounded-full
            bg-white
            shadow-[0_0_8px_rgba(255,255,255,0.9)]
          "
          style={{
            left: `${star.left}%`,
            top: `${star.top}%`,
            width: `${star.size}px`,
            height: `${star.size}px`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.7, 1],
          }}
          transition={{
            duration: star.duration,
            delay: star.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* 🌌 Floating Cyan Particles */}
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="
            absolute
            w-2
            h-2
            rounded-full
            bg-cyan-400/60
            shadow-[0_0_12px_rgba(34,211,238,0.7)]
          "
          style={{
            left: `${particle.left}%`,
            top: `${particle.top}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, 30, -20, 0],
            opacity: [0, 0.8, 0],
            scale: [0.8, 1.5, 0.8],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Bottom Fade */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-transparent
          via-transparent
          to-[#070B1A]/70
        "
      />

    </div>
  );
}

export default Background;