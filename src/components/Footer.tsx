import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE_NAME, CONTACT, SOCIAL, NAV_LINKS } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {/* Brand — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h3 className="text-xl font-bold text-white mb-3">{SITE_NAME}</h3>
            <p className="text-sm text-gray-400 leading-relaxed max-w-sm">
              Premium India tour packages crafted with 7+ years of experience.
              Discover the beauty of India with personalized service and expert
              guides.
            </p>
            <div className="flex gap-3 mt-4">
              <a
                href={SOCIAL.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-teal-700 transition-colors text-xs font-medium"
              >
                FB
              </a>
              <a
                href={SOCIAL.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-teal-700 transition-colors text-xs font-medium"
              >
                IG
              </a>
              <a
                href={SOCIAL.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-gray-800 hover:bg-teal-700 transition-colors text-xs font-medium"
              >
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Quick Links
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Popular Tours */}
          <div>
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Popular Tours
            </h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {[
                "Taj Mahal Sunrise Tour",
                "Golden Triangle Tour",
                "Royal Rajasthan Tour",
                "Photography Tour",
                "Same Day Taj Mahal",
              ].map((tour) => (
                <li key={tour}>
                  <Link
                    href="/tours"
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {tour}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact — full width on mobile */}
          <div className="col-span-2 sm:col-span-2 lg:col-span-1">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider mb-3 sm:mb-4">
              Contact Us
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a
                  href={`tel:${CONTACT.phone}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors"
                >
                  <Phone className="w-4 h-4 mt-0.5 shrink-0" />
                  {CONTACT.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${CONTACT.email}`}
                  className="flex items-start gap-3 text-sm text-gray-400 hover:text-white transition-colors break-all"
                >
                  <Mail className="w-4 h-4 mt-0.5 shrink-0" />
                  {CONTACT.email}
                </a>
              </li>
              <li className="flex items-start gap-3 text-sm text-gray-400">
                <MapPin className="w-4 h-4 mt-0.5 shrink-0" />
                {CONTACT.address}
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 sm:mt-12 pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs sm:text-sm text-gray-500 text-center sm:text-left">
            &copy; {new Date().getFullYear()} {SITE_NAME}. All rights reserved.
          </p>
          <div className="flex flex-wrap justify-center gap-2 sm:gap-4 text-xs sm:text-sm text-gray-500">
            <span>IATA Certified</span>
            <span>&middot;</span>
            <span>Ministry of Tourism</span>
            <span>&middot;</span>
            <span>TripAdvisor Verified</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
