"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroContent() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08, delayChildren: 0.1 }
    }
  };

  const wordVariants = {
    hidden: { y: "150%", opacity: 0, rotate: 2 },
    visible: { 
      y: "0%", 
      opacity: 1, 
      rotate: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const } 
    }
  };

  // Helper function to map words into animated chunks with proper overflow hiding
  const AnimatedText = ({ text, className, highlightWord, highlightClass }: { text: string, className?: string, highlightWord?: string, highlightClass?: string }) => {
    return (
      <span className={`inline-flex flex-wrap justify-center gap-x-[0.25em] ${className || ""}`}>
        {text.split(" ").map((word, i) => {
          const isHighlight = highlightWord && word.includes(highlightWord);
          return (
            <span key={i} className="inline-block overflow-hidden relative" style={{ margin: '-0.1em', padding: '0.1em' }}>
              <motion.span 
                variants={wordVariants} 
                className={`inline-block ${isHighlight ? highlightClass : ""}`}
                style={{ willChange: "transform, opacity" }} // Hardware acceleration for smoother anim
              >
                {word}
              </motion.span>
            </span>
          );
        })}
      </span>
    );
  };

  return (
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20 flex flex-col items-center"
    >
      <h1 className="text-5xl sm:text-6xl md:text-8xl font-serif text-white font-bold mb-2 tracking-tight drop-shadow-lg leading-[1.1] uppercase">
        <AnimatedText text="Intuitive Architects" />
      </h1>
      
      <h2 className="text-2xl md:text-5xl font-serif text-white mb-8 tracking-tight drop-shadow-lg leading-tight opacity-90">
        <AnimatedText text="Design Beyond Boundaries." highlightWord="Boundaries" highlightClass="text-gradient-gold italic pr-1" />
      </h2>
      
      <div className="text-lg md:text-xl text-white/80 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
        <AnimatedText text="We are Intuitive Architects, shaping environments where human experience and nature converge in perfect harmony." />
      </div>

      <div className="inline-block overflow-hidden p-2">
        <motion.div variants={wordVariants}>
          <Link href="/portfolio" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-gold text-black font-semibold tracking-widest uppercase text-sm hover:scale-105 transition-transform duration-500 rounded-sm">
            Explore Our Work <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </motion.div>
  );
}
