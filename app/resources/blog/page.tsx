import { Metadata } from "next";
import { FileText, Calendar } from "lucide-react";
import resources from "@/data/resources.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Blog - Resources Hub",
  description: "In-depth articles, tutorials, and insights on SEO strategies, best practices, and industry trends.",
};

export default function BlogPage() {
  const blogPosts = resources.blog;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary-100 text-primary-600">
                <FileText className="h-6 w-6" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">SEO Blog</h1>
                <p className="text-gray-600">Articles, tutorials, and industry insights</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="flex-1">
        <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-5xl">
            {/* Blog Posts Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {blogPosts.map((post) => (
                <Link
                  key={post.slug}
                  href={`/resources/blog/${post.slug}`}
                  className="group"
                >
                  <article className="flex h-full flex-col overflow-hidden rounded-lg border bg-white shadow-sm transition-all hover:shadow-md">
                    <div className="flex-1 p-6">
                      <div className="mb-3 flex items-center gap-2 text-sm text-gray-500">
                        <Calendar className="h-4 w-4" />
                        <span>Article</span>
                      </div>
                      <h2 className="mb-3 text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                        {post.title}
                      </h2>
                      <p className="line-clamp-3 text-gray-600">{post.excerpt}</p>
                    </div>
                    <div className="border-t bg-gray-50 px-6 py-3">
                      <span className="text-sm font-medium text-primary-600 group-hover:text-primary-700 transition-colors">
                        Read article →
                      </span>
                    </div>
                  </article>
                </Link>
              ))}
            </div>

            {blogPosts.length === 0 && (
              <div className="text-center py-12">
                <FileText className="mx-auto h-12 w-12 text-gray-400" />
                <p className="mt-4 text-gray-600">No blog posts available at this time.</p>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}
