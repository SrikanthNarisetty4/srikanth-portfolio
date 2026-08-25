import { motion } from "framer-motion";

const leftCode = [
  "public class Developer {",
  '  String name = "Srikanth";',
  '  String role = "Java";',
  "  String[] skills = {",
  '    "Spring Boot",',
  '    "React",',
  '    "MySQL"',
  "  };",
  "}",
];

const rightCode = [
  "buildApplication();",
  "connectDatabase();",
  "createRestAPI();",
  "writeCleanCode();",
  "deployApplication();",
];

function CodeAnimation() {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none">

      {/* LEFT CODE */}
      <div className="absolute -left-24 top-16 w-[300px]">
        {leftCode.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.4, 0.1],
            }}
            transition={{
              duration: 4,
              delay: index * 0.2,
              repeat: Infinity,
              repeatDelay: 3,
            }}
            className="font-mono text-sm text-cyan-400/50 leading-7 whitespace-nowrap"
          >
            {line}
          </motion.div>
        ))}
      </div>

      {/* RIGHT CODE */}
      <div className="absolute -right-16 bottom-28 w-[250px]">
        {rightCode.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0.1, 0.35, 0.1],
              x: [0, 8, 0],
            }}
            transition={{
              duration: 5,
              delay: index * 0.3,
              repeat: Infinity,
              repeatDelay: 2,
            }}
            className="font-mono text-sm text-fuchsia-400/50 leading-8 whitespace-nowrap"
          >
            {`> ${line}`}
          </motion.div>
        ))}
      </div>

    </div>
  );
}

export default CodeAnimation;