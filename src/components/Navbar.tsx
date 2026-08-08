"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { siteConfig } from "@/config/site";
import { Home, Compass, Info, CheckCircle2, DollarSign, Menu } from "lucide-react";
import { useState } from "react";

import Image from "next/image";
import logo from "@/assets/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", href: "/#home", icon: Home },
    { label: "How It Works", href: "/#how-it-works", icon: Compass },
    { label: "Opportunities", href: "/#opportunities", icon: CheckCircle2 },
    { label: "Features", href: "/#features", icon: DollarSign },
  ];

  return (
    <>
      {/* Mobile Floating Menu Overlay */}
      {isOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="fixed top-20 left-4 right-4 bg-slate-900 text-white rounded-3xl p-6 z-[100] shadow-2xl border border-slate-700 flex flex-col gap-4 md:hidden"
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 p-3 rounded-xl hover:bg-slate-800 transition-colors"
            >
              <item.icon size={20} className="text-ropa-orange" />
              <span className="font-semibold">{item.label}</span>
            </Link>
          ))}
        </motion.div>
      )}

      {/* Main Fixed Top Navbar */}
      <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5, type: "spring", bounce: 0.4 }}
        className="fixed top-0 left-0 right-0 z-[110] w-full bg-white/80 backdrop-blur-xl border-b border-slate-200/50 shadow-sm flex items-center justify-between px-6 lg:px-12 py-3"
      >
        <Link href="/" className="flex items-center px-2">
          <Image src={logo} alt="ROPA Logo" className="h-8 md:h-10 w-auto object-contain" priority />
        </Link>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            >
              <span className="hidden lg:block">{item.label}</span>
              <item.icon size={18} className="lg:hidden" />
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-4">
          <a
            href={siteConfig.GOOGLE_PLAY_URL}
            className="bg-slate-900 hover:bg-black text-white px-5 py-2.5 rounded-full text-sm font-bold shadow-md transition-colors whitespace-nowrap"
          >
            Get App
          </a>
          
          {/* Mobile Menu Toggle */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2.5 bg-slate-100 rounded-full text-slate-900 hover:bg-slate-200"
          >
            <Menu size={20} />
          </button>
        </div>
      </motion.div>
    </>
  );
}
