import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "motion/react";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  key?: any;
}

export default function TiltCard({ children, className = "", id, ...props }: TiltCardProps) {
  // Normalized cursor coordinates (0 to 1) starting at the center (0.5)
  const x = useMotionValue(0.5);
  const y = useMotionValue(0.5);

  // Map normalized coordinates to degrees of rotation
  // Subtle maximum tilt of 10 degrees maintains high legibility on hover
  const rotateX = useSpring(useTransform(y, [0, 1], [10, -10]), { stiffness: 150, damping: 15 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-10, 10]), { stiffness: 150, damping: 15 });

  // Dynamically generate a premium holographic glare pattern following the mouse coordinates.
  // We use the brand colors (warm orange/peach #ff5c00) for a cyberpunk glint effect.
  const glareBackground = useTransform(
    [x, y],
    ([latestX, latestY]) => {
      const px = (latestX as number) * 100;
      const py = (latestY as number) * 100;
      return `radial-gradient(circle at ${px}% ${py}%, rgba(255, 92, 0, 0.15) 0%, rgba(255, 181, 154, 0.05) 30%, transparent 65%)`;
    }
  );

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Safety check for zero dimensions
    if (width === 0 || height === 0) return;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    x.set(mouseX / width);
    y.set(mouseY / height);
  };

  const handleMouseLeave = () => {
    // Smoothly spring back to center when the cursor exits the card boundary
    x.set(0.5);
    y.set(0.5);
  };

  return (
    <div id={id} style={{ perspective: 1200 }} className="w-full h-full" {...props}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.02,
          boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.6), 0 0 25px rgba(255, 92, 0, 0.15)",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 25 }}
        className={`relative w-full h-full rounded-lg overflow-hidden cursor-pointer select-none ${className}`}
      >
        {/* Underlay / Background preservation layer */}
        <div 
          style={{ transform: "translateZ(0px)" }}
          className="absolute inset-0 bg-transparent rounded-lg pointer-events-none"
        />

        {/* Content wrapper projected into 3D space */}
        <div
          style={{ 
            transform: "translateZ(25px)", 
            transformStyle: "preserve-3d" 
          }}
          className="w-full h-full relative z-10"
        >
          {children}
        </div>

        {/* High-tech holographic glare reflecting light from the cursor */}
        <motion.div
          className="absolute inset-0 pointer-events-none rounded-lg mix-blend-color-dodge opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20"
          style={{ background: glareBackground }}
        />
      </motion.div>
    </div>
  );
}
