import Link from "next/link";
import { Clock, MessageCircle, ArrowUpRight } from "lucide-react";
import { Tour } from "@/lib/data";
import { getWhatsAppLink } from "@/lib/constants";

export default function TourCard({ tour }: { tour: Tour }) {
  const discount = Math.round(
    ((tour.originalPrice - tour.price) / tour.originalPrice) * 100
  );

  return (
    <div className="group bg-white rounded-2xl overflow-hidden card-hover border border-gray-100/80">
      {/* Image */}
      <Link href={`/tours/${tour.id}`} className="block relative h-52 sm:h-56 overflow-hidden">
        <img
          src={tour.image}
          alt={tour.name}
          className="img-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />
        {discount > 0 && (
          <span className="absolute top-3 left-3 bg-amber-500 text-white text-[11px] font-bold px-2.5 py-1 rounded-full tracking-wide uppercase">
            Save {discount}%
          </span>
        )}
        <div className="absolute bottom-3 left-3 flex items-center gap-1.5 text-white text-sm font-medium">
          <Clock className="w-3.5 h-3.5" />
          {tour.duration}
        </div>
        {/* Hover arrow */}
        <div className="absolute top-3 right-3 w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-1 group-hover:translate-y-0">
          <ArrowUpRight className="w-4 h-4 text-white" />
        </div>
      </Link>

      <div className="p-5">
        <Link href={`/tours/${tour.id}`}>
          <h3 className="font-semibold text-gray-900 text-[17px] leading-snug group-hover:text-teal-700 transition-colors">
            {tour.name}
          </h3>
        </Link>

        <p className="text-[13px] text-gray-500 mt-2 line-clamp-2 leading-relaxed">
          {tour.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1.5 mt-3">
          {tour.highlights.slice(0, 2).map((h) => (
            <span
              key={h}
              className="text-[11px] bg-gray-50 text-gray-500 px-2 py-0.5 rounded-full border border-gray-100"
            >
              {h}
            </span>
          ))}
        </div>

        {/* Price + CTA */}
        <div className="flex items-end justify-between mt-4 pt-4 border-t border-gray-50">
          <div>
            <span className="text-xs text-gray-400 line-through">${tour.originalPrice}</span>
            <div className="text-2xl font-bold text-gray-900 tracking-tight">
              ${tour.price}
              <span className="text-[11px] font-normal text-gray-400 ml-0.5">/person</span>
            </div>
          </div>
          <a
            href={getWhatsAppLink(tour.name)}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-4 py-2.5 rounded-full transition-all hover:shadow-lg"
          >
            <MessageCircle className="w-3.5 h-3.5" />
            Book
          </a>
        </div>
      </div>
    </div>
  );
}
