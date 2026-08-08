"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import textropa from "@/assets/textropa.png";

export default function RopaIntro() {
  return (
    <section className="min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center py-8 bg-slate-100 relative overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-left"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight mb-6">
            So we built <span className="text-ropa-orange">ROPA.</span>
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 max-w-lg leading-relaxed font-medium">
            An Agriculture Opportunity Engine designed to connect farmers with the opportunities that matter to them.
          </p>
        </motion.div>

        {/* Animated Visual */}
        <div className="relative w-full max-w-lg mx-auto flex flex-col items-center">
          {/* Farmer */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, type: "spring" }}
            className="bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-md border border-white z-10 flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center text-lg shadow-sm">👨🏽‍🌾</div>
            <div className="text-lg font-bold text-slate-800 pr-2">Indian Farmer</div>
          </motion.div>

          {/* Line to ROPA */}
          <div className="relative h-10 w-[2px]">
            <div className="absolute inset-0 bg-slate-200"></div>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="absolute inset-0 bg-ropa-orange origin-top"
            />
          </div>

          {/* ROPA Core */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.1, type: "spring", bounce: 0.5 }}
            className="relative z-10 my-1"
          >
            <div className="absolute inset-0 bg-ropa-gradient blur-lg opacity-40 rounded-full animate-pulse"></div>
            <div className="bg-ropa-gradient px-8 py-4 rounded-full shadow-xl relative border-[3px] border-white/60 backdrop-blur-sm flex items-center justify-center min-w-[140px] min-h-[60px]">
              <Image src={textropa} alt="ROPA" className="h-6 md:h-7 w-auto object-contain" />
            </div>
          </motion.div>

          {/* Lines spreading to opportunities */}
          <div className="relative w-full max-w-sm h-12 mt-1">
            <div className="absolute left-1/2 top-0 w-[2px] h-full bg-slate-200 -translate-x-1/2"></div>
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.9 }}
              className="absolute left-1/2 top-0 w-[2px] h-full bg-ropa-orange origin-top -translate-x-1/2"
            />
            <div className="absolute top-1/2 left-0 right-0 h-[2px] bg-slate-200"></div>
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 1.2 }}
              className="absolute top-1/2 left-0 right-0 h-[2px] bg-ropa-orange origin-center"
            />
          </div>

          {/* Opportunities Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 w-full mt-2">
            {[
              { name: "Govt Schemes", icon: "🏛" },
              { name: "Subsidies", icon: "💰" },
              { name: "Loans", icon: "🏦" },
              { name: "Training", icon: "🎓" },
              { name: "CSR", icon: "🤝" },
              { name: "Contract", icon: "🌾" },
              { name: "FPOs", icon: "🏢" },
              { name: "More...", icon: "✨" },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 1.4 + i * 0.05 }}
                className="bg-white/90 backdrop-blur-sm py-2 px-2 rounded-xl shadow-sm border border-slate-100 flex items-center justify-center gap-1.5 font-bold text-slate-700 hover:shadow-md hover:-translate-y-0.5 transition-all cursor-default group"
              >
                <span className="text-base group-hover:scale-110 transition-transform">{item.icon}</span>
                <span className="text-[11px] uppercase tracking-wide">{item.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
