import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Disclaimer | ${siteConfig.name}`,
  description: `Disclaimer for ${siteConfig.name}`,
};

export default function Disclaimer() {
  return (
    <div className="min-h-screen bg-slate-50 pt-24 pb-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <Link href="/" className="inline-flex items-center gap-2 text-ropa-orange hover:text-ropa-orange-dark transition-colors font-medium text-sm mb-4">
            <ArrowLeft size={16} /> Back to Home
          </Link>
          <div className="flex items-center gap-2 text-sm text-slate-500 mb-8">
            <Link href="/" className="hover:text-slate-800">Home</Link>
            <span>→</span>
            <span className="text-slate-800 font-medium">Disclaimer</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Disclaimer</h1>
          <p className="text-slate-500">Last Updated: {siteConfig.LAST_UPDATED}</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-ropa-orange hover:prose-a:text-ropa-orange-dark">
          <h2>1. Independent Platform</h2>
          <p>
            {siteConfig.name} is an independent opportunity discovery platform developed and operated by {siteConfig.COMPANY_NAME}. We are a private entity and <strong>do not claim to be a government website, nor are we officially affiliated with, endorsed by, or partnered with any government agency or department.</strong>
          </p>

          <h2>2. Source of Information</h2>
          <p>
            Information displayed on our platform regarding:
          </p>
          <ul>
            <li>Government Schemes</li>
            <li>Subsidies</li>
            <li>Loans</li>
            <li>Training Programs</li>
            <li>CSR Programs</li>
            <li>Other agricultural opportunities</li>
          </ul>
          <p>
            may originate from external, publicly available sources, including government portals, organizational websites, and public announcements. While we strive to verify this information, we do not guarantee its absolute accuracy, completeness, or timeliness.
          </p>

          <h2>3. Verification Responsibility</h2>
          <p>
            Users are strongly advised to independently verify all details, including but not limited to:
          </p>
          <ul>
            <li>Eligibility criteria</li>
            <li>Application deadlines</li>
            <li>Required documentation</li>
            <li>Application procedures</li>
          </ul>
          <p>
            through the respective official sources and portals before taking any action or submitting any applications.
          </p>

          <h2>4. Matching Recommendations</h2>
          <p>
            ROPA's AI-driven match percentage is an informational recommendation based on the profile data you provide. A high match score <strong>does not guarantee</strong> approval, eligibility, funding, or acceptance for any scheme or opportunity. The final decision rests entirely with the respective scheme authorities or organizations.
          </p>

          <h2>5. No Liability</h2>
          <p>
            {siteConfig.COMPANY_NAME} and its platform {siteConfig.name} shall not be held liable for any loss, damage, or missed opportunity resulting from reliance on the information provided on our platform. Users use the information at their own risk.
          </p>

          <h2>6. Contact Us</h2>
          <p>
            If you have any questions or concerns regarding this Disclaimer, please contact us at <a href={`mailto:${siteConfig.LEGAL_CONTACT_EMAIL}`}>{siteConfig.LEGAL_CONTACT_EMAIL}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
