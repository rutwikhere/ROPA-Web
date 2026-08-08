"use client";

import { motion } from "framer-motion";

const problems = [
  {
    title: "Information is scattered",
    desc: "Government schemes, subsidies, loans and training programs are spread across multiple portals and organizations."
  },
  {
    title: "Eligibility is complicated",
    desc: "Farmers often don't know which opportunities actually apply to them."
  },
  {
    title: "Deadlines are easy to miss",
    desc: "A missed deadline can mean a missed opportunity."
  },
  {
    title: "Applications can be confusing",
    desc: "Documents, requirements and procedures can make applications difficult."
  }
];

export default function ProblemSection() {
  return (
    <section className="min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center py-8 bg-white relative">
      <div className="w-full max-w-[1920px] mx-auto px-4 max-w-5xl">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black text-slate-900 tracking-tight leading-[1.1]">
            The opportunity exists.<br/>
            <span className="text-slate-400">Finding it shouldn't be difficult.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {problems.map((problem, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-slate-50 p-5 rounded-3xl border border-slate-100 flex flex-col sm:flex-row gap-4 items-start shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-white w-12 h-12 rounded-2xl shadow-sm flex items-center justify-center flex-shrink-0 text-xl font-black text-ropa-orange border border-slate-100">
                0{i + 1}
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{problem.title}</h3>
                <p className="text-slate-600 text-base leading-relaxed">{problem.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
