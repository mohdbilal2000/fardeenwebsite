import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { BlogPost } from "@/lib/data";

export default function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className="rounded-2xl overflow-hidden card-hover">
        <div className="relative h-52 sm:h-56 overflow-hidden rounded-2xl">
          <img
            src={post.image}
            alt={post.title}
            className="img-cover transition-transform duration-700 ease-out group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
          <div className="absolute top-3 left-3">
            <span className="text-[11px] font-semibold text-white/90 bg-white/15 backdrop-blur-sm px-3 py-1 rounded-full border border-white/10">
              {post.category}
            </span>
          </div>
          <div className="absolute top-3 right-3 w-8 h-8 bg-white/15 backdrop-blur-sm rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white" />
          </div>
          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-xs text-gray-300">{post.readTime}</span>
            <h3 className="font-semibold text-white text-[17px] leading-snug mt-1 group-hover:text-amber-200 transition-colors">
              {post.title}
            </h3>
          </div>
        </div>
      </div>
    </Link>
  );
}
