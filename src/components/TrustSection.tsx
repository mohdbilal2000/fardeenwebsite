import {
  Award,
  Shield,
  Plane,
  Clock,
  Star,
  CheckCircle,
  Car,
  Sparkles,
  Languages,
  MapPin,
} from "lucide-react";

const ACHIEVEMENTS = [
  {
    title: "TripAdvisor",
    subtitle: "Travelers' Choice",
    detail: "Rated 5/5",
    icon: Star,
  },
  {
    title: "IATA Certified",
    subtitle: "Accredited Agent",
    detail: "Internationally Recognised",
    icon: Award,
  },
  {
    title: "Ministry of Tourism",
    subtitle: "Govt. of India",
    detail: "Approved Operator",
    icon: Shield,
  },
  {
    title: "7+ Years",
    subtitle: "Of Excellence",
    detail: "Trusted Since 2017",
    icon: CheckCircle,
  },
];

const TRUST_POINTS = [
  {
    icon: Car,
    title: "Private Chauffeur",
    desc: "Vetted, professionally trained chauffeurs dedicated to your journey",
  },
  {
    icon: Plane,
    title: "Airport Pickup",
    desc: "Seamless meet-and-greet pickups from every major airport in India",
  },
  {
    icon: Languages,
    title: "English Support",
    desc: "Fluent English-speaking team and guides for international travelers",
  },
  {
    icon: Sparkles,
    title: "Sanitized Vehicles",
    desc: "Every vehicle is deep-cleaned and sanitized before each journey",
  },
  {
    icon: MapPin,
    title: "Local Experts",
    desc: "Born-and-raised insiders who know India beyond the guidebook",
  },
  {
    icon: Clock,
    title: "24/7 Assistance",
    desc: "Round-the-clock concierge support before, during, and after your trip",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 sm:py-24 bg-white border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="section-line mx-auto flex flex-col items-center">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900">
              Trusted by Travelers Worldwide
            </h2>
          </div>
          <p className="mt-3 text-gray-500 text-sm sm:text-base max-w-xl mx-auto">
            Recognized by leading travel authorities and chosen by discerning
            travelers from around the globe.
          </p>
        </div>

        {/* Achievement badges */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
          {ACHIEVEMENTS.map((item) => (
            <div
              key={item.title}
              className="group bg-gradient-to-br from-gray-50 to-white border border-gray-200/80 rounded-2xl p-5 sm:p-6 text-center hover:border-gray-900 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 mx-auto bg-gray-900 rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300">
                <item.icon className="w-5 h-5 text-amber-400" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-bold text-gray-900">
                {item.title}
              </h3>
              <p className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
                {item.subtitle}
              </p>
              <p className="text-[11px] sm:text-xs text-amber-600 font-semibold mt-1.5 tracking-wide uppercase">
                {item.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Trust points */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TRUST_POINTS.map((point) => (
            <div
              key={point.title}
              className="flex items-start gap-4 p-5 rounded-xl hover:bg-gray-50/80 transition-colors"
            >
              <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
                <point.icon className="w-5 h-5 text-gray-700" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-[15px]">
                  {point.title}
                </h3>
                <p className="text-sm text-gray-500 mt-1 leading-relaxed">
                  {point.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
