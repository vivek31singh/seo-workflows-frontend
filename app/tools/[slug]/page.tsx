import { notFound } from 'next/navigation';
import tools from '@/data/tools.json';
import { ToolHeader } from '@/components/tools/ToolHeader';
import { ToolForm } from '@/components/tools/ToolForm';
import type { Tool } from '@/types';

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ToolDetailPage({ params }: PageProps) {
  const tool = (tools as Tool[]).find((t) => t.slug === params.slug);

  if (!tool) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 py-8 sm:px-6 lg:px-8">
        <ToolHeader tool={tool} />
        <div className="mt-8 grid gap-8 lg:grid-cols-1">
          <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Run Tool</h2>
            <ToolForm tool={tool} />
          </div>
        </div>
      </div>
    </div>
  );
}

export function generateMetadata({ params }: PageProps) {
  const tool = (tools as Tool[]).find((t) => t.slug === params.slug);
  
  return {
    title: tool ? `${tool.name} | SEO Workflows` : 'Tool Not Found',
    description: tool?.shortDescription,
  };
}