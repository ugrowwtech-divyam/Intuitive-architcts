"use client";

import { useState } from "react";
import ProjectCard from "@/components/ui/ProjectCard";
import { projects } from "@/data/projects";
import { motion, AnimatePresence } from "framer-motion";

const categories = ["All", "Design Consultancy", "Construction (Turnkey)", "Architecture/Interior", "3D Visualisation"];

export default function Portfolio() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = filter === "All" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="pt-32 pb-24 px-4 min-h-screen bg-arch-bg">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h1 className="text-5xl font-serif text-arch-white mb-6 text-center">Selected Works</h1>
        <div className="w-20 h-1 bg-arch-gold mb-12"></div>
        
        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm tracking-widest uppercase transition-all duration-300 ${
                filter === cat 
                  ? "bg-gradient-gold text-black font-semibold" 
                  : "bg-arch-card text-arch-muted hover:text-white border border-arch-gray hover:border-[#d4af37]/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div 
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.slug} 
                className="w-full"
              >
                <ProjectCard {...project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredProjects.length === 0 && (
          <p className="text-arch-muted text-center py-20">No projects found in this category.</p>
        )}
      </div>
    </div>
  );
}
