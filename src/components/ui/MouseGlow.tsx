"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function MouseGlow() {
  const [isVisible, setIsVisible] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Spring physics for the trailing effect
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20, mass: 0.8 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20, mass: 0.8 });

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      // Offset by 200px to perfectly center the 400px circle on the cursor
      mouseX.set(e.clientX - 200);
      mouseY.set(e.clientY - 200);
      
      if (!isVisible) setIsVisible(true);
    };

    window.addEventListener("mousemove", updateMousePosition);
    return () => window.removeEventListener("mousemove", updateMousePosition);
  }, [mouseX, mouseY, isVisible]);

  return (
    <motion.div
      // Changed z-0 to z-[50] and added hidden md:block
      className="pointer-events-none fixed top-0 left-0 w-[400px] h-[400px] bg-[#22c55e]/20 blur-[100px] rounded-full z-[50] hidden md:block"
      style={{
        x: springX,
        y: springY,
        opacity: isVisible ? 1 : 0,
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.5 }}
    />
  );
}