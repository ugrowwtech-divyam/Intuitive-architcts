"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, Phone, Send } from "lucide-react";

type WidgetState = "idle" | "options" | "gmail" | "whatsapp";

export default function ChatWidget() {
  const [state, setState] = useState<WidgetState>("idle");
  const widgetRef = useRef<HTMLDivElement>(null);

  // Close when clicked outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setState("idle");
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleOptionClick = (option: "gmail" | "whatsapp") => {
    setState(option);
  };

  const isExpanded = state !== "idle";

  return (
    <div 
      className="fixed bottom-8 right-8 z-50 flex items-end gap-5" 
      ref={widgetRef}
    >
      {/* Dialogue Form Popout (Slides out to the left) */}
      <AnimatePresence>
        {(state === "gmail" || state === "whatsapp") && (
          <motion.div
            initial={{ opacity: 0, x: 20, scale: 0.95 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, x: 10, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="w-80 rounded-3xl p-6 border border-arch-gold/20 backdrop-blur-2xl bg-arch-bg/95 shadow-[0_0_30px_rgba(212,175,55,0.15)]"
          >
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-arch-white font-serif text-lg flex items-center gap-3">
                {state === "gmail" ? (
                  <><div className="p-2 bg-arch-gold/10 rounded-full"><Mail className="text-arch-gold w-5 h-5" /></div> Email Us</>
                ) : (
                  <><div className="p-2 bg-arch-gold/10 rounded-full"><Phone className="text-arch-gold w-5 h-5" /></div> WhatsApp Us</>
                )}
              </h3>
            </div>
            
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div>
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full bg-arch-gray border border-arch-card rounded-xl px-4 py-3.5 text-arch-white placeholder:text-arch-muted focus:outline-none focus:border-arch-gold transition-colors" 
                  required
                />
              </div>
              <div>
                <input 
                  type={state === "gmail" ? "email" : "tel"}
                  placeholder={state === "gmail" ? "Your Email" : "Phone Number"} 
                  className="w-full bg-arch-gray border border-arch-card rounded-xl px-4 py-3.5 text-arch-white placeholder:text-arch-muted focus:outline-none focus:border-arch-gold transition-colors" 
                  required
                />
              </div>
              <button 
                type="submit"
                className="w-full py-3.5 mt-2 rounded-xl font-medium tracking-wide flex items-center justify-center gap-2 transition-all duration-300 bg-arch-gold hover:bg-[#b0902c] text-arch-black shadow-[0_0_15px_rgba(212,175,55,0.3)] hover:shadow-[0_0_20px_rgba(212,175,55,0.5)]"
              >
                Send Message <Send className="w-4 h-4 ml-1" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger / Vertical Bar */}
      <motion.div
        animate={{ 
          height: isExpanded ? 130 : 72,
          width: 72,
          boxShadow: isExpanded 
            ? "0px 10px 30px rgba(0,0,0,0.5)" 
            : ["0px 0px 0px rgba(212,175,55,0)", "0px 0px 25px rgba(212,175,55,0.4)", "0px 0px 0px rgba(212,175,55,0)"]
        }}
        transition={{ 
          height: { type: "spring", bounce: 0, duration: 0.4 },
          width: { type: "spring", bounce: 0, duration: 0.4 },
          boxShadow: isExpanded ? { duration: 0.2 } : { duration: 3, repeat: Infinity, ease: "easeInOut" }
        }}
        className={`relative flex flex-col items-center bg-arch-bg/95 backdrop-blur-xl border border-arch-gold/30 rounded-[2rem] cursor-pointer overflow-hidden z-10 ${isExpanded ? '' : 'hover:border-arch-gold/60'}`}
        onClick={() => !isExpanded && setState("options")}
      >
        <AnimatePresence mode="popLayout">
          {isExpanded && (
            <motion.div
              key="options"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10, transition: { duration: 0.2 } }}
              className="flex flex-col items-center justify-center w-full h-full gap-2 py-3"
            >
              <button
                onClick={(e) => { e.stopPropagation(); handleOptionClick("gmail"); }}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative group
                  ${state === "gmail" ? "bg-arch-gold text-arch-black" : "bg-transparent text-arch-white/70 hover:text-arch-gold"}`}
              >
                <Mail className="w-5 h-5 relative z-10" />
                {state !== "gmail" && <div className="absolute inset-0 bg-arch-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />}
              </button>

              <button
                onClick={(e) => { e.stopPropagation(); handleOptionClick("whatsapp"); }}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 relative group
                  ${state === "whatsapp" ? "bg-arch-gold text-arch-black" : "bg-transparent text-arch-white/70 hover:text-arch-gold"}`}
              >
                <Phone className="w-5 h-5 relative z-10" />
                {state !== "whatsapp" && <div className="absolute inset-0 bg-arch-gold/10 rounded-full scale-0 group-hover:scale-100 transition-transform duration-300" />}
              </button>
            </motion.div>
          )}

          {!isExpanded && (
            <motion.div
              key="idle"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.2 } }}
              className="absolute inset-0 flex items-center justify-center text-arch-gold"
            >
              <MessageSquare className="w-7 h-7" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}
