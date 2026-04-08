"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function HeroContent() {
  const containerRef = useRef<HTMLElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    // By using "start start" and "end end", scrollYProgress goes from 0 to 1
    // over the height of the container minus the viewport height.
    offset: ["start start", "end end"]
  });

  // "Design Beyond Boundaries." (Default State)
  // 0.0 - 0.15: Fades out as user starts scrolling
  const subOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);
  const subScale = useTransform(scrollYProgress, [0, 0.15], [1, 1.05]);
  const subBlur = useTransform(scrollYProgress, [0, 0.15], ["blur(0px)", "blur(10px)"]);

  // "Intuitive Architects" (Main Company Name)
  // 0.15 - 0.35: Fades in slowly
  // 0.35 - 1.0: Stays there for the remaining scroll amount
  const headingOpacity = useTransform(scrollYProgress, [0.15, 0.35], [0, 1]);
  const headingScale = useTransform(scrollYProgress, [0.15, 0.35], [1.05, 1]);
  const headingBlur = useTransform(scrollYProgress, [0.15, 0.35], ["blur(12px)", "blur(0px)"]);
  
  // Background parallax / fade out mechanics
  const bgScale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);
  const bgVisualOpacity = useTransform(scrollYProgress, [0, 0.8, 1], [0.5, 0.5, 0]);

  return (
    // container h-[400vh] to allow massive scroll depth for these animations.
    <section ref={containerRef} className="relative h-[400vh] w-full bg-black">
      
      {/* Sticky wrapper stays in viewport while scrolling through the 400vh */}
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center">
        
        {/* Background Layer */}
        <motion.div 
          className="absolute inset-0 z-0 origin-center"
          style={{ scale: bgScale, opacity: bgVisualOpacity }}
        >
          <Image
            src="https://images.unsplash.com/photo-1600607687983-05ef8821cbd1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
            alt="Hero Architectural Image"
            fill
            className="object-cover mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black" />
        </motion.div>

        {/* Text Layer - Relative container so we can absolute position the two overlapping headings */}
        <div className="relative z-10 text-center px-4 max-w-5xl w-full mx-auto flex items-center justify-center">
          
          <motion.h2 
            style={{ 
              opacity: subOpacity,
              scale: subScale,
              filter: subBlur
            }}
            className="absolute text-5xl sm:text-6xl md:text-8xl font-serif text-white tracking-tight drop-shadow-lg leading-tight w-full pointer-events-none"
          >
            Design Beyond <span className="text-gradient-gold italic pr-1">Boundaries.</span>
          </motion.h2>

          <motion.h1 
            style={{ 
              opacity: headingOpacity,
              scale: headingScale,
              filter: headingBlur,
            }}
            className="absolute text-5xl sm:text-6xl md:text-8xl font-serif text-white font-bold tracking-tight drop-shadow-lg leading-[1.1] uppercase origin-center w-full pointer-events-none"
          >
            Intuitive Architects
          </motion.h1>
          
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          style={{ opacity: useTransform(scrollYProgress, [0, 0.05], [1, 0]) }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-xs uppercase tracking-widest font-semibold">Scroll to explore</span>
          <div className="w-[1px] h-12 bg-white/20 relative overflow-hidden">
             <div className="absolute top-0 left-0 w-full h-[50%] bg-gradient-gold animate-[bounce_2s_infinite]" />
          </div>
        </motion.div>

      </div>
    </section>
  );
}
