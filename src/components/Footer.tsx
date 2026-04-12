import Link from "next/link";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";
import { SITE_NAME, CONTACT, SOCIAL, NAV_LINKS, getWhatsAppGenericLink } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-400">
      {/* Newsletter/CTA strip */}
      <div className="border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-bold text-white font-display">
              Plan Your Dream Trip
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Chat directly with Fardeen for a personalized itinerary
            </p>
          </div>
          <a
            href={getWhatsAppGenericLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full transition-all hover:shadow-lg hover:shadow-white/10 text-sm shrink-0"
          >
            Start Planning
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <h3 className="text-lg font-bold text-white">{SITE_NAME}</h3>
            <p className="text-sm text-gray-500 leading-relaxed mt-3 max-w-xs">
              Premium India tour packages crafted with care. 7+ years of
              creating unforgettable journeys.
            </p>
            <div className="flex gap-3 mt-5">
              {[
                { label: "FB", href: SOCIAL.facebook },
                { label: "IG", href: SOCIAL.instagram },
                { label: "YT", href: SOCIAL.youtube },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center text-xs font-semibold text-gray-400 hover:text-white transition-all border border-white/5"
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              Pages
            </h4>
            <ul className="space-y-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-gray-500 hover:text-white transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tours */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              Popular
            </h4>
            <ul className="space-y-2.5">
              {["Taj Mahal Sunrise", "Golden Triangle", "Royal Rajasthan", "Photography Tour", "Same Day Tours"].map((t) => (
                <li key={t}>
                  <Link href="/tours" className="text-sm text-gray-500 hover:text-white transition-colors">
                    {t}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-[0.15em] mb-4">
              Contact
            </h4>
            <ul className="space-y-3">
              <li>
                <a href={`tel:${CONTACT.phone}`} className="flex items-start gap-2.5 text-sm text-gray-500 hover:text-white transition-colors">
                  <Phone className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-start gap-2.5 text-sm text-gray-500 hover:text-white transition-colors break-all">
                  <Mail className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm text-gray-500">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0 text-gray-600" />
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-600">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
            <span>IATA Certified</span>
            <span className="text-gray-800">&middot;</span>
            <span>Ministry of Tourism</span>
            <span className="text-gray-800">&middot;</span>
            <span>TripAdvisor Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
