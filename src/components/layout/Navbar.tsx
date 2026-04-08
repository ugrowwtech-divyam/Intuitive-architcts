"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import SidePanel from "./SidePanel";

export default function Navbar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-40 bg-arch-bg/80 backdrop-blur-md border-b border-arch-gray/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 bg-arch-gray rounded border border-arch-gold/30 flex items-center justify-center group-hover:border-arch-gold transition-colors">
              <span className="text-arch-gold font-[family-name:var(--font-outfit)] font-medium text-xl">I</span>
            </div>
            <span className="text-arch-gold font-[family-name:var(--font-outfit)] text-xl md:text-2xl font-light tracking-[0.15em] uppercase">INTUIT ARCHITECTS</span>
          </Link>
          <button
            onClick={() => setIsPanelOpen(true)}
            className="p-2 text-arch-gold hover:bg-arch-gold/10 rounded-full transition-colors"
            aria-label="Open Menu"
          >
            <Menu className="w-7 h-7" />
          </button>
        </div>
      </nav>

      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)} />
    </>
  );
}
