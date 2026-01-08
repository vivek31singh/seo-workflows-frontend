import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

export interface ResourceCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  link?: string;
  className?: string;
}

export function ResourceCard({
  title,
  description,
  icon: Icon,
  link,
  className,
}: ResourceCardProps) {
  const cardContent = (
    <div
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-lg border bg-white p-6 shadow-sm transition-all hover:shadow-md",
        link && "cursor-pointer hover:border-primary-500 hover:border-l-4",
        className
      )}
    >
      {Icon && (
        <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary-50 text-primary-600 transition-colors group-hover:bg-primary-100">
          <Icon className="h-6 w-6" />
        </div>
      )}
      <h3 className="mb-2 text-lg font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
        {title}
      </h3>
      <p className="flex-1 text-sm text-gray-600 line-clamp-3">{description}</p>
      {link && (
        <div className="mt-4 flex items-center text-sm font-medium text-primary-600">
          Learn more
          <svg className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      )}
    </div>
  );

  if (link) {
    return (
      <a href={link} className="block">
        {cardContent}
      </a>
    );
  }

  return cardContent;
}
