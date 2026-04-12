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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isTransparent
          ? "bg-transparent"
          : "bg-white/90 backdrop-blur-xl border-b border-gray-200/50 shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-18">
          <Link href="/" className="shrink-0">
            <span className={`text-lg font-bold tracking-tight transition-colors ${isTransparent ? "text-white" : "text-gray-900"}`}>
              {SITE_NAME}
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-1.5 rounded-full text-[13px] font-medium transition-all ${
                  pathname === link.href
                    ? isTransparent
                      ? "text-white bg-white/15"
                      : "text-gray-900 bg-gray-100"
                    : isTransparent
                    ? "text-white/70 hover:text-white hover:bg-white/10"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${CONTACT.phone}`}
              className={`text-[13px] font-medium transition-colors ${isTransparent ? "text-white/70 hover:text-white" : "text-gray-500 hover:text-gray-900"}`}
            >
              <span className="hidden xl:inline">{CONTACT.phoneDisplay}</span>
              <Phone className="w-4 h-4 xl:hidden" />
            </a>
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-[13px] font-medium px-4 py-2 rounded-full transition-all hover:shadow-lg"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              WhatsApp
            </a>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-2">
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-gray-900 text-white text-xs font-medium px-3 py-2 rounded-full"
            >
              <MessageCircle className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">WhatsApp</span>
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-full transition-colors ${isTransparent ? "text-white hover:bg-white/10" : "text-gray-600 hover:bg-gray-100"}`}
            >
              {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50 animate-fade-in">
          <div className="px-4 py-5 space-y-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                  pathname === link.href
                    ? "text-gray-900 bg-gray-100"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100">
              <a href={`tel:${CONTACT.phone}`} className="flex items-center gap-2 px-4 py-2.5 text-sm text-gray-500 font-medium">
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
