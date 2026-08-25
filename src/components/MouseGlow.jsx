import { useEffect, useState } from "react";
import { motion } from "framer-motion";

function MouseGlow() {
  const [position, setPosition] = useState({
    x: -300,
    y: -300,
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      setPosition({
        x: event.clientX,
        y: event.clientY,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <motion.div
      className="
        fixed
        pointer-events-none
        z-0
        w-[350px]
        h-[350px]
        rounded-full
        bg-fuchsia-500/10
        blur-[100px]
      "
      animate={{
        x: position.x - 175,
        y: position.y - 175,
      }}
      transition={{
        type: "spring",
        stiffness: 40,
        damping: 20,
        mass: 0.5,
      }}
    />
  );
}

export default MouseGlow;