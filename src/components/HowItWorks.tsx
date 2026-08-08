"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    step: "01",
    title: "Tell ROPA about yourself.",
    content: "Location • Land size • Crops • Farmer profile",
    visual: (
      <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white w-full max-w-sm relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-ropa-orange/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="h-2 w-16 bg-ropa-orange rounded-full mb-4"></div>
        <div className="space-y-5 relative z-10">
          <div className="group-hover:scale-[1.02] transition-transform h-12 bg-slate-50 border border-slate-100 rounded-xl w-full flex items-center px-4 text-slate-400 text-sm">Select State: Maharashtra</div>
          <div className="group-hover:scale-[1.02] transition-transform delay-75 h-12 bg-slate-50 border border-slate-100 rounded-xl w-full flex items-center px-4 text-slate-400 text-sm">Land Size: 2.5 Acres</div>
          <div className="grid grid-cols-2 gap-4">
            <div className="group-hover:scale-[1.02] transition-transform delay-100 h-12 bg-slate-100 border border-slate-900/20 text-ropa-orange font-medium rounded-xl w-full flex items-center justify-center text-sm shadow-sm">Onion</div>
            <div className="group-hover:scale-[1.02] transition-transform delay-150 h-12 bg-slate-50 border border-slate-100 rounded-xl w-full flex items-center justify-center text-sm">Add Crop +</div>
          </div>
          <div className="h-14 bg-slate-900 rounded-xl w-full mt-8 flex items-center justify-center text-white font-bold shadow-lg shadow-slate-900/20 group-hover:bg-black transition-colors cursor-pointer">Save Profile</div>
        </div>
      </div>
    )
  },
  {
    step: "02",
    title: "ROPA understands your eligibility.",
    content: "The AI matching engine compares farmer information with opportunity requirements.",
    visual: (
      <div className="bg-slate-900 p-5 rounded-3xl shadow-2xl w-full max-w-sm relative overflow-hidden group">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03]"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200%] h-32 bg-slate-900/20 rotate-45 blur-3xl opacity-50 group-hover:rotate-90 transition-all duration-1000 ease-in-out"></div>
        <div className="relative z-10 flex flex-col items-center py-8">
          <div className="relative">
            <div className="w-24 h-24 rounded-full border-4 border-slate-800 absolute inset-0"></div>
            <div className="w-24 h-24 rounded-full border-4 border-slate-900 border-t-transparent border-r-transparent animate-spin"></div>
            <div className="absolute inset-0 flex items-center justify-center font-black text-white text-2xl">AI</div>
          </div>
          <div className="text-ropa-orange font-mono text-sm mt-8 animate-pulse font-bold tracking-widest uppercase">Analyzing 4,200+ criteria</div>
        </div>
      </div>
    )
  },
  {
    step: "03",
    title: "Discover your best matches.",
    content: "Instantly see what you qualify for with percentage match scores.",
    visual: (
      <div className="bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white w-full max-w-sm border-l-[6px] border-l-ropa-green relative group hover:-translate-y-2 transition-transform">
        <div className="absolute top-6 right-6 w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center">
          <svg className="w-5 h-5 text-ropa-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        </div>
        <div className="text-ropa-orange font-black text-2xl mb-2 tracking-tight group-hover:scale-105 transform origin-left transition-transform">92% Match</div>
        <div className="text-slate-900 font-bold text-xl mb-4 leading-tight">Solar Pump Subsidy Program 2026</div>
        <div className="flex gap-2 mb-6">
          <span className="bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1 rounded-md text-xs font-semibold">Subsidy</span>
          <span className="bg-slate-100 border border-slate-200 text-slate-600 px-3 py-1 rounded-md text-xs font-semibold">Equipment</span>
        </div>
        <div className="h-12 bg-slate-50 border border-slate-200 rounded-xl w-full flex items-center justify-between px-5 text-sm font-bold text-slate-700 group-hover:bg-slate-100 transition-colors cursor-pointer">
          <span>View Details</span>
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" /></svg>
        </div>
      </div>
    )
  },
  {
    step: "04",
    title: "Apply with confidence.",
    content: "Eligibility • Documents • Steps • Official source • Deadline",
    visual: (
      <div className="bg-white/90 backdrop-blur-md p-5 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-white w-full max-w-sm space-y-5 relative overflow-hidden group">
        <div className="absolute top-0 right-0 w-32 h-32 bg-slate-900/10 rounded-full blur-2xl transform translate-x-1/2 -translate-y-1/2"></div>
        <div className="font-bold text-slate-800 mb-6">Required Documents</div>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-900/30 transition-colors">
          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs shadow-sm shadow-slate-900/40">✓</div>
          Aadhaar Card
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-900/30 transition-colors delay-75">
          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs shadow-sm shadow-slate-900/40">✓</div>
          Land Record / 7/12
        </div>
        <div className="flex items-center gap-4 text-sm font-medium text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100 group-hover:border-slate-900/30 transition-colors delay-100">
          <div className="w-6 h-6 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs shadow-sm shadow-slate-900/40">✓</div>
          Bank Passbook
        </div>
        <div className="h-14 bg-slate-900 text-white rounded-xl w-full mt-8 flex items-center justify-center font-bold shadow-lg shadow-slate-900/20 group-hover:bg-slate-900 transition-colors cursor-pointer gap-2">
          Open Official Portal
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
        </div>
      </div>
    )
  }
];

export default function HowItWorks() {
  const containerRef = useRef(null);
  
  return (
    <section id="how-it-works" className="w-full relative lg:max-w-[1920px] lg:mx-auto bg-white">
      {/* Mobile view (vertical) */}
      <div className="md:hidden w-full px-6 py-20 space-y-24">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-black text-slate-900">How ROPA Works</h2>
        </div>
        
        {steps.map((step, i) => (
          <div key={i} className="flex flex-col gap-6">
            <div>
              <div className="text-ropa-orange font-black text-sm tracking-widest uppercase mb-2">STEP {step.step}</div>
              <h3 className="text-3xl font-black text-slate-900 mb-4 leading-tight">{step.title}</h3>
              <p className="text-slate-600 text-lg leading-relaxed">{step.content}</p>
            </div>
            <div className="flex justify-center bg-slate-50 p-6 rounded-3xl border border-slate-100 shadow-inner">
              {step.visual}
            </div>
          </div>
        ))}
      </div>

      {/* Desktop view (horizontal scroll simulation via sticky) */}
      <div className="hidden md:block">
        {steps.map((step, i) => (
          <div key={i} className="min-h-screen sticky top-0 flex items-center bg-white border-b border-slate-100">
            <div className="w-full max-w-7xl mx-auto px-12 grid grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="pr-12"
              >
                <div className="text-ropa-orange font-black tracking-widest text-sm uppercase mb-6">STEP {step.step}</div>
                <h3 className="text-4xl lg:text-5xl font-black text-slate-900 mb-6 leading-[1.1]">{step.title}</h3>
                <p className="text-slate-500 text-xl lg:text-2xl leading-relaxed font-medium">{step.content}</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-slate-50 h-[500px] w-full rounded-[3rem] border border-slate-100 flex items-center justify-center p-8 shadow-[inset_0_2px_20px_rgba(0,0,0,0.02)]"
              >
                {step.visual}
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
