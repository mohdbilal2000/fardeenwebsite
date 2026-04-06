import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1920&q=80"
          alt="Rajasthan palace"
          className="img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/90 to-teal-800/85" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
        <h2 className="text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Explore India?
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-teal-100 max-w-2xl mx-auto leading-relaxed">
          Get in touch with us today and let us plan your perfect Indian
          adventure. No hidden fees, no hassle — just unforgettable experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mt-8 sm:mt-10">
          <a
            href={getWhatsAppGenericLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/25 w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium px-6 sm:px-8 py-3.5 sm:py-4 rounded-xl border border-white/20 transition-all backdrop-blur-sm w-full sm:w-auto justify-center"
          >
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
