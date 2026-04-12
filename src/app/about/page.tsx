import { Award, Shield, Users, Globe, Star, CheckCircle } from "lucide-react";
import Stats from "@/components/Stats";
import CTASection from "@/components/CTASection";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[35vh] sm:h-[45vh] min-h-[250px] sm:min-h-[320px] flex items-end overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
          alt="India Gate"
          className="absolute inset-0 img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-gray-950/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-8 sm:pb-12 w-full">
          <div className="section-line">
            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-white">About Us</h1>
          </div>
          <p className="mt-2 text-base sm:text-lg text-gray-300 max-w-lg">
            Crafting unforgettable India experiences since 2017
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="section-line">
                <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">Our Story</h2>
              </div>
              <div className="mt-6 space-y-4 text-gray-500 leading-relaxed text-[15px]">
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
                  customizable tours with a hassle-free booking process.
                </p>
                <p>
                  Whether it&apos;s a sunrise at the Taj Mahal, a royal journey
                  through Rajasthan, or a photography expedition through
                  Delhi&apos;s streets — we make every moment count.
                </p>
              </div>
            </div>
            <div className="rounded-2xl overflow-hidden h-80 sm:h-96 shadow-2xl">
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
      <section className="py-16 sm:py-24 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-line mx-auto flex flex-col items-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">Our Team</h2>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            {[
              {
                initials: "FC",
                name: "Mr. Fardeen Chaudhary",
                role: "Director",
                desc: "Over 20 years of experience in the travel industry. Degree in Foreign Trade with credentials from prestigious 5-star hotels, embassies, and the Ministry of Tourism, Government of India.",
              },
              {
                initials: "AK",
                name: "Abdul Wahid Khan",
                role: "Co-Founder & Head Operations",
                desc: "Ensuring smooth operations and delivering exceptional service across all tours and travel arrangements.",
              },
            ].map((member) => (
              <div key={member.name} className="bg-white rounded-2xl border border-gray-100 overflow-hidden card-hover">
                <div className="h-40 bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-white/10 border border-white/20 flex items-center justify-center">
                    <span className="text-2xl text-white font-bold">{member.initials}</span>
                  </div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                  <p className="text-sm text-teal-700 font-semibold mt-0.5">{member.role}</p>
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">{member.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="section-line mx-auto flex flex-col items-center">
              <h2 className="font-display text-2xl sm:text-3xl font-bold text-gray-900">
                Why Choose Fardeen Tours
              </h2>
            </div>
            <p className="text-gray-500 mt-2 max-w-md mx-auto text-sm">
              We go above and beyond to make your India experience exceptional
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: Shield, title: "Best Price Guarantee", desc: "Competitive rates with no hidden fees. We match or beat any comparable offer." },
              { icon: Users, title: "Expert Guides", desc: "Multilingual guides certified by the Ministry of Tourism with deep local knowledge." },
              { icon: Globe, title: "24/7 Support", desc: "Round-the-clock customer service from booking to the last day of your tour." },
              { icon: Award, title: "IATA Certified", desc: "Internationally recognized certification ensuring professional travel services." },
              { icon: Star, title: "TripAdvisor Rated", desc: "Consistently rated 5/5 by travelers on TripAdvisor with glowing reviews." },
              { icon: CheckCircle, title: "Women Safety Program", desc: "Dedicated safety programs and tips for solo female travelers visiting India." },
            ].map((item) => (
              <div key={item.title} className="bg-gray-50/80 rounded-2xl p-6 card-hover border border-gray-100/50">
                <div className="w-10 h-10 rounded-xl bg-white flex items-center justify-center shadow-sm border border-gray-100">
                  <item.icon className="w-5 h-5 text-gray-700" />
                </div>
                <h3 className="mt-4 font-bold text-gray-900">{item.title}</h3>
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
