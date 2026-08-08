"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    q: "What is ROPA?",
    a: "ROPA (Agriculture Opportunity Engine) is a platform that helps Indian farmers discover government schemes, subsidies, loans, training programs, CSR initiatives and other agricultural opportunities matched to their specific profile."
  },
  {
    q: "Is ROPA free?",
    a: "Yes, ROPA offers a free tier that includes farmer profile creation, basic opportunity discovery, and access to verified opportunities in 8 languages. We also offer a Premium subscription for advanced features."
  },
  {
    q: "How does ROPA match opportunities?",
    a: "Our AI engine compares your profile data (location, land size, crops, farmer category) with the eligibility criteria of thousands of opportunities to calculate a personalized match percentage."
  },
  {
    q: "Are opportunities verified?",
    a: "Yes. ROPA displays source information and verifies details like eligibility, documents, and deadlines against official portals so you can make informed decisions."
  },
  {
    q: "Does ROPA apply for schemes on behalf of farmers?",
    a: "No, ROPA is a discovery platform. We help you understand the requirements and direct you to the official government or organizational portals where you must submit your application directly."
  },
  {
    q: "Which languages does ROPA support?",
    a: "ROPA currently supports 8 Indian languages: English, Hindi, Marathi, Gujarati, Telugu, Tamil, Kannada, and Punjabi."
  },
  {
    q: "Does ROPA provide government services directly?",
    a: "No. ROPA is an independent platform and is not affiliated with the government. We aggregate and verify publicly available information for easier access."
  },
  {
    q: "How can organizations partner with ROPA?",
    a: "Government bodies, NGOs, banks, and agricultural companies can partner with us to ensure their opportunities reach the right eligible farmers. You can use the 'Partner With ROPA' section to contact our team."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="min-h-[100dvh] w-full overflow-hidden relative lg:max-w-[1920px] lg:mx-auto py-12 lg:py-20 flex flex-col justify-center py-8 bg-white">
      <div className="w-full max-w-[1920px] mx-auto px-4 max-w-4xl">
        <div className="text-center mb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-2xl md:text-2xl font-black text-slate-900 mb-6"
          >
            Frequently Asked Questions
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="border border-slate-200 rounded-2xl overflow-hidden bg-slate-50"
            >
              <button
                onClick={() => toggle(i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-ropa-orange focus-visible:ring-inset"
              >
                <span className="font-bold text-slate-900 text-lg pr-4">{faq.q}</span>
                <ChevronDown 
                  className={`text-slate-400 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-180 text-ropa-orange' : ''}`} 
                  size={24} 
                />
              </button>
              
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                  >
                    <div className="px-6 pb-6 pt-0 text-slate-600 leading-relaxed">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
