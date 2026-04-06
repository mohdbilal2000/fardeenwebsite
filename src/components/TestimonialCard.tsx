import { Star } from "lucide-react";
import { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-white rounded-2xl border border-gray-100 p-7 hover:shadow-xl transition-all duration-500 flex flex-col">
      <div className="flex gap-1 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed flex-1 text-[15px]">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gradient-to-br from-teal-500 to-teal-700 flex items-center justify-center text-white text-xs font-bold">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400">
            {testimonial.country} &middot; {testimonial.tourName}
          </p>
        </div>
      </div>
    </div>
  );
}
