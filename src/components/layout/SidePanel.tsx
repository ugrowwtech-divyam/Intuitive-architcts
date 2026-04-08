"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";
import Link from "next/link";

interface SidePanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const navLinks = [
  { name: "Portfolio", href: "/portfolio" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Awards", href: "/awards" },
  { name: "Blog", href: "/blog" },
  { name: "Contact", href: "/contact" },
];

export default function SidePanel({ isOpen, onClose }: SidePanelProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />
          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 h-full w-full max-w-sm bg-arch-bg border-l border-arch-gold/20 z-50 flex flex-col shadow-2xl"
          >
            <div className="p-6 flex justify-end">
              <button 
                onClick={onClose}
                className="p-2 text-arch-muted hover:text-arch-gold transition-colors rounded-full"
                aria-label="Close Menu"
              >
                <X className="w-7 h-7" />
              </button>
            </div>
            <nav className="flex-1 px-8 py-4 flex flex-col gap-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
                >
                  <Link 
                    href={link.href} 
                    onClick={onClose}
                    className="text-3xl font-serif text-arch-white hover:text-arch-gold transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>
            <div className="p-8 border-t border-arch-card">
              <p className="text-arch-muted text-sm mb-2">Get in touch</p>
              <a href="mailto:hello@intuitarchitects.com" className="text-arch-gold hover:underline text-lg">hello@intuitarchitects.com</a>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
