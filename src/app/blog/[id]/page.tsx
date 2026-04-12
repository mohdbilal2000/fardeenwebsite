import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, User, MessageCircle } from "lucide-react";
import { blogPosts } from "@/lib/data";
import { getWhatsAppGenericLink } from "@/lib/constants";

export function generateStaticParams() {
  return blogPosts.map((post) => ({ id: post.id }));
}

function renderMarkdown(content: string) {
  // Simple markdown-like rendering
  return content.split("\n\n").map((block, i) => {
    if (block.startsWith("## ")) {
      return (
        <h2 key={i} className="text-2xl font-bold text-gray-900 mt-10 mb-4">
          {block.replace("## ", "")}
        </h2>
      );
    }
    if (block.startsWith("### ")) {
      return (
        <h3 key={i} className="text-xl font-semibold text-gray-800 mt-6 mb-3">
          {block.replace("### ", "")}
        </h3>
      );
    }
    if (block.startsWith("- ")) {
      const items = block.split("\n").filter((l) => l.startsWith("- "));
      return (
        <ul key={i} className="list-disc pl-6 space-y-1.5 text-gray-600 leading-relaxed mb-4">
          {items.map((item, j) => (
            <li key={j}>{renderInline(item.replace("- ", ""))}</li>
          ))}
        </ul>
      );
    }
    return (
      <p key={i} className="text-gray-600 leading-[1.85] mb-4 text-[15.5px]">
        {renderInline(block)}
      </p>
    );
  });
}

function renderInline(text: string) {
  // Handle **bold** text
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    if (part.startsWith("**") && part.endsWith("**")) {
      return (
        <strong key={i} className="text-gray-900 font-semibold">
          {part.slice(2, -2)}
        </strong>
      );
    }
    return part;
  });
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = blogPosts.find((p) => p.id === id);

  if (!post) notFound();

  const relatedPosts = blogPosts.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <>
      {/* Hero */}
      <section className="relative h-[35vh] sm:h-[45vh] min-h-[280px] sm:min-h-[350px] flex items-end overflow-hidden">
        <img
          src={post.image}
          alt={post.title}
          className="absolute inset-0 img-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-950/40 to-gray-950/20" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-6 sm:pb-10 w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1.5 text-white/70 hover:text-white text-sm mb-3 sm:mb-4 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Blog
          </Link>
          <span className="inline-block bg-teal-500/80 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full mb-3">
            {post.category}
          </span>
          <h1 className="font-display text-2xl sm:text-3xl lg:text-5xl font-bold text-white leading-tight">
            {post.title}
          </h1>
          <div className="flex flex-wrap items-center gap-4 mt-4 text-white/70 text-sm">
            <span className="flex items-center gap-1.5">
              <User className="w-4 h-4" />
              {post.author}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="w-4 h-4" />
              {new Date(post.date).toLocaleDateString("en-US", {
                month: "long",
                day: "numeric",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {post.readTime}
            </span>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-3xl">
          {renderMarkdown(post.content)}
        </div>

        {/* CTA Box */}
        <div className="mt-12 bg-gray-950 rounded-3xl p-8 sm:p-10 text-center">
          <h3 className="font-display text-xl sm:text-2xl font-bold text-white">
            Ready to Experience This?
          </h3>
          <p className="mt-2 text-gray-400 max-w-md mx-auto text-sm">
            Let us plan the perfect tour for you. Chat with Fardeen directly on
            WhatsApp for a personalized itinerary.
          </p>
          <a
            href={getWhatsAppGenericLink()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-full mt-6 transition-all hover:shadow-lg"
          >
            <MessageCircle className="w-5 h-5" />
            Chat on WhatsApp
          </a>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-gray-50 py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              More Articles
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  href={`/blog/${p.id}`}
                  className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-gray-100"
                >
                  <div className="h-40 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.title}
                      className="img-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-5">
                    <span className="text-xs font-semibold text-teal-700">
                      {p.category}
                    </span>
                    <h3 className="mt-1 font-bold text-gray-900 group-hover:text-teal-700 transition-colors">
                      {p.title}
                    </h3>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
