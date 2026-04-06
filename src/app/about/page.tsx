import {
  Award,
  Shield,
  Users,
  Globe,
  Star,
  CheckCircle,
} from "lucide-react";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[30vh] sm:h-[40vh] min-h-[220px] sm:min-h-[300px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
          alt="India Gate"
          className="absolute inset-0 img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-gray-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 w-full">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About Us</h1>
          <p className="mt-3 text-lg text-gray-300 max-w-2xl">
            Crafting unforgettable India experiences since 2017
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
              <div className="mt-6 space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Fardeen Tours is one of India&apos;s premier online travel
                  platforms, specializing in curated tour experiences across
                  North India. Based in the historic city of Agra, we offer
                  comprehensive tour packages, car rental services, hotel
                  bookings, and personalized itineraries.
                </p>
                <p>
                  With over 7 years of experience and 500+ happy travelers from
                  around the globe, we pride ourselves on delivering affordable,
                  customizable tours with a hassle-free booking process. Our
                  mission is to put you in control of your adventure.
                </p>
                <p>
                  Whether it&apos;s a sunrise at the Taj Mahal, a royal journey
                  through Rajasthan, or a photography expedition through
                  Delhi&apos;s streets — we make every moment count.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-96 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1564507592333-c60657eea523?w=800&q=80"
                alt="Taj Mahal"
                className="img-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Our Team
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-600 to-teal-800 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">FC</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Mr. Fardeen Chaudhary
                </h3>
                <p className="text-sm text-teal-700 font-semibold">Director</p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Over 20 years of experience in the travel industry. Degree in
                  Foreign Trade with credentials from prestigious 5-star hotels,
                  embassies, and the Ministry of Tourism, Government of India.
                </p>
              </div>
            </div>
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="h-48 bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center">
                <div className="w-24 h-24 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="text-4xl text-white font-bold">AK</span>
                </div>
              </div>
              <div className="p-6 text-center">
                <h3 className="text-lg font-bold text-gray-900">
                  Abdul Wahid Khan
                </h3>
                <p className="text-sm text-teal-700 font-semibold">
                  Co-Founder & Head Operations
                </p>
                <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                  Ensuring smooth operations and delivering exceptional service
                  across all tours and travel arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-4">
            Why Choose Fardeen Tours
          </h2>
          <p className="text-center text-gray-500 mb-12 max-w-2xl mx-auto">
            We go above and beyond to make your India experience exceptional
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: "Best Price Guarantee",
                desc: "Competitive rates with no hidden fees. We match or beat any comparable offer.",
              },
              {
                icon: Users,
                title: "Expert Guides",
                desc: "Multilingual guides certified by the Ministry of Tourism with deep local knowledge.",
              },
              {
                icon: Globe,
                title: "24/7 Support",
                desc: "Round-the-clock customer service from booking to the last day of your tour.",
              },
              {
                icon: Award,
                title: "IATA Certified",
                desc: "Internationally recognized certification ensuring professional travel services.",
              },
              {
                icon: Star,
                title: "TripAdvisor Rated",
                desc: "Consistently rated 5/5 by travelers on TripAdvisor with glowing reviews.",
              },
              {
                icon: CheckCircle,
                title: "Women Safety Program",
                desc: "Dedicated safety programs and tips for solo female travelers visiting India.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-lg transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-teal-700" />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Stats />
      <CTASection />
    </>
  );
}
