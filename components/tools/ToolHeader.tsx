import type { Tool } from '@/types';
import { Badge } from '@/components/ui/Badge';
import { ArrowLeft } from 'lucide-react';
import Link from 'next/link';

interface ToolHeaderProps {
  tool: Tool;
}

export function ToolHeader({ tool }: ToolHeaderProps) {
  return (
    <div className="space-y-4">
      <Link
        href="/tools"
        className="inline-flex items-center text-sm text-gray-600 hover:text-gray-900 transition-colors"
      >
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Tools
      </Link>
      
      <div>
        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-3xl font-bold text-gray-900">{tool.name}</h1>
          <Badge variant="secondary">{tool.category}</Badge>
        </div>
        <p className="text-lg text-gray-600">{tool.shortDescription}</p>
      </div>
      
      {tool.longDescription && (
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700">{tool.longDescription}</p>
        </div>
      )}
    </div>
  );
}