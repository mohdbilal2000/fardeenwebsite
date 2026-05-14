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
import { carRentals, CAR_TYPES } from "@/lib/data";
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

  const gallery = car.images && car.images.length > 1 ? car.images : null;

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
              {CAR_TYPES.find((t) => t.key === car.type)?.label ?? car.type}
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

            {/* Gallery */}
            {gallery && (
              <div>
                <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">Gallery</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {gallery.map((src, i) => (
                    <div
                      key={i}
                      className="relative aspect-[4/3] rounded-xl overflow-hidden border border-gray-100/80 bg-gray-50"
                    >
                      <img
                        src={src}
                        alt={`${car.name} — photo ${i + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Routes Available */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-2">Available Routes</h2>
              <p className="text-sm text-gray-500 mb-6">
                We serve all popular routes across India. Tap any route to get a personalized quote on WhatsApp.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {car.routes.map((route, i) => (
                  <a
                    key={i}
                    href={getWhatsAppCarLink(car.name, `${route.from} to ${route.to}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-between gap-3 bg-gray-50/80 hover:bg-gray-900 hover:text-white rounded-xl px-4 py-3.5 border border-gray-100/50 transition-all"
                  >
                    <div className="min-w-0">
                      <div className="flex items-center gap-1.5 font-medium text-gray-900 group-hover:text-white">
                        <MapPin className="w-3.5 h-3.5 text-gray-400 group-hover:text-white/70 shrink-0" />
                        <span className="truncate">{route.from}</span>
                        <span className="text-gray-300 group-hover:text-white/40">→</span>
                        <span className="truncate">{route.to}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs text-gray-500 group-hover:text-white/70 mt-1">
                        <span>{route.distance}</span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {route.duration}
                        </span>
                      </div>
                    </div>
                    <span className="text-xs font-medium text-gray-900 group-hover:text-white shrink-0">
                      Get Quote →
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-xs text-gray-400 mt-4">
                Don&apos;t see your route? <a href={getWhatsAppCarLink(car.name, "custom route")} target="_blank" rel="noopener noreferrer" className="text-gray-700 font-medium hover:text-gray-900">Message us on WhatsApp</a> — we cover all of India.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 space-y-5">
              <div className="text-center pb-2">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full mb-3">
                  <span className="w-1.5 h-1.5 bg-green-500 rounded-full" />
                  Available 24/7
                </div>
                <h3 className="font-display text-xl font-bold text-gray-900">
                  Get a Personalized Quote
                </h3>
                <p className="text-sm text-gray-500 mt-1">
                  Share your route, dates, and group size — we&apos;ll send you the best price within minutes.
                </p>
              </div>

              <a
                href={getWhatsAppCarLink(car.name, "custom route")}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-semibold py-4 rounded-full transition-all hover:shadow-lg hover:shadow-green-500/25"
              >
                <MessageCircle className="w-5 h-5" />
                Message on WhatsApp
              </a>

              <a
                href={`tel:${CONTACT.phone}`}
                className="flex items-center justify-center gap-2 w-full bg-gray-100 hover:bg-gray-200 text-gray-700 font-medium py-3 rounded-full transition-colors"
              >
                <Phone className="w-4 h-4" />
                Call {CONTACT.phoneDisplay}
              </a>

              <div className="border-t border-gray-100 pt-5 space-y-3">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-teal-600" />
                  Verified & licensed drivers
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-teal-600" />
                  Best price guarantee
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-teal-600" />
                  24/7 roadside support
                </div>
              </div>

              {/* Included */}
              <div className="border-t border-gray-100 pt-5">
                <h4 className="font-semibold text-gray-900 text-sm mb-3">What&apos;s Typically Included</h4>
                <ul className="space-y-2">
                  {[
                    "Professional driver",
                    "Fuel charges",
                    "Interstate permits",
                    "Parking & toll taxes",
                    "All applicable taxes",
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
