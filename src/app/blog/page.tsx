import BlogCard from "@/components/BlogCard";
import { blogPosts } from "@/lib/data";

export default function BlogPage() {
  return (
    <>
      <section className="bg-gradient-to-b from-teal-50 to-white pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-gray-900">Travel Journal</h1>
          <p className="mt-3 text-lg text-gray-500 max-w-2xl">
            Tips, guides, and stories to help you make the most of your India
            adventure.
          </p>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
