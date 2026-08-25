import { motion } from "framer-motion";

const badges = [
  {
    name: "Java",
    icon: "☕",
    position: "top-4 -left-8",
    delay: 0,
  },
  {
    name: "Spring Boot",
    icon: "🍃",
    position: "top-24 -right-16",
    delay: 0.5,
  },
  {
    name: "React",
    icon: "⚛️",
    position: "bottom-24 -left-16",
    delay: 1,
  },
  {
    name: "MySQL",
    icon: "🐬",
    position: "bottom-4 -right-8",
    delay: 1.5,
  },
];

function FloatingBadges() {
  return (
    <>
      {badges.map((badge) => (
        <motion.div
          key={badge.name}
          className={`
            absolute
            ${badge.position}
            z-30
            flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-cyan-400/30
            bg-slate-950/80
            backdrop-blur-md
            shadow-[0_0_20px_rgba(34,211,238,0.15)]
            whitespace-nowrap
          `}
          animate={{
            y: [0, -12, 0],
            rotate: [0, 2, 0, -2, 0],
          }}
          transition={{
            duration: 4,
            delay: badge.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span className="text-lg">
            {badge.icon}
          </span>

          <span className="text-sm font-medium text-gray-200">
            {badge.name}
          </span>
        </motion.div>
      ))}
    </>
  );
}

export default FloatingBadges;