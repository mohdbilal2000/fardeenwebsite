"use client";

import { useState, useRef } from "react";
import { Users, Snowflake, MessageCircle, ChevronRight, ArrowUpRight, Star, Shield, Plane } from "lucide-react";
import CTASection from "@/components/CTASection";
import { carRentals, CAR_TYPES, type CarType } from "@/lib/data";
import { getWhatsAppCarLink } from "@/lib/constants";

// Marketing context shown when a guest opens a segment — answers
// "why should I prefer this category?" in 1–2 sentences.
const CATEGORY_CONTEXT: Record<CarType, { tagline: string; why: string }> = {
  sedan: {
    tagline: "Comfort travel for couples & small groups",
    why: "Our sedans are the smart everyday choice — fuel-efficient, easy to park around busy monuments, and comfortable on intercity highways. Ideal for couples, solo travelers, and day trips where you want comfort without the bulk.",
  },
  suv: {
    tagline: "Family travel with room for everyone",
    why: "Three-row MPVs with enough space for 6 guests plus luggage. The dependable choice for families and small groups on Golden Triangle tours and longer journeys.",
  },
  "premium-suv": {
    tagline: "Premium comfort for long routes & hill stations",
    why: "When you want extra room, road presence and a refined cabin for Rajasthan or hill-station drives. A noticeable step up from a standard SUV — without the cost of full luxury.",
  },
  "luxury-suv": {
    tagline: "Flagship luxury for VIP transfers",
    why: "Hand-crafted cabins, air-suspension rides and chauffeur-driven service in the world's most recognised luxury SUVs. The right choice when the journey is part of the experience.",
  },
  "luxury-sedan": {
    tagline: "Executive saloons for business & special occasions",
    why: "Whisper-quiet cabins, plush rear seating and the most refined ride on the road. Reserved for VIPs, executive transfers, weddings and anniversaries — anywhere a first impression matters.",
  },
  "luxury-van": {
    tagline: "Lounge-style group travel",
    why: "Captain seats, conference layouts and ambient lighting — a private jet cabin on wheels. Best for families, executive groups and anyone who wants luxury without splitting into multiple cars.",
  },
  "premium-coach": {
    tagline: "Modern minibuses for groups of 9–17",
    why: "Push-back recliner seats, individual AC vents and generous luggage room. The new standard for group tours, corporate outings and wedding shuttles.",
  },
  coach: {
    tagline: "Volvo touring coaches for large groups",
    why: "Air-suspension Volvo coaches with reclining seats and panoramic windows — built for weddings, corporate offsites and long-distance group tours of 30+ guests.",
  },
};

