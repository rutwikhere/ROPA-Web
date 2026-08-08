import { siteConfig } from "@/config/site";

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-32 pb-20 px-6 max-w-4xl mx-auto">
      <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">Privacy Policy</h1>
      <p className="text-slate-500 mb-12 font-medium">
        Effective Date: August 2, 2026<br />
        Last Updated: August 2, 2026<br />
        Application Name: {siteConfig.name}<br />
        Operated By: {siteConfig.COMPANY_NAME} (Hereinafter referred to as "{siteConfig.name}", "we", "our", or "us")
      </p>

      <div className="prose prose-slate prose-lg max-w-none text-slate-700 space-y-8">
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Introduction</h2>
          <p>
            Welcome to {siteConfig.name}. {siteConfig.name} is an advanced artificial intelligence-powered agricultural platform designed specifically to empower Indian farmers, agriculturalists, and rural communities with cutting-edge technology, localized insights, real-time data, and comprehensive farming solutions. We respect your privacy and are deeply committed to protecting your personal, operational, and agricultural data. This Privacy Policy governs your use of our mobile application, website, application programming interfaces, cloud services, and any related software, features, tools, or content (collectively, the "Platform").
          </p>
          <p className="mt-4">
            This Privacy Policy informs you about how we collect, use, process, store, disclose, secure, and delete your Information when you download, install, access, or use the {siteConfig.name} mobile application. It also explains your statutory rights regarding your data under applicable legal frameworks, including the Digital Personal Data Protection Act, 2023 (India), the Information Technology Act, 2000 (India), the General Data Protection Regulation (GDPR) (where applicable to international users), Google Play Developer Policies, Google Play Data Safety Requirements, and general international privacy best practices.
          </p>
          <p className="mt-4">
            By downloading, installing, registering an account on, or otherwise accessing {siteConfig.name}, you explicitly acknowledge that you have read, understood, and consented to the collection, storage, processing, and transfer of your information as described in this Privacy Policy. If you do not agree with any part of this Privacy Policy, you must immediately uninstall the {siteConfig.name} application and cease all use of our services.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Scope</h2>
          <p>
            This Privacy Policy applies universally to all users of the {siteConfig.name} mobile application and its associated services, including but not limited to registered farmers, agricultural experts, enterprise partners, guest users, visitors, and individuals interacting with our AI models, customer support channels, or third-party integrations embedded within the Platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Definitions</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>"Personal Data" or "Personal Information"</strong> means any data about an individual who is identifiable by or in relation to such data, including name, address, contact details, email address, phone number, government identifiers, financial details, and biometric data.</li>
            <li><strong>"Non-Personal Data"</strong> means data that is not personally identifiable, including aggregated analytics, anonymous device metadata, general agricultural statistics, weather metrics, and aggregated market trends.</li>
            <li><strong>"Data Principal"</strong> refers to the individual to whom the personal data relates, who in the context of this policy is the User, Farmer, or Visitor of {siteConfig.name}.</li>
            <li><strong>"Data Fiduciary"</strong> refers to any person who alone or in conjunction with other persons determines the purpose and means of processing of personal data, which in this context is {siteConfig.COMPANY_NAME}.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Information We Collect</h2>
          <p>We collect a comprehensive range of data points to deliver accurate, localized, and efficient agricultural assistance.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Personal Information</h3>
          <p><strong>What:</strong> Full legal name, mobile number, email, age, gender, language, state, district, profile picture, etc.</p>
          <p><strong>Why:</strong> To verify identity, secure accounts, personalize profiles, and deliver targeted advisories.</p>
          <p><strong>Storage:</strong> Stored securely on cloud servers hosted by Google Cloud and Firebase, adhering to strict encryption standards for the duration of your active account.</p>

          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Farm & Crop Information</h3>
          <p><strong>What:</strong> Farm size, soil type, irrigation sources, ownership status, crop names, sowing dates, etc.</p>
          <p><strong>Why:</strong> To deliver hyper-localized AI farming assistance, fertilizer recommendations, and accurate disease diagnoses.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">AI Chat & Image Uploads</h3>
          <p><strong>What:</strong> Chat transcripts, uploaded photos of crops or documents, voice recordings.</p>
          <p><strong>Why:</strong> To power our AI computer vision models, speech-to-text engines, and personalized AI responses.</p>
          
          <h3 className="text-xl font-bold text-slate-900 mt-6 mb-3">Location Information</h3>
          <p><strong>What:</strong> GPS location data (latitude/longitude) when granted permission.</p>
          <p><strong>Why:</strong> To fetch precise, location-specific weather, mandi prices, and scheme eligibility.</p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Data Security & Encryption</h2>
          <p>
            {siteConfig.name} implements rigorous administrative, physical, technical, and organizational security measures designed to protect your personal and agricultural data. 
          </p>
          <ul className="list-disc pl-6 space-y-2 mt-4">
            <li><strong>Data in Transit:</strong> All data transmitted is encrypted using advanced TLS 1.3 protocols.</li>
            <li><strong>Data at Rest:</strong> Stored on cloud servers using robust AES-256 cryptographic algorithms.</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">User Rights & Data Deletion</h2>
          <p>
            You possess statutory rights regarding your personal data, including the right to access, rectify, or request erasure of your data. You can request complete deletion of your data at any time by navigating to your account settings and selecting "Delete Account," or by contacting our support team. Upon verifying your identity, we will permanently purge your data within ninety (90) days.
          </p>
        </section>
        
        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Children's Privacy</h2>
          <p>
            {siteConfig.name} is an agricultural platform designed for adult farmers, agricultural professionals, and commercial growers. We do not knowingly solicit, collect, or process personal data from children under the age of eighteen (18) years.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
          <p>If you have any questions, concerns, grievances, or statutory requests regarding this Privacy Policy, please contact our designated Grievance Officer and Data Protection Team:</p>
          <div className="bg-slate-50 p-6 rounded-xl mt-4 border border-slate-200">
            <p className="font-semibold text-slate-900">Email: <a href={`mailto:${siteConfig.CONTACT_EMAIL}`} className="text-ropa-orange">{siteConfig.CONTACT_EMAIL}</a></p>
          </div>
        </section>

      </div>
    </div>
  );
}
