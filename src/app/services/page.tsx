import ServiceCard from "@/components/ServiceCard";
import CTASection from "@/components/CTASection";
import { services } from "@/lib/data";
import { MessageCircle, CheckCircle } from "lucide-react";
import { getWhatsAppGenericLink } from "@/lib/constants";

export default function ServicesPage() {
  return (
    <>
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              Our Services
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
            A one-stop travel solution for your India adventure — from tour
            planning to transport, hotels to guides.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* Cancellation Policy */}
      <section className="py-14 sm:py-20 bg-gray-50/50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
              Booking & Cancellation
            </h2>
          </div>
          <div className="mt-8 space-y-4">
            {[
              { text: "Free cancellation up to 24 hours before the tour start time for a full refund." },
              { text: "Cancellations within 24 hours are subject to a 50% charge." },
              { text: "Last-minute bookings are accepted subject to availability." },
              { text: "All packages include private AC transport, licensed guide, and monument entry fees unless stated otherwise." },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 bg-white rounded-xl p-4 border border-gray-100">
                <CheckCircle className="w-5 h-5 text-teal-600 mt-0.5 shrink-0" />
                <p className="text-sm text-gray-600 leading-relaxed">{item.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <a
              href={getWhatsAppGenericLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gray-900 hover:bg-gray-800 text-white font-semibold px-6 py-3.5 rounded-full transition-all hover:shadow-lg"
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
