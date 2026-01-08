import resources from '@/data/resources.json';
import type { Resources } from '@/types';
import Link from 'next/link';

// Type the imported JSON data
const typedResources: Resources = resources;

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">SEO Blog</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Insights, tips, and strategies to help you master search engine optimization.
          </p>
        </div>

        {/* Defensive check before mapping */}
        {typedResources.blog?.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {typedResources.blog.map((post) => (
              <Link
                key={post.slug}
                href={`/resources/blog/${post.slug}`}
                className="group"
              >
                <article className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 p-6 h-full">
                  <h2 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="mt-4 text-blue-600 font-medium group-hover:underline">
                    Read more →
                  </div>
                </article>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500">No blog posts available at this time.</p>
          </div>
        )}
      </div>
    </div>
  );
}
