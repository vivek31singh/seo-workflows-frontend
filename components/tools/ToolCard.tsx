import Link from 'next/link';
import { Card } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import type { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Card className="group h-full flex flex-col hover:shadow-lg transition-shadow duration-200">
      <div className="p-6 flex flex-col flex-1">
        <div className="flex items-start justify-between mb-3">
          <div className="flex-1">
            <Link 
              href={`/tools/${tool.slug}`}
              className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors"
            >
              {tool.name}
            </Link>
          </div>
          <Badge variant="secondary" className="ml-2">
            {tool.category}
          </Badge>
        </div>
        <p className="text-gray-600 text-sm mb-4 flex-1">
          {tool.shortDescription}
        </p>
        <Link
          href={`/tools/${tool.slug}`}
          className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors mt-auto"
        >
          Use Tool
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </Card>
  );
}