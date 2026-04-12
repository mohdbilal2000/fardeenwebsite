import { Star } from "lucide-react";
import { Testimonial } from "@/lib/data";

export default function TestimonialCard({
  testimonial,
}: {
  testimonial: Testimonial;
}) {
  return (
    <div className="bg-gray-50/80 rounded-2xl p-6 sm:p-7 card-hover flex flex-col border border-gray-100/50">
      <div className="flex gap-0.5 mb-4">
        {Array.from({ length: testimonial.rating }).map((_, i) => (
          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
        ))}
      </div>
      <p className="text-gray-600 leading-relaxed flex-1 text-[15px] italic">
        &ldquo;{testimonial.text}&rdquo;
      </p>
      <div className="mt-6 flex items-center gap-3">
        <div className="w-11 h-11 rounded-full bg-gradient-to-br from-gray-900 to-gray-700 flex items-center justify-center text-white text-xs font-bold tracking-wide">
          {testimonial.avatar}
        </div>
        <div>
          <p className="font-semibold text-gray-900 text-sm">
            {testimonial.name}
          </p>
          <p className="text-xs text-gray-400 mt-0.5">
            {testimonial.country}
          </p>
        </div>
      </div>
    </div>
  );
}
