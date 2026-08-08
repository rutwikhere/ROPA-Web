"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { CheckCircle2, ShieldCheck, FileText, Calendar, ExternalLink } from "lucide-react";

export default function VerifiedOpportunities() {
  const [today, setToday] = useState('');

  useEffect(() => {
    setToday(new Date().toLocaleDateString('en-IN', {
      day: 'numeric',
      month: 'short',
      year: 'numeric'
    }));
  }, []);

  return (
    <section className="w-full relative lg:max-w-[1920px] lg:mx-auto py-16 md:py-24 bg-white">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="pr-0"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-8 tracking-tight leading-[1.1]">
              Information you can <span className="text-ropa-orange">trust.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed font-medium">
              ROPA displays source information and verification details so users can make informed decisions. We don't just aggregate data; we verify it against official sources.
            </p>
            <div className="flex items-start gap-5 p-6 bg-ropa-orange/5 rounded-3xl border border-ropa-orange/20 shadow-sm">
              <ShieldCheck className="text-ropa-orange flex-shrink-0 mt-1" size={32} />
              <p className="text-base text-slate-800 font-bold leading-relaxed">
                ROPA independently checks eligibility criteria, required documents, and deadlines from official government and organizational portals.
              </p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="relative"
          >
            {/* Card Background Glow */}
            <div className="absolute inset-0 bg-ropa-orange/10 blur-[100px] rounded-full transform -translate-y-1/4 z-0"></div>
            
            {/* Opportunity Card */}
            <div className="relative z-10 bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-slate-100 overflow-hidden">
              <div className="p-8 md:p-10">
                <div className="flex justify-between items-start mb-8">
                  <div>
                    <div className="flex items-center gap-2 text-ropa-orange font-black text-sm mb-4 bg-ropa-orange/10 w-fit px-4 py-1.5 rounded-full border border-ropa-orange/20">
                      <CheckCircle2 size={16} /> VERIFIED
                    </div>
                    <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">Solar Pump Subsidy</h3>
                    <div className="text-slate-500 font-bold flex items-center gap-2">
                      <span className="w-2.5 h-2.5 rounded-full bg-green-500 animate-pulse"></span>
                      92% Match Score
                    </div>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 flex flex-col items-center shadow-sm">
                    <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-1">Verified On</span>
                    <span className="text-sm font-black text-slate-700">{today}</span>
                  </div>
                </div>

                <div className="mb-8 bg-slate-50 p-6 md:p-8 rounded-3xl border border-slate-100 shadow-inner">
                  {[
                    { text: 'Eligibility Rules', icon: ShieldCheck },
                    { text: 'Official Source Link', icon: ExternalLink },
                    { text: 'Document Requirements', icon: FileText },
                    { text: 'Application Deadline', icon: Calendar }
                  ].map((item, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center justify-between border-b border-slate-200/80 pb-4 mb-4 last:border-0 last:pb-0 last:mb-0"
                    >
                      <div className="flex items-center gap-4 text-slate-700 font-bold">
                        <item.icon size={20} className="text-slate-400" /> {item.text}
                      </div>
                      <div className="bg-green-100 p-1.5 rounded-full text-green-600 shadow-sm">
                        <CheckCircle2 size={16} strokeWidth={3} />
                      </div>
                    </motion.div>
                  ))}
                </div>

                <button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-5 rounded-2xl transition-all hover:-translate-y-1 shadow-[0_10px_20px_rgba(0,0,0,0.1)] flex justify-center items-center gap-2">
                  View Opportunity <ExternalLink size={20} />
                </button>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
