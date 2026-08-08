"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight } from "lucide-react";

const documents = [
  "Aadhaar",
  "Land Record / 7/12",
  "Bank Passbook",
  "Passport Photo"
];

const steps = [
  { num: "01", title: "Check eligibility" },
  { num: "02", title: "Prepare documents" },
  { num: "03", title: "Open official portal" },
  { num: "04", title: "Submit application" },
  { num: "05", title: "Track progress" },
];

export default function ApplicationAssistance() {
  return (
    <section className="w-full relative lg:max-w-[1920px] lg:mx-auto py-12 md:py-16 bg-slate-50 overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl md:text-5xl lg:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-tight">
            From discovery to <span className="text-ropa-orange">application.</span>
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium leading-relaxed">
            ROPA helps users understand requirements and directs them to official application portals.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 items-center">
          
          {/* Documents UI */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-8 md:p-10 rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.05)] border border-slate-100 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-48 h-48 bg-ropa-green/5 rounded-full blur-3xl transform translate-x-1/2 -translate-y-1/2 z-0"></div>
            
            <h3 className="text-2xl md:text-3xl font-black text-slate-900 mb-8 flex items-center gap-3 relative z-10 tracking-tight">
              <FileText className="text-ropa-green" size={32} /> Required Documents
            </h3>
            
            <div className="space-y-4 relative z-10">
              {documents.map((doc, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 + i * 0.1 }}
                  className="flex items-center gap-4 bg-slate-50 p-5 rounded-2xl border border-slate-100 hover:border-ropa-green/30 hover:shadow-sm transition-all group"
                >
                  <div className="w-8 h-8 rounded-full bg-ropa-green/10 flex items-center justify-center text-ropa-green font-black flex-shrink-0 group-hover:bg-ropa-green group-hover:text-white transition-colors">
                    ✓
                  </div>
                  <span className="font-bold text-slate-700">{doc}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Application Steps */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative pl-2 md:pl-12"
          >
            {/* Timeline line */}
            <div className="absolute left-[26px] md:left-[66px] top-8 bottom-8 w-1 bg-slate-100 z-0 rounded-full hidden md:block"></div>
            
            <div className="space-y-10 relative z-10">
              {steps.map((step, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-6 group"
                >
                  <div className={`w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center font-black flex-shrink-0 shadow-sm transition-all duration-300 z-10 ${i === 2 ? 'bg-ropa-orange text-white scale-110 shadow-[0_10px_20px_rgba(249,115,22,0.3)] border-none' : 'bg-white border-2 border-slate-100 text-slate-400 group-hover:border-slate-200'}`}>
                    {step.num}
                  </div>
                  <div className={`text-xl md:text-2xl font-black tracking-tight transition-colors ${i === 2 ? 'text-slate-900' : 'text-slate-400 group-hover:text-slate-600'}`}>
                    {step.title}
                  </div>
                  {i === 2 && (
                    <motion.div 
                      animate={{ x: [0, 5, 0] }} 
                      transition={{ repeat: Infinity, duration: 1.5 }}
                    >
                      <ArrowRight className="text-ropa-orange ml-2" size={28} />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
