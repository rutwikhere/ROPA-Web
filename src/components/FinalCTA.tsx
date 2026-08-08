"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

export default function FinalCTA() {
  return (
    <section className="w-full relative lg:max-w-[1920px] lg:mx-auto py-24 md:py-32 flex flex-col justify-center overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0 bg-[url('https://images.unsplash.com/photo-1592982537447-6f296b026605?q=80&w=2069&auto=format&fit=crop')] bg-cover bg-center filter grayscale opacity-30"></div>
      <div className="absolute inset-0 z-0 bg-slate-950/90 backdrop-blur-sm"></div>

      {/* Floating UI Elements (Subtle) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20">
        <motion.div 
          animate={{ y: [0, -30, 0] }} 
          transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
          className="absolute top-[15%] left-[5%] md:left-[10%] bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 w-48 md:w-64"
        >
          <div className="h-2 w-16 bg-ropa-orange rounded mb-4"></div>
          <div className="h-4 w-3/4 bg-white/60 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-white/40 rounded"></div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 40, 0] }} 
          transition={{ repeat: Infinity, duration: 8, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[15%] right-[5%] md:right-[10%] bg-white/5 backdrop-blur-xl p-5 rounded-2xl border border-white/10 w-56 md:w-72"
        >
          <div className="flex gap-3 mb-4 items-center">
            <div className="h-8 w-8 rounded-full bg-ropa-yellow"></div>
            <div className="h-5 w-24 bg-white/80 rounded"></div>
          </div>
          <div className="h-3 w-full bg-white/40 rounded mb-2"></div>
          <div className="h-3 w-4/5 bg-white/40 rounded"></div>
        </motion.div>
      </div>

      <div className="w-full max-w-7xl mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-5xl mx-auto"
        >
          <h2 className="text-5xl md:text-6xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.05]">
            Don't let the next opportunity <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ropa-orange to-ropa-yellow">pass you by.</span>
          </h2>
          <p className="text-lg md:text-2xl text-slate-300 mb-12 font-medium max-w-3xl mx-auto leading-relaxed">
            Discover agricultural opportunities matched to you with ROPA.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            <a
              href={siteConfig.GOOGLE_PLAY_URL}
              className="bg-ropa-orange text-white px-10 py-5 md:py-6 rounded-full text-lg md:text-xl font-black shadow-[0_15px_30px_rgba(249,115,22,0.3)] hover:shadow-[0_20px_40px_rgba(249,115,22,0.5)] hover:scale-105 transition-all w-full sm:w-auto text-center"
            >
              Download ROPA
            </a>
            <a
              href="#home"
              className="bg-white/5 hover:bg-white/10 text-white px-10 py-5 md:py-6 rounded-full text-lg md:text-xl font-bold backdrop-blur-md transition-all border border-white/20 hover:border-white/40 w-full sm:w-auto text-center"
            >
              Explore ROPA
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
