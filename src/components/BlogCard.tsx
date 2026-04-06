import Link from "next/link";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100">
        <div className="h-52 overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="img-cover transition-transform duration-700 group-hover:scale-110"
          />
        </div>
        <div className="p-6">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-xs font-semibold text-teal-700 bg-teal-50 px-2.5 py-1 rounded-full">
              {post.category}
            </span>
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime}
            </span>
          </div>
          <h3 className="font-bold text-gray-900 text-lg leading-tight group-hover:text-teal-700 transition-colors">
            {post.title}
          </h3>
          <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">
            {post.excerpt}
          </p>
          <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-50">
            <span className="text-xs text-gray-400 flex items-center gap-1">
              <Calendar className="w-3 h-3" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "short",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-sm font-medium text-teal-700 group-hover:gap-2 transition-all">
              Read more
              <ArrowRight className="w-3.5 h-3.5" />
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
