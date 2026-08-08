import { siteConfig } from "@/config/site";

export default function TermsAndConditionsPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Terms & Conditions</h1>
      <p className="text-slate-500 mb-12 font-medium">
        Effective Date: August 2, 2026<br />
        Last Updated: August 2, 2026<br />
        Application Name: {siteConfig.name}<br />
        Operated By: {siteConfig.COMPANY_NAME}
      </p>

      <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-8">
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">AI Disclaimer</h2>
          <p className="font-semibold uppercase">THE AI FARMING ASSISTANT, AI CHAT, VOICE CHAT, AND ALL ARTIFICIAL INTELLIGENCE TOOLS EMBEDDED IN {siteConfig.name.toUpperCase()} ARE PROVIDED FOR INFORMATIONAL, EDUCATIONAL, AND ASSISTIVE PURPOSES ONLY.</p>
          <p className="mt-4">
            AI models generate responses based on statistical pattern matching, probabilistic machine learning algorithms, and historical agricultural datasets. {siteConfig.name.toUpperCase()} MAKES NO WARRANTIES, EXPRESS OR IMPLIED, REGARDING THE ACCURACY, COMPLETENESS, RELIABILITY, SUITABILITY, OR TIMELINESS OF ANY AI-GENERATED ADVICE, RECOMMENDATION, OR OUTPUT. Artificial intelligence can produce erroneous, outdated, or hallucinated information ("AI hallucinations"). Users must never rely solely on AI recommendations for critical agricultural, financial, or legal decisions. Always consult certified human agricultural extension officers, agronomists, veterinarians, or financial advisors before executing major farming operations.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Crop Disease Disclaimer</h2>
          <p>
            AI Crop Disease Detection features utilize image processing and computer vision algorithms to identify potential plant pathologies, nutritional deficiencies, and pest infestations. These diagnostic outputs are probabilistic estimates and DO NOT constitute definitive laboratory diagnoses, pathological certifications, or professional plant pathology guarantees. Environmental factors, camera lighting, blur, and symptom overlap can cause misdiagnoses. {siteConfig.name} shall bear zero liability for crop loss, treatment failure, financial loss, or agricultural damage resulting from reliance on AI crop disease diagnoses.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Weather & Government Scheme Disclaimer</h2>
          <p>
            Weather information, meteorological forecasts, and climate alerts provided within {siteConfig.name} are sourced from third-party meteorological APIs. Weather patterns are inherently volatile, unpredictable, and subject to rapid unseasonal shifts. {siteConfig.name.toUpperCase()} MAKES NO GUARANTEES REGARDING WEATHER FORECAST ACCURACY.
          </p>
          <p className="mt-4">
            Furthermore, {siteConfig.name.toUpperCase()} IS AN INDEPENDENT PRIVATE PLATFORM AND IS NOT AFFILIATED WITH, ENDORSED BY, SPONSORED BY, OR CONNECTED TO THE GOVERNMENT OF INDIA, ANY STATE GOVERNMENT, OR ANY GOVERNMENT MINISTRY OR DEPARTMENT UNLESS EXPLICITLY STATED OTHERWISE. We do not guarantee scheme approval, subsidy disbursement, loan sanction, or official eligibility.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Marketplace & Premium Subscription Disclaimer</h2>
          <p>
            For upcoming Marketplace features, {siteConfig.name} acts strictly as an intermediary technology platform connecting buyers and sellers of agricultural produce, equipment, and inputs. We disclaim all liability for commercial fraud, defective goods, delivery delays, payment defaults, or contractual breaches occurring in marketplace transactions.
          </p>
          <p className="mt-4">
            Premium Subscriptions unlock advanced digital features within {siteConfig.name}. Subscriptions do not guarantee physical agricultural success, higher market prices, guaranteed loan approvals, or absolute immunity from crop loss. All subscription purchases are final, and refund eligibility is governed strictly by Google Play Store refund policies.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Limitation of Liability</h2>
          <p className="font-semibold uppercase">
            TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE INDIAN AND INTERNATIONAL LAW, IN NO EVENT SHALL {siteConfig.COMPANY_NAME.toUpperCase()}, ITS DIRECTORS, OFFICERS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES, INCLUDING BUT NOT LIMITED TO DAMAGES FOR LOSS OF PROFITS, CROPS, LIVESTOCK, REVENUE, GOODWILL, USE, DATA, OR OTHER INTANGIBLE LOSSES.
          </p>
          <p className="mt-4 uppercase">
            IN NO EVENT SHALL {siteConfig.name.toUpperCase()}'S AGGREGATE LIABILITY FOR ALL CLAIMS RELATING TO THE SERVICES EXCEED THE TOTAL AMOUNT PAID BY YOU TO {siteConfig.name.toUpperCase()} FOR PREMIUM SUBSCRIPTIONS DURING THE TWELVE (12) MONTHS PRECEDING THE CLAIM, OR ONE THOUSAND INDIAN RUPEES (INR 1,000), WHICHEVER IS LOWER.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Indemnification</h2>
          <p>
            You agree to defend, indemnify, and hold harmless {siteConfig.COMPANY_NAME}, its officers, directors, employees, contractors, and agents from and against any and all claims, damages, obligations, losses, liabilities, costs, debt, and expenses (including attorney's fees) arising from: (A) your use of and access to the {siteConfig.name} Platform; (B) your violation of any term of this Privacy Policy or our Terms of Service; (C) your violation of any third-party right, including without limitation any copyright, property, or privacy right; or (D) any agricultural, financial, or legal decisions made by you based on AI advisories or platform content.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Intellectual Property & Copyright</h2>
          <p>
            All intellectual property rights in the {siteConfig.name} mobile application, website, source code, databases, AI models, user interfaces, logos, trademarks, text, graphics, and audio content are the exclusive property of {siteConfig.COMPANY_NAME}. Unauthorized reproduction, reverse engineering, scraping, modification, or distribution of {siteConfig.name}'s intellectual property is strictly prohibited and will be prosecuted to the full extent of the law.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Governing Law & Dispute Resolution</h2>
          <p>
            This Privacy Policy and all matters arising out of or relating to your use of {siteConfig.name} shall be governed by, construed, and enforced in accordance with the laws of India. Any dispute, controversy, claim, or difference arising out of or relating to these terms shall be referred to and finally resolved by binding arbitration in accordance with the Arbitration and Conciliation Act, 1996 (India). The seat and venue of arbitration shall be New Delhi, India.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
          <p>For any legal or business inquiries, please contact:</p>
          <div className="bg-slate-50 p-6 rounded-xl mt-4 border border-slate-200">
            <p className="font-semibold text-slate-900">Email: <a href={`mailto:${siteConfig.CONTACT_EMAIL}`} className="text-ropa-orange">{siteConfig.CONTACT_EMAIL}</a></p>
          </div>
        </section>

      </div>
    </div>
  );
}
