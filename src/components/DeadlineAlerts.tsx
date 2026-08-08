"use client";

import { motion } from "framer-motion";
import { Bell } from "lucide-react";

export default function DeadlineAlerts() {
  return (
    <section className="w-full relative lg:max-w-[1920px] lg:mx-auto py-16 md:py-24 bg-slate-900 text-white overflow-hidden">
      {/* Dynamic Background Pattern */}
      <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ef4444 2px, transparent 2px)', backgroundSize: '40px 40px' }}></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900 via-transparent to-slate-900 z-0"></div>
      
      <div className="w-full max-w-[1920px] mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black mb-6 tracking-tight leading-[1.1]">
            Don't miss the <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">deadline.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-400 font-medium max-w-2xl mx-auto leading-relaxed">
            Time-sensitive opportunities require immediate attention.
          </p>
        </motion.div>

        <div className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 items-center justify-center">
          
          {/* Countdown Interface */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-slate-800/40 backdrop-blur-xl p-8 rounded-[2rem] border border-slate-700/50 shadow-[0_20px_50px_rgba(0,0,0,0.3)] w-full flex-1"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse shadow-[0_0_12px_rgba(239,68,68,0.8)]"></div>
              <div className="text-red-400 font-black text-xs uppercase tracking-widest">Urgent Deadline</div>
            </div>
            
            <h3 className="text-3xl font-black mb-2 text-white tracking-tight">Solar Pump Subsidy</h3>
            <div className="text-sm text-slate-400 mb-8 font-semibold">Application window closing soon</div>
            
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-slate-900/80 rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-700/50 shadow-inner">
                <span className="text-3xl md:text-4xl font-black text-white font-mono">03</span>
                <span className="text-[10px] text-slate-500 font-black mt-2 uppercase tracking-widest">Days</span>
              </div>
              <div className="bg-slate-900/80 rounded-2xl p-4 flex flex-col items-center justify-center border border-slate-700/50 shadow-inner">
                <span className="text-3xl md:text-4xl font-black text-white font-mono">12</span>
                <span className="text-[10px] text-slate-500 font-black mt-2 uppercase tracking-widest">Hours</span>
              </div>
              <div className="bg-slate-900/80 rounded-2xl p-4 flex flex-col items-center justify-center border border-red-500/30 shadow-[inset_0_0_20px_rgba(239,68,68,0.15)] relative overflow-hidden">
                <div className="absolute inset-0 bg-red-500/5 animate-pulse"></div>
                <span className="text-3xl md:text-4xl font-black text-red-500 font-mono relative z-10">41</span>
                <span className="text-[10px] text-red-400 font-black mt-2 uppercase tracking-widest relative z-10">Mins</span>
              </div>
            </div>
          </motion.div>

          {/* Alert Notification Animation */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex-1 w-full flex flex-col gap-5"
          >
            <div className="bg-slate-800/60 backdrop-blur-xl p-6 rounded-[1.5rem] border border-slate-700/50 shadow-2xl relative overflow-hidden group hover:border-red-500/40 transition-colors cursor-default">
              <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-red-500 to-orange-500"></div>
              <div className="flex gap-5 items-start">
                <div className="bg-red-500/10 p-3.5 rounded-2xl text-red-500 flex-shrink-0 shadow-inner">
                  <Bell className="animate-bounce" size={24} />
                </div>
                <div>
                  <div className="font-black text-white mb-1.5 text-lg tracking-wide">ROPA ALERT</div>
                  <p className="text-sm text-slate-300 mb-4 font-medium leading-relaxed">A new high-match opportunity closing within 3 days.</p>
                  <div className="inline-flex items-center gap-2 bg-slate-900/80 text-ropa-yellow px-3 py-1.5 rounded-lg text-xs font-black border border-slate-700/50 shadow-inner uppercase tracking-wider">
                    92% Match Score
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-slate-800/40 backdrop-blur-xl p-6 rounded-[1.5rem] border border-slate-700/30 shadow-xl relative overflow-hidden opacity-60 scale-95 origin-top ml-4">
              <div className="flex gap-5 items-start">
                <div className="bg-slate-900 p-3.5 rounded-2xl text-slate-400 flex-shrink-0 shadow-inner border border-slate-700/50">
                  <Bell size={24} />
                </div>
                <div>
                  <div className="font-bold text-slate-300 mb-1 text-base tracking-wide">Reminder</div>
                  <p className="text-sm text-slate-500 font-medium">Your saved KVK Training application closes tomorrow.</p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
