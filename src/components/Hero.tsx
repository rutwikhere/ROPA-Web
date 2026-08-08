"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { siteConfig } from "@/config/site";
import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const yBg = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);
  const yText = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
  const opacityText = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center bg-slate-900 "
    >
      {/* Background Image & Overlay */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 z-0"
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=2072&auto=format&fit=crop')] bg-cover bg-right object-right" />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900 from-5% via-slate-900/50 via-50% to-transparent to-90%" />
      </motion.div>


      <motion.div
        style={{ y: yText, opacity: opacityText }}
        className="container relative z-10 mx-auto px-6 md:px-12 lg:px-24 text-left mt-24 md:mt-32 flex flex-col items-start w-full"
      >

        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-black tracking-tighter text-white mb-6 leading-[0.95] max-w-3xl"
        >
          Every Opportunity.<br />
          <span className="text-ropa-gradient inline-block mt-2">One Platform.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="text-base md:text-xl text-slate-300 max-w-2xl mr-auto mb-2 leading-relaxed font-medium"
        >
          Discover government schemes, subsidies, loans, training programs and agricultural opportunities matched to your needs.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="text-sm md:text-base text-slate-400 font-semibold tracking-wide uppercase mb-8"
        >
          Verified opportunities. Smart matching. One platform.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-start sm:items-center justify-start gap-4 w-full sm:w-auto"
        >
          <a
            href={siteConfig.GOOGLE_PLAY_URL}
            className="group bg-ropa-orange text-white px-8 py-4 rounded-full text-lg font-bold shadow-[0_10px_30px_-10px_rgba(239,68,68,0.4)] hover:shadow-[0_20px_40px_-15px_rgba(239,68,68,0.6)] hover:scale-[1.02] transition-all w-full sm:w-auto flex items-center justify-center gap-3"
          >
            Download ROPA
          </a>
          <a
            href="#how-it-works"
            className="group text-slate-200 font-bold px-8 py-4 rounded-full hover:bg-slate-800 hover:text-white hover:shadow-lg transition-all w-full sm:w-auto flex items-center justify-center gap-2 border border-slate-700 bg-slate-900/50 backdrop-blur-sm"
          >
            See How It Works
            <svg className="group-hover:translate-y-1 transition-transform" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14"/><path d="m19 12-7 7-7-7"/></svg>
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
