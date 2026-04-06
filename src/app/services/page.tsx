import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { MessageCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Our Services</h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            A one-stop travel solution for your India adventure — from tour
            planning to transport, hotels to guides.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-16 bg-gray-50/50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">
            Booking & Cancellation Policy
          </h2>
          <div className="bg-white rounded-2xl border border-gray-100 p-8 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
              <p className="text-gray-600">
                <strong>Free cancellation</strong> up to 24 hours before the
                tour start time for a full refund.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
              <p className="text-gray-600">
                Cancellations within 24 hours are subject to a{" "}
                <strong>50% charge</strong>.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
              <p className="text-gray-600">
                Last-minute bookings are accepted subject to availability.
              </p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-2 h-2 rounded-full bg-teal-500 mt-2 shrink-0" />
              <p className="text-gray-600">
                All packages include private AC transport, licensed guide, and
                monument entry fees unless stated otherwise.
              </p>
            </div>
          </div>

          <div className="mt-8 text-center">
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-xl transition-colors"
            >
              <MessageCircle className="w-5 h-5" />
              Have questions? Chat with us
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
