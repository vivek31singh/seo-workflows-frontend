import Link from 'next/link';
import { Tool } from '@/types';
import { ArrowRight } from 'lucide-react';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  const categoryColors: Record<string, string> = {
    'Data Analysis': 'bg-purple-100 text-purple-800',
    'Relevance': 'bg-blue-100 text-blue-800',
    'Technical': 'bg-green-100 text-green-800',
    'Authority': 'bg-orange-100 text-orange-800',
  };

  const categoryColor = categoryColors[tool.category] || 'bg-gray-100 text-gray-800';

  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="group p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all duration-200 cursor-pointer">
        <div className="flex items-start justify-between mb-3">\n          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${categoryColor}`}>
            {tool.category}
          </span>
          <ArrowRight className="h-5 w-5 text-gray-400 group-hover:text-blue-600 transition-colors" />
        </div>
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {tool.name}
        </h3>
        <p className="text-sm text-gray-600 line-clamp-2">
          {tool.shortDescription}
        </p>
      </div>
    </Link>
  );
}