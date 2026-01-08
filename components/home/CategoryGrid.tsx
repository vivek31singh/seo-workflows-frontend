import Link from 'next/link';
import { BarChart3, Target, Code, Award } from 'lucide-react';
import { clsx } from 'clsx';

const categories = [
  {
    name: 'Data Analysis',
    description: 'Analyze traffic, keywords, and performance metrics',
    icon: BarChart3,
    color: 'bg-blue-500',
    href: '/tools?category=Data Analysis',
  },
  {
    name: 'Relevance',
    description: 'Optimize content relevance and topical authority',
    icon: Target,
    color: 'bg-emerald-500',
    href: '/tools?category=Relevance',
  },
  {
    name: 'Technical',
    description: 'Audit technical SEO and site performance',
    icon: Code,
    color: 'bg-purple-500',
    href: '/tools?category=Technical',
  },
  {
    name: 'Authority',
    description: 'Build backlinks and domain authority',
    icon: Award,
    color: 'bg-orange-500',
    href: '/tools?category=Authority',
  },
];

export function CategoryGrid() {
  return (
    <section className="py-20 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Browse by Category
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Find the right tools for every aspect of your SEO strategy
          </p>
        </div>
        
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:max-w-none lg:grid-cols-2">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.name}
                href={category.href}
                className="group relative flex items-center gap-6 rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all hover:shadow-md hover:border-slate-300"
              >
                <div className={clsx(
                  'flex h-16 w-16 items-center justify-center rounded-xl',
                  category.color,
                  'group-hover:scale-105 transition-transform'
                )}>
                  <Icon className="h-8 w-8 text-white" aria-hidden="true" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                    {category.name}
                  </h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {category.description}
                  </p>
                </div>
                
                <div className="text-slate-400 group-hover:text-blue-600 transition-colors">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}