import Link from "next/link";
import { MessageCircle, ArrowRight } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-30">
        <img
          src="https://images.unsplash.com/photo-1599661046827-dacff0c0f09a?w=1920&q=80"
          alt=""
          className="img-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950/80 via-gray-950/70 to-gray-950/80" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 text-center">
        <div className="inline-flex items-center gap-2 glass text-white/70 text-xs font-medium px-4 py-2 rounded-full mb-6">
          <span className="w-2 h-2 bg-green-400 rounded-full" />
          Available 24/7
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Ready to Explore India?
        </h2>
        <p className="mt-4 sm:mt-5 text-base sm:text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
          Let us craft your perfect Indian adventure. No hidden fees, no hassle
          — just unforgettable experiences.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8 sm:mt-10">
          <a
            href={getWhatsAppGenericLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-7 py-4 rounded-full transition-all hover:shadow-xl w-full sm:w-auto justify-center"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
          <Link
            href="/tours"
            className="inline-flex items-center gap-2 glass hover:bg-white/15 text-white font-medium px-7 py-4 rounded-full transition-all w-full sm:w-auto justify-center"
          >
            View All Tours
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
