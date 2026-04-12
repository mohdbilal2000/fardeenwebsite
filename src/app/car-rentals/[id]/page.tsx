import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Users,
  Snowflake,
  ArrowLeft,
  MessageCircle,
  CheckCircle,
  Phone,
  MapPin,
  Clock,
  Shield,
} from "lucide-react";
import { carRentals } from "@/lib/data";
import { getWhatsAppCarLink, CONTACT } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return carRentals.map((car) => ({ id: car.id }));
}

export default async function CarRentalDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const car = carRentals.find((c) => c.id === id);

  if (!car) notFound();

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-end overflow-hidden">
        <img src={car.image} alt={car.name} className="absolute inset-0 img-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 w-full">
          <Link href="/car-rentals" className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-3 sm:mb-4 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to Car Rentals
          </Link>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
            {car.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {car.capacity}
            </span>
            {car.ac && (
              <span className="flex items-center gap-1.5">
                <Snowflake className="w-4 h-4" />
                Air Conditioned
              </span>
            )}
            <span className="glass text-[11px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide">
              {car.type}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-10">
            {/* Description */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Overview</h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">{car.description}</p>
            </div>

            {/* Features */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.features.map((f) => (
                  <div key={f} className="flex items-center gap-3 bg-gray-50/80 rounded-xl px-4 py-3 border border-gray-100/50">
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{f}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Route Pricing Table */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">Routes & Pricing</h2>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="bg-gray-950 text-white">
                      <th className="text-left px-4 py-3 rounded-tl-xl font-semibold">Route</th>
                      <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Distance</th>
                      <th className="text-left px-4 py-3 font-semibold hidden sm:table-cell">Duration</th>
                      <th className="text-right px-4 py-3 font-semibold">One Way</th>
                      <th className="text-right px-4 py-3 font-semibold">Round Trip</th>
                      <th className="text-right px-4 py-3 rounded-tr-xl font-semibold"></th>
                    </tr>
                  </thead>
                  <tbody>
                    {car.routes.map((route, i) => (
                      <tr key={i} className={`border-b border-gray-100 ${i % 2 === 0 ? "bg-white" : "bg-gray-50/50"}`}>
                        <td className="px-4 py-3.5">
                          <div className="flex items-center gap-1.5">
                            <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                            <span className="font-medium text-gray-900">{route.from}</span>
                            <span className="text-gray-300">→</span>
                            <span className="font-medium text-gray-900">{route.to}</span>
                          </div>
                        </td>
                        <td className="px-4 py-3.5 text-gray-500 hidden sm:table-cell">{route.distance}</td>
                        <td className="px-4 py-3.5 text-gray-500 hidden sm:table-cell">
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {route.duration}
                          </span>
                        </td>
                        <td className="px-4 py-3.5 text-right font-bold text-gray-900">${route.priceOneWay}</td>
                        <td className="px-4 py-3.5 text-right font-bold text-gray-900">${route.priceRoundTrip}</td>
                        <td className="px-4 py-3.5 text-right">
                          <a
                            href={getWhatsAppCarLink(car.name, `${route.from} to ${route.to}`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1 bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-full transition-all"
                          >
                            <MessageCircle className="w-3 h-3" />
                            Book
                          </a>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p className="text-xs text-gray-400 mt-3">
                * Prices are approximate and may vary based on season and availability. Contact us for exact quotes.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 space-y-5">
              <div>
                <div className="text-sm text-gray-500">Starting from</div>
                <div className="text-3xl font-bold text-gray-900 mt-1">
                  ${Math.min(...car.routes.map((r) => r.priceOneWay))}
                  <span className="text-sm font-normal text-gray-400 ml-1">/one-way</span>
                </div>
              </div>

              <a
                href={getWhatsAppCarLink(car.name, "custom route")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-gray-900 hover:bg-gray-800 text-white font-semibold py-4 rounded-full transition-all hover:shadow-lg"
              >
                <MessageCircle className="w-5 h-5" />
                Book via WhatsApp
              </a>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </a>

              <div className="border-t border-gray-100 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-teal-600" />
                  Verified & licensed drivers
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  No hidden charges
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-teal-600" />
                  24/7 roadside support
                </div>
              </div>

              {/* Included */}
              <div className="border-t border-gray-100 pt-5">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">What&apos;s Included</h4>
                <ul className="space-y-2">
                  {[
                    "Professional driver",
                    "Fuel charges",
                    "Interstate permits",
                    "Parking & toll taxes",
                    "GST included",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                      <CheckCircle className="w-3.5 h-3.5 text-green-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
