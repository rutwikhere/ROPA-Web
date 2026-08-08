import Link from "next/link";
import Image from "next/image";
import { siteConfig } from "@/config/site";
import footerLogoImg from "@/assets/footerlogo.png";
import textRopaImg from "@/assets/textropa.png";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-20 pb-32 md:pb-40 border-t border-slate-900 relative overflow-hidden">
      {/* Subtle top border glow */}
      <div className="absolute top-0 inset-x-0 h-px w-full bg-gradient-to-r from-transparent via-ropa-orange/20 to-transparent"></div>
      
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-2">
            <Link href="/" className="inline-flex items-center gap-3 mb-6 group">
              <div className="relative h-12 w-12 group-hover:scale-105 transition-transform duration-300">
                <Image src={footerLogoImg} alt="ROPA Logo" fill className="object-contain object-left" />
              </div>
              <div className="relative h-6 w-24">
                <Image src={textRopaImg} alt="ROPA" fill className="object-contain object-left brightness-0 invert opacity-90 group-hover:opacity-100 transition-opacity" />
              </div>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed">
              {siteConfig.description}
            </p>
            <div className="flex gap-4">
              <a
                href={siteConfig.GOOGLE_PLAY_URL}
                className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 flex items-center justify-center hover:border-white/20"
              >
                Google Play
              </a>
              <a
                href={siteConfig.APP_STORE_URL}
                className="bg-white/5 hover:bg-white/10 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all border border-white/10 flex items-center justify-center hover:border-white/20"
              >
                App Store
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">Platform</h4>
            <ul className="space-y-4">
              <li><Link href="/#home" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Home</Link></li>
              <li><Link href="/#how-it-works" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">How It Works</Link></li>
              <li><Link href="/#opportunities" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Opportunities</Link></li>
              <li><Link href="/#premium" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Premium</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/privacy-policy" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Terms & Conditions</Link></li>
              <li><Link href="/refund-policy" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Refund Policy</Link></li>
              <li><Link href="/disclaimer" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Disclaimer</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-black mb-6 uppercase tracking-wider text-sm">Business</h4>
            <ul className="space-y-4">
              <li><a href={`mailto:${siteConfig.CONTACT_EMAIL}`} className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Contact Us</a></li>
              <li><a href="#partner" className="text-slate-400 hover:text-white hover:translate-x-1 inline-block transition-all">Partner With ROPA</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 font-medium">© {new Date().getFullYear()} {siteConfig.COMPANY_NAME}. All rights reserved.</p>
          <p className="text-slate-500 font-medium tracking-wide">Built for India's farmers <span className="text-ropa-orange ml-1">♥</span></p>
        </div>
      </div>
    </footer>
  );
}
