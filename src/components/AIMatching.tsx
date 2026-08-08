"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function AIMatching() {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStage((prev) => (prev + 1) % 3);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="features" className="w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-16 md:py-20 flex flex-col justify-center bg-slate-900 text-white">
      {/* Background elements */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-ropa-green-light to-transparent" />
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
      
      <div className="w-full max-w-[1920px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6"
          >
            Stop searching.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ropa-yellow to-ropa-orange">Start discovering.</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed"
          >
            ROPA intelligently matches farmers with opportunities based on their profile, location, crops and eligibility.
          </motion.p>
        </div>

        {/* AI Matching Interface Animation */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 w-full max-w-6xl mx-auto">
          
          {/* Left: User Profile */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`bg-slate-800/40 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-700/50 w-full max-w-sm transition-all duration-700 shadow-2xl ${stage === 0 ? 'ring-2 ring-ropa-yellow shadow-[0_0_40px_-10px_rgba(234,179,8,0.2)] scale-[1.02]' : 'scale-100 opacity-80'}`}
          >
            <h3 className="text-ropa-yellow font-bold text-xs tracking-widest uppercase mb-6">Your Profile</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-slate-400 font-medium text-sm">Location</span>
                <span className="font-bold text-white tracking-wide text-sm">Maharashtra</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-slate-400 font-medium text-sm">Land size</span>
                <span className="font-bold text-white tracking-wide text-sm">2.5 Acres</span>
              </div>
              <div className="flex justify-between items-center border-b border-slate-700/50 pb-3">
                <span className="text-slate-400 font-medium text-sm">Crops</span>
                <span className="font-bold text-white tracking-wide text-sm">Onion</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-slate-400 font-medium text-sm">Category</span>
                <span className="font-bold text-white tracking-wide text-sm">Small Farmer</span>
              </div>
            </div>
          </motion.div>

          {/* Center: AI Engine */}
          <div className="flex flex-col items-center justify-center py-8 lg:py-0 w-40">
            <div className={`text-xs font-bold tracking-widest uppercase mb-6 transition-colors duration-500 h-6 flex items-center justify-center ${stage === 1 ? 'text-ropa-yellow animate-pulse' : 'text-slate-500'}`}>
              {stage === 0 ? 'Awaiting Data...' : stage === 1 ? 'Analyzing Data...' : 'Matches Found'}
            </div>
            <div className="relative flex items-center justify-center w-28 h-28">
              <div className={`absolute inset-0 rounded-full border border-slate-600 transition-all duration-1000 ease-out ${stage === 1 ? 'scale-[2] opacity-0' : 'scale-100 opacity-20'}`} />
              <div className={`absolute inset-0 rounded-full border border-slate-600 transition-all duration-1000 ease-out delay-200 ${stage === 1 ? 'scale-[1.5] opacity-0' : 'scale-75 opacity-40'}`} />
              <div className={`w-20 h-20 rounded-full flex items-center justify-center z-10 transition-all duration-500 shadow-xl ${stage === 1 ? 'bg-gradient-to-br from-ropa-yellow to-ropa-orange text-slate-900 scale-110 shadow-[0_0_40px_rgba(234,179,8,0.4)]' : 'bg-slate-800 text-slate-500 border border-slate-700'}`}>
                <span className="font-black text-2xl tracking-tighter">AI</span>
              </div>
            </div>
          </div>

          {/* Right: Matches */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className={`bg-slate-800/40 backdrop-blur-xl p-6 rounded-[2rem] border border-slate-700/50 w-full max-w-sm transition-all duration-700 shadow-2xl ${stage === 2 ? 'ring-2 ring-ropa-orange shadow-[0_0_40px_-10px_rgba(239,68,68,0.2)] scale-[1.02]' : 'scale-100 opacity-80'}`}
          >
            <h3 className="text-ropa-orange font-bold text-xs tracking-widest uppercase mb-6">Matches Found</h3>
            
            <div className="space-y-3">
              <div className={`bg-slate-900/80 rounded-2xl p-3 flex items-center gap-4 border border-slate-700/50 transition-all duration-500 ${stage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-ropa-orange/20 text-ropa-orange font-black px-2 py-1 rounded-md text-sm shadow-inner">92%</div>
                <div className="font-bold text-white text-sm leading-tight">Solar Pump Subsidy</div>
              </div>
              <div className={`bg-slate-900/80 rounded-2xl p-3 flex items-center gap-4 border border-slate-700/50 transition-all duration-500 delay-100 ${stage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-ropa-yellow/20 text-ropa-yellow font-black px-2 py-1 rounded-md text-sm shadow-inner">87%</div>
                <div className="font-bold text-white text-sm leading-tight">Agri Equipment</div>
              </div>
              <div className={`bg-slate-900/80 rounded-2xl p-3 flex items-center gap-4 border border-slate-700/50 transition-all duration-500 delay-200 ${stage === 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                <div className="bg-slate-800 text-slate-300 font-black px-2 py-1 rounded-md text-sm shadow-inner border border-slate-700">81%</div>
                <div className="font-bold text-white text-sm leading-tight">KVK Training</div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
