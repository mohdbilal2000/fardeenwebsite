import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="relative overflow-hidden bg-gray-950">
      <div className="absolute inset-0 opacity-20">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
          alt=""
          className="img-cover"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-950/50 to-gray-950/80" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        <div className="text-center mb-10 sm:mb-12">
          <h2 className="font-display text-2xl sm:text-3xl font-bold text-white">
            Numbers That Speak
          </h2>
          <div className="w-12 h-0.5 bg-gradient-to-r from-teal-400 to-amber-400 mx-auto mt-4" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight">
                {stat.value}
              </div>
              <div className="mt-2 text-xs sm:text-sm text-gray-400 font-medium tracking-widest uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
