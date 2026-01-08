import Link from 'next/link';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ResourceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  href: string;
  color: string;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  icon: Icon,
  href,
  color,
  className,
}: ResourceCardProps) {
  return (
    <Link
      href={href}
      className={cn(
        'group relative flex flex-col overflow-hidden rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-200 hover:shadow-md hover:border-gray-300',
        className
      )}
    >
      <div className={cn('mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg', color)}>
        <Icon className="h-6 w-6" aria-hidden="true" />
      </div>
      <h3 className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
        {title}
      </h3>
      <p className="mt-2 text-sm text-gray-600 leading-relaxed">{description}</p>
      <div className="mt-4 flex items-center text-sm font-medium text-blue-600 group-hover:translate-x-1 transition-transform">
        Explore
        <svg
          className="ml-1 h-4 w-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </Link>
  );
}