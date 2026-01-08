import Link from 'next/link';
import { BarChart, Cpu, Database, Globe, Lock, TrendingUp } from 'lucide-react';

const categories = [
  {
    name: 'Data Analysis',
    description: 'Analyze and interpret your SEO data with powerful tools',
    icon: Database,
    href: '/tools?category=Data Analysis',
    color: 'bg-blue-500',
  },
  {
    name: 'Technical',
    description: 'Optimize your website\'s technical performance',
    icon: Cpu,
    href: '/tools?category=Technical',
    color: 'bg-green-500',
  },
  {
    name: 'Relevance',
    description: 'Improve content relevance and keyword targeting',
    icon: Globe,
    href: '/tools?category=Relevance',
    color: 'bg-purple-500',
  },
  {
    name: 'Authority',
    description: 'Build domain authority and backlink profiles',
    icon: TrendingUp,
    href: '/tools?category=Authority',
    color: 'bg-orange-500',
  },
  {
    name: 'Competitor Analysis',
    description: 'Spy on competitors and find opportunities',
    icon: BarChart,
    href: '/tools?category=Competitor Analysis',
    color: 'bg-red-500',
  },
  {
    name: 'Security',
    description: 'Check and improve your website security',
    icon: Lock,
    href: '/tools?category=Security',
    color: 'bg-indigo-500',
  },
];

export default function CategoryGrid() {
  return (
    <section className="bg-muted/50 py-16">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-foreground">
            Explore by Category
          </h2>
          <p className="text-lg text-muted-foreground">
            Find the right tools for your SEO needs across different categories
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative overflow-hidden rounded-lg border border-border bg-background p-6 transition-all hover:shadow-lg hover:shadow-primary/10"
              >
                <div className="flex items-start space-x-4">
                  <div className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-lg ${category.color} text-white`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {category.description}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}