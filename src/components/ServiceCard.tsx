import Link from "next/link";
import {
  Map, Car, Hotel, Users, Plane, Sparkles, ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { Service } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = { Map, Car, Hotel, Users, Plane, Sparkles };

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Map;

  return (
    <Link
      href={service.href}
      className="group relative rounded-2xl overflow-hidden card-hover h-64 sm:h-72 block"
    >
      <img
        src={service.image}
        alt={service.title}
        className="absolute inset-0 img-cover transition-transform duration-700 ease-out group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/90 via-gray-950/40 to-gray-950/10 group-hover:from-gray-950/95 transition-all duration-500" />

      {/* Hover arrow */}
      <div className="absolute top-3 right-3 w-9 h-9 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0 border border-white/10">
        <ArrowUpRight className="w-4 h-4 text-white" />
      </div>

      <div className="relative h-full flex flex-col justify-end p-5 sm:p-6">
        <div className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-3 border border-white/10">
          <Icon className="w-5 h-5 text-white" />
        </div>
        <h3 className="text-lg font-semibold text-white">{service.title}</h3>
        <p className="mt-1.5 text-sm text-gray-300 leading-relaxed line-clamp-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {service.description}
        </p>
      </div>
    </Link>
  );
}
