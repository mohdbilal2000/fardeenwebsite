"use client";

import { useState } from "react";
import Link from "next/link";
import { Users, Snowflake, ArrowUpRight, MessageCircle } from "lucide-react";
import CTASection from "@/components/CTASection";
import { carRentals, CAR_TYPES, type CarType } from "@/lib/data";
import { getWhatsAppCarLink } from "@/lib/constants";

export default function CarRentalsPage() {
  const [activeType, setActiveType] = useState<CarType | "all">("all");

  const filtered =
    activeType === "all"
      ? carRentals
      : carRentals.filter((c) => c.type === activeType);

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
            India. Professional drivers, competitive rates, door-to-door service.
          </p>
        </div>
      </section>

      <section className="py-10 sm:py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Type Tabs */}
          <div className="flex flex-wrap gap-2 mb-8 sm:mb-10">
            <button
              onClick={() => setActiveType("all")}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeType === "all"
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
              }`}
            >
              All Vehicles
            </button>
            {CAR_TYPES.map((t) => (
              <button
                key={t.key}
                onClick={() => setActiveType(t.key)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  activeType === t.key
                    ? "bg-gray-900 text-white shadow-lg"
                    : "bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>

          {/* Car Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {filtered.map((car) => {
              const lowestPrice = Math.min(...car.routes.map((r) => r.priceOneWay));
              return (
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
                      {car.routes.slice(0, 2).map((r) => (
                        <span key={`${r.from}-${r.to}`} className="text-[11px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100">
                          {r.from} → {r.to}
                        </span>
                      ))}
                      {car.routes.length > 2 && (
                        <span className="text-[11px] text-gray-400">+{car.routes.length - 2} more</span>
                      )}
                    </div>

                    <div className="flex items-end justify-between mt-4 pt-4 border-t border-gray-50">
                      <div>
                        <span className="text-[11px] text-gray-400 uppercase tracking-wide">From</span>
                        <div className="text-2xl font-bold text-gray-900 tracking-tight">
                          ${lowestPrice}
                          <span className="text-[11px] font-normal text-gray-400 ml-0.5">/one-way</span>
                        </div>
                      </div>
                      <a
                        href={getWhatsAppCarLink(car.name, `${car.routes[0].from} to ${car.routes[0].to}`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-all hover:shadow-lg"
                      >
                        <MessageCircle className="w-3.5 h-3.5" />
                        Book
                      </a>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="py-14 sm:py-20 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="section-line mx-auto flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              Why Rent With Us
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-10">
            {[
              { title: "Verified Drivers", desc: "All drivers are background-checked, licensed, and experienced with tourist routes." },
              { title: "No Hidden Charges", desc: "Toll taxes, parking, and driver allowance — everything is transparent upfront." },
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
