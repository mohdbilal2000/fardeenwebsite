"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { Users, Snowflake, ArrowUpRight, MessageCircle, ChevronRight } from "lucide-react";
import CTASection from "@/components/CTASection";
import { carRentals, CAR_TYPES, type CarType } from "@/lib/data";
import { getWhatsAppCarLink } from "@/lib/constants";

const CATEGORY_DESCRIPTIONS: Record<CarType, string> = {
  luxury: "Premium cars and chauffeur service for VIP transfers and special occasions.",
  tempo: "Plush lounge vans like the Vellfire and Innova Hycross — ideal for premium group travel.",
  suv: "Spacious executive vehicles ideal for families and longer journeys with luggage.",
  sedan: "Comfortable, fuel-efficient cars perfect for couples and small groups.",
};

export default function CarRentalsPage() {
  const [activeType, setActiveType] = useState<CarType | "all">("all");
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered =
    activeType === "all"
      ? carRentals
      : carRentals.filter((c) => c.type === activeType);

  const selectCategory = (type: CarType | "all") => {
    setActiveType(type);
    // Smooth scroll to grid after a tick (so DOM updates)
    setTimeout(() => {
      gridRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 50);
  };

  const activeCategoryLabel =
    activeType === "all"
      ? "All Vehicles"
      : CAR_TYPES.find((t) => t.key === activeType)?.label;

  return (
    <>
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Car Rentals
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
            Comfortable, well-maintained vehicles for intercity travel across
            India. Professional drivers, door-to-door service. Contact us on
            WhatsApp for a personalized quote.
          </p>
        </div>
      </section>

      {/* Category Cards */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
              Browse by Category
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Choose a vehicle type to see all available options
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {CAR_TYPES.map((cat) => {
              const carsInCategory = carRentals.filter((c) => c.type === cat.key);
              const sampleCar = carsInCategory[0];
              const isActive = activeType === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => selectCategory(cat.key)}
                  className={`group relative rounded-2xl overflow-hidden card-hover h-44 sm:h-56 text-left transition-all ${
                    isActive ? "ring-2 ring-gray-900 ring-offset-2" : ""
                  }`}
                >
                  {sampleCar && (
                    <img
                      src={sampleCar.image}
                      alt={cat.label}
                      className="absolute inset-0 img-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/50 to-gray-950/20 group-hover:from-gray-950 transition-all duration-500" />
                  <div className="relative h-full flex flex-col justify-between p-4 sm:p-5">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold text-white bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 uppercase tracking-wide">
                        {carsInCategory.length} {carsInCategory.length === 1 ? "vehicle" : "options"}
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 border border-white/10">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {cat.label}
                      </h3>
                      <p className="text-[11px] sm:text-xs text-gray-300 mt-1 line-clamp-2">
                        {CATEGORY_DESCRIPTIONS[cat.key]}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Vehicle Grid */}
      <section ref={gridRef} className="py-10 sm:py-14 bg-gray-50/50 scroll-mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Heading + Pill Filter */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
                {activeCategoryLabel}
              </h2>
              <p className="text-sm text-gray-500 mt-1">
                {filtered.length} {filtered.length === 1 ? "vehicle" : "vehicles"} available
              </p>
            </div>
            {activeType !== "all" && (
              <button
                onClick={() => selectCategory("all")}
                className="self-start sm:self-auto inline-flex items-center gap-1 text-sm font-medium text-gray-700 hover:text-gray-900 transition-colors"
              >
                ← Show all categories
              </button>
            )}
          </div>

          {/* Pill Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            <button
              onClick={() => selectCategory("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeType === "all"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-white text-gray-500 hover:bg-gray-200 hover:text-gray-700 border border-gray-200"
              }`}
            >
              All Vehicles
            </button>
            {CAR_TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => selectCategory(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === t.key
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-white text-gray-500 hover:bg-gray-200 hover:text-gray-700 border border-gray-200"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Car Grid */}
          {filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {filtered.map((car) => (
                <div key={car.id} className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100/80">
                  <Link href={`/car-rentals/${car.id}`} className="block relative h-52 sm:h-56 overflow-hidden">
                    <img src={car.image} alt={car.name} className="img-cover transition-transform duration-700 ease-out group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className="text-[11px] font-bold text-white bg-white/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-white/10 uppercase tracking-wide">
                        {car.type}
                      </span>
                    </div>
                    <div className="absolute bottom-3 left-3 flex items-center gap-3 text-white text-sm">
                      <span className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5" />
                        {car.capacity}
                      </span>
                      {car.ac && (
                        <span className="flex items-center gap-1">
                          <Snowflake className="w-3.5 h-3.5" />
                          AC
                        </span>
                      )}
                    </div>
                    <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4 text-white" />
                    </div>
                  </Link>

                  <div className="p-5">
                    <Link href={`/car-rentals/${car.id}`}>
                      <h3 className="font-semibold text-gray-900 text-[17px] leading-snug group-hover:text-teal-700 transition-colors">
                        {car.name}
                      </h3>
                    </Link>
                    <p className="text-[13px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                      {car.description}
                    </p>

                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {car.routes.slice(0, 3).map((r) => (
                        <span key={`${r.from}-${r.to}`} className="text-[11px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">
                          {r.from} → {r.to}
                        </span>
                      ))}
                      {car.routes.length > 3 && (
                        <span className="text-[11px] text-gray-400">+{car.routes.length - 3} more</span>
                      )}
                    </div>

                    <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-gray-50">
                      <Link
                        href={`/car-rentals/${car.id}`}
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors inline-flex items-center gap-0.5"
                      >
                        View details
                        <ChevronRight className="w-3.5 h-3.5" />
                      </Link>
                      <a
                        href={getWhatsAppCarLink(car.name, `${car.routes[0].from} to ${car.routes[0].to}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-all hover:shadow-lg whitespace-nowrap"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Check Availability
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <p className="text-gray-500">No vehicles available in this category right now.</p>
              <button
                onClick={() => selectCategory("all")}
                className="mt-4 text-sm font-medium text-gray-900 hover:underline"
              >
                Show all vehicles
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Info Section */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-line mx-auto flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              Why Rent With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Verified Drivers", desc: "All drivers are background-checked, licensed, and experienced with tourist routes." },
              { title: "Best Quote on WhatsApp", desc: "Share your route and dates — we'll send you a personalized quote within minutes." },
              { title: "24/7 Support", desc: "Real-time assistance from booking to drop-off. We're always a message away." },
            ].map((item) => (
              <div key={item.title} className="bg-white rounded-2xl p-6 border border-gray-100/50">
                <h3 className="font-bold text-gray-900">{item.title}</h3>
                <p className="text-sm text-gray-500 mt-2 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
