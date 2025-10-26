import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export const IlluminationBackground = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <>
      {/* Animated Gradient Orbs */}
      <div className="fixed inset-0 -z-10 overflow-hidden">
        <div
          className="absolute -inset-[10px] opacity-50 blur-3xl"
          style={{
            background: `
              radial-gradient(600px circle at 50% 50%, 
                rgba(120, 119, 198, 0.3), transparent 40%),
              radial-gradient(400px circle at 30% 70%, 
                rgba(255, 119, 198, 0.2), transparent 40%),
              radial-gradient(300px circle at 70% 30%, 
                rgba(120, 219, 255, 0.2), transparent 40%)
            `,
          }}
        />
        
        {/* Classic Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      {/* Floating Particles - Only render on client side */}
      {isClient && (
        <div className="fixed inset-0 -z-10">
          {[...Array(15)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-20"
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      )}
    </>
  );
};