"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center py-8 bg-slate-50 border-t border-slate-100">
      <div className="w-full max-w-[1920px] mx-auto px-4 max-w-5xl">
        <div className="text-center mb-6">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-2xl font-black text-slate-900 mb-6 leading-tight"
          >
            Building the opportunity layer<br/>
            for Indian agriculture.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
          >
            India's agricultural ecosystem contains thousands of schemes, subsidies, financial products, training programs, CSR initiatives and market opportunities. ROPA brings fragmented information together and makes it easier for farmers to discover what matters to them.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="text-ropa-orange font-bold tracking-widest text-sm mb-4">MISSION</div>
            <p className="text-2xl font-bold text-slate-900 leading-snug">
              Make agricultural opportunities accessible, understandable and actionable for every farmer.
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-white p-6 rounded-3xl shadow-sm border border-slate-100"
          >
            <div className="text-ropa-orange font-bold tracking-widest text-sm mb-4">VISION</div>
            <p className="text-2xl font-bold text-slate-900 leading-snug">
              Become India's largest personalized agricultural opportunity platform.
            </p>
          </motion.div>
        </div>

        {/* Impact Cards */}
        <div className="text-center mb-6">
          <h3 className="text-2xl font-bold text-slate-900 mb-4">Connecting farmers with</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {["Government Schemes", "Subsidies", "Loans", "Training", "CSR", "FPOs", "Corporate Opportunities"].map((impact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white px-6 py-3 rounded-full border border-slate-200 text-slate-700 font-medium shadow-sm hover:border-slate-900 hover:text-ropa-orange transition-colors cursor-default"
              >
                {impact}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
