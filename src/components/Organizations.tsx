"use client";

import { motion } from "framer-motion";

export default function Organizations() {
  return (
    <section id="partner" className="min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center py-8 bg-slate-900 text-white">
      <div className="w-full max-w-[1920px] mx-auto px-4 max-w-5xl text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-6"
        >
          <h2 className="text-2xl md:text-2xl font-black mb-6">
            Help the right opportunities<br/>
            reach the right farmers.
          </h2>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-4">
            ROPA connects organizations directly with verified farmers who meet their specific eligibility criteria.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto mb-4"
        >
          {["Government", "NGOs", "CSR Teams", "Banks", "Agri Companies", "FPOs", "Training Institutions", "Corporate Farming"].map((org, i) => (
            <div key={i} className="bg-slate-800/50 backdrop-blur border border-slate-700 py-4 px-6 rounded-xl text-sm font-semibold text-slate-300">
              {org}
            </div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-ropa-yellow hover:bg-yellow-400 text-slate-900 font-bold py-4 px-8 rounded-full transition-colors">
            Partner With ROPA
          </button>
          <button className="bg-slate-800 hover:bg-slate-700 text-white font-bold py-4 px-8 rounded-full transition-colors border border-slate-700">
            Contact Us
          </button>
        </motion.div>
      </div>
    </section>
  );
}
