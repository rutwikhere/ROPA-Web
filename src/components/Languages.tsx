"use client";

import { motion } from "framer-motion";

const languages = [
  { name: "English", angle: 0 },
  { name: "हिन्दी", angle: 45 },
  { name: "मराठी", angle: 90 },
  { name: "ગુજરાતી", angle: 135 },
  { name: "తెలుగు", angle: 180 },
  { name: "தமிழ்", angle: 225 },
  { name: "ಕನ್ನಡ", angle: 270 },
  { name: "ਪੰਜਾਬੀ", angle: 315 },
];

export default function Languages() {
  return (
    <section className="w-full relative lg:max-w-[1920px] lg:mx-auto py-16 md:py-24 bg-white overflow-hidden">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left: Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight leading-[1.1]">
              Your language.<br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-ropa-orange to-red-500">Your opportunities.</span>
            </h2>
            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 font-medium leading-relaxed">
              ROPA is designed to make agricultural information accessible across India's diverse linguistic communities.
            </p>
          </motion.div>

          {/* Right: Languages Circle */}
          <div className="relative w-full max-w-lg mx-auto h-[400px] lg:h-[450px] flex items-center justify-center">
            {/* Subtle background glow */}
            <div className="absolute inset-0 bg-ropa-orange/5 rounded-full blur-[80px] transform scale-75 z-0"></div>
            
            {/* Center ROPA orb */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", bounce: 0.5 }}
              className="absolute z-20 w-28 h-28 bg-white rounded-full shadow-[0_10px_40px_rgba(0,0,0,0.1)] flex items-center justify-center border-[6px] border-slate-50"
            >
              <span className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-br from-ropa-orange to-red-500 tracking-tighter">ROPA</span>
            </motion.div>

            {/* Orbiting Languages */}
            {languages.map((lang, i) => {
              const radius = 150; // Distance from center
              const delay = 0.2 + i * 0.1;
              const x = Math.cos((lang.angle * Math.PI) / 180) * radius;
              const y = Math.sin((lang.angle * Math.PI) / 180) * radius;
              
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  whileInView={{ opacity: 1, x, y }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay, type: "spring", bounce: 0.4 }}
                  className="absolute z-10 bg-white px-5 py-2.5 rounded-full shadow-[0_8px_25px_rgba(0,0,0,0.06)] border border-slate-100 font-bold text-slate-700 text-base md:text-lg hover:scale-110 hover:border-ropa-orange hover:text-ropa-orange hover:shadow-[0_10px_30px_rgba(249,115,22,0.15)] transition-all cursor-default"
                >
                  {lang.name}
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
