import { Metadata } from "next";
import { FileText, Calendar, ArrowRight, Clock } from "lucide-react";
import resources from "@/data/resources.json";
import Link from "next/link";

export const metadata: Metadata = {
  title: "SEO Blog - Resources Hub",
  description: "Latest insights, tutorials, and best practices for search engine optimization and digital marketing.",
};

export default function BlogPage() {
  const posts = resources.blog;

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header Section */}
      <section className="border-b bg-gradient-to-b from-muted/50 to-background">
        <div className="container px-4 py-16 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-4 inline-flex items-center justify-center rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary">
              <FileText className="mr-2 h-4 w-4" />
              Insights & Tutorials
            </div>
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              SEO Blog
            </h1>
            <p className="text-lg text-muted-foreground">
              Stay updated with the latest SEO strategies, algorithm changes, and
              practical guides to boost your search rankings.
            </p>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <main className="container flex-1 px-4 py-12">
        {posts.length === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-lg border border-dashed py-16 text-center">
            <FileText className="mb-4 h-12 w-12 text-muted-foreground/50" />
            <h3 className="mb-2 text-lg font-semibold">No blog posts yet</h3>
            <p className="text-sm text-muted-foreground">
              Check back soon for the latest SEO insights and tutorials.
            </p>
          </div>
        ) : (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {posts.map((post) => (
              <article
                key={post.slug}
                className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-lg"
              >
                <div className="flex flex-1 flex-col p-6">
                  <div className="mb-4 flex items-center gap-4 text-sm text-muted-foreground">
                    {post.date && (
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3.5 w-3.5" />
                        {post.date}
                      </span>
                    )}
                    {post.readTime && (
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" />
                        {post.readTime}
                      </span>
                    )}
                  </div>
                  <h2 className="mb-3 text-xl font-semibold leading-tight group-hover:text-primary transition-colors">
                    <Link href={`/resources/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </h2>
                  <p className="mb-4 flex-1 text-muted-foreground leading-relaxed">
                    {post.excerpt}
                  </p>
                  <Link
                    href={`/resources/blog/${post.slug}`}
                    className="inline-flex items-center font-medium text-primary hover:text-primary/80 transition-colors"
                  >
                    Read More
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
