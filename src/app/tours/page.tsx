"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { tours, TOUR_CATEGORIES, type TourCategory } from "@/lib/data";

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<TourCategory | "all">("all");

  const filtered =
    activeCategory === "all"
      ? tours
      : tours.filter((t) => t.category === activeCategory);

  return (
    <>
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Tour Packages
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
            Explore our curated collection of India tour packages. Every tour
            includes private transport, expert guides, and 24/7 support.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeCategory === "all"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              }`}
            >
              All Tours
            </button>
            {TOUR_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeCategory === cat.key
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-400 py-16">
              No tours found in this category.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
