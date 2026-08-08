"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Landmark, PiggyBank, CreditCard, GraduationCap, Building2, Tractor, Users } from "lucide-react";

const opportunities = [
  { id: 1, title: "Government Schemes", icon: Landmark, desc: "Central and state welfare programs", color: "bg-blue-50 text-blue-600 border-blue-200" },
  { id: 2, title: "Subsidies", icon: PiggyBank, desc: "Financial assistance for equipment and inputs", color: "bg-emerald-50 text-emerald-600 border-emerald-200" },
  { id: 3, title: "Loans & Credit", icon: CreditCard, desc: "KCC and other agricultural finance options", color: "bg-indigo-50 text-indigo-600 border-indigo-200" },
  { id: 4, title: "Training", icon: GraduationCap, desc: "Skill development and modern techniques", color: "bg-purple-50 text-purple-600 border-purple-200" },
  { id: 5, title: "CSR Programs", icon: Building2, desc: "Corporate initiatives for rural development", color: "bg-rose-50 text-rose-600 border-rose-200" },
  { id: 6, title: "Contract Farming", icon: Tractor, desc: "Direct market linkages with companies", color: "bg-amber-50 text-amber-600 border-amber-200" },
  { id: 7, title: "FPOs", icon: Users, desc: "Farmer Producer Organization benefits", color: "bg-cyan-50 text-cyan-600 border-cyan-200" },
];

export default function OpportunityEcosystem() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="opportunities" className="w-full relative lg:max-w-[1920px] lg:mx-auto py-12 md:py-16 bg-slate-50">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight leading-[1.1]">
            More than schemes.
          </h2>
          <p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            One platform for the opportunities that can help farmers grow.
          </p>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3 md:gap-4">
            {opportunities.map((item, i) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
                className="bg-white p-4 md:p-5 rounded-2xl shadow-[0_2px_10px_rgb(0,0,0,0.02)] border border-slate-100 hover:shadow-[0_8px_20px_rgba(0,0,0,0.06)] hover:-translate-y-0.5 transition-all duration-300 flex items-center gap-4 text-left group"
              >
                <div className={`p-3 rounded-xl flex-shrink-0 ${item.color.split(' ')[0]} ${item.color.split(' ')[1]} transition-transform duration-300 group-hover:scale-110`}>
                  <item.icon size={24} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900 text-sm md:text-base mb-0.5">{item.title}</h3>
                  <p className="text-xs text-slate-500 font-medium leading-relaxed">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
