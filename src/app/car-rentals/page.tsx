"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Snowflake, MessageCircle, Star, Shield, Plane, MapPin } from "lucide-react";
import CTASection from "@/components/CTASection";
import { carRentals, CAR_TYPES, type CarType, type CarRental } from "@/lib/data";
import { getWhatsAppCarLink } from "@/lib/constants";

const CATEGORY_DESCRIPTIONS: Record<CarType, string> = {
  "luxury-suv": "Flagship luxury SUVs for VIP transfers — Mercedes GLS, BMW 7 Series, Range Rover.",
  "luxury-sedan": "Executive luxury saloons — Mercedes E/S-Class, BMW 5 Series, Audi A6.",
  "luxury-van": "Plush chauffeur vans — Vellfire, Mercedes Viano, Sprinter, Carnival, Hiace, Coaster.",
  "premium-suv": "Premium SUVs for hill stations and long routes — Fortuner, Innova Hycross.",
  "premium-coach": "Modern premium minibuses — Force Urbania and Tempo Traveller variants.",
  coach: "Volvo luxury touring coaches for large groups, weddings, and corporate tours.",
  suv: "Spacious MPVs ideal for families and longer journeys with luggage.",
  sedan: "Comfortable, fuel-efficient sedans perfect for couples and small groups.",
};

function VehicleCard({ car }: { car: CarRental }) {
  const variantCount = car.images?.length ?? 1;
  return (
    <div className="group relative h-72 sm:h-80 rounded-2xl overflow-hidden border border-white/10 bg-gray-900">
      <img
        src={car.image}
        alt={car.name}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/10" />

      {/* Tag */}
      {car.tag && (
        <span className="absolute top-3 left-3 inline-flex items-center gap-1 text-[10px] sm:text-[11px] font-bold text-amber-300 bg-amber-400/15 backdrop-blur-sm px-2.5 py-1 rounded-full border border-amber-300/30 uppercase tracking-wide">
          <Star className="w-3 h-3 fill-amber-300" />
          {car.tag}
        </span>
      )}

      {/* Variant photo count */}
      {variantCount > 1 && (
        <span className="absolute top-3 right-3 text-[10px] font-semibold text-white bg-white/15 backdrop-blur-sm px-2 py-1 rounded-full border border-white/15">
          {variantCount} photos
        </span>
      )}

      {/* Content */}
      <div className="absolute inset-x-0 bottom-0 p-4 sm:p-5">
        <h3 className="font-display text-lg sm:text-xl font-bold text-white leading-tight">
          {car.name}
        </h3>
        <p className="mt-1.5 flex items-center gap-3 text-xs text-gray-300">
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
        <p className="mt-1 text-[11px] text-amber-200/70">
          Ideal for Taj Mahal & Golden Triangle tours
        </p>
        <div className="flex items-center gap-2 mt-3">
          <a
            href={getWhatsAppCarLink(car.name, `${car.routes[0].from} to ${car.routes[0].to}`)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-1.5 bg-white hover:bg-gray-100 text-gray-900 text-sm font-semibold px-4 py-2.5 rounded-full transition-all whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Reserve Experience
          </a>
          <Link
            href={`/car-rentals/${car.id}`}
            className="inline-flex items-center justify-center border border-white/25 hover:border-white/60 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-all"
          >
            Details
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function CarRentalsPage() {
  const recommended = carRentals.filter((c) => c.recommended);
  const [openCategory, setOpenCategory] = useState<CarType | null>(CAR_TYPES[0].key);

  return (
    <>
      {/* Hero */}
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-12 sm:pb-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <span className="text-[11px] font-semibold tracking-widest uppercase text-amber-400">
              Private Chauffeur Service
            </span>
            <h1 className="mt-2 font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Choose Your Travel Style
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
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
                className="inline-flex items-center gap-1.5 text-xs font-medium text-gray-300 bg-white/5 border border-white/10 px-3 py-1.5 rounded-full"
              >
                <b.icon className="w-3.5 h-3.5 text-amber-400" />
                {b.text}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Signature Rides — Recommended */}
      <section className="bg-gray-950 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between gap-4 mb-6 sm:mb-8">
            <div>
              <h2 className="font-display text-xl sm:text-2xl font-bold text-white flex items-center gap-2">
                <Star className="w-5 h-5 text-amber-400 fill-amber-400" />
                Signature Rides
              </h2>
              <p className="text-sm text-amber-200/70 mt-1">
                Most booked by international guests — our recommended choices
              </p>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {recommended.map((car) => (
              <VehicleCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>

      {/* All Vehicles — Accordion by category */}
      <section className="bg-gray-950 pb-14 sm:pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-6 sm:mb-8">
            <h2 className="font-display text-xl sm:text-2xl font-bold text-white">
              All Vehicles
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Tap a category to explore every option in that segment
            </p>
          </div>

          <div className="border-t border-white/10">
            {CAR_TYPES.map((cat) => {
              const carsInCategory = carRentals.filter((c) => c.type === cat.key);
              if (carsInCategory.length === 0) return null;
              const isOpen = openCategory === cat.key;
              return (
                <div key={cat.key} className="border-b border-white/10">
                  <button
                    onClick={() => setOpenCategory(isOpen ? null : cat.key)}
                    className="w-full flex items-center justify-between gap-4 py-5 text-left group"
                  >
                    <div>
                      <h3 className="font-display text-lg sm:text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                        {cat.label}
                      </h3>
                      <p className="text-xs sm:text-sm text-gray-400 mt-0.5 max-w-2xl">
                        {carsInCategory.length}{" "}
                        {carsInCategory.length === 1 ? "option" : "options"} ·{" "}
                        {CATEGORY_DESCRIPTIONS[cat.key]}
                      </p>
                    </div>
                    <span
                      className={`shrink-0 w-9 h-9 rounded-full border flex items-center justify-center text-xl font-light transition-all ${
                        isOpen
                          ? "bg-amber-400 text-gray-950 border-amber-400"
                          : "text-amber-400 border-white/20 group-hover:border-amber-400"
                      }`}
                    >
                      {isOpen ? "−" : "+"}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 pb-8 animate-fade-in">
                      {carsInCategory.map((car) => (
                        <VehicleCard key={car.id} car={car} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Rent With Us */}
      <section className="bg-gray-950 border-t border-white/10 py-14 sm:py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Why Rent With Us
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mt-10">
            {[
              {
                icon: Shield,
                title: "Verified Chauffeurs",
                desc: "Background-checked, licensed drivers experienced with tourist routes and English-speaking guests.",
              },
              {
                icon: MapPin,
                title: "Doorstep Pickup",
                desc: "Hotel and airport pickups across Delhi, Agra, Jaipur and every major city.",
              },
              {
                icon: MessageCircle,
                title: "24/7 Support",
                desc: "Real-time assistance from booking to drop-off — we're always a message away.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white/5 rounded-2xl p-6 border border-white/10 text-left"
              >
                <div className="w-10 h-10 bg-amber-400/15 rounded-xl flex items-center justify-center mb-3 border border-amber-300/20">
                  <item.icon className="w-5 h-5 text-amber-400" />
                </div>
                <h3 className="font-bold text-white">{item.title}</h3>
                <p className="text-sm text-gray-400 mt-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
