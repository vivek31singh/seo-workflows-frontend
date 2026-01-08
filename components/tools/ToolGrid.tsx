import { ToolCard } from './ToolCard';
import { Tool } from '@/types';

interface ToolGridProps {
  tools: Tool[];
}

export const ToolGrid = ({ tools }: ToolGridProps) => {
  if (tools.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-gray-500 text-lg">No tools found matching your criteria.</p>
        <p className="text-gray-400 text-sm mt-2">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      role="list"
      aria-label="List of SEO tools"
    >
      {tools.map((tool) => (
        <ToolCard key={tool.slug} tool={tool} />
      ))}
    </div>
  );
};
