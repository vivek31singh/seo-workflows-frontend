import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

export const HeroSection = () => {
  return (
    <section className="container px-4 py-20 md:py-32 text-center">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight sm:text-6xl mb-6">
          Free SEO Tools & Resources
        </h1>
        <p className="text-lg text-muted-foreground mb-8">
          Access a comprehensive directory of free SEO tools and resources. Discover interactive tools for data analysis, relevance optimization, technical SEO, and authority building.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild size="lg">
            <Link href="/tools">
              Browse Tools
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="outline" size="lg">
            <Link href="/resources">Explore Resources</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};
