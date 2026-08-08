"use client";

import Hero from "@/components/Hero";
import ProblemSection from "@/components/ProblemSection";
import RopaIntro from "@/components/RopaIntro";
import HowItWorks from "@/components/HowItWorks";
import AIMatching from "@/components/AIMatching";
import OpportunityEcosystem from "@/components/OpportunityEcosystem";
import VerifiedOpportunities from "@/components/VerifiedOpportunities";
import DeadlineAlerts from "@/components/DeadlineAlerts";
import ApplicationAssistance from "@/components/ApplicationAssistance";
import Languages from "@/components/Languages";
import AppShowcase from "@/components/AppShowcase";
import FAQ from "@/components/FAQ";
import { motion, useScroll } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();

  return (
    <>
      {/* Scroll Progress Bar */}
      <motion.div
        className="progress-bar"
        style={{ scaleX: scrollYProgress }}
      />
      
      <Hero />
      <ProblemSection />
      <RopaIntro />
      <HowItWorks />
      <AIMatching />
      <OpportunityEcosystem />
      <VerifiedOpportunities />
      <DeadlineAlerts />
      <ApplicationAssistance />
      <Languages />
      <AppShowcase />
      <FAQ />
    </>
  );
}
