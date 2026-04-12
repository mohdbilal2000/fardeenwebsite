import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/lib/data";
import { Star } from "lucide-react";

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gray-950 pt-28 sm:pt-32 pb-14 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
              What Travelers Say
            </h1>
          </div>
          <p className="mt-3 text-base sm:text-lg text-gray-400 max-w-xl">
            Real reviews from travelers around the world who explored India with us.
          </p>
        </div>
      </section>

      <section className="py-14 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* TripAdvisor */}
          <div className="mt-16 sm:mt-20">
            <div className="bg-gray-950 rounded-3xl p-8 sm:p-12 text-center">
              <div className="flex justify-center gap-1 mb-4">
                {[1,2,3,4,5].map(i => (
                  <Star key={i} className="w-6 h-6 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold text-white">
                TripAdvisor Travelers&apos; Choice
              </h3>
              <p className="text-sm text-gray-400 max-w-md mx-auto mt-3 leading-relaxed">
                We&apos;re proud to be consistently rated 5/5 on TripAdvisor by
                travelers from over 30 countries.
              </p>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-sm font-medium text-white/70 hover:text-white mt-5 transition-colors"
              >
                Read reviews on TripAdvisor &rarr;
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
