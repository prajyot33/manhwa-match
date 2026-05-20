"use client";
import { motion } from "framer-motion";

const PARTICLE_POSITIONS = [...Array(20)].map(() =>
  Math.round(Math.random() * 100)
);

export default function Particles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-[#d4a017]/30 rounded-full"
          initial={{
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: [0, 1, 0],
            y: -200,
          }}
          transition={{
            duration: 8 + i,
            repeat: Infinity,
            delay: i * 0.4,
          }}
          style={{
            left: `${PARTICLE_POSITIONS[i]}%`,
            bottom: "-20px",
          }}
        />
      ))}
    </div>
  );
}