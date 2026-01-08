import Link from 'next/link';
import { BookOpen, MessageSquare, Newspaper, Puzzle } from 'lucide-react';

const resources = [
  {
    name: 'SEO Glossary',
    description: 'Comprehensive definitions of SEO terminology',
    icon: BookOpen,
    href: '/resources/glossary',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    name: 'AI Chatbots',
    description: 'Curated list of AI tools for SEO workflows',
    icon: MessageSquare,
    href: '/resources/chatbots',
    color: 'bg-emerald-100 text-emerald-700',
  },
  {
    name: 'Blog Articles',
    description: 'In-depth guides and industry insights',
    icon: Newspaper,
    href: '/resources/blog',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    name: 'Extensions',
    description: 'Browser extensions for SEO professionals',
    icon: Puzzle,
    href: '/resources/extensions',
    color: 'bg-orange-100 text-orange-700',
  },
];

export function ResourceStrip() {
  return (
    <section className="bg-slate-50 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Learn & Grow
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Expand your SEO knowledge with our curated resources
          </p>
        </div>
        
        <div className="mx-auto mt-12 grid max-w-5xl grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link
                key={resource.name}
                href={resource.href}
                className="group flex flex-col items-center rounded-xl bg-white p-6 shadow-sm transition-all hover:shadow-md hover:-translate-y-1"
              >
                <div className={`mb-4 flex h-12 w-12 items-center justify-center rounded-lg ${resource.color}`}>
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                
                <h3 className="text-center text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {resource.name}
                </h3>
                
                <p className="mt-2 text-center text-xs text-slate-500 line-clamp-2">
                  {resource.description}
                </p>
              </Link>
            );
          })}
        </div>
        
        <div className="mt-12 text-center">
          <Link
            href="/resources"
            className="inline-flex items-center text-base font-semibold text-blue-600 hover:text-blue-500 transition-colors"
          >
            Explore All Resources
            <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}