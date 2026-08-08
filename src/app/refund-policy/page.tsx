import { siteConfig } from "@/config/site";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata = {
  title: `Refund Policy | ${siteConfig.name}`,
  description: `Refund Policy for ${siteConfig.name}`,
};

export default function RefundPolicy() {
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
            <span className="text-slate-800 font-medium">Refund Policy</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4">Refund Policy</h1>
          <p className="text-slate-500">Last Updated: {siteConfig.LAST_UPDATED}</p>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-sm border border-slate-100 prose prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-ropa-orange hover:prose-a:text-ropa-orange-dark">
          <h2>1. Strict No-Refund Policy</h2>
          <p>Please note that all purchases made on the {siteConfig.name} platform are final. Under no circumstances will any amount be refunded once a transaction is successfully completed.</p>

          <h2>2. No Cancellation</h2>
          <p>Once a Premium subscription or any digital service is purchased, it cannot be cancelled. Your access to the premium features will remain active for the full duration of the purchased cycle.</p>

          <h2>3. Service Issues & Extensions</h2>
          <p>If you face any valid technical issues, server downtimes, or disruptions in our premium service, please contact our support team. While we do not offer refunds, upon verification of a valid issue, we will compensate you by increasing your active subscription period proportionally.</p>

          <h2>4. Failed or Pending Transactions</h2>
          <p>If a payment is deducted from your bank account but the Premium features are not activated due to a technical error, please report it to us immediately with your transaction ID. Upon verification, the Premium features will be manually activated for the full duration. We do not initiate refunds for delayed activations.</p>

          <h2>5. Contact Information</h2>
          <p>If you are experiencing service issues and would like to request a subscription extension, please contact us at:</p>
          <p>Email: <a href={`mailto:${siteConfig.LEGAL_CONTACT_EMAIL}`}>{siteConfig.LEGAL_CONTACT_EMAIL}</a></p>
        </div>
      </div>
    </div>
  );
}
