import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

interface ToolCardProps {
  name: string;
  slug: string;
  shortDescription: string;
  category: string;
}

export default function ToolCard({ name, slug, shortDescription, category }: ToolCardProps) {
  return (
    <Link href={`/tools/${slug}`} className="block">
      <div className="group h-full overflow-hidden rounded-lg border border-border bg-background transition-all hover:shadow-lg hover:shadow-primary/10">
        <div className="p-6">
          {/* Category Badge */}
          <div className="mb-4">
            <span className="inline-flex items-center rounded-full border border-border bg-secondary px-2.5 py-0.5 text-xs font-medium text-secondary-foreground">
              {category}
            </span>
          </div>

          {/* Tool Name */}
          <h3 className="mb-2 text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
            {name}
          </h3>

          {/* Description */}
          <p className="mb-4 text-sm text-muted-foreground line-clamp-2">
            {shortDescription}
          </p>

          {/* Footer */}
          <div className="flex items-center text-sm font-medium text-primary">
            Try Tool
            <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </div>
        </div>
      </div>
    </Link>
  );
}