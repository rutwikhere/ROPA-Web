"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { Check } from "lucide-react";

export default function Pricing() {
  return (
    <section id="premium" className="min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center py-8 bg-white">
      <div className="w-full max-w-[1920px] mx-auto px-4 max-w-5xl">
        <div className="text-center mb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-xl md:text-2xl font-black text-slate-900 mb-4"
          >
            Start free.<br/>
            <span className="text-ropa-orange">Grow with ROPA.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          
          {/* Free Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-50 p-6 rounded-3xl border border-slate-200 flex flex-col"
          >
            <h3 className="text-2xl font-bold text-slate-900 mb-2">FREE</h3>
            <div className="text-xl font-black text-slate-900 mb-4">₹0</div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Farmer profile", "Basic opportunity discovery", "Basic matching", "Verified opportunities", "8 languages"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-slate-400 mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-600 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-slate-200 hover:bg-slate-300 text-slate-800 font-bold py-4 rounded-xl transition-colors">
              Start Free
            </button>
          </motion.div>

          {/* Premium Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900 p-6 rounded-3xl border border-slate-800 flex flex-col relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 bg-ropa-gradient text-white text-xs font-bold px-4 py-1 rounded-bl-xl">POPULAR</div>
            
            <h3 className="text-2xl font-bold text-white mb-2">PREMIUM</h3>
            <div className="flex items-baseline gap-2 mb-4">
              <div className="text-xl font-black text-white">{siteConfig.PREMIUM_PRICE}</div>
            </div>
            
            <div className="bg-ropa-yellow/10 border border-ropa-yellow/20 text-ropa-yellow font-semibold text-sm py-2 px-4 rounded-lg mb-4 text-center">
              7-Day Free Trial
            </div>
            
            <ul className="space-y-4 mb-10 flex-grow">
              {["Advanced AI matching", "Immediate new opportunity alerts", "Priority support", "Exclusive corporate farming opportunities"].map((feature, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="text-ropa-yellow mt-1 flex-shrink-0" size={18} />
                  <span className="text-slate-300 font-medium">{feature}</span>
                </li>
              ))}
            </ul>
            
            <button className="w-full bg-ropa-gradient hover:shadow-lg hover:shadow-ropa-orange/20 text-white font-bold py-4 rounded-xl transition-all hover:scale-[1.02]">
              Start 7-Day Trial
            </button>
            <p className="text-center text-slate-500 text-xs mt-4">
              Users return to the free experience unless they choose to subscribe.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
