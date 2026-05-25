"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Snowflake, ArrowRight, Star, Shield, Plane, Tag } from "lucide-react";
import CTASection from "@/components/CTASection";
import { carRentals, CAR_TYPES, CATEGORY_INFO, type CarType, type CarRental } from "@/lib/data";

function VehicleCard({ car, featured = false }: { car: CarRental; featured?: boolean }) {
  const variantCount = car.images?.length ?? 1;
  const tier = CATEGORY_INFO[car.type].tier;
  return (
    <Link
      href={`/car-rentals/${car.id}`}
      className={`group relative block rounded-2xl overflow-hidden card-hover border border-gray-100/80 bg-white ${
        featured ? "h-80 sm:h-96" : "h-72 sm:h-80"
      }`}
    >
      <img
        src={car.image}
        alt={car.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/10" />

      {/* Top-left category tier — which segment this car falls into */}
      <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-white bg-brand/90 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wide">
        <Tag className="w-3 h-3" />
        {tier}
      </span>

      {/* Top-right variant count */}
      {variantCount > 1 && (
        <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/15">
          {variantCount} photos
        </span>
      )}

      {/* Content overlay */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
          {car.name}
        </h3>
        {car.tagline && (
          <p className="text-[12px] sm:text-sm text-brand-light/90 mt-0.5">
            {car.tagline}
          </p>
        )}
        <p className="mt-1.5 flex items-center gap-3 text-xs text-gray-200">
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
        </p>
        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="text-xs text-gray-300">
            View details &amp; book
          </span>
          <span className="inline-flex items-center gap-1.5 bg-white group-hover:bg-brand group-hover:text-white text-gray-900 text-sm font-semibold px-4 py-2 rounded-full transition-colors whitespace-nowrap">
            Explore
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function CarRentalsPage() {
  const recommended = carRentals.filter((c) => c.recommended);
  const [openCategory, setOpenCategory] = useState<CarType | null>(CAR_TYPES[0].key);

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-brand-deep via-brand-dark to-brand-deep pt-28 sm:pt-32 pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-brand-light">
              Private Chauffeur Service
            </span>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Choose Your Travel Style
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-white/70 max-w-xl">
            From comfortable sedans to flagship luxury SUVs and touring coaches —
            every journey comes with a professional chauffeur and doorstep pickup.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {[
              { icon: Star, text: "Trusted by 500+ International Guests" },
              { icon: Shield, text: "Private Chauffeur Included" },
              { icon: Plane, text: "Doorstep & Airport Pickup" },
            ].map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-white/80 bg-white/10 border border-white/15 px-3 py-1.5 rounded-full"
              >
                <b.icon className="w-3.5 h-3.5 text-brand-light" />
                {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Recommended row */}
      {recommended.length > 0 && (
        <section className="py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mb-8 sm:mb-10">
              <span className="inline-flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-widest text-brand">
                <Star className="w-3.5 h-3.5 fill-brand text-brand" />
                Recommended for You
              </span>
              <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gray-900">
                Our most preferred options for a comfortable journey
              </h2>
              <p className="text-sm text-gray-500 mt-2 max-w-xl">
                The vehicles most of our guests pick. Tap any card to view full
                details and send a booking request.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
              {recommended.map((car) => (
                <VehicleCard key={car.id} car={car} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* All Vehicles — accordion by category */}
      <section className="py-12 sm:py-16 bg-gray-50/60 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              All Vehicles
            </h2>
            <p className="text-sm text-gray-500 mt-2 max-w-xl">
              Tap a category to see every option in that segment and read why
              you might prefer it.
            </p>
          </div>

          <div className="bg-white rounded-2xl overflow-hidden border border-gray-200/80">
            {CAR_TYPES.map((cat, i) => {
              const cars = carRentals.filter((c) => c.type === cat.key);
              if (cars.length === 0) return null;
              const isOpen = openCategory === cat.key;
              const ctx = CATEGORY_INFO[cat.key];
              return (
                <div
                  key={cat.key}
                  className={i > 0 ? "border-t border-gray-100" : ""}
                >
                  <button
                    onClick={() => setOpenCategory(isOpen ? null : cat.key)}
                    className="w-full flex items-center justify-between gap-4 px-5 sm:px-7 py-5 sm:py-6 text-left hover:bg-brand-light/40 transition-colors"
                  >
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-gray-900">
                        {cat.label} <span className="text-gray-400 font-normal">— {ctx.tier}</span>
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-500 mt-0.5">
                        {cars.length} {cars.length === 1 ? "option" : "options"} ·{" "}
                        {cars.map((c) => c.name.replace("Mercedes-Benz ", "").replace("Toyota ", "")).join(", ")}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xl font-light transition-all ${
                        isOpen
                          ? "bg-brand text-white border-brand"
                          : "text-brand border-gray-200"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="px-5 sm:px-7 pb-8 animate-fade-in">
                      <div className="bg-brand-light/60 border border-brand/15 rounded-xl p-4 sm:p-5 mb-6">
                        <p className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold text-brand-dark">
                            Why {cat.label.toLowerCase()}?
                          </span>{" "}
                          {ctx.why}
                        </p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                        {cars.map((car) => (
                          <VehicleCard key={car.id} car={car} />
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Rent With Us */}
      <section className="py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-line mx-auto flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              Why Rent With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Verified Chauffeurs", desc: "Background-checked, licensed drivers experienced with tourist routes and English-speaking guests." },
              { title: "Doorstep Pickup", desc: "Hotel and airport pickups across North India's tourist circuits, Kerala and Mysore." },
              { title: "24/7 Support", desc: "Real-time assistance from booking to drop-off — we're always a message away." },
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
