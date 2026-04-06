"use client";

import { useState } from "react";
import TourCard from "@/components/TourCard";
import CTASection from "@/components/CTASection";
import { tours, TOUR_CATEGORIES, type TourCategory } from "@/lib/data";

export default function ToursPage() {
  const [activeCategory, setActiveCategory] = useState<TourCategory | "all">(
    "all"
  );

  const filtered =
    activeCategory === "all"
      ? tours
      : tours.filter((t) => t.category === activeCategory);

  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Tour Packages</h1>
          <p className="mt-2 sm:mt-3 text-base sm:text-lg text-gray-500 max-w-2xl">
            Explore our curated collection of India tour packages. Every tour
            includes private transport, expert guides, and 24/7 support.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10 overflow-x-auto pb-1">
            <button
              onClick={() => setActiveCategory("all")}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeCategory === "all"
                  ? "bg-teal-700 text-white"
                  : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              All Tours
            </button>
            {TOUR_CATEGORIES.map((cat) => (
              <button
                key={cat.key}
                onClick={() => setActiveCategory(cat.key)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === cat.key
                    ? "bg-teal-700 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
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
            <p className="text-center text-gray-400 py-12">
              No tours found in this category.
            </p>
          )}
        </div>
      </section>

      <CTASection />
    </>
  );
}