export default function CarRentalsPage() {
  const [activeType, setActiveType] = useState<CarType | null>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  const selectCategory = (type: CarType) => {
    const next = activeType === type ? null : type;
    setActiveType(next);
    if (next) {
      setTimeout(() => {
        panelRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }, 80);
    }
  };

  const activeCategory = CAR_TYPES.find((t) => t.key === activeType);
  const activeCars = activeType ? carRentals.filter((c) => c.type === activeType) : [];
  const activeContext = activeType ? CATEGORY_CONTEXT[activeType] : null;

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Car Rentals & Cab Services
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
            From comfortable sedans to flagship luxury SUVs and touring coaches — every
            journey comes with a professional chauffeur and doorstep pickup. Pick a
            category to see all available vehicles.
          </p>
          <div className="flex flex-wrap gap-2.5 mt-6">
            {[
              { icon: Star, text: "Trusted by 500+ International Guests" },
              { icon: Shield, text: "Private Chauffeur Included" },
              { icon: Plane, text: "Doorstep & Airport Pickup" },
            ].map((b) => (
              <span
                key={b.text}
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                <b.icon className="w-3.5 h-3.5 text-amber-400" />
                {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8 sm:mb-10">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-gray-900">
              Browse by Category
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Hover any segment to preview the vehicles inside — click to see why you
              should pick it and message us directly on WhatsApp.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {CAR_TYPES.map((cat) => {
              const cars = carRentals.filter((c) => c.type === cat.key);
              const sample = cars[0];
              const isActive = activeType === cat.key;
              return (
                <button
                  key={cat.key}
                  onClick={() => selectCategory(cat.key)}
                  className={`group relative rounded-2xl overflow-hidden card-hover h-48 sm:h-60 text-left transition-all ${
                    isActive ? "ring-2 ring-gray-900 ring-offset-2" : ""
                  }`}
                >
                  {sample && (
                    <img
                      src={sample.image}
                      alt={cat.label}
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-950/95 via-gray-950/55 to-gray-950/15 group-hover:from-gray-950 transition-all duration-500" />

                  {/* Default state — name + count */}
                  <div className="relative h-full flex flex-col justify-between p-4 sm:p-5">
                    <div className="flex items-start justify-between">
                      <span className="text-[10px] sm:text-[11px] font-bold text-white bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full border border-white/10 uppercase tracking-wide">
                        {cars.length} {cars.length === 1 ? "vehicle" : "options"}
                      </span>
                      <div className="w-7 h-7 sm:w-8 sm:h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 border border-white/10">
                        <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white">
                        {cat.label}
                      </h3>
                      {/* Hover preview — vehicle names inside this segment */}
                      <div className="mt-1.5 text-[11px] sm:text-xs text-amber-200/90 leading-snug max-h-0 opacity-0 group-hover:max-h-32 group-hover:opacity-100 transition-all duration-300 overflow-hidden">
                        {cars.map((c) => c.name.replace("Mercedes-Benz ", "").replace("Toyota ", "")).join(" · ")}
                      </div>
                      <p className="mt-1 text-[11px] sm:text-xs text-gray-300/80 group-hover:opacity-0 transition-opacity duration-300">
                        {CATEGORY_CONTEXT[cat.key].tagline}
                      </p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Active segment panel — context + vehicle cards */}
      {activeType && activeCategory && activeContext && (
        <section ref={panelRef} className="pb-14 sm:pb-20 scroll-mt-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gray-50/70 rounded-3xl p-6 sm:p-10 border border-gray-100">
              <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-6 sm:mb-8">
                <div>
                  <span className="inline-block text-[11px] font-semibold uppercase tracking-widest text-amber-600">
                    Why choose {activeCategory.label}
                  </span>
                  <h2 className="mt-1 font-display text-2xl sm:text-3xl font-bold text-gray-900">
                    {activeContext.tagline}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-gray-600 leading-relaxed max-w-2xl">
                    {activeContext.why}
                  </p>
                </div>
                <button
                  onClick={() => setActiveType(null)}
                  className="self-start sm:self-auto inline-flex items-center gap-1 text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors"
                >
                  ← Browse other categories
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
                {activeCars.map((car) => {
                  const variantCount = car.images?.length ?? 1;
                  return (
                    <a
                      key={car.id}
                      href={getWhatsAppCarLink(car.name, `${car.routes[0].from} to ${car.routes[0].to}`)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block bg-white rounded-2xl overflow-hidden card-hover border border-gray-100/80"
                    >
                      <div className="relative h-52 sm:h-56 overflow-hidden">
                        <img
                          src={car.image}
                          alt={car.name}
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/10 to-transparent" />
                        {car.tag && (
                          <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[11px] font-bold text-amber-50 bg-amber-500/80 backdrop-blur-sm px-2.5 py-1 rounded-full uppercase tracking-wide">
                            <Star className="w-3 h-3 fill-amber-50" />
                            {car.tag}
                          </span>
                        )}
                        {variantCount > 1 && (
                          <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full border border-white/15">
                            {variantCount} photos
                          </span>
                        )}
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
                      </div>
                      <div className="p-5">
                        <h3 className="font-semibold text-gray-900 text-[17px] leading-snug group-hover:text-teal-700 transition-colors">
                          {car.name}
                        </h3>
                        <p className="text-[13px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">
                          {car.description}
                        </p>
                        <div className="flex items-center justify-between gap-2 mt-4 pt-4 border-t border-gray-50">
                          <span className="inline-flex items-center gap-1 text-sm font-medium text-gray-600 group-hover:text-gray-900 transition-colors">
                            Tap to message us
                            <ChevronRight className="w-3.5 h-3.5" />
                          </span>
                          <span className="inline-flex items-center gap-1.5 bg-gray-900 group-hover:bg-gray-800 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-all whitespace-nowrap">
                            <MessageCircle className="w-3.5 h-3.5" />
                            WhatsApp
                          </span>
                        </div>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>
          </div>
        </section>
      )}

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
              { title: "Doorstep Pickup", desc: "Hotel and airport pickups across Delhi, Agra, Jaipur and every major city." },
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
