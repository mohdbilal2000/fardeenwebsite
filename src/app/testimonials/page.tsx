import TestimonialCard from "@/components/TestimonialCard";
import CTASection from "@/components/CTASection";
import { testimonials } from "@/lib/data";

export default function TestimonialsPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">
            What Travelers Say
          </h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Real reviews from travelers around the world who explored India with
            us.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>

          {/* TripAdvisor Badge */}
          <div className="mt-16 text-center">
            <div className="inline-flex flex-col items-center gap-3 bg-white rounded-2xl border border-gray-100 p-8">
              <div className="text-4xl">&#127942;</div>
              <h3 className="text-lg font-semibold text-gray-900">
                TripAdvisor Travelers&apos; Choice
              </h3>
              <p className="text-sm text-gray-500 max-w-sm">
                We&apos;re proud to be consistently rated 5/5 on TripAdvisor by
                travelers from over 30 countries.
              </p>
              <a
                href="https://tripadvisor.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-teal-700 hover:text-teal-800 transition-colors"
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
