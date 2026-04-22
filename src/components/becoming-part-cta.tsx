"use client"

import Link from "next/link";
import { motion } from "framer-motion";
import { PixelButton } from "./pixel-button";

export function BecomingPartCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, height: 0, marginTop: 0 }}
      animate={{ opacity: 1, height: "auto", marginTop: 64 }}
      exit={{ opacity: 0, height: 0, marginTop: 0 }}
      className="overflow-hidden w-full max-w-2xl mx-auto"
    >
      <div className="group relative bg-black border-2 border-primary overflow-hidden shadow-[0_0_30px_rgba(var(--primary),0.2)]">
        {/* Scanline Effect */}
        <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[length:100%_4px,3px_100%] z-20 opacity-20" />

        {/* Glowing Background Glow */}
        <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="relative p-8 md:p-12 space-y-8 z-10">
          <div className="flex items-center justify-between border-b border-primary/30 pb-4">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-primary animate-pulse shadow-[0_0_10px_rgba(var(--primary),0.8)]" />
              <h3 className="text-xl md:text-3xl font-pixel text-primary tracking-widest">BECOMING OUR PART</h3>
            </div>
            <span className="text-[10px] font-mono text-primary/50 hidden sm:block">SYSTEM_v2.0.4.ARC_2</span>
          </div>

          <div className="space-y-6 font-mono text-sm md:text-lg">
            <p className="text-primary/90 leading-relaxed">
              <span className="text-primary/40 mr-2">&gt;</span>
              The next evolution of I-WILL is not just observed—it is <span className="text-white bg-primary/20 px-1 border border-primary/30">CREATED</span>.
            </p>
            <p className="text-muted-foreground italic text-xs md:text-sm">
              Confirm initialization to bridge the gap between vision and reality. Your contribution defines the next archive.
            </p>
          </div>

          <Link href="/arc-02" className="block">
            <PixelButton className="w-full text-lg py-4 group-hover:scale-[1.02] transition-transform shadow-[0_5px_0_rgb(0,0,0)] active:shadow-none" as="div">
              <span className="flex items-center justify-center gap-3">
                INITIALIZE The Convergence: Embedded in Action. <span className="animate-bounce">→</span>
              </span>
            </PixelButton>
          </Link>
        </div>

        {/* Corner Accents */}
        <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-primary/30" />
        <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-primary/30" />
      </div>
    </motion.div>
  );
}
