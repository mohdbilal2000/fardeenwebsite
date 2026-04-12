"use client";

import Link from "next/link";
import { ArrowRight, Play } from "lucide-react";
import { SITE_TAGLINE, getWhatsAppGenericLink } from "@/lib/constants";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section className="relative min-h-[100vh] flex items-center overflow-hidden bg-gray-950">
      {/* Background Image with parallax feel */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1548013146-72479768bada?w=1920&q=80"
          alt="Taj Mahal at sunrise"
          className="img-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950/90 via-gray-950/60 to-gray-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/60 via-transparent to-gray-950/30" />
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl hidden lg:block" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-teal-500/10 rounded-full blur-3xl hidden lg:block" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Badge */}
            <div className="inline-flex items-center gap-2 glass text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Trusted by 500+ travelers worldwide
            </div>

            <h1 className="font-display text-[2.5rem] sm:text-5xl lg:text-7xl font-bold text-white tracking-tight leading-[1.05]">
              {SITE_TAGLINE}
            </h1>

            <p className="mt-5 sm:mt-6 text-base sm:text-lg text-gray-400 leading-relaxed max-w-lg">
              Curated luxury tour packages across India — from the iconic Taj Mahal
              to the royal deserts of Rajasthan. Every journey, personally crafted.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mt-8">
              <Link
                href="/tours"
                className="group inline-flex items-center justify-center gap-2 bg-white hover:bg-gray-50 text-gray-900 font-semibold px-7 py-4 rounded-full transition-all hover:shadow-xl hover:shadow-white/10"
              >
                Explore Tours
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <a
                href={getWhatsAppGenericLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 glass hover:bg-white/15 text-white font-medium px-7 py-4 rounded-full transition-all"
              >
                <Play className="w-4 h-4 fill-current" />
                Chat with Us
              </a>
            </div>

            {/* Trust indicators */}
            <div className="flex items-center gap-6 mt-10 pt-8 border-t border-white/10">
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">7+</div>
                <div className="text-xs text-gray-500 mt-0.5">Years</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">500+</div>
                <div className="text-xs text-gray-500 mt-0.5">Travelers</div>
              </div>
              <div className="w-px h-10 bg-white/10" />
              <div>
                <div className="text-2xl sm:text-3xl font-bold text-white">5.0</div>
                <div className="text-xs text-gray-500 mt-0.5">TripAdvisor</div>
              </div>
            </div>
          </motion.div>

          {/* Right side feature card — desktop only */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:block"
          >
            <div className="glass rounded-3xl p-6 max-w-sm ml-auto">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-amber-500/20 flex items-center justify-center">
                  <span className="text-amber-400 text-lg">★</span>
                </div>
                <div>
                  <div className="text-white text-sm font-semibold">Most Popular</div>
                  <div className="text-gray-400 text-xs">Golden Triangle Tour</div>
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden h-48 mb-4">
                <img
                  src="https://images.unsplash.com/photo-1587474260584-136574528ed5?w=600&q=80"
                  alt="Golden Triangle"
                  className="img-cover"
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <div className="text-xs text-gray-500">Starting from</div>
                  <div className="text-xl font-bold text-white">$150 <span className="text-sm font-normal text-gray-500">/ person</span></div>
                </div>
                <Link href="/tours/golden-4day" className="bg-white/10 hover:bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full transition-colors">
                  View →
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
