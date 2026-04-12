import Link from "next/link";
import { ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import TourCard from "@/components/TourCard";
import ServiceCard from "@/components/ServiceCard";
import TestimonialCard from "@/components/TestimonialCard";
import BlogCard from "@/components/BlogCard";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";
import { tours, services, testimonials, blogPosts } from "@/lib/data";

export default function HomePage() {
  const featuredTours = tours.slice(0, 6);
  const featuredTestimonials = testimonials.slice(0, 3);
  const featuredPosts = blogPosts.slice(0, 3);

  return (
    <>
      <HeroSection />

      {/* Featured Tours */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div className="section-line">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Popular Tours
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-md">
                Handpicked experiences loved by travelers worldwide
              </p>
            </div>
            <Link
              href="/tours"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-teal-700 transition-colors group"
            >
              View all
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {featuredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>
          <div className="mt-8 text-center sm:hidden">
            <Link href="/tours" className="inline-flex items-center gap-1 text-sm font-medium text-gray-900">
              View all tours <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10 sm:mb-14">
            <div className="section-line mx-auto flex flex-col items-center">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Our Services
              </h2>
            </div>
            <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-md mx-auto">
              Everything you need for the perfect India trip
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
            {services.map((service) => (
              <ServiceCard key={service.id} service={service} />
            ))}
          </div>
        </div>
      </section>

      <Stats />

      {/* Testimonials */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div className="section-line">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                What Travelers Say
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-md">
                Real reviews from real travelers
              </p>
            </div>
            <Link
              href="/testimonials"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-teal-700 transition-colors group"
            >
              All reviews
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {featuredTestimonials.map((t) => (
              <TestimonialCard key={t.id} testimonial={t} />
            ))}
          </div>
        </div>
      </section>

      {/* Blog */}
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10 sm:mb-14">
            <div className="section-line">
              <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
                Travel Journal
              </h2>
              <p className="mt-2 text-gray-500 text-sm sm:text-base max-w-md">
                Tips, guides, and stories from India
              </p>
            </div>
            <Link
              href="/blog"
              className="hidden sm:flex items-center gap-1.5 text-sm font-medium text-gray-900 hover:text-teal-700 transition-colors group"
            >
              All articles
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6">
            {featuredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
