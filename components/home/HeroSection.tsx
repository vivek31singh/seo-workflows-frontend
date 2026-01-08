import Link from 'next/link';
import { ArrowRight, Search, Zap, Shield } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-background">
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-primary/20 via-background to-background" />
      </div>

      <div className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Badge */}
          <div className="mb-6 inline-flex items-center rounded-full border border-border bg-background px-4 py-1.5 text-sm text-muted-foreground">
            <span className="mr-2 flex h-2 w-2 rounded-full bg-primary" />
            Free SEO Tools & Resources
          </div>

          {/* Heading */}
          <h1 className="mb-6 text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
            Supercharge Your SEO with{' '}
            <span className="text-primary">Free Tools</span>
          </h1>

          {/* Subheading */}
          <p className="mb-8 text-lg text-muted-foreground md:text-xl">
            Access our comprehensive directory of SEO tools and resources. Analyze data, 
            improve rankings, and grow your online presence—all for free.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/tools"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Explore Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center justify-center rounded-lg border border-border bg-background px-6 py-3 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            >
              Browse Resources
            </Link>
          </div>

          {/* Features Grid */}
          <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="rounded-lg border border-border bg-background p-6 text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Search className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Powerful Tools
              </h3>
              <p className="text-sm text-muted-foreground">
                Access a growing collection of SEO tools designed to help you analyze and optimize your website.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Lightning Fast
              </h3>
              <p className="text-sm text-muted-foreground">
                All tools run directly in your browser with no server delays. Get instant results every time.
              </p>
            </div>

            <div className="rounded-lg border border-border bg-background p-6 text-left">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                Privacy First
              </h3>
              <p className="text-sm text-muted-foreground">
                Your data stays in your browser. We never collect, store, or share your information.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}