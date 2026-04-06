import {
  Map,
  Car,
  Hotel,
  Users,
  Plane,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Service } from "@/lib/data";

const iconMap: Record<string, LucideIcon> = {
  Map, Car, Hotel, Users, Plane, Sparkles,
};

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = iconMap[service.icon] || Map;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
      <div className="h-44 overflow-hidden">
        <img
          src={service.image}
          alt={service.title}
          className="img-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
      </div>
      <div className="relative p-6 -mt-12">
        <div className="w-12 h-12 bg-teal-600 rounded-xl flex items-center justify-center shadow-lg shadow-teal-600/20 mb-3">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-lg font-bold text-gray-900">
          {service.title}
        </h3>
        <p className="mt-2 text-sm text-gray-500 leading-relaxed">
          {service.description}
        </p>
      </div>
    </div>
  );
}
