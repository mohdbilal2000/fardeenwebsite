import { STATS } from "@/lib/constants";

export default function Stats() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=1920&q=80"
          alt="India landscape"
          className="img-cover"
        />
        <div className="absolute inset-0 bg-teal-900/85 backdrop-blur-sm" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-5xl sm:text-6xl font-bold text-white">
                {stat.value}
              </div>
              <div className="mt-2 text-sm text-teal-200 font-medium tracking-wide uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
