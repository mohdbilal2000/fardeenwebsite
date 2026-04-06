import Link from "next/link";
import { Clock, MessageCircle, ArrowRight } from "lucide-react";
import { Tour } from "@/lib/data";
import { getWhatsAppLink } from "@/lib/constants";

export default function TourCard({ tour }: { tour: Tour }) {
  const discount = Math.round(
    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
      {/* Image */}
      <Link href={`/tours/${tour.id}`} className="block relative h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="img-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
        {discount > 0 && (
          <span className="absolute top-4 left-4 bg-orange-500 text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-lg">
            {discount}% OFF
          </span>
        )}
        <div className="absolute bottom-4 left-4 flex items-center gap-1.5 text-white/90 text-sm">
          <Clock className="w-3.5 h-3.5" />
          {tour.duration}
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/tours/${tour.id}`}>
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-teal-700 transition-colors">
            {tour.name}
          </h3>
        </Link>

        <p className="text-sm text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {tour.description}
        </p>

        {/* Highlights */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tour.highlights.slice(0, 3).map((h) => (
            <span
              key={h}
              className="text-xs bg-teal-50 text-teal-700 px-2.5 py-1 rounded-full font-medium"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-5 pt-4 border-t border-gray-100">
          <div>
            <span className="text-xs text-gray-400 line-through">
              ${tour.originalPrice}
            </span>
            <div className="text-2xl font-bold text-gray-900">
              ${tour.price}
              <span className="text-xs font-normal text-gray-400 ml-1">
                / person
              </span>
            </div>
          </div>
          <div className="flex gap-2">
            <Link
              href={`/tours/${tour.id}`}
              className="flex items-center gap-1 text-teal-700 hover:text-teal-800 text-sm font-medium transition-colors"
            >
              Details
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <a
              href={getWhatsAppLink(tour.name)}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 bg-green-500 hover:bg-green-600 text-white text-sm font-semibold px-4 py-2.5 rounded-xl transition-all hover:shadow-lg hover:shadow-green-500/25"
            >
              <MessageCircle className="w-4 h-4" />
              Book
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
