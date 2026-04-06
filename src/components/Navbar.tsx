"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Phone, MessageCircle } from "lucide-react";
import { SITE_NAME, NAV_LINKS, CONTACT, getWhatsAppGenericLink } from "@/lib/constants";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const hasDarkHero = pathname === "/" || pathname.startsWith("/tours/") || pathname.startsWith("/blog/") || pathname === "/about";
  const isTransparent = hasDarkHero && !scrolled;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="shrink-0">
            <span
              className={`text-lg sm:text-xl font-bold transition-colors whitespace-nowrap ${
                isTransparent ? "text-white" : "text-teal-700"
              }`}
            >
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav — only show at lg (1024px+) */}
          <div className="hidden lg:flex items-center gap-0.5">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-2.5 py-2 rounded-lg text-[13px] font-medium transition-colors whitespace-nowrap ${
                  pathname === link.href
                    ? isTransparent
                      ? "text-white bg-white/15"
                      : "text-teal-700 bg-teal-50"
                    : isTransparent
                    ? "text-white/80 hover:text-white hover:bg-white/10"
                    : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-2">
            <a
              href={`tel:${CONTACT.phone}`}
              className={`flex items-center gap-1.5 text-sm font-medium transition-colors px-2 py-2 rounded-lg ${
                isTransparent
                  ? "text-white/80 hover:text-white"
                  : "text-gray-600 hover:text-teal-700"
              }`}
            >
              <Phone className="w-4 h-4" />
              <span className="hidden xl:inline">{CONTACT.phoneDisplay}</span>
            </a>
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-3.5 py-2 rounded-lg transition-colors whitespace-nowrap"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden xl:inline">WhatsApp</span>
            </a>
          </div>

          {/* Mobile/Tablet toggle — show below lg */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-xs font-semibold px-3 py-2 rounded-lg transition-colors"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-lg transition-colors ${
                isTransparent
                  ? "text-white hover:bg-white/10"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile/Tablet Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-b border-gray-100 shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-teal-700 bg-teal-50"
                    : "text-gray-600 hover:text-teal-700 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 space-y-2">
              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-600 font-medium"
              >
                <Phone className="w-4 h-4" />
                {CONTACT.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
