import { notFound } from "next/navigation";
import Link from "next/link";
import {
  Clock,
  MessageCircle,
  CheckCircle,
  MapPin,
  ArrowLeft,
  Star,
  Shield,
  Phone,
} from "lucide-react";
import { tours } from "@/lib/data";
import { getWhatsAppLink, CONTACT } from "@/lib/constants";
import CTASection from "@/components/CTASection";

export function generateStaticParams() {
  return tours.map((tour) => ({ id: tour.id }));
}

export default async function TourDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const tour = tours.find((t) => t.id === id);

  if (!tour) notFound();

  const discount = Math.round(
    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100
  );

  return (
    <>
      {/* Hero */}
      <section className="relative h-[40vh] sm:h-[50vh] min-h-[300px] sm:min-h-[400px] flex items-end overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="absolute inset-0 img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/30 to-transparent" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 w-full">
          <Link
            href="/tours"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-3 sm:mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Tours
          </Link>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
            {tour.name}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-3 text-white/80 text-sm">
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {tour.duration}
            </span>
            <span className="flex items-center gap-1.5">
              <Star className="w-4 h-4 fill-amber-400 text-amber-400" />
              5.0 Rating
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-4 h-4" />
              North India
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
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Overview
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                {tour.longDescription}
              </p>
            </div>

            {/* Highlights */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                Highlights
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {tour.highlights.map((h) => (
                  <div
                    key={h}
                    className="flex items-center gap-3 bg-teal-50/50 rounded-xl px-4 py-3"
                  >
                    <CheckCircle className="w-5 h-5 text-teal-600 shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-6">
                Itinerary
              </h2>
              <div className="space-y-0">
                {tour.itinerary.map((item, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 rounded-full bg-gray-900 text-white text-xs font-bold flex items-center justify-center shrink-0">
                        {i + 1}
                      </div>
                      {i < tour.itinerary.length - 1 && (
                        <div className="w-0.5 flex-1 bg-gray-200 my-1" />
                      )}
                    </div>
                    <div className="pb-8">
                      <div className="text-xs font-semibold text-teal-700 uppercase tracking-wide">
                        {item.day}
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mt-1">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* What's Included */}
            <div>
              <h2 className="font-display text-2xl font-bold text-gray-900 mb-4">
                What&apos;s Included
              </h2>
              <div className="bg-green-50/50 rounded-2xl p-6">
                <ul className="space-y-2.5">
                  {tour.included.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-4 h-4 text-green-600 shrink-0" />
                      <span className="text-sm text-gray-700">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Sidebar - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white rounded-2xl border border-gray-200 shadow-lg p-6 space-y-5">
              <div>
                <div className="flex items-baseline gap-2">
                  <span className="text-3xl font-bold text-gray-900">
                    ${tour.price}
                  </span>
                  <span className="text-sm text-gray-400 line-through">
                    ${tour.originalPrice}
                  </span>
                  <span className="text-sm font-semibold text-orange-500">
                    {discount}% OFF
                  </span>
                </div>
                <p className="text-sm text-gray-500 mt-1">per person</p>
              </div>

              <a
                href={getWhatsAppLink(tour.name)}
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
                  Free cancellation up to 24h before
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
                  Rated 5/5 by travelers
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Clock className="w-4 h-4 text-teal-600" />
                  Instant confirmation
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
