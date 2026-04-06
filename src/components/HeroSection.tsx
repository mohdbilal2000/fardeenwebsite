import Link from "next/link";
import { ArrowRight, Shield, Star, Clock } from "lucide-react";
import { SITE_TAGLINE } from "@/lib/constants";

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] sm:min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80"
          alt="Taj Mahal at sunrise"
          className="img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/80 via-gray-950/50 to-gray-950/30" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-2xl animate-fade-in-up">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            Rated 5/5 on TripAdvisor
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[1.1]">
            {SITE_TAGLINE}
          </h1>

          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed max-w-xl">
            Premium tour packages across India — Taj Mahal, Golden Triangle,
            Royal Rajasthan & more. Personalized experiences crafted by experts.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-6 sm:mt-8">
            <Link
              href="/tours"
              className="inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-7 py-4 rounded-xl transition-all hover:shadow-lg hover:shadow-white/10"
            >
              Explore Tours
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-medium px-7 py-4 rounded-xl border border-white/20 transition-all"
            >
              Get in Touch
            </Link>
          </div>

          <div className="flex flex-wrap gap-4 sm:gap-6 mt-8 sm:mt-12 text-xs sm:text-sm text-gray-300">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400" />
              Best Price Guarantee
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              24/7 Support
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              IATA Certified
            </div>
          </div>
        </div>
      </div>

    </section>
  );
}
