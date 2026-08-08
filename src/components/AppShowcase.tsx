"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

import appLeftImg from "@/assets/app-left.jpeg";
import appCenterImg from "@/assets/app-center.jpeg";
import appRightImg from "@/assets/app-right.jpeg";

export default function AppShowcase() {
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const yCenter = useTransform(scrollYProgress, [0, 0.5, 1], [60, 0, -60]);
  const xLeft = useTransform(scrollYProgress, [0, 0.5], [-200, 0]);
  const xRight = useTransform(scrollYProgress, [0, 0.5], [200, 0]);
  const rotateLeft = useTransform(scrollYProgress, [0, 0.5], [-15, -5]);
  const rotateRight = useTransform(scrollYProgress, [0, 0.5], [15, 5]);
  
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="py-12 bg-slate-50 overflow-hidden relative min-h-[110vh]">
      <div className="w-full max-w-[1920px] mx-auto px-6 sticky top-[10%] pt-10">
        <div className="text-center mb-16 md:mb-24 relative z-20">
          <motion.h2 
            style={{ opacity }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-slate-900 tracking-tight leading-[1.1]"
          >
            Your opportunities.<br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-ropa-orange to-ropa-yellow">In your pocket.</span>
          </motion.h2>
        </div>

        <div className="relative h-[400px] md:h-[500px] w-full max-w-5xl mx-auto flex justify-center items-center mt-4">
          
          {/* Left Phone */}
          <motion.div 
            style={{ x: xLeft, rotate: rotateLeft, opacity }}
            className="absolute left-[5%] md:left-[2%] lg:left-[5%] z-10 w-[150px] md:w-[180px] h-[325px] md:h-[390px] bg-white rounded-[2.5rem] md:rounded-[3rem] border-[3px] md:border-[4px] border-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden transform-gpu origin-bottom group"
          >
            <div className="w-full h-full bg-slate-100 relative flex items-center justify-center overflow-hidden rounded-[2.2rem] md:rounded-[2.7rem]">
              <Image src={appLeftImg} alt="App Left" fill className="object-cover object-top" />
            </div>
            {/* Phone Glow Effect */}
            <div className="absolute -inset-10 bg-slate-900/20 blur-3xl rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Right Phone */}
          <motion.div 
            style={{ x: xRight, rotate: rotateRight, opacity }}
            className="absolute right-[5%] md:right-[2%] lg:right-[5%] z-10 w-[150px] md:w-[180px] h-[325px] md:h-[390px] bg-white rounded-[2.5rem] md:rounded-[3rem] border-[3px] md:border-[4px] border-slate-900 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] overflow-hidden transform-gpu origin-bottom group"
          >
            <div className="w-full h-full bg-slate-100 relative flex items-center justify-center overflow-hidden rounded-[2.2rem] md:rounded-[2.7rem]">
              <Image src={appRightImg} alt="App Right" fill className="object-cover object-top" />
            </div>
            {/* Phone Glow Effect */}
            <div className="absolute -inset-10 bg-ropa-orange/20 blur-3xl rounded-full z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          </motion.div>

          {/* Center Phone */}
          <motion.div 
            style={{ y: yCenter, opacity }}
            className="absolute z-20 w-[170px] md:w-[210px] h-[368px] md:h-[455px] bg-white rounded-[2.5rem] md:rounded-[3.5rem] border-[4px] md:border-[5px] border-slate-900 shadow-[0_40px_80px_-20px_rgba(0,0,0,0.5)] overflow-hidden transform-gpu group"
          >
            <div className="w-full h-full bg-slate-100 relative flex items-center justify-center overflow-hidden rounded-[2.2rem] md:rounded-[3.2rem]">
              <Image src={appCenterImg} alt="App Center" fill className="object-cover object-top" />
            </div>
            {/* Center Phone Glow Effect */}
            <div className="absolute -inset-20 bg-ropa-gradient blur-3xl rounded-[100%] z-[-1] opacity-0 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none mix-blend-screen"></div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
