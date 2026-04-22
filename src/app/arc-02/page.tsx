"use client"

import Link from "next/link";
import { GridBackground } from "@/components/grid-background";
import { PixelButton } from "@/components/pixel-button";
import { motion } from "framer-motion";

export default function Arc02Page() {
  return (
    <main className="min-h-screen bg-background text-foreground font-mono relative overflow-x-hidden flex flex-col items-center justify-start p-4 py-10 md:p-6 md:py-20">
      <GridBackground />

      {/* Decorative Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            y: [-20, 20],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-10 w-32 h-32 border border-primary/20 bg-primary/5 rounded-full blur-xl"
        />
        <motion.div
          animate={{
            y: [20, -20],
            rotate: [0, -10, 0]
          }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-1/4 right-10 w-48 h-48 border border-primary/10 bg-primary/5 rounded-full blur-2xl"
        />
      </div>

      <div className="z-10 text-center space-y-8 max-w-3xl relative">
        {/* Header Section */}
        <div className="space-y-4">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block px-3 py-1 bg-primary/10 border border-primary/30 text-primary text-[10px] font-pixel mb-4 shadow-[0_0_10px_rgba(var(--primary),0.2)]"
          >
            ESTABLISHED PROTOCOL: ARC_02
          </motion.div>
          <h1 className="text-2xl md:text-5xl font-pixel text-primary animate-flicker text-shadow-pixel tracking-tight leading-tight">
            The Convergence: <br className="hidden md:block" /> Embedded in Action.
          </h1>
          <div className="flex items-center justify-center gap-4 text-muted-foreground font-mono text-[10px] md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] opacity-60">
            <span className="w-8 md:w-12 h-px bg-current" />
            Phase Two
            <span className="w-8 md:w-12 h-px bg-current" />
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="p-4 py-8 md:p-12 border-4 border-double border-primary/40 bg-black/40 backdrop-blur-md space-y-6 md:space-y-8 relative group"
        >
          {/* Scanline for the card */}
          <div className="absolute inset-0 pointer-events-none bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.1)_50%)] bg-[length:100%_4px] opacity-20" />

          <h2 className="text-xl md:text-4xl font-pixel text-foreground uppercase tracking-wider">BECOMING OUR PART</h2>

          <p className="text-base md:text-xl text-muted-foreground leading-relaxed max-w-xl mx-auto font-mono">
            &quot;The next chapter of I-WILL begins here. You are not just a spectator; you are the architect of our expansion.&quot;
          </p>

          <div className="w-full space-y-6 pt-4">
            <div className="flex items-center gap-2 mb-2">
              <div className="w-2 h-2 bg-primary animate-ping" />
              <span className="font-pixel text-[10px] text-primary uppercase tracking-widest">Document_Viewer.exe</span>
            </div>

            <div className="relative p-2 border-4 border-primary/30 bg-black/60 shadow-[0_0_20px_rgba(var(--primary),0.1)] group">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-zinc-900 px-4 border-2 border-primary/30 font-pixel text-[10px] text-primary">
                ARC_02_GUIDELINES.PDF
              </div>

              <div className="w-full h-[500px] md:h-[800px] overflow-hidden border-2 border-primary/20">
                <iframe
                  src="https://drive.google.com/file/d/17cmZwrb3bRxS0kaHWXWeUCFcFQoW-NtT/preview"
                  className="w-full h-full grayscale-[0.5] contrast-[1.1] hover:grayscale-0 transition-all duration-700"
                  allow="autoplay"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 pt-8">

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
              <Link href="/">
                <PixelButton variant="secondary" as="div" className="min-w-[200px]">
                  BACK TO HOME
                </PixelButton>
              </Link>
              <Link target="_blank" href="https://bit.ly/I-WILLARC-02">
                <PixelButton variant="primary" className="min-w-[200px] shadow-[0_5px_0_rgba(var(--primary),0.5)]">
                  Join Us Now!
                </PixelButton>
              </Link>
            </div>
          </div>

          {/* Decorative Corner Bits */}
          <div className="absolute -top-1 -left-1 w-6 h-6 border-t-4 border-l-4 border-primary" />
          <div className="absolute -top-1 -right-1 w-6 h-6 border-t-4 border-r-4 border-primary" />
          <div className="absolute -bottom-1 -left-1 w-6 h-6 border-b-4 border-l-4 border-primary" />
          <div className="absolute -bottom-1 -right-1 w-6 h-6 border-b-4 border-r-4 border-primary" />
        </motion.div>

        {/* Footer info */}
        <p className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest pt-8">
          Innovative Workingspace Integrated Living Laboratory // Arc Selector v2
        </p>
      </div >
    </main >
  );
}

