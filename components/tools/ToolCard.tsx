import Link from 'next/link';
import { Card, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/Card';
import { Badge } from '@/components/ui/Badge';
import { ArrowRight } from 'lucide-react';
import { Tool } from '@/types';

interface ToolCardProps {
  tool: Tool;
}

const categoryColors: Record<string, string> = {
  'Data Analysis': 'bg-blue-100 text-blue-700 border-blue-200',
  Relevance: 'bg-green-100 text-green-700 border-green-200',
  Technical: 'bg-orange-100 text-orange-700 border-orange-200',
  Authority: 'bg-purple-100 text-purple-700 border-purple-200',
};

export const ToolCard = ({ tool }: ToolCardProps) => {
  const categoryColorClass = categoryColors[tool.category] || categoryColors['Technical'];

  return (
    <Link href={`/tools/${tool.slug}`} className="block h-full">
      <Card className="h-full flex flex-col hover:border-primary-300 transition-colors group">
        <CardHeader>
          <div className="flex items-start justify-between gap-2">
            <CardTitle className="group-hover:text-primary-600 transition-colors">
              {tool.name}
            </CardTitle>
            <Badge className={categoryColorClass}>{tool.category}</Badge>
          </div>
          <CardDescription className="mt-2 line-clamp-2">
            {tool.shortDescription}
          </CardDescription>
        </CardHeader>
        <CardFooter className="mt-auto pt-4">
          <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
            Open Tool
            <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </span>
        </CardFooter>
      </Card>
    </Link>
  );
};
