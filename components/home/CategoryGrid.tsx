import Link from 'next/link';
import { TrendingUp, Target, Wrench, Award } from 'lucide-react';
import { Card } from '@/components/ui/Card';

export const CategoryGrid = () => {
  const categories = [
    {
      title: 'Data Analysis',
      description: 'Analyze website performance and user behavior metrics',
      icon: TrendingUp,
      href: '/tools?category=Data+Analysis',
    },
    {
      title: 'Relevance',
      description: 'Optimize content relevance and keyword targeting',
      icon: Target,
      href: '/tools?category=Relevance',
    },
    {
      title: 'Technical SEO',
      description: 'Audit and fix technical website issues',
      icon: Wrench,
      href: '/tools?category=Technical',
    },
    {
      title: 'Authority',
      description: 'Build domain authority and backlink profiles',
      icon: Award,
      href: '/tools?category=Authority',
    },
  ];

  return (
    <section className="container px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Explore by Category</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {categories.map((category) => {
          const Icon = category.icon;
          return (
            <Link key={category.title} href={category.href} className="group">
              <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                <div className="p-6 flex flex-col items-center text-center">
                  <div className="mb-4 p-3 rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{category.title}</h3>
                  <p className="text-sm text-muted-foreground">{category.description}</p>
                </div>
              </Card>
            </Link>
          );
        })}
      </div>
    </section>
  );
};
